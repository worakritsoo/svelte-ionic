<script>
  let overlayElement = document.querySelector("ion-popover-controller");
  const closeOverlay = () => {
    overlayElement.dismiss({ data: Date.now() });
  };
</script>

<ion-list>
  <ion-list-header>Ionic</ion-list-header>
  <ion-item button>Learn Ionic</ion-item>
  <ion-item button>Documentation</ion-item>
  <ion-item button>Showcase</ion-item>
  <ion-item button>GitHub Repo</ion-item>
</ion-list>
<ion-button expand="block" on:click={closeOverlay}>Close</ion-button>
