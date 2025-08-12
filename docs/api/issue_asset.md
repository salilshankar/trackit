---
title: Issue Asset
description: Create a new asset record issued to an employee and receive the created asset’s ID.
---

## Overview
Create (issue) a new asset to an employee. On success, the API stores the asset and returns the new asset ID.

- HTTP method: POST
- Endpoint: /api/assets
- Function: issue_asset
- Path parameters: None

## Request
- Content-Type: application/json

Fields:
- employee_name (string, required)
- employee_email (string, required)
- asset_type (string, required)
- asset_model (string, required)
- comments (string, optional; defaults to an empty string if omitted)

Validation:
- If any required field is missing, the request is rejected with HTTP 400 and an error message listing the missing fields.

## Responses

Success (201 Created):
- message (string): Confirmation text ("Asset issued").
- id (number): The database identifier of the newly created asset.

Client error (400 Bad Request):
- error (string): Description of missing fields, e.g., "Missing fields: employee_name, asset_type".

## Status codes
- 201 Created: Asset was successfully issued.
- 400 Bad Request: One or more required fields are missing.

## Sample curl
    curl -X POST https://your-domain.example.com/api/assets \
      -H "Content-Type: application/json" \
      -d '{
        "employee_name": "Alice Doe",
        "employee_email": "alice@example.com",
        "asset_type": "Laptop",
        "asset_model": "MacBook Pro 14",
        "comments": "Issued on start date"
      }'

Example success response:
    {
      "message": "Asset issued",
      "id": 123
    }

Example error response:
    {
      "error": "Missing fields: asset_model"
    }