title: Return Asset
description: Mark an asset as returned by setting its returned_at timestamp (UTC) and receive a confirmation message.

# Return Asset

Marks the specified asset as returned. On success, the asset’s returned_at field is updated to the current UTC timestamp, and a confirmation message is returned.

This is a state-changing operation. If called multiple times for the same asset, the returned_at timestamp will be updated each time to the latest call time.

- HTTP method: POST
- Endpoint: /api/assets/{asset_id}/return
- Function: return_asset

## Path parameters

- asset_id (integer): The unique ID of the asset to mark as returned.

## Request body

This endpoint does not accept a request body.

## Response

Content type: application/json

Fields:
- message (string)

Example:
{
  "message": "Asset returned"
}

## Status codes

- 200 OK — Asset was found and successfully marked as returned.
- 404 Not Found — No asset exists with the provided asset_id (or asset_id is not a valid integer for the route).
- 405 Method Not Allowed — HTTP method other than POST was used.
- 500 Internal Server Error — An unexpected error occurred on the server.

## Sample request

Replace {asset_id} with the asset’s ID. Include any required authentication headers your API uses.

    curl -X POST "https://api.example.com/api/assets/123/return" \
      -H "Accept: application/json"

## Notes

- The returned_at timestamp is set using the current UTC time on the server.