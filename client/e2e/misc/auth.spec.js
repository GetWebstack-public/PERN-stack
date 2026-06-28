/**
 * The @Screen and @State annotations are used by exploratory agents for bug attribution to the correct screen / state.
 * These are auto-authored by the agent when the annotations are not present. You can update them to align with your desired reporting app structure.
 */

import { test, expect } from '@playwright/test';
import { ai } from 'ai-wright';

test('validCredentials_shouldSucceed', async ({ page, browser, context }) => {
  // @Scenario: valid credentials should allow users to login
  await page.goto('https://cafetime-demo.web.app/');
  // @Screen: Login Page @State: not logged in, sign-in tab active
  await page.getByTestId('input-email').fill(process.env.USERNAME);
  await page.getByTestId('input-pass').fill(process.env.PASSWORD);
  await page.getByTestId('cta-login').click();
  // @Screen: Dashboard @State: shift calendar, week view
});

test('invalidCredentials_shouldFail', async ({ page, browser, context }) => {
  // @Scenario:invalid credentials should be rejected test
  await page.goto('https://cafetime-demo.web.app/');
  // @Screen: Login Page @State: not logged in, sign-in tab
  await page.getByTestId('input-email').fill('alice@example.com');
  await page.getByTestId('input-pass').fill('GarbageValue');
  await page.getByTestId('cta-login').click();
  // @Screen: Dashboard @State: shift calendar, week view
  // Verify that the user is not allowed in to dashboard page
  await expect(page).not.toHaveURL('https://cafetime-demo.web.app/dashboard');
});
