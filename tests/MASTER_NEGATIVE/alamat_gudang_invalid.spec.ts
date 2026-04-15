import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Alamat Gudang' }).click();
  await page.getByRole('button', { name: 'Simpan ' }).click();
  await page.getByRole('textbox', { name: 'Nama' }).click();
  await page.getByRole('textbox', { name: 'Nama' }).fill('allstar');
  await page.getByRole('button', { name: 'Simpan ' }).click();
  await page.getByRole('textbox', { name: 'Kota' }).fill('semarang');
  await page.getByRole('button', { name: 'Simpan ' }).click();
  await page.getByRole('textbox', { name: 'State' }).fill('jawa');
  await page.getByRole('button', { name: 'Simpan ' }).click();
  await page.getByPlaceholder('024 5001000 /').click();
  await page.getByPlaceholder('024 5001000 /').fill('008800880');
  await page.getByRole('button', { name: 'Simpan ' }).click();
});