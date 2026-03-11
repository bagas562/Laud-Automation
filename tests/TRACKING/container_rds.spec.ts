import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Container Ready to Send' }).click();
  const row = page.locator('table tbody tr', { hasText: 'Bandung' }).first();
 const checkbox = page.locator('input[type="checkbox"]').nth(1); 
// nth(0) biasanya checkbox header, jadi pakai nth(1)

await checkbox.waitFor({ timeout: 30000 });
await checkbox.click({ force: true });
  await page.getByRole('button', { name: 'Delivery to Indonesia ' }).click();
  await page.goto('https://laud.noretest2.com/containertosend');
}); 