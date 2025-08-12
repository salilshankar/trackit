---
title: Return Asset
description: Mark an asset as returned by setting its returned_at timestamp to the current UTC time.
---

Overview
Use this endpoint to mark an existing asset as returned. When invoked, the server sets the asset’s returned_at field to the current UTC timestamp and persists the change.

- Side effect: Updates the asset’s returned_at to the current UTC time.
- Repeated calls: Each call will update/overwrite returned_at to the time of the call.

HTTP Method
- POST

Endpoint
- /api/assets/{asset_id}/return

Function
- return_asset

Path Parameters
- asset_id (integer): The unique identifier of the asset to return.

Request Body
- None. This endpoint does not accept a request body.

Response
- 200 OK: JSON object
  - message (string): Confirmation message.

Status Codes
- 200 OK: Asset was successfully marked as returned.
- 404 Not Found: No asset exists with the provided asset_id.

Sample curl
    curl -X POST "https://your-domain.example.com/api/assets/123/return" \
      -H "Accept: application/json"

Example successful response
    {
      "message": "Asset returned"
    }