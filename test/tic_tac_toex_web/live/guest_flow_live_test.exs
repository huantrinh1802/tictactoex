defmodule TicTacToexWeb.GuestFlowLiveTest do
  use TicTacToexWeb.ConnCase

  import Phoenix.LiveViewTest
  import TicTacToex.AccountsFixtures

  alias TicTacToex.{Accounts, Repo}
  alias TicTacToex.Accounts.User

  test "logging in as a guest shows a working password and signs the guest in", %{conn: conn} do
    {:ok, lv, _html} = live(conn, ~p"/users/log_in")

    html = lv |> element("button", "Log in as Guest") |> render_click()

    guest = Repo.get_by!(User, guest: true)
    assert [_, password] = Regex.run(~r/id="guest-password-code"[^>]*>\s*([^<\s]+)/, html)
    assert %User{id: id} = Accounts.get_user_by_email_and_password(guest.email, password)
    assert id == guest.id

    assert {:error, {:live_redirect, %{to: path}}} =
             render_click(lv, "confirm_guest_redirect", %{})

    assert path =~ "/users/guest_session?token="

    conn = get(conn, path)
    assert redirected_to(conn) == ~p"/"
    assert Accounts.get_user_by_session_token(get_session(conn, :user_token)).id == guest.id
  end

  test "a logged-in guest can open the registration page and convert their account", %{
    conn: conn
  } do
    {:ok, guest} =
      Accounts.create_guest_user(%{name: unique_user_name(), email: unique_user_email()})

    conn = log_in_user(conn, guest)
    {:ok, lv, html} = live(conn, ~p"/users/register")
    assert html =~ guest.email

    attrs = valid_user_attributes()
    form = form(lv, "#registration_form", user: attrs)
    render_submit(form)
    conn = follow_trigger_action(form, conn)

    assert redirected_to(conn) == ~p"/"

    user = Accounts.get_user!(guest.id)
    refute user.guest
    assert user.email == attrs.email
    assert user.name == attrs.name
    assert Accounts.get_user_by_email_and_password(attrs.email, attrs.password)
  end
end
