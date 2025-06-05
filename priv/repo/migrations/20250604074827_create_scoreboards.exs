defmodule TicTacToex.Repo.Migrations.CreateScoreboards do
  use Ecto.Migration

  def change do
    create table(:scoreboards, primary_key: false) do
      add :games_history, :map, null: false, default: %{}
      add :player_a_id, references(:users, on_delete: :nothing), null: false
      add :player_b_id, references(:users, on_delete: :nothing), null: false

      timestamps(type: :utc_datetime)
    end

    create index(:scoreboards, [:player_a_id])
    create index(:scoreboards, [:player_b_id])
    create unique_index(:scoreboards, [:player_a_id, :player_b_id])
  end
end
