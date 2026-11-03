defmodule TicTacToexWeb.Layouts do
  @moduledoc """
  This module holds different layouts used by your application.

  See the `layouts` directory for all templates available.
  The "root" layout is a skeleton rendered as part of the
  application router. The "app" layout is set as the default
  layout on both `use TicTacToexWeb, :controller` and
  `use TicTacToexWeb, :live_view`.
  """
  use TicTacToexWeb, :html

  embed_templates("layouts/*")

  # SVG icons are inlined into the layouts so they can be styled with CSS.
  # They are read from assets/icons at compile time: priv/static is a build
  # output (gitignored), so it can't be relied on at render time.
  @icons_dir Path.expand("../../../assets/icons", __DIR__)
  @icon_files Path.wildcard(Path.join(@icons_dir, "*.svg"))
  for file <- @icon_files, do: @external_resource(file)
  @icons Map.new(@icon_files, &{"/icons/" <> Path.basename(&1), File.read!(&1)})

  @doc """
  Returns the markup of an SVG in `assets/icons`, e.g. `inline_svg("/icons/lobby.svg")`.
  """
  def inline_svg(path), do: Phoenix.HTML.raw(Map.fetch!(@icons, path))
end
