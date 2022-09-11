<script>
  import { fly } from "svelte/transition";

  export let url;
</script>

{#key url}
  <div in:fly={{ x: -30, duration: 500 }}>
    <slot />
  </div>
{/key}
