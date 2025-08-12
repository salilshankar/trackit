---
title: Search Assets
description: Retrieve a JSON list of assets filtered by issued/returned status and sorted by most recent activity (issued or returned).
---

## Overview

Search and retrieve assets, optionally filtering by whether they are currently issued or have been returned. Results are sorted by the asset’s most recent activity, where “last_updated” is computed as the first non-null of returned_at or issued_at.

- Sorting key: last_updated = COALESCE(returned_at, issued_at)
- Filtering options: Issued (not yet returned) or Returned

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
  - Allowed values: Issued | Returned
  - Case-sensitive. Any other value (or omitted) applies no status filter.
  - Issued returns assets with returned_at = null (currently issued).
  - Returned returns assets with returned_at != null (previously returned).

- sort (string, optional)
  - Allowed values: asc | desc
  - Case-insensitive. Defaults to desc.
  - Any value other than asc is treated as descending.
  - Sorting is applied to last_updated = COALESCE(returned_at, issued_at).

## Request Body

- None (use query parameters)

## Response

- Content type: application/json
- Body: JSON array of asset objects
  - The structure of each asset object is defined by the server-side serializer and may include standard asset properties. The array may be empty if no assets match the filters.

## Status Codes

- 200 OK — Request succeeded; returns a JSON array (possibly empty).
- 500 Internal Server Error — Unexpected error on the server.

## Notes

- The endpoint does not paginate results.
- The status filter is case-sensitive and only applies when status is exactly Issued or Returned.
- The sort parameter is case-insensitive; any non-asc value is treated as descending.

## Sample curl

curl -X GET 'https://your.api.host/api/assets/search?status=Issued&sort=asc' -H 'Accept: application/json'