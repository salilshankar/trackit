---
title: Return an Asset
description: Mark an asset as returned by setting its returned_at timestamp to the current UTC time and saving the change.
---

Overview
This endpoint marks an asset as returned. It locates the asset by ID, sets its returned_at field to the current UTC timestamp, commits the change, and returns a confirmation message.

Note: Repeated calls will update/overwrite the returned_at timestamp to the time of the latest request.

HTTP Method
- POST

Endpoint
- /api/assets/{asset_id}/return

Function
- return_asset

Path Parameters
- asset_id (integer): The unique identifier of the asset to mark as returned.

Request Body
- This endpoint does not accept a request body.

Response
- Content type: application/json
- Fields:
  - message (string): Confirmation message. Example: "Asset returned"

Status Codes
- 200 OK: Asset was successfully marked as returned.
- 404 Not Found: No asset exists with the provided asset_id.

Example curl
curl -X POST "https://your-api.example.com/api/assets/123/return"

Example Successful Response
{
  "message": "Asset returned"
}