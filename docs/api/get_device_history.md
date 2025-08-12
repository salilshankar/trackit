title: GET /api/device-history/{email}
description: Retrieve a user’s device history by email. This endpoint proxies to an internal device-history service and returns that service’s JSON response.

# GET /api/device-history/{email}

## Overview
Fetch the device history for a user identified by their email address. This endpoint acts as a thin proxy to an internal device-history service and returns whatever JSON payload that service provides. If the internal service is unavailable, a standardized error response is returned.

- Function: get_device_history

## HTTP Method
- GET

## Endpoint
- Path: /api/device-history/{email}

## Path Parameters
- email (string, required): The user’s email address. URL-encode special characters when placing the email in the path (for example, use user%40example.com for user@example.com).

## Request Body
- None. This endpoint does not accept a request body.

## Response
- Content type: application/json
- Success (200): Pass-through JSON from the internal device-history service. The exact schema is determined by that service.
- Error (500): JSON object with an error message when the internal service is unavailable.
  - error (string): A descriptive error message. Example: "device-history-service unavailable"

## Status Codes
- 200 OK: The device history was retrieved successfully.
- 500 Internal Server Error: The internal device-history service could not be reached or returned an error.

## Example
Sample curl request using a URL-encoded email:

    curl -sS -X GET "https://your-api.example.com/api/device-history/user%40example.com" \
      -H "Accept: application/json"

Error response example (500):

    {
      "error": "device-history-service unavailable"
    }

## Notes
- This endpoint proxies to an internal service over a local socket; the response schema may change based on that service. Consult the internal device-history service documentation for field definitions.