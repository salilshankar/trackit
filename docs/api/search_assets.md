---
title: Search Assets
description: Retrieve a list of assets with optional status filtering and sorting by last updated time.
---

Overview
Use this endpoint to list assets, optionally filtering by their lifecycle status and sorting by a computed "last updated" timestamp. The last updated value is defined as COALESCE(returned_at, issued_at), meaning returned assets use their returned_at timestamp, while currently issued assets use issued_at. Results are returned as an array of asset objects.

- Results are not paginated; all matching assets are returned.
- Filtering by status is case-sensitive.
- Sorting order is case-insensitive, defaulting to descending.

HTTP method
- GET

Endpoint
- /api/assets/search

Function
- search_assets

Path parameters
- None

Query parameters
- status (string, optional)
  - Accepted values: Issued, Returned
  - Case-sensitive match:
    - Issued: returns assets where returned_at is null (currently issued)
    - Returned: returns assets where returned_at is not null
  - Any other value (including different casing) results in no status filter.
- sort (string, optional)
  - Accepted values: asc, desc
  - Case-insensitive
  - Default: desc
  - Applied to last_updated = COALESCE(returned_at, issued_at)

Request body
- None

Response
- 200 OK: JSON array of asset objects. The exact fields are determined by the server-side serializer and may vary; expect typical asset attributes. Ordering reflects the requested sort on last_updated.

Status codes
- 200 OK: Request succeeded.
- 500 Internal Server Error: An unexpected error occurred on the server.

Example usage
- List all assets (default descending by last_updated): GET /api/assets/search
- List currently issued assets, ascending by last_updated: GET /api/assets/search?status=Issued&sort=asc
- List returned assets (default descending): GET /api/assets/search?status=Returned

Sample curl
curl -X GET "https://your-domain.example.com/api/assets/search?status=Issued&sort=asc" \
  -H "Accept: application/json"