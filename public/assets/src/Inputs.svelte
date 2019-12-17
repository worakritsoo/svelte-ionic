<script>
  const controller = document.querySelector("ion-alert-controller");
  let firstName, lastName;
  function processForm(event) {
    event.preventDefault();
    controller
      .create({
        header: "Account Created",
        message: `Created account for: <b>${firstName} ${lastName}</b>`,
        buttons: [
          {
            text: "OK"
          }
        ]
      })
      .then(alert => alert.present());
  }
  function handleFirstNameValue(event) {
    firstName = event.target.value;
  }
  function handleLastNameValue(event) {
    lastName = event.target.value;
  }
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Create Account</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <form onsubmit="processForm(event)">
    <ion-list lines="full" class="ion-no-margin ion-no-padding">
      <ion-item>
        <ion-label position="stacked">
          First Name
          <ion-text color="danger">*</ion-text>
        </ion-label>
        <ion-input required type="text" oninput="handleFirstNameValue(event)" />
      </ion-item>

      <ion-item>
        <ion-label position="stacked">
          Last Name
          <ion-text color="danger">*</ion-text>
        </ion-label>
        <ion-input required type="text" oninput="handleLastNameValue(event)" />
      </ion-item>

      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input />
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Address</ion-label>
        <ion-input placeholder="Address Line 1" />
        <ion-input placeholder="Address Line 2" />
        <ion-input placeholder="City" />
        <ion-input placeholder="State" />
        <ion-input placeholder="Zip Code" />
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Notes</ion-label>
        <ion-textarea />
      </ion-item>
    </ion-list>

    <div class="ion-padding">
      <ion-button expand="block" type="submit" class="ion-no-margin">
        Create account
      </ion-button>
    </div>
  </form>
</ion-content>
<ion-alert-controller />
