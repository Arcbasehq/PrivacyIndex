import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const tools = await getCollection('tools');

  const index = tools.map((t) => ({
    slug: t.data.slug,
    name: t.data.name,
    category: t.data.category,
    description: t.data.description,
    tags: t.data.tags,
    pricing: t.data.pricing.model,
    scores: t.data.scores,
  }));

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
