import { atom } from "nanostores";
import type { Theme } from "src/env";

export const currentTheme = atom<Theme>("system");

function getPreferredTheme() {
  const storedTheme = localStorage.getItem("theme") as Theme | null;
  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia("(preferes-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
