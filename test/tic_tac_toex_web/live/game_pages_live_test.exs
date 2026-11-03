defmodule TicTacToexWeb.GamePagesLiveTest do
  use TicTacToexWeb.ConnCase

  import Phoenix.LiveViewTest
  import TicTacToex.AccountsFixtures

  alias TicTacToex.{Game, Repo, Scoreboard}

  describe "authentication" do
    for path <- ["/lobby", "/game/some_room", "/scoreboard"] do
      test "#{path} redirects anonymous visitors to the log in page", %{conn: conn} do
        assert {:error, {:redirect, %{to: "/users/log_in"}}} = live(conn, unquote(path))
      end
    end
  end

  describe "logged in" do
    setup :register_and_log_in_user

    test "lobby renders the GameLobby component for the user", %{conn: conn, user: user} do
      {:ok, _lv, html} = live(conn, ~p"/lobby")

      assert html =~ ~s(data-name="GameLobby")
      assert html =~ user.email
      assert html =~ "socket_token&quot;:&quot;"
      # The app layout's sidebar inlines the SVG icons from assets/icons.
      assert html =~ "<svg"
    end

    test "lobby navigate_to event navigates", %{conn: conn} do
      {:ok, lv, _html} = live(conn, ~p"/lobby")

      assert {:error, {:live_redirect, %{to: "/game/brave_lion"}}} =
               render_hook(lv, "navigate_to", %{"to" => "/game/brave_lion"})
    end

    test "game renders the Game component for the room", %{conn: conn, user: user} do
      {:ok, _lv, html} = live(conn, ~p"/game/brave_lion")

      assert html =~ ~s(data-name="Game")
      assert html =~ "brave_lion"
      assert html =~ user.email
    end

    test "scoreboard is empty for a new player", %{conn: conn} do
      {:ok, _lv, html} = live(conn, ~p"/scoreboard")

      assert html =~ ~s(data-name="Scoreboard")
      assert html =~ "scoreboards&quot;:[]"
    end

    test "scoreboard shows results against each opponent", %{conn: conn, user: user} do
      opponent = user_fixture()
      scoreboard = Repo.insert!(%Scoreboard{player_a_id: opponent.id, player_b_id: user.id})

      for winner <- [user.id, user.id, opponent.id, nil] do
        Repo.insert!(%Game{
          scoreboard_id: scoreboard.id,
          x_player_id: user.id,
          o_player_id: opponent.id,
          winner: winner,
          metadata: %{}
        })
      end

      {:ok, _lv, html} = live(conn, ~p"/scoreboard")

      assert html =~ opponent.name
      assert html =~ "wins&quot;:2"
      assert html =~ "losses&quot;:1"
      assert html =~ "draws&quot;:1"
      assert html =~ "total&quot;:4"
    end
  end
end
