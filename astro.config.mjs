import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL;

export default defineConfig({
  // Set SITE_URL in your hosting environment for production canonical/sitemap URLs.
  site,
  integrations: site ? [react(), sitemap()] : [react()],
});
