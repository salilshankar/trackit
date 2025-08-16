title: Update an Asset
description: Update mutable fields (comments, asset_model, asset_type) of an existing asset by ID using PUT or PATCH.

Overview
Use this endpoint to update one or more mutable fields on an asset. Only the following fields can be changed: comments, asset_model, and asset_type. You must include at least one of these keys in the JSON body. Any additional keys in the payload are ignored. On success, the endpoint returns the updated asset as JSON.

- PUT and PATCH both perform partial updates in this implementation.
- Omitted fields remain unchanged.

HTTP Methods
- PUT
- PATCH

Endpoint
- /api/assets/{asset_id}

Function
- update_asset

Path Parameters
- asset_id (integer): Unique identifier of the asset to update.

Request Body
Content type: application/json

Provide a JSON object containing one or more of the following keys:
- comments (string): Free-form notes about the asset.
- asset_model (string): Model name or identifier of the asset.
- asset_type (string): Type/category of the asset.

Notes:
- At least one of the accepted keys must be present. If none are provided, the request is rejected with 400.
- Unknown keys are ignored.
- If the JSON is invalid, the server responds with 400.

Response
- On success (200), returns the updated asset as JSON. The exact fields in the response are defined by the server’s asset representation.

Status Codes
- 200 OK: Asset updated successfully; returns the updated asset JSON.
- 400 Bad Request:
  - Invalid JSON body, or
  - No updatable fields provided.
  Example error body: {"error":"No updatable fields provided"}
- 404 Not Found: No asset with the given asset_id exists.

Sample curl
`curl -X PATCH https://api.example.com/api/assets/123 \
  -H "Content-Type: application/json" \
  -d '{ "comments": "Moved to Lab 2", "asset_model": "OptiPlex 7010", "asset_type": "desktop" }'`