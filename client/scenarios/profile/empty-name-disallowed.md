---
type: scenario
id: TS-112
title: entering empty string as name should be disallowed
story: US-105
labels: ["edge case"]
created_date: 2026-02-20
priority: low
---

## Prerequisites
- User must have an existing account and be logged into the CafeTime application.
- User must navigate to the "Profile" or "Account Settings" page where profile information can be edited.

## Test Steps
- Step 1: On the Profile or Account Settings page, locate the "Name" input field.
- Step 2: Clear any existing text in the "Name" input field to ensure it is empty.
- Step 3: Attempt to submit the changes by clicking the "Save" or "Update Profile" button.

## Expected Behaviour
- The application should prevent the submission of the form.
- An error message should be displayed indicating that the name cannot be an empty string.
- The "Name" input field should retain focus, prompting the user to enter a valid name.

