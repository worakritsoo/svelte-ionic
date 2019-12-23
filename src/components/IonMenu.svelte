<script>
  import { navigate } from "svelte-routing";
  import { fromFetch } from "rxjs/fetch";

  let anchor;
  export let side = "start";

  let menucontroller;

  function closeAndNavigate(url) {
    menucontroller.close();
    navigate(url);
  }

  const goToGitHub = () => {
    console.log("SDASDS");
    anchor.click();
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

  let menuItems = [
    {
      url: "/tabs/movies",
      label: "Tabs with perks (modal/alert/etc)",
      icon: "home"
    },
    { url: "/avatars", label: "Avatars", icon: "home" },
    { url: "/badges", label: "Badges", icon: "home" },
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
    { url: "/slides", label: "Slides", icon: "home" },
    { url: "/spinner", label: "Spinner", icon: "home" },
    { url: "/text", label: "Text", icon: "home" },
    { url: "/thumbnails", label: "Thumbnails", icon: "home" },
    { url: "/toggle", label: "Toggle", icon: "home" },
    { url: "/toolbar", label: "Toolbar", icon: "home" }
  ];

  // randomize the icons for the menu
  let icons;
  fromFetch("/assets/json/ionicons.json").subscribe(
    response => {
      response.json().then(json => {
        icons = json.icons;
        menuItems.map(menuItem => {
          menuItem.icon = icons[Math.floor(Math.random() * icons.length)];
        });
        menuItems = [...menuItems];
      });
    },
    error => {
      console.error("Error HTTP", error);
    }
  );
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
        {#each menuItems as menuItem, i}
          <ion-item
            on:click={() => {
              closeAndNavigate(menuItem.url);
            }}>
            <ion-icon
              name={menuItem.icon}
              slot="start"
              color={getRandomColor()} />
            <ion-label>{menuItem.label}</ion-label>
          </ion-item>
        {/each}
        <ion-item />
        <ion-item on:click={goToGitHub}>
          <ion-icon name="logo-github" slot="start" />
          <ion-label>Go to GitHub for this app</ion-label>
        </ion-item>
      </ion-list>
      <a
        target="_blank"
        bind:this={anchor}
        href="https://github.com/Tommertom/svelte-ionic-app">
        <div />
      </a>
    </ion-content>
  {/if}
</ion-menu>

<ion-menu-controller bind:this={menucontroller} />
