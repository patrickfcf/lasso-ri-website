import { readFile, readdir, access } from 'node:fs/promises';
import { dirname, resolve, relative, extname } from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const ignored = new Set([
  'node_modules',
  '.git',
  'dist',
  '.astro',
  '.wrangler',
  'test-results',
  'playwright-report',
]);
async function filesAt(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const lists = await Promise.all(
    entries
      .filter((e) => !ignored.has(e.name))
      .map((entry) => {
        const path = resolve(directory, entry.name);
        return entry.isDirectory() ? filesAt(path) : [path];
      }),
  );
  return lists.flat();
}
for (const required of [
  'README.md',
  'AGENTS.md',
  'CONTRIBUTING.md',
  'SECURITY.md',
  'LICENSE',
  'CHANGELOG.md',
  'docs/README.md',
  '.env.example',
  '.github/workflows/ci.yml',
])
  await access(resolve(root, required));
const files = await filesAt(root);
for (const file of files) {
  if (
    !['.md', '.ts', '.mjs', '.astro', '.css', '.json', '.yml'].includes(
      extname(file),
    )
  )
    continue;
  const content = await readFile(file, 'utf8');
  if (extname(file) === '.md') {
    for (const [, target] of content.matchAll(/\[[^\]]*\]\(([^\s)]+)\)/g)) {
      if (/^(?:[a-z]+:|#)/i.test(target)) continue;
      await access(
        resolve(dirname(file), decodeURIComponent(target.split('#')[0])),
      );
    }
  }
  const name = relative(root, file);
  if (name.startsWith('src/') || name.startsWith('public/'))
    assert.doesNotMatch(
      content,
      /luneta|helloluneta/i,
      `Foreign product content: ${name}`,
    );
}
console.log(
  `Repository structure, local documentation links and product isolation verified (${files.length} files).`,
);
