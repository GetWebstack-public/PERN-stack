---
type: scenario
id: TS-104
title: user should be able to update name with valid value
story: US-102
created_date: 2026-02-20
priority: medium
---

## Prerequisites
- User must have an active account on the CafeTime application.
- User must be logged into their account.
- User must be on the profile or settings page where the name and phone number can be updated.

## Test Steps
- Navigate to the profile or settings page of the CafeTime application.
- Locate the "Name" input field.
- Clear any existing value in the "Name" input field.
- Enter the valid name "John Doe" in the "Name" input field.
- Locate the "Save" or "Update" button on the page.
- Click the "Save" or "Update" button to submit the changes.
- Observe any success message or notification that appears after the update.

## Expected Behaviour
- The name "John Doe" should be successfully saved.
- A success message should be displayed, indicating that the name has been updated.
- The "Name" input field should show "John Doe" as the current value after the update.
- No error messages should be present on the page after the update is completed.

