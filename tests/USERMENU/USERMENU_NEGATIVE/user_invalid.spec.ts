import { test } from '@playwright/test';

test('User Fix Stabil (no ganti data)', async ({ page }) => {
  test.setTimeout(120000);

  await page.goto('https://laud.noretest2.com/login');

  // LOGIN
  await page.locator('input[name="username"]').fill('Bagas-QA');
  await page.locator('input[name="password"]').fill('Bagas-QA');
  await page.locator('button[type="submit"]').click();

  // MENU
  await page.locator('a:has-text("Users")').click();
  await page.locator('button:has-text("Tambah")').click();

  // 🔥 AMBIL FORM AKTIF
  const form = page.locator('form').last();

  // STEP 1 (PAKAI DATA LO)
  await form.locator('input[name="username"]').last().fill('bagasuhuyuhuy');
  await form.locator('button:has-text("Simpan")').last().click();

  // STEP 2 (PAKAI DATA LO)
  await form.locator('input[name="password"]').last().fill('uhuyuhuy');
  await form.locator('input[placeholder="Nama"]').last().fill('bgas');
  await form.locator('input[placeholder="Nickname"]').last().fill('jagoan kamapung');
  await form.locator('button:has-text("Simpan")').last().click();

  // ROLE
  await form.locator('[title="-- Pilih Role --"]').click();
  await page.locator('.select2-results__option:has-text("Admin")').first().click();
  await form.locator('button:has-text("Simpan")').last().click();

  // FINAL (PAKAI DATA LO)
  await form.locator('input[placeholder="Nickname"]').last().fill('jagoan kamapung');
  await form.locator('input[type="email"]').fill('bgs@gmail.com');
  await form.locator('#alamat').fill('smrng');

  await form.locator('[title="-- Pilih Coload --"]').click();
  await page.locator('.select2-results__option').first().click();

  await form.locator('[title="-- Pilih Sales --"]').click();
  await page.locator('.select2-results__option').first().click();

  await form.locator('input[name="marking[]"]').first().fill('LDuhuy');

  await form.locator('button.submitBtn').click();
});