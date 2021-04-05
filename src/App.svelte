<Router routes="{routes}" />

<style>
:global(html) {
  /* this will apply to <html doc> */
  --ion-font-family: "Helvetica Neue", "Roboto", sans-serif;
}
</style>

<script>
import { Router } from "@roxi/routify";
export let routes;
// import { FirebaseApp } from "sveltefire";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Notice regarding imports below
// https://stackoverflow.com/questions/63835251/firebase-modules-cause-registercomponent-error-in-svelte
import "firebase/performance";
import "firebase/analytics";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeP-9OvB0zww-FI0Clti73JXnXBeADugM",
  authDomain: "pbox-58ae4.firebaseapp.com",
  databaseURL: "https://pbox-58ae4-default-rtdb.firebaseio.com",
  projectId: "pbox-58ae4",
  storageBucket: "pbox-58ae4.appspot.com",
  messagingSenderId: "776114156881",
  appId: "1:776114156881:web:00d6fec941278583c2cf70",
  measurementId: "G-G426DC4VCT"
};

firebase.initializeApp(firebaseConfig);
console.log(firebase);
const defaultAnalytics = firebase.analytics();
defaultAnalytics.logEvent("page_view", { page_title: "app_start" });
</script>