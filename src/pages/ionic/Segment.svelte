<style>
  ion-segment {
    padding: 5px;
  }
</style>

<ion-header translucent>
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
  <ion-segment>
    <ion-segment-button checked>
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
  <ion-segment color="secondary">
    <ion-segment-button>
      <ion-icon name="call" />
    </ion-segment-button>
    <ion-segment-button checked>
      <ion-icon name="heart" />
    </ion-segment-button>
    <ion-segment-button>
      <ion-icon name="pin" />
    </ion-segment-button>
  </ion-segment>

  <!-- Icon top -->
  <ion-segment color="tertiary">
    <ion-segment-button>
      <ion-label>Call</ion-label>
      <ion-icon name="call" />
    </ion-segment-button>
    <ion-segment-button checked>
      <ion-label>Favorite</ion-label>
      <ion-icon name="heart" />
    </ion-segment-button>
    <ion-segment-button>
      <ion-label>Map</ion-label>
      <ion-icon name="pin" />
    </ion-segment-button>
  </ion-segment>

  <!-- Icon bottom -->
  <ion-segment color="success">
    <ion-segment-button checked layout="icon-bottom">
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
  <ion-segment color="warning" scrollable>
    <ion-segment-button checked layout="icon-start">
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
  <ion-segment color="danger" scrollable>
    <ion-segment-button checked layout="icon-end">
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
