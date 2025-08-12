---
title: List Assets
description: Retrieve all asset assignment records as a JSON array, ordered by most recent issue date.
---

Overview
- Returns a JSON array of asset records from the system, sorted by issued_at in descending order (most recently issued first).
- Each record includes core details about the asset assignment and timestamps for when it was issued and, if applicable, returned.

HTTP Method
- GET

Endpoint
- /api/assets

Function
- list_assets

Path Parameters
- None

Request Body
- None

Response
- Content type: application/json
- Structure: An array of objects. Each object has the fields below.

Response Fields
- id (integer): Unique identifier for the asset record.
- employee_name (string): Name of the employee the asset is assigned to.
- employee_email (string): Email of the employee the asset is assigned to.
- asset_type (string): Type/category of the asset (e.g., laptop, monitor).
- asset_model (string): Model or specific identifier for the asset.
- comments (string or null): Optional comments associated with the assignment.
- issued_at (string): ISO 8601 timestamp when the asset was issued.
- returned_at (string or null): ISO 8601 timestamp when the asset was returned; null if not yet returned.

Status Codes
- 200 OK: Successfully retrieved the list of assets.
- 5xx Server Error: An unexpected server error occurred.

Notes
- If there are no assets, the response is an empty array [].
- Timestamps are formatted as ISO 8601 strings (for example, 2024-06-01T12:34:56.789123).

Sample curl
curl -X GET http://localhost:5000/api/assets