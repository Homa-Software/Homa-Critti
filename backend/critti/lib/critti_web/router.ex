defmodule CrittiWeb.Router do
  use CrittiWeb, :router
  alias Users.UsersController
  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", CrittiWeb do
    pipe_through :api
    get "/users", UsersController, :index
    put "/users", UsersController, :edit
    post "/users", UsersController, :create
    delete "/users", UsersController, :delete
  end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:critti, :dev_routes) do
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      live_dashboard "/dashboard", metrics: CrittiWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
