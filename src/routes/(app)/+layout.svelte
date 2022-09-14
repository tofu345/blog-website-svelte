<script>
  import "../../app.css";

  import { page } from "$app/stores";
  import Navbar from "$lib/Navbar.svelte";
  import Transition from "$lib/Transition.svelte";
</script>

<Navbar />
<Transition url={$page.url}>
  <slot />
</Transition>
