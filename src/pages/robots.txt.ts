import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const index = import.meta.env.INDEX_SITE === 'true';
  return new Response(
    `User-agent: *\n${index ? 'Allow: /' : 'Disallow: /'}\n${site && index ? `Sitemap: ${new URL('sitemap-index.xml', site)}\n` : ''}`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
