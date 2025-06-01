defmodule TicTacToexWeb.HomeController do
  use TicTacToexWeb, :controller

  def home(conn, _params) do
    redirect(conn, to: "/lobby")
  end
end
