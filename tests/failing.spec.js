const { test, expect } = require('@playwright/test');

test.describe('Intentional failures for CI practice', () => {

  test('this test passes', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('this test fails intentionally', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/This Title Does Not Exist/);
  });

});