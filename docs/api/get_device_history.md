---
title: Get Device History by Email
description: Retrieves a user's device history by email, proxying the request to the device-history service and returning its JSON response.
---

Overview
This endpoint fetches device history associated with a given user email. It acts as a thin proxy to an internal device-history service running on localhost:9002, returning that service’s JSON response directly to the client.

HTTP Method
- GET

Endpoint
- /api/device-history/{email}

Function
- get_device_history

Path Parameters
- email (string, required): The user's email address. Must be URL-encoded when included in the path (for example, user%40example.com).

Request Body
- None

Response
- Success (200): Pass-through JSON from the device-history service. The structure is not modified by this endpoint and may be an object or array, depending on the upstream service.
- Error (500): JSON object with an error message when the device-history service is unavailable.
  - error (string): A description of the error. Example: "device-history-service unavailable"

Status Codes
- 200 OK: Device history retrieved successfully.
- 500 Internal Server Error: The device-history service could not be reached or returned an invalid response.

Notes
- The response body is forwarded from the device-history service without modification.
- Only the first 4096 bytes of the upstream response are read; larger responses may be truncated.
- Response Content-Type: application/json

Sample curl
curl -X GET "https://your-api.example.com/api/device-history/user%40example.com" \
  -H "Accept: application/json"