title: Issue an Asset
description: Create a new asset issuance record for an employee and return the new asset ID.

# POST /api/assets

## Overview
Creates and stores a new asset issuance associated with an employee. The endpoint validates required fields, saves the asset, and returns the newly created asset’s ID.

- Function: issue_asset

## HTTP Method
- POST

## Endpoint
- /api/assets

## Path Parameters
- None

## Request Body
Send a JSON object with the following fields:

- employee_name (string, required) — Employee’s full name.
- employee_email (string, required) — Employee’s email address.
- asset_type (string, required) — Type/category of the asset (e.g., laptop, phone).
- asset_model (string, required) — Model or variant of the asset.
- comments (string, optional) — Additional notes; defaults to an empty string if not provided.

Notes:
- The request must contain valid JSON. Although the server forces JSON parsing, malformed JSON will result in a 400 Bad Request.

## Responses

### 201 Created
Returns when the asset is successfully created.

Body (application/json):
- message (string) — "Asset issued"
- id (integer) — The newly created asset’s unique identifier

Example:
- message: "Asset issued"
- id: 123

### 400 Bad Request
Returned when required fields are missing or the JSON is malformed.

Body (application/json):
- error (string) — Message listing missing fields (e.g., "Missing fields: employee_email, asset_type")

## Status Codes
- 201 Created — Asset created successfully.
- 400 Bad Request — Missing required fields or invalid JSON.

## Sample curl

    curl -X POST https://your-domain.example.com/api/assets \
      -H "Content-Type: application/json" \
      -d '{
        "employee_name": "Jane Doe",
        "employee_email": "jane.doe@example.com",
        "asset_type": "laptop",
        "asset_model": "Dell XPS 13",
        "comments": "Issued for Q3 project"
      }'