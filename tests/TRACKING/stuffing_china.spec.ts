import { test, expect } from '@playwright/test';

test('Stuffing China', async ({ page }) => {
  test.setTimeout(120000);

  await page.goto('https://laud.noretest2.com/login');

  // ================= LOGIN =================
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: /Sign in/i }).click();

  await page.waitForLoadState('networkidle');

  // ================= MENU =================
  await page.getByRole('link', { name: /Stuffing China/i }).click();
  await page.getByRole('link', { name: /STUFFING CARTON/i }).click();

  // ================= WAIT TABLE =================
  await page.waitForSelector('#table_warehouse', { timeout: 30000 });

  // ================= DESTINATION (FIX) =================
  await page.locator('#select2-port_to1-container').click();

  const option = page.locator('.select2-results__option').first();

  await option.waitFor({ state: 'visible', timeout: 20000 });
  await option.click();

  // ================= CHECKBOX =================
  const rows = page.locator('#table_warehouse tbody tr');
  await expect(rows.first()).toBeVisible();

  const checkbox = rows.first().locator('input[type="checkbox"]');
  await checkbox.click({ force: true });

  // ================= INPUT CONTAINER =================
  await page.waitForSelector('#no_container1', { timeout: 20000 });
  await page.fill('#no_container1', '6699');

  // ================= BUTTON =================
  await page.getByRole('button', { name: /To Container/i }).last().click({ force: true });

  await page.waitForLoadState('networkidle');
});