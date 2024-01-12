import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      colors: {
        primary: {
          DEFAULT: "#106cfe",
          dark: "#468cfc",
        },

        success: {
          DEFAULT: "#0f8750",
          dark: "#14a35a",
        },

        danger: {
          DEFAULT: "#dc324b",
          dark: "#ff4b5a",
        },

        dark: "#1e2832",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities, theme }) {
      addComponents({
        // ".card": {
        //   padding: theme("padding.2"),
        // },
        ".col": {
          flex: "1 0 0%",
        },
      });

      addUtilities({});
    }),
  ],
} satisfies Config;
