import { test, expect } from '@playwright/test';

test('login (saucedemo)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await expect(page.locator('.inventory_list')).toBeVisible();
  console.log(`[${test.info().project.name}] login OK`);
});
