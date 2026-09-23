import test from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveSiteUrl,
  pagePath,
  locales,
  pageKeys,
} from '../src/lib/site.mjs';

test('production origin must not contain credentials, paths or unsafe protocols', () => {
  assert.equal(resolveSiteUrl(' https://lassori.app/ '), 'https://lassori.app');
  assert.equal(resolveSiteUrl(''), undefined);
  for (const value of [
    'http://lassori.app',
    'https://name:secret@lassori.app',
    'https://lassori.app/other',
    'https://lassori.app/?token=a',
    'https://lassori.app/#fragment',
    'https://localhost',
    'https://lassori.app:4321',
    'not a url',
  ]) {
    assert.throws(() => resolveSiteUrl(value));
  }
});

test('each public page has distinct locale routes with trailing slashes', () => {
  const routes = locales.flatMap((locale) =>
    pageKeys.map((page) => pagePath(locale, page)),
  );
  assert.equal(new Set(routes).size, 14);
  assert.equal(pagePath('pt-BR'), '/');
  assert.equal(pagePath('en', 'privacy'), '/en/privacy/');
  for (const route of routes) assert.ok(route.endsWith('/'));
  assert.throws(() => pagePath('fr'));
  assert.throws(() => pagePath('en', 'unknown'));
});
