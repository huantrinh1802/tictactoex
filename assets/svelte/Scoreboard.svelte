<script>
  let { user, live, scoreboards } = $props();
</script>

<div class="grid gap-4">
  <h2 class="text-2xl font-semibold">Scoreboard</h2>

  <div class="scoreboard grid grid-cols-5 place-items-center items-center rounded-lg bg-black px-4 py-2 shadow-lg">
    <div class="px-4 text-lg font-bold text-white">Opponent</div>
    <div class="px-4 text-lg font-bold text-white">Wins</div>
    <div class="px-4 text-lg font-bold text-white">Losses</div>
    <div class="px-4 text-lg font-bold text-white">Draws</div>
    <div class="px-4 text-lg font-bold text-white">Total</div>

    <div class="col-span-5 grid w-full grid-cols-subgrid place-items-center items-center bg-teal-500 text-white">
      {#each scoreboards.sort((a, b) => b.total - a.total) as scoreboard}
        <div class="px-4 text-lg font-bold">{scoreboard.opponent.name ? scoreboard.opponent.name : scoreboard.opponent.email}</div>
        <div class="px-4 text-lg font-bold">{scoreboard.wins}</div>
        <div class="px-4 text-lg font-bold">{scoreboard.losses}</div>
        <div class="px-4 text-lg font-bold">{scoreboard.draws}</div>
        <div class="px-4 text-lg font-bold">{scoreboard.wins + scoreboard.losses + scoreboard.draws}</div>
      {/each}
    </div>
  </div>
</div>

<style>
</style>
