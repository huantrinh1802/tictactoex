defmodule TicTacToex.ScoreboardTest do
  use TicTacToex.DataCase

  import TicTacToex.AccountsFixtures

  alias TicTacToex.{Game, Scoreboard}

  # winners: list of user ids (or nil for a draw), one game each
  defp scoreboard_fixture(player_a, player_b, winners) do
    scoreboard = Repo.insert!(%Scoreboard{player_a_id: player_a.id, player_b_id: player_b.id})

    for winner <- winners do
      Repo.insert!(%Game{
        scoreboard_id: scoreboard.id,
        x_player_id: player_a.id,
        o_player_id: player_b.id,
        winner: winner,
        metadata: %{}
      })
    end

    scoreboard
  end

  describe "get_scoreboard_by_user_id!/1" do
    test "returns nothing for a user who has not played" do
      user = user_fixture()
      assert Scoreboard.get_scoreboard_by_user_id!(user.id) == []
    end

    test "returns the scoreboard with its games and both players" do
      alice = user_fixture()
      bob = user_fixture()
      scoreboard_fixture(alice, bob, [alice.id, bob.id, nil])

      assert [row] = Scoreboard.get_scoreboard_by_user_id!(bob.id)
      assert row.player_a == %{id: alice.id, name: alice.name, email: alice.email}
      assert row.player_b == %{id: bob.id, name: bob.name, email: bob.email}

      assert row.games_history |> Enum.map(& &1["winner"]) |> Enum.frequencies() ==
               %{alice.id => 1, bob.id => 1, nil => 1}

      assert Scoreboard.calculate_score(row.games_history, bob.id) ==
               %{wins: 1, losses: 1, draws: 1}
    end

    test "returns one row per opponent" do
      alice = user_fixture()
      bob = user_fixture()
      carol = user_fixture()
      scoreboard_fixture(alice, bob, [alice.id])
      scoreboard_fixture(carol, alice, [carol.id, carol.id])
      scoreboard_fixture(bob, carol, [bob.id])

      rows = Scoreboard.get_scoreboard_by_user_id!(alice.id)

      assert rows |> Enum.map(&length(&1.games_history)) |> Enum.sort() == [1, 2]
    end
  end

  test "list_scoreboards/0 returns one row per scoreboard" do
    alice = user_fixture()
    bob = user_fixture()
    carol = user_fixture()
    scoreboard_fixture(alice, bob, [alice.id])
    scoreboard_fixture(bob, carol, [nil, nil])

    assert length(Scoreboard.list_scoreboards()) == 2
  end

  test "calculate_score/2 counts wins, losses and draws from the user's perspective" do
    games = [%{"winner" => 1}, %{"winner" => 1}, %{"winner" => 2}, %{"winner" => nil}]

    assert Scoreboard.calculate_score(games, 1) == %{wins: 2, losses: 1, draws: 1}
    assert Scoreboard.calculate_score(games, 2) == %{wins: 1, losses: 2, draws: 1}
    assert Scoreboard.calculate_score([], 1) == %{wins: 0, losses: 0, draws: 0}
  end
end
