import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Alamat Gudang' }).click();
  await page.getByRole('combobox', { name: '-- Pilih Penyedia Pengiriman' }).click();
  await page.locator('.select2-search__field').fill('bagasresink');
  await page.getByRole('textbox', { name: 'Nama' }).click();
  await page.getByRole('textbox', { name: 'Nama' }).fill('teguh cilik');
  await page.locator('#alamat').click();
  await page.locator('#alamat').fill('jl.serunisari no 8');
  await page.getByRole('textbox', { name: 'Kota' }).click();
  await page.getByRole('textbox', { name: 'Kota' }).fill('semarang');
  await page.getByRole('textbox', { name: 'State' }).click();
  await page.getByRole('textbox', { name: 'State' }).fill('jawa tengah');
  await page.getByRole('textbox', { name: 'Kode Pos' }).click();
  await page.getByRole('textbox', { name: 'Kode Pos' }).fill('5013');
  await page.getByPlaceholder('024 5001000 /').click();
  await page.getByPlaceholder('024 5001000 /').fill('0999877789');
  await page.getByRole('textbox', { name: 'Marking Gudang' }).click();
  await page.getByRole('textbox', { name: 'Marking Gudang' }).fill('kulkul');
  await page.getByRole('button', { name: 'Simpan ' }).click();
});