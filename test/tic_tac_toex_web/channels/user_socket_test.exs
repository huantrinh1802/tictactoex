defmodule TicTacToexWeb.UserSocketTest do
  use TicTacToexWeb.ChannelCase

  import TicTacToex.AccountsFixtures

  alias TicTacToexWeb.UserSocket

  test "connects with a server-signed token and identifies the user" do
    user = user_fixture()

    assert {:ok, socket} = connect(UserSocket, %{"token" => UserSocket.sign_token(user.id)})
    assert socket.assigns.user_id == user.id
    assert socket.assigns.user_name == user.name
  end

  test "rejects a missing token" do
    assert :error = connect(UserSocket, %{})
  end

  test "rejects tokens that were not signed by the server" do
    user = user_fixture()

    # What clients used to send: the user's email.
    assert :error = connect(UserSocket, %{"token" => user.email})

    forged = Phoenix.Token.sign(TicTacToexWeb.Endpoint, "another salt", user.id)
    assert :error = connect(UserSocket, %{"token" => forged})
  end

  test "rejects tokens for users that no longer exist" do
    assert :error = connect(UserSocket, %{"token" => UserSocket.sign_token(-1)})
  end
end
