import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // paralelismo: 50% de los cores (ajusta a gusto)
  workers: '50%',
  timeout: 30_000,
  reporter: [['list'], ['html', { outputFolder: 'html-report' }]],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // agrega webkit si deseas
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
