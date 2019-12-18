<script>
  const nav = document.querySelector("ion-nav");

  //  export let color;
  //  export let defaultHref;
  export let disabled = false;
  export let icon;
  export let text;

  // const el = document.querySelector("html");
  // console.log(el.className.includes("md"));
  const isMd = document.querySelector("html").className.includes("md");
  if (!icon) {
    icon = isMd ? "arrow-back" : "arrow-back";
  }

  if (!text && isMd) {
    text = "Back";
  }

  const popWindow = () => {
    if (!disabled) {
      nav.pop();
    }
  };
</script>

<ion-button on:click={popWindow}>
  <ion-icon name={icon} />
</ion-button>
