title: List Assets
description: Retrieve all assets as a JSON array, ordered by newest first.

Overview
This endpoint returns all assets as a JSON array. Results are sorted by issue time in descending order (newest first) and serialized via an internal helper before being returned.

- Order: Asset.issued_at descending
- Serialization: Each asset is converted to JSON using an internal _asset_json(a) helper

HTTP Method
- GET

Endpoint
- /api/assets

Function
- list_assets

Path Parameters
- None

Query Parameters
- None

Request Body
- None

Response
- Type: JSON array
- Items: Asset objects (fields determined by the server-side _asset_json serializer)

Status Codes
- 200 OK: Assets retrieved successfully
- 500 Internal Server Error: An unexpected error occurred on the server

Sample Request (curl)
    curl -X GET "https://your-domain.example.com/api/assets" \
      -H "Accept: application/json"