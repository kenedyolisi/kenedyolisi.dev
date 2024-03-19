import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,ts,md,mdx,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },

      screens: {
        xs: "512px",
      },

      container: {
        center: true,
        padding: "2rem",
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

      animation: {
        "translate-in": "translate-in ease-in-out",
      },

      keyframes: {
        "translate-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },

        "translate-out": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
