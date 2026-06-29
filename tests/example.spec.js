const { test, expect } = require('@playwright/test');

test.describe('Playwright website', () => {

  test('has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link works', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL(/.*intro/);
  });

  test('docs page loads', async ({ page }) => {
    await page.goto('/docs/intro');
    const heading = page.getByRole('heading', { name: 'Installation' });
    await expect(heading).toBeVisible();
  });

});