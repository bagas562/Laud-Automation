import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laud.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username / Marking' }).click();
  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Port' }).click();
  await page.getByRole('textbox', { name: 'Kode' }).click();
  await page.getByRole('textbox', { name: 'Kode' }).fill('002-bdg');
  await page.getByRole('textbox', { name: 'Deskripsi' }).click();
  await page.getByRole('textbox', { name: 'Deskripsi' }).fill('bandung');
  await page.getByRole('button', { name: 'Submit ' }).click();
});