title: List Assets
description: Retrieve all assets as a JSON array, ordered from newest to oldest by issuance time.

Overview
The List Assets endpoint returns all assets in the system as a JSON array. Results are ordered by the asset’s issued_at timestamp in descending order (newest first). This endpoint is not paginated and does not accept filters or query parameters.

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
- Items: Asset objects, each serialized by the server’s internal _asset_json helper. The exact fields are defined by the server; clients should treat each item as an object representing an asset.
- Ordering: Descending by issued_at (newest first)
- Empty result: Returns an empty array [] if there are no assets

Status Codes
- 200 OK: Assets returned successfully
- 405 Method Not Allowed: If a non-GET method is used
- 500 Internal Server Error: Unexpected server error

Sample curl
curl -X GET "http://localhost:5000/api/assets" \
  -H "Accept: application/json"