# 0.6 - New Note in SPA Diagram

This diagram shows what happens when a user adds a new note in the **SPA (Single Page App)** version of the application.

1. The user types a note and clicks the "Save" button in the browser.

2. JavaScript running in the browser intercepts the action and sends a POST request using `fetch()`:
POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

3. The request contains the new note's content in the body as JSON:
```json
{
  "content": "This is a new note",
  "date": "2025-07-07T10:00:00.000Z"
}
The server saves the note and responds with a confirmation (usually 201 Created or 200 OK).

JavaScript receives the response and immediately updates the UI by:

Adding the new note to the list

Rendering it in the DOM without reloading the page

 The user sees the new note instantly. No full page reload happens. The interaction is seamless, fast, and fully handled by JavaScript.
 