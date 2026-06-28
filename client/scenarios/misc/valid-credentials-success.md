---
type: scenario
id: TS-115
title: valid credentials should allow users to login
story: US-106
labels: ["happy path"]
created_date: 2026-02-20
priority: high
---

## Prerequisites
- User must have a valid account with a username and password.
- User should have access to the application at the URL: https://cafetime-demo.web.app/.
- User should be on the login page of the application.

## Test Steps
- Navigate to the URL: https://cafetime-demo.web.app/.
- Wait for the page to load completely.
- Locate the username input field and enter a valid username (e.g., "testuser").
- Locate the password input field and enter a valid password (e.g., "password123").
- Click on the "Login" button.
- Observe the application’s response after submitting the credentials.

## Expected Behaviour
- The application should authenticate the user.
- The user should be redirected to the dashboard or homepage of the application.
- A welcome message or the user’s name should be displayed on the dashboard, indicating a successful login.
- No error messages should be visible on the screen, confirming the credentials were accepted.

