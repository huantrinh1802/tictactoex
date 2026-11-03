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

  defp join_payload(token), do: %{"token" => token, "name" => token}

  # Joins and subscribes the test process to the room topic (sees broadcasts).
  defp join_room(room, token) do
    UserSocket
    |> socket(nil, %{token: token})
    |> subscribe_and_join(RoomChannel, "room:" <> room, join_payload(token))
  end

  # Joins a second player without subscribing again; their pushes still reach the test process.
  defp join_opponent(room, token) do
    UserSocket
    |> socket(nil, %{token: token})
    |> join(RoomChannel, "room:" <> room, join_payload(token))
  end

  defp new_game(socket) do
    ref = push(socket, "generate_board", %{})
    assert_reply(ref, :ok, %{board: board, turn: turn})
    {board, turn}
  end

  defp play(socket, x, y, player) do
    ref = push(socket, "play", %{"x" => x, "y" => y, "player" => player})
    assert_reply(ref, status, reply)
    {status, reply}
  end

  defp other("x"), do: "o"
  defp other("o"), do: "x"

  describe "join" do
    test "rejects rooms that are not registered" do
      assert {:error, %{reason: "room not found"}} = join_room("no_such_room", "a@example.com")
    end

    test "joins a registered room, records the member and tracks presence" do
      room = register_room()
      assert {:ok, _, _socket} = join_room(room, "a@example.com")

      assert [%{members: ["a@example.com"], active_members: ["a@example.com"]}] =
               ChannelRegistry.get_channels_by_topic(room)

      assert_push("presence_state", presences)
      assert %{^room => %{metas: [%{token: "a@example.com", name: "a@example.com"}]}} = presences
    end

    test "tells the lobby about the room's new members" do
      room = register_room()
      TicTacToexWeb.Endpoint.subscribe("lobby")

      {:ok, _, _socket} = join_room(room, "a@example.com")

      assert_receive %Phoenix.Socket.Broadcast{
        topic: "lobby",
        event: "room_changed",
        payload: %{rooms: %{^room => %{members: ["a@example.com"], height: 3, width: 3}}}
      }
    end

    test "removes the room once its last member leaves" do
      room = register_room()
      {:ok, _, socket} = join_room(room, "a@example.com")

      Process.unlink(socket.channel_pid)
      monitor = Process.monitor(socket.channel_pid)
      leave(socket)
      assert_receive {:DOWN, ^monitor, :process, _, _}

      assert ChannelRegistry.get_channels_by_topic(room) == []
    end
  end

  describe "gameplay" do
    test "generate_board returns an empty board sized from the room metadata" do
      room = register_room(4, 3)
      {:ok, _, socket} = join_room(room, "a@example.com")

      ref = push(socket, "generate_board", %{})
      assert_reply(ref, :ok, %{board: board, turn: turn, player: player})

      assert board == List.duplicate(List.duplicate("", 4), 4)
      assert turn in ["x", "o"]
      assert player in ["x", "o"]
    end

    test "play places a mark, flips the turn and notifies the opponent" do
      room = register_room()
      {:ok, _, socket} = join_room(room, "a@example.com")
      {_board, turn} = new_game(socket)
      next = other(turn)

      assert {:ok, %{board: [[^turn, "", ""], ["", "", ""], ["", "", ""]], turn: ^next}} =
               play(socket, 0, 0, turn)

      assert_broadcast("played", %{"x" => 0, "y" => 0, "player" => ^turn, "turn" => ^next})
    end

    test "rejects moves before a board exists" do
      room = register_room()
      {:ok, _, socket} = join_room(room, "a@example.com")

      assert {:error, %{reason: "Invalid move"}} = play(socket, 0, 0, "x")
      assert {:error, %{reason: "Invalid move"}} = play(socket, 0, 0, "o")
    end

    test "rejects moves out of turn" do
      room = register_room()
      {:ok, _, socket} = join_room(room, "a@example.com")
      {_board, turn} = new_game(socket)

      assert {:error, %{reason: "Invalid move"}} = play(socket, 0, 0, other(turn))
      refute_broadcast("played", _)
    end

    test "rejects moves on an occupied cell, even on the player's own turn" do
      room = register_room()
      {:ok, _, socket} = join_room(room, "a@example.com")
      {_board, turn} = new_game(socket)

      next = other(turn)

      assert {:ok, _} = play(socket, 1, 1, turn)
      assert {:error, %{reason: "Invalid move"}} = play(socket, 1, 1, next)

      # The failed move did not change whose turn it is.
      assert {:ok, %{board: [_, [^next, ^turn, ""], _]}} = play(socket, 1, 0, next)
    end

    test "rejects moves outside the board" do
      room = register_room()
      {:ok, _, socket} = join_room(room, "a@example.com")
      {_board, turn} = new_game(socket)

      for {x, y} <- [{3, 0}, {0, 3}, {-1, 0}, {0, -1}] do
        assert {:error, %{reason: "Invalid move"}} = play(socket, x, y, turn)
      end
    end

    test "completing a row ends the game with the winner and winning cells" do
      room = register_room()
      {:ok, _, socket} = join_room(room, "a@example.com")
      {_board, p1} = new_game(socket)
      p2 = other(p1)

      for {x, y, player} <- [{0, 0, p1}, {1, 0, p2}, {0, 1, p1}, {1, 1, p2}] do
        assert {:ok, %{turn: _}} = play(socket, x, y, player)
      end

      assert {:ok, %{game_over: true, winner: ^p1, win_coords: [[0, 0], [0, 1], [0, 2]]}} =
               play(socket, 0, 2, p1)

      assert_broadcast("game_over", %{"winner" => ^p1})

      # Nobody can move on a finished board until a new one is generated.
      assert {:error, _} = play(socket, 2, 2, p2)
      assert {:error, _} = play(socket, 2, 2, p1)
      {_board, turn} = new_game(socket)
      assert {:ok, _} = play(socket, 2, 2, turn)
    end

    test "the game ends in a draw as soon as nobody can win" do
      room = register_room()
      {:ok, _, socket} = join_room(room, "a@example.com")
      {_board, p1} = new_game(socket)
      p2 = other(p1)

      moves = [
        {0, 0, p1},
        {0, 1, p2},
        {0, 2, p1},
        {1, 1, p2},
        {1, 0, p1},
        {2, 0, p2},
        {2, 1, p1}
      ]

      for {x, y, player} <- moves do
        assert {:ok, %{turn: _}} = play(socket, x, y, player)
      end

      # p1 p2 p1 / p1 p2 p2 / p2 p1 __ : the last cell can't complete any line.
      assert {:ok, %{game_over: true, draw: true}} = play(socket, 1, 2, p2)
      assert_broadcast("game_over", %{"draw" => true, "winner" => nil})
    end
  end

  describe "two players" do
    setup do
      room = register_room()
      {:ok, _, alice} = join_room(room, "alice@example.com")
      {:ok, _, bob} = join_opponent(room, "bob@example.com")

      # Alice starts the game and syncs it to Bob, as Game.svelte does.
      {board, turn} = new_game(alice)

      push(alice, "sync_game", %{
        "board" => board,
        "turn" => turn,
        "player" => turn,
        "score_board" => %{},
        "winner" => nil,
        "win_coords" => []
      })

      assert_push("sync_game", %{"board" => ^board, "turn" => ^turn})

      %{alice: alice, bob: bob, alice_mark: turn, bob_mark: other(turn)}
    end

    test "sync_game gives the opponent the other mark", %{alice_mark: a, bob_mark: b} do
      assert_broadcast("sync_game", %{"player" => ^b})
      assert a != b
    end

    test "moves alternate between the players' channels", ctx do
      %{alice: alice, bob: bob, alice_mark: a, bob_mark: b} = ctx

      assert {:ok, %{turn: ^b}} = play(alice, 0, 0, a)
      assert_push("played", %{"player" => ^a, "turn" => ^b})

      # Bob's channel learnt about Alice's move, so it rejects a repeat and accepts his turn.
      assert {:error, _} = play(bob, 0, 0, b)
      assert {:ok, %{turn: ^a, board: [[^a, ^b, ""], _, _]}} = play(bob, 0, 1, b)

      # ...and Alice's channel learnt about Bob's.
      assert {:error, _} = play(alice, 0, 1, a)
    end

    test "the loser's channel accepts no further moves", ctx do
      %{alice: alice, bob: bob, alice_mark: a, bob_mark: b} = ctx

      play(alice, 0, 0, a)
      play(bob, 1, 0, b)
      play(alice, 0, 1, a)
      play(bob, 1, 1, b)
      assert {:ok, %{winner: ^a}} = play(alice, 0, 2, a)

      assert_push("game_over", %{"winner" => ^a})
      assert {:error, _} = play(bob, 2, 2, b)
    end

    test "new game prompts are relayed to the opponent", %{alice: alice, bob: bob} do
      push(alice, "prompt_new_game", %{})
      assert_broadcast("prompt_new_game", %{})

      push(bob, "decline_new_game", %{})
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
