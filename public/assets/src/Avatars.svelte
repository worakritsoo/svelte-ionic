<script>
  import { onMount } from "svelte";

  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
  const aliceTiming = {
    duration: 7000
  };

  const aliceTumbling = [
    { transform: "rotate(0) scale(1)", color: "#000" },
    { transform: "rotate(360deg) scale(0.1)", color: "#000" },
    { transform: "rotate(0) scale(1)", color: "#000" }
  ];

  let avatar;
  const startAnimation = () => {
    avatar.animate(aliceTumbling, aliceTiming);
  };
</script>

<svelte:head>
  <title>Ionic UI Companion App - Avatars</title>
</svelte:head>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Avatar</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>

  <ion-list-header>Default</ion-list-header>
  <ion-avatar class="ion-margin-start">
    <img alt="avatar" src="../assets/img/ionic/avatar.svg" />
  </ion-avatar>

  <ion-list-header>Chip Avatar</ion-list-header>
  <ion-chip class="ion-margin-start">
    <ion-avatar>
      <img alt="avatar" src="../assets/img/ionic/avatar.svg" />
    </ion-avatar>
    <ion-label>Kit Bishop</ion-label>
  </ion-chip>

  <ion-list>
    <ion-list-header>Item Avatars</ion-list-header>
    <ion-item>
      <ion-avatar slot="start">
        <img alt="avatar" src="../assets/img/ionic/avatar.svg" />
      </ion-avatar>
      <ion-label>Lorem ipsum</ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <img alt="avatar" src="../assets/img/ionic/avatar.svg" />
      </ion-avatar>
      <ion-label>
        <h3>Lorem ipsum</h3>
        <p>dolor sit amet</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="start">
        <img alt="avatar" src="../assets/img/ionic/avatar.svg" />
      </ion-avatar>
      <ion-label>
        <h3>Lorem ipsum</h3>
        <p>dolor sit amet</p>
        <p>consectetur adipiscing elit. Duis ut urna neque.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="end">
        <img alt="avatar" src="../assets/img/ionic/avatar.svg" />
      </ion-avatar>
      <ion-label>Lorem ipsum</ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar slot="end">
        <img alt="avatar" src="../assets/img/ionic/avatar.svg" />
      </ion-avatar>
      <ion-label>
        <h3>Lorem ipsum</h3>
        <p>dolor sit amet</p>
      </ion-label>
    </ion-item>
    <ion-item on:click={startAnimation} bind:this={avatar}>
      <ion-avatar slot="end">
        <img alt="avatar" src="../assets/img/ionic/avatar.svg" />
      </ion-avatar>
      <ion-label>
        <h3>Click me!</h3>
        <p>Click this item to launch the WEB Animation API</p>
      </ion-label>
    </ion-item>
  </ion-list>
</ion-content>
