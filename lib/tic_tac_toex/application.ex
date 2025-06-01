defmodule TicTacToex.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      {NodeJS.Supervisor, [path: LiveSvelte.SSR.NodeJS.server_path(), pool_size: 4]},
      TicTacToexWeb.Telemetry,
      TicTacToex.Repo,
      {Ecto.Migrator,
       repos: Application.fetch_env!(:tic_tac_toex, :ecto_repos), skip: skip_migrations?()},
      {DNSCluster, query: Application.get_env(:tic_tac_toex, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: TicTacToex.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: TicTacToex.Finch},
      # Start a worker by calling: TicTacToex.Worker.start_link(arg)
      # {TicTacToex.Worker, arg},
      # Start to serve requests, typically the last entry
      TicTacToexWeb.Endpoint,
      TicTacToexWeb.Presence,
      TicTacToex.ChannelRegistry
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: TicTacToex.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    TicTacToexWeb.Endpoint.config_change(changed, removed)
    :ok
  end

  defp skip_migrations?() do
    # By default, sqlite migrations are run when using a release
    System.get_env("RELEASE_NAME") != nil
  end
end
