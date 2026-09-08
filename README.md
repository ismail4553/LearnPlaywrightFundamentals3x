# Learn Playwright Fundamentals 3x

This repository contains a basic Playwright test project created for learning Playwright fundamentals with the Playwright Test runner.

## Playwright Install and Setup

Install Node.js and npm first. Then install the project dependencies:

```sh
npm install
```

Install Playwright browsers and required system dependencies:

```sh
npx playwright install
```

If you are on Linux, you can install OS dependencies too:

```sh
npx playwright install --with-deps
```

## Basic Project Setup

This workspace is already configured as a Playwright project using the Playwright Test configuration file:

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    headless: false,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```

## Run the Tests

```sh
npx playwright test
```

For a headed browser run:

```sh
npx playwright test --headed
```

## Playwright Codegen

Playwright Codegen can be used to record a test by interacting with a webpage in the browser.

```sh
npx playwright codegen https://sdet.live
```

This opens the Playwright Codegen UI where you can perform actions and generate test code automatically.

## Project Structure

```text
.
├── package.json
├── playwright.config.ts
├── tests/
│   ├── example.spec.ts
│   └── TTA-check.spec.ts
└── README.md
```

## Useful Commands

```sh
npx playwright test
npx playwright test --headed
npx playwright codegen https://sdet.live
npx playwright report
```
