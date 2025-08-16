title: Search Assets
description: Retrieve a list of assets, optionally filtered by status (Issued/Returned) and sorted by the most recent update time.

Overview
Use this endpoint to list assets with optional filtering by their issuance/return status and sorting by last updated time. The last updated time is defined internally as COALESCE(returned_at, issued_at), meaning returned_at if present, otherwise issued_at. By default, results are returned with the most recently updated assets first.

- When status=Issued, only assets that have not been returned yet are included.
- When status=Returned, only assets that have been returned are included.
- If status is omitted or any other value, no status filter is applied.
- Sorting is descending by default; specify sort=asc for ascending order.

HTTP Method
- GET

Endpoint
- /api/assets/search

Function
- search_assets

Path Parameters
- None

Query Parameters
- status (string, optional)
  - Allowed values: Issued | Returned
  - Case-sensitive: must be exactly "Issued" or "Returned"
  - Behavior:
    - Issued: assets with returned_at = null
    - Returned: assets with returned_at != null
    - Any other value or omitted: no status filter applied
- sort (string, optional)
  - Allowed values: asc | desc
  - Default: desc
  - Case-insensitive: value is lowercased internally
  - Any value other than "asc" is treated as descending
  - Sorting is performed by an internal last_updated expression = COALESCE(returned_at, issued_at)

Request Body
- None (this is a GET endpoint)

Response
- 200 OK: JSON array of asset objects.
  - Each element is the JSON representation of an asset as produced by the server-side serializer (_asset_json). The exact fields depend on that serializer and are not enumerated here.

Status Codes
- 200 OK: Request succeeded; returns an array of assets (possibly empty).
- 500 Internal Server Error: Unexpected server error.

Sample Requests
- List all assets (most recently updated first):
    curl -X GET "https://your-domain.example/api/assets/search"

- List only issued (not yet returned) assets:
    curl -X GET "https://your-domain.example/api/assets/search?status=Issued"

- List only returned assets, oldest first:
    curl -X GET "https://your-domain.example/api/assets/search?status=Returned&sort=asc"

Notes
- There is no pagination in this route; all matching assets are returned.
- The last_updated value is used only for sorting and is not added as a field in the response.
- The sort parameter is lenient: only "asc" triggers ascending order; any other value results in descending order.