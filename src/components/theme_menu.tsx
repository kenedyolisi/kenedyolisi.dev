import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  BsCaretDownFill,
  BsCircleHalf,
  BsMoonStarsFill,
  BsSunFill,
} from "react-icons/bs";

type Theme = "dark" | "light" | "system";

const Icon = (Component: IconType) => <Component />;

const themesIcons: Map<Theme, IconType> = new Map([
  ["dark", BsMoonStarsFill],
  ["light", BsSunFill],
  ["system", BsCircleHalf],
]);

const rootElement = document.documentElement;

document.addEventListener("astro:after-swap", () => {
  if (localStorage.theme === "dark" || !("theme" in localStorage)) {
    rootElement.classList.add("dark");
  } else {
    rootElement.classList.remove("dark");
  }
});

export default function ThemeMenu() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("system");
  const [isOpen, setIsOpen] = useState(false);

  const themeMenuRef = useRef(null);

  // useEffect(() => {
  //   function handleStorage() {

  //     if (theme) {
  //       setTheme(theme);
  //     }
  //   }

  //   window.addEventListener("storage", handleStorage);

  //   return () => {
  //     window.removeEventListener("storage", handleStorage);
  //   };
  // }, [currentTheme]);

  useEffect(() => {
    const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const systemTheme = darkThemeQuery.matches ? "dark" : "light";

    function handleStorage() {
      if (currentTheme === "system") {
        setTheme(systemTheme);
        darkThemeQuery.addEventListener("change", handleStorage);
      }
    }

    return () => {
      darkThemeQuery.removeEventListener("change", handleStorage);
    };
  }, [currentTheme]);

  function toggleThemeMenu() {
    setIsOpen(!isOpen);
    themeMenuRef.current.focus();
  }

  function switchTheme(event: MouseEvent) {
    const theme: Theme = event.target.closest("button").dataset.themeValue;

    switch (theme) {
      case "dark":
        localStorage.setItem("theme", theme);

        break;
      case "light":
        localStorage.setItem("theme", theme);
        break;
      case "system":
        localStorage.removeItem("theme");
        break;

      default:
        break;
    }
    if (theme !== currentTheme) {
      setCurrentTheme(theme);
      setTheme(theme);
    }

    setIsOpen(!isOpen);
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
    <div id="theme-switcher">
      <button
        className="relative inline-flex items-center gap-2 bg-primary text-white rounded p-3"
        id="theme-toggler"
        data-toggle="dropdown"
        type="button"
        aria-controls="theme-menu"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={toggleThemeMenu}
      >
        {Icon(themesIcons.get(currentTheme)!)}
        <span className="sr-only">{currentTheme}</span>

        <BsCaretDownFill
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <ul
        className={`absolute md:right-0 p-2 mt-2 border rounded bg-white dark:bg-dark ${
          !isOpen ? "hidden" : ""
        }`}
        aria-labelledby="theme-toggler"
        role="menu"
        ref={themeMenuRef}
      >
        {Array.from(themesIcons.entries()).map(([theme]) => {
          return (
            <li key={theme} role="presentation">
              <button
                className={`inline-flex items-center gap-2 w-full py-1 px-2 rounded hover:bg-primary hover:text-white ${
                  currentTheme === theme ? "bg-primary text-white" : ""
                }`}
                data-theme-value={theme}
                type="button"
                role="menuitem"
                onClick={switchTheme}
              >
                {Icon(themesIcons.get(theme)!)}
                <span className="capitalize">{theme}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
