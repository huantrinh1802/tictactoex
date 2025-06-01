defmodule TicTacToexWeb.RoomController do
  use TicTacToexWeb, :controller

  @moduledoc """
  This module contains pages rendered by PageController.

  See the `page_html` directory for all templates available.
  """
  def index(conn, _params) do
    render(conn, :index)
  end

  defp current_user(conn) do
    if conn.assigns.current_user do
      user = conn.assigns.current_user
        |> Map.take([:id, :email, :name])
    else
      user = %{id: -1, email: nil, name: UniqueNamesGenerator.generate([:adjectives, :animals])}
    end
  end

  def lobby(conn, _params) do
    user = current_user(conn)
    render(conn, :lobby, user: user)
  end

  def game(conn, _params) do
    user = current_user(conn)
    render(conn, :index, user: user)
  end
end
