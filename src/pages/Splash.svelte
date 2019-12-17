<script>
  import { navigate } from "svelte-routing";
  import { fly } from "svelte/transition";

  import { Plugins } from "@capacitor/core";
  import localforage from "localforage";

  const splitpane = document.querySelector("ion-split-pane");
  splitpane.disabled = true;

  setTimeout(() => {
    splitpane.disabled = false;
    navigate("/slides");
  }, 4000);

  console.log("STORAGE", localforage);
  console.log("CAPACITOR PLUGINS", Plugins);

  //  Plugins.Geolocation.getCurrentPosition().then(position => {
  //    console.log("POS", position);
  //  });

  /*
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

    */
</script>

<style>
  h1,
  img {
    text-align: center;
    margin: 0 auto;
  }
</style>

<ion-header translucent>
  <ion-toolbar>
    <ion-title>Jagshemash!</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <br />
  <img
    src="assets/img/great-success.png"
    alt="Great success"
    in:fly={{ y: 200, duration: 750 }} />
  <br />
  <br />
  <h1 in:fly={{ y: 600, duration: 1900 }}>Great success!</h1>
</ion-content>
