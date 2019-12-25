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
  let apiURL = "";

  // probably can be done in easier way, but I am lazy
  let name = "/";
  if (componentProps.name) {
    name = componentProps.name;
  }

  // generate the name to source file
  name = name.substr(1);
  name = name.charAt(0).toUpperCase() + name.slice(1);
  if (name.length == 0) {
    name = "Splash";
  }
  name = name.replace("Tabs/", "");
  console.log("Name", name);

  const closeOverlay = () => {
    const modal = document.querySelector("ion-modal");
    modal.dismiss({});
  };

  const goREPL = () => {
    fromFetch("/assets/json/repls.json").subscribe(response => {
      response.json().then(json => {
        const url = json[name.toLocaleLowerCase()];
        if (url) {
          console.log("REPL", json, url);
          anchor.href = url;
          anchor.click();
        } else {
          IonicShowToast({
            color: "dark",
            duration: 2000,
            message: "No REPL link configured",
            showCloseButton: true
          });
        }
      });
    });
  };

  const goAPIdocs = () => {
    // try to generate the url to the api docs
    let apiName = name.toLowerCase();
    if (apiName.charAt(apiName.length - 1) == "s") {
      apiName = apiName.slice(0, -1);
    }
    console.log("Raw APINAME", apiName);

    // do a mapping for some exceptions
    apiName = apiName.replace("/", "");
    fromFetch("/assets/json/api-mappings.json").subscribe(
      response => {
        response.json().then(json => {
          let url = "https://ionicframework.com/docs/api/";
          if (json[apiName]) {
            url += json[apiName];
            if (json[apiName].toLowerCase().substring(0, 4) == "http") {
              url = json[apiName];
            }
          } else {
            url += apiName;
          }
          anchor.href = url;
          anchor.click();
        });
      },
      error => {
        console.error("Error HTTP", error);
      }
    );
  };

  let sourceCode = "Loading....";
  fromFetch("assets/src/" + name + ".svelte").subscribe(response => {
    response.text().then(txt => {
      if (txt.search("<!DOCTYPE html>") > -1) {
        sourceCode = `No svelte file found for ${name}. Please check github repo.`;
      } else {
        sourceCode = txt;
      }
    });
  });

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

    setTimeout(closeOverlay, 1000);
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

<svelte:head>
  <title>Sourceviewer {name}</title>
</svelte:head>
<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="end">
      <ion-button on:click={goREPL} title="Hello This Will Have Some Value">
        REPL
      </ion-button>

      <ion-button on:click={goAPIdocs}>API</ion-button>

      {#if sourceCode.length > 0}
        <ion-button on:click={copySource}>COPY</ion-button>
      {/if}
      <ion-button on:click={closeOverlay}>
        <ion-icon name="close" />
      </ion-button>
    </ion-buttons>

  </ion-toolbar>
</ion-header>

<ion-content>
  <pre>{sourceCode}</pre>
</ion-content>
<a target="_blank" bind:this={anchor} href="/">
  <div />
</a>
