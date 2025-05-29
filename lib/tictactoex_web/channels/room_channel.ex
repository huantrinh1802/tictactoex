defmodule TicTacToexWeb.RoomChannel do
  @players ["X", "O"]
  @empty_cell ""
  use TicTacToexWeb, :channel
  alias TicTacToexWeb.Presence
  alias TicTacToex.ChannelRegistry

  @impl true
  def join("room:" <> _private_room_id, payload, socket) do
    if authorized?(payload) do
      case ChannelRegistry.count_channels_if_topic_exists(
             _private_room_id,
             "join",
             payload["token"]
           ) do
        {:ok, channel} ->
          board = new_board(channel.metadata.height, channel.metadata.width)

          socket =
            assign(socket, :token, payload["token"])
            |> assign(:room, _private_room_id)
            |> assign(:board, board)
            |> assign(:winning, channel.metadata.winning)
            |> assign(:turn, "X")

          send(self(), :after_join)
          {:ok, socket}

        {_, _} ->
          {:error, %{reason: "room not found"}}
      end
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  @impl true
  def terminate(_reason, socket) do
    case ChannelRegistry.count_channels_if_topic_exists(
           socket.assigns.room,
           "leave",
           socket.assigns.token
         ) do
      {:ok, channel} ->
        TicTacToexWeb.Endpoint.broadcast("lobby", "room_changed", %{
          rooms:
            ChannelRegistry.list_all_channels()
            |> Enum.map(fn {topic, channels} ->
              {topic,
               %{
                 count: channels.count,
                 height: channels.metadata.height,
                 width: channels.metadata.width
               }}
            end)
            |> Map.new()
        })
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  @impl true
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (room:lobby).
  @impl true
  def handle_in("shout", payload, socket) do
    broadcast(socket, "shout", payload)
    {:noreply, socket}
  end

  def handle_in("start_board", payload, socket) do
    socket =
      assign(socket, :board, payload["board"])
      |> assign(:turn, "X")

    {:noreply, socket}
  end

  def new_board(height, width) do
    for _ <- 1..height, do: List.duplicate(@empty_cell, width)
  end

  def check_winner?(board, win_length \\ 3) do
    size = length(board)
    win_len = win_length || size

    all_lines_with_coords(board)
    |> Enum.find_value(fn {line, coords} ->
      Enum.find_value(@players, fn player ->
        case winning_chunk(line, coords, player, win_len) do
          nil -> nil
          chunk -> {:ok, player, chunk}
        end
      end)
    end)
  end

  def draw?(board, win_length \\ 3) do
    not check_winner?(board, win_length) and Enum.all?(List.flatten(board), &(&1 in @players))
  end

  defp winning_chunk(line, coords, player, win_length) do
    Enum.zip(line, coords)
    |> Enum.chunk_by(fn {val, _coord} -> val == player end)
    |> Enum.find(fn chunk ->
      case chunk do
        [{^player, _} | _] -> length(chunk) >= win_length
        _ -> false
      end
    end)
    |> case do
      nil -> nil
      chunk -> Enum.map(chunk, fn {_, coord} -> coord end)
    end
  end

  defp all_lines_with_coords(board) do
    size = length(board)

    rows =
      for {row, i} <- Enum.with_index(board) do
        coords = for j <- 0..(length(row) - 1), do: {i, j}
        {row, coords}
      end

    cols =
      board
      |> transpose()
      |> Enum.with_index()
      |> Enum.map(fn {col, j} ->
        coords = for i <- 0..(length(col) - 1), do: {i, j}
        {col, coords}
      end)

    diags = diagonals_with_coords(board)
    rows ++ cols ++ diags
  end

  defp transpose(rows), do: Enum.zip(rows) |> Enum.map(&Tuple.to_list/1)

  defp diagonals_with_coords(board) do
    size = length(board)

    diagonals1 =
      for d <- 0..(2 * size - 2), reduce: [] do
        acc ->
          diag =
            for i <- 0..d, j = d - i, i < size, j < size, do: {i, j}

          case diag do
            [] ->
              acc

            coords ->
              values = Enum.map(coords, fn {i, j} -> Enum.at(Enum.at(board, i), j) end)
              [{values, coords} | acc]
          end
      end

    # top-right to bottom-left diagonals
    diagonals2 =
      for d <- -(size - 1)..(size - 1), reduce: [] do
        acc ->
          diag =
            for i <- 0..(size - 1),
                j = i - d,
                j >= 0,
                j < size,
                do: {i, j}

          case diag do
            [] ->
              acc

            coords ->
              values = Enum.map(coords, fn {i, j} -> Enum.at(Enum.at(board, i), j) end)
              [{values, coords} | acc]
          end
      end

    diagonals1 ++ diagonals2
  end

  def handle_in("play", _payload, socket) do
    if get_in(socket.assigns, [:board, Access.at(_payload["x"]), Access.at(_payload["y"])]) == "" or
         socket.assigns.turn == _payload["player"] do
      board =
        update_in(
          socket.assigns.board,
          [Access.at(_payload["x"]), Access.at(_payload["y"])],
          fn _ ->
            _payload["player"]
          end
        )

      socket =
        assign(socket, :board, board)
        |> assign(
          :turn,
          case socket.assigns.turn do
            "X" -> "O"
            _ -> "X"
          end
        )

      # send(self(), :played, %{"board" => board})

      case check_winner?(board, socket.assigns.winning) do
        nil ->
          broadcast_from!(socket, "played", %{
            "board" => board,
            "x" => _payload["x"],
            "y" => _payload["y"],
            "player" => _payload["player"],
            "turn" => socket.assigns.turn
          })

          {:reply, {:ok, %{board: board, turn: socket.assigns.turn}}, socket}

        {:ok, _player, _coords} ->
          coords = Enum.map(_coords, fn {x, y} -> [x, y] end)

          broadcast_from!(socket, "game_over", %{
            "board" => board,
            "x" => _payload["x"],
            "y" => _payload["y"],
            "winner" => _player,
            "win_coords" => coords
          })

          {:reply, {:ok, %{board: board, game_over: true, winner: _player, win_coords: coords}},
           socket}
      end
    else
      {:reply, {:error, %{reason: "Invalid move"}}, socket}
    end
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end

  intercept(["played"])

  @impl true
  def handle_out("played", payload, socket) do
    socket = assign(socket, :board, payload["board"]) |> assign(:turn, payload["turn"])
    push(socket, "played", payload)
    {:noreply, socket}
  end

  @impl true
  def handle_info(:after_join, socket) do
    TicTacToexWeb.Endpoint.broadcast("lobby", "room_changed", %{
      rooms:
        TicTacToex.ChannelRegistry.list_all_channels()
        |> Enum.map(fn {topic, channels} ->
          {topic,
           %{
             count: channels.count,
             height: channels.metadata.height,
             width: channels.metadata.width
           }}
        end)
        |> Map.new()
    })

    push(socket, "board_created", %{board: socket.assigns.board, turn: socket.assigns.turn})

    Presence.track(socket, socket.assigns.room, %{
      online_at: inspect(System.system_time(:second)),
      token: socket.assigns.token
    })

    push(socket, "presence_state", Presence.list(socket))

    {:noreply, socket}
  end
end
