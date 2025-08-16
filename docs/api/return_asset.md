title: Return an Asset
description: Mark an asset as returned by setting its returned_at timestamp to the current UTC time.

Overview
Use this endpoint to mark an asset as returned. Internally, the asset’s returned_at field is set to the current UTC timestamp and the change is persisted.

Note: If you call this endpoint multiple times for the same asset, the returned_at timestamp will be updated each time.

HTTP Method
- POST

Endpoint
- /api/assets/{asset_id}/return

Function
- return_asset

Path Parameters
- asset_id (integer): The unique identifier of the asset to mark as returned.

Request Body
- None

Response
- 200 OK: JSON object with the following field:
  - message (string)

Response Fields
- message (string)

Status Codes
- 200 OK: Asset successfully marked as returned.
- 404 Not Found: No asset exists with the provided asset_id.
- 500 Internal Server Error: An unexpected error occurred while processing the request.

Sample curl
curl -X POST "https://your-api.example.com/api/assets/123/return" -H "Accept: application/json"