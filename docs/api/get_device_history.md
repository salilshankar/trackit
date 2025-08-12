title: GET /api/device-history/{email}
description: Retrieve device history for a user by email. This endpoint proxies the request to a local device-history TCP service and returns its JSON response.

Overview
This endpoint fetches device history for a given user email. It acts as a thin proxy: the server opens a raw TCP socket to a local device-history service (localhost:9002), sends the email, waits for a JSON response (up to 4096 bytes), and returns that JSON to the client. If the local service is unavailable or an error occurs, a 500 error is returned.

HTTP method
- GET

Endpoint
- /api/device-history/{email}

Function
- get_device_history

Path parameters
- email (string, required): The user’s email address to query. URL-encode reserved characters (e.g., @ as %40).

Request body
- None

Response
- Content type: application/json
- Success (200): The JSON body is passed through from the device-history service. The structure depends on that upstream service.
- Error (500): Returns a JSON error object:
  - error (string): Always "device-history-service unavailable" when the upstream service cannot be reached or an error occurs.

Status codes
- 200 OK: Successfully retrieved JSON from the device-history service.
- 500 Internal Server Error: The device-history service is unavailable or an internal error occurred while contacting it.
  - Body: {"error":"device-history-service unavailable"}

Sample curl
    curl -sS -X GET 'https://your-api-host.example.com/api/device-history/user%40example.com' \
      -H 'Accept: application/json'

Notes and limitations
- Backend dependency: Requires a local TCP service running on localhost:9002 that accepts a UTF-8–encoded email and returns a JSON document.
- Payload size: The implementation reads a single TCP frame of up to 4096 bytes; larger responses may be truncated.
- Timeouts: No explicit socket timeout is set; requests may hang if the upstream service does not respond.
- Encoding: The email is sent to the TCP service as UTF-8 bytes without additional framing or delimiters; the upstream service must handle this protocol.