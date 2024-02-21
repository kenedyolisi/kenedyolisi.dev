import { defineCollection, reference, z } from "astro:content";

// Define your projects collection
const projects = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      image: image(),
      title: z.string(),
      url: z.string(),
      techStack: z.array(reference("technologies")),
    }),
});

const technologies = defineCollection({
  type: "data",
  schema: z.object({ brandColor: z.string() }),
});

export const collections = {
  projects,
  technologies,
};
