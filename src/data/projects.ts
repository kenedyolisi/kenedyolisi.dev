interface Project {
  title: string;
  technologies: string[];
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "kenedyolisi landing page",
    technologies: ["astro", "tailwind"],
    url: "https://kenedyolisi.vercel.app",
    image: "src/images/kenedyolisi_landing_page.png",
  },
  {
    title: "nextjs dashboard",
    technologies: ["nextjs", "react"],
    image: "src/images/nextjs_dashboard.png",
    url: "https://kenedyolisi-nextjs-dashboard.vercel.app",
  },
  {
    image: "src/images/random_quote_machine.png",
    technologies: ["react", "tailwindcss"],
    title: "random quote machine",
    url: "https://kenedyolisi.gihub.io/random-quote-machine",
  },
];
