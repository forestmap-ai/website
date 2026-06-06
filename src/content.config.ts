import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    sector: z.string(),
    scale: z.string(),
    client: z.string(),
    pillars: z.array(z.string()).default([]),
    summary: z.string(),
    image: z.string().optional(),
    order: z.number().default(99),
    quote: z
      .object({
        text: z.string(),
        name: z.string(),
        role: z.string(),
      })
      .optional(),
  }),
});

export const collections = { caseStudies };
