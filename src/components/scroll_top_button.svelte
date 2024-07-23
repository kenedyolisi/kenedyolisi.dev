<script>
  import { scale } from "svelte/transition";

  let previousScrollY = $state(0);
  let isVisible = $state(false);

  function handleScroll() {
    if (scrollY < 100 || scrollY > previousScrollY) {
      isVisible = false;
    } else {
      isVisible = true;
    }
    previousScrollY = scrollY;
  }
</script>

<svelte:window on:scroll={handleScroll} />

{#if isVisible}
  <button
    class="fixed right-6 bottom-10 p-3 leading-4 rounded-full bg-primary dark:bg-primary-dark text-white"
    title="scroll to top"
    type="button"
    transition:scale={{ duration: 300 }}
    onclick={() => {
      scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    <span class="icon icon-arrow-up"></span>
  </button>
{/if}
