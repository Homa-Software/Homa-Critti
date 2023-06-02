defmodule Critti.Repo do
  use Ecto.Repo,
    otp_app: :critti,
    adapter: Ecto.Adapters.Postgres
end
