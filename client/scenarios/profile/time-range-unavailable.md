---
type: scenario
id: TS-109
title: user should be able to specify a time range for unavailability
story: US-104
labels: ["sprint 3"]
created_date: 2026-02-20
priority: medium
---

## Prerequisites
- The user must have a registered account on the platform.
- The user must be logged in to their account.
- The user should have previously set an availability schedule.
- The user must have the necessary permissions to update their unavailability.

## Test Steps
- Navigate to the homepage by entering the URL: https://cafetime-demo.web.app/.
- Click on the "Profile" icon located in the top right corner of the page.
- Select the "Availability" option from the dropdown menu.
- Click on the "Update Unavailability" button.
- In the unavailability time range input fields:
 - Select a start date using the date picker (e.g., choose "2023-11-01").
 - Select a start time (e.g., choose "10:00 AM").
 - Select an end date using the date picker (e.g., choose "2023-11-01").
 - Select an end time (e.g., choose "02:00 PM").
- Click on the "Save" button to confirm the changes.
- Log out of the account.
- Log back in to the account.
- Repeat the process to view or confirm the set unavailability.

## Expected Behaviour
- The user should be able to successfully navigate to the unavailability section without any errors.
- Upon selecting the dates and times, the user should see the selected time range clearly displayed in the input fields.
- After clicking the "Save" button, a confirmation message should appear indicating that the unavailability has been updated.
- On logging back in, the user should see the updated unavailability time range reflected accurately in their profile.
- The unavailability period should not overlap with any existing availability times set by the user.

