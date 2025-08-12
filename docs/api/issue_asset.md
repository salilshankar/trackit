title: Issue Asset
description: Create a new asset record for an employee and return the new asset’s ID.

# Issue Asset

## Overview
Creates a new asset record associated with an employee. On success, the service persists the asset and returns a confirmation message along with the newly created asset ID. If required fields are missing, it returns a validation error listing the missing fields.

- HTTP method(s): POST
- Endpoint path: /api/assets
- Function name: issue_asset
- Path parameters: None

## Request Body
Send a JSON object with the following fields:

- employee_name (string, required): Employee’s full name.
- employee_email (string, required): Employee’s email address.
- asset_type (string, required): The type/category of the asset (e.g., "laptop", "phone").
- asset_model (string, required): The model or specific identifier of the asset.
- comments (string, optional): Additional notes about the asset issuance. Defaults to an empty string if omitted.

Notes:
- The server attempts to parse the body as JSON; set Content-Type: application/json to be explicit.

## Responses

### Success (201 Created)
Returns a JSON object:
- message (string): Always "Asset issued" on success.
- id (integer): The unique identifier of the newly created asset.

Example:
    {
      "message": "Asset issued",
      "id": 123
    }

### Validation Error (400 Bad Request)
Returned when one or more required fields are missing. The error message lists the missing field names.

- error (string): Description of which fields are missing.

Example:
    {
      "error": "Missing fields: employee_email, asset_type"
    }

## Status Codes
- 201 Created: Asset was successfully created.
- 400 Bad Request: One or more required fields are missing.

## Sample curl Request
    curl -X POST https://your-domain.example.com/api/assets \
      -H "Content-Type: application/json" \
      -d '{
        "employee_name": "Avery Johnson",
        "employee_email": "avery.johnson@example.com",
        "asset_type": "laptop",
        "asset_model": "ThinkPad X1 Carbon Gen 10",
        "comments": "Issued on first day"
      }'