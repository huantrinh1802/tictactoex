import { Socket } from 'phoenix';
export function translate_room_name(room_name) {
  return room_name.split('_').reduce((acc, cur) => acc + ' ' + cur[0].toUpperCase() + cur.slice(1), '');
}

export function initialise_socket(token) {
  if (token) {
    let socket = new Socket('/socket', { params: { token: token } });
    socket.connect();
    return socket;
  }
  return;
}
