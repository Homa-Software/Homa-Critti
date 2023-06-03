defmodule CrittiWeb.Users.UsersJSON do
  alias CrittiWeb.Users.UsersModel

  @doc """
  Renders a list of users.
  """
  def index(%{users: users}) do
    %{data: for(user <- users, do: data(user))}
  end

  @doc """
  Renders a single user.
  """
  def show(%{user: user}) do
    %{data: data(user)}
  end

  defp data(%UsersModel{} = user) do
    %{
      id: user.id
    }
  end
end
