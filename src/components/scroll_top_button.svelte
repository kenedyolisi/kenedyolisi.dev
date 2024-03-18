<script>
  import Icon from "@iconify/svelte";
  import { fade, scale } from "svelte/transition";

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
    class="fixed right-6 bottom-10 p-3 rounded-full bg-primary text-white"
    title="scroll to top"
    type="button"
    transition:scale={{ duration: 300 }}
    on:click={() => {
      scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    <!-- <Icon icon="bi:arrow-up" color="white" width={24} /> -->
    Top
  </button>
{/if}
