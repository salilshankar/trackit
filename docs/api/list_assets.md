title: GET /api/assets — List Assets
description: Retrieve all assets as a JSON array, ordered by most recent issuance time.

Overview
Returns the full list of assets as JSON. The results are ordered by the asset issuance timestamp in descending order (most recent first).

- HTTP method: GET
- Endpoint: /api/assets
- Function: list_assets

Path parameters
- None

Query parameters
- None

Request body
- None

Request headers
- Accept: application/json (optional)

Response
- Content type: application/json
- Body: JSON array of asset objects.
  - Each item is an object representing an asset as produced by the internal serializer (_asset_json).
  - Ordering: descending by the asset’s issued_at timestamp (most recent first).

Status codes
- 200 OK: The list of assets was returned successfully.
- 500 Internal Server Error: An unexpected error occurred on the server.

Sample curl
curl -H "Accept: application/json" http://localhost:5000/api/assets