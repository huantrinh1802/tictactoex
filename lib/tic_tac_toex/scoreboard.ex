defmodule TicTacToex.Scoreboard do
  use Ecto.Schema
  import Ecto.Changeset

  schema "scoreboards" do
    field :games_history, :map
    field :player_a_id, :id
    field :player_b_id, :id

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(scoreboard, attrs) do
    scoreboard
    |> cast(attrs, [:games_history])
    |> validate_required([])
  end
end
