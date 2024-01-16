import type { Config } from "tailwindcss";

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
} satisfies Config;
