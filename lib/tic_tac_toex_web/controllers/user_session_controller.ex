defmodule TicTacToexWeb.UserSessionController do
  use TicTacToexWeb, :controller

  alias TicTacToex.Accounts
  alias TicTacToexWeb.UserAuth

  def create(conn, %{"_action" => "registered"} = params) do
    create(conn, params, "Account created successfully!")
  end

  def create(conn, %{"_action" => "password_updated"} = params) do
    conn
    |> put_session(:user_return_to, ~p"/users/settings")
    |> create(params, "Password updated successfully!")
  end

  def create(conn, params) do
    create(conn, params, "Welcome back!")
  end

  defp create(conn, %{"user" => user_params}, info) do
    %{"email" => email, "password" => password} = user_params

    if user = Accounts.get_user_by_email_and_password(email, password) do
      conn
      |> put_flash(:info, info)
      |> UserAuth.log_in_user(user, user_params)
    else
      # In order to prevent user enumeration attacks, don't disclose whether the email is registered.
      conn
      |> put_flash(:error, "Invalid email or password")
      |> put_flash(:email, String.slice(email, 0, 160))
      |> redirect(to: ~p"/users/log_in")
    end
  end

  def delete(conn, _params) do
    conn
    |> put_flash(:info, "Logged out successfully.")
    |> UserAuth.log_out_user()
  end

  # One-time hand-off from UserLoginLive's guest flow: the token in the URL is
  # exchanged for a fresh session and then revoked.
  def guest_session(conn, %{"token" => encoded_token}) do
    with {:ok, token} <- Base.url_decode64(encoded_token, padding: false),
         %Accounts.User{guest: true} = user <- Accounts.get_user_by_session_token(token) do
      Accounts.delete_user_session_token(token)
      UserAuth.log_in_user(conn, user)
    else
      _ ->
        conn
        |> put_flash(:error, "Invalid session token")
        |> redirect(to: ~p"/users/log_in")
    end
  end

  def guest_session(conn, _params) do
    conn
    |> put_flash(:error, "Invalid session token")
    |> redirect(to: ~p"/users/log_in")
  end
end
