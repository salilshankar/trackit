title: List Assets
description: Retrieve all assets as a JSON array, ordered by most recently issued first.

Overview
This endpoint returns all Asset records as a JSON array. Results are sorted in reverse chronological order based on the asset’s issued_at timestamp (most recent first). Each asset is serialized using the server-side _asset_json helper.

- HTTP method: GET
- Endpoint: /api/assets
- Function: list_assets

Path parameters
- None

Query parameters
- None

Request body
- None

Response
- Content type: application/json
- Body: An array of asset objects
  - Type: array<object>
  - Ordering: Descending by issued_at (newest first)
  - Note: The exact fields of each object are defined by the server’s _asset_json serializer for Asset.

Status codes
- 200 OK — Successfully returned the list of assets.
- 500 Internal Server Error — An unexpected error occurred on the server.

Example request
$ curl -sS -X GET http://localhost:5000/api/assets -H "Accept: application/json"

Example response (truncated shape)
[
  { ... },
  { ... }
]

Notes
- This endpoint does not support pagination or filtering by default.
- If you need specific fields or a different sort order, check the implementation of _asset_json or related endpoints for filtering/pagination support.