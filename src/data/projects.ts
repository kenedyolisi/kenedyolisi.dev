export interface Project {
  title: string;
  categories: string[];
  techs: string[];
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
    image: "/src/images/random_quote_generator.png",
    categories: [],
    techs: ["svelte", "tailwindcss"],
    title: "random quote generator",
    url: "https://kenedyolisi.gihub.io/random-quote-generator",
  },
] satisfies Project[];
