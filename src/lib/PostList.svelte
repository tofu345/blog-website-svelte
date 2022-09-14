<script>
  import Post from "./Post.svelte";
  import Body from "./Body.svelte";

  export let posts = [{ title: "Text", to: "/test" }];
</script>

<Body>
  <div slot="left">
    {#each posts as { title, get_absolute_url, content, author, created }}
      <Post {title} to={get_absolute_url} {content} {author} {created} />
    {/each}
    {#if posts.length == 0}
      <p class="p-5">No Posts yet.</p>
    {/if}
  </div>
  <div slot="right">
    <slot />
  </div>
</Body>
