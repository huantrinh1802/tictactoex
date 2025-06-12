defmodule TicTacToexWeb.GameLive do
  use TicTacToexWeb, :live_view

  def render(assigns) do
    ~H"""
    <.svelte name="Game" props={%{room_name: @room_name, user: @current_user}} />
    """
  end

  def mount(%{"room_name" => room_name}, session, socket) do
    socket =
      assign(
        socket,
        :current_user,
        (fn ->
           cond do
             socket.assigns.current_user ->
               socket.assigns.current_user |> Map.take([:id, :name, :email])

             session["current_user"] ->
               session["current_user"]
           end
         end).()
      )

    socket =
      socket
      |> assign(:room_name, room_name)

    {:ok, socket}
  end

  def handle_event("navigate_to", %{"to" => path}, socket) do
    {:noreply, push_navigate(socket, to: path)}
  end
end
