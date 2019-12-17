<script>
  let reorderGroup;

  const toggleReorder = () => {
    reorderGroup.disabled = !reorderGroup.disabled;
  };
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Reorder</ion-title>
    <ion-buttons slot="primary">
      <ion-button on:click={toggleReorder}>Toggle</ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <ion-list>
    <ion-list-header>Reorder Icon</ion-list-header>
    <ion-reorder-group
      {reorderGroup}
      on:ionItemReorder={({ detail }) => {
        detail.complete(true);
      }}>
      <ion-item>
        <ion-label>Item 1</ion-label>
        <ion-reorder slot="end" />
      </ion-item>

      <ion-item>
        <ion-label>Item 2</ion-label>
        <ion-reorder slot="end" />
      </ion-item>

      <ion-item>
        <ion-label>Item 3</ion-label>
        <ion-reorder slot="end" />
      </ion-item>

      <ion-item>
        <ion-label>Item 4</ion-label>
        <ion-reorder slot="end" />
      </ion-item>

      <ion-list-header>Custom Reorder Icon</ion-list-header>
      <ion-item>
        <ion-label>Item 5</ion-label>
        <ion-reorder slot="start">
          <ion-icon name="repeat" />
        </ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label>Item 6</ion-label>
        <ion-reorder slot="start">
          <ion-icon name="repeat" />
        </ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label>Item 7</ion-label>
        <ion-reorder slot="start">
          <ion-icon name="repeat" />
        </ion-reorder>
      </ion-item>

      <ion-list-header>Reorder Item</ion-list-header>
      <ion-reorder>
        <ion-item>
          <ion-label>Item 8</ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label>Item 9</ion-label>
        </ion-item>
      </ion-reorder>

      <ion-reorder>
        <ion-item>
          <ion-label>Item 10</ion-label>
        </ion-item>
      </ion-reorder>

    </ion-reorder-group>
  </ion-list>
</ion-content>
