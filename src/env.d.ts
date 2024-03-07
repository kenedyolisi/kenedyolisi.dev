/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

export type IconKey = keyof typeof import("@data/icons.json");
export type TechKey = keyof typeof import("@data/technologies.json");
export type Theme = "dark" | "light" | "system";
