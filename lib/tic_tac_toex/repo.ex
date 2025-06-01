defmodule TicTacToex.Repo do
  use Ecto.Repo,
    otp_app: :tic_tac_toex,
    adapter: Ecto.Adapters.SQLite3
end
