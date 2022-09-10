<script>
  import Link from "./Link.svelte";
</script>

<nav class="p-5 px-10 w-full mx-auto flex justify-between align-center">
  <p>My Blog Website</p>
  <div class="flex flex-row gap-5">
    <Link to="/">About</Link>
    <Link to="/">Policy</Link>
    <Link to="/">Content</Link>
  </div>
</nav>
