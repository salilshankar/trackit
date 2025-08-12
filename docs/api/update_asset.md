---
title: Update Asset
description: Update the mutable fields (comments, asset_model, asset_type) of an existing asset by ID.
---

Overview
Update mutable fields of an asset. This endpoint supports partial updates: only the fields you include are changed; all others remain untouched. PUT and PATCH behave the same for this route.

- Accepted JSON keys: comments, asset_model, asset_type

HTTP Methods
- PUT
- PATCH

Endpoint
- Path: /api/assets/{asset_id}
- Function: update_asset

Path Parameters
- asset_id (integer, required): The unique identifier of the asset to update.

Request Body
- Content type: application/json
- Body is a JSON object. At least one of the accepted keys must be present; unknown keys are ignored.

Fields:
- comments (string, optional): Free-form notes about the asset.
- asset_model (string, optional): The model name/identifier for the asset.
- asset_type (string, optional): The type/category of the asset.

Behavior and Validation
- If none of the accepted keys are provided, the request is rejected with a 400 error.
- Only provided allowed fields are updated; other fields are left as-is.
- Unknown JSON keys are ignored.

Response
- Success (200): Returns the updated asset as JSON. The structure is the asset’s standard representation as produced by the server’s _asset_json helper.
- Error (400): Returns a JSON object with an error message when no updatable fields are provided. Example: {"error":"No updatable fields provided"}
- Error (404): Returned if the asset_id does not correspond to an existing asset.

Status Codes
- 200 OK: Update succeeded.
- 400 Bad Request: No updatable fields provided.
- 404 Not Found: Asset not found.

Sample curl
curl -X PATCH "http://localhost:5000/api/assets/123" \
  -H "Content-Type: application/json" \
  -d '{
    "comments": "Deployed to production",
    "asset_model": "Dell R740",
    "asset_type": "server"
  }'