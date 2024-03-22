import partytown from "@astrojs/partytown";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import { siteConfig } from "./src/site_config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    partytown({
      config: {
        debug: false,
        forward: ["datalayer.push"],
      },
    }),
  ],
  site: siteConfig.siteUrl,
});
