import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import { resolveSiteUrl } from './src/lib/site.mjs';

const site = resolveSiteUrl(
  process.env.SITE_URL ??
    loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '').SITE_URL ??
    'https://lassori.app',
);
export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: site
    ? [sitemap({ filter: (page) => !page.endsWith('/404/') })]
    : [],
  vite: { build: { assetsInlineLimit: 0 } },
});
