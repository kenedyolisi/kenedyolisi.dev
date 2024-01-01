import { defineConfig } from "astro/config";
import { siteConfig } from "./src/site_config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel({ imageService: true }),
  build: { format: "file" },
  site: siteConfig.siteUrl,
  trailingSlash: "never",
});
