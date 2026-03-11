import { test, expect } from '@playwright/test';

test('Stuffing China', async ({ page }) => {
  test.setTimeout(120000);

  await page.goto('https://laud.noretest2.com/login');

  // LOGIN
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // MENU
  await page.getByRole('link', { name: 'Stuffing China' }).click();
  await page.getByRole('link', { name: 'STUFFING CARTON' }).click();

  // tunggu table muncul
  await page.waitForSelector('#table_warehouse');

  // pilih destination
  await page.locator('#select2-port_to1-container').click();
  await page.locator('.select2-results__option:has-text("Bandung")').click();

  const checkbox = page.locator('#table_warehouse tbody tr').first().locator('input[type="checkbox"]');

await checkbox.click({ force: true });

  await page.waitForSelector('#no_container1');
await page.fill('#no_container1', '6699');

 await page.getByRole('button', { name: /To Container/i }).last().click();

});