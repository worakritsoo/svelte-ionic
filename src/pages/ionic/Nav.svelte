<script>
  import { register } from "svelte-custom-elements";
  import NavHome from "./NavHome.svelte";

  const isRegistered = function(name) {
    return document.createElement(name).constructor !== HTMLElement;
  };

  if (!isRegistered("nav-home")) {
    register("nav-home", NavHome, []);
  }
</script>
