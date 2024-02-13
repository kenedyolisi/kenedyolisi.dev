import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
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
    }),
    icon(),
    partytown({ config: { debug: false } }),
    react(),
  ],
  site: siteConfig.siteUrl,
});
