import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const path of ['/', '/en/', '/support/', '/en/privacy/']) {
  test(`${path} is accessible, responsive and free of browser errors`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    expect(response?.headers()['content-security-policy']).toContain(
      "script-src 'self'",
    );
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('img').first()).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
          .analyze()
      ).violations,
    ).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test('language navigation preserves the page, query and fragment', async ({
  page,
}) => {
  await page.goto('/?source=check#app');
  await page.getByRole('link', { name: 'English', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/\?source=check#app$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.goto('/privacy/?source=check');
  await page.getByRole('link', { name: 'English', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/privacy\/\?source=check$/);
});

test('FAQ and skip link work with the keyboard', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Ir para o conteúdo' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  const question = page.locator('.faq-list summary').first();
  await question.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.faq-list details').first()).toHaveAttribute(
    'open',
    '',
  );
  await page.keyboard.press('Enter');
  await expect(page.locator('.faq-list details').first()).not.toHaveAttribute(
    'open',
    '',
  );
});

test('navigation, reading and FAQ remain available without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:8787/');
  await page.locator('.faq-list summary').first().click();
  await expect(page.locator('.faq-list details').first()).toHaveAttribute(
    'open',
    '',
  );
  await page.getByRole('link', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await context.close();
});

test('missing pages return 404 and slash normalization preserves queries', async ({
  request,
}) => {
  const missing = await request.get('/does-not-exist/');
  expect(missing.status()).toBe(404);
  expect(await missing.text()).toContain('noindex, nofollow');
  const redirect = await request.get('/privacy?source=check', {
    maxRedirects: 0,
  });
  expect([301, 307, 308]).toContain(redirect.status());
  expect(redirect.headers().location).toContain('/privacy/?source=check');
});

for (const path of ['/', '/en/']) {
  test(`${path} theme choices, architecture and sample dates work without JavaScript`, async ({
    browser,
  }, testInfo) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 393, height: 852 },
      colorScheme: 'dark',
      reducedMotion: 'reduce',
    });
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:8787${path}`);
    await page.locator('.theme-picker summary').click();
    await page.locator('#theme-light').check();
    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      'rgb(243, 245, 248)',
    );
    await page.locator('#theme-dark').check();
    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      'rgb(16, 26, 41)',
    );
    await page.locator('#theme-system').check();
    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      'rgb(16, 26, 41)',
    );
    await page.emulateMedia({ colorScheme: 'light' });
    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      'rgb(243, 245, 248)',
    );
    await page.locator('.theme-picker summary').click();
    await page.locator('.mobile-menu summary').click();
    await expect(page.locator('.mobile-menu nav')).toBeVisible();
    await page.locator('.mobile-menu summary').click();
    await page.locator('.core-layer summary').click();
    await expect(page.locator('.core-layer')).toHaveAttribute('open', '');
    await expect(page.locator('.core-layer > p')).toBeVisible();
    await page.locator('.api-layer summary').click();
    await expect(page.locator('.api-layer > p')).toBeVisible();
    await page.locator('.payment-dates summary').click();
    await expect(page.locator('.payment-dates dl')).toBeVisible();
    await page.screenshot({
      path: testInfo.outputPath('no-js-expanded.png'),
      fullPage: true,
    });
    await context.close();
  });

  test(`${path} mobile menu supports keyboard, destination and Escape`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 393, height: 852 });
    await page.goto(path);
    const toggle = page.locator('.mobile-menu summary');
    await toggle.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('.mobile-menu nav')).toBeVisible();
    await page.keyboard.press('Tab');
    await expect(page.locator('.mobile-menu a').first()).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(page.locator('.mobile-menu')).not.toHaveAttribute('open', '');
    await expect(toggle).toBeFocused();
    await toggle.click();
    await page.locator('.mobile-menu a[href$="#platform"]').click();
    await expect(page).toHaveURL(new RegExp(`${path}#platform$`));
    await expect(page.locator('.mobile-menu')).not.toHaveAttribute('open', '');
    await expect(page.locator('#platform-title')).toBeInViewport();
  });

  test(`${path} reflows at 320, 768 and ultrawide with reduced motion`, async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(path);
    for (const width of [320, 393, 768, 1920, 2560]) {
      await page.setViewportSize({ width, height: 1000 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      await expect(page.locator('.hero-copy')).toHaveCSS(
        'animation-name',
        'none',
      );
    }
    await page.setViewportSize({ width: 320, height: 812 });
    await page.evaluate(() => {
      document.documentElement.style.fontSize = '200%';
    });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  });

  test(`${path} has stable layout, local-only resources and QA screenshots`, async ({
    page,
  }, testInfo) => {
    await page.addInitScript(() => {
      const state = window as Window & { qaShift?: number };
      state.qaShift = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const shift = entry as PerformanceEntry & {
            hadRecentInput: boolean;
            value: number;
          };
          if (!shift.hadRecentInput)
            state.qaShift = (state.qaShift ?? 0) + shift.value;
        }
      }).observe({ type: 'layout-shift', buffered: true });
    });
    await page.goto(path);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: testInfo.outputPath('homepage.png'),
      fullPage: true,
      animations: 'disabled',
    });
    await testInfo.attach('Homepage', {
      path: testInfo.outputPath('homepage.png'),
      contentType: 'image/png',
    });
    const metrics = await page.evaluate(() => ({
      cls: (window as Window & { qaShift?: number }).qaShift ?? 0,
      remote: performance
        .getEntriesByType('resource')
        .map((e) => e.name)
        .filter((url) => new URL(url).origin !== location.origin),
    }));
    expect(metrics.cls).toBeLessThan(0.1);
    expect(metrics.remote).toEqual([]);
    const screenshot = await page.locator('.signature-stage').screenshot({
      path: testInfo.outputPath('signature.png'),
      animations: 'disabled',
      style: '.site-header, .skip-link { visibility: hidden; }',
    });
    expect(screenshot.byteLength).toBeGreaterThan(1000);
    await testInfo.attach('Layout metrics', {
      body: JSON.stringify(metrics),
      contentType: 'application/json',
    });
  });
}

for (const path of ['/', '/en/']) {
  test(`${path} expanded controls meet automated accessibility checks`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 393, height: 852 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(path);
    await page.locator('.core-layer summary').click();
    await page.locator('.api-layer summary').click();
    await page.locator('.payment-dates summary').click();
    await page.locator('.theme-picker summary').click();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
          .analyze()
      ).violations,
    ).toEqual([]);
  });
}
