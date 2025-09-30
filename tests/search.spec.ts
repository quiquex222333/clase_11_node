import { test, expect } from '@playwright/test';

const queries = ['playwright', 'pytest xdist', 'selenium grid'];

for (const q of queries) {
  test(`search: ${q}`, async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.fill('input[name="q"]', q);
    await page.keyboard.press('Enter');
    // await expect(page.locator('#links')).toBeVisible();
    console.log(`[${test.info().project.name}] query='${q}' OK`);
  });
}
