---
title: Issue Asset
description: Create a new asset assignment for an employee and return the newly created asset’s ID.
---

## Overview
Use this endpoint to issue an asset to an employee. It creates a new Asset record in the database using the details you provide and returns the ID of the newly created asset.

- HTTP method: POST
- Endpoint: /api/assets
- Function: issue_asset

## Path parameters
- None

## Request body
Send a JSON object with the following fields:

- employee_name (string, required) — The employee’s full name.
- employee_email (string, required) — The employee’s email address.
- asset_type (string, required) — The category of the asset (e.g., Laptop, Phone).
- asset_model (string, required) — The specific model of the asset (e.g., “MacBook Pro 14”).
- comments (string, optional) — Additional notes about the issuance. Defaults to an empty string if omitted.

Recommended header:
- Content-Type: application/json

Validation behavior:
- If any required fields are missing, the API responds with HTTP 400 and an error message listing the missing fields.

## Responses

- 201 Created
  - Body:
    - message (string) — Always "Asset issued".
    - id (integer) — The unique ID of the newly created asset.

- 400 Bad Request
  - Body:
    - error (string) — Message detailing which required fields are missing, in the form "Missing fields: field1, field2".

## Status codes
- 201 — Asset successfully issued.
- 400 — One or more required fields are missing.

## Sample curl
    curl -X POST "http://localhost:5000/api/assets" \
      -H "Content-Type: application/json" \
      -d '{
        "employee_name": "Avery Chen",
        "employee_email": "avery.chen@example.com",
        "asset_type": "Laptop",
        "asset_model": "MacBook Pro 14",
        "comments": "Issued for product launch"
      }'