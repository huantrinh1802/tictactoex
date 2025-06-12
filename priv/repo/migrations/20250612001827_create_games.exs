defmodule TicTacToex.Repo.Migrations.CreateGames do
  use Ecto.Migration

  def change do
    create table(:games, primary_key: true) do
      add :X_player_id, references(:users, on_delete: :nothing), null: false
      add :O_player_id, references(:users, on_delete: :nothing), null: false
      add :winner, :id
      add :scoreboard_id, references(:scoreboards, on_delete: :delete_all), null: false

      timestamps(type: :utc_datetime)
    end

    create index(:games, [:X_player_id])
    create index(:games, [:O_player_id])
  end
end
