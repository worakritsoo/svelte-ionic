<ion-header translucent="Name">
  <ion-toolbar>
    <ion-buttons slot="Name">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>AddLink</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content fullscreen>
  <form>
    <ion-list>
      <ion-item>
        <ion-label>Title</ion-label>
        <ion-input type="text" autocomplete="name,honorific-prefix"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-input type="text" autocomplete="on"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Url</ion-label>
        <ion-input type="url" autocomplete="url"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Upload Avatar</ion-label>
        <ion-input name="avatar" type="file"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label for="many">Upload multiple</ion-label>
        <ion-input multiple="true" name="files" type="file"></ion-input>
      </ion-item>

      {#if files}
        <h2>Selected files:</h2>
        {#each Array.from(files) as file}
          <p>{file.name} ({file.size} bytes)</p>
        {/each}
      {/if}
      <!--     
      facebook page/blog คู่มือ tutorail avatar ตัวแทน
      href image -->
      <div class="ion-padding">
        <ion-button
          expand="block"
          on:click="{processForm}"
          class="ion-no-margin"
        >
          Post Link
        </ion-button>
      </div>
    </ion-list>
  </form>
</ion-content>
<ion-alert-controller bind:this="{controller}"></ion-alert-controller>

<script>
let controller;
let firstName, lastName;

let files;

$: if (files) {
  // Note that `files` is of type `FileList`, not an Array:
  // https://developer.mozilla.org/en-US/docs/Web/API/FileList
  console.log(files);

  for (const file of files) {
    console.log(`${file.name}: ${file.size} bytes`);
  }
}

function processForm(event) {
  console.log("Processing form", event);
  // event.preventDefault();
  controller
    .create({
      header: "Account Created",
      message: `Created account for: <b>${firstName} ${lastName}</b>`,
      buttons: [
        {
          text: "OK",
        },
      ],
    })
    .then((alert) => alert.present());
}
function handleFirstNameValue(event) {
  firstName = event.target.value;
}
function handleLastNameValue(event) {
  lastName = event.target.value;
}

const changeValue = (event) => {
  console.log("Change of value", event.detail);
};
</script>
