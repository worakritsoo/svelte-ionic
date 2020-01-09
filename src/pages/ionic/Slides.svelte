<script>
  function navigate(s) {
    console.log("NOT WORKING", s);
  }

  const continueToTab = () => {
    navigate("/tabs/movies");
  };

  // todo: more sveltish
  function openMenu() {
    document.querySelector("ion-menu-controller").open();
  }

  // todo: more sveltish
  function closeMenu() {
    document.querySelector("ion-menu-controller").close();
  }

  const flipMenuOnOff = () => {
    console.log("flipMenuOnOff");
    setTimeout(() => {
      openMenu();
      setTimeout(() => {
        closeMenu();
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

<svelte:head>
  <title>Ionic UI Companion App - Slides</title>
</svelte:head>
<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Slides</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen padding scroll-y="false">
  <ion-slides on:ionSlideReachEnd={flipMenuOnOff} pager="true">

    <ion-slide>
      <img src="../assets/img/slides/slide-1.png" alt="pict" />
      <h2>Welcome!</h2>
      The
      <b>Ionic UI App</b>
      is a practical preview of the ionic framework, and a demonstration of
      proper use (ahum!!) in svelte or even other languages.
      <br />
      <br />
      <br />
    </ion-slide>

    <ion-slide>
      <img src="../assets/img/slides/svelte.png" alt="pict" />
      <h2>Handy tool!</h2>
      By clicking the button bottom right you can instantly view the source code
      of the element you are viewing, to copy/paste and direct link to API docs.
      <br />
      <br />
      <br />
    </ion-slide>

    <ion-slide>
      <img src="../assets/img/slides/slide-2.png" alt="pict" />
      <h2>What is Ionic?</h2>

      <b>Ionic Framework</b>
      is an open source SDK that enables developers to build high quality mobile
      apps with web technologies.
      <br />
      <br />
      <br />
    </ion-slide>

    <ion-slide>
      <img src="../assets/img/slides/slide-4.png" alt="pict" />
      <h2>Ready to Play?</h2>
      Check out
      <ion-icon name="menu" />
      to look at UI examples.
      <br />
      <ion-button fill="clear" on:click={continueToTab}>
        Continue to tabs demo
        <ion-icon slot="end" name="arrow-forward" />
      </ion-button>
      <br />
      <br />
      <br />
    </ion-slide>

  </ion-slides>
</ion-content>
