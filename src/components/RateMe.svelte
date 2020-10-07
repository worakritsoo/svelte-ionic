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
              <ion-col>
                <ion-icon
                  name="{stars[0]}"
                  id="1"
                  on:click="{starClick}"
                ></ion-icon>
              </ion-col>
              <ion-col>
                <ion-icon
                  name="{stars[1]}"
                  id="2"
                  on:click="{starClick}"
                ></ion-icon>
              </ion-col>
              <ion-col>
                <ion-icon
                  name="{stars[2]}"
                  id="3"
                  on:click="{starClick}"
                ></ion-icon>
              </ion-col>
              <ion-col>
                <ion-icon
                  name="{stars[3]}"
                  id="4"
                  on:click="{starClick}"
                ></ion-icon>
              </ion-col>
              <ion-col>
                <ion-icon
                  name="{stars[4]}"
                  id="5"
                  on:click="{starClick}"
                ></ion-icon>
              </ion-col>
            </ion-row>
          </ion-grid>
          {#if rate == 5}
            <h2>Thank you for your review!</h2>
          {:else}
            <h2>.</h2>
          {/if}

          {#if rate > 0 && rate != 5}
            Help us improve and give feedback.
            <ion-item>
              <ion-checkbox
                value="helpfull"
                on:ionChange="{checkBoxChange}"
                color="dark"
                slot="start"
              ></ion-checkbox>
              <ion-label>Very helpful app</ion-label>
            </ion-item>
            <ion-item>
              <ion-checkbox
                value="buggy"
                on:ionChange="{checkBoxChange}"
                color="dark"
                slot="start"
              ></ion-checkbox>
              <ion-label>A bit buggy</ion-label>
            </ion-item>
            <ion-item>
              <ion-checkbox
                value="newfeature"
                on:ionChange="{checkBoxChange}"
                color="dark"
                slot="start"
              ></ion-checkbox>
              <ion-label>New feature needed</ion-label>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Tell us more ...</ion-label>
              <ion-textarea on:ionChange="{changeValue}"></ion-textarea>
            </ion-item>
          {/if}

          {#if showDone}
            <br />
            <ion-button on:click="{userDone}" expand="full" color="primary" on>
              Close this popup
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
import "firebase/auth";

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

const starClick = (event) => {
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

// we don't want to show, unless we need to
let showRateMe = false;
localforage.getItem("rate-me-1").then((value) => {
  console.log("RateMe value", value);
  if (!value) {
    setTimeout(() => {
      showRateMe = true;
    }, 1000 * 60 * 2); // * 60
  }
});

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
