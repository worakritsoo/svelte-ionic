<script>
  import { onMount } from "svelte";
  import { users } from "./users";

  let length = 0;
  let list;
  let infiniteScroll;

  onMount(() => {
    list = document.getElementById("list");
    infiniteScroll = document.getElementById("infinite-scroll");
    console.log("list", list, infiniteScroll);

    appendItems(10);
  });

  const infiniteAction = async () => {
    if (length < users.length) {
      console.log("Loading data...");
      await wait(500);
      infiniteScroll.complete();
      appendItems(5);
      console.log("Done");
    } else {
      console.log("No More Data");
      infiniteScroll.disabled = true;
    }
  };

  function appendItems(number) {
    console.log("length is", length);
    const originalLength = length;
    for (var i = 0; i < number; i++) {
      const el = document.createElement("ion-item");
      el.innerHTML = `
          <ion-avatar slot="start">
            <img src="https://www.gravatar.com/avatar/${i +
              originalLength}?d=monsterid&f=y">
          </ion-avatar>
          <ion-label>
            <h2>${users[i + originalLength].name}</h2>
            <p>Created ${users[i + originalLength].created}</p>
          </ion-label>
        `;
      if (list) list.appendChild(el);
      length++;
    }
  }

  function wait(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Accounts</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <ion-list id="list" />

  <ion-infinite-scroll
    on:ionInfinite={infiniteAction}
    threshold="100px"
    id="infinite-scroll">
    <ion-infinite-scroll-content
      loading-spinner="bubbles"
      loading-text="Loading more data..." />
  </ion-infinite-scroll>
</ion-content>
