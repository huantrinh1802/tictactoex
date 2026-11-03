defmodule TicTacToexWeb.RoomChannelTest do
  use TicTacToexWeb.ChannelCase

  alias TicTacToex.ChannelRegistry
  alias TicTacToexWeb.{RoomChannel, UserSocket}

  # ChannelRegistry is a global, named ETS table, so every test uses its own room name.
  defp register_room(size \\ 3, winning \\ 3) do
    room = "test_room_#{System.unique_integer([:positive])}_x"

    ChannelRegistry.register_channel(room, %{
      joined_at: DateTime.utc_now(),
      height: size,
      width: size,
      winning: winning
    })

    on_exit(fn -> ChannelRegistry.unregister_channel(room) end)
    room
  end

  # Channel tests bypass UserSocket.connect/3, so set the assigns it would set.
  defp user_socket(user_id) do
    socket(UserSocket, nil, %{user_id: user_id, user_name: "Player #{user_id}"})
  end

  # Joins and subscribes the test process to the room topic (sees broadcasts).
  defp join_room(room, user_id, payload \\ %{}) do
    user_id |> user_socket() |> subscribe_and_join(RoomChannel, "room:" <> room, payload)
  end

  # Joins without subscribing again; this player's pushes still reach the test process.
  defp join_opponent(room, user_id) do
    user_id |> user_socket() |> join(RoomChannel, "room:" <> room, %{})
  end

  defp play(socket, x, y, extra \\ %{}) do
    ref = push(socket, "play", Map.merge(%{"x" => x, "y" => y}, extra))
    assert_reply(ref, status, reply)
    {status, reply}
  end

  defp other("x"), do: "o"
  defp other("o"), do: "x"

  # Alice creates the game and syncs it to Bob, as Game.svelte does. Returns the
  # sockets keyed by their server-assigned marks, and whose turn it is.
  defp start_game(size \\ 3, winning \\ 3) do
    room = register_room(size, winning)
    {:ok, _, alice} = join_room(room, 1)
    {:ok, _, bob} = join_opponent(room, 2)

    ref = push(alice, "generate_board", %{})
    assert_reply(ref, :ok, %{board: board, turn: turn, player: alice_mark})

    push(alice, "sync_game", %{"score_board" => %{}, "winner" => nil, "win_coords" => []})
    bob_mark = other(alice_mark)
    assert_push("sync_game", %{"board" => ^board, "turn" => ^turn, "player" => ^bob_mark})

    %{room: room, by_mark: %{alice_mark => alice, bob_mark => bob}, turn: turn, board: board}
  end

  # Plays `mark`'s move and waits until the opponent's channel has seen it.
  defp move(%{by_mark: by_mark}, mark, x, y) do
    result = play(by_mark[mark], x, y)

    case result do
      {:ok, %{game_over: true}} -> assert_push("game_over", %{"x" => ^x, "y" => ^y})
      {:ok, _} -> assert_push("played", %{"x" => ^x, "y" => ^y, "player" => ^mark})
      _ -> :ok
    end

    result
  end

  describe "join" do
    test "rejects rooms that are not registered" do
      assert {:error, %{reason: "room not found"}} = join_room("no_such_room", 1)
    end

    test "identifies the player from the socket, ignoring the join payload" do
      room = register_room()

      assert {:ok, _, _socket} =
               join_room(room, 1, %{"token" => "victim@example.com", "name" => "Mallory"})

      assert [%{members: [1], active_members: [1]}] = ChannelRegistry.get_channels_by_topic(room)

      assert_push("presence_state", presences)
      assert %{^room => %{metas: [%{token: 1, name: "Player 1"}]}} = presences
    end

    test "admits two players and lets them reconnect, but no third player" do
      room = register_room()
      {:ok, _, _} = join_room(room, 1)
      {:ok, _, _} = join_opponent(room, 2)

      assert {:error, %{reason: "room is full"}} = join_opponent(room, 3)
      assert {:ok, _, _} = join_opponent(room, 2)
    end

    test "tells the lobby about the room's members by user id" do
      room = register_room()
      TicTacToexWeb.Endpoint.subscribe("lobby")

      {:ok, _, _socket} = join_room(room, 1)

      assert_receive %Phoenix.Socket.Broadcast{
        topic: "lobby",
        event: "room_changed",
        payload: %{rooms: %{^room => %{members: [1], height: 3, width: 3}}}
      }
    end

    test "removes the room once its last member leaves" do
      room = register_room()
      {:ok, _, socket} = join_room(room, 1)

      Process.unlink(socket.channel_pid)
      monitor = Process.monitor(socket.channel_pid)
      leave(socket)
      assert_receive {:DOWN, ^monitor, :process, _, _}

      assert ChannelRegistry.get_channels_by_topic(room) == []
    end
  end

  describe "a single connection" do
    test "generate_board returns an empty board sized from the room metadata" do
      room = register_room(4, 3)
      {:ok, _, socket} = join_room(room, 1)

      ref = push(socket, "generate_board", %{})
      assert_reply(ref, :ok, %{board: board, turn: turn, player: player})

      assert board == List.duplicate(List.duplicate("", 4), 4)
      assert turn in ["x", "o"]
      assert player in ["x", "o"]
    end

    test "cannot move before a board exists" do
      room = register_room()
      {:ok, _, socket} = join_room(room, 1)

      assert {:error, %{reason: "Invalid move"}} = play(socket, 0, 0, %{"player" => "x"})
      assert {:error, %{reason: "Invalid move"}} = play(socket, 0, 0, %{"player" => "o"})
    end

    test "sync_game without a game of its own broadcasts nothing" do
      room = register_room()
      {:ok, _, socket} = join_room(room, 1)

      push(socket, "sync_game", %{"board" => [["x", "x", "x"]], "turn" => "x", "player" => "o"})
      refute_broadcast("sync_game", _)
    end
  end

  describe "two players" do
    setup do
      start_game()
    end

    test "sync_game sends the server's board, ignoring a forged one", %{by_mark: by_mark} do
      [mark | _] = Map.keys(by_mark)

      push(by_mark[mark], "sync_game", %{
        "board" => [["x", "x", "x"], ["", "", ""], ["", "", ""]],
        "turn" => "x",
        "player" => "x"
      })

      opponent = other(mark)
      empty = List.duplicate(List.duplicate("", 3), 3)
      assert_push("sync_game", %{"board" => ^empty, "player" => ^opponent})
    end

    test "a move places the mover's mark, flips the turn and notifies the opponent", ctx do
      %{by_mark: by_mark, turn: turn} = ctx
      next = other(turn)

      assert {:ok, %{board: [[^turn, "", ""], ["", "", ""], ["", "", ""]], turn: ^next}} =
               play(by_mark[turn], 0, 0)

      assert_push("played", %{"x" => 0, "y" => 0, "player" => ^turn, "turn" => ^next})
      assert_broadcast("played", %{"player" => ^turn})
    end

    test "the client cannot choose which mark it plays", %{by_mark: by_mark, turn: turn} do
      waiting = other(turn)

      # The waiting player claims to be the player whose turn it is.
      assert {:error, %{reason: "Invalid move"}} =
               play(by_mark[waiting], 0, 0, %{"player" => turn})

      # The player in turn claims the other mark: their own mark is placed anyway.
      assert {:ok, %{board: [[^turn, "", ""], _, _]}} =
               play(by_mark[turn], 0, 0, %{"player" => waiting})
    end

    test "rejects moves out of turn", %{by_mark: by_mark, turn: turn} do
      assert {:error, %{reason: "Invalid move"}} = play(by_mark[other(turn)], 0, 0)
      refute_broadcast("played", _)
    end

    test "rejects moves on an occupied cell", ctx do
      %{turn: p1} = ctx
      p2 = other(p1)

      assert {:ok, _} = move(ctx, p1, 1, 1)
      assert {:error, %{reason: "Invalid move"}} = move(ctx, p2, 1, 1)

      # The failed move did not use up p2's turn.
      assert {:ok, %{board: [_, [^p2, ^p1, ""], _]}} = move(ctx, p2, 1, 0)
    end

    test "rejects moves outside the board", %{by_mark: by_mark, turn: turn} do
      for {x, y} <- [{3, 0}, {0, 3}, {-1, 0}, {0, -1}] do
        assert {:error, %{reason: "Invalid move"}} = play(by_mark[turn], x, y)
      end

      assert {:error, _} = play(by_mark[turn], "0", 0)
    end

    test "completing a row ends the game for both players", ctx do
      %{by_mark: by_mark, turn: p1} = ctx
      p2 = other(p1)

      for {mark, x, y} <- [{p1, 0, 0}, {p2, 1, 0}, {p1, 0, 1}, {p2, 1, 1}] do
        assert {:ok, %{turn: _}} = move(ctx, mark, x, y)
      end

      assert {:ok, %{game_over: true, winner: ^p1, win_coords: [[0, 0], [0, 1], [0, 2]]}} =
               move(ctx, p1, 0, 2)

      assert_broadcast("game_over", %{"winner" => ^p1})

      # Nobody can move on a finished board until a new one is generated.
      assert {:error, _} = play(by_mark[p2], 2, 2)
      assert {:error, _} = play(by_mark[p1], 2, 2)
    end

    test "the game ends in a draw as soon as nobody can win", ctx do
      %{turn: p1} = ctx
      p2 = other(p1)

      moves = [
        {p1, 0, 0},
        {p2, 0, 1},
        {p1, 0, 2},
        {p2, 1, 1},
        {p1, 1, 0},
        {p2, 2, 0},
        {p1, 2, 1}
      ]

      for {mark, x, y} <- moves do
        assert {:ok, %{turn: _}} = move(ctx, mark, x, y)
      end

      # p1 p2 p1 / p1 p2 p2 / p2 p1 __ : the last cell can't complete any line.
      assert {:ok, %{game_over: true, draw: true}} = move(ctx, p2, 1, 2)
      assert_broadcast("game_over", %{"draw" => true, "winner" => nil})
    end

    test "new game prompts are relayed to the opponent", %{by_mark: by_mark} do
      [first, second] = Map.values(by_mark)

      push(first, "prompt_new_game", %{})
      assert_broadcast("prompt_new_game", %{})

      push(second, "decline_new_game", %{})
      assert_broadcast("new_game_declined", %{})
    end
  end

  describe "check_winner?/2" do
    test "finds a diagonal win" do
      board = [
        ["x", "o", ""],
        ["o", "x", ""],
        ["", "", "x"]
      ]

      assert {:ok, "x", [{0, 0}, {1, 1}, {2, 2}]} = RoomChannel.check_winner?(board, 3)
    end

    test "finds an anti-diagonal win" do
      board = [
        ["x", "x", "o"],
        ["", "o", ""],
        ["o", "", "x"]
      ]

      assert {:ok, "o", coords} = RoomChannel.check_winner?(board, 3)
      assert Enum.sort(coords) == [{0, 2}, {1, 1}, {2, 0}]
    end

    test "finds a column win" do
      board = [
        ["", "o", "x"],
        ["", "o", "x"],
        ["", "", "x"]
      ]

      assert {:ok, "x", [{0, 2}, {1, 2}, {2, 2}]} = RoomChannel.check_winner?(board, 3)
    end

    test "uses the room's win length on larger boards" do
      board = [
        ["", "o", "o", "o"],
        ["", "", "", ""],
        ["", "", "x", ""],
        ["x", "", "", ""]
      ]

      assert {:ok, "o", [{0, 1}, {0, 2}, {0, 3}]} = RoomChannel.check_winner?(board, 3)
      assert RoomChannel.check_winner?(board, 4) == nil
    end

    test "returns nil when nobody has won" do
      assert RoomChannel.check_winner?(RoomChannel.new_board(3, 3), 3) == nil
    end
  end

  describe "draw?/2" do
    test "is true for a full board without a winner" do
      board = [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"]
      ]

      assert RoomChannel.check_winner?(board, 3) == nil
      assert RoomChannel.draw?(board, 3)
    end

    test "is true early when no line can still be won" do
      board = [
        ["x", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", ""]
      ]

      assert RoomChannel.draw?(board, 3)
    end

    test "is false while a line can still be won" do
      board = [
        ["x", "o", ""],
        ["", "", ""],
        ["", "", ""]
      ]

      refute RoomChannel.draw?(board, 3)
    end

    test "is false for an empty board" do
      refute RoomChannel.draw?(RoomChannel.new_board(3, 3), 3)
      refute RoomChannel.draw?(RoomChannel.new_board(5, 5), 4)
    end

    test "counts an untouched line as still winnable" do
      # Every other line is blocked, but the main diagonal is still empty.
      board = [
        ["", "o", "x"],
        ["x", "", "o"],
        ["o", "x", ""]
      ]

      refute RoomChannel.draw?(board, 3)
    end
  end
end
