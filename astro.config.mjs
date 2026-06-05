// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';
import clerk from '@clerk/astro';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://privacyindex.xyz',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    sitemap(),
    clerk(),
    sentry({
      sourceMapsUploadOptions: {
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
