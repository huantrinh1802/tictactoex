<script>
  import { Presence, Socket } from 'phoenix';
  import { translate_room_name, initialise_socket } from '../lib/utils';
  let { user } = $props();
  let rooms = $state({});
  let socket;
  let channel;
  let presence;
  $effect(() => {
    socket = initialise_socket(user?.email);
    join();
  });
  function join() {
    channel = socket.channel('lobby', { token: user?.email });
    presence = new Presence(channel);
    channel
      .join()
      .receive('ok', (resp) => {
        console.log('Joined successfully', resp);
        channel.on('channel_list', (payload) => {
          rooms = Object.fromEntries(Object.entries(payload.rooms).filter(([room_name, room]) => room.members.length < 2 || room.members.find((member) => member == user?.email)));
        });
        channel.on('room_changed', (payload) => {
          rooms = Object.fromEntries(Object.entries(payload.rooms).filter(([room_name, room]) => room.members.length < 2 || room.members.find((member) => member == user?.email)));
        });
      })
      .receive('error', (resp) => {
        console.log('Unable to join', resp);
      });
    presence.onSync(() => {
      presence.list((id, meta) => {});
    });
  }
  async function create_and_join_room() {
    channel
      .push('create_room', { height: 20, width: 20, winning: 5 })
      .receive('ok', (payload) => {
        window.location.href = '/game/' + payload.room;
      })
      .receive('error', (err) => console.log('phoenix errored', err));
  }
  function join_room(room) {
    window.location.href = '/game/' + room;
  }
</script>

<div class="grid w-full gap-4">
  <button
    class="mx-auto w-fit rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    onclick={create_and_join_room}>Create Room!</button>
  <div class="rooms-list grid grid-cols-2 items-center justify-center gap-2">
    {#each Object.entries(rooms) as [room, data]}
      <p>{translate_room_name(room)} [{data.height}x{data.width}]</p>
      <button
        class="w-fit rounded bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-700"
        onclick={() => join_room(room)}>
        {#if data.members.includes(user?.email)}
          Rejoin
        {:else}
          Join
        {/if}
      </button>
    {/each}
  </div>
</div>

<style>
  .rooms-list {
    grid-template-columns: 1fr auto;
  }
</style>
