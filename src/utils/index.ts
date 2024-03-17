export const isBrowser = typeof window !== "undefined";

export function capitalizeStr(str: string) {
  return str
    .split(" ")
    .map((subStr) => subStr.slice(0, 1).toUpperCase() + subStr.slice(1))
    .join(" ");
}

export function clickOutside(node) {
  const handleClick = (event) => {
    if (!node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent("outclick"));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
