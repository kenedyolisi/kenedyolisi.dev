<script lang="ts">
  import Project from "@components/project.svelte";
  import { type Project as IProject } from "@data/projects";

  export let projects: IProject[];
</script>

<ul class="grid gap-5 grid-cols-1 md:grid-cols-2">
  {#each projects as project}
    <Project {project} />
  {/each}
</ul>
