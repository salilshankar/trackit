title: Get Device History by Email
description: Retrieve device history associated with a given email. Proxies the request to an internal device-history service and returns its JSON response.

Overview
This endpoint returns the device history associated with a specific email address. It acts as a thin proxy: the email is forwarded to an internal device-history service over a TCP socket, and the service’s JSON response is returned to the caller.

- The response structure is determined by the downstream device-history service and is returned as-is.
- On failure to contact the downstream service, a JSON error with HTTP 500 is returned.

HTTP Method
- GET

Endpoint
- /api/device-history/{email}

Function
- get_device_history

Path Parameters
- email (string, required): The email address to look up. Must be URL-encoded when used in the path (e.g., user@example.com → user%40example.com).

Request Body
- None

Response
- Content-Type: application/json

Because this endpoint proxies to a downstream service, the successful response fields are not fixed and may vary. The JSON returned by the downstream service (object or array) is relayed unchanged.

Errors
- 500 Internal Server Error
  - Body: {"error": "device-history-service unavailable"}

Status Codes
- 200 OK: Successfully retrieved and returned the downstream service’s JSON.
- 500 Internal Server Error: The device-history service could not be contacted or returned invalid data.

Sample curl
curl -X GET "https://your-api.example.com/api/device-history/user%40example.com" -H "Accept: application/json"

Notes
- The downstream service is contacted over TCP at localhost:9002. If it is unavailable, the endpoint returns a 500 error as shown above.
- The current implementation reads up to 4096 bytes from the downstream service; extremely large responses may not be fully returned.