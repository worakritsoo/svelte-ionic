<script>

// your script goes here
let title='Setting'
const pkg = {
  name: 'svelte',
  version: 3,
  speed: 'blazing',
  website: 'https://svelte.dev'
};
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<svelte:head>
  <title>Ionic Companion - Setting</title>
</svelte:head>
<ion-header translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <ion-title>{title}</ion-title>
    </ion-toolbar>
  </ion-header>
<ion-content fullscreen>
  <ion-row>
    <ion-col>
      <div>1 of 2</div>
    </ion-col>
    <ion-col>
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
</ion-content>

