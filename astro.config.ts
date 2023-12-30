import { defineConfig } from "astro/config";
import { siteConfig } from "./src/site_config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.siteUrl,
  output: "server",
  adapter: vercel(),
});
