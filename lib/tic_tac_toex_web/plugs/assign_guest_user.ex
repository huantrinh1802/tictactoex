defmodule TicTacToexWeb.Plugs.AssignGuestUser do
  import Plug.Conn
  alias Phoenix.Controller

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
        |> put_session(:guest_user, guest_user)
        |> assign(:current_user, guest_user)
    end
  end

  defp random_string(len) do
    :crypto.strong_rand_bytes(len)
    |> Base.url_encode64(padding: false)
    |> binary_part(0, len)
  end
end
