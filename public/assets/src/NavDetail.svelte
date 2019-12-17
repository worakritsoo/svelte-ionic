<script>
  const nav = document.querySelector("ion-nav");
  const tech = document.querySelector("nav-detail").tech;

  const popWindow = () => {
    nav.pop();
  };
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-buttons>
      <ion-back-button text="Back" icon="close" />
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

  <ion-button
    on:click={() => {
      popWindow();
    }}>
    Go back
  </ion-button>
</ion-content>
