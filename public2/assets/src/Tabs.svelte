<script>
  import IonTab from "./../../components/IonTab.svelte";

  import Music from "./Music.svelte";
  import Movies from "./Movies.svelte";
  import Games from "./Games.svelte";

  export let params = { id: "music" };
  console.log("para", params);

  const myTabs = [
    { label: "Magic", icon: "videocam", tab: "movies", component: Movies },
    { label: "Text", icon: "musical-note", tab: "music", component: Music },
    {
      label: "Nothing",
      icon: "logo-game-controller-b",
      tab: "games",
      component: Games
    }
  ];
</script>

<IonTab tabs={myTabs} selected={params.id} />
