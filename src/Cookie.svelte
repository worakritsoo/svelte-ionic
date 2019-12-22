<script>
  import { fly } from "svelte/transition";
  import { elasticInOut } from "svelte/easing";

  import { onMount } from "svelte";

  import localforage from "localforage";

  console.log("STORAGE", localforage);

  let showGDPR = false;

  localforage.getItem("cookie-agree").then(value => {
    console.log("Cookie value", value);
    if (!value) {
      showGDPR = true;
    }
  });

  const userAgrees = () => {
    console.log("User agreed to Cookie");
    localforage.setItem("cookie-agree", true);
    showGDPR = false;
  };
</script>

<style>
  .card {
    z-index: 1000;
    position: absolute;
    width: 100%;
    bottom: 10px;
    background: white;
  }

  .card-inset {
    margin: auto;
    width: 90%;
  }
</style>

{#if showGDPR}
  <div
    transition:fly={{ y: 200, delay: 100, duration: 1500, easing: elasticInOut }}
    class="card">

    <div class="card-inset">
      <ion-card>
        <ion-card-header>Cookie monster alert!</ion-card-header>
        <ion-card-content>
          This app/website is using cookies to track usage. Please click the
          button to continue and agree.
          <br />
          <ion-button on:click={userAgrees} expand="full" color="primary" on>
            Agree to usages of cookies
          </ion-button>
        </ion-card-content>
      </ion-card>
    </div>

  </div>
{/if}
