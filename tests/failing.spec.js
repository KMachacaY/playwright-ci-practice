const { test, expect } = require('@playwright/test');

test.describe('Debug practice', () => {

  test('element not found failure', async ({ page }) => {
    await page.goto('/');
    const nonExistentButton = page.getByRole('button', { name: 'This Button Does Not Exist' });
    await expect(nonExistentButton).toBeVisible({ timeout: 5000 });
  });

  test('timeout failure', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.this-class-does-not-exist', { timeout: 3000 });
  });

});