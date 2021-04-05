<svelte:head>
  <title>Ionic Companion - Discover</title>
</svelte:head>
<ion-header>
  <ion-toolbar color="dark">
    <ion-searchbar
      animated
      value="Pea"
      inputmode="search"
      placeholder="Search Pea"
      ionInput="handleInput()"
    ></ion-searchbar>
  </ion-toolbar>
</ion-header>
<ion-content fullscreen>
  {#await promise}
    <p>...waiting</p>
  {:then users}
    {#each users as user}
      <!-- svelte-ignore missing-declaration -->
      <!-- {@debug user} -->
      <Profile {...user} />
    {/each}
  {:catch error}
    <p style="color: red">{error.data}</p>
  {/await}
</ion-content>

<script>
import Profile from "../../components/Profile.svelte";

let promise = getRandomUser();
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api/?results=50");
  const data = await res.json();

  if (res.ok) {
    return data.results;
  } else {
    throw new Error(data);
  }
}


function handleInput(event) {
  console.log(event.target.value);
}
</script>
