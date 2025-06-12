defmodule TicTacToexWeb.GameLobbyLive do
  use TicTacToexWeb, :live_view

  def render(assigns) do
    ~H"""
    <.svelte name="GameLobby" props={%{user: @current_user}} />
    """
  end

  def mount(_params, session, socket) do
    IO.inspect(socket.assigns.current_user)

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

    IO.inspect(socket.assigns.current_user)
    {:ok, socket}
  end

  def handle_event("navigate_to", %{"to" => path}, socket) do
    {:noreply, push_navigate(socket, to: path)}
  end
end
