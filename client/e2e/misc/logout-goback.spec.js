/*

This is a TestChimp Smart Test.
Version: 1.0


*/

import { test, expect } from '@playwright/test';
import {SignIn} from "../../pages/SignIn.page.js";
import { ai } from 'ai-wright';

test('logoutAndGoBack_shouldNotOpenDashboard', async ({ page, browser, context }) => {
  // @Scenario: after logging out, going back should not show logged-in experience
  let signin;
  signin = new SignIn(page);
  await signin.login();

  // Logout
  await page.getByRole(`button`, { name: `Logout` }).click();
  await page.goBack();

  // Verify that user is not redirected to dashboard
  await expect(page).not.toHaveURL('https://cafetime-demo.web.app/dashboard');

});