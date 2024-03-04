import type { TechKey } from "src/env";

interface Project {
  id: string;
  title: string;
  techs: TechKey[];
  url: string;
  image: string;
}

export default [
  {
    id: "d652a935-3caf-5015-9e62-628dab47c87c",
    title: "kenedyolisi landing page",
    techs: ["astro", "tailwindcss"],
    url: "https://kenedyolisi.vercel.app",
    image: "/src/images/kenedyolisi_landing_page.png",
  },
  {
    id: "5f2bf98c-3af2-574c-a7aa-3882e7144fd2",
    image: "/src/images/random_quote_machine.png",
    techs: ["react", "tailwindcss"],
    title: "random quote machine",
    url: "https://kenedyolisi.gihub.io/random-quote-machine",
  },
] satisfies Project[];
