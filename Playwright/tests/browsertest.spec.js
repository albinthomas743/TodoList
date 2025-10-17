const { test, expect } = require('@playwright/test');

import { test, expect } from '@playwright/test';
test.describe('OpenAI ChatGPT page (JS)', () => {
  test.beforeEach(async ({ page }) => {
    // Runs before each test in this describe block
    await page.goto('https://openai.com/index/chatgpt/');
  });
   });