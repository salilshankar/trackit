---
title: Update an asset
description: Update the comments, asset_model, or asset_type for an existing asset by ID. Supports PUT and PATCH and returns the updated asset.
---

Overview
This endpoint updates the mutable fields of an existing asset. You can change any combination of comments, asset_model, and asset_type. At least one of these fields must be provided; extra/unknown fields are ignored.

- HTTP method(s): PUT, PATCH
- Endpoint: /api/assets/{asset_id}
- Function: update_asset

Path parameters
- asset_id (integer) — The unique ID of the asset to update.

Request body
Supply a JSON object containing one or more of the following keys:
- comments (string) — Free-form notes about the asset.
- asset_model (string) — The model designation for the asset.
- asset_type (string) — The category/type of the asset (for example, laptop, monitor).

Notes:
- All fields are optional, but at least one must be present.
- Fields not listed above are ignored.
- Send Content-Type: application/json.

Response
On success, returns the updated asset as JSON with the following fields:
- asset_model (string)
- asset_type (string)
- comments (string)
- employee_email (string)
- employee_name (string)
- id (integer)
- issued_at (string) — ISO 8601 timestamp.
- returned_at (datetime) — ISO 8601 timestamp or null if not returned.

Status codes
- 200 OK — Asset updated successfully; returns the full asset record.
- 400 Bad Request — No updatable fields provided.
  - Example body: {"error":"No updatable fields provided"}
- 404 Not Found — No asset found for the given asset_id.

Sample curl
curl -X PATCH https://your-api.example.com/api/assets/123 -H "Content-Type: application/json" -H "Accept: application/json" -d '{"comments":"Reassigned to Alex","asset_model":"ThinkPad X1 Carbon Gen 11","asset_type":"laptop"}'