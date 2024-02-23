import technologies from "@data/technologies.json";

interface Project {
  title: string;
  techs: (keyof typeof technologies)[];
  url: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "kenedyolisi landing page",
    techs: ["astro", "tailwindcss"],
    url: "https://kenedyolisi.vercel.app",
    image: "src/images/kenedyolisi_landing_page.png",
  },
  {
    title: "nextjs dashboard",
    techs: ["nextjs", "react"],
    image: "src/images/nextjs_dashboard.png",
    url: "https://kenedyolisi-nextjs-dashboard.vercel.app",
  },
  {
    image: "src/images/random_quote_machine.png",
    techs: ["react", "tailwindcss"],
    title: "random quote machine",
    url: "https://kenedyolisi.gihub.io/random-quote-machine",
  },
];

export default projects;
