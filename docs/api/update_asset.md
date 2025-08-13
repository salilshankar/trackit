---
title: Update Asset
description: Update mutable fields of an asset by ID (comments, asset_model, asset_type) using PUT or PATCH.
---

Overview
This endpoint updates one or more mutable fields on an existing asset. Both PUT and PATCH perform a partial update: only the provided, allowed fields are modified. If none of the allowed fields are included in the request body, the request is rejected.

- Function: update_asset

HTTP Methods
- PUT
- PATCH

Endpoint
- Path: /api/assets/{asset_id}

Path Parameters
- asset_id (integer, required): The unique identifier of the asset to update.

Request Body
Send a JSON object containing at least one of the following keys. Unknown keys are ignored. If none of the allowed keys are present, the request returns 400.

- comments (string, optional): Free-form notes about the asset.
- asset_model (string, optional): The model identifier/name of the asset.
- asset_type (string, optional): The type/category of the asset.

Notes:
- Content type: application/json is recommended.
- Only the fields listed above are updatable by this endpoint.
- If only unrecognized keys are provided, the server responds with an error (no updatable fields provided).

Responses
- 200 OK: Returns the updated asset as a JSON object.
  - The response body is the asset representation produced by the server (same format as other asset read endpoints).
- 400 Bad Request: Returned when the request does not include any updatable fields.
  - Body example: {"error": "No updatable fields provided"}
- 404 Not Found: Returned if no asset exists with the given asset_id.

Status Codes
- 200: Update succeeded; asset JSON returned.
- 400: No updatable fields provided in the JSON body.
- 404: Asset not found.

Sample curl
Update an asset’s comments and model:

  curl -X PATCH "https://your-api.example.com/api/assets/123" \
    -H "Content-Type: application/json" \
    -d '{"comments":"Replaced cooling fan on 2025-08-01","asset_model":"Dell R740"}'