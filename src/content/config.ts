/**
 * Content Collections Configuration
 * Defines schemas for blog posts and other content
 */

import { defineCollection, z } from "astro:content";

/**
 * Blog Collection
 * Markdown blog posts with frontmatter metadata
 */
const blog = defineCollection({
  schema: z.object({
    // Required fields
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),

    // Internationalization
    locale: z.enum(["en", "zh"]).default("en"),

    // Optional fields
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),

    // Author information
    author: z.string().default("Torcheye Games"),

    // Cross-posting links
    crosspost: z
      .array(
        z.object({
          platform: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),

    // SEO metadata
    metaDescription: z.string().optional(),
    metaKeywords: z.array(z.string()).optional(),

    // Update tracking
    updatedDate: z.coerce.date().optional(),
  }),
});

// Export collections
export const collections = {
  blog,
};
