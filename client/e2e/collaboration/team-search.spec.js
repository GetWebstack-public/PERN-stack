/** This test illustrates:
 - a file with multiple simple tests.
 - scenario annotations for linking tests to scenarios
 - ai.verify usage
 */

import { test, expect } from '@playwright/test';
import {ai} from 'ai-wright';

test('search_success', async ({ page }) => {
  // @Scenario: search team members by partial name match
  // Navigate to CafeTime homepage
  await page.goto('https://cafetime-demo.web.app/');

  /* @Screen: Login Page @State: sign in tab active */
  await page.getByRole('textbox', { name: 'Email' }).fill('alice@example.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('TestPass1233');

  await page.getByRole('button', { name: 'Sign In' }).click();

  /* @Screen: Dashboard @State: regular user, weekly view */
  await page.getByText('Team Search', { exact: true }).click();

  /* @Screen: Team Search @State: unfiltered */
  await page.locator('[placeholder="Search by name or email..."]').fill('alice');

  /* @Screen: Team Search @State: non empty search results */
  await ai.verify("Verify there is one search result",{page,test});
});

test('search_empty_results', async ({ page }) => {
  // @Scenario: search non existent users should show empty results
  await page.goto('https://cafetime-demo.web.app/');

  /* @Screen: Login Page @State: sign in tab active */
  await page.getByRole('textbox', { name: 'Email' }).fill('alice@example.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('TestPass1233');
  await page.getByRole('button', { name: 'Sign In' }).click();

  /* @Screen: Dashboard @State: regular user, weekly view */
  await page.getByText('Team Search', { exact: true }).click();

  /* @Screen: Team Search @State: unfiltered */
  await page.locator('[placeholder="Search by name or email..."]').fill('xxxxx');

  /* @Screen: Team Search @State: empty search results */
  await ai.verify("Verify there are no search results but that the page isn't broken",{page,test});
});