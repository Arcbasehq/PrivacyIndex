import { neon } from '@neondatabase/serverless';

if (!import.meta.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env var not set');
}

export const sql = neon(import.meta.env.DATABASE_URL);

export async function initSchema() {
  await sql`
    CREATE TABLE IF NOT EXISTS discuss_threads (
      id        SERIAL PRIMARY KEY,
      slug      TEXT UNIQUE NOT NULL,
      title     TEXT NOT NULL,
      body      TEXT NOT NULL,
      category  TEXT NOT NULL DEFAULT 'general',
      author_id   TEXT NOT NULL,
      author_name TEXT NOT NULL,
      author_avatar TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      reply_count INTEGER DEFAULT 0,
      pinned BOOLEAN DEFAULT FALSE
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS discuss_posts (
      id        SERIAL PRIMARY KEY,
      thread_id INTEGER NOT NULL REFERENCES discuss_threads(id) ON DELETE CASCADE,
      body      TEXT NOT NULL,
      author_id   TEXT NOT NULL,
      author_name TEXT NOT NULL,
      author_avatar TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export async function getThreads() {
  return sql`
    SELECT * FROM discuss_threads
    ORDER BY pinned DESC, created_at DESC
    LIMIT 100
  `;
}

export async function getThread(slug: string) {
  const rows = await sql`
    SELECT * FROM discuss_threads WHERE slug = ${slug}
  `;
  return rows[0] ?? null;
}

export async function getPosts(threadId: number) {
  return sql`
    SELECT * FROM discuss_posts
    WHERE thread_id = ${threadId}
    ORDER BY created_at ASC
  `;
}

export async function createThread({
  slug, title, body, category, authorId, authorName, authorAvatar,
}: {
  slug: string; title: string; body: string; category: string;
  authorId: string; authorName: string; authorAvatar?: string;
}) {
  const rows = await sql`
    INSERT INTO discuss_threads (slug, title, body, category, author_id, author_name, author_avatar)
    VALUES (${slug}, ${title}, ${body}, ${category}, ${authorId}, ${authorName}, ${authorAvatar ?? null})
    RETURNING *
  `;
  return rows[0];
}

export async function deleteThread(id: number, authorId: string) {
  const rows = await sql`
    DELETE FROM discuss_threads WHERE id = ${id} AND author_id = ${authorId} RETURNING id
  `;
  return rows[0] ?? null;
}

export async function deletePost(id: number, authorId: string) {
  const rows = await sql`
    DELETE FROM discuss_posts WHERE id = ${id} AND author_id = ${authorId} RETURNING thread_id
  `;
  if (rows[0]) {
    await sql`UPDATE discuss_threads SET reply_count = reply_count - 1 WHERE id = ${rows[0].thread_id} AND reply_count > 0`;
  }
  return rows[0] ?? null;
}

export async function updateThread(id: number, authorId: string, title: string, body: string) {
  const rows = await sql`
    UPDATE discuss_threads SET title = ${title}, body = ${body}
    WHERE id = ${id} AND author_id = ${authorId}
    RETURNING *
  `;
  return rows[0] ?? null;
}

export async function updatePost(id: number, authorId: string, body: string) {
  const rows = await sql`
    UPDATE discuss_posts SET body = ${body}
    WHERE id = ${id} AND author_id = ${authorId}
    RETURNING *
  `;
  return rows[0] ?? null;
}

export async function getPost(id: number) {
  const rows = await sql`SELECT * FROM discuss_posts WHERE id = ${id}`;
  return rows[0] ?? null;
}

export async function createPost({
  threadId, body, authorId, authorName, authorAvatar,
}: {
  threadId: number; body: string;
  authorId: string; authorName: string; authorAvatar?: string;
}) {
  const rows = await sql`
    INSERT INTO discuss_posts (thread_id, body, author_id, author_name, author_avatar)
    VALUES (${threadId}, ${body}, ${authorId}, ${authorName}, ${authorAvatar ?? null})
    RETURNING *
  `;
  await sql`
    UPDATE discuss_threads SET reply_count = reply_count + 1 WHERE id = ${threadId}
  `;
  return rows[0];
}
