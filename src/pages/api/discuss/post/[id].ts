import type { APIRoute } from 'astro';
import { deletePost, updatePost } from '../../../../lib/db';

export const DELETE: APIRoute = async ({ params, locals }) => {
  const auth = locals.auth();
  if (!auth.userId) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

  const id = parseInt(params.id!);
  if (isNaN(id)) return new Response(JSON.stringify({ error: 'Invalid id' }), { status: 400 });

  const row = await deletePost(id, auth.userId);
  if (!row) return new Response(JSON.stringify({ error: 'Not found or not your reply' }), { status: 404 });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};

export const PUT: APIRoute = async ({ params, locals, request }) => {
  const auth = locals.auth();
  if (!auth.userId) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

  const id = parseInt(params.id!);
  if (isNaN(id)) return new Response(JSON.stringify({ error: 'Invalid id' }), { status: 400 });

  const { body } = await request.json();
  if (!body?.trim())
    return new Response(JSON.stringify({ error: 'Body required' }), { status: 400 });

  const row = await updatePost(id, auth.userId, body.trim());
  if (!row) return new Response(JSON.stringify({ error: 'Not found or not your reply' }), { status: 404 });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
