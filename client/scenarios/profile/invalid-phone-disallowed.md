---
type: scenario
id: TS-111
title: entering invalid phone numbers should be disallowed
story: US-105
labels: ["negative path"]
created_date: 2026-02-20
priority: high
---

## Prerequisites
- User must have a valid account on the platform and be logged in to their profile.
- The profile page must be accessible, and the user must navigate to the profile update section.
- Ensure that the input fields for phone numbers are visible and editable.

## Test Steps
- Navigate to the profile update section of the application.
- Locate the phone number input field.
- Input an invalid phone number format (e.g., "12345", "abcdefghij", "+12345abc", "111-222-3333").
- Attempt to save the profile information by clicking the "Update" button.
- Observe the response of the application after attempting to save each invalid phone number.

## Expected Behaviour
- The application should display an error message indicating that the phone number format is invalid for each attempted input.
- The profile should not be updated, and the invalid phone number should not be saved.
- The input field should remain highlighted or provide visual feedback indicating an error.

