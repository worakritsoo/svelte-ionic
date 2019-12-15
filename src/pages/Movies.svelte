<script>
  import Extra from "./Extra.svelte";
  import {
    IonicShowAlert,
    IonicShowPicker,
    IonicShowLoading,
    IonicShowModal,
    IonicShowPopover
  } from "./../services/IonicControllers";

  const showModal = () => {
    IonicShowModal("modal-extra", Extra, {
      firstName: "Douglas",
      lastName: "Adams",
      middleInitial: "N",
      type: "popover"
    }).then(data => console.log(data));
  };

  const showPopover = event => {
    IonicShowPopover(event, "modal-extra", Extra, {
      firstName: "Douglas",
      lastName: "Adams",
      middleInitial: "N",
      type: "popover"
    }).then(data => console.log(data));
  };

  const showAlert = () => {
    IonicShowAlert({
      header: "Prompt!",
      inputs: [
        {
          placeholder: "Placeholder 1"
        },
        {
          name: "name2",
          id: "name2-id",
          value: "hello",
          placeholder: "Placeholder 2"
        },
        {
          name: "name3",
          value: "http://ionicframework.com",
          type: "url",
          placeholder: "Favorite site ever"
        },
        // input date with min & max
        {
          name: "name4",
          type: "date",
          min: "2017-03-01",
          max: "2018-01-12"
        },
        // input date without min nor max
        {
          name: "name5",
          type: "date"
        },
        {
          name: "name6",
          type: "number",
          min: -5,
          max: 10
        },
        {
          name: "name7",
          type: "number"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: () => {
            console.log("Confirm Ok");
          }
        }
      ]
    });
  };

  const showLoading = () => {
    IonicShowLoading({
      message: "Please wait...",
      duration: 3000
    });
  };

  const showPicker = () => {
    const pickerOptions = [
      {
        name: "col-0",
        options: [
          { text: "Dog", value: 0 },
          { text: "Cat", value: 1 },
          { text: "Bird", value: 2 },
          { text: "Lizard", value: 3 },
          { text: "Chinchilla", value: 4 }
        ]
      }
    ];

    IonicShowPicker({
      columns: pickerOptions,
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Confirm",
          handler: value => {
            console.log(`Got Value `, value);
          }
        }
      ]
    });
  };
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Movies</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">

  <ion-button expand="block" on:click={showAlert}>Show Alert</ion-button>
  <ion-button expand="block" on:click={showModal}>Show Modal</ion-button>
  <ion-button expand="block" on:click={showPopover}>Show Popover</ion-button>
  <ion-button expand="block" on:click={showLoading}>Show Loading</ion-button>
  <ion-button expand="block" on:click={showPicker}>Show Picker</ion-button>

</ion-content>
