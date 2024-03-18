<script lang="ts">
  import { clickOutside } from "src/utils";
  type Theme = "dark" | "light" | "system";

  let activeTheme: Theme = "system";

  const themes: Theme[] = ["dark", "light", "system"];

  let isOpen = false;
</script>

<div class="relative">
  <button
    class="p-2 border rounded-lg bg-primary dark:bg-primary-dark text-white"
    on:click={() => {
      isOpen = !isOpen;
    }}
  >
    {activeTheme}
  </button>
  <div
    class={`absolute md:right-0 flex flex-col p-1 mt-1 border rounded-md space-y-2
   ${!isOpen ? "hidden" : ""}`}
    use:clickOutside
    on:outclick={() => {
      if (isOpen) {
        isOpen = false;
      }
    }}
  >
    {#each themes as theme (theme)}
      <label class="inline-flex justify-between items-center gap-2 capitalize hover:bg-gray-300">
        {theme}
        <input
          name="theme"
          value={theme}
          type="radio"
          bind:group={activeTheme}
        />
      </label>
    {/each}
  </div>
</div>
