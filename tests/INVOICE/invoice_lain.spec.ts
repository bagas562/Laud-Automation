import { test, expect } from '@playwright/test';

test('Invoice Lain-lain - Stable Version', async ({ page }) => {
  // 1. LOGIN & NAVIGASI
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: /Username/i }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: /Password/i }).fill('Bagas-QA');
  await page.getByRole('button', { name: /Sign in/i }).click();
  
  await page.getByRole('link', { name: /Invoice Lain lain/i }).click();
  await page.getByRole('button', { name: /Tambah/i }).click();

  // 2. PILIH INVOICE
  await page.getByTitle('-- Pilih Invoice --').click();
  await page.getByRole('treeitem', { name: 'ZJINV0310135324' }).click();
  
  // Klik tombol proses (button kosong di log kamu)
  await page.getByRole('button').filter({ hasText: '' }).first().click();

  // 3. ISI DETAIL BIAYA
  await page.locator('#btnkurangbiaya').click();
  await page.locator('input[name="pt_deskripsi[]"]').fill('diskon');
  await page.locator('input[name="pt_harga[]"]').fill('30000');
  
  // 4. HEADER INVOICE
  await page.locator('#no_invoice_lain').fill('ZJINV0310135324');
  
  // Pilih Ship Via
  await page.locator('#select2-ship_via-container').click();
  await page.getByRole('treeitem', { name: 'SEA - Express' }).click();

  // --- BAGIAN YANG ERROR (REKENING) ---
  // Kasih jeda 1 detik biar sistem selesai loading data rekening setelah pilih Ship Via
  await page.waitForTimeout(1000); 
  
  // Gunakan ID langsung untuk klik dropdown rekening
  const dropdownRekening = page.locator('#select2-rekening-container');
  await dropdownRekening.waitFor({ state: 'visible' });
  await dropdownRekening.click({ force: true }); // Paksa klik biar nggak nunggu 'stable' lama-lama

  // Cari rekening BCA Kingbagas
  await page.getByRole('treeitem', { name: 'BCA | 987670085 - KINGBAGAS' }).click();

  // 5. ISI CUSTOMER PO & NOTE
  await page.locator('input[name="customer_po"]').fill('UUN');
  
  // Isi Summernote (Editor teks)
  const noteEditor = page.locator('.note-editable');
  await noteEditor.focus();
  await noteEditor.fill('ASEK');

  // 6. BUAT INVOICE
  await page.getByRole('button', { name: /Buat Invoice/i }).click();
  
  // Tunggu hasil
  await page.waitForTimeout(2000);
  console.log("Invoice Berhasil Dibuat, Gas!");
});