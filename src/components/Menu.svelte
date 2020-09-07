<style>
ion-item {
  cursor: pointer;
}
</style>

<script lang="ts">
import { fromFetch } from "rxjs/fetch";
import { goto } from "@roxi/routify";
import { getIonicMenu } from "./../services/IonicControllers";

import { routes } from "./../routes/routes";

export let side = "start";

function navigate(url) {
  console.log("Navigate url", url);
  $goto(url);
}

function closeAndNavigate(url) {
  navigate(url);
  getIonicMenu("mainmenu")
    .close(true)
    .then(() => {});
}

const getRandomColor = () => {
  const items = [
    "secondary",
    "primary",
    "danger",
    "warning",
    "dark",
    "medium",
    "success",
    "tertiary",
  ];
  return items[Math.floor(Math.random() * items.length)];
};

const excludedPaths = [
  "AltDetails",
  "ModalExtra",
  "NavDetail",
  "NavList",
  "Games",
  "Music",
  "PopoverExtra",
];

// let's use the generated routes for making the menu items
// and skip a few ones for the menu
let menuItems: Array<{ url: string; label: string; icon: string }> = routes
  .filter((route) => route.path.includes("ionic"))
  .filter((route) => {
    let found = false;
    excludedPaths.forEach((exclude) => {
      found = found || route.path.includes(exclude);
    });
    return !found;
  })
  .map((route) => {
    if (route.name.includes("[tab]")) {
      route.name = "Tab";
    }
    return {
      url: route.path,
      label: route.name.replace("ionic/", ""),
      icon: "home",
    };
  })
  .sort(function (a, b) {
    var nameA = a.label.toUpperCase(); // ignore upper and lowercase
    var nameB = b.label.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

// randomize the icons for the menu
// using RXJS for fun
let icons;
fromFetch("/assets/json/ionicons.json").subscribe(
  (response) => {
    response.json().then((json) => {
      icons = json.icons;
      menuItems.map((menuItem) => {
        //   menuItem.icon = "at";
        menuItem.icon = icons[Math.floor(Math.random() * icons.length)];
      });
      menuItems = [...menuItems];
    });
  },
  (error) => {
    console.error("Error HTTP", error);
  }
);
</script>

<ion-menu side="{side}" content-id="main" menu-id="mainmenu">
  {#if menuItems.length > 0}
    <ion-header>
      <ion-toolbar translucent="true">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        {#each menuItems as menuItem, i}
          <ion-item
            on:click="{() => {
              closeAndNavigate(menuItem.url);
            }}"
          >
            <ion-icon
              name="{menuItem.icon}"
              slot="start"
              color="{getRandomColor()}"
            ></ion-icon>
            <ion-label>{menuItem.label}</ion-label>
          </ion-item>
        {/each}
        <ion-item></ion-item>
        <ion-item
          on:click="{() => {
            window.open('https://github.com/Tommertom/svelte-ionic-app', '_blank');
          }}"
        >
          <ion-icon name="logo-github" slot="start"></ion-icon>
          <ion-label>Go to GitHub for this app</ion-label>
        </ion-item>
        <ion-item
          on:click="{() => {
            window.open('https://forum.ionicframework.com/t/ionicsvelte-all-of-ionics-ui-in-one-svelte-app', '_blank');
          }}"
        >
          <ion-icon name="logo-ionic" slot="start"></ion-icon>
          <ion-label>Go to Ionic Forum</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  {/if}
</ion-menu>
