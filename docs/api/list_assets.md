title: List Assets
description: Retrieve all assets as JSON, ordered by most recently issued first.

Overview
This endpoint returns a JSON array of assets. Results are ordered by the asset’s issued_at timestamp in descending order (newest first). If no assets exist, the response is an empty array.

- Content type: application/json

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
- Items: Each item is an asset object serialized by the server-side helper _asset_json(a).
  - The exact fields of each asset object are defined by _asset_json and may include a subset or transformation of the Asset model data.

Sorting
- Ordered by Asset.issued_at in descending order.

Status Codes
- 200 OK: The list of assets was returned successfully.
- 500 Internal Server Error: An unexpected error occurred on the server.

Sample curl
curl -X GET https://your-server.example.com/api/assets