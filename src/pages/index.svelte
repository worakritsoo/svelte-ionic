<script>
  import { goto } from "@sveltech/routify";

  function navigate(url) {
    console.log("Navigate url", url);
    $goto(url);
  }

  navigate("/ionic/Splash");
</script>
