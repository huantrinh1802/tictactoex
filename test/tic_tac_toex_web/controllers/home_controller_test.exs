defmodule TicTacToexWeb.HomeControllerTest do
  use TicTacToexWeb.ConnCase

  test "GET / redirects to the lobby", %{conn: conn} do
    conn = get(conn, ~p"/")
    assert redirected_to(conn) == "/lobby"
  end
end
