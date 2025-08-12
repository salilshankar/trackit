---
title: GET / — Serve the application index
description: Returns the main HTML entry point (index.html) from app/static using Flask’s send_from_directory.
---

Overview
This route serves the main index.html file for the web application. It is typically used as the entry point for a client-side app (e.g., a Single Page Application). The file is read from the app/static directory and returned as an HTML response.

- Served file: app/static/index.html
- Implementation: Flask send_from_directory

HTTP Method(s)
- GET

Endpoint Path
- /

Function
- serve_index

Path Parameters
- None

Request Body
- None

Response
- Body: Contents of app/static/index.html
- Content-Type: text/html; charset=utf-8 (inferred from file type)

Status Codes
- 200 OK — index.html was found and returned successfully.
- 404 Not Found — index.html does not exist in app/static.
- 500 Internal Server Error — An unexpected error occurred while attempting to serve the file.

Sample curl
    curl -i -X GET http://localhost:5000/ -H "Accept: text/html"