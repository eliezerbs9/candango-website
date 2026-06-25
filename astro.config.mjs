// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static marketing site. See ../06 - Delivery/Website Design System.md (in the docs vault).
export default defineConfig({
  site: 'https://candango.example', // TODO: set to the real domain before launch
  integrations: [tailwind()],
});
