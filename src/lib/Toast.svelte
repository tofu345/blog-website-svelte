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

<div class="relative border-2 bg-white border-gray p-3 pr-6 rounded-md">
  <div class="overflow-auto h-full pr-3">
    {truncateStr(notif.message)}
  </div>
  <div
    class="rounded-r-md absolute cursor-pointer top-0 right-0 h-full min-w-[30px]"
  >
    <div
      class="pr-1 h-full flex justify-center items-center rounded-r-lg"
      on:click={() => dispatch("deleteNotif", notif.id)}
    >
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
