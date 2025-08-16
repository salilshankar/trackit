---
title: Issue Asset
description: Create a new asset issuance record for an employee by submitting asset and employee details.
---

# POST /api/assets — Issue Asset

## Overview
Creates a new asset issuance record associated with an employee. On success, the API persists the asset and returns its generated ID.

- Function: issue_asset

## HTTP Method
- POST

## Endpoint
- /api/assets

## Path Parameters
- None

## Request Body
Send a JSON object. These fields are expected:

- employee_name (string, required)
- employee_email (string, required)
- asset_type (string, required)
- asset_model (string, required)
- comments (string, optional; defaults to an empty string if not provided)

Notes:
- The request body is parsed as JSON. The server attempts to parse JSON even if the Content-Type header is missing, but it’s recommended to set Content-Type: application/json.
- Validation checks only for missing keys. Empty strings are accepted as present values.

## Responses

### 201 Created
- Content: application/json
- Body:
  - message (string) — "Asset issued"
  - id (integer) — The server-generated asset ID

Example:
- { "message": "Asset issued", "id": 123 }

### 400 Bad Request
Returned when one or more required fields are missing.

- Content: application/json
- Body:
  - error (string) — Message listing the missing field names

Example:
- { "error": "Missing fields: employee_email, asset_model" }

## Status Codes
- 201 Created — Asset successfully issued
- 400 Bad Request — One or more required fields are missing

## Sample curl
    curl -X POST https://your-domain.example.com/api/assets \
      -H "Content-Type: application/json" \
      -d '{
        "employee_name": "Alex Doe",
        "employee_email": "alex.doe@example.com",
        "asset_type": "Laptop",
        "asset_model": "Dell XPS 13",
        "comments": "For remote work"
      }'