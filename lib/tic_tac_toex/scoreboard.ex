defmodule TicTacToex.Scoreboard do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query

  alias TicTacToex.Repo

  schema "scoreboards" do
    field(:games_history, :map)
    field(:player_a_id, :id)
    field(:player_b_id, :id)

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(scoreboard, attrs) do
    scoreboard
    |> cast(attrs, [:games_history])
    |> validate_required([])
  end

  def list_scoreboards() do
    query =
      from(s0 in __MODULE__)

    Repo.all(query)
  end
end
