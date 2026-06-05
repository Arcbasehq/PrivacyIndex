import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/tools' }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    category: z.enum([
      'vpn',
      'browser',
      'email',
      'messaging',
      'dns',
      'os',
      'search',
    ]),
    website: z.string().url(),
    pricing: z.object({
      model: z.enum(['free', 'paid', 'freemium', 'open-source']),
      details: z.string(),
    }),
    attributes: z.object({
      openSource: z.boolean(),
      auditedThirdParty: z.boolean(),
      noLogsPolicy: z.boolean(),
      anonymousSignup: z.boolean(),
      e2eEncrypted: z.boolean(),
      selfHostable: z.boolean(),
      mobileSupport: z.boolean(),
      desktopSupport: z.boolean(),
    }),
    scores: z.object({
      privacy: z.number().min(0).max(10),
      security: z.number().min(0).max(10),
      usability: z.number().min(0).max(10),
    }),
    tags: z.array(z.string()),
    lastReviewed: z.string(),
    description: z.string(),
    rationale: z.string(),
  }),
});

export const collections = { tools };
