import { test, expect } from '@playwright/test';

test('Create Invoice', async ({ page }) => {

  // LOGIN
  await page.goto('https://laud.noretest2.com/login');

  await page.getByRole('textbox', { name: 'Username / Marking' }).fill('Bagas-QA');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bagas-QA');
  await page.getByRole('button', { name: /Sign in/i }).click();

  // MASUK MENU
  await page.goto('https://laud.noretest2.com/invoice');
  await page.getByRole('button', { name: 'Tambah' }).click();

  // ===== PILIH MARKING =====
  await page.locator('#select2-filter_marking-container').click();
  await page.locator('.select2-container--open .select2-search__field').fill('bagass');
  await page.keyboard.press('Enter');

  // ===== FILTER =====
  await page.waitForTimeout(2000);
  await page.locator('#btnFilter').click({ force: true });

  // ===== TUNGGU DATA TABLE =====
 await page.waitForFunction(() => {
  return document.querySelectorAll('#tableresi tbody tr').length > 0;
});

// paksa centang checkbox TANPA klik
await page.evaluate(() => {
  const checkbox = document.querySelector('#tableresi tbody input[type="checkbox"]') as HTMLInputElement | null;

  if (checkbox) {
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change', { bubbles: true }));
  }
});
  // ===== TUNGGU BUTTON AKTIF =====
  await page.waitForTimeout(2000);

  // ===== BUAT INVOICE =====
  await page.waitForFunction(() => {
  const btn = document.querySelector('#createbutton') as HTMLButtonElement | null;
  return btn && !btn.disabled;
}, { timeout: 15000 });

// klik via JS (ANTI INVISIBLE)
await page.evaluate(() => {
  const btn = document.querySelector('#createbutton') as HTMLButtonElement | null;
  if (btn) btn.click();
});

  // ===== TUNGGU MODAL =====
  await page.waitForTimeout(2000);

  // ===== SHIP VIA =====
  await page.evaluate(() => {
  const select = document.querySelector('#ship_via') as HTMLSelectElement | null;
  if (select) {
    select.value = select.options[1].value; // pilih opsi pertama selain default
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }
});

  // ===== REKENING =====
  await page.evaluate(() => {
  const select = document.querySelector('#rekening') as HTMLSelectElement | null;

  if (select) {
    // pilih option kedua (biasanya bukan default)
    select.selectedIndex = 1;
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }
});

  // ===== NOTE =====
  // isi note TANPA nunggu .note-editable
await page.evaluate(() => {
  const editor = document.querySelector('.note-editable') as HTMLElement | null;

  if (editor) {
    editor.innerHTML = 'mahal ni';
  } else {
    // fallback kalau belum ke-render
    const textarea = document.querySelector('textarea[name="note"]') as HTMLTextAreaElement | null;
    if (textarea) {
      textarea.value = 'mahal ni';
    }
  }
});

  // ===== SUBMIT =====
  await page.evaluate(() => {
  const btn = document.querySelector('#createbutton') as HTMLButtonElement | null;
  if (btn) btn.click();
});

});