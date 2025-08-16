title: GET / — Serve the index page
description: Returns the application’s main HTML page from app/static/index.html.

Overview
This endpoint serves the main HTML page for the application by returning the index.html file from the app/static directory. It is typically used as the entry point for a web UI or single-page application.

- Function: serve_index
- Serves: app/static/index.html

HTTP Method(s)
- GET

Endpoint
- Path: /

Path Parameters
- None

Request Body
- None

Response
- Content: The index.html file (HTML document)
- Content-Type: text/html (as served by Flask’s send_from_directory)

Status Codes
- 200 OK: Successfully returned index.html
- 404 Not Found: index.html not found in app/static
- 500 Internal Server Error: An unexpected server error occurred

Sample curl
    curl -i http://localhost:5000/