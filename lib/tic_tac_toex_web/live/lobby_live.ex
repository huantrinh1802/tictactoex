defmodule TicTacToexWeb.GameLobbyLive do
  use TicTacToexWeb, :live_view

  def render(assigns) do
    ~H"""
    <.svelte name="GameLobby" props={%{user: @current_user, socket_token: @socket_token}} />
    """
  end

  # The live_session's :ensure_authenticated on_mount guarantees a current user.
  def mount(_params, _session, socket) do
    user = socket.assigns.current_user

    {:ok,
     socket
     |> assign(:current_user, Map.take(user, [:id, :name, :email, :guest]))
     |> assign(:socket_token, TicTacToexWeb.UserSocket.sign_token(user.id))}
  end

  def handle_event("navigate_to", %{"to" => path}, socket) do
    {:noreply, push_navigate(socket, to: path)}
  end
end
