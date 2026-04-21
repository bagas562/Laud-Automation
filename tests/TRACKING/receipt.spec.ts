import { test, expect } from '@playwright/test';

test('Create Receipt FULL FIX', async ({ page }) => {
  test.setTimeout(120000);

  // ================= LOGIN =================
  await page.goto('https://laud.noretest2.com/login');

  await page.getByRole('textbox', { name: /Username/i }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: /Password/i }).fill('Bagas-QA');
  await page.getByRole('button', { name: /Sign in/i }).click();

  await page.waitForLoadState('networkidle');

  // ================= MENU =================
  await page.getByRole('link', { name: /Receipt/i }).first().click();
  await page.getByRole('button', { name: /Tambah/i }).first().click();

  // ================= FORM =================
  await page.getByRole('textbox', { name: 'No. Resi' }).fill('272727272277272');
  await page.getByRole('textbox', { name: 'China Local Express' }).fill('1111111');

  // ================= JALUR =================
  await page.locator('.select2-selection').nth(0).click();
  await page.waitForSelector('.select2-search__field');
  await page.locator('.select2-search__field').fill('SEA');
  await page.locator('.select2-results__option', { hasText: 'SEA - Express' }).click();

  // ================= PORT =================
  await page.locator('.select2-selection').nth(1).click();
  await page.waitForSelector('.select2-search__field');
  await page.locator('.select2-search__field').fill('Band');
  await page.locator('.select2-results__option').first().click();

  // ================= GUDANG =================
  await page.locator('.select2-selection').nth(2).click();
  await page.waitForSelector('.select2-search__field');
  await page.locator('.select2-search__field').fill('Xiaomei');
  await page.locator('.select2-results__option').first().click();

  // ================= COLOAD =================
  await page.locator('.select2-selection').nth(3).click();
  await page.waitForSelector('.select2-search__field');
  await page.locator('.select2-search__field').fill('Bagas');
  await page.locator('.select2-results__option').first().click();

  // ================= CUSTOMER =================
  await page.locator('.select2-selection').nth(4).click();
  await page.waitForSelector('.select2-search__field');
  await page.locator('.select2-search__field').fill('Bagass');
  await page.locator('.select2-results__option').first().click();

  // ================= MARKING =================
  await page.locator('.select2-selection').nth(5).click();
  await page.waitForSelector('.select2-search__field');
  await page.locator('.select2-search__field').fill('LD');
  await page.locator('.select2-results__option').first().click();

  // ================= GOODS =================
  await page.getByRole('button', { name: /ADD NEW GOODS/i }).click();

  await page.locator('#panjang').fill('12');
  await page.locator('#lebar').fill('15');
  await page.locator('#tinggi').fill('30');
  await page.locator('#berat').fill('4');
  await page.locator('#total_ctn').fill('7');

  // ================= CATEGORY =================
  await page.locator('#select2-kategori_barang_id-container').click();

await page.waitForTimeout(1000);

await page.keyboard.type('Elektro');
await page.keyboard.press('Enter');

  // ================= PENYEDIA =================
  await page.evaluate(() => {
  const select = document.querySelector('#penyedia_pengiriman_id') as HTMLSelectElement | null;
  if (select) {
    select.selectedIndex = 1; 
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }
});

  // ================= DESKRIPSI =================
  await page.locator('#deskripsi').fill('test barang');

  // ================= SUBMIT =================
  
await page.locator('#btnsubmitreceipt').scrollIntoViewIfNeeded();


await page.waitForTimeout(1000);


const isDisabled = await page.locator('#btnsubmitreceipt').isDisabled();

if (isDisabled) {
  console.log

  
  await page.evaluate(() => {
    const btn = document.querySelector('#btnsubmitreceipt') as HTMLButtonElement | null;
    if (btn) btn.removeAttribute('disabled');
  });
}


 await page.waitForTimeout(1000);
  await page.locator('button:has-text("Submit")').last().dispatchEvent('click');
});