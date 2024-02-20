import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },

      screens: {
        xs: "512px",
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

        "zoom-out": "zoom-out 300ms ease-out",

        "zoom-in": "zoom-in 300ms ease-in",
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

        "zoom-out": {
          from: { transform: "scale(1)", visibility: "visible" },
          to: { transform: "scale(0)", visibility: "hidden" },
        },

        "zoom-in": {
          from: { transform: "scale(0)", visibility: "hidden" },
          to: { transform: "scale(1)", visibility: "visible" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
