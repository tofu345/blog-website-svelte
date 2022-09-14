<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  /* 
  Validation - `DONE`
  Title - at least 5 characters.
  Content - at least a 5 character as well

  Displaying Error messages:
    non_field_errors, title, content - `DONE`

  User Experience? Modal Or Page [Modal]

  When Post Created Successfully:
    Redirect To Post List
    Display Toast with Text Post Created Successfully!
  */

  export let post = {
    title: "",
    content: "",
    author: "tofu",
  };
  let titleError = "",
    contentError = "",
    generalError = "",
    submittingPost = false;

  $: titleInValid = post.title.trim() == "" && post.title.trim().length < 5;
  $: contentInValid =
    post.content.trim() == "" && post.content.trim().length < 5;

  const submitPost = async () => {
    if (submittingPost) {
      return;
    }

    (titleError = ""), (contentError = ""), (submittingPost = true);

    if (titleInValid || contentInValid) {
      if (titleInValid) titleError = "This field is required";
      if (contentInValid) contentError = "This field is required";
      submittingPost = false;
      return;
    }

    const data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    };

    const res = await fetch("/api/posts/", data)
      .then((res) => res.json())
      .catch((res) => res.json());

    // console.log(res);

    if (res.errors) {
      if (res.errors.non_field_errors)
        generalError = res.errors.non_field_errors;
      if (res.errors.title) titleError = res.errors.title;
      if (res.errors.content) contentError = res.errors.content;
    } else {
      dispatch("postCreated", res.data);
      post = {
        title: "",
        content: "",
        author: "tofu",
      };
    }

    submittingPost = false;
  };
</script>

<div class="w-full p-4 pt-0 flex flex-col gap-2">
  <h3 class="text-2xl font-medium">
    {#if generalError}
      <p class="text-red-500 text-sm">{generalError}</p>
    {/if}
  </h3>

  <div>
    <input
      type="text"
      name="title"
      class="form-control text-3xl {titleError ? 'border-red-500' : ''}"
      placeholder="Title"
      bind:value={post.title}
    />
    {#if titleError}
      <p class="text-red-500 text-sm">{titleError}</p>
    {/if}
  </div>

  <div>
    <textarea
      name="content"
      class="form-control {contentError ? 'border-red-500' : ''}"
      placeholder="Content"
      rows="10"
      cols="50"
      bind:value={post.content}
    />
    {#if contentError}
      <p class="text-red-500 text-sm">{contentError}</p>
    {/if}
  </div>
  <button
    on:click={() => submitPost()}
    class="w-fit p-[10px] mt-2 bg-red-500 disabled:opacity-70 font-bold text-white rounded-md"
  >
    Create
  </button>
</div>
