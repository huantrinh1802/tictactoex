defmodule TicTacToexWeb.UserSocketTest do
  use TicTacToexWeb.ChannelCase

  alias TicTacToexWeb.UserSocket

  test "connect/3 assigns the client's token" do
    assert {:ok, socket} = connect(UserSocket, %{"token" => "player@example.com"})
    assert socket.assigns.token == "player@example.com"
    assert UserSocket.id(socket) == nil
  end
end
