import{test,expect} from '@playwright/test'; // import the test and expect functions from the Playwright testing library

test.describe('Test Describe',()=>{  // describe block is used to group the tests
    test('valiate credentials',async({page})=>{  // test block is used to define a test case
        await page.goto('https://courses.thetestingacademy.com/');
        await page.getByRole('link', { name: 'Sign In' }).click();
    });
    test('invalid credentials',async({page})=>{
        await page.goto('https://courses.thetestingacademy.com/');
        await page.getByRole('link', { name: 'Sign In' }).click();
    });
})