defmodule TicTacToexWeb.Plugs.AssignGuestUser do
  import Plug.Conn

  def init(opts), do: opts

  def call(conn, _opts) do
    cond do
      conn.assigns[:current_user] ->
        conn

      guest = get_session(conn, :guest_user) ->
        assign(conn, :current_user, guest)

      true ->
        name = UniqueNamesGenerator.generate([:adjectives, :animals])

        guest_user = %{
          id: -1,
          name:
            name
            |> String.split("_")
            |> Enum.map(&String.capitalize/1)
            |> Enum.join(" "),
          email: "#{name}@tictactoex.com"
        }

        conn
        |> put_session(:current_user, guest_user)
        |> assign(:current_user, guest_user)
    end
  end
end
