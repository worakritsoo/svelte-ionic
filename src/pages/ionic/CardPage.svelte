<svelte:head>
  <title>Ionic Companion - {title}</title>
</svelte:head>

<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>{title}</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      <ion-card-title>Card Title</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile, and
      climb a mountain or spend a week in the woods. Wash your spirit clean.
    </ion-card-content>
  </ion-card>

  <ion-card>
    <ion-item>
      <ion-icon name="pin" slot="start"></ion-icon>
      <ion-label>ion-item in a card, icon left, button right</ion-label>
      <ion-button fill="outline" slot="end">View</ion-button>
    </ion-item>

    <ion-card-content>
      This is content, without any paragraph or header tags, within an
      ion-card-content element.
    </ion-card-content>
  </ion-card>

  <ion-card>
    <ion-item href="/ionic/tabs/:tab" class="activated">
      <ion-icon name="wifi" slot="start"></ion-icon>
      <ion-label>Card Link Item 1 .activated</ion-label>
    </ion-item>

    <ion-item href="/ionic/Buttons">
      <ion-icon name="wine" slot="start"></ion-icon>
      <ion-label>Card Link Item 2</ion-label>
    </ion-item>

    <ion-item class="activated">
      <ion-icon name="warning" slot="start"></ion-icon>
      <ion-label>Card Button Item 1 .activated</ion-label>
    </ion-item>

    <ion-item>
      <ion-icon name="walk" slot="start"></ion-icon>
      <ion-label>Card Button Item 2</ion-label>
    </ion-item>
  </ion-card>

  <ion-card>
    <img src="../assets/img/madison.jpg" alt="madison" />
    <ion-card-header>
      <ion-card-subtitle>Destination</ion-card-subtitle>
      <ion-card-title>Madison, WI</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
      Madison was named the capital of the Wisconsin Territory in 1836.
    </ion-card-content>
  </ion-card>
</ion-content>

<script>
export let title;
</script>
