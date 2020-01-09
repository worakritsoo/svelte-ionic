<script>
  import { Router } from "@sveltech/routify";
  export let routes;

  import { FirebaseApp } from "sveltefire";
  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import "firebase/analytics";

  let firebaseConfig = {
    apiKey: "AIzaSyAOul3jp5hfGOfRWwqxjrvU4i965DE11Qk",
    authDomain: "ionicsvelte.firebaseapp.com",
    databaseURL: "https://ionicsvelte.firebaseio.com",
    projectId: "ionicsvelte",
    storageBucket: "ionicsvelte.appspot.com",
    messagingSenderId: "512207280782",
    appId: "1:512207280782:web:aa2cc110c3ac12e5ef07df",
    measurementId: "G-NNGFLY1HYH"
  };

  firebase.initializeApp(firebaseConfig);
</script>

<Router {routes} />
