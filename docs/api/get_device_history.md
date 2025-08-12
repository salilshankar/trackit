title: Get device history by email
description: Retrieve a user’s device history by email. Proxies the request to a local device-history service and returns its JSON response.

Overview
This endpoint fetches device history associated with a given email address. It acts as a thin proxy to an internal device-history service over a TCP socket (localhost:9002). The email is forwarded to that service, and whatever JSON it returns is passed back to the client.

Details
- HTTP method: GET
- Endpoint: /api/device-history/{email}
- Function: get_device_history
- Content type: application/json

Path parameters
- email (string, required): The user’s email address. URL-encode as needed when used in the path (for example, alice%40example.com).

Request body
- None.

Response
- Success: Returns JSON exactly as provided by the device-history service. The schema is not enforced by this API and may vary depending on the upstream service.
- Error: Returns a JSON object on failure.
  - error (string): A message indicating the upstream service is unavailable. Example: {"error":"device-history-service unavailable"}

Status codes
- 200 OK: The upstream device-history service responded and its JSON payload was returned.
- 500 Internal Server Error: The upstream device-history service was unavailable or a connection error occurred.

Notes
- This endpoint proxies to a local TCP service at localhost:9002.
- Current implementation reads up to 4096 bytes from the upstream response. Very large payloads may be truncated.

Sample curl
curl -X GET 'https://your-server.example.com/api/device-history/alice%40example.com' -H 'Accept: application/json'