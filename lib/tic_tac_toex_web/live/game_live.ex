defmodule TicTacToexWeb.GameLive do
  use TicTacToexWeb, :live_view

  def render(assigns) do
    ~H"""
    <.svelte name="Game" props={%{room_name: @room_name, user: @user}} />
    """
  end

  def mount(%{"room_name" => room_name}, _session, socket) do
    user =
      socket.assigns.current_user
      |> Map.take([:id, :email, :name])

    {:ok, assign(socket, :user, user) |> assign(:room_name, room_name)}
  end

  def handle_event("navigate_to", %{"to" => path}, socket) do
    {:noreply, push_navigate(socket, to: path)}
  end
end
