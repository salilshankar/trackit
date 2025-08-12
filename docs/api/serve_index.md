title: GET / — Serve index.html
description: Serves the application’s root HTML file (index.html) from the app/static directory.

Overview
This route serves the main HTML page of the application. When a client accesses the root path (/), the server responds with the index.html file located in app/static. This is commonly used to deliver the entry point for a single-page application (SPA) or the main landing page.

- Function: serve_index
- Implementation detail: Internally uses Flask’s send_from_directory to return app/static/index.html.

HTTP Method(s)
- GET

Endpoint
- Path: /

Path Parameters
- None

Query Parameters
- None

Request Body
- None

Response
- Content: The contents of app/static/index.html
- Content-Type: text/html; charset=utf-8 (typical)

Status Codes
- 200 OK: index.html was found and returned successfully.
- 404 Not Found: index.html could not be found at app/static/index.html.
- 500 Internal Server Error: An unexpected server error occurred while attempting to serve the file.

Sample curl Request
    curl -i http://localhost:5000/

Notes
- The served file must exist at app/static/index.html relative to the application root.
- If you are deploying behind a proxy or serving a frontend build, ensure the index.html and related assets are present in app/static.