<script>
  import { Router, Route } from "svelte-routing";

  import IonTab from "./../components/IonTab.svelte";

  export let url = "";

  // import * as sss from "./Music.svelte";  https://github.com/sveltejs/sapper/issues/288 TODO
  import Splash from "./../pages/Splash.svelte";

  import Home from "./../pages/Home.svelte";
  // import DefaultTab from "./../pages/DefaultTab.svelte";

  import Music from "./../pages/Music.svelte";
  import Movies from "./../pages/Movies.svelte";
  import Games from "./../pages/Games.svelte";

  import Avatars from "./../pages/ionic/Avatars.svelte";
  import Buttons from "./../pages/ionic/Buttons.svelte";
  import Cards from "./../pages/ionic/Cards.svelte";
  import Checkboxes from "./../pages/ionic/Checkboxes.svelte";
  import Chips from "./../pages/ionic/Chips.svelte";
  import Datetime from "./../pages/ionic/Datetime.svelte";
  import Fabs from "./../pages/ionic/Fabs.svelte";
  import Grid from "./../pages/ionic/Grid.svelte";
  import Icons from "./../pages/ionic/Icons.svelte";
  import Infinitescroll from "./../pages/ionic/Infinitescroll.svelte";
  import Inputs from "./../pages/ionic/Inputs.svelte";
  import Introduction from "./../pages/ionic/Introduction.svelte";
  import Items from "./../pages/ionic/Items.svelte";
  import Lists from "./../pages/ionic/Lists.svelte";
  import Nav from "./../pages/ionic/Nav.svelte";
  import NavHome from "./../pages/ionic/NavHome.svelte";

  import Notes from "./../pages/ionic/Notes.svelte";
  import ProgressBar from "./../pages/ionic/ProgressBar.svelte";
  import Radios from "./../pages/ionic/Radios.svelte";
  import Range from "./../pages/ionic/Range.svelte";
  import Refresher from "./../pages/ionic/Refresher.svelte";
  import Reorder from "./../pages/ionic/Reorder.svelte";
  import Searchbar from "./../pages/ionic/Searchbar.svelte";
  import Segment from "./../pages/ionic/Segment.svelte";
  import Select from "./../pages/ionic/Select.svelte";
  import Skeleton from "./../pages/ionic/Skeleton.svelte";
  import Spinner from "./../pages/ionic/Spinner.svelte";
  import Text from "./../pages/ionic/Text.svelte";
  import Thumbnails from "./../pages/ionic/Thumbnails.svelte";
  import Toggle from "./../pages/ionic/Toggle.svelte";
  import Toolbar from "./../pages/ionic/Toolbar.svelte";

  const routes = [
    { path: "/", component: Splash },
    { path: "/intro", component: Introduction },
    //  { path: "/tabalt", component: DefaultTab },
    { path: "/avatars", component: Avatars },
    { path: "/buttons", component: Buttons },
    { path: "/cards", component: Cards },
    { path: "/checkboxes", component: Checkboxes },
    { path: "/chips", component: Chips },
    { path: "/datetime", component: Datetime },
    { path: "/fabs", component: Fabs },
    { path: "/grid", component: Grid },
    { path: "/icons", component: Icons },
    { path: "/infinitescroll", component: Infinitescroll },
    { path: "/inputs", component: Inputs },
    { path: "/introduction", component: Introduction },
    { path: "/slides", component: Introduction },
    { path: "/items", component: Items },
    { path: "/lists", component: Lists },
    { path: "/notes", component: Notes },
    { path: "/progressbar", component: ProgressBar },
    { path: "/radios", component: Radios },
    { path: "/range", component: Range },
    { path: "/refresher", component: Refresher },
    { path: "/reorder", component: Reorder },
    { path: "/searchbar", component: Searchbar },
    { path: "/segment", component: Segment },
    { path: "/select", component: Select },
    { path: "/skeleton", component: Skeleton },
    { path: "/spinner", component: Spinner },
    { path: "/text", component: Text },
    { path: "/thumbnails", component: Thumbnails },
    { path: "/toggle", component: Toggle },
    { path: "/toolbar", component: Toolbar },

    { path: "/nav", component: NavHome },

    { path: "/home", component: Home }
  ];

  const myTabs = [
    { label: "Music", icon: "musical-note", tab: "music", component: Music },
    { label: "Movies", icon: "videocam", tab: "movies", component: Movies },
    {
      label: "Games",
      icon: "logo-game-controller-b",
      tab: "games",
      component: Games
    }
  ];
</script>

<!-- this div with main is needed for menu-controller -->
<div class="ion-page" main>
  <Router {url}>

    {#each routes as route}
      <Route path={route.path} let:params>
        <svelte:component this={route.component} {params} />
      </Route>
    {/each}

    <Route path="/tabs">
      <IonTab tabs={myTabs} />
    </Route>
    <Route path="/tabs/:id" let:params>
      <IonTab tabs={myTabs} selected={params.id} />
    </Route>
  </Router>
</div>
