<script>
  import IonBackButton from "../../components/IonBackButton.svelte";

  const nav = document.querySelector("ion-nav");
  const tech = document.querySelector("nav-detail").tech;

  const popWindow = () => {
    nav.pop();
  };
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <IonBackButton />
    </ion-buttons>
    <ion-title>{tech.title}</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content fullscreen class="ion-padding">
  <ion-icon
    name={'logo-' + tech.icon}
    style="color: {tech.color}"
    size="large" />
  <p>{tech.description}</p>
</ion-content>
