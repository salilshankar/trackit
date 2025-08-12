title: GET /api/device-history/{email}
description: Retrieve a user's device history by email. Proxies the request to a local device-history service and returns its JSON response unchanged.

Overview
This endpoint fetches device history data associated with a given user email. It acts as a lightweight proxy to an internal device-history service running on localhost:9002. The email is sent to that service over a TCP socket, and the JSON it returns is forwarded directly to the client.

If the underlying service is unavailable or an error occurs during the socket call, the endpoint returns a 500 status with a JSON error message.

- HTTP method: GET
- Endpoint: /api/device-history/{email}
- Function: get_device_history
- Content type (response): application/json

Path parameters
- email (string, required): The user’s email address. Must be URL-encoded when used in the path (for example, user@example.com becomes user%40example.com).

Request body
- None.

Responses
- 200 OK
  - Body: JSON returned by the device-history service. The shape of this JSON is not modified by this endpoint and may be an object or array.
- 500 Internal Server Error
  - Body: JSON object with the following field:
    - error (string): Set to "device-history-service unavailable".

Status codes
- 200 — Successful retrieval of device history.
- 500 — The internal device-history service could not be reached or an unexpected error occurred.

Notes and limitations
- The response body is passed through unchanged from the internal device-history service.
- The current implementation reads up to 4096 bytes from the internal service. Very large responses may be truncated.
- Ensure the email path segment is URL-encoded.

Example curl request
curl -X GET "https://your-domain.example.com/api/device-history/user%40example.com" -H "Accept: application/json"