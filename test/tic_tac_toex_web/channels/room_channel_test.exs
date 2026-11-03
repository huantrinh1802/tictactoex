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

  defp join_room(room, token) do
    UserSocket
    |> socket(nil, %{token: token})
    |> subscribe_and_join(RoomChannel, "room:" <> room, %{"token" => token, "name" => token})
  end

  defp new_game(socket) do
    ref = push(socket, "generate_board", %{})
    assert_reply(ref, :ok, %{turn: turn})
    turn
  end

  defp other("x"), do: "o"
  defp other("o"), do: "x"

  describe "join" do
    test "rejects rooms that are not registered" do
      assert {:error, %{reason: "room not found"}} = join_room("no_such_room", "a@example.com")
    end

    test "joins a registered room and records the member" do
      room = register_room()
      assert {:ok, _, _socket} = join_room(room, "a@example.com")

      assert [%{members: ["a@example.com"], active_members: ["a@example.com"]}] =
               ChannelRegistry.get_channels_by_topic(room)
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
      turn = new_game(socket)
      next = other(turn)

      ref = push(socket, "play", %{"x" => 0, "y" => 0, "player" => turn})
      assert_reply(ref, :ok, %{board: [[^turn, "", ""], ["", "", ""], ["", "", ""]], turn: ^next})

      assert_broadcast("played", %{"x" => 0, "y" => 0, "player" => ^turn, "turn" => ^next})
    end

    test "completing a row ends the game with the winner and winning cells" do
      room = register_room()
      {:ok, _, socket} = join_room(room, "a@example.com")
      p1 = new_game(socket)
      p2 = other(p1)

      for {x, y, player} <- [{0, 0, p1}, {1, 0, p2}, {0, 1, p1}, {1, 1, p2}] do
        ref = push(socket, "play", %{"x" => x, "y" => y, "player" => player})
        assert_reply(ref, :ok, %{turn: _})
      end

      ref = push(socket, "play", %{"x" => 0, "y" => 2, "player" => p1})

      assert_reply(ref, :ok, %{
        game_over: true,
        winner: ^p1,
        win_coords: [[0, 0], [0, 1], [0, 2]]
      })

      assert_broadcast("game_over", %{"winner" => ^p1})
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
  end
end
