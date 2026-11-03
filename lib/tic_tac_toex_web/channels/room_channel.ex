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
  def terminate(_reason, %{assigns: %{room: room, token: token}}) do
    # The room may already be gone (e.g. the last member left), so only
    # notify the lobby when the registry still knew about it.
    case ChannelRegistry.on_channel_event(room, "leave", token) do
      {:ok, _channel} -> broadcast_room_list()
      _ -> :ok
    end
  end

  # A rejected join never assigns :room, so there is nothing to clean up.
  def terminate(_reason, _socket), do: :ok

  defp broadcast_room_list do
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

  # A window of `win_length` cells can still be won by `player` as long as the
  # opponent has no mark in it (empty windows count, too).
  defp line_has_potential_win?(line, player, win_length) do
    line
    |> Enum.chunk_every(win_length, 1, :discard)
    |> Enum.any?(fn chunk -> Enum.all?(chunk, &(&1 in [player, @empty_cell])) end)
  end

  # A move is valid only for the player whose turn it is, on an empty cell
  # inside the board. There is no board until "generate_board"/"sync_game".
  defp valid_move?(%{board: board, turn: turn}, %{"x" => x, "y" => y, "player" => player})
       when is_list(board) and is_integer(x) and is_integer(y) and x >= 0 and y >= 0 do
    row = Enum.at(board, x)
    player == turn and is_list(row) and Enum.at(row, y) == @empty_cell
  end

  defp valid_move?(_assigns, _payload), do: false

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

  @impl true
  def handle_in("play", payload, socket) do
    if valid_move?(socket.assigns, payload) do
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
           assign(socket, :turn, nil)}

        nil ->
          if draw?(board, socket.assigns.winning) do
            broadcast_from!(socket, "game_over", %{
              "board" => board,
              "x" => payload["x"],
              "y" => payload["y"],
              "winner" => nil,
              "draw" => true
            })

            {:reply, {:ok, %{board: board, game_over: true, draw: true}},
             assign(socket, :turn, nil)}
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

  intercept(["played", "game_over", "sync_game"])

  @impl true
  def handle_out("played", payload, socket) do
    socket = assign(socket, :board, payload["board"]) |> assign(:turn, payload["turn"])
    push(socket, "played", payload)
    {:noreply, socket}
  end

  # Once a game is over it is nobody's turn, so further moves are rejected
  # until a new board is generated or synced.
  def handle_out("game_over", payload, socket) do
    socket = assign(socket, :board, payload["board"]) |> assign(:turn, nil)
    push(socket, "game_over", payload)
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
    broadcast_room_list()

    Presence.track(socket, socket.assigns.room, %{
      online_at: inspect(System.system_time(:second)),
      token: socket.assigns.token,
      name: socket.assigns.name
    })

    push(socket, "presence_state", Presence.list(socket))

    {:noreply, socket}
  end
end
