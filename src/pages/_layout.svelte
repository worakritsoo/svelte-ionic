<script>
  import { IonicShowModal } from "../services/IonicControllers";

  import localforage from "localforage";

  import SourceViewer from "../components/SourceViewer.svelte";
  import Menu from "../components/Menu.svelte";
  import CookieJar from "../components/CookieJar.svelte";

  // source viewer and pulsating class for the FAB
  let pulseSourceViewer = false;
  localforage.getItem("has-seen-source").then(value => {
    console.log("has-seen-source", value);
    if (!value) {
      // let's not trigger the user immmediately
      setTimeout(() => {
        pulseSourceViewer = true;
        // and stop the pulse after 1 minute
        setTimeout(() => {
          pulseSourceViewer = false;
        }, 60000);
      }, 20000);
    }
  });

  // handler for the sourceviewer
  const viewSource = () => {
    localforage.setItem("has-seen-source", true);
    pulseSourceViewer = false;

    IonicShowModal("source-viewer", SourceViewer, {
      name: window.location.pathname
    });
  };
</script>

<style>
  @keyframes shadow-pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    }
    100% {
      box-shadow: 0 0 0 135px rgba(0, 0, 0, 0);
    }
  }

  .pulseSourceViewer {
    border-radius: 50%;
    animation: shadow-pulse 1s infinite;
  }
</style>

<!-- src/App.svelte -->
<svelte:head>
  <title>Ionic UI Companion App - svelte power!</title>
</svelte:head>

<ion-app>
  <ion-fab horizontal="end" vertical="bottom" slot="fixed">
    <ion-fab-button class:pulseSourceViewer on:click={viewSource}>
      <ion-icon name="code-working" />
    </ion-fab-button>
  </ion-fab>
  <ion-split-pane>
    <Menu />
    <div class="ion-page" main>
      <slot />
    </div>
  </ion-split-pane>
</ion-app>
<CookieJar />
