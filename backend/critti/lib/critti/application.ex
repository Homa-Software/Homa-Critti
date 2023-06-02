defmodule Critti.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      CrittiWeb.Telemetry,
      # Start the Ecto repository
      Critti.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: Critti.PubSub},
      # Start Finch
      {Finch, name: Critti.Finch},
      # Start the Endpoint (http/https)
      CrittiWeb.Endpoint
      # Start a worker by calling: Critti.Worker.start_link(arg)
      # {Critti.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Critti.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    CrittiWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
