---
title: Update Asset
description: Update the mutable fields (comments, asset_model, asset_type) of an existing asset by its ID.
---

Overview
Use this endpoint to update one or more mutable fields on an existing asset. Only the fields provided in the request body are modified; all other fields remain unchanged. Unknown keys are ignored. If none of the accepted fields are provided, the request is rejected.

- Function: update_asset

HTTP Methods
- PUT
- PATCH

Endpoint
- /api/assets/{asset_id}

Path Parameters
- asset_id (integer, required): The unique identifier of the asset to update.

Request Body
- Content type: application/json
- Body type: JSON object
- Accepted keys (at least one is required):
  - comments (string): Free-form comments or notes about the asset.
  - asset_model (string): The asset’s model name or identifier.
  - asset_type (string): The asset’s type.

Notes
- Requests that do not include at least one of the accepted keys will return a 400 response with an error message.
- Keys other than the accepted ones are ignored.
- Both PUT and PATCH behave as partial updates for this endpoint.

Responses
- 200 OK: Returns the updated asset as a JSON object.
- 400 Bad Request:
  - If the JSON body is missing all accepted keys, response body: {"error": "No updatable fields provided"}
  - If the JSON is invalid, the request may be rejected by the request parser.
- 404 Not Found: No asset exists with the provided asset_id.

Response Body
- On success: The full asset representation as JSON (as returned by the server’s asset serializer). Field names depend on the server’s _asset_json implementation.

Sample curl
    curl -X PATCH "https://your-api.example.com/api/assets/123" \
      -H "Content-Type: application/json" \
      -d '{
        "comments": "Replaced battery and updated firmware",
        "asset_model": "Model-X200"
      }'