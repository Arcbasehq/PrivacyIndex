import type { APIRoute } from 'astro';
import { createThread, initSchema } from '../../../lib/db';

export const POST: APIRoute = async ({ request, locals }) => {
  const auth = locals.auth();
  if (!auth.userId) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const user = await locals.currentUser();
  const { title, body, category } = await request.json();

  if (!title?.trim() || !body?.trim()) {
    return new Response(JSON.stringify({ error: 'Title and body required' }), { status: 400 });
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 80)
    + '-' + Date.now().toString(36);

  await initSchema();

  const thread = await createThread({
    slug,
    title: title.trim(),
    body: body.trim(),
    category: category ?? 'general',
    authorId: auth.userId,
    authorName: user?.firstName
      ? `${user.firstName}${user.lastName ? ' ' + user.lastName : ''}`
      : user?.emailAddresses?.[0]?.emailAddress ?? 'Anonymous',
    authorAvatar: user?.imageUrl ?? undefined,
  });

  return new Response(JSON.stringify({ slug: thread.slug }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
};
