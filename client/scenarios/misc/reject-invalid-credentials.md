---
type: scenario
id: TS-114
title: invalid credentials should be rejected test
story: US-106
labels: ["negative path"]
created_date: 2026-02-20
priority: high
---

## Prerequisites
- The user has access to a device with internet connectivity.
- The user is on the login page of the application at the URL: https://cafetime-demo.web.app/.
- The user has a valid account with the application for reference, including a username and password.

## Test Steps
- Open a web browser and navigate to the URL: https://cafetime-demo.web.app/.
- Locate the login form on the page.
- Enter an invalid username (e.g., "invalidUser").
- Enter an invalid password (e.g., "wrongPassword123").
- Click the "Login" button to submit the credentials.
- Observe the response from the application.

## Expected Behaviour
- The application should display an error message indicating that the login attempt was unsuccessful due to invalid credentials.
- The user should remain on the login page and not be redirected to any other page.
- The input fields for the username and password should be cleared or remain filled with the invalid credentials entered by the user, depending on the application's design.

