---
title: GET /
description: Serves the main index.html file from app/static using Flask’s send_from_directory.
---

Overview
This endpoint returns the application’s main HTML page. It serves the static file app/static/index.html, typically used as the entry point for a web app or single-page application (SPA).

- HTTP method(s): GET
- Endpoint path: /
- Function name: serve_index

Path parameters
- None

Request body
- None

Response
- Media type: text/html; charset=utf-8 (determined by file extension)
- Body: Contents of app/static/index.html
- Response fields: None (raw HTML document)

Status codes
- 200 OK: The index.html file was found and returned.
- 404 Not Found: The index.html file does not exist at app/static/index.html.
- 405 Method Not Allowed: A non-GET method was used.
- 500 Internal Server Error: An unexpected error occurred while serving the file.
- 304 Not Modified: May be returned if the client sends conditional headers and the file has not changed.

Sample curl request
- curl -i http://localhost:5000/