<script>
  import IonMenu from "./components/IonMenu.svelte";
  import Routes from "./routes/Routes.svelte";
  import { Capacitor } from "@capacitor/core";

  import { Workbox } from "workbox-window";

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
</script>

<svelte:head>
  <title>Ionic Svelte UI demo</title>

</svelte:head>

<ion-app>
  <IonMenu />
  <Routes />

</ion-app>
