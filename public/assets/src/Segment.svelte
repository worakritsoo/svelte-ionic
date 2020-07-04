<style>
  ion-segment {
    padding: 5px;
  }
</style>

<svelte:head>
  <title>Ionic UI Companion App - Segment</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Segment</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <ion-list-header>Default</ion-list-header>

  <!-- Label only -->
  <ion-segment value="call">
    <ion-segment-button value="call">
      <ion-label>Call</ion-label>
    </ion-segment-button>
    <ion-segment-button>
      <ion-label>Favorite</ion-label>
    </ion-segment-button>
    <ion-segment-button>
      <ion-label>Map</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- Icon only -->
  <ion-segment color="secondary" value="heart">
    <ion-segment-button>
      <ion-icon name="call" />
    </ion-segment-button>
    <ion-segment-button value="heart">
      <ion-icon name="heart" />
    </ion-segment-button>
    <ion-segment-button>
      <ion-icon name="pin" />
    </ion-segment-button>
  </ion-segment>

  <!-- Icon top -->
  <ion-segment color="tertiary" value="favorite">
    <ion-segment-button>
      <ion-label>Call</ion-label>
      <ion-icon name="call" />
    </ion-segment-button>
    <ion-segment-button value="favorite">
      <ion-label>Favorite</ion-label>
      <ion-icon name="heart" />
    </ion-segment-button>
    <ion-segment-button>
      <ion-label>Map</ion-label>
      <ion-icon name="pin" />
    </ion-segment-button>
  </ion-segment>

  <!-- Icon bottom -->
  <ion-segment color="success" value="call">
    <ion-segment-button value="call" layout="icon-bottom">
      <ion-icon name="call" />
      <ion-label>Call</ion-label>
    </ion-segment-button>
    <ion-segment-button layout="icon-bottom">
      <ion-icon name="heart" />
      <ion-label>Favorite</ion-label>
    </ion-segment-button>
    <ion-segment-button layout="icon-bottom">
      <ion-icon name="pin" />
      <ion-label>Map</ion-label>
    </ion-segment-button>
  </ion-segment>

  <ion-list-header>Scrollable</ion-list-header>

  <!-- Icon start -->
  <ion-segment color="warning" value="call" scrollable>
    <ion-segment-button value="call" layout="icon-start">
      <ion-label>Call</ion-label>
      <ion-icon name="call" />
    </ion-segment-button>
    <ion-segment-button layout="icon-start">
      <ion-label>Favorite</ion-label>
      <ion-icon name="heart" />
    </ion-segment-button>
    <ion-segment-button layout="icon-start">
      <ion-label>Map</ion-label>
      <ion-icon name="pin" />
    </ion-segment-button>
  </ion-segment>

  <!-- Icon end -->
  <ion-segment color="danger" value="call" scrollable>
    <ion-segment-button value="call" layout="icon-end">
      <ion-icon name="call" />
      <ion-label>Call</ion-label>
    </ion-segment-button>
    <ion-segment-button layout="icon-end">
      <ion-icon name="heart" />
      <ion-label>Favorite</ion-label>
    </ion-segment-button>
    <ion-segment-button layout="icon-end">
      <ion-icon name="pin" />
      <ion-label>Map</ion-label>
    </ion-segment-button>
  </ion-segment>
</ion-content>
