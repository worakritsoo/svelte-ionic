<script>
  const dualRange = document.querySelector("#dual-range");
  dualRange.value = { lower: 33, upper: 60 };
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Range</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <ion-list>
    <ion-list-header>Adjust Display</ion-list-header>

    <ion-item>
      <ion-range value="20">
        <ion-icon slot="start" size="small" name="sunny" />
        <ion-icon slot="end" name="sunny" />
      </ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="-200" max="200" pin color="secondary">
        <ion-icon slot="start" size="small" name="contrast" />
        <ion-icon slot="end" name="contrast" />
      </ion-range>
    </ion-item>

    <ion-item>
      <ion-range id="dual-range" dual-knobs pin color="dark">
        <ion-icon slot="start" size="small" name="brush" />
        <ion-icon slot="end" name="brush" />
      </ion-range>
    </ion-item>

    <ion-item>
      <ion-range
        min="1000"
        max="2000"
        step="100"
        value="1400"
        snaps
        color="danger">
        <ion-icon slot="start" size="small" color="danger" name="thermometer" />
        <ion-icon slot="end" color="danger" name="thermometer" />
      </ion-range>
    </ion-item>
  </ion-list>
</ion-content>
