---
type: scenario
id: TS-101
title: UI should disallow sending empty messages
story: US-100
labels: ["negative path"]
created_date: 2026-02-01
priority: medium
---

## Prerequisites
- User has an active account and is logged into the application.
- User is on the messaging interface of the application.

## Test Steps
- Navigate to the messaging interface on the application.
- Identify the message input field.
- Leave the message input field empty.
- Click on the "Send" button.

## Expected Behaviour
- The application should display an error message.
- The "Send" button should remain disabled.
