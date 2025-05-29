defmodule TicTacToexWeb.RoomController do
  use TicTacToexWeb, :controller

  @moduledoc """
  This module contains pages rendered by PageController.

  See the `page_html` directory for all templates available.
  """
  def index(conn, _params) do
    render(conn, :index)
  end

  def lobby(conn, _params) do
    render(conn, :lobby)
  end

  def game(conn, _params) do
    render(conn, :index)
  end
end
