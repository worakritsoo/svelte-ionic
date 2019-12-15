<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Radio</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <ion-list>
    <ion-radio-group>
      <ion-list-header>
        <ion-label>Fruit</ion-label>
      </ion-list-header>
      <ion-item>
        <ion-label>Apple</ion-label>
        <ion-radio slot="start" color="success" value="apple" />
      </ion-item>

      <ion-item>
        <ion-label>Grape</ion-label>
        <ion-radio slot="start" color="tertiary" value="grape" checked />
      </ion-item>

      <ion-item>
        <ion-label>Cherry</ion-label>
        <ion-radio slot="start" color="danger" value="cherry" />
      </ion-item>
    </ion-radio-group>

    <ion-radio-group allow-empty-selection>
      <ion-list-header>
        <ion-label>Pizza Topping</ion-label>
      </ion-list-header>
      <ion-item>
        <ion-label>Beef</ion-label>
        <ion-radio slot="end" color="primary" />
      </ion-item>

      <ion-item>
        <ion-label>Anchovies</ion-label>
        <ion-radio slot="end" color="secondary" checked />
      </ion-item>

      <ion-item>
        <ion-label>Sausage</ion-label>
        <ion-radio slot="end" color="tertiary" name="sausage" />
      </ion-item>

      <ion-item>
        <ion-label>Bellpepper</ion-label>
        <ion-radio slot="end" color="success" value="tomato" />
      </ion-item>

      <ion-item>
        <ion-label>Tomato</ion-label>
        <ion-radio slot="end" color="warning" value="carrot" />
      </ion-item>

      <ion-item>
        <ion-label>Pepperoni</ion-label>
        <ion-radio slot="end" color="danger" checked />
      </ion-item>
    </ion-radio-group>
  </ion-list>
</ion-content>
