import partytown from "@astrojs/partytown";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import webVitals from "@astrojs/web-vitals";
import { defineConfig } from "astro/config";
import { siteConfig } from "./src/site_config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    svelte(),
    partytown({
      config: {
        debug: false,
        forward: ["datalayer.push"],
      },
    }),
    webVitals(),
  ],
  site: siteConfig.siteUrl,
});
