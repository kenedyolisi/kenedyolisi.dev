<script lang="ts">
  import { type Project } from "@data/projects";

  export let project: Project;

  const { image, title } = project;
</script>

<li class="border rounded-lg">
  <img
    class="rounded-t-lg aspect-video"
    src={image}
    alt={title}
    loading="lazy"
    decoding="async"
  />
  <h2>{title}</h2>
</li>
