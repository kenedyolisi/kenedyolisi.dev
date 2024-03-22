interface Service {
  title: string;
  description: string;
  image: { src: string; alt: string };
}

export default [
  {
    title: "HTML Development",
    description: "Define the meaning and structure of the web content.",
    image: { src: "src/images/html_logo.svg", alt: "html logo" },
  },
  {
    title: "CSS Development",
    description:
      "Describe the presentation of the web content to provide aesthetically pleasing user-interfaces.",
    image: { src: "src/images/css_logo.svg", alt: "css logo" },
  },
  {
    title: "JavaScript Development",
    description: "Add interactivity to the web content.",
    image: {
      src: "src/images/javascript_logo.svg",
      alt: "javascript logo",
    },
  },
  {
    title: "Svelte Development",
    description:
      "Build dynamic, efficient and fast web applications with the Svelte framework.",
    image: { src: "src/images/svelte_logo.svg", alt: "svelte logo" },
  },
  {
    title: "Bootstrap Integration",
    description:
      "Implementing responsive and modern design principles using the Bootstrap framework.",
    image: { src: "src/images/bootstrap_logo.svg", alt: "bootstrap logo" },
  },
  {
    title: "Tailwind Integration",
    description:
      "Rapidly build modern websites using utility-first CSS framework without leaving HTML.",
    image: {
      src: "src/images/tailwindcss_mark.svg",
      alt: "tailwindcss logo",
    },
  },
] satisfies Service[];
