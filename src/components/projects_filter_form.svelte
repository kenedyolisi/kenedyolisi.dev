<script lang="ts">
  import projects from "@data/projects";

  const technologies = [...new Set(projects.map(({ techs }) => techs).flat())];
  const categories = [
    ...new Set(projects.map(({ categories }) => categories).flat()),
  ];
</script>

<form class="space-y-3">
  {#if technologies.length}
    <details class="space-y-2" open>
      <summary class="flex justify-between items-center cursor-pointer">
        <strong>Technology</strong>
        <span class="icon icon-chevron-right transition-transform duration-200"
        ></span>
      </summary>

      <div class="flex flex-col space-y-1">
        {#each technologies as technology (technology)}
          <label
            class="inline-flex items-center gap-2 py-2 px-4 capitalize hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg cursor-pointer"
          >
            <input name="technologies" value={technology} type="checkbox" />
            {technology}
          </label>
        {/each}
      </div>
    </details>
  {/if}

  {#if categories.length}
    <details class="space-y-3" open>
      <summary class="flex justify-between items-center cursor-pointer">
        <strong>Categories</strong>
        <span class="icon icon-chevron-right transition-transform duration-200"
        ></span>
      </summary>
      <div class="flex flex-col space-y-1">
        {#each categories as category (category)}
          <label
            class="inline-flex items-center gap-2 py-2 px-4 capitalize hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg cursor-pointer"
          >
            <input name="categories" value={category} type="checkbox" />
            {category}
          </label>
        {/each}
      </div>
    </details>
  {/if}

  <button
    class="p-2 border rounded-xl bg-primary dark:bg-primary-dark text-white"
    type="submit"
  >
    View Results
  </button>
</form>

<style>
  details[open] .icon {
    @apply rotate-90;
  }
</style>
