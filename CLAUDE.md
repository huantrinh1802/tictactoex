# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A multiplayer Tic-Tac-Toe app (configurable board size / win length) built with Phoenix 1.7 + LiveView, SQLite (`ecto_sqlite3`), and Svelte 5 components rendered through `live_svelte`. The OTP app is `:tic_tac_toex`; modules are `TicTacToex.*` (core) and `TicTacToexWeb.*` (web).

## Commands

```bash
mix setup                 # deps.get + ecto.setup (create/migrate/seed) + npm install in assets/
mix phx.server            # dev server on localhost:4000 (also runs node build.js --watch and tailwind --watch)
iex -S mix phx.server     # same, with IEx
mix test                  # creates/migrates the test DB, then runs tests
mix test path/to/file_test.exs:42   # single test (file + line)
mix format                # Elixir/HEEx formatting (Phoenix.LiveView.HTMLFormatter plugin)
mix ecto.reset            # drop + recreate dev DB (tic_tac_toex_dev.db at repo root)
mix assets.deploy         # production asset build (tailwind --minify, node build.js --deploy, phx.digest)
```

JS side (run inside `assets/`): `npx eslint .`, `npx prettier --write .` (configs: `eslint.config.js`, `.prettierrc`). There are no npm scripts.

Notes:
- JS is bundled by `assets/build.js` (esbuild + esbuild-svelte), **not** the Elixir `esbuild` package (its config in `config/config.exs` is commented out). `mix assets.build` runs tailwind + `node build.js`. `build.js` produces both a client bundle (`priv/static/assets`) and an SSR server bundle (`priv/svelte`), and copies `assets/{icons,images,manifest.json,robots.txt}` into `priv/static`.
- `priv/static` is entirely gitignored (build output). Don't read files from it at render time: layout SVGs are embedded at compile time from `assets/icons` via `TicTacToexWeb.Layouts.inline_svg/1`.
- Svelte SSR is disabled (`config :live_svelte, ssr: false`; `NodeJS.Supervisor` isn't started), so `<.svelte>` renders a placeholder `div` with `data-name` and HTML-escaped JSON `data-props`. LiveView tests assert on those.
- npm dependencies `phoenix`, `phoenix_live_view`, `live_svelte`, `phoenix_html` are `file:../deps/...`, so `mix deps.get` must run before `npm install`.
- Migrations run automatically on boot via `Ecto.Migrator` in the supervision tree (skipped when `RELEASE_NAME` is set).
- CI (`.github/workflows/ci.yml`): `mix test` on PRs and pushes to `main`, then builds `Dockerfile_prod`; on `main` the image is pushed to `ghcr.io/<owner>/<repo>` (`latest` + `sha-…`). Elixir/OTP versions there must match `Dockerfile_prod`.
- Production: `Dockerfile_prod` + `docker-compose.prod.yml`; env vars in `.env.template` (`DATABASE_PATH`, `SECRET_KEY_BASE`, `PORT`, `PHX_SERVER`).

## Architecture

### Two separate sockets
1. **LiveView socket** (`/live`) — LiveViews (`GameLobbyLive`, `GameLive`, `ScoreboardLive` in `lib/tic_tac_toex_web/live/`) are thin shells that just render a Svelte component via `<.svelte name="..." props={...} />` and handle a `navigate_to` event. Svelte components live in `assets/svelte/` and are auto-registered via a glob import in `assets/js/app.js`.
2. **Phoenix Channels socket** (`/socket`, `TicTacToexWeb.UserSocket`) — all real-time gameplay. Svelte components open it themselves via `initialise_socket` in `assets/lib/utils.js`, passing a `socket_token` prop that the LiveView signs with `UserSocket.sign_token/1` (`Phoenix.Token`, user id). `UserSocket.connect/3` verifies it and sets `user_id`/`user_name` assigns; channels take identity only from those assigns, never from join/event payloads. Other players see user ids and names, never emails.

### Game state lives in channels, not the DB
- `TicTacToex.ChannelRegistry` (`lib/tic_tac_toex/room_tracker.ex` — filename differs from module name) is a GenServer owning a public ETS table of rooms: `room_name => %{metadata: %{height, width, winning}, members, active_members}`. Rooms are deleted when `active_members` drops to zero.
- `LobbyChannel` (`"lobby"`): `create_room` validates the board settings (square, size 3–30, win length 3..size), registers a random name (`UniqueNamesGenerator`, retried on collision; `register_channel/2` never overwrites a room), and broadcasts `room_changed` with the room list. On join it pushes `channel_list`.
- `RoomChannel` (`"room:<name>"`): joining fails if the room isn't in the registry or already has two other members (`{:full, _}`). The board/turn are kept in each channel process's socket assigns and synchronized between the two players via broadcasts (`played`, `game_over`, `sync_game`, `prompt_new_game`, `new_game_declined`); `handle_out` intercepts `played`/`sync_game` to update the receiving process's assigns. Win/draw detection (`check_winner?/2`, `draw?/2` over rows, columns, and all diagonals with a configurable win length) is in this module. Each connection's mark (`:player`) is assigned by the server (`generate_board`, or the opponent's `sync_game`); a client-sent `"player"` is ignored, and `sync_game` relays the sender's server-side board/turn, not the payload's. A `play` is accepted only when it is that connection's `turn`, on an empty in-bounds cell; after a win/draw `turn` is `nil` in both players' channels (`game_over` is intercepted) until `generate_board`/`sync_game`. `draw?/2` is true as soon as no window of `win_length` cells is free of an opponent's mark. Joins/leaves re-broadcast `room_changed` to `"lobby"`.
- `Game.svelte` is the client counterpart and holds much of the game flow (new-game prompts, local score tracking pushed via `sync_game`).

### Persistence
- `TicTacToex.Accounts` is the standard `phx.gen.auth` context, extended with a `name` field and **guest users** (`guest` flag). Guest login: `UserLoginLive` creates the guest, shows the generated password, then navigates to `GET /users/guest_session?token=<base64url session token>`, which logs the guest in and revokes that one-time token (non-guest tokens are rejected). A logged-in guest can still open `/users/register`, which converts the account (`Accounts.convert_guest_user/2`). Registration requires a unique `name`.
- `TicTacToex.Scoreboard` / `TicTacToex.Game` (in `scoreboard.ex` / `games.ex`) are Ecto schemas with SQLite-specific queries (`json_group_array` fragments, grouped by scoreboard; `games_history` comes back as maps with string keys). Currently only read by `ScoreboardLive`; nothing in the channels writes game results.

### Routing
`/lobby`, `/game/:room_name`, `/scoreboard` are in a `live_session` requiring authentication (`UserAuth.ensure_authenticated`). Dev-only `/dev/dashboard` and `/dev/mailbox`.

## Tests

Test support is in `test/support/` (`ConnCase`, `DataCase`, `ChannelCase`, account fixtures). `AccountsFixtures.user_fixture/1` includes a unique `name`. Use `ConnCase`/`DataCase` without `async: true` (SQLite sandbox). Channel tests bypass `UserSocket.connect/3`, so build sockets with `socket(UserSocket, nil, %{user_id: ..., user_name: ...})`. Channel tests (`test/tic_tac_toex_web/channels/`) share the global `ChannelRegistry` ETS table, so give each test a unique room name and clean up with `ChannelRegistry.unregister_channel/1` in `on_exit`.
