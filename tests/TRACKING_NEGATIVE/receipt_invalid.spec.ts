import { test, expect } from '@playwright/test';

test('Negative Test - Receipt Validation', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: /Sign in/i }).click();

  await page.waitForURL('**/dashboard', { timeout: 10000 });

  await page.getByRole('link', { name: ' Receipt', exact: true }).click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('button', { name: /Tambah/i }).click();
  await page.getByRole('button', { name: /Submit/i }).first().click();

  await page.getByPlaceholder('No. Resi').fill('77777');
  
  const fieldWajib = page.locator('input[name="no_telepon"], .form-control').nth(1); 
  await fieldWajib.fill('7676767766');

  await page.getByTitle('-- Pilih Jalur --').click();
  await page.getByRole('treeitem', { name: 'AIR - Express' }).click();

  await page.getByTitle('-- Choose Customer --').click();
  await page.getByRole('treeitem', { name: 'Bagass', exact: true }).click();

  await page.getByTitle('-- Choose Marking --').click();
  await page.getByRole('treeitem', { name: 'LD/KONG08' }).click();

  await page.getByRole('button', { name: /ADD NEW GOODS/i }).click();

  await page.locator('#panjang').fill('200');
  await page.locator('#lebar').fill('300');
  await page.locator('#tinggi').fill('400');
  await page.locator('#berat').fill('25');
  await page.locator('#total_ctn').fill('11');
  
  // BAGIAN IPHONE
  await page.locator('.select2-container').filter({ hasText: 'BABY STOVE' }).click(); 
  await page.waitForSelector('.select2-search__field', { state: 'visible' });
  await page.locator('.select2-search__field').fill('Iphone 17 pro max');
  await page.keyboard.press('Enter');

  await page.waitForTimeout(1000);

  // BAGIAN PENYEDIA: Pake dispatchEvent buat buka dropdown-nya biar gak timeout
  const penyediaContainer = page.locator('#select2-penyedia_pengiriman_id-container');
  await penyediaContainer.dispatchEvent('mousedown'); 
  
  // Tunggu box search-nya muncul
  await page.waitForSelector('.select2-search__field', { state: 'visible' });
  await page.locator('.select2-search__field').fill('Bagas Expres');
  await page.keyboard.press('Enter');

  await page.waitForTimeout(1000);
  await page.locator('button:has-text("Submit")').last().dispatchEvent('click');
});