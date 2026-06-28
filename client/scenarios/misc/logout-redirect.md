---
type: scenario
id: TS-117
title: logging out should redirect user to signin page
story: US-106
labels: ["sprint 2"]
created_date: 2026-02-20
priority: medium
---

## Prerequisites
- User account with a valid username and password.
- Access to the login page at the initial URL: https://cafetime-demo.web.app/.
- A session started after successfully logging in.

## Test Steps
- Navigate to the login page by entering the URL: https://cafetime-demo.web.app/.
- Enter valid credentials in the login form:
 - Username: `testuser`
 - Password: `password123`
- Click on the "Login" button.
- Verify that the user is successfully logged in and redirected to the home or dashboard page.
- Locate and click on the "Logout" button.
- Observe the redirection after logging out.

## Expected Behaviour
- After clicking the "Logout" button, the user should be redirected to the sign-in page.
- The URL should change to: https://cafetime-demo.web.app/signin.
- The login form should be displayed, indicating that the user needs to enter credentials to access the application again.

