defmodule TicTacToexWeb.GuestSessionControllerTest do
  use TicTacToexWeb.ConnCase

  import TicTacToex.AccountsFixtures

  alias TicTacToex.Accounts

  defp guest_session_path(token) do
    ~p"/users/guest_session?token=#{Base.url_encode64(token, padding: false)}"
  end

  setup do
    {:ok, guest} =
      Accounts.create_guest_user(%{name: unique_user_name(), email: unique_user_email()})

    %{guest: guest, token: Accounts.generate_user_session_token(guest)}
  end

  describe "GET /users/guest_session" do
    test "logs the guest in and revokes the hand-off token", %{
      conn: conn,
      guest: guest,
      token: token
    } do
      conn = get(conn, guest_session_path(token))

      assert redirected_to(conn) == ~p"/"
      session_token = get_session(conn, :user_token)
      assert session_token != token
      assert Accounts.get_user_by_session_token(session_token).id == guest.id
      refute Accounts.get_user_by_session_token(token)
    end

    test "the token works only once", %{token: token} do
      get(build_conn(), guest_session_path(token))
      conn = get(build_conn(), guest_session_path(token))

      assert redirected_to(conn) == ~p"/users/log_in"
      assert Phoenix.Flash.get(conn.assigns.flash, :error) == "Invalid session token"
    end

    test "rejects tokens of non-guest users", %{conn: conn} do
      token = Accounts.generate_user_session_token(user_fixture())
      conn = get(conn, guest_session_path(token))

      assert redirected_to(conn) == ~p"/users/log_in"
      refute get_session(conn, :user_token)
    end

    test "rejects malformed tokens", %{conn: conn} do
      conn = get(conn, "/users/guest_session?token=!!!!")
      assert redirected_to(conn) == ~p"/users/log_in"
    end

    test "rejects requests without a token", %{conn: conn} do
      conn = get(conn, ~p"/users/guest_session")
      assert redirected_to(conn) == ~p"/users/log_in"
    end
  end
end
