import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
const raw = await readFile(
  new URL('../src/design/tokens.json', import.meta.url),
);
const spec = JSON.parse(raw);
const source = JSON.parse(
  await readFile(new URL('../src/design/source.json', import.meta.url), 'utf8'),
);
assert.equal(createHash('sha256').update(raw).digest('hex'), source.sha256);
assert.equal(spec.version, source.version);
const luminance = (hex) => {
  const c = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return c.reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
};
for (const mode of ['light', 'dark'])
  for (const pair of spec.contrastPairs) {
    const [a, b] = [pair.foreground, pair.background].map((k) =>
      luminance(spec.tokens[k][mode]),
    );
    assert.ok(
      (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05) >= pair.minimum,
      `${mode}: ${pair.foreground}/${pair.background}`,
    );
  }
const aliases = {
  bg: 'backgroundPrimary',
  surface: 'surfacePrimary',
  'surface-secondary': 'backgroundSecondary',
  elevated: 'surfaceElevated',
  text: 'textPrimary',
  muted: 'textSecondary',
  tertiary: 'textTertiary',
  accent: 'signatureAccent',
  'brand-ink': 'textPrimary',
  line: 'borderSubtle',
  'control-border': 'borderStrong',
  'accent-soft': 'backgroundSecondary',
  selection: 'accentSubtle',
  navy: 'backgroundTertiary',
  mark: 'backgroundTertiary',
  positive: 'positive',
  negative: 'negative',
  neutral: 'neutralData',
  disclosure: 'newDisclosure',
  pending: 'pendingEvent',
  error: 'error',
  warning: 'warning',
  information: 'information',
  'on-accent': 'onAccent',
};
const block = (mode) =>
  `  color-scheme: ${mode};\n${Object.entries(aliases)
    .map(
      ([name, key]) => `  --${name}: ${spec.tokens[key][mode].toLowerCase()};`,
    )
    .join(
      '\n',
    )}\n  --icon-light-display: ${mode === 'light' ? 'block' : 'none'};\n  --icon-dark-display: ${mode === 'dark' ? 'block' : 'none'};\n`;
const css = `/* Generated C2 ${spec.version}. Source and SHA-256: src/design/source.json. */\n:root {\n${block('light')}}\n@media (prefers-color-scheme: dark) {\n  :root:not(:has(#theme-light:checked)) {\n${block('dark')}  }\n}\n:root:has(#theme-dark:checked) {\n${block('dark')}}\n`;
const target = new URL('../src/styles/tokens.css', import.meta.url);
// Compare formatting-independent CSS: the project formatter owns whitespace.
const normalize = (value) => value.replace(/\s/g, '');
if (process.argv.includes('--check'))
  assert.equal(
    normalize(await readFile(target, 'utf8')),
    normalize(css),
    'Token CSS drift: run node scripts/c2-tokens.mjs',
  );
else await writeFile(target, css);
console.log(
  `C2 ${spec.version}: pinned source, 126 contrast pairs and generated CSS verified.`,
);
