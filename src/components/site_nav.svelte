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

<nav>
  <ul class="flex flex-col md:flex-row gap-1">
    {#each navLinks as navLink, index (index)}
      <li>
        <a
          class={`block md:inline-block p-2 capitalize no-underline
            md:after:content-[''] md:after:h-2 md:after:bg-primary`}
          href="/{navLink === 'home' ? '' : navLink}"
        >
          {navLink}
        </a>
      </li>
    {/each}
  </ul>
</nav>
