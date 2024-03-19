<script lang="ts">
  import Logo from "@components/logo.svelte";
  import SiteNav from "@components/site_nav.svelte";
  import ThemeMenu from "@components/theme_menu.svelte";
  import { clickOutside } from "src/utils";

  let isOpen = false;
</script>

<header
  class="sticky top-0 z-20 flex justify-between items-center gap-3 w-full py-3 px-5 bg-white dark:bg-dark"
>
  <a href="/"><Logo /></a>

  <div
    class={`
    fixed md:static top-0 right-0 bottom-0
    flex flex-col md:flex-row md:flex-grow md:justify-between md:items-center gap-4
    w-full xs:w-3/5 md:w-auto
    py-3 px-5 md:p-0
    border-l md:border-none
    bg-white dark:bg-dark md:bg-transparent
    md:translate-x-0
    transition-transform
    duration-300 focus:not:translate-x-full
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}
    use:clickOutside
    on:outclick={() => (isOpen = false)}
  >
    <div class="flex justify-between items-center md:hidden">
      <a href="/"><Logo /></a>
      <button
        class="h-fit p-3 border ronded-md"
        on:click={() => (isOpen = false)}
      >
        <span class="icon icon-x"></span>
      </button>
    </div>
    <SiteNav />
    <hr class="md:hidden" />
    <ThemeMenu />
  </div>

  <button
    class="h-fit p-2 md:hidden border rounded-md"
    type="button"
    on:click={() => (isOpen = !isOpen)}
  >
    <span class="icon icon-menu"></span>
  </button>
</header>
