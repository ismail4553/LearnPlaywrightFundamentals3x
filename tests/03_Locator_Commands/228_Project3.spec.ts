import {test, expect} from '@playwright/test';

test ("Verify error message in wingify free trial", async ({page}) => {

await page.goto("https://wingify.com/free-trial/");
let inputbox =page.locator("//input[@id='free-trial-step1-email']");
await inputbox.fill("nizami");

await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").click();
await page.locator("[data-qa='free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox']").click();

let errorMessage = page.locator("//div[contains(@class, 'invalid-reason')]").first();
await page.locator("//button[@data-qa='page-su-submit']").first().click();
let errormessagetext= await errorMessage.textContent();
expect(errormessagetext).toContain("The email address you entered is incorrect.");
await page.pause();

});
