<script>
  export let to;
  export let className = "border-b-transparent hover:border-b-black border-b-2";
</script>

<a href={to} class={className}>
  <slot />
</a>
