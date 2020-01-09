<script>
  const changeValue = event => {
    console.log("Change of value", event.detail);
  };
</script>

<svelte:head>
  <title>Ionic UI Companion App - Datetime</title>
</svelte:head>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>DateTime</ion-title>
  </ion-toolbar>
</ion-header>
,
<ion-content fullscreen>
  <ion-list>
    <ion-item>
      <ion-input placeholder="Title" />
    </ion-item>
    <ion-item>
      <ion-input placeholder="Location" />
    </ion-item>
    <ion-item-divider />
    <ion-item>
      <ion-label>Start Date</ion-label>
      <ion-datetime
        on:ionChange={changeValue}
        value="1990-02-19"
        placeholder="Select Date" />
    </ion-item>
    <ion-item>
      <ion-label>Start Time</ion-label>
      <ion-datetime
        on:ionChange={changeValue}
        display-format="h:mm A"
        picker-format="h:mm A"
        value="1990-02-19T07:43Z" />
    </ion-item>
    <ion-item>
      <ion-label>Ends</ion-label>
      <ion-datetime
        on:ionChange={changeValue}
        value="1990-02-20"
        placeholder="Select Date" />
    </ion-item>
    <ion-item>
      <ion-label>Repeat</ion-label>
      <ion-datetime placeholder="Never" disabled />
    </ion-item>
    <ion-item>
      <ion-label>Travel Time</ion-label>
      <ion-datetime placeholder="None" disabled />
    </ion-item>
    <ion-item-divider />
    <ion-item>
      <ion-label>Alert</ion-label>
      <ion-datetime placeholder="None" disabled />
    </ion-item>
  </ion-list>
</ion-content>
