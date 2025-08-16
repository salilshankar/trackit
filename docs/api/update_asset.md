title: Update Asset
description: Update mutable fields of an asset by ID. Supports PUT/PATCH to modify comments, asset_model, or asset_type and returns the updated asset.

Overview
Update one or more mutable fields on an existing asset. This endpoint supports partial updates: send only the fields you want to change. On success, it returns the updated asset as JSON.

HTTP Methods
- PUT
- PATCH

Endpoint
- /api/assets/{asset_id}

Function
- update_asset
- /api/assets/{asset_id}

Function
- update_asset

Path Parameters
- asset_id (integer): The unique identifier of the asset to update.

Request Body
- Content type: application/json
- Body is a JSON object containing any subset of the following fields. At least one must be provided.

Fields:
- comments (string, optional): Notes or comments about the asset.
- asset_model (string, optional): The model name or identifier of the asset.
- asset_type (string, optional): The type/category of the asset.

Notes:
- The endpoint treats PUT and PATCH the same way (partial updates). Fields you do not send are left unchanged.
- If none of the accepted fields are provided, the request fails with 400 Bad Request.

Responses
- 200 OK: Returns the updated asset as a JSON object.
  - Response body: The full asset representation. Field shape depends on your Asset model and may include more than the fields updated here.
- 400 Bad Request: Returned when the request JSON does not include any updatable fields.
  - Example body: {"error": "No updatable fields provided"}
- 404 Not Found: Returned when no asset exists with the given asset_id.

Sample curl
Update an asset’s comments and model using PATCH:
curl -X PATCH "https://your-domain.example.com/api/assets/123" \
  -H "Content-Type: application/json" \
  -d '{
    "comments": "Deployed to rack A3.",
    "asset_model": "Dell R740xd"
  }'

Using PUT works the same way:
curl -X PUT "https://your-domain.example.com/api/assets/123" \
  -H "Content-Type: application/json" \
  -d '{
    "asset_type": "server"
  }'