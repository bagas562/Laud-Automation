import { test, expect } from '@playwright/test';

test('Create Invoice', async ({ page }) => {

  await page.goto('https://laud.noretest2.com/login');

  // login
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: /Sign in/i }).click();

  // masuk menu invoice
  await page.locator('a[href="https://laud.noretest2.com/invoice"]').click();
  await page.getByRole('button', { name: 'Tambah' }).click();

  // pilih marking
  await page.locator('#select2-filter_marking-container').click();
  await page.locator('.select2-search__field').fill('bagass');
  await page.locator('.select2-results__option').first().click();

  // pilih resi
  await page.locator('#select2-filter_resi-container').click();
  await page.locator('.select2-search__field').fill('272727272277272');
  await page.locator('.select2-results__option').first().click();

  // filter
  await page.locator('#btnFilter').click();

  // checklist resi
  await page.locator('input[type="checkbox"]').first().check();

  // buat invoice
  await page.getByRole('button', { name: 'Buat Invoice' }).click();

  // ship via
  await page.locator('#select2-ship_via-container').click();
  await page.locator('.select2-results__option', { hasText: 'SEA - Express' }).click();

  // rekening
  // buka dropdown rekening
await page.locator('#select2-rekening-container').click();

// ketik rekening
await page.locator('.select2-search__field').fill('KINGBAGAS');

// klik hasil
await page.locator('.select2-results__option').first().click();

  // note
  await page.locator('.note-editable').fill('uyeeee');

  // submit
  await page.getByRole('button', { name: 'Buat Invoice' }).click();

});