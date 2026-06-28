---
type: scenario
id: TS-103
title: search non existent users should show empty results
story: US-101
labels: ["negative path"]
created_date: 2026-02-20
priority: medium
---

## Prerequisites
- Access to the application at the URL: [https://cafetime-demo.web.app/](https://cafetime-demo.web.app/)
- Ensure the application is up and running without any errors.
- User is logged in to the application, if authentication is required.

## Test Steps
- Navigate to the home page of the application.
- Locate the search bar designated for searching team members.
- Input a non-existent team member's name. For example, enter "John Doe" or any random name that does not correspond to any team member.
- Click the search button or press "Enter" to initiate the search.
- Observe the results displayed on the screen.

## Expected Behaviour
- The application should return an empty results display, indicating that no team members were found with the entered name.
- A message should be shown, such as "No team members found" to clearly communicate that the search yielded no results.
- The search bar should remain populated with the non-existent name that was searched.

