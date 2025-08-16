title: List Assets
description: Retrieve all assets as a JSON array, ordered by newest issued_at first.
description: Retrieve all assets as a JSON array, ordered by newest issued_at first.

Overview
This endpoint returns all assets as a JSON array. Results are ordered by the issued_at timestamp in descending order (newest first). Each asset is serialized via the server’s _asset_json helper.

- HTTP method: GET
- Endpoint: /api/assets
- Function: list_assets
This endpoint returns all assets as a JSON array. Results are ordered by the issued_at timestamp in descending order (newest first). Each asset is serialized via the server’s _asset_json helper.

- HTTP method: GET
- Endpoint: /api/assets
- Function: list_assets

Path parameters
Path parameters
- None

Query parameters
Query parameters
- None

Request body
Request body
- None

Response
- Content type: application/json
- Body: An array of asset objects
  - Item type: object
  - Fields: Defined by the server-side _asset_json serializer (not exposed here)
- Ordering: Descending by issued_at

Status codes
- Content type: application/json
- Body: An array of asset objects
  - Item type: object
  - Fields: Defined by the server-side _asset_json serializer (not exposed here)
- Ordering: Descending by issued_at

Status codes
- 200 OK: The list of assets was returned successfully.
- 500 Internal Server Error: An unexpected error occurred on the server.

Sample curl
curl -X GET https://your.api.host/api/assets -H "Accept: application/json"

Notes
- This route returns all assets without pagination in the current implementation.
- The exact fields of each asset are determined by the _asset_json function.
curl -X GET https://your.api.host/api/assets -H "Accept: application/json"

Notes
- This route returns all assets without pagination in the current implementation.
- The exact fields of each asset are determined by the _asset_json function.