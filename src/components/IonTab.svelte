<script>
  import { onMount } from "svelte";

  export let tabs;
  export let selected;

  // ugly implmentation
  let tries = 0;
  const selectTab = () => {
    const controller = document.querySelector("ion-tabs");
    if (controller.select) {
      controller.select(selected);
    } else if (tries < 300) {
      setTimeout(() => {
        tries++;
        selectTab();
      }, 1);
    }
  };

  onMount(() => {
    if (selected) {
      selectTab();
    }
  });
</script>

<ion-router />
<ion-tabs>
  {#each tabs as tab}
    <ion-tab tab={tab.tab}>
      <svelte:component this={tab.component} />
    </ion-tab>
  {/each}

  <ion-tab-bar slot="bottom" selectedTab={selected}>
    {#each tabs as tab}
      <ion-tab-button tab={tab.tab}>
        <ion-label>{tab.label}</ion-label>
        <ion-icon name={tab.icon} />
      </ion-tab-button>
    {/each}

  </ion-tab-bar>
</ion-tabs>
