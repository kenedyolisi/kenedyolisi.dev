export const isBrowser = typeof window !== "undefined";

export function capitalizeStr(str: string) {
  return str
    .split(" ")
    .map((subStr) => subStr.slice(0, 1).toUpperCase() + subStr.slice(1))
    .join(" ");
}
