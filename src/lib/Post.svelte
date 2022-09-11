<script>
  import Card from "./Card.svelte";

  export let title = "Post";
  export let createdDate = "Today";
  export let content = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Animi excepturi aperiam recusandae deserunt, dolor, 
    reiciendis velit, perspiciatis tenetur asperiores vero debitis. 
    Officia accusantium iure iusto enim? Magnam dicta autem vero.`;
  export let to = "/";
  export let isDetailView = true;
</script>

<Card>
  <h3 class="text-3xl font-medium">{title}</h3>
  <p class="font-light text-gray-500">{createdDate}</p>
  <p>{content}</p>
  {#if isDetailView}
    <a
      class="css-transition relative p-[10px] pr-7 mt-2 bg-blue-500 font-bold text-white rounded-md"
      href={to}
    >
      <p>Read More</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="absolute top-1/3 right-[6px]"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
      </svg>
    </a>
  {/if}
</Card>

<style>
  .css-transition {
    width: 120px;
    transition: 0.4s;
  }

  .css-transition:hover {
    width: 130px;
  }
</style>
