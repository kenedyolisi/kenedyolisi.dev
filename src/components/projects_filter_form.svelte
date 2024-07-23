<script lang="ts">
  import projects from "@data/projects";

  const technologies = [...new Set(projects.map(({ techs }) => techs).flat())];
  const categories = [
    ...new Set(projects.map(({ categories }) => categories).flat()),
  ];

  function filterProjects(
    event: Event & {
      currentTarget: EventTarget & HTMLInputElement;
    },
  ) {
    const form = event.currentTarget.form;

    if (form?.requestSubmit) {
      form.requestSubmit();
    } else {
      form?.submit();
    }
  }
</script>

<form class="space-y-3">
  {#if technologies.length}
    <fieldset>
      <details class="group space-y-2" open>
        <summary class="flex justify-between items-center cursor-pointer">
          <strong>Technology</strong>
          <span
            class="group-open:rotate-90 icon icon-chevron-right transition-transform duration-200"
          ></span>
        </summary>

        <div class="flex flex-col space-y-1">
          {#each technologies as technology (technology)}
            <label
              class="inline-flex items-center gap-2 py-2 px-4 capitalize hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg cursor-pointer"
            >
              <input
                name="technologies"
                value={technology}
                type="checkbox"
                onchange={filterProjects}
              />
              {technology}
            </label>
          {/each}
        </div>
      </details>
    </fieldset>
  {/if}

  {#if categories.length}
    <fieldset>
      <details class="group space-y-3" open>
        <summary class="flex justify-between items-center cursor-pointer">
          <strong>Categories</strong>
          <span
            class="group-open:rotate-90 icon icon-chevron-right transition-transform duration-200"
          ></span>
        </summary>
        <div class="flex flex-col space-y-1">
          {#each categories as category (category)}
            <label
              class="inline-flex items-center gap-2 py-2 px-4 capitalize hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg cursor-pointer"
            >
              <input
                name="categories"
                value={category}
                type="checkbox"
                onchange={() => {
                  filterProjects;
                }}
              />
              {category}
            </label>
          {/each}
        </div>
      </details>
    </fieldset>
  {/if}

  <button
    class="p-2 border rounded-xl bg-primary dark:bg-primary-dark text-white"
    type="submit"
  >
    View Results
  </button>
</form>
