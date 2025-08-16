title: GET /api/device-history/{email}
description: Retrieve a user’s device history by email. Acts as a thin proxy to an internal device-history service and returns its JSON response.

Overview
This endpoint retrieves the device history associated with a given user email. It forwards the email to an internal device-history service over a local TCP connection and returns whatever JSON that service responds with. Use this route to look up historical device information for a specific user.

- Proxies request to internal service at localhost:9002
- Returns the JSON payload from that service unchanged

HTTP method
- GET

Endpoint
- /api/device-history/{email}

Function
- get_device_history

Path parameters
- email (string, required): The user’s email address. Must be URL-encoded for safe inclusion in the path (for example, use %40 for @).

Request body
- None

Response
- 200 OK: JSON object or array as returned by the device-history service. The schema is determined by that service and is not transformed by this API.
- 500 Internal Server Error: JSON error object if the device-history service is unavailable.
  - error (string): A message describing the error. Value: "device-history-service unavailable"

Status codes
- 200 — Successful retrieval of device history
- 500 — Device-history service unavailable or failed

Notes
- Content-Type: application/json
- The response schema is pass-through from the internal device-history service and may change based on that service.
- The email path value must be URL-encoded (e.g., jane.doe%40example.com).
- Implementation detail: the current implementation reads up to 4096 bytes from the internal service in a single read. Very large responses from the internal service could be truncated.

Sample curl
    curl -X GET "https://api.example.com/api/device-history/jane.doe%40example.com" \
      -H "Accept: application/json"