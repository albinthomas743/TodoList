const { test, expect } = require('@playwright/test');

test.describe('My Suite', () => {
  test('does something', async ({ page }) => {
    // test steps
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
  });
});