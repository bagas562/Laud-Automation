import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Rekening' }).click();
  await page.getByRole('textbox', { name: 'Bank' }).click();
  await page.getByRole('textbox', { name: 'Bank' }).fill('BRI');
  await page.getByRole('textbox', { name: 'No. Rekening' }).dblclick();
  await page.getByRole('textbox', { name: 'No. Rekening' }).fill('2300870122');
  await page.getByRole('textbox', { name: 'Nama Rekening' }).click();
  await page.getByRole('textbox', { name: 'Nama Rekening' }).fill('Tuan muda Bagas ');
  await page.getByRole('button', { name: 'Simpan ' }).click();
});