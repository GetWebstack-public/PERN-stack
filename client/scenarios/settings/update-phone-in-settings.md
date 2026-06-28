---
type: scenario
id: TS-105
title: user should be able to update phone number with valid value
story: US-102
created_date: 2026-02-20
priority: medium
---

## Prerequisites
- The user should have an existing account with a name and phone number already set.
- The user is logged into the application at "https://cafetime-demo.web.app/".
- The user has access to the profile or settings page where the name and phone number can be updated.

## Test Steps
- Navigate to the profile or settings page.
- Locate the name and phone number fields in the form.
- Clear the existing phone number and enter a new phone number, for example, "123-456-7890".
- Click on the "Save" or "Update" button to submit the changes.
- Wait for the confirmation message to appear indicating the profile has been successfully updated.
- Refresh the page or navigate away and then return to the profile page to verify the changes.

## Expected Behaviour
- The form should allow the user to successfully input a new name and a new phone number.
- Upon clicking "Save", a confirmation message should appear, indicating that the updates have been saved successfully.
- The profile page should reflect the updated name ("John Doe") and phone number ("123-456-7890") after refreshing or returning to the page.
- The application should not display any errors or invalid input warnings during the update process.
