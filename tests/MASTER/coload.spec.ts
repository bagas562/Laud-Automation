import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Coload' }).click();
  await page.getByRole('textbox', { name: 'Nama Coload' }).click();
  await page.getByRole('textbox', { name: 'Nama Coload' }).fill('bagas sengkuni');
  await page.getByRole('textbox', { name: 'Alamat Coload' }).click();
  await page.getByRole('textbox', { name: 'Alamat Coload' }).fill('jl.semarang timur n0 2');
  await page.getByPlaceholder('Telp Coload').click();
  await page.getByPlaceholder('Telp Coload').fill('0998887609');
  await page.getByRole('button', { name: 'Simpan ' }).click();
});