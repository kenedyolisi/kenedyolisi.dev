<script>
  import Logo from "@components/logo.svelte";
  import Icon from "@iconify/svelte";
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
    md:shadow-none
    
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
        <Icon icon="bi:x-lg" width={16} class="text-dark" />
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      width={25}
    >
      <path
        d="M0 12.344h1.46l.564 2.187.561-2.187h1.456v3.592h-.906v-2.739l-.704 2.739h-.82l-.702-2.739v2.739H0zm4.747 0H7.72v.767H5.86v.572h1.727v.733H5.86v.707h1.916v.813h-3.03zm3.634 0h1.036l1.354 1.987v-1.987h1.046v3.592h-1.046l-1.347-1.973v1.973H8.381zm6.511 0H16v2.141q0 .32-.1.604-.099.28-.312.494-.21.212-.443.297-.324.12-.777.12-.263 0-.573-.036-.31-.037-.518-.145-.208-.11-.382-.311-.171-.2-.235-.413-.103-.344-.103-.61v-2.141h1.107v2.193q0 .294.163.462.164.164.453.164.287 0 .448-.163.164-.164.164-.463z"
      ></path>
      <path
        d="M1.333 0h13.334A1.33 1.33 0 0116 1.333a1.33 1.33 0 01-1.333 1.334H1.333A1.33 1.33 0 010 1.333 1.33 1.33 0 011.333 0zm0 6.172h13.334A1.33 1.33 0 0116 7.505a1.33 1.33 0 01-1.333 1.334H1.333A1.33 1.33 0 010 7.505a1.33 1.33 0 011.333-1.333z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </button>
</header>
