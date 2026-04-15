import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Penyedia Pengiriman' }).click();
  await page.getByPlaceholder('Logo Perusahaan').click();
  await page.getByTitle('-- Pilih Tipe Ekspedisi --').click();
  await page.getByRole('treeitem', { name: 'By Sea/Express' }).click();
  await page.getByRole('textbox', { name: 'Nama Ekspedisi' }).click();
  await page.getByRole('textbox', { name: 'Nama Ekspedisi' }).fill('wibu expres');
  await page.getByRole('textbox', { name: 'Nama Pemilik' }).click();
  await page.getByRole('textbox', { name: 'Nama Pemilik' }).fill('uncle ahtong');
  await page.getByPlaceholder('024 5001000 /').click();
  await page.getByPlaceholder('024 5001000 /').fill('');
  await page.locator('#alamat').click();
  await page.locator('#alamat').fill('nganjuk');
  await page.getByRole('button', { name: 'Simpan ' }).click();
});