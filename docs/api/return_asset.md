---
title: Return Asset
description: Mark an asset as returned by setting its return timestamp and receive a confirmation message.
---

Overview
This endpoint marks an asset as returned. It looks up the asset by ID, sets its returned_at timestamp to the current UTC time, commits the change, and returns a confirmation message. If the asset is not found, a 404 is returned.

- Note: The timestamp is set unconditionally to the current UTC time.

HTTP Method
- POST

Endpoint
- /api/assets/{asset_id}/return

Function
- return_asset

Path Parameters
- asset_id (integer): The unique ID of the asset to mark as returned.

Request Body
- None

Response
- Content type: application/json
- Fields:
  - message (string)

Example Successful Response Body
    {
      "message": "Asset returned"
    }

Status Codes
- 200 OK: Asset was successfully marked as returned.
- 404 Not Found: No asset exists with the given asset_id.

Sample curl
    curl -X POST "https://your.api.host/api/assets/123/return"