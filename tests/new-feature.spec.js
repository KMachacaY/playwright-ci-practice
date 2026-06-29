const { test, expect } = require('@playwright/test');

test('new feature test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
});