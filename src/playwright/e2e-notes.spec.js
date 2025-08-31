const { test, expect } = require('@playwright/test');

test('Notes app loads the homepage', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Change this URL if your app runs elsewhere
  await expect(page.locator('h1')).toContainText('Notes');
});