title: Update Asset
description: Update the mutable fields (comments, asset_model, asset_type) of an existing asset by ID using PUT or PATCH.

# Update Asset

Update one or more mutable fields on an existing asset. This endpoint accepts partial updates: only the provided, allowed fields are modified. If no updatable fields are provided, a 400 error is returned.

- HTTP methods: PUT, PATCH
- Endpoint: /api/assets/{asset_id}
- Function: update_asset

## Path parameters

- asset_id (integer, required): The unique identifier of the asset to update.

## Request body

Send a JSON object containing one or more of the following keys:

- comments (string, optional)
- asset_model (string, optional)
- asset_type (string, optional)

Notes:
- At least one of the above keys must be present. If none are included, the server responds with 400 and {"error":"No updatable fields provided"}.
- Any additional/unrecognized keys are ignored.
- This route parses JSON and updates only the fields you include.

Recommended header:
- Content-Type: application/json

## Response

- 200 OK: JSON representation of the updated asset. The shape is defined by the server-side serializer (_asset_json). It will include the asset’s updated state.
- 400 Bad Request:
  - When the request contains no updatable fields. Body: {"error":"No updatable fields provided"}.
  - When the JSON is invalid.
- 404 Not Found: No asset exists with the specified asset_id.

## Status codes

- 200 — Updated successfully
- 400 — Invalid request (e.g., no updatable fields or invalid JSON)
- 404 — Asset not found

## Example

Sample PATCH request updating comments:

curl -X PATCH "https://api.yourdomain.com/api/assets/123" \
  -H "Content-Type: application/json" \
  -d '{ "comments": "Deployed to staging; ready for QA." }'

Behavior notes:
- PUT and PATCH behave the same for this endpoint (both perform partial updates).
- Fields you omit are left unchanged.