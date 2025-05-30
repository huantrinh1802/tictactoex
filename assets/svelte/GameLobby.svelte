<script>
  import { Presence, Socket } from 'phoenix';
  import { liveViewSockets } from '../stores/liveViewSockets';
  let rooms = $state({});
  let socket;
  let channel;
  let presence;

  $effect(() => {
    let token = sessionStorage.getItem('token');
    if (!token) {
      // token = self.crypto.randomUUID();
      token = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
      sessionStorage.setItem('token', token);
    }
    socket = new Socket('/socket', { params: { token: token } });
    socket.connect();
    join();
  });
  function join() {
    channel = socket.channel('lobby', { token: sessionStorage.getItem('token') });
    presence = new Presence(channel);
    channel
      .join()
      .receive('ok', (resp) => {
        console.log('Joined successfully', resp);
        channel.on('channel_list', (payload) => {
          console.log('channel_list', payload);
          rooms = payload.rooms;
        });
        channel.on('room_changed', (payload) => {
          console.log('room_created', payload);
          rooms = payload.rooms;
        })
        // channel.on('user_joined', (payload) => {
        //   console.log('user_joined_room', payload);
        //   rooms = payload.rooms;
        // })
        // channel.on('user_left', (payload) => {
        //   console.log('user_left_room', payload);
        //   rooms = payload.rooms;
        // })
      })
      .receive('error', (resp) => {
        console.log('Unable to join', resp);
      });
    presence.onSync(() => {
      presence.list((id, meta) => {});
    });
  }
  async function create_and_join_room() {
    channel.push('create_room', { height: 20, width: 20, winning: 5 })
    .receive('ok', (payload) => {
      window.location.href = '/game/' + payload.room;      
    })
    .receive('error', (err) => console.log('phoenix errored', err));
  }
  function join_room(room) {
    window.location.href = '/game/' + room;
  }
</script>

<div class="grid gap-2">
  {#each Object.entries(rooms) as [room, data]}
    {#if data.count <= 1}
      <button onclick={() => join_room(room)}>Join {room} [{data.height}x{data.width}]</button>
    {/if}
  {/each}
  <button onclick={create_and_join_room}>Create Room!</button>
</div>
