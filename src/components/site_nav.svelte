<script lang="ts">
  const navLinks = [
    "about",
    "services",
    "showcase",
    // "testimonials",
    "blog",
    "contact",
  ];
</script>

<nav class="flex flex-col md:flex-row gap-1">
  {#each navLinks as navLink, index (index)}
    <a
      class={`
      block md:inline-block p-2 capitalize no-underline
      `}
      href={`/${navLink === "home" ? "" : navLink}`}
    >
      {navLink}
    </a>
  {/each}
</nav>
