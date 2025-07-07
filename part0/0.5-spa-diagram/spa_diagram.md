# 0.5 - Single Page App Diagram

This diagram explains what happens when a user loads the Single Page App version of the notes application.

1. The user opens the SPA version of the app in their browser:
GET https://studies.cs.helsinki.fi/exampleapp/spa
2. The server responds with a minimal **HTML page** that includes a link to a JavaScript file:
```html
<script src="main.js"></script>
Browser then sends a request:
GET https://studies.cs.helsinki.fi/exampleapp/main.js
The server returns the JavaScript file main.js.

This JS file runs in the browser and makes another request for the notes data:
GET https://studies.cs.helsinki.fi/exampleapp/data.json
The server responds with a JSON array of notes.

The JavaScript uses this JSON data to render all notes dynamically on the page.
 From this point, no full page reloads are needed. All user interactions (e.g., adding a new note) happen via JavaScript, making the app fast and responsive.