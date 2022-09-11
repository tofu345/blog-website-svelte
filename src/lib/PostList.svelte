<script>
  import Post from "./Post.svelte";
  import Body from "./Body.svelte";

  export let posts = [
    { title: "First", slug: "/1/first-post" },
    { title: "Second", slug: "/1/first-post" },
    { title: "Third", slug: "/1/first-post" },
    { title: "Fourth", slug: "/1/first-post" },
    { title: "Fifth", slug: "/1/first-post" },
  ];
</script>

<Body>
  <div slot="left">
    {#each posts as { title, slug }}
      <Post {title} to={slug} />
    {/each}
  </div>
  <div slot="right">
    <slot />
  </div>
</Body>
