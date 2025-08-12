title: Update Asset
description: Update the mutable fields of an existing asset by ID (comments, asset_model, asset_type) and return the updated asset.

Overview
Update one or more mutable fields on an asset. Both PUT and PATCH behave as partial updates: only the provided fields are changed. Unrecognized fields are ignored. If none of the allowed fields are provided, the request is rejected.

HTTP Methods
- PUT
- PATCH

Endpoint
- /api/assets/{asset_id}

Function
- update_asset

Path Parameters
- asset_id (integer): The ID of the asset to update.

Request Body
- Content type: application/json
- Body: JSON object containing at least one of the following keys:
  - comments (string) — Optional.
  - asset_model (string) — Optional.
  - asset_type (string) — Optional.

Notes:
- At least one of comments, asset_model, or asset_type must be present; otherwise a 400 error is returned.
- Any other keys are ignored and do not affect the update.

Responses
- 200 OK — Returns the updated asset as JSON.
  - Body: Asset resource as produced by the server’s _asset_json serializer. Exact fields are not specified here.
- 400 Bad Request — Returned when no updatable fields are provided.
  - Body:
    - error (string) — "No updatable fields provided"
- 404 Not Found — Returned if the asset_id does not correspond to an existing asset.

Status Codes
- 200 OK
- 400 Bad Request
- 404 Not Found

Sample curl
    curl -X PATCH "https://your.api.host/api/assets/123" \
      -H "Content-Type: application/json" \
      -d '{"comments":"Deployed to rack A3","asset_model":"Dell R740","asset_type":"server"}'

Error example (no allowed fields provided)
    curl -X PATCH "https://your.api.host/api/assets/123" \
      -H "Content-Type: application/json" \
      -d '{"owner":"alice"}'
    # Response: 400
    # {"error":"No updatable fields provided"}