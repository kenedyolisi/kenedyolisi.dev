<script lang="ts">
  import Logo from "@components/logo.svelte";
  import SiteNav from "@components/site_nav.svelte";
  import ThemeMenu from "@components/theme_menu.svelte";
  import { clickOut } from "src/utils";

  let isOpen = false;
  let showShadow = false;

  function handleScroll() {
    if (scrollY > 100) {
      showShadow = true;
    } else {
      showShadow = false;
    }
  }
</script>

<svelte:window on:scroll={handleScroll} />

<header
  class={`
  sticky top-0 z-10 flex justify-between items-center gap-3 w-full 
  py-2 px-5 bg-white dark:bg-dark
  ${showShadow ? "shadow-md" : ""}
  `}
>
  <a href="/"><Logo /></a>

  <div
    class={`
    fixed md:static top-0 md:top-auto right-0 md:right-auto bottom-0 md:bottom-auto z-20
    flex flex-col md:flex-row md:flex-grow md:justify-between md:items-center gap-4
    w-full xs:w-3/5 md:w-auto
    py-3 px-5 md:p-0
    border-l md:border-none
    bg-white dark:bg-dark md:bg-transparent
    md:translate-x-0
    transition-transform
    duration-300
    ${!isOpen ? "translate-x-full" : ""}
    `}
    use:clickOut
    on:clickout={() => (isOpen = false)}
  >
    <div class="flex justify-between items-center md:hidden">
      <a href="/"><Logo /></a>
      <button
        class="p-2 leading-4 border rounded-md"
        on:click={() => (isOpen = false)}
      >
        <span class="w-6 h-6 icon icon-x"></span>
      </button>
    </div>
    <SiteNav />
  </div>
  <ThemeMenu />
  <button
    class="p-2 leading-4 md:hidden border rounded-md"
    type="button"
    on:click={() => (isOpen = !isOpen)}
  >
    <span class="icon icon-menu w-6 h-6"></span>
  </button>
</header>
