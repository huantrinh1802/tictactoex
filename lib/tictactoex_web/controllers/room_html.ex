defmodule TicTacToexWeb.RoomHTML do
  use TicTacToexWeb, :html

  @moduledoc """
  This module contains pages rendered by PageController.

  See the `page_html` directory for all templates available.
  """

  def index(assigns) do
    ~H"""
    <.svelte name="Game" props={%{room_name: @conn.params["room_name"]}} />
    """
  end

  def lobby(assigns) do
    ~H"""
    <.svelte name="GameLobby" />
    """
  end
end
