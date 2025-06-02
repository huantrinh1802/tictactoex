defmodule TicTacToex.ChannelRegistry do
  use GenServer
  require Logger

  @table_name :channel_registry_table

  def start_link(_opts) do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
  end

  def init(_) do
    # Create ETS table in the GenServer process
    table =
      :ets.new(@table_name, [
        :set,
        :named_table,
        :public,
        {:read_concurrency, true},
        {:write_concurrency, true}
      ])

    Logger.info("ChannelRegistry started with table: #{inspect(table)}")
    {:ok, %{table: table}}
  end

  # Public API - these functions call the GenServer to ensure table exists
  def register_channel(topic, metadata \\ %{}) do
    GenServer.call(__MODULE__, {:register, topic, metadata})
  end

  def on_channel_event(topic, event, token) do
    GenServer.call(__MODULE__, {:on_channel_event, topic, event, token})
  end

  def unregister_channel(topic) do
    GenServer.call(__MODULE__, {:unregister, topic, self()})
  end

  def list_all_channels() do
    GenServer.call(__MODULE__, :list_all)
  end

  def get_channel_count() do
    GenServer.call(__MODULE__, :count)
  end

  def get_channels_by_topic(topic_prefix) do
    GenServer.call(__MODULE__, {:by_topic, topic_prefix})
  end

  # GenServer callbacks
  def handle_call({:register, topic, metadata}, _from, state) do
    key = topic

    value = %{
      topic: topic,
      metadata: metadata,
      registered_at: System.system_time(:second),
      node: Node.self(),
      members: [],
      active_members: []
    }

    # Insert into ETS
    result = :ets.insert(@table_name, {key, value})

    # Monitor the process
    # Process.monitor(pid)

    Logger.debug("Registered channel: #{topic}")
    {:reply, {:ok, result}, state}
  end

  def handle_call({:on_channel_event, key, event, token}, _from, state) do
    case :ets.lookup(@table_name, key) do
      [{key, old_value}] ->
        case event do
          "join" ->
            if Enum.find(old_value.members, &(&1 == token)) == nil do
              old_value =
                Map.update!(old_value, :active_members, &(&1 ++ [token]))
                |> Map.update!(:members, &(&1 ++ [token]))

              :ets.insert(@table_name, {key, old_value})
              {:reply, {:ok, old_value}, state}
            else
              old_value =
                Map.update!(old_value, :active_members, &(&1 + 1))

              :ets.insert(@table_name, {key, old_value})
              {:reply, {:ok, old_value}, state}
            end

          "leave" ->
            if Enum.find(old_value.members, &(&1 == token)) != nil do
              old_value =
                old_value
                |> Map.update!(:active_members, &(&1 -- [token]))

              if length(old_value.active_members) <= 0 do
                :ets.delete(@table_name, key)
                {:reply, {:ok, old_value}, state}
              else
                :ets.insert(@table_name, {key, old_value})
                {:reply, {:ok, old_value}, state}
              end
            else
              {:reply, {:ok, old_value}, state}
            end
        end

      [] ->
        {:reply, {:not_found, nil}, state}
    end
  end

  def handle_call({:unregister, topic}, _from, state) do
    key = topic
    result = :ets.delete(@table_name, key)
    Logger.debug("Unregistered channel: #{topic}")
    {:reply, {:ok, result}, state}
  end

  def handle_call(:list_all, _from, state) do
    channels =
      :ets.tab2list(@table_name)

    {:reply, channels, state}
  end

  def handle_call(:count, _from, state) do
    # Count only alive processes
    count =
      :ets.tab2list(@table_name)

    {:reply, count, state}
  end

  def handle_call({:by_topic, topic_prefix}, _from, state) do
    channels =
      :ets.tab2list(@table_name)
      |> Enum.filter(fn {topic, _value} ->
        String.starts_with?(topic, topic_prefix)
      end)
      |> Enum.map(fn {_key, value} -> value end)

    {:reply, channels, state}
  end

  # Handle process down messages to clean up dead channels
  def handle_info({:DOWN, _ref, :process, pid, reason}, state) do
    Logger.debug("Process #{inspect(pid)} went down: #{inspect(reason)}")

    # Find and delete all entries for this pid
    pattern = {:_, :_}
    :ets.match_delete(@table_name, pattern)

    {:noreply, state}
  end

  def handle_info(:cleanup_dead_processes, state) do
    Logger.debug("Running cleanup of dead processes")

    dead_entries =
      :ets.tab2list(@table_name)

    # |> Enum.filter(fn {_topic, value} -> not Process.alive?(_value.pid) end)

    Enum.each(dead_entries, fn {topic, _value} ->
      :ets.delete(@table_name, topic)
    end)

    Logger.debug("Cleaned up #{length(dead_entries)} dead channel entries")

    # Schedule next cleanup
    Process.send_after(self(), :cleanup_dead_processes, 60_000)
    {:noreply, state}
  end

  def handle_info(msg, state) do
    Logger.debug("Received unexpected message: #{inspect(msg)}")
    {:noreply, state}
  end
end
