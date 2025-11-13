import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    author: z.string().default("Torcheye Games"),
    metaDescription: z.string().optional(),
    metaKeywords: z.array(z.string()).optional(),
    updatedDate: z.coerce.date().optional(),
    crosspost: z
      .array(
        z.object({
          platform: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    repoURL: z.string().optional(),
    demoURL: z.string().optional(),
    steamURL: z.string().optional(),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
