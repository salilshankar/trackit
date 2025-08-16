---
title: Issue Asset
description: Create a new asset issuance record for an employee. Requires basic employee and asset details and returns the created asset ID.

Overview
This endpoint issues an asset to an employee by creating a new asset record in the system. It validates required fields and, on success, persists the asset and returns its generated ID.

- HTTP Method: POST
- Endpoint: /api/assets
- Function: issue_asset
- Path parameters: None

Request
- Content-Type: application/json
- Body fields:
  - employee_name (string, required) — Employee’s full name.
  - employee_email (string, required) — Employee’s email address.
  - asset_type (string, required) — Type/category of the asset (e.g., "laptop", "phone").
  - asset_model (string, required) — Model or variant of the asset.
  - comments (string, optional) — Additional notes; defaults to an empty string if not provided.

Notes:
- The server attempts to parse the body as JSON even if the Content-Type header is missing, but sending a proper application/json header is recommended.
- If any required fields are missing, the request is rejected.

Responses
- 201 Created
  - Body:
    - message (string) — Confirmation message ("Asset issued").
    - id (number) — The newly created asset’s unique identifier.
- 400 Bad Request
  - Body:
    - error (string) — Description of missing fields, e.g., "Missing fields: employee_name, asset_type".

Status codes
- 201 — Asset successfully created.
- 400 — One or more required fields are missing.

Example curl
    curl -X POST https://your-domain.example.com/api/assets \
      -H "Content-Type: application/json" \
      -d '{
        "employee_name": "Jordan Smith",
        "employee_email": "jordan.smith@example.com",
        "asset_type": "laptop",
        "asset_model": "Dell Latitude 7440",
        "comments": "High-priority issuance"
      }'

Example responses
- Success (201):
  {
    "message": "Asset issued",
    "id": 123
  }

- Missing fields (400):
  {
    "error": "Missing fields: asset_type, asset_model"
  }