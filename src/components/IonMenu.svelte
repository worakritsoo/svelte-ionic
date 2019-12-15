<script>
  import { navigate } from "svelte-routing";

  export let side = "start";

  let menucontroller;

  function closeAndNavigate(url) {
    menucontroller.close();
    navigate(url);
  }

  // svelte renders the foreach before the webcomponts are loaded giving a strange sublime message
  let menuItems = [];
  setTimeout(() => {
    menuItems = [
      { url: "/tabs/music", label: "Tabs with perks", icon: "home" },
      { url: "/avatars", label: "Avatars", icon: "home" },
      { url: "/buttons", label: "Buttons", icon: "home" },
      { url: "/cards", label: "Cards", icon: "home" },
      { url: "/checkboxes", label: "Checkboxes", icon: "home" },
      { url: "/chips", label: "Chips", icon: "home" },
      { url: "/datetime", label: "Datetime", icon: "home" },
      { url: "/fabs", label: "Fabs", icon: "home" },
      { url: "/grid", label: "Grid", icon: "home" },
      { url: "/icons", label: "Icons", icon: "home" },
      { url: "/infinitescroll", label: "Infinitescroll", icon: "home" },
      { url: "/inputs", label: "Inputs", icon: "home" },
      { url: "/items", label: "Items", icon: "home" },
      { url: "/lists", label: "Lists", icon: "home" },
      { url: "/nav", label: "Nav", icon: "home" },
      { url: "/notes", label: "Notes", icon: "home" },
      { url: "/progressbar", label: "ProgressBar", icon: "home" },
      { url: "/radios", label: "Radios", icon: "home" },
      { url: "/range", label: "Range", icon: "home" },
      { url: "/refresher", label: "Refresher", icon: "home" },
      { url: "/reorder", label: "Reorder", icon: "home" },
      { url: "/searchbar", label: "Searchbar", icon: "home" },
      { url: "/segment", label: "Segment", icon: "home" },
      { url: "/select", label: "Select", icon: "home" },
      { url: "/skeleton", label: "Skeleton", icon: "home" },
      { url: "/introduction", label: "Slides", icon: "home" },
      { url: "/spinner", label: "Spinner", icon: "home" },
      { url: "/text", label: "Text", icon: "home" },
      { url: "/thumbnails", label: "Thumbnails", icon: "home" },
      { url: "/toggle", label: "Toggle", icon: "home" },
      { url: "/toolbar", label: "Toolbar", icon: "home" }
    ];
  }, 1000);
</script>

<ion-menu {side}>
  {#if menuItems.length > 0}
    <ion-header>
      <ion-toolbar translucent>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        {#each menuItems as menuItem}
          <ion-item
            on:click={() => {
              closeAndNavigate(menuItem.url);
            }}>
            <ion-icon name={menuItem.icon} slot="start" />
            <ion-label>{menuItem.label}</ion-label>
          </ion-item>
        {/each}
      </ion-list>
    </ion-content>
  {/if}
</ion-menu>
<ion-menu-controller bind:this={menucontroller} />
