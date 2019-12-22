<script>
  import IonMenu from "./components/IonMenu.svelte";
  import Routes from "./routes/Routes.svelte";
  import { Capacitor } from "@capacitor/core";

  import { Workbox } from "workbox-window";

  import SourceViewer from "./components/SourceViewer.svelte";
  import Cookie from "./Cookie.svelte";

  import { IonicShowModal } from "./services/IonicControllers";

  // Check that service workers are supported
  if ("serviceWorker" in navigator) {
    /*
  const wb = new Workbox("sw.js");

    wb.addEventListener("installed", event => {
      if (event.isUpdate) {
        if (confirm(`New content is available!. Click OK to refresh`)) {
          window.location.reload();
        }
      }
    });

    wb.register();
*/
    // Use the window load event to keep the page load performant
    //	window.addEventListener('load', () => {
    //		navigator.serviceWorker.register('/sw.js');
    //	});
  }

  const viewSource = () => {
    IonicShowModal("source-viewer", SourceViewer, {
      name: window.location.pathname
    }).then(data => console.log(data));
  };

  import { FirebaseApp } from "sveltefire";

  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  // import "firebase/performance";
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
  firebase.analytics().logEvent("APP LAUNCH");
</script>

<svelte:head>
  <title>Ionic Svelte UI demo</title>
</svelte:head>

<FirebaseApp {firebase}>
  <ion-app>
    <ion-fab horizontal="end" vertical="bottom" slot="fixed">
      <ion-fab-button color="dark" on:click={viewSource}>
        <ion-icon name="code-working" />
      </ion-fab-button>
    </ion-fab>
    <ion-split-pane>
      <IonMenu />
      <Routes main />
    </ion-split-pane>
  </ion-app>
</FirebaseApp>
<Cookie />
