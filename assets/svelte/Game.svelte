<script>
  import { Presence } from 'phoenix';
  import { onMount } from 'svelte';
  import { liveViewSockets } from '../stores/liveViewSockets';
  import { translate_room_name, initialise_socket } from '../lib/utils';
  let { room_name, user, live } = $props();
  let channel;
  let presence;
  let board = $state([]);
  let socket;
  let player = $state();
  let container = $state(null);
  let showLeft = $state(false); // false;
  let showRight = $state(false); // false;
  let waiting = $state(true);
  let turn = $state('X');
  let winningCells = $state([]);
  let winner = $state();
  let opponent = $state('');
  let localScoreBoard = $state({});
  let play_again_modal = $state();
  let show_play_again_button = $state(true);
  let waiting_dialog = $state();

  function updateShadows() {
    if (!container) return;
    showLeft = container.scrollLeft > 0;
    showRight = container.scrollLeft + container.clientWidth < container.scrollWidth;
  }
  $effect(() => {
    if (container) {
      updateShadows();
      container.addEventListener('scroll', updateShadows);
    }
  });
  onMount(() => {
    socket = initialise_socket(user.email);
    if (!socket) {
      console.log('No socket');
    } else {
      join();
      if ($liveViewSockets) {
        console.log('Connected to live view socket');
      }
    }
  });
  function join() {
    channel = socket.channel(`room:${room_name}`, { token: user?.email, name: user?.name });
    let token = user?.email;
    presence = new Presence(channel);
    channel
      .join()
      .receive('ok', (resp) => {
        console.log('Joined successfully', resp);
        channel.on('played', (payload) => {
          console.log('Played', payload);
          board = payload.board;
          turn = payload.turn;
          // check if need to scroll
          const element = document.getElementById(`${payload.x}-${payload.y}`);
          const rect = element.getBoundingClientRect();
          const isVerticallyOutOfView = rect.top <= 0 || rect.bottom >= window.innerHeight;

          // Check horizontal visibility
          const isHorizontallyOutOfView = rect.left < 0 || rect.right > window.innerWidth;
          if (isVerticallyOutOfView || isHorizontallyOutOfView) {
            document.getElementById(`${payload.x}-${payload.y}`).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
          }
        });
        channel.on('game_over', (payload) => {
          board = payload.board;
          if (payload?.winner) {
            winningCells = payload.win_coords;
            winner = payload.winner == player ? user.name : opponent;
            localScoreBoard[winner] += 1;
          }
          if (payload?.draw) {
            winner = 'Draw';
          }
        });
        channel.on('sync_game', (payload) => {
          waiting_dialog.close();
          board = payload.board;
          turn = payload.turn;
          player = payload.player;
          localScoreBoard = payload.score_board;
          show_play_again_button = true;
          if (payload?.winner) {
            winningCells = payload.win_coords;
            winner = payload.winner;
          } else {
            winner = null;
            winningCells = [];
          }
        });
        channel.on('prompt_new_game', (payload) => {
          play_again_modal.showModal();
          show_play_again_button = false;
        });
        channel.on('new_game_declined', (payload) => {
          show_play_again_button = true;
          waiting_dialog.close();
        });
      })
      .receive('error', (resp) => {
        console.log('Unable to join', resp);
        window.location.href = '/lobby';
      });
    presence.onSync(() => {
      presence.list((id, meta) => {
        console.log('Presence list', id, meta);
        if (meta.metas.length < 2) {
          waiting = true;
          if (board.length == 0) {
            channel.push('generate_board', { board: board, turn: turn, win_coords: winningCells, winner: winner }).receive('ok', (payload) => {
              board = payload.board;
            });
            player = 'X';
          }
        } else {
          opponent = meta.metas.find((m) => m.token != token).name;
          if (!localScoreBoard[opponent]) {
            localScoreBoard[opponent] = 0;
          }
          if (!localScoreBoard[user.name]) {
            localScoreBoard[user.name] = 0;
          }
          waiting = false;
          if (board.length > 0) {
            channel.push('sync_game', { board: board, turn: turn, win_coords: winningCells, winner: winner, player: player, score_board: localScoreBoard });
          }
        }
      });
    });
  }
  function play(x, y) {
    channel
      .push('play', { x: x, y: y, player: player })
      .receive('ok', (payload) => {
        board = payload.board;
        turn = payload.turn;
        if (payload?.game_over) {
          if (payload?.winner) {
            winningCells = payload.win_coords;
            winner = payload.winner == player ? user.name : opponent;
            localScoreBoard[winner] += 1;
          }
          if (payload?.draw) {
            winner = 'Draw';
          }
        }
      })
      .receive('error', (err) => console.log('phoenix errored', err))
      .receive('timeout', () => console.log('timed out pushing'));
  }
  function isWinningCell(col, row) {
    return winningCells.some(([winCol, winRow]) => winCol === col && winRow === row);
  }
  function prompt_new_game() {
    channel.push('prompt_new_game', {}).receive('ok', (payload) => {});
    show_play_again_button = false;
    waiting_dialog.showModal();
  }
  function play_again() {
    channel.push('generate_board', {}).receive('ok', (payload) => {
      board = payload.board;
      turn = payload.turn;
      winner = null;
      winningCells = [];
      show_play_again_button = true;
      channel.push('sync_game', { board: board, turn: turn, win_coords: winningCells, winner: winner, player: player, score_board: localScoreBoard });
    });
  }
  function decline_play_again() {
    show_play_again_button = true;
    channel.push('decline_new_game', {}).receive('ok', (payload) => {});
  }
  function leave() {
    channel.leave();
    live.pushEvent('navigate_to', { to: '/lobby' });
  }
