<script>
  import Post from "./Post.svelte";
  import Body from "./Body.svelte";
  import { flip } from "svelte/animate";

  export let posts = [{ title: "Text", to: "/test" }];
</script>

<Body>
  <div slot="left">
    {#each posts as post (post.id)}
      <div animate:flip={{ duration: 500 }}>
        <Post {post} on:deletePost />
      </div>
    {/each}
    {#if posts.length == 0}
      <p class="p-5">No Posts yet.</p>
    {/if}
  </div>
  <div slot="right">
    <slot />
  </div>
</Body>
