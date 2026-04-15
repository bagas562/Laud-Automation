import { test, expect } from '@playwright/test';

test('Unstuffing Indonesia', async ({ page }) => {

  test.setTimeout(90000);

  // ================= LOGIN =================
  await page.goto('https://laud.noretest2.com/login');

  await page.locator('input[name="username"]').fill('Bagas-QA');
  await page.locator('input[name="password"]').fill('Bagas-QA');

  await page.getByRole('button', { name: /Sign in/i }).click();
  await page.waitForLoadState('networkidle');

  // ================= MENU =================
  await page.getByRole('link', { name: /Unstuffing Indonesia/i }).click();
  await page.getByRole('link', { name: /UNSTUFFING CARTON/i }).click();

  // ================= DESTINATION =================
  await page.locator('[title="--Destination Port--"]').click();

  // pilih option pertama (biar pasti keisi)
  await page.locator('.select2-results__option').first().click();

  // ================= SUBMIT (WAIT REAL ACTION) =================
  await Promise.all([
    page.waitForLoadState('networkidle'), // tunggu perubahan
    page.getByRole('button', { name: /Submit/i }).last().click()
  ]);

  // ================= DEBUG CEK HALAMAN =================
  console.log('URL SEKARANG:', page.url());

  // ================= CEK TABLE (JANGAN MAKSA) =================
  const table = page.locator('#table_container');

  if (await table.count() > 0) {

    const rows = table.locator('tbody tr');
    const count = await rows.count();

    if (count > 0) {
      const checkbox = rows.first().locator('input[type="checkbox"]');
      await checkbox.click({ force: true });

      await page.locator('button:has-text("Deliver")').click({ force: true });
    } else {
      console.log('⚠️ Table kosong');
    }

  } else {
    console.log('⚠️ Table tidak muncul setelah submit');
  }

});