<script>
  // this file is not needed??

  import IonTab from "../../../components/IonTab.svelte";

  import Controllers from "../Controllers.svelte";

  // "../Music.svelte";
  import Music from "../Music.svelte";
  //  import Games from "../Games.svelte";

  import Nav from "../Nav.svelte";

  export let params = { id: "music" };
  console.log("para", params);

  const myTabs = [
    { label: "Magic", icon: "videocam", tab: "movies", component: Controllers },
    { label: "Text", icon: "musical-note", tab: "music", component: Music },
    {
      label: "Yothing",
      icon: "logo-game-controller-b",
      tab: "games",
      component: Nav
    }
  ];
</script>

<IonTab tabs={myTabs} selected={params.id} />
