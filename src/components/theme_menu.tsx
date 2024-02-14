import { useState } from "react";

type Theme = "system" | "dark" | "light";

const themesIcons: Array<[Theme, string]> = [
  ["system", "circle-half"],
  ["dark", "moon-fill"],
  ["light", "sun-fill"],
];

export default function ThemeMenu() {
  const [currentTheme, setCurrentTheme] = useState("system");
  const [isOpen, setIsOpen] = useState(false);

  useState(() => {
    window.addEventListener("storage", setTheme());

    return () => {
      window.removeEventListener("storage", setTheme());
    };
  });

  useState(() => {
    const darkThemeQuery = window.matchMedia("(prefer-color-scheme: dark)");

    darkThemeQuery.addEventListener("change", setTheme());
    return () => {
      darkThemeQuery.removeEventListener("change", setTheme());
    };
  });

  function handleClick() {}

  function toggleThemeMenu() {}

  return (
    <div id="theme-switcher">
      <button
        className="relative inline-flex items-center gap-2 bg-primary text-white rounded p-3"
        id="theme-toggler"
        data-toggle="dropdown"
        type="button"
        aria-controls="theme-menu"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {/* <Icon name="circle_half" /> */}
        <span className="md:hidden">{currentTheme}</span>
        {/* <Icon
          className="transition-transform duration-300"
          name="caret_down_fill"
        /> */}
      </button>
      <ul
        className="absolute md:right-0 hidden p-2 mt-2 border rounded bg-white dark:bg-dark"
        id="theme-menu"
        aria-labelledby="theme-toggler"
        role="menu"
      >
        {themesIcons.map(([theme, icon]) => {
          return (
            <li role="presentation">
              <button
                className="inline-flex items-center gap-2 w-full py-1 px-2 rounded hover:bg-primary hover:text-white "
                data-theme-value={name}
                type="button"
                role="menuitem"
              >
                <Icon name={icon} />
                <span className="capitalize">{theme}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
