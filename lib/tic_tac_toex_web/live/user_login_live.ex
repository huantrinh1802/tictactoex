defmodule TicTacToexWeb.UserLoginLive do
  use TicTacToexWeb, :live_view

  def render(assigns) do
    ~H"""
    <div class="mx-auto max-w-sm grid gap-2 justify-items-center">
      <.header class="text-center">
        Log in to account
        <:subtitle>
          Don't have an account?
          <.link navigate={~p"/users/register"} class="font-semibold text-brand hover:underline">
            Sign up
          </.link>
          for an account now.
        </:subtitle>
      </.header>

      <.simple_form for={@form} id="login_form" action={~p"/users/log_in"} phx-update="ignore">
        <.input field={@form[:email]} type="email" label="Email" required />
        <.input field={@form[:password]} type="password" label="Password" required />

        <:actions>
          <.input field={@form[:remember_me]} type="checkbox" label="Keep me logged in" />
          <.link href={~p"/users/reset_password"} class="text-sm font-semibold">
            Forgot your password?
          </.link>
        </:actions>
        <:actions>
          <.button phx-disable-with="Logging in..." class="w-full">
            Log in <span aria-hidden="true">→</span>
          </.button>
        </:actions>
      </.simple_form>
      <h3 class="text-center">or</h3>
      <.button type="submit" class="btn btn-outline" phx-click="guest_login">
        Log in as Guest
      </.button>
    </div>
    <dialog
      id="guest-password-dialog"
      phx-hook="ShowDialog"
      class="rounded-xl shadow-xl p-6 max-w-md w-full"
    >
      <div class="grid gap-2">
        <h2 class="text-xl font-semibold text-gray-800">Guest Login</h2>

        <p>To log in as a guest, we will generate a temporary password for you.</p>
        <p>Please note down the password below.</p>
        <p>Your temporary password is:</p>

        <div class="flex items-center gap-2">
          <code id="guest-password-code" class="bg-gray-100 text-gray-800 font-mono px-2 py-1 rounded">
            {if @guest_password, do: @guest_password}
          </code>
          <button
            id="guest-password-copy"
            class="btn btn-sm"
            phx-hook="CopyToClipboard"
            data-copy-target="guest-password-code"
          >
            📋
          </button>
        </div>

        <form method="dialog">
          <.button phx-click="confirm_guest_redirect" class="w-full mt-2">
            Continue as Guest
          </.button>
        </form>
      </div>
    </dialog>
    """
  end

  def mount(_params, _session, socket) do
    email = Phoenix.Flash.get(socket.assigns.flash, :email)
    form = to_form(%{"email" => email}, as: "user")
    {:ok, assign(socket, form: form, guest_password: nil), temporary_assigns: [form: form]}
  end

  def handle_event("guest_login", _, socket) do
    name = UniqueNamesGenerator.generate([:adjectives, :animals])
    formatted_name = name |> String.split("_") |> Enum.map(&String.capitalize/1) |> Enum.join(" ")
    email = "#{name}@guest.tictactoex"

    password =
      :crypto.strong_rand_bytes(8)
      |> Base.url_encode64(padding: false)
      |> binary_part(0, 8)

    {:ok, user} =
      TicTacToex.Accounts.create_guest_user(%{
        name: formatted_name,
        email: email,
        password: password
      })

    token = TicTacToex.Accounts.generate_user_session_token(user)

    # Store password temporarily to display before redirect
    socket =
      socket
      |> assign(:guest_password, password)
      |> assign(:guest_token, token)

    {:noreply, push_event(socket, "open_dialog", %{id: "guest-password-dialog"})}
  end

  def handle_event("confirm_guest_redirect", _, socket) do
    {:noreply,
     push_navigate(socket,
       to: ~p"/users/guest_session?token=#{URI.encode(socket.assigns.guest_token)}"
     )}
  end
end
