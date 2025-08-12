title: Update Asset
description: Update mutable fields of an existing asset by ID using PUT or PATCH. Accepts JSON fields: comments, asset_model, asset_type.

Overview
Update one or more mutable fields on an existing asset. Both PUT and PATCH are supported and behave the same for partial updates: only the provided fields are changed; unspecified fields remain unchanged. On success, the endpoint returns the updated asset as JSON.

HTTP Methods
- PUT
- PATCH

Endpoint
- Path: /api/assets/{asset_id}

Function
- update_asset

Path Parameters
- asset_id (integer, required): The unique ID of the asset to update.

Request Body
- Content type: application/json (a JSON body is expected)
- Fields (all optional; at least one must be provided):
  - comments (string): Free-form notes or comments about the asset.
  - asset_model (string): The model identifier/name of the asset.
  - asset_type (string): The asset’s type/category.

Behavior and Validation
- At least one of the accepted keys (comments, asset_model, asset_type) must be present in the request JSON. If none are provided, the server responds with HTTP 400 and an error message.
- Fields not included in the request are left unchanged.
- If the asset with the given asset_id does not exist, a 404 Not Found is returned.

Response
- On success (200 OK): Returns the updated asset as a JSON object. The exact shape is defined by the server’s asset serializer (_asset_json).
- On error:
  - 400 Bad Request: Returned if no updatable fields are provided, or if the JSON is malformed.
    - Example body: {"error": "No updatable fields provided"}
  - 404 Not Found: Returned if the asset_id does not correspond to an existing asset.

Status Codes
- 200 OK: Asset updated successfully.
- 400 Bad Request: Malformed JSON or no updatable fields provided.
- 404 Not Found: Asset not found.

Sample curl
    curl -X PATCH "https://your-api.example.com/api/assets/123" \
      -H "Content-Type: application/json" \
      -d '{
        "comments": "Replaced power supply on 2025-08-10",
        "asset_model": "PX-500"
      }'

Notes
- PUT and PATCH are treated the same for this endpoint (partial updates).
- If you send a JSON body without any of the accepted keys, the server will not perform an update and will respond with 400 Bad Request.