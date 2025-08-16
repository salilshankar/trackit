---
title: Return an asset
description: Mark an asset as returned by setting its returned_at timestamp (UTC) and receive a confirmation message.
---

Overview
This endpoint marks a specific asset as returned by setting its returned_at timestamp to the current UTC time. It is typically used when an asset that was previously checked out is being returned. On success, it responds with a simple confirmation message.

- Note: Repeated calls will update the returned_at timestamp to the current time.

HTTP Method
- POST

Endpoint
- /api/assets/{asset_id}/return

Function
- return_asset

Path Parameters
- asset_id (integer): The unique identifier of the asset to mark as returned.

Request Body
- None. This endpoint does not accept a request body.

Response
Content type: application/json

Fields:
- message (string): A confirmation message indicating the asset was returned.

Example successful response body:
{
  "message": "Asset returned"
}

Status Codes
- 200 OK: The asset was marked as returned.
- 404 Not Found: No asset exists with the given asset_id.
- 500 Internal Server Error: An unexpected error occurred on the server.

Sample curl
curl -X POST "https://your-api.example.com/api/assets/123/return"

Notes
- The timestamp is recorded in UTC.