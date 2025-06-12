defmodule TicTacToexWeb.RoomChannel do
  @players ["x", "o"]
  @empty_cell ""
  use TicTacToexWeb, :channel
  alias TicTacToexWeb.Presence
  alias TicTacToex.ChannelRegistry

  @impl true
  def join("room:" <> room_id, payload, socket) do
    case ChannelRegistry.on_channel_event(
           room_id,
           "join",
           payload["token"]
         ) do
      {:ok, channel} ->
        socket =
          assign(socket, :token, payload["token"])
          |> assign(:name, payload["name"])
          |> assign(:room, room_id)
          |> assign(:winning, channel.metadata.winning)
          |> assign(:board_size, channel.metadata.height)
          |> assign(:turn, @players |> Enum.random())

        send(self(), :after_join)
        {:ok, socket}

      {_, _} ->
        {:error, %{reason: "room not found"}}
    end
  end

  @impl true
  def terminate(_reason, socket) do
    case ChannelRegistry.on_channel_event(
           socket.assigns.room,
           "leave",
           socket.assigns.token
         ) do
      {:ok, _channel} ->
        TicTacToexWeb.Endpoint.broadcast("lobby", "room_changed", %{
          rooms:
            ChannelRegistry.list_all_channels()
            |> Enum.map(fn {topic, channels} ->
              {topic,
               %{
                 members: channels.members,
                 height: channels.metadata.height,
                 width: channels.metadata.width
               }}
            end)
            |> Map.new()
        })
    end
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

  def no_possible_win_left?(board, win_length) do
    all_lines_with_coords(board)
    |> Enum.all?(fn {line, _coords} ->
      Enum.all?(@players, fn player ->
        not line_has_potential_win?(line, player, win_length)
      end)
    end)
  end

  defp line_has_potential_win?(line, player, win_length) do
    Enum.chunk_every(line, win_length, 1, :discard)
    |> Enum.any?(fn chunk ->
      count = Enum.count(chunk, &(&1 == player or &1 == ""))
      count == win_length and Enum.any?(chunk, &(&1 == player))
    end)
  end

  def draw?(board, win_length \\ 3) do
    Enum.all?(List.flatten(board), &(&1 in @players)) or
      no_possible_win_left?(board, win_length)
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

  def handle_in("play", payload, socket) do
    if get_in(socket.assigns, [:board, Access.at(payload["x"]), Access.at(payload["y"])]) == "" or
         socket.assigns.turn == payload["player"] do
      board =
        update_in(
          socket.assigns.board,
          [Access.at(payload["x"]), Access.at(payload["y"])],
          fn _ ->
            payload["player"]
          end
        )

      socket =
        assign(socket, :board, board)
        |> assign(
          :turn,
          @players
          |> Enum.find(fn player ->
            player != payload["player"]
          end)
        )

      # send(self(), :played, %{"board" => board})

      case check_winner?(board, socket.assigns.winning) do
        {:ok, winner, coords} ->
          win_coords = Enum.map(coords, fn {x, y} -> [x, y] end)

          broadcast_from!(socket, "game_over", %{
            "board" => board,
            "x" => payload["x"],
            "y" => payload["y"],
            "winner" => winner,
            "win_coords" => win_coords
          })

          {:reply,
           {:ok, %{board: board, game_over: true, winner: winner, win_coords: win_coords}},
           socket}

        nil ->
          if draw?(board, socket.assigns.winning) do
            broadcast_from!(socket, "game_over", %{
              "board" => board,
              "x" => payload["x"],
              "y" => payload["y"],
              "winner" => nil,
              "draw" => true
            })

            {:reply, {:ok, %{board: board, game_over: true, draw: true}}, socket}
          else
            broadcast_from!(socket, "played", %{
              "board" => board,
              "x" => payload["x"],
              "y" => payload["y"],
              "player" => payload["player"],
              "turn" => socket.assigns.turn
            })

            {:reply, {:ok, %{board: board, turn: socket.assigns.turn}}, socket}
          end
      end
    else
      {:reply, {:error, %{reason: "Invalid move"}}, socket}
    end
  end

  @impl true
  def handle_in("prompt_new_game", _payload, socket) do
    broadcast_from!(socket, "prompt_new_game", %{})
    {:noreply, socket}
  end

  @impl true
  def handle_in("generate_board", _payload, socket) do
    board = new_board(socket.assigns.board_size, socket.assigns.board_size)

    socket =
      socket
      |> assign(:board, board)
      |> assign(:turn, @players |> Enum.random())
      |> assign(:player, @players |> Enum.random())

    {:reply,
     {:ok,
      %{board: socket.assigns.board, turn: socket.assigns.turn, player: socket.assigns.player}},
     socket}
  end

  def handle_in("decline_new_game", _payload, socket) do
    broadcast_from!(socket, "new_game_declined", %{})
    {:noreply, socket}
  end

  def handle_in("sync_game", payload, socket) do
    socket =
      assign(socket, :board, payload["board"])
      |> assign(:turn, payload["turn"])

    broadcast_from!(socket, "sync_game", %{
      "board" => payload["board"],
      "turn" => payload["turn"],
      "player" =>
        @players
        |> Enum.find(fn player ->
          player != payload["player"]
        end),
      "score_board" => payload["score_board"],
      "winner" => payload["winner"],
      "win_coords" => payload["win_coords"]
    })

    {:noreply, socket}
  end

  intercept(["played", "sync_game"])

  @impl true
  def handle_out("played", payload, socket) do
    socket = assign(socket, :board, payload["board"]) |> assign(:turn, payload["turn"])
    push(socket, "played", payload)
    {:noreply, socket}
  end

  def handle_out("sync_game", payload, socket) do
    socket =
      assign(socket, :board, payload["board"])
      |> assign(:turn, payload["turn"])

    push(socket, "sync_game", payload)
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
             members: channels.members,
             height: channels.metadata.height,
             width: channels.metadata.width
           }}
        end)
        |> Map.new()
    })

    Presence.track(socket, socket.assigns.room, %{
      online_at: inspect(System.system_time(:second)),
      token: socket.assigns.token,
      name: socket.assigns.name
    })

    push(socket, "presence_state", Presence.list(socket))

    {:noreply, socket}
  end
end
