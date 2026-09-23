import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 2,
  reporter: 'list',
  use: { baseURL: 'http://127.0.0.1:8787', trace: 'retain-on-failure' },
  projects: [
    {
      name: 'desktop-light',
      use: { ...devices['Desktop Chrome'], colorScheme: 'light' },
    },
    {
      name: 'mobile-dark',
      use: {
        ...devices['iPhone 13'],
        defaultBrowserType: 'chromium',
        colorScheme: 'dark',
      },
    },
  ],
  webServer: {
    command: 'npm run preview:cloudflare',
    url: 'http://127.0.0.1:8787',
    reuseExistingServer: false,
    timeout: 60000,
  },
});
