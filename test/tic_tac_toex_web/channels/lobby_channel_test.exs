defmodule TicTacToexWeb.LobbyChannelTest do
  use TicTacToexWeb.ChannelCase

  alias TicTacToex.ChannelRegistry
  alias TicTacToexWeb.{LobbyChannel, UserSocket}

  setup do
    {:ok, _, socket} =
      UserSocket
      |> socket(nil, %{user_id: 1, user_name: "Player 1"})
      |> subscribe_and_join(LobbyChannel, "lobby", %{"token" => "ignored@example.com"})

    %{socket: socket}
  end

  defp create_room(socket, payload) do
    ref = push(socket, "create_room", payload)
    assert_reply(ref, status, reply)

    with {:ok, %{room: room}} <- {status, reply} do
      on_exit(fn -> ChannelRegistry.unregister_channel(room) end)
    end

    {status, reply}
  end

  test "pushes the room list and tracks presence by user id on join" do
    assert_push("channel_list", %{rooms: rooms})
    assert is_map(rooms)

    assert_push("presence_state", %{"lobby" => %{metas: metas}})
    assert Enum.any?(metas, &(&1.token == 1))
  end

  test "create_room registers a room and broadcasts the updated list", %{socket: socket} do
    assert {:ok, %{room: room}} =
             create_room(socket, %{"height" => 3, "width" => 3, "winning" => 3})

    assert [%{metadata: %{height: 3, width: 3, winning: 3}, members: []}] =
             ChannelRegistry.get_channels_by_topic(room)

    assert_broadcast("room_changed", %{rooms: %{^room => %{members: [], height: 3, width: 3}}})
  end

  test "create_room accepts the client's default 20x20 board with 5 in a row", %{
    socket: socket
  } do
    assert {:ok, _} = create_room(socket, %{"height" => 20, "width" => 20, "winning" => 5})
  end

  test "create_room rejects invalid board settings", %{socket: socket} do
    invalid = [
      %{"height" => 2, "width" => 2, "winning" => 2},
      %{"height" => 31, "width" => 31, "winning" => 3},
      %{"height" => 1_000_000, "width" => 1_000_000, "winning" => 3},
      %{"height" => 3, "width" => 3, "winning" => 4},
      %{"height" => 5, "width" => 3, "winning" => 3},
      %{"height" => "3", "width" => "3", "winning" => "3"},
      %{"height" => nil, "winning" => nil},
      %{}
    ]

    for payload <- invalid do
      assert {:error, %{reason: _}} = create_room(socket, payload)
    end

    refute_broadcast("room_changed", _)
  end
end
