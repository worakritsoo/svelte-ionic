<script>
  import { navigate } from "svelte-routing";
  import { fly } from "svelte/transition";

  import { Plugins } from "@capacitor/core";
  import localforage from "localforage";

  setTimeout(() => {
    navigate("/intro");
  }, 3500);

  console.log("STORA", localforage);

  //  Plugins.Geolocation.getCurrentPosition().then(position => {
  //    console.log("POS", position);
  //  });

  Plugins.Share.share({
    title: "See cool stuff",
    text: "Really awesome thing you need to see right meow",
    url: "http://ionicframework.com/",
    dialogTitle: "Share with buddies"
  })
    .then(shareRet => {
      console.log("SHARE", shareRet);
    })
    .catch(error => {
      console.log("SHARE ERROR", error);
    });
</script>

<ion-header translucent>
  <ion-toolbar>

    <ion-title>Ionic Svelte</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <br />
  <img
    src="assets/img/great-success.png"
    alt="Great success"
    in:fly={{ y: 200, duration: 750 }} />

</ion-content>