</script>

<div
  class="banner sticky inset-x-0 top-2 flex w-full flex-col items-center justify-between rounded-lg px-4 py-6"
  data-winner={winner && player == winner}>
  {#if player && waiting}
    <div class="flex gap-2 flex-col">
      <p class="text-white">Waiting for another player...</p>
      <button class="rounded-lg bg-red-600 px-4 py-2 text-white" onclick={leave}>Leave</button>
    </div>
  {:else}
    <div class="scoreboard absolute -top-[2.5rem] left-1/2 grid -translate-x-1/2 grid-cols-3 items-center rounded-full px-4 py-2 text-white shadow-lg">
      <!-- Left Team Name -->
      <div class="px-4 text-lg font-bold">{user.name}</div>

      <!-- Score -->
      <p class="mx-4 rounded-lg bg-black px-6 py-1 text-center text-xl font-bold text-yellow-300 shadow-inner">{localScoreBoard[user.name]}-{localScoreBoard[opponent]}</p>

      <!-- Right Team Name -->
      <div class="px-4 text-lg font-bold">{opponent}</div>
    </div>

    <div class="flex w-full items-center justify-between gap-2 py-2">
      <h2 class="text-2xl font-semibold text-white">Room: {translate_room_name(room_name)}</h2>
      <div class="flex items-center gap-2">
        {#if winner && show_play_again_button}
          <button
            class="rounded-lg bg-blue-600 px-4 py-2 text-white"
            onclick={prompt_new_game}>Play Again</button>
        {/if}
        <button
          class="rounded-lg bg-red-600 px-4 py-2 text-white"
          onclick={leave}>Leave</button>
      </div>
    </div>
    {#if winner}
      <div class="flex w-full justify-center">
        <!-- Winner text receives from both sides -->
        <p class="text-xl font-semibold text-white">
          {#if player == winner}You win!
          {:else if winner == 'Draw'}
            Draw
          {:else}
            Player {winner} Wins!{/if}
        </p>
      </div>
    {:else}
      <div class="flex w-full w-full items-center justify-between gap-4">
        <p
          class="rounded-lg bg-amber-600 px-4 py-2 text-white"
          class:in-turn={turn == player}>
          {#if turn == player}Your turn!{:else}Waiting for your turn...{/if}
        </p>

        <p class="text-white">
          You:
          <span
            class="tictactoe-id ml-2 inline-block rounded-lg bg-white px-2 py-1 text-black"
            data-cell={player}>{player}</span>
        </p>
      </div>
    {/if}
  {/if}
</div>
{#if board.length > 0 && (!waiting || (waiting && winner))}
  <div class="board relative mt-4 rounded-lg bg-black p-2">
    <!-- Shadow left -->
    {#if showLeft}
      <div class="pointer-events-none absolute top-0 left-0 z-10 h-full w-6 bg-gradient-to-r from-black/20 to-transparent"></div>
    {/if}

    <!-- Shadow right -->
    {#if showRight}
      <div class="pointer-events-none absolute top-0 right-0 z-10 h-full w-6 bg-gradient-to-l from-black/20 to-transparent"></div>
    {/if}

    <!-- Scrollable content -->
    <div
      bind:this={container}
      class="scrollable-content flex flex-col gap-2 overflow-x-auto">
      {#each board as row, col_index (col_index)}
        <div class="flex gap-2">
          {#each row as cell, row_index (row_index)}
            <button
              disabled={turn != player || cell != '' || winningCells.length > 0}
              id="{col_index}-{row_index}"
              class="tictactoe-cell aspect-square min-h-[32px] cursor-pointer rounded-md text-white"
              aria-label="{col_index}, {row_index}"
              data-cell={cell}
              data-winning={isWinningCell(col_index, row_index) ? 'true' : 'false'}
              onclick={() => play(col_index, row_index)}>{cell}</button>
          {/each}
        </div>
      {/each}
    </div>
  </div>
{/if}
<div class="grid gap-2"></div>
<dialog
  id="confirm_play_again"
  class="modal"
  bind:this={play_again_modal}>
  <form
    method="dialog"
    class="modal-box flex flex-col gap-2">
    <h3 class="text-lg font-bold">Play Again?</h3>
    <div class="modal-action flex gap-2">
      <button
        class="btn btn-yes"
        onclick={play_again}>Yes</button>
      <button
        class="btn btn-no"
        onclick={decline_play_again}>No</button>
    </div>
  </form>
</dialog>
<dialog
  id="waiting_dialog"
  class="modal"
  bind:this={waiting_dialog}>
  <form
    method="dialog"
    class="modal-box flex flex-col gap-2">
    <h3 class="text-lg font-bold">Waiting for another player...</h3>
    <button
      class="btn btn-no"
      onclick={() => leave}>Leave</button>
  </form>
</dialog>

<style>
  .tictactoe-cell {
    &:disabled {
      pointer-events: none;
    }
    &[data-cell=''] {
      background-color: white;
      color: black;
    }

    &[data-cell='O'][data-winning='false'] {
      background-color: #dc2626; /* Tailwind red-600 */
    }

    &[data-cell='X'][data-winning='false'] {
      background-color: #134e4a; /* Tailwind teal-900 */
    }

    &[data-cell='O'][data-winning='true'] {
      background-color: #facc15; /* Tailwind yellow-400 */
      animation: pulse-win 1s infinite;
    }

    &[data-cell='X'][data-winning='true'] {
      background-color: #4ade80; /* Tailwind green-400 */
      animation: pulse-win 1s infinite;
    }
  }

  @keyframes pulse-win {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  .tictactoe-id {
    background-color: #4f46e5; /* Tailwind indigo-600 */
    color: white;
    &[data-cell='O'] {
      background-color: #dc2626; /* Tailwind red-600 */
    }

    &[data-cell='X'] {
      background-color: #134e4a; /* Tailwind teal-900 */
    }
  }

  .in-turn {
    background-color: #4f46e5; /* Tailwind indigo-600 */
  }
  .banner {
    background-color: #64748b;
    z-index: 1;
    &[data-winner='true'] {
      background-color: #4ade80; /* Tailwind green-400 */
    }

    &[data-winner='false'] {
      background-color: #dc2626; /* Tailwind red-600 */
    }
  }
  .board {
    width: fit-content;
    max-width: 100%;
    margin-inline: auto;
  }
  .scrollable-content {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, and Edge */
    }
  }
  .btn-yes {
    background-color: green;
    color: white;
    &:hover {
      background-color: rgb(0, 255, 0, 0.8);
    }
  }
  .btn-no {
    background-color: red;
    color: white;
    &:hover {
      background-color: rgb(255, 0, 0, 0.8);
    }
  }
  .scoreboard {
    background-color: #457abe;
  }
</style>
