---
type: scenario
id: TS-108
title: user can mark as unavailable for whole day
story: US-104
labels: ["sprint 2"]
created_date: 2026-02-20
priority: high
---

## Prerequisites
- User must have a valid account and be logged into the Cafetime application.
- User has an existing schedule with available time slots for selection.
- User has access to the functionality for marking availability.

## Test Steps
- Navigate to the Cafetime application at the initial URL: https://cafetime-demo.web.app/.
- Log in using valid credentials (e.g., Username: user@example.com, Password: password123).
- Once logged in, locate the schedule or availability section of the application.
- Select a day from the calendar that the user wishes to mark as unavailable (e.g., select April 10, 2023).
- Click on the "Mark as Unavailable" button or equivalent action for the selected day.
- Confirm the action in any prompted dialog (if applicable) by clicking "Yes" or "Confirm".
- Refresh the schedule view or navigate to another date and return to the selected date (April 10, 2023) to verify the change.

## Expected Behaviour
- After completing the steps, the selected day (April 10, 2023) should be visually marked as unavailable in the schedule.
- Other users (if applicable) should see the user as unavailable for the entire day on April 10, 2023.
- The application should display a confirmation message indicating that the day has been successfully marked as unavailable.
- The unavailability should persist through refreshes and navigation within the schedule.

