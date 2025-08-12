title: List Assets
description: Retrieve all assets as a JSON array, ordered by most recently issued first.

Overview
This endpoint returns the complete list of assets as a JSON array. Results are ordered by the issued_at timestamp in descending order (most recent first). If no assets exist, an empty array is returned.

- Content type: application/json
- Returns: Array of asset objects (shape defined by the internal serializer)

HTTP Method
- GET

Endpoint
- /api/assets

Function
- list_assets

Path Parameters
- None

Query Parameters
- None

Request Body
- None

Response
- Type: JSON array
- Items: Asset objects serialized by the internal helper _asset_json(a)
- Ordering: Descending by issued_at

Notes on fields:
- The exact fields of each asset object are defined by the server-side _asset_json serializer. No additional query options (e.g., filtering or pagination) are applied by this route.

Status Codes
- 200 OK: Successfully retrieved the list of assets.
- 500 Internal Server Error: An unexpected error occurred on the server.

Sample curl
curl -X GET "https://your-domain.example.com/api/assets" \
  -H "Accept: application/json"