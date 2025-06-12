defmodule TicTacToex.Repo.Migrations.CreateScoreboards do
  use Ecto.Migration

  def change do
    create table(:scoreboards, primary_key: true) do
      add :player_a_id, references(:users, on_delete: :nothing), null: false
      add :player_b_id, references(:users, on_delete: :nothing), null: false

      timestamps(type: :utc_datetime)
    end

  end
end
