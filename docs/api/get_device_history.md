---
title: Get Device History by Email
description: Retrieve a user's device history by email via a proxy to the local device-history service.
---

Overview
This endpoint retrieves device history associated with the provided email address. It acts as a thin proxy to a local device-history service over a TCP socket, forwarding the email and returning whatever JSON data the service responds with.

- The route connects to a local service at localhost:9002 over TCP.
- It sends the email string and returns the JSON response from that service.
- If the local service is unavailable or an error occurs, a 500 error is returned.

HTTP Method
- GET

Endpoint
- /api/device-history/{email}

Function
- get_device_history

Path Parameters
- email (string): The user's email address. Ensure it is URL-encoded when used in the path (for example, user%40example.com).

Request Body
- None

Response
- Success: JSON payload returned directly from the device-history service. The exact schema is determined by that service and is transparently passed through (it may be an object or an array).
- Error: JSON object with an error message if the backend service is unavailable:
  - error (string): "device-history-service unavailable"

Status Codes
- 200 OK: The device-history service returned a JSON response successfully.
- 500 Internal Server Error: The device-history service could not be reached or an unexpected error occurred.

Sample curl
curl -X GET "https://your-domain.example.com/api/device-history/user%40example.com" \
  -H "Accept: application/json"

Notes and Limitations
- Backend dependency: This route relies on a local TCP service at localhost:9002 being available.
- Payload size: The implementation reads up to 4096 bytes from the backend response. Very large responses may be truncated if they exceed this size.