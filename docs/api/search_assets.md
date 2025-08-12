title: Search Assets
description: Retrieve assets filtered by issuance/return status and sorted by most recent activity.

Overview
Use this endpoint to search and list assets, optionally filtering by their current status (Issued or Returned) and sorting by the most recent activity. Results are ordered by last_updated, defined as COALESCE(returned_at, issued_at), so assets are sorted by their return time if available, otherwise by their issue time.

HTTP Method
- GET

Endpoint
- /api/assets/search

Function
- search_assets

Path Parameters
- None

Query Parameters
- status (string, optional): Filter results by asset status.
  - Allowed values: Issued, Returned
  - Note: This comparison is case-sensitive. Use exactly Issued or Returned.
- sort (string, optional): Sort direction for last_updated.
  - Allowed values: asc, desc
  - Default: desc
  - Case-insensitive; any value other than asc is treated as desc.

Request Body
- None

Response
- Content type: application/json
- Body: JSON array of asset objects.
  - Each array element represents an asset serialized by an internal helper (_asset_json). The exact fields are not specified here and may include identifiers and metadata for each asset.

Status Codes
- 200 OK: The request succeeded. Returns an array (possibly empty) of assets.
- 500 Internal Server Error: An unexpected error occurred on the server.

Sorting Details
- last_updated = COALESCE(returned_at, issued_at)
- When sort=desc (default), most recently updated assets appear first.
- When sort=asc, the oldest assets by last_updated appear first.

Example curl
- Retrieve issued assets, sorted by most recent activity first:
curl -G "http://localhost:5000/api/assets/search" --data-urlencode "status=Issued" --data-urlencode "sort=desc"

Notes
- If status is omitted or does not match Issued or Returned exactly, no status filter is applied.
- If sort is omitted or any value other than asc is provided, results are sorted descending by last_updated.