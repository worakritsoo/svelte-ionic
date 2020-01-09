<script>
  import AltDetails from "./AltDetails.svelte";
  import { onMount } from "svelte";
  import { techs } from "./techs.js";
  import {
    registerWebComponentOnce,
    getIonicNav
  } from "../../services/IonicControllers";

  import { navigate } from "svelte-routing";

  // registerWebComponentOnce("nav-detail", NavDetail);

  let nav;
  onMount(() => {
    nav = getIonicNav();
    console.log("NAV", nav);
  });

  function showDetail() {
    const title = "Tux";
    const tech = techs.find(tech => tech.title === title);
    //  nav.push("nav-detail", { tech });

    navigate("/navdetails/" + title);
  }
</script>

<svelte:head>
  <title>Ionic UI Companion App - Tabs-Games</title>
</svelte:head>
<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Games</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <ion-button expand="full" color="secondary" on:click={showDetail}>
    Open a detail nav with back button.
  </ion-button>
</ion-content>
