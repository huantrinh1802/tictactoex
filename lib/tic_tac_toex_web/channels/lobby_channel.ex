defmodule TicTacToexWeb.LobbyChannel do
  use TicTacToexWeb, :channel
  alias TicTacToexWeb.Presence
  alias TicTacToex.ChannelRegistry

  @impl true
  def join("lobby", payload, socket) do
    send(self(), :after_join)

    socket =
      assign(socket, :token, payload["token"])

    {:ok, socket}
  end

  @impl true
  def handle_in("create_room", payload, socket) do
    name = UniqueNamesGenerator.generate([:adjectives, :animals])

    ChannelRegistry.register_channel(name, %{
      joined_at: DateTime.utc_now(),
      height: payload["height"],
      width: payload["width"],
      winning: payload["winning"]
    })

    broadcast(socket, "room_changed", %{
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

    {:reply, {:ok, %{room: name}}, socket}
  end

  @impl true
  def handle_info(:after_join, socket) do
    {:ok, _} =
      Presence.track(socket, "lobby", %{
        online_at: inspect(System.system_time(:second)),
        token: socket.assigns.token
      })

    push(socket, "presence_state", Presence.list(socket))

    push(
      socket,
      "channel_list",
      %{
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
      }
    )

    {:noreply, socket}
  end
end
