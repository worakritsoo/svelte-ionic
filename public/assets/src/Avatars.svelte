<script>
  import { onMount } from "svelte";
  import { IonicShowToast } from "./../../services/IonicControllers";

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
    if (!avatar.animate) {
      IonicShowToast({
        color: "danger",
        duration: 4000,
        message: "Web Animations API not available",
        showCloseButton: true
      });
    } else {
      avatar.animate(aliceTumbling, aliceTiming);
    }
  };
</script>

<style>
  .story-avatar {
    background: blue;
    height: 64px;
    width: 64px;
    padding: 2px;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .story-img {
    border: 2px solid red;
    border-radius: 50%;
  }
</style>

<svelte:head>
  <title>Ionic UI Companion App - Avatars</title>
</svelte:head>

<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Avatar</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>

  <ion-avatar class="story-avatar">
    <img
      alt="avatar-social"
      style=" border: 2px solid red; border-radius: 50%; "
      src="https://s3.amazonaws.com/uifaces/faces/twitter/nemanjaivanovic/128.jpg" />
  </ion-avatar>
  Courtesy : https://github.com/thenaim/ionic-tk-social-network
  <br />
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
    <ion-item on:click={startAnimation} bind:this={avatar}>
      <ion-avatar slot="end">
        <img alt="avatar" src="../assets/img/ionic/avatar.svg" />
      </ion-avatar>
      <ion-label>
        <h3>Click me!</h3>
        <p>Click this item to launch the WEB Animation API</p>
      </ion-label>
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
  </ion-list>

</ion-content>
