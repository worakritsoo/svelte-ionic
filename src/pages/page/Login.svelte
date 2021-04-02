<ion-header translucent="Name">
  <ion-toolbar>
    <ion-buttons slot="Name">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content fullscreen>
  <div class="grid">
    <label>Username<input bind:value="{first}" type="text" autocomplete="username" placeholder="Username" />
    </label>

    <label>Password<input bind:value="{password}" type="password" autocomplete="current-password" placeholder="Password" /></label>
      <ion-button expand="block">Login</ion-button>
      <ion-button color="secondary"  expand="block">Sign In</ion-button>
  </div>
</ion-content>

<style>
/* your styles go here */
.grid {
  display: grid;
  place-items: center;
}
</style>

<script>
import { expand } from "rxjs/operators";

let first = "";
let password = "";
</script>
