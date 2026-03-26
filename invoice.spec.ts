import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Invoice', exact: true }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByTitle('-- Pilih Marking --').click();
  await page.getByRole('treeitem', { name: 'bagass - LD/KONG08' }).dblclick();
  await page.getByTitle('-- Pilih Resi --').click();
  await page.getByRole('treeitem', { name: '99999999999' }).click();
  await page.locator('#btnFilter').click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Buat Invoice ' }).click();
  await page.getByTitle('-- Pilih Ship Via --').click();
  await page.getByRole('treeitem', { name: 'SEA - Express' }).click();
  await page.getByTitle('-- Pilih Rekening --').click();
  await page.getByRole('treeitem', { name: 'BCA | 987670085 - KINGBAGAS' }).click();
  await page.locator('.note-editable').click();
  await page.locator('.note-editable').fill('mahal ni');
  await page.getByRole('button', { name: ' Buat Invoice' }).click();
});