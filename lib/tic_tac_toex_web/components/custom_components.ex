defmodule TicTacToexWeb.CustomComponents do
  @moduledoc """
  Provides core UI components.

  At first glance, this module may seem daunting, but its goal is to provide
  core building blocks for your application, such as modals, tables, and
  forms. The components consist mostly of markup and are well-documented
  with doc strings and declarative assigns. You may customize and style
  them in any way you want, based on your application growth and needs.

  The default components use Tailwind CSS, a utility-first CSS framework.
  See the [Tailwind CSS documentation](https://tailwindcss.com) to learn
  how to customize them or feel free to swap in another framework altogether.

  Icons are provided by [heroicons](https://heroicons.com). See `icon/1` for usage.
  """
  use Phoenix.Component
  use Gettext, backend: TicTacToexWeb.Gettext

  @doc """
  Renders a modal.

  ## Examples
  """
  attr(:id, :string, required: true)
  attr(:title, :string)
  attr(:trigger, :string)
  slot(:inner_block, required: true)

  def qmodal(assigns) do
    ~H"""
    <dialog id={@id} data-trigger={@trigger} phx-hook="Dialog" class="rounded-lg shadow-xl p-6 w-fit">
      <div class="flex flex-col gap-4">
        <form id={"#{@id}-header"} class="flex justify-between" method="dialog">
          <h2 class="text-xl font-semibold mb-4">{@title}</h2>
          <button class="h-fit bg-gray-500 text-white px-2 py-1 rounded" value="cancel">Close</button>
        </form>
        <div id={"#{@id}-content"}>
          {render_slot(@inner_block)}
        </div>
      </div>
    </dialog>
    """
  end
end
