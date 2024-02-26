import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  BsCaretDownFill,
  BsCircleHalf,
  BsMoonStarsFill,
  BsSunFill,
} from "react-icons/bs";

type Theme = "dark" | "light" | "system";

const themeIcons: Map<Theme, IconType> = new Map([
  ["dark", BsMoonStarsFill],
  ["light", BsSunFill],
  ["system", BsCircleHalf],
]);

const Icon = (Type: IconType) => <Type />;

export default function ThemeMenu() {
  const [activeTheme, setActiveTheme] = useState<Theme>("system");
  const [expanded, setExpanded] = useState(false);

  const rootElement = document.documentElement;
  const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }
    return darkThemeQuery.matches ? "dark" : "light";
  };

  useEffect(() => {
    function handleStorage() {
      setTheme(getPreferredTheme());
    }

    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [activeTheme]);

  useEffect(() => {
    function handleChange() {
      setTheme(getPreferredTheme());
    }

    darkThemeQuery.addEventListener("change", handleChange);

    return () => {
      darkThemeQuery.removeEventListener("change", handleChange);
    };
  }, []);

  setTheme(getPreferredTheme());

  document.addEventListener("astro:after-swap", handleAfterSwap);

  function handleAfterSwap() {
    setTheme(getPreferredTheme());
  }

  function toggleThemeMenu() {
    setExpanded(!expanded);
  }

  function switchTheme(event) {
    const theme = event.target?.closest("button").dataset.theme as Theme;
    switch (theme) {
      case "dark":
      case "light":
        localStorage.setItem("theme", theme);
        setTheme(theme);
        break;

      case "system":
        localStorage.removeItem("theme");
        setTheme(theme);
        break;
      default:
        break;
    }
    setExpanded(false);
    setActiveTheme(theme);
  }

  function setTheme(theme: Theme) {
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }

  return (
    <div>
      <button
        className="relative inline-flex items-center gap-2 bg-primary text-white rounded p-3"
        id="theme-menu-toggler"
        type="button"
        aria-controls="theme-menu"
        aria-haspopup="true"
        aria-expanded={expanded}
        onClick={toggleThemeMenu}
      >
        {Icon(themeIcons.get(getPreferredTheme())!)}
        {
          <BsCaretDownFill
            className={`transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        }
      </button>
      <ul
        className={`absolute md:right-0 p-2 mt-2 border rounded bg-white dark:bg-dark space-y-1 ${
          !expanded ? "hidden" : ""
        }`}
      >
        {Array.from(themeIcons.entries()).map(([theme, icon]) => (
          <li role="presentation" key={theme}>
            <button
              className={`inline-flex items-center gap-2 w-full py-1 px-2
              rounded hover:bg-primary hover:dark:bg-primary-dark
              hover:text-white
               ${
                 theme === activeTheme
                   ? "bg-primary dark:bg-primary-dark text-white"
                   : "bg-gray-200 dark:text-dark "
               }`}
              data-theme={theme}
              type="button"
              role="menuitem"
              onClick={switchTheme}
            >
              {Icon(icon)}
              <span className="capitalize">{theme}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
