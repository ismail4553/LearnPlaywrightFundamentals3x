import {test, expect} from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
let inputbox =page.locator("//input[@id='email']");
await inputbox.fill("nizami@gmail.com");

let inputbox1 = page.locator("//input[@id='password']");
await inputbox1.fill("dummypW");
await page.locator("//input[@type='checkbox']").click();


await page.locator("//button[@class='login-btn']").click();
let successurl= await page.url();
expect(successurl).toContain("https://app.thetestingacademy.com/playwright/multiple_element_filter?email=nizami%40gmail.com&password=dummypW&remember=yes#login-success");

await page.pause();
});
