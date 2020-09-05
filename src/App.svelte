<style>
:global(html) {
  /* this will apply to <html doc> */
  --ion-font-family: "Helvetica Neue", "Roboto", sans-serif;
}
</style>

<script lang="ts">
import { Router } from "@sveltech/routify";
export let routes;

// import { FirebaseApp } f rom "sveltefire";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import "firebase/performance"; // gives error
// import "firebase/analytics"; // gives error

let firebaseConfig = {
  apiKey: "AIzaSyAOul3jp5hfGOfRWwqxjrvU4i965DE11Qk",
  authDomain: "ionicsvelte.firebaseapp.com",
  databaseURL: "https://ionicsvelte.firebaseio.com",
  projectId: "ionicsvelte",
  storageBucket: "ionicsvelte.appspot.com",
  messagingSenderId: "512207280782",
  appId: "1:512207280782:web:aa2cc110c3ac12e5ef07df",
  measurementId: "G-NNGFLY1HYH",
};

firebase.initializeApp(firebaseConfig);

// once routify is better documented, figure out a better way
const myRoutes = routes.filter((route) => {
  return (
    route.name != "ionic/Games" &&
    route.name != "ionic/Music" &&
    route.name != "ionic/ModalExtra" &&
    route.name != "ionic/Navhome" &&
    route.name != "ionic/NavDetail" &&
    route.name != "ionic/PopoverExtra" &&
    route.name != "ionic/NavList" &&
    route.name != "ionic/AltDetails"
  );
});
</script>

<Router routes="{myRoutes}" />
