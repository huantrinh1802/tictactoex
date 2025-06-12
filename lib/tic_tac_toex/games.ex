defmodule TicTacToex.Game do
  use Ecto.Schema
  import Ecto.Query
  import Ecto.Changeset
  alias TicTacToex.Repo

  @primary_key false
  schema "games" do
    field(:x_player_id, :id)
    field(:o_player_id, :id)
    field(:winner, :id)
    field(:metadata, :map)
    belongs_to(:scoreboard, TicTacToex.Scoreboard)

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(Game, attrs) do
    Game
    |> cast(attrs, [:metadata])
    |> validate_required([])
  end

  def list_Games() do
    query =
      from(s0 in __MODULE__)

    Repo.all(query)
  end
end
