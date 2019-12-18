<script>
  import NavList from "./NavList.svelte";
  import { registerWebComponentOnce } from "../../services/IonicControllers";

  registerWebComponentOnce("nav-list", NavList);
</script>

<ion-nav root="nav-list" />
