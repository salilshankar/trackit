title: Search Assets
description: Retrieve assets filtered by issuance status and sorted by their most recent activity.

Overview
Use this endpoint to fetch a list of assets, optionally filtered by whether they are currently issued or have been returned. Results are sorted by a “last updated” timestamp defined as COALESCE(returned_at, issued_at), meaning an asset’s most recent activity drives its position in the list.

- Default behavior: returns all assets sorted by most recent activity (descending).
- Filtering: restrict to only currently issued or only returned assets.
- Sorting: ascending or descending by the last updated timestamp.

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
  - Case-sensitive. If not provided or not one of the allowed values, no status filter is applied.
  - Issued: returns assets that have not been returned (returned_at is null).
  - Returned: returns assets that have been returned (returned_at is not null).
- sort (string, optional)
  - Allowed values: asc | desc
  - Case-insensitive; defaults to desc.
  - Sorts by last_updated = COALESCE(returned_at, issued_at).
  - asc: oldest activity first; desc: most recent activity first.

Request Body
- None

Response
- 200 OK: JSON array of asset objects.
  - Each item is an object produced by the server’s _asset_json serializer. The exact fields depend on that serializer and may include typical asset attributes.
  - Example shape:
    - [ { … }, { … }, … ]

Status Codes
- 200 OK: Request succeeded.
- 500 Internal Server Error: Unexpected server-side failure.

Sample curl
    curl -X GET "https://your-api.example.com/api/assets/search?status=Issued&sort=asc"

Additional Notes
- If status is provided with any value other than exactly Issued or Returned (matching case), no status filtering will be applied.
- If sort is provided with any value other than asc (in any case), results default to descending order.