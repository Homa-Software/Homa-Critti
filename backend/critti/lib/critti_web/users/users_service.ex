defmodule CrittiWeb.Users.UsersService do
  @moduledoc """
  The Admin context.
  """

  import Ecto.Query, warn: false
  alias Critti.Repo

  alias CrittiWeb.Users.UsersModel

  @doc """
  Returns the list of users.

  ## Examples

      iex> list_users()
      [%UsersModel{}, ...]

  """
  def list_users do
    Repo.all(UsersModel)
  end

  @doc """
  Gets a single user.

  Raises `Ecto.NoResultsError` if the User does not exist.

  ## Examples

      iex> get_user!(123)
      %UsersModel{}

      iex> get_user!(456)
      ** (Ecto.NoResultsError)

  """
  def get_user!(id), do: Repo.get!(UsersModel, id)

  @doc """
  Creates a user.

  ## Examples

      iex> create_user(%{field: value})
      {:ok, %UsersModel{}}

      iex> create_user(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_user(attrs \\ %{}) do
    %UsersModel{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a user.

  ## Examples

      iex> update_user(user, %{field: new_value})
      {:ok, %UsersModel{}}

      iex> update_user(user, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_user(%UsersModel{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a user.

  ## Examples

      iex> delete_user(user)
      {:ok, %UsersModel{}}

      iex> delete_user(user)
      {:error, %Ecto.Changeset{}}

  """
  def delete_user(%UsersModel{} = user) do
    Repo.delete(user)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking user changes.

  ## Examples

      iex> change_user(user)
      %Ecto.Changeset{data: %UsersModel{}}

  """
  def change_user(%UsersModel{} = user, attrs \\ %{}) do
    User.changeset(user, attrs)
  end
end
