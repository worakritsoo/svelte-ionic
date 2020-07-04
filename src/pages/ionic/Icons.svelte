<script>
  import { fromFetch } from "rxjs/fetch";
  import { Plugins } from "@capacitor/core";
  import { IonicShowToast } from "../../services/IonicControllers";

  let length = 0;
  let icons = [];
  let list = [];
  let infiniteScroll;
  const { Clipboard } = Plugins;

  const infiniteAction = async () => {
    console.log("L", length, icons.length);
    if (length < icons.length) {
      console.log("Loading data...");
      await wait(500);
      infiniteScroll.complete();
      appendItems(175);
      console.log("Done");
    } else {
      console.log("No More Data");
      infiniteScroll.disabled = true;
    }
  };

  function appendItems(number) {
    list = [];
    list = icons.slice(0, number + length);
    length += number;
  }

  function wait(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  fromFetch("/assets/json/ionicons.json").subscribe(
    response => {
      response.json().then(json => {
        icons = json.icons;
        console.log("List of icons", icons);
        appendItems(120);
      });
    },
    error => {
      console.error("Error HTTP", error);
    }
  );

  const iconClicked = icon => {
    console.log("Icon clicked", icon);

    Clipboard.write({
      string: `<ion-icon name="${icon}"></ion-icon>`
    });
    IonicShowToast({
      color: "dark",
      duration: 3000,
      message: `<ion-icon style="font-size:350%" name="${icon}"></ion-icon> - ${icon}`,
      showCloseButton: true
    });
  };

  const getRandomColor = () => {
    const items = [
      "secondary",
      "primary",
      "danger",
      "warning",
      "dark",
      "medium",
      "success",
      "tertiary"
    ];
    return items[Math.floor(Math.random() * items.length)];
  };
</script>

<style>
  ion-icon {
    font-size: 500%;
  }
</style>

<svelte:head>
  <title>Ionic UI Companion App - Icons</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Icons</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">

  <ion-grid>
    <ion-row>
      {#each list as icon}
        <ion-col
          on:click={() => {
            iconClicked(icon);
          }}>
          <ion-icon name={icon} color={getRandomColor()} />
        </ion-col>
      {/each}
    </ion-row>
  </ion-grid>

  <ion-infinite-scroll
    on:ionInfinite={infiniteAction}
    threshold="100px"
    bind:this={infiniteScroll}>
    <ion-infinite-scroll-content
      loading-spinner="bubbles"
      loading-text="Loading more data..." />
  </ion-infinite-scroll>

</ion-content>
