import { defineCollection, z } from "astro:content";

// Define your projects collection
const projects = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      image: image(),
      title: z.string(),
      url: z.string(),
      technologies: z.array(z.string()),
    }),
});

export const collections = {
  projects,
};
