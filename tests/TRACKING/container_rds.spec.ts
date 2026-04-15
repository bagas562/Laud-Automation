import { test, expect } from '@playwright/test';

test('Container RDS', async ({ page }) => {

  test.setTimeout(90000);

  // ================= LOGIN =================
  await page.goto('https://laud.noretest2.com/login');

  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: /Sign in/i }).click();

  await page.waitForLoadState('networkidle');

  // ================= MENU =================
  await page.getByRole('link', { name: /Container Ready to Send/i }).click();

  // ================= WAIT TABLE =================
  await page.waitForSelector('table tbody tr', { timeout: 30000 });

// ================= KLIK CELL PERTAMA (PASTI ADA) =================
const firstRow = page.locator('table tbody tr').first();

// klik kolom pertama (biasanya checkbox area)
await firstRow.locator('td').first().click({ force: true });
});