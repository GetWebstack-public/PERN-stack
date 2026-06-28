/**
 * Master Playwright test entry for SmartTests (TrueCoverage + shared fixtures).
 *
 * Requires @testchimp/playwright >= 0.1.1 (installTrueCoverage).
 * Add domain fixtures with mergeTests, then wrap the merged test:
 *   import { mergeTests } from '@playwright/test';
 *   import { test as auth } from './auth.fixture.js';
 *   export const test = installTrueCoverage(mergeTests(auth));
 */
import { test as playwrightTest } from '@playwright/test';
import { installTrueCoverage } from '@testchimp/playwright/runtime';

export const test = installTrueCoverage(playwrightTest);
export { expect } from '@playwright/test';
