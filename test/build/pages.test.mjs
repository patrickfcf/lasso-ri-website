import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { load } from 'cheerio';
import { locales, pageKeys, pagePath } from '../../src/lib/site.mjs';

const root = new URL('../../dist/', import.meta.url);
const documentAt = async (route) =>
  load(
    await readFile(
      new URL(`${route.replace(/^\//, '')}index.html`, root),
      'utf8',
    ),
  );
for (const locale of locales) {
  for (const page of pageKeys) {
    const route = pagePath(locale, page);
    test(`${route}: metadata, translations, links and local assets`, async () => {
      const $ = await documentAt(route);
      assert.equal($('html').attr('lang'), locale);
      assert.equal($('h1').length, 1);
      assert.equal($('main').length, 1);
      assert.match($('title').text(), /Lasso RI/);
      assert.ok($('meta[name="description"]').attr('content')?.length > 20);
      const canonical = $('link[rel="canonical"]').attr('href');
      const origin = new URL(canonical).origin;
      assert.equal(new URL(canonical).pathname, route);
      for (const alternate of locales)
        assert.equal(
          $(`link[hreflang="${alternate}"]`).attr('href'),
          origin + pagePath(alternate, page),
        );
      assert.equal(
        $('link[hreflang="x-default"]').attr('href'),
        origin + pagePath('pt-BR', page),
      );
      assert.equal(
        $('a[data-language]').attr('href'),
        pagePath(locale === 'en' ? 'pt-BR' : 'en', page),
      );
      assert.equal($('form, iframe, script:not([src])').length, 0);
      assert.doesNotMatch($('body').text(), /luneta|helloluneta/i);
      for (const element of $(
        'a[href], img[src], script[src], link[href], source[srcset]',
      ).toArray()) {
        const value =
          $(element).attr('href') ??
          $(element).attr('src') ??
          $(element).attr('srcset');
        if (!value || value.startsWith('mailto:')) continue;
        const url = new URL(value, origin + route);
        if (url.origin !== origin) continue;
        const path = url.pathname;
        await access(
          new URL(
            path.slice(1) + (path.endsWith('/') ? 'index.html' : ''),
            root,
          ),
        );
        if (url.hash) {
          const target = path.endsWith('/') ? await documentAt(path) : null;
          if (target)
            assert.equal(
              target(`[id="${decodeURIComponent(url.hash.slice(1))}"]`).length,
              1,
              value,
            );
        }
      }
    });
  }
}

test('robots matches HTML indexing state; sitemap includes all canonical pages and excludes 404', async () => {
  const $ = await documentAt('/');
  const index = $('meta[name="robots"]').attr('content') === 'index, follow';
  const robots = await readFile(new URL('robots.txt', root), 'utf8');
  assert.ok(robots.includes(index ? 'Allow: /' : 'Disallow: /'));
  const sitemap = await readFile(new URL('sitemap-0.xml', root), 'utf8');
  const origin = new URL($('link[rel="canonical"]').attr('href')).origin;
  for (const locale of locales)
    for (const key of pageKeys)
      assert.ok(
        sitemap.includes(`<loc>${origin}${pagePath(locale, key)}</loc>`),
      );
  assert.doesNotMatch(sitemap, /404/);
  const error = load(await readFile(new URL('404.html', root), 'utf8'));
  assert.equal(
    error('meta[name="robots"]').attr('content'),
    'noindex, nofollow',
  );
  assert.equal(error('link[rel="canonical"]').length, 0);
});
