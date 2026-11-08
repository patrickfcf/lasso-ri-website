import { readFile } from 'node:fs/promises';
const { tokens } = JSON.parse(
  await readFile(new URL('../src/design/tokens.json', import.meta.url), 'utf8'),
);
// Editorial assets only. Requires Chromium installed with Playwright.
import { chromium } from '@playwright/test';
const browser = await chromium.launch();
try {
  const p = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  for (const [locale, title, description] of [
    [
      'pt',
      'A empresa além<br>da cotação.',
      'Inteligência de Relações com Investidores',
    ],
    [
      'en',
      'The company beyond<br>the stock price.',
      'Investor relations intelligence',
    ],
  ]) {
    await p.setContent(
      `<html><style>*{box-sizing:border-box}body{margin:0;background:${tokens.backgroundPrimary.dark};color:${tokens.textPrimary.dark};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;padding:60px 72px}.brand{font-size:32px;font-weight:600;letter-spacing:-1.4px}.brand span{color:${tokens.textPrimary.dark};font-weight:400}p{font-size:18px;color:${tokens.textSecondary.dark};margin:42px 0 24px}h1{font-size:78px;line-height:1.05;letter-spacing:-4px;margin:0;font-weight:650}.line{height:1px;background:${tokens.borderSubtle.dark};margin-top:48px}.bottom{display:flex;justify-content:space-between;font-size:15px;color:${tokens.textSecondary.dark};margin-top:24px}.ring{position:absolute;width:450px;height:450px;border:1px solid ${tokens.borderSubtle.dark};border-radius:50%;right:-190px;top:100px}.ring.two{width:600px;height:600px;right:-265px;top:25px}</style><body><div class='brand'>Lasso <span>RI</span></div><p>${description}</p><h1>${title}</h1><div class='line'></div><div class='bottom'><span>Apple Apps / Core & API / MCP / Intelligence / Web</span><span>lassori.app</span></div><div class='ring'></div><div class='ring two'></div></body></html>`,
    );
    await p.screenshot({ path: `public/assets/og-${locale}.png` });
  }
} finally {
  await browser.close();
}
