import technologies from "@data/technologies.json";

export interface Project {
  title: string;
  techs: Array<keyof typeof technologies>;
  categories: string[];
  url?: string;
  image: string;
}

export default [
  {
    title: "my portfolio",
    categories: ["portfolio"],
    techs: ["astro", "tailwindcss", "svelte"],
    url: "https://kenedyolisi.vercel.app",
    image: "/src/images/kenedyolisi_landing_page.png",
  },
  {
    image: "/src/images/random_quote_machine.png",
    categories: [],
    techs: ["react", "tailwindcss"],
    title: "random quote generator",
    url: "https://kenedyolisi.gihub.io/random-quote-generator",
  },
] satisfies Project[];
