---
type: scenario
id: TS-100
title: Sending a non empty message should succeed
story: US-100
labels: ["happy path"]
created_date: 2026-02-20
priority: high
---

## Prerequisites
- User must be registered and logged in to the application.
- User should have at least one team member available in the contacts list.
- The messaging interface should be accessible from the main dashboard.

## Test Steps
- Navigate to the messaging interface by clicking on the "Messages" tab from the main dashboard.
- Select a team member from the contacts list by clicking on their name.
- In the message input field, enter the text "Hello, how are you?".
- Click the "Send" button to transmit the message.
- Observe the messaging interface for confirmation of the sent message.

## Expected Behaviour
- The message "Hello, how are you?" should appear in the chat history with a timestamp.
- A confirmation notification should show indicating that the message was sent successfully.
- The recipient should receive the message in their messaging interface without any errors.

