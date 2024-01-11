import { defineConfig } from "astro/config";
import { siteConfig } from "./src/site_config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    imageService: true,
  }),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon({
      include: {
        bi: [
          "box-arrow-up-right",
          "facebook",
          "github",
          "linkedin",
          "twitter-x",
        ],
      },
    }),
  ],
  site: siteConfig.siteUrl,
});
