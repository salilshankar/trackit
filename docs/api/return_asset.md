title: Return an Asset
description: Mark an asset as returned by setting its returned_at timestamp to the current UTC time.

Overview
This endpoint marks an asset as returned. Internally, it looks up the asset by ID, sets its returned_at timestamp to the current UTC time, and saves the change. A simple confirmation message is returned.

- Function: return_asset

HTTP Method
- POST

Endpoint
- /api/assets/{asset_id}/return

Path Parameters
- asset_id (integer): The unique identifier of the asset to mark as returned.

Request Body
- None

Response
- 200 OK (application/json)
  - message (string): Confirmation text. Example: "Asset returned"

Status Codes
- 200 OK: The asset was successfully marked as returned.
- 404 Not Found: No asset exists with the given asset_id.
- 500 Internal Server Error: An unexpected error occurred on the server.

Notes
- The returned_at field is set to the current UTC timestamp.

Sample curl
    curl -X POST \
      -H "Accept: application/json" \
      https://your-domain.example.com/api/assets/123/return

Example response
    {
      "message": "Asset returned"
    }