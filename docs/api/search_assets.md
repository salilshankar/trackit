---
title: Search Assets
description: Retrieve a list of assets, optionally filtered by status and sorted by their most recent update time.
---

# GET /api/assets/search

## Overview
Returns a JSON array of assets. You can optionally filter by asset status (Issued or Returned) and control the sort order. Sorting is based on the most recent lifecycle change, defined as:
- last_updated = COALESCE(returned_at, issued_at)

If a status is provided:
- Issued: assets with no returned_at timestamp
- Returned: assets with a non-null returned_at timestamp

## Method
- GET

## Endpoint
- /api/assets/search

## Handler
- Function: `search_assets`

## Path parameters
- None

## Query parameters
- status (string, optional)
  - Allowed: `Issued` | `Returned`
  - Case-sensitive. If omitted or any other value is provided, no status filter is applied.
- sort (string, optional)
  - Allowed: `asc` | `desc` (case-insensitive)
  - Sorts by last_updated = COALESCE(returned_at, issued_at)
  - Default: `desc`
  - Any value other than `asc` results in descending order.

## Request body
- None

## Response
- 200 OK: JSON array of asset objects.
  - The shape of each asset object is determined by the server’s internal `_asset_json` representation.

## Status codes
- 200 OK: Successful retrieval.
- 500 Internal Server Error: An unexpected error occurred on the server.

## Notes
- Status matching is case-sensitive (`Issued`, `Returned`).
- Sorting is case-insensitive and defaults to descending unless `asc` is explicitly provided.

## Examples

- Get issued assets in ascending order by last_updated:
  - curl -G "http://localhost:5000/api/assets/search" --data-urlencode "status=Issued" --data-urlencode "sort=asc"

- Get all assets (no status filter) in default descending order:
  - curl -G "http://localhost:5000/api/assets/search"