title: Return an Asset
description: Mark an asset as returned by setting its returned_at timestamp and committing the change.

Overview
This endpoint marks an asset as returned. It updates the asset’s returned_at timestamp to the current UTC time and commits the change. A simple confirmation message is returned on success.

- Note: If called multiple times for the same asset, the returned_at timestamp is overwritten with the new current time.

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
Fields:
- message (string)

Example success body:
    {
      "message": "Asset returned"
    }

Status Codes
- 200 OK: Asset was successfully marked as returned.
- 404 Not Found: No asset exists with the provided asset_id.
- 405 Method Not Allowed: The HTTP method is not supported for this endpoint.
- 500 Internal Server Error: An unexpected error occurred on the server.

Example curl
    curl -X POST \
      -H "Accept: application/json" \
      https://your-domain.example.com/api/assets/123/return