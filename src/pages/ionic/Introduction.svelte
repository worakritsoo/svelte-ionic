<script>
  import { navigate } from "svelte-routing";

  const continueToTab = () => {
    navigate("/tabs/movies");
  };

  function openMenu() {
    document.querySelector("ion-menu-controller").open();
  }

  function closeMenu() {
    document.querySelector("ion-menu-controller").close();
  }

  const lastSlideShown = () => {
    console.log("lastSlideShown");

    setTimeout(() => {
      openMenu();
      setTimeout(() => {
        closeMenu();
        //        lastSlideShown();
      }, 1000);
    }, 2000);
  };
</script>

<style>
  :root {
    --ion-safe-area-top: 20px;
    --ion-safe-area-bottom: 22px;
  }

  ion-slide {
    display: block;
  }
  ion-slide > h2 {
    margin-top: 2.8rem;
  }
  ion-slide > img {
    max-height: 50%;
    max-width: 60%;
    margin: 36px 0;
  }
</style>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Slides</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen padding scroll-y="false">
  <ion-slides on:ionSlideReachEnd={lastSlideShown}>

    <ion-slide>
      <img src="./assets/img/slides/slide-1.png" alt="pict" />
      <h2>Welcome!</h2>
      <p>
        The
        <b>Svelte Ionic App</b>
        is a practical preview of the ionic framework in action, and a
        demonstration of proper code use (ahum!!) in svelte.
      </p>
    </ion-slide>

    <ion-slide>
      <img src="./assets/img/slides/slide-2.png" alt="pict" />
      <h2>What is Ionic?</h2>
      <p>
        <b>Ionic Framework</b>
        is an open source SDK that enables developers to build high quality
        mobile apps with web technologies like HTML, CSS, and JavaScript.
      </p>
    </ion-slide>

    <ion-slide>
      <img src="./assets/img/slides/slide-4.png" alt="pict" />
      <h2>Ready to Play?</h2>
      Check out
      <ion-icon name="menu" />
      in left uppper corner to look at UI examples.
      <ion-button fill="clear" on:click={continueToTab}>
        Continue to tabs
        <ion-icon slot="end" name="arrow-forward" />
      </ion-button>
    </ion-slide>

  </ion-slides>
</ion-content>
