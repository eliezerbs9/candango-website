// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static marketing site. See ../06 - Delivery/Website Design System.md (in the docs vault).
export default defineConfig({
  // Public site URL (override per env with the SITE env var if needed).
  site: process.env.SITE ?? 'https://candango.bsbtechub.com',
  integrations: [tailwind()],
});
