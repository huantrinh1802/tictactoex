defmodule TicTacToex.Repo.Migrations.AddMetadataColumnGames do
  use Ecto.Migration

  def change do
    alter table(:games) do
      add :metadata, :map
    end
  end
end
