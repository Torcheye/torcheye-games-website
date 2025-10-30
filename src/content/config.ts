/**
 * Content Collections Configuration
 * Defines schemas for blog posts and other content
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog Collection
 * Markdown blog posts with frontmatter metadata
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // Required fields
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),

    // Optional fields
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),

    // Author information
    author: z.string().default('Torcheye Games'),

    // Cross-posting links
    crosspost: z.array(
      z.object({
        platform: z.string(),
        url: z.string().url()
      })
    ).optional(),

    // SEO metadata
    metaDescription: z.string().optional(),
    metaKeywords: z.array(z.string()).optional(),

    // Update tracking
    updatedDate: z.coerce.date().optional()
  })
});

// Export collections
export const collections = {
  blog
};
