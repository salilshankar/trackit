title: Return an asset
description: Mark an asset as returned by setting its returned_at timestamp and saving the change.

Overview
This endpoint marks an asset as returned. It looks up the asset by ID, sets its returned_at to the current UTC timestamp, commits the change, and returns a confirmation message.

- Note: Each call updates the returned_at timestamp to the current time.

HTTP method
- POST

Endpoint
- /api/assets/{asset_id}/return

Function
- return_asset

Path parameters
- asset_id (integer, required): The unique identifier of the asset to mark as returned.

Request body
- None

Response
- message (string): Confirmation message, e.g., "Asset returned"

Status codes
- 200 OK: Asset was successfully marked as returned.
- 404 Not Found: No asset exists with the provided asset_id.
- 500 Internal Server Error: An unexpected error occurred on the server.

Example curl
    curl -X POST \
      -H "Accept: application/json" \
      http://localhost:5000/api/assets/123/return