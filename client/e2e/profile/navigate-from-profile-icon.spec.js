/**
 * This file illustrates a test written mostly in just ai steps.
 */

import { test, expect } from '@playwright/test';
import {SignIn} from "../../pages/SignIn.page.js";
import { ai } from 'ai-wright';

test('clickProfileIcon_openSettings', async ({ page, browser, context }) => {
  // @Scenario: users should be able to navigate to settings page via profile icon
  let signin;
  signin = new SignIn(page);
  await signin.login();
  await ai.act("Click on profile icon at top right of the page",{page,test});
  await ai.act("Click on 'Settings' menu option in the drop down from the profile icon at top right",{page,test});
  await ai.verify("User profile page should be displayed",{page,test});
});