<script>
  import Body from "$lib/Body.svelte";
  import Post from "$lib/Post.svelte";
  // import AboutUs from "$lib/AboutUs.svelte";

  export let data;
  const post = data.data;
</script>

<Body>
  <div slot="left">
    <Post isDetailView={true} {post} />
  </div>
  <div slot="right">
    <!-- <AboutUs /> -->
  </div>
</Body>
