<script>
  import { Socket } from "phoenix";
  import { liveViewSockets } from "../stores/liveViewSockets"

  let { live, socket } = $props();
  $effect(() => {
    liveViewSockets.set(live)
    let token = localStorage.getItem("token")
    if (!token) {
      token = self.crypto.randomUUID()
      localStorage.setItem("token", token)
    }
    socket = (new Socket("/socket", {params: {token: token}}))
    socket.connect()
  })
</script>
