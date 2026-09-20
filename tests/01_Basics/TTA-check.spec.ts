import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://courses.thetestingacademy.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('nizami');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('123');
  await page.getByRole('button', { name: 'Login' }).click();
  //await page.waituntilTimeout(5000);
});

import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  await page.goto('https://courses.thetestingacademy.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('nizami');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('123');
  await page.locator('iframe[name="a-219625y5b73n"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-219625y5b73n"]').contentFrame().locator('[id="2"]').click();
  await page.locator('iframe[name="c-219625y5b73n"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-219625y5b73n"]').contentFrame().locator('[id="0"]').click();
  await page.locator('iframe[name="c-219625y5b73n"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-219625y5b73n"]').contentFrame().locator('[id="0"]').click();
  await page.locator('iframe[name="c-219625y5b73n"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-219625y5b73n"]').contentFrame().locator('[id="1"]').click();
  await page.locator('iframe[name="c-219625y5b73n"]').contentFrame().locator('[id="7"]').click();
  await page.locator('iframe[name="c-219625y5b73n"]').contentFrame().locator('[id="6"]').click();
  await page.locator('iframe[name="c-219625y5b73n"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-219625y5b73n"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
});