import { test, expect } from '@playwright/test';

test('Create Receipt', async ({ page }) => {

  test.setTimeout(90000);

  // ================= LOGIN =================
  await page.goto('https://laud.noretest2.com/login');

  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: /Sign in/i }).click();

  await page.waitForLoadState('networkidle');

  // ================= MENU =================
  await page.getByRole('link', { name: /Receipt/i }).first().click();
  await page.getByRole('button', { name: /Tambah/i }).first().click();

  // ================= FORM =================
  await page.getByRole('textbox', { name: 'No. Resi' }).fill('272727272277272');
  await page.getByRole('textbox', { name: 'China Local Express' }).fill('1111111');

  // Pilih Jalur
  await page.getByTitle('-- Pilih Jalur --').click();
  await page.getByRole('treeitem', { name: /SEA - Express/i }).first().click();

  // Pilih Port
  await page.getByTitle('-- Pilih Port --').click();
  await page.getByRole('treeitem', { name: /Bandung/i }).first().click();

  // Gudang Asal
  await page.getByTitle('-- Pilih Gudang Asal --').click();
  await page.getByRole('treeitem', { name: /Xiaomei Garage/i }).first().click();

  // Coload
  await page.getByTitle('-- Choose Coload --').click();
  await page.getByRole('treeitem', { name: /Bagas Expres/i }).first().click();

  // Customer
  await page.getByTitle('-- Choose Customer --').click();
  await page.getByRole('treeitem', { name: /Bagass/i }).first().click();

  // Marking
  await page.getByTitle('-- Choose Marking --').click();
  await page.getByRole('treeitem', { name: /LD\/KONG08/i }).first().click();

  // ================= GOODS =================
  await page.getByRole('button', { name: /ADD NEW GOODS/i }).click();

  await page.locator('#panjang').fill('12');
  await page.locator('#lebar').fill('15');
  await page.locator('#tinggi').fill('30');
  await page.locator('#berat').fill('4');
  await page.locator('#total_ctn').fill('7');
// ================= CATEGORY =================

// klik dropdown category
await page.locator('#select2-kategori_barang_id-container').click();

// tunggu dropdown muncul
await page.evaluate(() => {
  const select = document.querySelector('#kategori_barang_id') as HTMLSelectElement | null;
  if (select) {
    select.selectedIndex = 1;
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }
});

// pilih Elektronik
await page.evaluate(() => {
  const select = document.querySelector('#kategori_barang_id') as HTMLSelectElement | null;
  if (select) {
    select.selectedIndex = 1;
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }
});

  // ================= PENYEDIA PENGIRIMAN =================
  await page.locator('#select2-penyedia_pengiriman_id-container').click();
  await page.getByRole('treeitem', { name: /Bagas Expres/i }).first().click();

  await page.locator('#deskripsi').fill('i');

  // ================= SUBMIT =================

// tunggu tombol submit muncul & aktif
const submitButton = page.getByRole('button', { name: /Submit/i }).first();

await submitButton.waitFor({ state: 'visible' });
await submitButton.click({ force: true });

// tunggu proses selesai
await page.waitForLoadState('networkidle');

});