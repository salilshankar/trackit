title: List Assets
description: Retrieve the full list of assets as a JSON array, ordered by most recently issued first.

# List Assets

## Overview
Fetch all assets from the system. Results are returned as a JSON array and are ordered by the asset’s issued_at timestamp in descending order (newest first). This endpoint is unpaginated.

- Useful for displaying the most recently issued assets at the top.
- The exact shape of each asset in the response is defined by your server-side serializer/helper function `_asset_json`.

## HTTP Method
- GET

## Endpoint
- /api/assets

## Function
- list_assets

## Path Parameters
- None

## Query Parameters
- None

## Request Body
- None

## Response
- Type: JSON array of objects
- Description: Each element represents an asset serialized via `_asset_json(a)`.
- Ordering: Descending by `issued_at` (most recent first)

Note: Field names and types for each asset depend on the `_asset_json` serializer implementation in your codebase.

## Status Codes
- 200 OK — Successfully returned the list of assets.
- 500 Internal Server Error — An unexpected error occurred on the server.

Your application may also return other status codes (e.g., 401/403) depending on global authentication/authorization middleware.

## Sample Request

curl -X GET "https://your-domain.example.com/api/assets" \
  -H "Accept: application/json"