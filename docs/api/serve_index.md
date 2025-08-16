---
title: GET / (Serve Index)
description: Serves the main index.html file from the app/static directory, typically the entry point for a web UI or SPA.
---

Overview
This route serves the frontend entrypoint for the application. When a client requests the root path (/), the server returns the index.html file located in app/static. This is commonly used to deliver a single-page application (SPA) shell or a static homepage.

- HTTP Method(s): GET
- Endpoint Path: /
- Function Name: serve_index

Path Parameters
- None

Request Body
- None

Response
- Content Type: text/html
- Body: The contents of app/static/index.html

Status Codes
- 200 OK: index.html was found and returned successfully.
- 404 Not Found: index.html does not exist in app/static.
- 500 Internal Server Error: An unexpected error occurred while serving the file.

Example Request (curl)
    curl -i http://localhost:5000/