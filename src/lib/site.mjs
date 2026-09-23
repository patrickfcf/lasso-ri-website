/** Only an explicitly configured production origin may enter public metadata. */
export function resolveSiteUrl(value) {
  if (!value?.trim()) return undefined;
  const url = new URL(value.trim());
  if (
    url.protocol !== 'https:' ||
    url.username ||
    url.password ||
    url.pathname !== '/' ||
    url.search ||
    url.hash ||
    url.port ||
    url.hostname === 'localhost' ||
    url.hostname.endsWith('.localhost')
  )
    throw new Error(
      'SITE_URL must be an HTTPS origin without credentials, a port, path, query or fragment.',
    );
  return url.origin;
}

export const locales = ['pt-BR', 'en'];
export const pageKeys = [
  'home',
  'support',
  'privacy',
  'terms',
  'accessibility',
  'roadmap',
  'how-we-build',
];

export function pagePath(locale, page = 'home') {
  if (!locales.includes(locale) || !pageKeys.includes(page))
    throw new Error('Unknown locale or page');
  const prefix = locale === 'en' ? '/en/' : '/';
  return page === 'home' ? prefix : `${prefix}${page}/`;
}
