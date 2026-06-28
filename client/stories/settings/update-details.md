---
type: story
id: US-102
title: users should be able to update name and phone number
labels: ["sprint 1"]
created_date: 2026-02-20
priority: medium
---

## Summary  
Users should have the capability to update their name and phone number within their profile settings to ensure that their personal information remains current and accurate. This functionality will enhance user experience by allowing them to maintain their account without needing to contact support for such updates.

## Functional Requirements  
- The system shall provide a user interface for updating the name and phone number fields within the user profile.
- Users shall be required to authenticate (e.g., log in) before accessing the update functionality.
- The name field shall accept a first name and a last name, with a maximum limit of 50 characters for each.
- The phone number field shall accept valid phone numbers following the specific formatting rules (e.g., including country code).
- The system shall validate the format of the phone number entered by the user.
- Users shall receive a confirmation message upon successfully updating their information.
- The system shall save changes to the database immediately after the user submits the updated information.
- If validation fails, the system shall inform users of the specific errors (e.g., invalid format) and allow them to correct the input.

## Non Functional Requirements  
- Performance: The update process should not take longer than 2 seconds to complete after the user submits their changes.
- Usability: The interface for updating information should be intuitive and user-friendly, requiring minimal effort for completion.
- Security: All data must be transmitted securely (e.g., via HTTPS) to protect user privacy.
- Accessibility: The update feature should meet accessibility standards to accommodate users with disabilities.

## User Acceptance Criteria  
- Given a logged-in user, when they navigate to the profile settings page, then they should see the fields for updating their name and phone number.
- Given a user enters valid name and phone number information, when they submit the changes, then they should see a success message confirming the updates.
- Given a user enters an invalid phone number format, when they submit the changes, then they should see an error message indicating the phone number is invalid.
- Given a user leaves required fields empty, when they attempt to update their information, then they should receive a notification prompting them to complete all required fields before submitting.
- Given a user updates their information, when they log out and log back in, then their updated name and phone number should be displayed accurately in their profile.

