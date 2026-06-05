#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'public', 'logos');
const toolsDir = join(root, 'src', 'content', 'tools');

import { readdirSync } from 'fs';

const tools = readdirSync(toolsDir)
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(toolsDir, f), 'utf8')));

async function fetchLogo(slug, domain) {
  const dest = join(outDir, `${slug}.png`);
  if (existsSync(dest)) {
    console.log(`  skip  ${slug} (cached)`);
    return true;
  }

  const url = `https://logo.clearbit.com/${domain}`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; privacyindex-build/1.0)',
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    writeFileSync(dest, Buffer.from(buf));
    console.log(`  ok    ${slug} (${domain})`);
    return true;
  } catch (err) {
    console.log(`  miss  ${slug} (${domain}) — ${err.message}`);
    return false;
  }
}

console.log(`\nFetching logos for ${tools.length} tools…\n`);

for (const tool of tools) {
  const domain = tool.website.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  await fetchLogo(tool.slug, domain);
  // small delay to be polite
  await new Promise((r) => setTimeout(r, 120));
}

console.log('\nDone.\n');
