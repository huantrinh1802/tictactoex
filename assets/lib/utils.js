export function translate_room_name(room_name) {
  return room_name.split('_').reduce((acc, cur) => acc + ' ' + cur[0].toUpperCase() + cur.slice(1), '');
}
