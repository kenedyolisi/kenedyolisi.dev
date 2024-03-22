<script lang="ts">
  import { clickOut } from "src/utils";

  const themeIcons = new Map([
    ["dark", "moon-stars"],
    ["light", "sun"],
    ["system", "circle-half"],
  ]);

  let menuIsOpen = false;
  let activeTheme = "system";
  let darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  setTheme(activeTheme);

  $: {
    if (activeTheme === "system") {
      darkQuery.addEventListener("change", handleDarkQuery);
    }
  }

  function handleChange() {
    menuIsOpen = false;
    switch (activeTheme) {
      case "dark":
      case "light":
        localStorage.setItem("theme", activeTheme);
        setTheme(activeTheme);
        break;
      case "system":
        localStorage.removeItem("theme");
        setTheme(darkQuery.matches ? "dark" : "light");
        break;
      default:
        break;
    }
  }

  function setTheme(theme) {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function handleDarkQuery(this: MediaQueryList, event: MediaQueryListEvent) {
    const systemTheme = event.matches ? "dark" : "light";
    console.log(systemTheme);
  }
</script>

<div class="ms-auto relative">
  <button
    class="inline-flex items-center gap-1 p-2 leading-4 border rounded-lg bg-primary dark:bg-primary-dark text-white"
    on:click={() => {
      menuIsOpen = !menuIsOpen;
    }}
  >
    <span class={`icon icon-${themeIcons.get(activeTheme)}`}></span>
    <span
      class={`icon icon-caret-down transition-transform duration-300 ${menuIsOpen ? "rotate-180" : ""}`}
    ></span>
  </button>
  <div
    class={`
    absolute right-0 flex flex-col p-1 mt-1 border rounded-md space-y-2
    bg-white dark:bg-dark
    ${!menuIsOpen ? "hidden" : ""}
   `}
    use:clickOut
    on:clickout={handleChange}
  >
    {#each themeIcons as [theme, icon] (theme)}
      <label
        class="inline-flex justify-between items-center gap-1 p-2 rounded-lg cursor-pointer capitalize hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        <span class={`icon icon-${icon}`}></span>
        {theme}
        <input
          class="appearance-none"
          name="theme"
          value={theme}
          type="radio"
          bind:group={activeTheme}
          on:change={() => (menuIsOpen = false)}
        />
      </label>
    {/each}
  </div>
</div>

<style lang="scss">
  .wrapper {
    &-inner {
      margin: 0;
    }
  }
</style>
