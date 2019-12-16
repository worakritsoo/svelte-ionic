<script>
  import IonMenu from "./components/IonMenu.svelte";
  import Routes from "./routes/Routes.svelte";
  import { Capacitor } from "@capacitor/core";
</script>

<svelte:head>
  <title>Ionic Svelte UI demo</title>

</svelte:head>

<ion-app>
  <IonMenu />
  <Routes />

</ion-app>
