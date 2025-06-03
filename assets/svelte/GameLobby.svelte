<script>
  import { Presence, Socket } from 'phoenix';
  import { translate_room_name, initialise_socket } from '../lib/utils';
  let { user } = $props();
  let rooms = $state({});
  let socket;
  let channel;
  let presence;
  let new_room = $state({ size: 20, winning: 5 });
  let new_room_modal = $state();
  $effect(() => {
    socket = initialise_socket(user?.email);
    join();
  });
  $effect(() => {
    if (new_room.size < new_room.winning) {
      new_room.winning = Math.min(Math.max(new_room.size, 3), 5);
    }
    if (new_room.size == null) {
      new_room.size = 3;
    }
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
      .push('create_room', { height: new_room.size, width: new_room.size, winning: new_room.winning })
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
    onclick={new_room_modal.showModal()}>Create Room!</button>
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
<dialog
  id="create-room-dialog"
  class="modal"
  bind:this={new_room_modal}>
  <h3 class="py-4 text-center text-lg font-bold">Create a room</h3>
  <form
    id="create-room-form"
    method="dialog"
    class="modal-box">
    <label for="height">Size</label>
    <input
      type="number"
      id="size"
      min="3"
      name="size"
      class="input input-bordered"
      bind:value={new_room.size} />
    <label for="winning">Winning Length</label>
    <input
      type="number"
      bind:value={new_room.winning}
      id="winning"
      name="winning"
      class="input input-bordered" />
    <button class="btn close-btn">Close</button>
    <button
      onclick={create_and_join_room}
      type="submit"
      class="btn submit-btn">Create</button>
  </form>
</dialog>

<style>
  .rooms-list {
    grid-template-columns: 1fr auto;
  }
  .modal-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: white;
    &.close-btn {
      background-color: red;
      &:hover {
        background-color: rgb(255, 0, 0, 0.8);
      }
    }
    &.submit-btn {
      background-color: green;
      &:hover {
        background-color: rgb(0, 255, 0, 0.8);
      }
    }
  }
  .modal {
    border: 1px solid rgba(0, 0, 0, 0.1);
    shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 2rem 2rem;
    gap: 2rem;
    &::backdrop {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
</style>
