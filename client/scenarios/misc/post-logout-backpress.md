---
type: scenario
id: TS-118
title: after logging out, going back should not show logged-in experience
story: US-106
labels: ["edge case"]
created_date: 2026-02-20
priority: medium
---

## Prerequisites
- User must have valid login credentials (username and password).
- User must be logged into the application successfully.
- User must log out before performing the test.

## Test Steps
- Navigate to the initial URL: `https://cafetime-demo.web.app/`.
- Verify that the login screen is displayed.
- Enter valid login credentials:
 - Username: `testuser`
 - Password: `password123`
- Click on the "Login" button.
- Confirm successful login by checking that the user is directed to the home/dashboard page.
- Click on the "Logout" button to log out of the application.
- After logging out, in the web browser, click the back button to navigate to the previous page (the home/dashboard).
- Observe the displayed content after clicking the back button.

## Expected Behaviour
- After logging out and clicking the back button, the user should not see the home/dashboard page.
- Instead, the user should be redirected back to the login screen.
- There should be no indication that the user is logged in (e.g., no user profile name or other logged-in features should be visible).

