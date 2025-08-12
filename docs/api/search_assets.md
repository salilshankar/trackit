title: Search Assets
description: Retrieve a list of assets with optional status filtering and sorting by last updated time (returned_at or issued_at).

# Overview

Use this endpoint to search and list assets. You can:
- Filter assets by their current status (Issued or Returned).
- Sort the results by last updated time, defined as COALESCE(returned_at, issued_at), in ascending or descending order.

The response is a JSON array of asset objects.

## HTTP Method
- GET

## Endpoint
- /api/assets/search

## Function
- search_assets

## Path Parameters
- None

## Query Parameters
- status (string, optional)
  - Accepted values: Issued | Returned
  - Behavior:
    - Issued: returns assets where returned_at is null (currently issued and not yet returned).
    - Returned: returns assets where returned_at is not null.
  - Notes: Comparison is case-sensitive; values must match exactly "Issued" or "Returned". Any other value results in no status filtering.

- sort (string, optional)
  - Accepted values: asc | desc
  - Default: desc
  - Case-insensitive; the value is normalized to lowercase.
  - Sort key: last_updated = COALESCE(returned_at, issued_at)
    - asc: oldest last_updated first
    - desc: newest last_updated first
  - Any value other than "asc" is treated as descending.

## Request Body
- None (this is a GET endpoint)

## Response
- Content type: application/json
- Body: JSON array of asset objects
  - Each element represents an asset as produced by the server’s internal serializer (_asset_json).
  - The precise fields are not enumerated here; expect typical asset properties along with relevant timestamps.
- Ordering and filtering reflect the provided query parameters.

## Status Codes
- 200 OK — Request succeeded; returns an array (possibly empty) of assets.
- 500 Internal Server Error — An unexpected server error occurred.

## Examples

- List all assets (default: sorted by last_updated desc)
    
    curl -X GET "https://your-api.example.com/api/assets/search" \
      -H "Accept: application/json"

- List currently issued assets, oldest first
    
    curl -X GET "https://your-api.example.com/api/assets/search?status=Issued&sort=asc" \
      -H "Accept: application/json"

- List returned assets, newest first (explicit)
    
    curl -X GET "https://your-api.example.com/api/assets/search?status=Returned&sort=desc" \
      -H "Accept: application/json"

## Notes
- If status is omitted or not one of the accepted values, no status filter is applied.
- If sort is omitted or not "asc", results are sorted descending by last_updated.