title: Issue an Asset
description: Create a new asset assignment for an employee and return the created asset’s ID.

Overview
This endpoint issues an asset to an employee by creating a new Asset record. On success, it returns a confirmation message and the unique ID of the newly created asset.

- Content type: application/json (the request body is parsed as JSON; a Content-Type header is recommended but not strictly required)

HTTP Method
- POST

Endpoint
- /api/assets

Function
- issue_asset

Path Parameters
- None

Request Body
Provide a JSON object with the following fields:

- employee_name (string, required): The employee’s full name.
- employee_email (string, required): The employee’s email address.
- asset_type (string, required): The category of the asset (e.g., Laptop, Phone).
- asset_model (string, required): The specific model of the asset.
- comments (string, optional): Any additional notes about the issuance. Defaults to an empty string if omitted.

Response
On success (201 Created), returns a JSON object with:

- message (string): A human-readable confirmation message. Example: "Asset issued".
- id (integer): The unique ID of the newly created asset.

On validation error (400 Bad Request), returns a JSON object with:

- error (string): Description of the missing required fields. Example: "Missing fields: employee_email, asset_model".

Status Codes
- 201 Created: Asset record created successfully.
- 400 Bad Request: One or more required fields are missing.

Sample curl
    curl -X POST https://api.example.com/api/assets \
      -H "Content-Type: application/json" \
      -d '{
        "employee_name": "Jane Doe",
        "employee_email": "jane.doe@example.com",
        "asset_type": "Laptop",
        "asset_model": "Dell XPS 13",
        "comments": "New hire - Marketing"
      }'