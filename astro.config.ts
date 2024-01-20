import { defineConfig } from "astro/config";
import { siteConfig } from "./src/site_config";
import icon from "astro-icon";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({}),
    react(),
  ],
  site: siteConfig.siteUrl,
});
