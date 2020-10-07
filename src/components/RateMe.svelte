{#if showRateMe}
  <div
    in:fly="{{ y: 200, delay: 7000, duration: 1500, easing: elasticInOut }}"
    out:fly="{{ y: 200, delay: 10, duration: 1000, easing: elasticInOut }}"
    class="card"
  >
    <div class="card-inset">
      <ion-card>
        <ion-card-content>
          <h1>Please rate this app!</h1>
          <ion-grid>
            <ion-row>
              {#each stars as star, id}
                <ion-col>
                  <ion-icon
                    name="{star}"
                    id="{id + 1}"
                    on:click="{starClick}"
                  ></ion-icon>
                </ion-col>
              {/each}
            </ion-row>
          </ion-grid>

          {#if rate == 5}
            <h2>Thank you for your review!</h2>
          {:else}
            <h2>&nbsp;</h2>
          {/if}

          {#if rate > 0 && rate != 5}
            Help us improve and give feedback. <br />
            {#each checkBoxes as { value, label }}
              <ion-item>
                <ion-checkbox
                  value="{value}"
                  on:ionChange="{checkBoxChange}"
                  color="dark"
                  slot="start"
                ></ion-checkbox>
                <ion-label>{label}</ion-label>
              </ion-item>
            {/each}
            <ion-item>
              <ion-label position="stacked">Tell us more...</ion-label>
              <ion-textarea on:ionChange="{changeValue}"></ion-textarea>
            </ion-item>
          {/if}

          {#if showDone}
            <br />
            <ion-button on:click="{userDone}" expand="full" color="primary" on>
              Close
            </ion-button>
          {/if}
        </ion-card-content>
      </ion-card>
    </div>
  </div>
{/if}

<style>
.card {
  z-index: 1000;
  position: absolute;
  width: 100%;
  bottom: 10%;
  background: white;
}

.card-inset {
  margin: auto;
  width: 90%;
}
</style>

<script lang="ts">
import { fly } from "svelte/transition";
import { elasticInOut } from "svelte/easing";
import localforage from "localforage";

import firebase from "firebase/app";
import "firebase/firestore";

let feedback = {};
let showDone = false;
let rate = 0;

let stars = [
  "star-outline",
  "star-outline",
  "star-outline",
  "star-outline",
  "star-outline",
];

let checkBoxes = [
  { value: "helpfull", label: "Very helpful app" },
  { value: "buggy", label: "A bit buggy" },
  { value: "newfeature", label: "New feature idea" },
];

// we don't want to show, unless we need to
let showRateMe = false;
localforage.getItem("rate-me-1").then((value) => {
  console.log("RateMe value", value);
  // showRateMe = true; // testing purposes should be on then
  if (!value) {
    setTimeout(() => {
      showRateMe = true;
    }, 1000 * 60 * 1);
  }
});

const starClick = (event) => {
  // console.log("Starclick", event.srcElement.id);
  if (rate === 0) {
    const id = event.srcElement.id;
    stars = stars.map((star, i) => {
      if (i < id) {
        return "star-sharp";
      } else {
        return "star-outline";
      }
    });
    rate = event.srcElement.id;

    feedback["rate"] = rate;

    showDone = true;

    if (rate == 5) {
      setTimeout(() => {
        userDone();
      }, 2000);
    }
  }
};

const checkBoxChange = (event) => {
  feedback[event.detail.value] = event.detail.checked;
  //  console.log("FEEDBACK", feedback);
};

const changeValue = (event) => {
  feedback["notes"] = event.detail.value;
  // console.log("FEEDBACK", feedback);
};

const userDone = () => {
  showRateMe = false;

  feedback["time"] = Date.now();
  const d = new Date();
  feedback["utc"] = d.toUTCString();

  // we want lots of info!
  [
    "product",
    "platform",
    "userAgent",
    "appName",
    "appVersion",
    "appCodeName",
  ].forEach((key) => {
    feedback[key] = navigator[key];
    if (typeof feedback[key] === "undefined") {
      feedback[key] = "Unknown";
    }
  });

  // stringify and firebase can give runtime errors
  let feedbackText = "";
  try {
    let db = firebase.firestore();
    feedbackText = JSON.stringify(feedback, null, 2);
    db.collection("feedback").add({ feedbackText });
  } catch (e) {
    console.log("Errors", e);
  }
  console.log("User rateme", feedbackText);
  localforage.setItem("rate-me-1", true);
};
</script>
