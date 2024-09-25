<script lang="ts">
  import { clickOut } from "src/utils";
  import { slide } from "svelte/transition";

  type Theme = "dark" | "light" | "system";

  let expanded = $state(false);
  let currentTheme: Theme | null = $state(null);
  let themeIcons: Map<Theme, string> = new Map([
    ["dark", "moon-stars"],
    ["light", "sun"],
    ["system", "circle-half"],
  ]);

  $effect.pre(() => {
    // TODO: explore other ways to implement this
    currentTheme = (localStorage.getItem("theme") as Theme | null) || "system";
  });

  $effect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleDarkQueryChange = (event: MediaQueryListEvent) => {
      const systemTheme = event.matches ? "dark" : "light";
      setTheme(systemTheme);
    };

    if (currentTheme === "system") {
      darkQuery.addEventListener("change", handleDarkQueryChange);
    } else {
      darkQuery.removeEventListener("change", handleDarkQueryChange);
    }

    return () => darkQuery.removeEventListener("change", handleDarkQueryChange);
  });

  function toggleExpanded() {
    expanded = !expanded;
  }

  function handleSelect(theme: Theme) {
    currentTheme = theme;

    if (theme === "system") {
      localStorage.removeItem("theme");

      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      setTheme(systemTheme);
    } else {
      localStorage.setItem("theme", theme);

      setTheme(theme);
    }

    toggleExpanded();
  }

  function setTheme(theme: Theme) {
    const documentElement = document.documentElement;

    if (theme === "dark") {
      documentElement.classList.add("dark");
    } else {
      documentElement.classList.remove("dark");
    }
  }
</script>

<div class="relative" use:clickOut onclickout={() => (expanded = false)}>
  <button
    class="flex items-center gap-1 p-1 rounded-md text-slate-500 active:scale-95"
    type="button"
    title="Theme menu"
    role="combobox"
    aria-controls="theme-menu"
    aria-expanded={expanded}
    onclick={toggleExpanded}
  >
    <span
      class="icon icon-{currentTheme && themeIcons.get(currentTheme)} size-5"
    ></span>

    <span class="sr-only">{currentTheme}</span>
    <span
      class="icon icon-caret-down transition-transform duration-300"
      class:rotate-180={expanded}
    ></span>
  </button>
  {#if expanded}
    <ul
      class="absolute top-full right-0 min-w-full p-1 mt-2 space-y-1 rounded-md
        bg-slate-100 dark:bg-slate-800
      "
      id="theme-menu"
      role="listbox"
      transition:slide={{ duration: 300 }}
    >
      {#each themeIcons as [theme, icon] (theme)}
        <li role="presentation">
          <button
            class="flex items-center gap-2 w-full px-2 py-1 rounded-md
              text-start capitalize hover:bg-slate-200 dark:hover:bg-slate-700
              {currentTheme === theme ? 'bg-slate-200 dark:bg-slate-700' : ''}
            "
            role="option"
            aria-selected={currentTheme === theme}
            onclick={() => handleSelect(theme)}
          >
            <span class="icon icon-{icon}"></span>
            <span class="capitalize">
              {theme}
            </span>
            <span
              class="icon icon-check ms-auto
                {theme === currentTheme ? 'visible' : 'invisible'}
              "
            ></span>
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>
