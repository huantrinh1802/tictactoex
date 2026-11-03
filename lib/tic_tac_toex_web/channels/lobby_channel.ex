defmodule TicTacToexWeb.LobbyChannel do
  use TicTacToexWeb, :channel
  alias TicTacToexWeb.Presence
  alias TicTacToex.ChannelRegistry

  @min_size 3
  @max_size 30

  @impl true
  def join("lobby", _payload, socket) do
    send(self(), :after_join)
    {:ok, socket}
  end

  @impl true
  def handle_in("create_room", payload, socket) do
    case validate_room(payload) do
      {:ok, size, winning} ->
        case register_room(size, winning) do
          {:ok, name} ->
            broadcast(socket, "room_changed", %{rooms: room_list()})
            {:reply, {:ok, %{room: name}}, socket}

          :error ->
            {:reply, {:error, %{reason: "could not create a room, try again"}}, socket}
        end

      :error ->
        {:reply,
         {:error,
          %{
            reason:
              "size must be #{@min_size}-#{@max_size} and winning length between 3 and the size"
          }}, socket}
    end
  end

  # Boards are square; the client sends height/width/winning straight from a form.
  defp validate_room(%{"height" => size, "winning" => winning} = payload)
       when is_integer(size) and is_integer(winning) and size in @min_size..@max_size and
              winning >= 3 and winning <= size do
    if Map.get(payload, "width", size) == size, do: {:ok, size, winning}, else: :error
  end

  defp validate_room(_payload), do: :error

  # Random names can collide; never overwrite a room that is in use.
  defp register_room(size, winning, attempts \\ 5)
  defp register_room(_size, _winning, 0), do: :error

  defp register_room(size, winning, attempts) do
    name = UniqueNamesGenerator.generate([:adjectives, :animals])
    metadata = %{joined_at: DateTime.utc_now(), height: size, width: size, winning: winning}

    case ChannelRegistry.register_channel(name, metadata) do
      {:ok, _} -> {:ok, name}
      {:error, :already_exists} -> register_room(size, winning, attempts - 1)
    end
  end

  # Members are user ids; emails are never sent to other players.
  defp room_list do
    ChannelRegistry.list_all_channels()
    |> Map.new(fn {topic, channel} ->
      {topic,
       %{
         members: channel.members,
         height: channel.metadata.height,
         width: channel.metadata.width
       }}
    end)
  end

  @impl true
  def handle_info(:after_join, socket) do
    {:ok, _} =
      Presence.track(socket, "lobby", %{
        online_at: inspect(System.system_time(:second)),
        token: socket.assigns.user_id
      })

    push(socket, "presence_state", Presence.list(socket))
    push(socket, "channel_list", %{rooms: room_list()})

    {:noreply, socket}
  end
end
