<script>
  import PostList from "$lib/PostList.svelte";
  import AboutUs from "$lib/AboutUs.svelte";
  import Toast from "$lib/Toast.svelte";
  import CreatePost from "$lib/CreatePost.svelte";
  import Modal from "$lib/Modal.svelte";
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";

  export let data;
  let notifications = [];
  let modalShown = false;

  const deleteNotif = (e) => {
    notifications = notifications.filter((el) => el.id != e.detail);
  };

  const createNotif = (message, timeout) => {
    let newId;
    if (notifications.length > 0) {
      // Get highest id
      const ids = notifications.map((el) => el.id);
      newId = Math.max.apply(null, ids) + 1;
      notifications = [...notifications, { message, id: newId }];
    } else {
      newId = 1;
      notifications = [{ message, id: newId }];
    }

    if (timeout) {
      setTimeout(() => {
        notifications = notifications.filter((el) => el.id != newId);
      }, timeout);
    }
  };

  const updatePosts = (e) => {
    const ids = data.data.map((el) => el.id);
    const newId = Math.max.apply(null, ids) + 1;

    data.data = [
      {
        ...e.detail,
        id: newId,
      },
      ...data.data,
    ];

    modalShown = false;
    createNotif("Post Created Successfully!", 10000);
  };
</script>

<header class="bg-[#3398E1] p-10 px-[20%] text-white">
  <p class="text-3xl mb-5">Welcome to my awesome blog</p>
  <p>We Love Django and Svelte as much as you do!</p>
</header>

<Modal shown={modalShown} on:closeModal={() => (modalShown = false)}>
  <CreatePost on:postCreated={updatePosts} />
</Modal>

<PostList posts={data.data}>
  <AboutUs on:openCreateModal={() => (modalShown = true)} />
</PostList>

<!-- Notifications -->
<div
  class="z-40 fixed bottom-5 left-5 mr-5 w-fit
    max-w-[500px] max-h-[100px]
    flex flex-col-reverse gap-2"
>
  {#if notifications}
    {#each notifications as notif (notif.id)}
      <div
        out:fly={{ x: -200, duration: 500 }}
        animate:flip={{ duration: 500 }}
      >
        <Toast {notif} on:deleteNotif={deleteNotif} />
      </div>
    {/each}
  {/if}
</div>
