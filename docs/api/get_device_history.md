title: GET /api/device-history/{email}
description: Retrieve device history for a user by email. Proxies to an internal device-history service and returns its JSON response.

Overview
This endpoint returns the device history associated with a given user email. The route acts as a thin proxy: it opens a TCP connection to an internal device-history service running on localhost:9002, sends the email address, receives a JSON response, and returns that JSON to the client. If the internal service is unavailable or returns invalid JSON, a 500 error is returned.

- Content type: application/json
- Authentication: Not specified

HTTP Method
- GET

Endpoint
- /api/device-history/{email}

Function
- get_device_history

Path Parameters
- email (string): The user’s email address. Must be URL-encoded when included in the path (e.g., alice%40example.com).

Request Body
- None

Response
- Success (200): Pass-through JSON returned by the internal device-history service. Shape is not defined here and may be an object or an array, depending on the service response.
- Error (500): JSON object indicating the downstream service is unavailable.
  - error (string): Describes the error. Value: "device-history-service unavailable"

Status Codes
- 200 OK: Device history retrieved successfully.
- 500 Internal Server Error: The internal device-history service could not be reached or returned invalid data.

Notes
- Ensure the email in the path is URL-encoded.
- The response is directly relayed from the internal service. If that service changes its contract, the output here will change accordingly.

Sample Request (cURL)
curl -X GET "http://localhost:5000/api/device-history/alice%40example.com" -H "Accept: application/json"