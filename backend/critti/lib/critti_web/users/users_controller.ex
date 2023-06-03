defmodule CrittiWeb.Users.UsersController do
  use CrittiWeb, :controller
  alias CrittiWeb.Users.UsersService
  alias CrittiWeb.Users.UsersModel

  action_fallback CrittiWeb.FallbackController

    def index(conn, _params) do
      users = UsersService.list_users()
      render(conn, :index, users: users)
    end

    def create(conn, %{"user" => user_params}) do
      with {:ok, %UsersModel{} = user} <- UsersService.create_user(user_params) do
        conn
        |> put_status(:created)
        |> put_resp_header("location", ~p"/api/users/#{user}")
        |> render(:show, user: user)
      end
    end

    def show(conn, %{"id" => id}) do
      user = UsersService.get_user!(id)
      render(conn, :show, user: user)
    end

    def update(conn, %{"id" => id, "user" => user_params}) do
      user = UsersService.get_user!(id)

      with {:ok, %UsersModel{} = user} <- UsersService.update_user(user, user_params) do
        render(conn, :show, user: user)
      end
    end

    def delete(conn, %{"id" => id}) do
      user = UsersService.get_user!(id)

      with {:ok, %UsersModel{}} <- UsersService.delete_user(user) do
        send_resp(conn, :no_content, "")
      end
    end
end