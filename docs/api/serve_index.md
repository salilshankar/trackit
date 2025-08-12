title: GET /
description: Serves the application’s main HTML page (index.html) from the app/static directory using Flask’s send_from_directory.

Overview
This endpoint returns the main HTML file for the application. It serves app/static/index.html as a static asset, which is typically used as the entry point for a web UI or single-page application (SPA).

Endpoint
- Method: GET
- Path: /
- Function: serve_index

Path parameters
- None

Query parameters
- None

Request body
- None

Response
- Body: Contents of app/static/index.html
- Content-Type: text/html; charset=utf-8 (typical)

Status codes
- 200 OK: index.html served successfully.
- 304 Not Modified: Returned when client-side caching validators (e.g., If-None-Match/ETag) indicate the resource hasn’t changed.
- 404 Not Found: index.html not present in app/static.
- 500 Internal Server Error: An unexpected error occurred while serving the file.

Sample curl
    curl -i https://your-domain.example/

Notes
- This route uses Flask’s send_from_directory to serve a static file. Ensure app/static/index.html exists in your deployment.