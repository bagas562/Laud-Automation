import { test } from '@playwright/test';

test('Unstuffing Indonesia', async ({ page }) => {

  // LOGIN
  await page.goto('https://laud.noretest2.com/login');

  await page.locator('input[name="username"]').fill('Bagas-QA');
  await page.locator('input[name="password"]').fill('Bagas-QA');

  await page.getByRole('button', { name: /Sign in/i }).click();

  // MENU
  await page.getByRole('link', { name: /Unstuffing Indonesia/i }).click();
  await page.getByRole('link', { name: /UNSTUFFING CARTON/i }).click();

  // DESTINATION
  await page.locator('[title="--Destination Port--"]').click();
  await page.getByRole('treeitem', { name: /Bandung/i }).click();

  // SUBMIT
  await page.getByRole('button', { name: /Submit/i }).first().click();

  // TUNGGU TABLE
  await page.waitForSelector('#table_container');

  // CHECKBOX DATA
  const checkbox = page.locator('input[type="checkbox"]').nth(1);
  await checkbox.click({ force: true });

  // DELIVER
  await page.locator('button:has-text("Deliver")').click({ force: true });

});