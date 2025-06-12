defmodule TicTacToexWeb.ScoreboardLive do
  use TicTacToexWeb, :live_view
  alias TicTacToex.Scoreboard

  def render(assigns) do
    ~H"""
    <.svelte name="Scoreboard" props={%{user: @user}} />
    """
  end

  def mount(_params, _session, socket) do
    user =
      socket.assigns.current_user
      |> Map.take([:id, :email, :name])

    scoreboards =
      Scoreboard.list_scoreboards()
      |> Enum.map(fn %{
                       games_history: games_history,
                       player_a_id: player_a_id,
                       player_b_id: player_b_id,
                       inserted_at: inserted_at,
                       updated_at: updated_at,
                       player_a: player_a,
                       player_b: player_b
                     } ->
        {player_a_score, player_b_score} =
          Enum.reduce(games_history, {0, 0}, fn game, {a_score, b_score} ->
            winner = game["winner"]

            a_score_update = if winner == player_a_id, do: 1, else: 0
            b_score_update = if winner == player_b_id, do: 1, else: 0

            {a_score + a_score_update, b_score + b_score_update}
          end)

        %{
          games_history: games_history,
          inserted_at: inserted_at,
          updated_at: updated_at,
          player_a: player_a,
          player_b: player_b,
          player_a_score: player_a_score,
          player_b_score: player_b_score
        }
      end)

    {:ok, assign(socket, :user, user) |> assign(:scoreboards, scoreboards)}
  end
end
