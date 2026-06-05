import type { APIRoute } from 'astro';
import { deleteThread, updateThread } from '../../../../lib/db';

export const DELETE: APIRoute = async ({ params, locals }) => {
  const auth = locals.auth();
  if (!auth.userId) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

  const id = parseInt(params.id!);
  if (isNaN(id)) return new Response(JSON.stringify({ error: 'Invalid id' }), { status: 400 });

  const row = await deleteThread(id, auth.userId);
  if (!row) return new Response(JSON.stringify({ error: 'Not found or not your thread' }), { status: 404 });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};

export const PUT: APIRoute = async ({ params, locals, request }) => {
  const auth = locals.auth();
  if (!auth.userId) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

  const id = parseInt(params.id!);
  if (isNaN(id)) return new Response(JSON.stringify({ error: 'Invalid id' }), { status: 400 });

  const { title, body } = await request.json();
  if (!title?.trim() || !body?.trim())
    return new Response(JSON.stringify({ error: 'Title and body required' }), { status: 400 });

  const row = await updateThread(id, auth.userId, title.trim(), body.trim());
  if (!row) return new Response(JSON.stringify({ error: 'Not found or not your thread' }), { status: 404 });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
