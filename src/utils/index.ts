export const isBrowser = typeof window !== "undefined";

/**
 * Converts first letter of every word in a string to uppercase.
 *
 */
export function capitalizeStr(str: string) {
  return str
    .split(" ")
    .map((subStr) => subStr.slice(0, 1).toUpperCase() + subStr.slice(1))
    .join(" ");
}

export function clickOut(node: Element) {
  const handleClick = (event: MouseEvent) => {
    if (!node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent("clickout"));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}

export function slugify(str: string) {
  return str.toLowerCase().split(" ").join("-");
}
