import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities, theme }) {
      addComponents({
        // ".card": {
        //   padding: theme("padding.2"),
        // },
      });

      addUtilities({});
    }),
  ],
} satisfies Config;
