<script>
  function openMenu() {
    console.log("asdadasd", document.querySelector("ion-menu-controller"));
    document.querySelector("ion-menu-controller").open();
  }
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Home</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  sadsa
  <ion-button expand="block" on:click={openMenu}>Open Menu</ion-button>
</ion-content>
