defmodule TicTacToexWeb.LobbyChannelTest do
  use TicTacToexWeb.ChannelCase

  alias TicTacToex.ChannelRegistry
  alias TicTacToexWeb.{LobbyChannel, UserSocket}

  setup do
    {:ok, _, socket} =
      UserSocket
      |> socket(nil, %{token: "a@example.com"})
      |> subscribe_and_join(LobbyChannel, "lobby", %{"token" => "a@example.com"})

    %{socket: socket}
  end

  test "pushes the current room list on join" do
    assert_push("channel_list", %{rooms: rooms})
    assert is_map(rooms)
  end

  test "create_room registers a room and broadcasts the updated list", %{socket: socket} do
    ref = push(socket, "create_room", %{"height" => 3, "width" => 3, "winning" => 3})
    assert_reply(ref, :ok, %{room: room})
    on_exit(fn -> ChannelRegistry.unregister_channel(room) end)

    assert [%{metadata: %{height: 3, width: 3, winning: 3}, members: []}] =
             ChannelRegistry.get_channels_by_topic(room)

    assert_broadcast("room_changed", %{rooms: %{^room => %{members: [], height: 3, width: 3}}})
  end
end
