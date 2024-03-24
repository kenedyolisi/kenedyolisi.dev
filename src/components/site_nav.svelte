<script lang="ts">
  const navLinks = [
    "about",
    "services",
    "projects",
    // "testimonials",
    "blog",
    "contact",
  ];
</script>

<nav class="flex flex-col md:flex-row gap-1">
  {#each navLinks as navLink, index (index)}
    <a
      class={`
      block md:inline-block p-2 capitalize decoration-2 hover:underline ${location.pathname === `/${navLink}` ? "underline" : "no-underline"}
      `}
      href={`/${navLink}`}
    >
      {navLink}
    </a>
  {/each}
</nav>
