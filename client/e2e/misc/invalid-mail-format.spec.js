import { test, expect } from '@playwright/test';
import { ai } from 'ai-wright';

test('invalidEmailFormat_givesErrorMessage', async ({ page, browser, context }) => {
  // @Scenario:invalid email address format should give error message
  // Go to https://cafetime-demo.web.app/
  await page.goto('https://cafetime-demo.web.app/');
  // @Screen: Login Page @State: not logged in
  // Enter alice@example.com as username
  await page.getByLabel('Email').fill('testname');
  // Enter TestPass123 as password
  await page.getByLabel('Password').fill('TestPass123');
  // Click on Sign In button
  await page.getByRole('button', { name: 'Sign In' }).click();
  // @Screen: Login Page @State: email validation error
  await ai.verify('Error message shown', { page, test });
});
