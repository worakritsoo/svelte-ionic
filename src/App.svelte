<script>
  import IonMenu from "./components/IonMenu.svelte";
  import Routes from "./routes/Routes.svelte";
  import { Capacitor } from "@capacitor/core";

  import { Workbox } from "workbox-window";

  import SourceViewer from "./components/SourceViewer.svelte";
  import { IonicShowModal } from "./services/IonicControllers";

  // Check that service workers are supported
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("sw.js");

    // wb.addEventListener("installed", event => {
    //  if (event.isUpdate) {
    //  if (confirm(`New content is available!. Click OK to refresh`)) {
    //     window.location.reload();
    //   }
    //  }
    // });

    wb.register();

    // Use the window load event to keep the page load performant
    //	window.addEventListener('load', () => {
    //		navigator.serviceWorker.register('/sw.js');
    //	});
  }

  const viewSource = () => {
    console.log("asdsa", window.location.pathname);
    console.log("asdasds2");
    IonicShowModal("source-viewer", SourceViewer, {
      name: window.location.pathname
    }).then(data => console.log(data));
  };
</script>

<svelte:head>
  <title>Ionic Svelte UI demo</title>
</svelte:head>

<ion-app>
  <ion-fab horizontal="end" vertical="bottom" slot="fixed">
    <ion-fab-button color="dark" on:click={viewSource}>
      <ion-icon name="code-working" />
    </ion-fab-button>
  </ion-fab>
  <ion-split-pane>
    <IonMenu />
    <Routes main />
  </ion-split-pane>
</ion-app>
