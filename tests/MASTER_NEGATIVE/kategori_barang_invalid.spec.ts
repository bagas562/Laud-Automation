import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Kategori Barang' }).click();
  await page.getByRole('textbox', { name: 'Kategori Barang' }).click();
  await page.getByRole('textbox', { name: 'Kategori Barang' }).fill('kendaraan');
  await page.getByRole('button', { name: 'Simpan ' }).click();
  await page.getByRole('textbox', { name: 'Harga Barang' }).click();
  await page.getByRole('textbox', { name: 'Harga Barang' }).fill('122220000');
  await page.getByRole('button', { name: 'Simpan ' }).click();
});