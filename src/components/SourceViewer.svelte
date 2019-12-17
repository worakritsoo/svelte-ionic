<script>
  import { Plugins } from "@capacitor/core";
  import { fromFetch } from "rxjs/fetch";
  import { IonicShowToast } from "../services/IonicControllers";

  const { Clipboard } = Plugins;
  const { componentProps } = document.querySelector("ion-modal");

  // probably can be done in easier way, but I am lazy
  let name = "/";
  if (componentProps.name) {
    name = componentProps.name;
  }

  // remove trailing /
  name = name.substr(1);
  name = name.charAt(0).toUpperCase() + name.slice(1);
  if (name.length == 0) {
    name = "Splash";
  }

  const closeOverlay = () => {
    const modal = document.querySelector("ion-modal");
    modal.dismiss({});
  };

  let sourceCode = "";
  const data$ = fromFetch("assets/src/" + name + ".svelte").subscribe(
    response => {
      response.text().then(txt => {
        sourceCode = txt;
      });
    }
  );

  const copySource = () => {
    Clipboard.write({
      string: sourceCode
    });
    IonicShowToast({
      color: "dark",
      duration: 1000,
      message: "Copied source of " + name,
      showCloseButton: true
    });
    closeOverlay();
  };
</script>

<style>
  pre {
    -webkit-user-select: all; /* Chrome 49+ */
    -moz-user-select: all; /* Firefox 43+ */
    -ms-user-select: all; /* No support yet */
    user-select: all; /* Likely future */
  }
</style>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="end">
      {#if sourceCode.length > 0}
        <ion-button on:click={copySource}>
          <ion-icon name="copy" />
        </ion-button>
      {/if}
      <ion-button on:click={closeOverlay}>
        <ion-icon name="close" />
      </ion-button>
    </ion-buttons>
    <ion-title>Source code for {name}</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <pre contenteditable="true">{sourceCode}</pre>
</ion-content>
