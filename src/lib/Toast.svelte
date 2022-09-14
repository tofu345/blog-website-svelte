<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const truncateStr = (str) => {
    const length = 1000;
    if (str.length > length) {
      return str.substring(0, length) + "...";
    } else {
      return str;
    }
  };

  export let notif;
</script>

<div class="bg-white rounded-xl flex w-fit border-2">
  <div class="overflow-auto h-full m-4 mr-3">
    {truncateStr(notif.message)}
  </div>

  <div
    class="transition-all duration-300 cursor-pointer h-full m-3 ml-0 mr-2 p-3 my-auto rounded-full border-2 border-transparent
      hover:bg-gray-200/60 hover:border-gray-300/70"
    on:click={() => dispatch("deleteNotif", notif.id)}
  >
    <div class="h-full flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="black"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
        />
      </svg>
    </div>
  </div>
</div>
