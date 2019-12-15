<script>
  import IonMenu from "./components/IonMenu.svelte";
  import Routes from "./routes/Routes.svelte";
  import { Capacitor } from "@capacitor/core";
</script>

<svelte:head>
  <title>Svelte project template</title>

  <script src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js">

  </script>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
</svelte:head>

<ion-app>
  <IonMenu />
  <Routes />

</ion-app>
