import { test, expect, chromium, firefox, webkit } from '@playwright/test';

for (const browserType of [chromium, firefox, webkit]) {
  test(`test in ${browserType.name()}`, async () => {
    const browser = await browserType.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await expect(page).toHaveTitle(/Example/);
    await browser.close();
  });
}