---
type: scenario
id: TS-107
title: user should be able to toggle sms notifications
story: US-103
labels: ["happy path"]
created_date: 2026-02-20
priority: high
---

## Prerequisites
- User must have an active account on the Cafetime platform.
- User must be logged into their account before performing the test.
- User must have access to the notifications settings page within the application.

## Test Steps
- Navigate to the Cafetime home page by entering the URL: https://cafetime-demo.web.app/.
- Click on the profile icon located at the top right corner of the page to access user settings.
- Select "Notification Preferences" from the dropdown menu.
- Locate the "SMS Notifications" option on the Notification Preferences page.
- Verify the current state of the SMS Notifications toggle (on/off).
- If SMS Notifications are currently OFF, toggle the switch to ON. 
 - Input: Set switch to ON.
 - Observe if a confirmation message appears indicating that SMS notifications have been enabled.
- If SMS Notifications are currently ON, toggle the switch to OFF.
 - Input: Set switch to OFF.
 - Observe if a confirmation message appears indicating that SMS notifications have been disabled.
- Refresh the Notification Preferences page to ensure the new setting persists.
- Recheck the SMS Notifications toggle to confirm it reflects the most recent change.

## Expected Behaviour
- The SMS Notifications toggle should reflect the state prior to toggling (ON/OFF).
- Upon toggling, an appropriate confirmation message should appear indicating that the SMS notification preference has been successfully updated.
- After refreshing the Notification Preferences page, the SMS Notifications toggle should still display the most recent setting accurately.

