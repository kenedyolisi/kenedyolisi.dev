import technologies from "@data/technologies.json";

interface Project {
  id: string;
  title: string;
  techs: (keyof typeof technologies)[];
  url: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "d652a935-3caf-5015-9e62-628dab47c87c",
    title: "kenedyolisi landing page",
    techs: ["astro", "tailwindcss"],
    url: "https://kenedyolisi.vercel.app",
    image: "/src/images/kenedyolisi_landing_page.png",
  },
  {
    id: "ba246edd-fe23-5886-a885-985914ed3790",
    title: "nextjs dashboard",
    techs: ["nextjs", "react"],
    image: "/src/images/nextjs_dashboard.png",
    url: "https://kenedyolisi-nextjs-dashboard.vercel.app",
  },
  {
    id: "5f2bf98c-3af2-574c-a7aa-3882e7144fd2",
    image: "/src/images/random_quote_machine.png",
    techs: ["react", "tailwindcss"],
    title: "random quote machine",
    url: "https://kenedyolisi.gihub.io/random-quote-machine",
  },
];

export default projects;
