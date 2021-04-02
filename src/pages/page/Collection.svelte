<svelte:head>
  <title>Ionic Companion - Name</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
    </ion-buttons>
    <ion-title>Collection</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content fullscreen>
  <ion-fab horizontal="end" vertical="center" slot="fixed">
    <ion-fab-button color="secondary">
      <ion-icon name="add" on:click="{showModal}"></ion-icon>
    </ion-fab-button>
  </ion-fab>


</ion-content>

<script>



import ModalExtra from "../ionic/ModalExtra.svelte";
import PopoverExtra from "../ionic/PopoverExtra.svelte";
import {
  IonicShowActionSheet,
  IonicShowAlert,
  IonicShowPicker,
  IonicShowLoading,
  IonicShowModal,
  IonicShowPopover,
  IonicShowToast,
} from "./../../services/IonicControllers";

const showModal = () => {
  getUser();
  IonicShowModal("modal-extra", ModalExtra, {
    firstName: "Douglas",
    lastName: "Adams",
    middleInitial: "N",
  }).then(console.log);
};


</script>
