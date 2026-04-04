import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain; override with SITE_URL for previews/staging (e.g. Vercel preview URLs).
const site = process.env.SITE_URL || 'https://lilidavid.com';

export default defineConfig({
  site,
  integrations: [sitemap()],
  redirects: {
    '/how-i-help': '/working-together',
  },
});
