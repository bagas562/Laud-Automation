import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Users' }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('bagas cilik');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('uvuvevuve');
  await page.getByRole('textbox', { name: 'Nama' }).click();
  await page.getByRole('textbox', { name: 'Nama' }).fill('bagas ciliks');
  await page.getByRole('textbox', { name: 'Nickname' }).click();
  await page.getByRole('textbox', { name: 'Nickname' }).fill('bagas_cilik234');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('gass@gmail.com');
  
  await page.locator('#alamat').click();
  await page.locator('#alamat').fill('jl.smrng');
  await page.getByTitle('-- Pilih Coload --').click();
  await page.waitForSelector('.select2-results__option');
  await page.locator('.select2-results__option:has-text("bagas sengkuni")').first().click()
  await page.getByTitle('-- Pilih Role --').click();
  await page.getByRole('treeitem', { name: 'Super Admin' }).click();
  await page.getByTitle('-- Pilih Sales --').click();
  await page.getByRole('treeitem', { name: 'bagasuye' }).click();
  await page.getByRole('textbox', { name: 'Marking' }).click();
  await page.getByRole('textbox', { name: 'Marking' }).fill('oyyyy23');
  await page.getByRole('textbox', { name: 'Wilayah' }).click();
  await page.getByRole('textbox', { name: 'Wilayah' }).fill('jateng');
  await page.locator('#keterangan').click();
  await page.locator('#keterangan').fill('uyy');
  await page.getByRole('button', { name: 'Simpan ' }).click();
});