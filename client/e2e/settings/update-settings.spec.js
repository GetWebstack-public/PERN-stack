/** This file demonstrates:
 * -  a single test in a file, with multiple @Scenario annotations (You can cover multiple scenarios in a single test).
 */

import { test, expect } from '@playwright/test';
import { ai } from 'ai-wright';

test('update_settings_success', async ({ page }) => {
  // @Scenario: user should be able to update name with valid value
  // @Screen: Login Page @State: Unauthenticated
  await page.goto(`https://cafetime-demo.web.app/`);
  // @Screen: Login Page @State: sign in tab active, credentials entered
  await page.getByRole(`textbox`, { name: `Email` }).fill(`alice@example.com`);
  await page.getByRole(`textbox`, { name: `Password` }).fill(`TestPass123`);
  // @Screen: Dashboard @State: regular user, weekly view
  await ai.act('Click on the Sign In button once.', { page, test });
  // @Screen: Settings @State: Default
  await page.getByRole(`link`, { name: `Settings` }).click();
  // @Screen: Settings @State: profile updated, notification visible
  await page.getByRole('textbox', { name: "Name" }).fill('Alice Smith New');
  // @Scenario: user should be able to update phone number with valid value
  await page.getByRole(`textbox`, { name: `Mobile Phone Number (for SMS notifications)` }).fill(`+15551234568`);
  // @Screen: Settings @State: profile updated, notification visible
  // Click Update Profile button to save changes
  await page
    .getByRole(`button`, {
      name: `Update Profile`,
    })
    .click();
});
