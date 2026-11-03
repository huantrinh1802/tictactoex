defmodule TicTacToex.ChannelRegistryTest do
  # The registry is a single named GenServer/ETS table shared by all tests.
  use ExUnit.Case, async: false

  alias TicTacToex.ChannelRegistry

  setup do
    topic = "registry_test_#{System.unique_integer([:positive])}_x"
    ChannelRegistry.register_channel(topic, %{height: 3, width: 3, winning: 3})
    on_exit(fn -> ChannelRegistry.unregister_channel(topic) end)
    %{topic: topic}
  end

  test "register_channel/2 stores the room with no members", %{topic: topic} do
    assert [%{topic: ^topic, metadata: %{height: 3}, members: [], active_members: []}] =
             ChannelRegistry.get_channels_by_topic(topic)

    assert {^topic, _} = List.keyfind(ChannelRegistry.list_all_channels(), topic, 0)
  end

  test "register_channel/2 never replaces an existing room", %{topic: topic} do
    ChannelRegistry.on_channel_event(topic, "join", "a")

    assert {:error, :already_exists} =
             ChannelRegistry.register_channel(topic, %{height: 9, width: 9, winning: 5})

    assert [%{metadata: %{height: 3}, members: ["a"]}] =
             ChannelRegistry.get_channels_by_topic(topic)
  end

  test "a room admits two members; others are turned away", %{topic: topic} do
    ChannelRegistry.on_channel_event(topic, "join", "a")
    ChannelRegistry.on_channel_event(topic, "join", "b")

    assert {:full, %{members: ["a", "b"]}} = ChannelRegistry.on_channel_event(topic, "join", "c")

    # Existing members can still reconnect.
    assert {:ok, %{active_members: ["a", "b", "b"]}} =
             ChannelRegistry.on_channel_event(topic, "join", "b")
  end

  test "join adds a member once but tracks every active connection", %{topic: topic} do
    assert {:ok, %{members: ["a"], active_members: ["a"]}} =
             ChannelRegistry.on_channel_event(topic, "join", "a")

    assert {:ok, %{members: ["a"], active_members: ["a", "a"]}} =
             ChannelRegistry.on_channel_event(topic, "join", "a")

    assert {:ok, %{members: ["a", "b"], active_members: ["a", "a", "b"]}} =
             ChannelRegistry.on_channel_event(topic, "join", "b")
  end

  test "leave keeps the room while someone is still connected", %{topic: topic} do
    ChannelRegistry.on_channel_event(topic, "join", "a")
    ChannelRegistry.on_channel_event(topic, "join", "b")

    assert {:ok, %{members: ["a", "b"], active_members: ["b"]}} =
             ChannelRegistry.on_channel_event(topic, "leave", "a")

    assert [%{active_members: ["b"]}] = ChannelRegistry.get_channels_by_topic(topic)
  end

  test "leave by the last connected member deletes the room", %{topic: topic} do
    ChannelRegistry.on_channel_event(topic, "join", "a")
    assert {:ok, _} = ChannelRegistry.on_channel_event(topic, "leave", "a")
    assert ChannelRegistry.get_channels_by_topic(topic) == []
  end

  test "leave by a non-member changes nothing", %{topic: topic} do
    ChannelRegistry.on_channel_event(topic, "join", "a")

    assert {:ok, %{active_members: ["a"]}} =
             ChannelRegistry.on_channel_event(topic, "leave", "stranger")
  end

  test "events for unknown rooms report :not_found" do
    assert {:not_found, nil} = ChannelRegistry.on_channel_event("missing_room", "join", "a")
  end

  test "unregister_channel/1 removes the room", %{topic: topic} do
    assert {:ok, true} = ChannelRegistry.unregister_channel(topic)
    assert ChannelRegistry.get_channels_by_topic(topic) == []
  end
end
