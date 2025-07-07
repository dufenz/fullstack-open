# 0.4 - New Note Diagram

This diagram describes what happens when a user creates a new note on the app.

1. The user fills the note input field in the browser and clicks "Save".
2. Browser sends an **HTTP POST** request to the server:
POST https://studies.cs.helsinki.fi/exampleapp/new_note
3. The server saves the new note and responds with:
HTTP 302 Redirect to /exampleapp/notes
4. The browser follows the redirect and sends:
GET https://studies.cs.helsinki.fi/exampleapp/notes
5. The server returns the updated HTML page.

6. Browser also sends:
GET main.js

7. Server returns the JavaScript file `main.js`, which is executed.

8. JavaScript sends another request:
GET data.json
9. Server responds with JSON containing all notes.
✅ The new note is now visible on the page along with the previous ones.
