import { test, expect } from '@playwright/test';

test('Create Invoice', async ({ page }) => {

  // LOGIN
  await page.goto('https://laud.noretest2.com/login');

  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: /Sign in/i }).click();

  // MASUK MENU
  await page.goto('https://laud.noretest2.com/invoice');
  await page.getByRole('button', { name: 'Tambah' }).click();

  // ===== PILIH MARKING =====
  await page.locator('#select2-filter_marking-container').click();
  await page.locator('.select2-search__field').fill('bagass');
  await page.keyboard.press('Enter');

  // ===== FILTER =====
  await page.waitForTimeout(2000);
  await page.locator('#btnFilter').click({ force: true });

  // ===== TUNGGU DATA =====
  await page.waitForTimeout(4000);

  // ===== SELECT DATA (PAKAI CHECKBOX VIA JS) =====
  await page.evaluate(() => {
    const checkbox = document.querySelector('#tableresi tbody input[type="checkbox"]');
    if (checkbox) {
      (checkbox as HTMLInputElement).checked = true;
      checkbox.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  await page.waitForTimeout(1500);

  // ===== BUAT INVOICE =====
  await page.locator('button:has-text("Buat Invoice")').click({ force: true });

  // ===== TUNGGU MODAL =====
  await page.waitForTimeout(2000);

  // ===== SHIP VIA =====
  await page.getByTitle('-- Pilih Ship Via --').click();
  await page.locator('.select2-container--open .select2-search__field').fill('SEA');
  await page.keyboard.press('Enter');

  // ===== REKENING =====
  await page.getByTitle('-- Pilih Rekening --').click();
  await page.locator('.select2-container--open .select2-search__field').fill('BCA');
  await page.keyboard.press('Enter');

  // ===== NOTE =====
  await page.locator('.note-editable').fill('mahal ni');

  // ===== SUBMIT =====
  await page.locator('button:has-text("Buat Invoice")').last().click({ force: true });

});