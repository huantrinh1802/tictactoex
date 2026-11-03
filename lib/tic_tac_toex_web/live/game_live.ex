defmodule TicTacToexWeb.GameLive do
  use TicTacToexWeb, :live_view

  def render(assigns) do
    ~H"""
    <.svelte
      name="Game"
      props={%{room_name: @room_name, user: @current_user, socket_token: @socket_token}}
    />
    """
  end

  # The live_session's :ensure_authenticated on_mount guarantees a current user.
  def mount(%{"room_name" => room_name}, _session, socket) do
    user = socket.assigns.current_user

    {:ok,
     socket
     |> assign(:current_user, Map.take(user, [:id, :name, :email, :guest]))
     |> assign(:socket_token, TicTacToexWeb.UserSocket.sign_token(user.id))
     |> assign(:room_name, room_name)}
  end

  def handle_event("navigate_to", %{"to" => path}, socket) do
    {:noreply, push_navigate(socket, to: path)}
  end
end
