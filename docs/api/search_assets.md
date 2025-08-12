title: Search Assets
description: Retrieve a list of assets filtered by status and sorted by most recent activity (issued or returned date).

Overview
Use this endpoint to search assets with optional filtering by status and sorting by most recent activity. Results are ordered by last_updated, which is computed as returned_at if present, otherwise issued_at.

- HTTP Method: GET
- Endpoint: /api/assets/search
- Function: search_assets

Path Parameters
- None

Query Parameters
- status (string, optional)
  - Allowed values: Issued | Returned
  - Behavior:
    - Issued returns assets where returned_at is null (currently issued).
    - Returned returns assets where returned_at is not null.
    - If omitted, returns all assets regardless of status.
  - Note: This value is case-sensitive (must match exactly Issued or Returned).

- sort (string, optional)
  - Allowed values: asc | desc
  - Default: desc
  - Case-insensitive.
  - Sorts by last_updated, where last_updated = COALESCE(returned_at, issued_at).
  - Any value other than asc is treated as descending.

Request Body
- None

Response
- 200 OK: JSON array of asset objects.
  - The exact fields are those produced by the server’s internal _asset_json serializer for each asset.
  - Shape: an array where each item is an object representing an asset.

Status Codes
- 200 OK: The request succeeded and a list of assets is returned.
- 500 Internal Server Error: An unexpected error occurred on the server.

Notes
- There is no pagination on this endpoint.
- Sorting defaults to most recent activity first (desc).

Sample curl
- Retrieve returned assets, sorted by oldest activity first:
  - curl -X GET "https://your-domain.example.com/api/assets/search?status=Returned&sort=asc"