---
title: GET / — Serve index.html
description: Serves the main index.html file from app/static as the application’s homepage.
---

Overview
This route delivers the application’s main HTML page. It serves the static file app/static/index.html using Flask’s send_from_directory, making it ideal as the landing page or entry point for a single-page application (SPA).

- Function: serve_index
- Behavior: Returns the contents of app/static/index.html
- Content type: text/html

HTTP Method(s)
- GET

Endpoint
- Path: /

Function Name
- serve_index

Path Parameters
- None

Request Body
- None

Response
- Body: HTML content of app/static/index.html
- Content-Type: text/html

Status Codes
- 200 OK: index.html was found and returned.
- 404 Not Found: index.html does not exist at app/static/index.html.
- 500 Internal Server Error: An unexpected server error occurred while serving the file.

Sample curl
  curl -i http://localhost:5000/