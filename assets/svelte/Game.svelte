<script>
  import { Presence, Socket } from 'phoenix';
  import { onMount } from 'svelte';
  import { liveViewSockets } from '../stores/liveViewSockets';
  let { room_name } = $props();
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

  function updateShadows() {
    if (!container) return;
    showLeft = container.scrollLeft > 0;
    showRight = container.scrollLeft + container.clientWidth < container.scrollWidth;
  }

  $effect(() => {
    console.log('Joining room', room_name);
  });
  $effect(() => {
    if (container) {
      console.log('Updating shadows');
      updateShadows();
      container.addEventListener('scroll', updateShadows);
    }
  });
  onMount(() => {
    let token = sessionStorage.getItem('token');
    if (!token) {
      token = self.crypto.randomUUID();
      sessionStorage.setItem('token', token);
    }
    socket = new Socket('/socket', { params: { token: token } });
    socket.connect();
    join();
    if ($liveViewSockets) {
      console.log('Connected to live view socket');
    }
  });
  function generateTicTacToeBoard(height, width) {
    for (let i = 0; i < height; i++) {
      board.push([]);
      for (let j = 0; j < width; j++) {
        board[i].push('');
      }
    }
  }
  function join() {
    channel = socket.channel(`room:${room_name}`, { token: sessionStorage.getItem('token') });
    let token = sessionStorage.getItem('token');
    presence = new Presence(channel);
    channel
      .join()
      .receive('ok', (resp) => {
        console.log('Joined successfully', resp);
        channel.on('played', (payload) => {
          board = payload.board;
          turn = payload.turn;
          // check if need to scroll
          const element = document.getElementById(`${payload.x}-${payload.y}`);
          const rect = element.getBoundingClientRect();
          if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
            document.getElementById(`${payload.x}-${payload.y}`).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
          }
        });
        channel.on('board_created', (payload) => {
          board = payload.board;
        });
        channel.on('game_over', (payload) => {
          board = payload.board;
          winningCells = payload.win_coords;
          if (payload?.winner) {
            winner = payload.winner;
          }
        });
      })
      .receive('error', (resp) => {
        console.log('Unable to join', resp);
        alert('Unable to join');
        window.location.href = '/lobby';
      });
    presence.onSync(() => {
      presence.list((id, meta) => {
        console.log('Presence list', id, meta);
        if (meta.metas.length < 2) {
          waiting = true;
        } else {
          waiting = false;
        }
        if (meta.metas.findIndex((m) => m.token == token) == 0) {
          player = 'X';
        } else {
          player = 'O';
        }
      });
    });
    // generateTicTacToeBoard(20, 20);
    // channel.push('start_board', { board: board });
  }
  function ping(room) {
    channel.push('ping', {});
  }
  function play(x, y) {
    channel
      .push('play', { x: x, y: y, player: player })
      .receive('ok', (payload) => {
        board = payload.board;
        turn = payload.turn;
        if (payload?.game_over) {
          winningCells = payload.win_coords;
          if (payload?.winner) {
            winner = payload.winner;
          }
        }
      })
      .receive('error', (err) => console.log('phoenix errored', err))
      .receive('timeout', () => console.log('timed out pushing'));
  }
  function isWinningCell(col, row) {
    return winningCells.some(([winCol, winRow]) => winCol === col && winRow === row);
  }
  function translate_room_name(room_name) {
    return room_name.split('_').reduce((acc, cur) => acc + ' ' + cur[0].toUpperCase() + cur.slice(1), '');
  }
</script>

<!-- <ServiceWorker bind:serviceWorkerVersion></ServiceWorker> -->
<div class="flex gap-2 justify-between items-center py-2">
  <h2 class="text-2xl font-semibold">Room: {translate_room_name(room_name)}</h2>
  <button class="rounded-lg bg-red-600 px-4 py-2 text-white" onclick={() => window.location.href = '/lobby'}>Leave</button>
</div>
{#if board.length > 0 && player && !waiting}
  <div
    class="banner sticky inset-x-0 top-2 z-10 flex w-full items-center justify-between rounded-lg p-4"
    data-winner={winner && player == winner}>
    {#if winner}
      <div class="flex w-full justify-center">
        <!-- Winner text receives from both sides -->
        <p class="text-xl font-semibold text-white">
          {#if player == winner}You win!
          {:else}
            Player {winner} Wins!{/if}
        </p>
      </div>
    {:else}
      <div class="flex w-full items-center justify-between">
        <p
          class="rounded-lg bg-amber-600 px-4 py-2 text-white"
          class:in-turn={turn == player}>
          {#if turn == player}Your turn!{:else}Waiting for your turn...{/if}
        </p>

        <p class="text-white">
          Player:
          <span
            class="tictactoe-id ml-2 inline-block rounded-lg bg-white px-2 py-1 text-black"
            data-cell={player}>{player}</span>
        </p>
      </div>
    {/if}
  </div>
  <div class="relative mt-2 rounded-lg bg-black p-2">
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
      class="flex flex-col gap-2 overflow-x-auto">
      {#each board as row, col_index (col_index)}
        <div class="flex min-w-max gap-2">
          {#each row as cell, row_index (row_index)}
            <button
              disabled={turn != player || cell != '' || winningCells.length > 0}
              id="{col_index}-{row_index}"
              class="tictactoe-cell aspect-square min-h-[12px] w-full cursor-pointer rounded-lg text-white"
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
<div class="grid gap-2">
  {#if player && waiting}
    <p>Waiting for another player...</p>
  {/if}
</div>

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
    background-color: gray; /* Tailwind indigo-600 */
    &[data-winner='true'] {
      background-color: #4ade80; /* Tailwind green-400 */
    }

    &[data-winner='false'] {
      background-color: #dc2626; /* Tailwind red-600 */
    }
  }
</style>
