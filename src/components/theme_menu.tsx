import type { IconType } from "react-icons";
import {
  BsCaretDownFill,
  BsCircleHalf,
  BsMoonStarsFill,
  BsSunFill,
} from "react-icons/bs";
import type { Theme } from "src/env";
import { useEffect, useRef, useState } from "react";

const getThemeIcon = (Icon: IconType) => <Icon />;

const themeIcons: Map<Theme, IconType> = new Map([
  ["dark", BsMoonStarsFill],
  ["light", BsSunFill],
  ["system", BsCircleHalf],
]);

export default function ThemeMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<Theme>("system");

  const menuRef = useRef(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    darkQuery.addEventListener("change", handleSystemTheme);

    function handleSystemTheme(event: MediaQueryListEvent) {
      if (!storedTheme) {
        setTheme(event.matches ? "dark" : "light");
      }
    }
    return darkQuery.removeEventListener("change", handleSystemTheme);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
    isOpen && menuRef.current.focus();
  }

  function handleClick(event: MouseEvent) {
    const theme = event.target.getAttribute("data-theme") as Theme;

    setActiveTheme(theme);
    setTheme(theme);
    setIsOpen(false);

    if (theme === "light" || theme === "dark") {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.removeItem("theme");
    }
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }

  function setTheme(theme: Theme) {
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div className="relative">
      <button
        className="inline-flex items-center gap-2 p-2 border rounded-lg bg-primary text-white"
        type="button"
        onClick={toggleMenu}
      >
        {getThemeIcon(themeIcons.get(activeTheme)!)}
        <span className="sr-only" aria-live="polite">
          {activeTheme}
        </span>
        <BsCaretDownFill
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <ul
        className={`absolute md:right-0 p-1 mt-1 space-y-1 border rounded-md ${
          isOpen ? "" : "hidden"
        }`}
        role="menu"
        ref={menuRef}
      >
        {Array.from(themeIcons.entries()).map(([theme, Icon]) => (
          <li role="presentation" key={theme}>
            <button
              className={`inline-flex items-center gap-2 w-full py-1 px-2 rounded-md hover:bg-primary hover:text-white dark:hover:bg-primary-dark capitalize ${
                theme === activeTheme ? "bg-primary text-white" : ""
              }`}
              data-theme={theme}
              type="button"
              role="menuitem"
              onClick={handleClick}
            >
              <Icon />
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
