import type { APIRoute } from 'astro';
import { createPost, getThread, initSchema } from '../../../lib/db';

export const POST: APIRoute = async ({ request, locals }) => {
  const auth = locals.auth();
  if (!auth.userId) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const user = await locals.currentUser();
  const { threadSlug, body } = await request.json();

  if (!body?.trim()) {
    return new Response(JSON.stringify({ error: 'Body required' }), { status: 400 });
  }

  await initSchema();
  const thread = await getThread(threadSlug);
  if (!thread) {
    return new Response(JSON.stringify({ error: 'Thread not found' }), { status: 404 });
  }

  await createPost({
    threadId: thread.id,
    body: body.trim(),
    authorId: auth.userId,
    authorName: user?.firstName
      ? `${user.firstName}${user.lastName ? ' ' + user.lastName : ''}`
      : user?.emailAddresses?.[0]?.emailAddress ?? 'Anonymous',
    authorAvatar: user?.imageUrl ?? undefined,
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
};
