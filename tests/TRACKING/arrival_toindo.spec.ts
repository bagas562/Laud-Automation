import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Arrival to Indonesia' }).click();
  await page.getByRole('gridcell').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Unstuffing Indonesia ' }).click();
  await page.goto('https://laud.noretest2.com/arrivalindo');
});