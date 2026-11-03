defmodule TicTacToexWeb.UserSocket do
  use Phoenix.Socket

  # A Socket handler
  #
  # It's possible to control the websocket connection and
  # assign values that can be accessed by your channel topics.

  ## Channels

  channel("room:*", TicTacToexWeb.RoomChannel)
  channel("lobby", TicTacToexWeb.LobbyChannel)

  @salt "user socket"
  # Matches the "remember me" cookie lifetime; clients reuse the token on reconnect.
  @max_age 60 * 60 * 24 * 60

  @doc """
  Signs a token that lets the given user connect to this socket. LiveViews
  pass it to the Svelte components, which send it as the `token` param.
  """
  def sign_token(user_id), do: Phoenix.Token.sign(TicTacToexWeb.Endpoint, @salt, user_id)

  # Every channel identifies the player by these assigns, so a connection must
  # carry a token signed by the server for an existing user.
  @impl true
  def connect(%{"token" => token}, socket, _connect_info) when is_binary(token) do
    with {:ok, user_id} <- Phoenix.Token.verify(socket, @salt, token, max_age: @max_age),
         %TicTacToex.Accounts.User{} = user <- TicTacToex.Accounts.get_user(user_id) do
      {:ok, assign(socket, user_id: user.id, user_name: user.name || "Player #{user.id}")}
    else
      _ -> :error
    end
  end

  def connect(_params, _socket, _connect_info), do: :error

  # Socket IDs are topics that allow you to identify all sockets for a given user:
  #
  #     def id(socket), do: "user_socket:#{socket.assigns.user_id}"
  #
  # Would allow you to broadcast a "disconnect" event and terminate
  # all active sockets and channels for a given user:
  #
  #     Elixir.TicTacToexWeb.Endpoint.broadcast("user_socket:#{user.id}", "disconnect", %{})
  #
  # Returning `nil` makes this socket anonymous.
  @impl true
  def id(_socket), do: nil
end
