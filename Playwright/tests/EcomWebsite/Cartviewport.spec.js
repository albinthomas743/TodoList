import { test, expect, chromium, firefox, webkit } from '@playwright/test';

test('custom screen size', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 },
    userAgent: 'Mobile-User-Agent'
  });

  const page = await context.newPage();
  await page.goto('https://google.com');
  await page.screenshot({ path: 'view.png' });
});