---
type: scenario
id: TS-116
title: invalid email address format should give error message
story: US-106
labels: ["edge case"]
created_date: 2026-02-20
priority: low
---

## Prerequisites
- User has access to the login page at the URL: https://cafetime-demo.web.app/.
- User must be on the login form interface.
- No prior logged-in sessions should exist for the user on the demo site.

## Test Steps
- Navigate to the login page using the URL: https://cafetime-demo.web.app/.
- Locate the email input field.
- Enter an invalid email format into the email input field, for example: "invalidemail.com" or "user@.com".
- Locate the password input field.
- Enter any password, for instance: "ValidPassword123".
- Click on the "Login" button to attempt to log in.

## Expected Behaviour
- The application should not permit the login attempt due to the invalid email format.
- An error message should be displayed below the email input field, stating: "Please enter a valid email address." 
- The user should remain on the login page, and the email input field should be highlighted or marked to indicate an error.

