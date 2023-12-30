import { defineCollection, z } from "astro:content";

// Define your projects collection
const projectsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      cover: image(),
      description: z.string(),
      url: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
