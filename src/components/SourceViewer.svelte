<script>
  import { Plugins } from "@capacitor/core";
  import { fromFetch } from "rxjs/fetch";
  import {
    IonicShowToast,
    IonicShowLoading
  } from "../services/IonicControllers";

  const { Clipboard } = Plugins;
  const { componentProps } = document.querySelector("ion-modal");

  let anchor;

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

  const goAPIdocs = () => {
    let apiName = name.toLowerCase();
    if (apiName.charAt(apiName.length - 1) == "s") {
      apiName = apiName.slice(0, -1);
    }
    console.log("APINAME", apiName);
    anchor.href = "https://ionicframework.com/docs/api/" + apiName;
    anchor.click();
  };

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
      <ion-button on:click={goAPIdocs}>
        <ion-icon name="share-alt" />
      </ion-button>

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
<a target="_blank" bind:this={anchor} href="/">
  <div />
</a>
