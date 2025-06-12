defmodule TicTacToexWeb.ScoreboardLive do
  use TicTacToexWeb, :live_view
  alias TicTacToex.Scoreboard

  def render(assigns) do
    ~H"""
    <.svelte name="Scoreboard" props={%{user: @user, scoreboards: @scoreboards}} />
    """
  end

  def mount(_params, _session, socket) do
    user =
      socket.assigns.current_user
      |> Map.take([:id, :email, :name])

    scoreboards =
      Scoreboard.get_scoreboard_by_user_id!(user.id)
      |> Enum.map(fn %{
                       games_history: games_history,
                       player_a_id: player_a_id,
                       player_b_id: player_b_id,
                       inserted_at: inserted_at,
                       updated_at: updated_at,
                       player_a: player_a,
                       player_b: player_b
                     } ->
        %{wins: wins, losses: losses, draws: draws} =
          TicTacToex.Scoreboard.calculate_score(games_history, user.id)

        %{
          games_history: games_history,
          inserted_at: inserted_at,
          updated_at: updated_at,
          player: (if player_a_id == user.id, do: player_a, else: player_b),
          opponent: (if player_a_id == user.id, do: player_b, else: player_a),
          wins: wins,
          losses: losses,
          draws: draws,
          total: wins + losses + draws
        }
      end)

    {:ok, assign(socket, :user, user) |> assign(:scoreboards, scoreboards)}
  end
end
