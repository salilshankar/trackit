---
title: GET /
description: Serve the main index.html file for the application from the static directory.
---

Overview
This route serves the main HTML entry point for the application. It returns the index.html file located in the app/static directory, typically used to render the frontend (for example, a single-page application).

- Serves: app/static/index.html
- Content type: text/html

HTTP Method(s)
- GET

Endpoint
- Path: /

Function
- Name: serve_index

Path Parameters
- None

Query Parameters
- None

Request Body
- None

Response
- Body: The contents of app/static/index.html
- Content-Type: text/html; charset=utf-8

Status Codes
- 200 OK — index.html was found and returned.
- 304 Not Modified — When applicable, if the client sends conditional headers and the file hasn't changed.
- 404 Not Found — If app/static/index.html does not exist.
- 500 Internal Server Error — If an unexpected server error occurs while serving the file.

Sample curl Request
curl -i \
  -H "Accept: text/html" \
  http://localhost:5000/