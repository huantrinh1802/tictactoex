defmodule TicTacToexWeb.GameLobbyLive do
  use TicTacToexWeb, :live_view

  def render(assigns) do
    ~H"""
    <.svelte name="GameLobby" props={%{user: @user}} />
    """
  end

  def mount(_params, _session, socket) do
    user =
      socket.assigns.current_user
      |> Map.take([:id, :email, :name])

    {:ok, assign(socket, :user, user)}
  end

  def handle_event("navigate_to", %{"to" => path}, socket) do
    {:noreply, push_navigate(socket, to: path)}
  end
end
