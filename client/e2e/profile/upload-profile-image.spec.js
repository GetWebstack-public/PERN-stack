/**
 * This test demonstrates usage of assets/ for actions that require file uploads.
 */

import { test, expect } from '@playwright/test';
import { ai } from 'ai-wright';


test('uploadProfileImage_success', async ({ page }) => {
  // Navigate to the CafeTime homepage
  await page.goto(`https://cafetime-demo.web.app/`);
  
  // Fill in the email field
  await page.getByTestId(`input-email`).click();
  await page.getByTestId(`input-email`).fill(`alice@example.com`);

  // Fill in the password field
  await page.getByTestId(`input-pass`).fill(`TestPass123`);

  // Click on the login button
  await page.getByTestId(`cta-login`).click();

  // Navigate to 'My Profile'
  await page.getByRole(`link`, { name: `My Profile` }).click();

  // Click on the 'Update image' button
  await page.getByRole(`button`, { name: `Update image` }).click();

  // Upload the profile image. NOTE: Folder path is resolved relative to tests root folder.
  await page.locator(`#avatar-upload`).setInputFiles(["assets/profile_pic.png"]);

  await ai.verify("No error messages",{page,test});
});