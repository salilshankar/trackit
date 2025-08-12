title: Issue Asset
description: Create a new asset record and assign it to an employee. Returns the new asset’s ID on success.

Overview
Create and record the issuance of an asset to an employee. On success, a new asset entry is persisted and the API returns the asset’s database ID.

HTTP Method
- POST

Endpoint
- /api/assets

Function
- issue_asset

Path Parameters
- None

Request Body
- Content type: application/json

Fields:
- employee_name (string, required): Name of the employee receiving the asset.
- employee_email (string, required): Email address of the employee.
- asset_type (string, required): Category or type of the asset (e.g., "laptop", "phone").
- asset_model (string, required): Model or specific identifier of the asset (e.g., "Dell XPS 13").
- comments (string, optional): Additional notes about the issuance. Defaults to an empty string if omitted.

Notes:
- If any required field is missing, the request fails with a 400 status and an error message listing the missing fields.
- Additional, unknown fields in the request body are ignored.

Response
Success (201 Created):
- message (string): Confirmation message ("Asset issued").
- id (integer): The newly created asset’s identifier.

Error (400 Bad Request):
- error (string): Description listing the missing required fields.

Status Codes
- 201 Created: Asset was successfully issued.
- 400 Bad Request: One or more required fields are missing.
- 5xx Server Error: An unexpected error occurred on the server (not explicitly handled in this route, but may occur).

Example curl
    curl -X POST https://your-domain.example.com/api/assets \
      -H "Content-Type: application/json" \
      -d '{
        "employee_name": "Avery Kim",
        "employee_email": "avery.kim@example.com",
        "asset_type": "laptop",
        "asset_model": "Lenovo T14",
        "comments": "Issued as part of onboarding"
      }'

Example success response (201)
    {
      "message": "Asset issued",
      "id": 123
    }

Example error response (400)
    {
      "error": "Missing fields: asset_model, employee_email"
    }