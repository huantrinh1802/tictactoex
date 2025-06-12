defmodule TicTacToex.Scoreboard do
  use Ecto.Schema
  import Ecto.Query
  import Ecto.Changeset
  alias TicTacToex.Repo

  schema "scoreboards" do
    belongs_to(:player_a, TicTacToex.Accounts.User)
    belongs_to(:player_b, TicTacToex.Accounts.User)
    has_many(:games, TicTacToex.Game)
    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(scoreboard, attrs) do
    scoreboard
    |> validate_required([])
  end

  def list_scoreboards() do
    query =
      from(s0 in __MODULE__,
        join: s1 in assoc(s0, :player_a),
        join: s2 in assoc(s0, :player_b),
        join: s3 in assoc(s0, :games),
        select: %{
          player_a_id: s0.player_a_id,
          player_b_id: s0.player_b_id,
          inserted_at: s0.inserted_at,
          updated_at: s0.updated_at,
          player_a: %{id: s1.id, name: s1.name, email: s1.email},
          player_b: %{id: s2.id, name: s2.name, email: s2.email},
          games_history:
            type(
              fragment(
                "json_group_array(json_object('x_player_id', ?, 'o_player_id', ?, 'winner', ?, 'metadata', ?, 'inserted_at', ?, 'updated_at', ?))",
                s3.x_player_id,
                s3.o_player_id,
                s3.winner,
                s3.metadata,
                s3.inserted_at,
                s3.updated_at
              ),
              {:array, :map}
            )
        }
      )

    Repo.all(query)
  end

  def get_scoreboard_by_user_id!(user_id) do
    query =
      from(s0 in __MODULE__,
        join: s1 in assoc(s0, :player_a),
        join: s2 in assoc(s0, :player_b),
        join: s3 in assoc(s0, :games),
        select: %{
          player_a_id: s0.player_a_id,
          player_b_id: s0.player_b_id,
          inserted_at: s0.inserted_at,
          updated_at: s0.updated_at,
          player_a: %{id: s1.id, name: s1.name, email: s1.email},
          player_b: %{id: s2.id, name: s2.name, email: s2.email},
          games_history:
            type(
              fragment(
                "json_group_array(json_object('x_player_id', ?, 'o_player_id', ?, 'winner', ?, 'metadata', ?, 'inserted_at', ?, 'updated_at', ?))",
                s3.x_player_id,
                s3.o_player_id,
                s3.winner,
                s3.metadata,
                s3.inserted_at,
                s3.updated_at
              ),
              {:array, :map}
            )
        },
        where: s0.player_a_id == ^user_id or s0.player_b_id == ^user_id
      )

    Repo.all(query)
  end

  def calculate_score(games, user_id) do
    Enum.reduce(games, %{wins: 0, losses: 0, draws: 0}, fn game, acc ->
      winner = game["winner"]

      cond do
        winner == nil ->
          Map.update!(acc, :draws, &(&1 + 1))

        winner == user_id ->
          Map.update!(acc, :wins, &(&1 + 1))

        true ->
          Map.update!(acc, :losses, &(&1 + 1))
      end
    end)
  end
end
