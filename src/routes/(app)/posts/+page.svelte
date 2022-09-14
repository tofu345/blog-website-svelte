<script>
  import PostList from "$lib/PostList.svelte";
  import AboutUs from "$lib/AboutUs.svelte";
  import posts from "$lib/stores/posts";
  import sendNotification from "$lib/util/notificationUtils";

  export let data;

  posts.set(data.data);

  const deletePost = async (e) => {
    const post = e.detail;
    const fetchData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    };

    const res = await fetch(`/api/posts/${post.author}/${post.slug}`, fetchData)
      .then((res) => res.json())
      .catch((res) => res.json());

    if (res.responseCode == 100)
      posts.update((currentData) => {
        return currentData.filter((el) => el.id != post.id);
      });

    sendNotification(res.message, 10000);
  };
</script>

<header class="bg-[#3398E1] p-10 px-[20%] text-white">
  <p class="text-3xl mb-5">Welcome to my Awesome Blog</p>
  <p>We Love Django and Svelte as much as you do!</p>
</header>

<PostList posts={$posts} on:deletePost={deletePost}>
  <AboutUs />
</PostList>
