import { defineConfig } from "astro/config";
import { siteConfig } from "./src/site_config";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    imageService: true
  }),
  integrations: [icon({
    include: {
      bi: ["box-arrow-up-right", "facebook", "github", "linkedin", "twitter-x"]
    }
  }), tailwind()],
  site: siteConfig.siteUrl
});