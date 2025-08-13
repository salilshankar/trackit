title: GET / — Serve index.html
description: Returns the main HTML page (index.html) from the app/static directory, typically the entry point for a web UI or SPA.

Overview
This route serves the root of the application by returning the index.html file from the app/static directory. It’s commonly used to deliver the entry point of a web interface (e.g., a single-page application) when users visit the site’s root URL.

- Implementation detail: The route uses Flask’s send_from_directory to locate and send app/static/index.html.

HTTP Method(s)
- GET

Endpoint Path
- /

Function Name
- serve_index

Path Parameters
- None

Request Body
- None

Response
- Media type: text/html
- Body: The contents of app/static/index.html

Status Codes
- 200 OK: index.html was found and returned successfully.
- 404 Not Found: index.html does not exist in app/static.
- 500 Internal Server Error: An unexpected server error occurred while serving the file.

Sample curl Request
curl -i -X GET http://localhost:5000/ -H "Accept: text/html"