import {test, expect} from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com');
await page.locator("//a[@id='btn-make-appointment']").click();
let inputbox =page.locator("//input[@id='txt-username']");
await inputbox.fill("John Doe");
await page.locator("//input[@id='txt-password']").fill("ThisIsNotAPassword");
await page.locator("//button[@id='btn-login']").click();
let textonwebsite= await page.locator("//h2[text()='Make Appointment']");
await expect(textonwebsite).toHaveText("Make Appointment");
});