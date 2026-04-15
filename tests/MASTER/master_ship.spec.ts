import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Master Ship' }).click();
  await page.getByRole('textbox', { name: 'Nama Ship Via' }).click();
  await page.getByRole('textbox', { name: 'Nama Ship Via' }).fill('AIR-Express wush');
  await page.locator('#kategori').selectOption('udara');
  await page.getByRole('button', { name: 'Simpan ' }).click();
});