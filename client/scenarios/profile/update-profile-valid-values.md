---
type: scenario
id: TS-110
title: user should be able to set name, phone number with valid values
story: US-105
labels: ["happy path"]
created_date: 2026-02-20
priority: high
---

## Prerequisites
- The user must have a registered account and be logged into the Cafetime application.
- The user must navigate to the profile settings page.

## Test Steps
- Step 1: Navigate to the profile settings page by clicking on the "Profile" option in the main menu.
- Step 2: Locate the fields for updating the information:
 - Name field
 - Phone number field
- Step 3: Clear any pre-existing value in the Name field.
- Step 4: Enter a valid name in the Name field, e.g., "John Doe".
- Step 5: Clear any pre-existing value in the Phone number field.
- Step 6: Enter a valid phone number in the Phone number field, e.g., "+1234567890".
- Step 7: Click the "Save" button to submit the updated profile information.

## Expected Behaviour
- After clicking the "Save" button:
 - The application should display a success message confirming that the profile information has been updated.
 - The Name field should show "John Doe" and the Phone number field should show "+1234567890".
 - Refreshing the profile page should retain the updated name and phone number.

