---
type: scenario
id: TS-106
title: user should be able to toggle email notifications
story: US-103
labels: ["happy path"]
created_date: 2026-02-20
priority: high
---

## Prerequisites
- The user must have a registered account on the CafeTime platform.
- The user must be logged into their account on the website: https://cafetime-demo.web.app/.
- The user should have access to the account settings or preferences section.

## Test Steps
- Navigate to the account settings by clicking on the profile icon on the top right corner of the webpage.
- Select the "Notification Preferences" option from the dropdown menu.
- Locate the toggle switch for "Email Notifications."
- Verify that the current state of the toggle switch is either "On" or "Off."
- Perform the following actions:
 - If the toggle is "Off":
   - Click the toggle switch to turn it "On."
   - Confirm that a prompt appears requesting confirmation for changing the email notifications setting.
   - Confirm the change by clicking the "Yes" or "Confirm" button.
 - If the toggle is "On":
   - Click the toggle switch to turn it "Off."
   - Confirm that a prompt appears requesting confirmation for changing the email notifications setting.
   - Confirm the change by clicking the "Yes" or "Confirm" button.
- Check if a message appears confirming that the notification preferences have been successfully updated.
- Refresh the page and navigate back to the "Notification Preferences" section to verify that the toggle reflects the last chosen state (On or Off).

## Expected Behaviour
- The user should be able to successfully toggle the "Email Notifications" option to On or Off based on their action.
- A confirmation prompt should appear each time the toggle switch is clicked, regardless of the initial state.
- After confirmation, the user should receive a notification message stating that their preferences have been updated.
- Upon refreshing the page, the toggle switch should accurately reflect the last selection (On or Off) made by the user.

