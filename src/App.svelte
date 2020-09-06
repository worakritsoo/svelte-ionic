<style>
:global(html) {
  /* this will apply to <html doc> */
  --ion-font-family: "Helvetica Neue", "Roboto", sans-serif;
}
</style>

<script>
import { Router } from "@roxi/routify";
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

console.log("ROUTES", routes);
</script>

<Router routes="{routes}" />
