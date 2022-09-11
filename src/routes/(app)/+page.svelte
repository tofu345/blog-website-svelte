<script>
  import PostList from "$lib/PostList.svelte";
  import AboutUs from "$lib/AboutUs.svelte";
</script>

<!-- TODO Error pages -->

<header class="bg-[#3398E1] p-10 px-[20%] text-white">
  <p class="text-3xl mb-5">Welcome to my awesome blog</p>
  <p>We Love Golang and Svelte as much as you do!</p>
</header>

<PostList>
  <AboutUs />
</PostList>
