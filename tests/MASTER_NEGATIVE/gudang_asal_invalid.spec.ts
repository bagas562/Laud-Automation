import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Gudang Asal' }).click();
  await page.getByRole('textbox', { name: 'Nama Gudang' }).click();
  await page.getByRole('textbox', { name: 'Nama Gudang' }).fill('cawnima');
  await page.locator('#alamat').click();
  await page.locator('#alamat').fill('cino');
  await page.getByPlaceholder('No. Hp Gudang').click();
  await page.getByPlaceholder('No. Hp Gudang').fill('');
  await page.locator('#keterangan').click();
  await page.locator('#keterangan').fill('samping cinamart');
  await page.getByRole('button', { name: 'Simpan ' }).click();
});