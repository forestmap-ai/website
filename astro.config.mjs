// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Site/base are env-driven so the same build works locally (root) and on a
// GitHub Pages project path (e.g. /Work-Hub). The deploy workflow sets these.
const SITE = process.env.SITE_URL || 'https://forestmap-ai.github.io';
const BASE = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [tailwind(), mdx(), sitemap()],
});
