---
type: scenario
id: TS-102
title: search team members by partial name match
story: US-101
labels: ["happy path"]
created_date: 2026-02-20
priority: high
---

## Prerequisites
- User must have access to the application at the URL: https://cafetime-demo.web.app/.
- User must be logged into the application.
- The application must have a list of team members populated in its database.
- The search functionality should be implemented and accessible on the page.

## Test Steps
- Navigate to the team members section of the application.
- Locate the search input field on the team members page.
- Enter the string "John" in the search input field.
- Press the "Enter" key or click the search button to initiate the search.
- Observe the results displayed on the page.

## Expected Behaviour
- The application should display a list of team members whose names partially match the input "John" (e.g., "John Smith", "Johnny Bravo", etc.).
- If no team members match the search string, a message indicating "No results found" should be displayed.
- The search results should update promptly to reflect the matching team members.

