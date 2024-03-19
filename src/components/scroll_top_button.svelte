<script>
  import { scale } from "svelte/transition";

  let prevY = 0;
  let show = false;

  function handleScroll() {
    if (scrollY < 100 || scrollY > prevY) {
      show = false;
    } else {
      show = true;
    }
    prevY = scrollY;
  }
</script>

<svelte:window on:scroll={handleScroll} />

{#if show}
  <button
    class="fixed right-6 bottom-10 h-12 leading-4 p-4 rounded-full bg-primary dark:bg-dark text-white"
    title="scroll to top"
    type="button"
    transition:scale={{ duration: 300 }}
    on:click={() => {
      scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    <span class="icon icon-arrow-up"></span>
  </button>
{/if}
