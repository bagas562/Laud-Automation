import { test, expect } from '@playwright/test';

test('Create Invoice', async ({ page }) => {

  await page.goto('https://laud.noretest2.com/login');

  // LOGIN
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: /Sign in/i }).click();

  // MASUK MENU INVOICE
  await page.goto('https://laud.noretest2.com/invoice');
  await page.getByRole('button', { name: 'Tambah' }).click();

  // PILIH MARKING
  await page.getByTitle('-- Pilih Marking --').click();
  await page.getByRole('treeitem', { name: 'bagass - LD/KONG08' }).click();

  // FILTER
  await page.locator('#btnFilter').click();
  await page.waitForTimeout(3000);

  // CHECKLIST RESI PERTAMA
  await page.locator('#tableresi tbody tr').first().click();

  // BUAT INVOICE
  await page.getByRole('button', { name: 'Buat Invoice' }).click();

  // SHIP VIA
  await page.getByTitle('-- Pilih Ship Via --').click();
  await page.getByRole('treeitem', { name: 'SEA - Express' }).click();

  // REKENING
  await page.getByTitle('-- Pilih Rekening --').click();
  await page.getByRole('treeitem', { name: 'BCA | 987670085 - KINGBAGAS' }).click();

  // NOTE
  await page.locator('.note-editable').fill('mahal ni');

  // SUBMIT
  await page.getByRole('button', { name: 'Buat Invoice' }).last().click();

});