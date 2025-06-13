// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
// import "./user_socket.js"

// You can include dependencies in two ways.
//
// The simplest option is to put them in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//

// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import 'phoenix_html';
// Establish Phoenix Socket and LiveView configuration.
import { Socket } from 'phoenix';
import { LiveSocket } from 'phoenix_live_view';
import topbar from '../vendor/topbar';
import { getHooks } from 'live_svelte';
import * as Components from '../svelte/**/*.svelte';
import './user_socket.js';

let Hooks = { ...getHooks(Components) };

Hooks.Dialog = {
  mounted() {
    const triggerId = this.el.dataset.trigger;
    document.querySelector(`#${triggerId}`).addEventListener('click', () => {
      this.el.showModal();
    });
    this.handleEvent('finish', (event) => {
      this.el.close();
    });
  },
};
Hooks.ShowDialog = {
  mounted() {
    this.handleEvent('open_dialog', ({ id }) => {
      const dialog = document.getElementById(id);
      if (dialog && !dialog.open) {
        dialog.showModal();
      }
    });
  },
};

Hooks.CopyToClipboard = {
  mounted() {
    const targetId = this.el.dataset.copyTarget;
    const element = document.getElementById(targetId);

    this.el.addEventListener('click', async () => {
      if (!element) return;

      const textToCopy = element.textContent?.trim() || '';
      try {
        await navigator.clipboard.writeText(textToCopy);

        this.el.textContent = '✅';
        setTimeout(() => {
          this.el.textContent = '📋';
        }, 1000);
      } catch (err) {
        console.error('Copy to clipboard failed', err);
        this.el.textContent = '❌';
      }
    });
  },
};
let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute('content');
let liveSocket = new LiveSocket('/live', Socket, {
  hooks: Hooks,
  params: { _csrf_token: csrfToken },
  dom: {
    onBeforeElUpdated: (fromEl, toEl) => {
      if (['DIALOG', 'DETAILS'].indexOf(fromEl.tagName) >= 0) {
        Array.from(fromEl.attributes).forEach((attr) => {
          toEl.setAttribute(attr.name, attr.value);
        });
      }
    },
    onDisconnect(el) {
      console.log('LiveView disconnected from server');
    },
  },
});

// Show progress bar on live navigation and form submits
topbar.config({ barColors: { 0: '#29d' }, shadowColor: 'rgba(0, 0, 0, .3)' });
window.addEventListener('phx:page-loading-start', (_info) => topbar.show(300));
window.addEventListener('phx:page-loading-stop', (_info) => topbar.hide());

// connect if there are any LiveViews on the page
liveSocket.connect();

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
window.liveSocket = liveSocket;
