title: Issue Asset
description: Create a new asset record for an employee and return the newly created asset ID.

Overview
This endpoint issues an asset to an employee by creating a new Asset record in the system. Provide the employee details along with the asset type and model. Optional comments can be included. On success, the service returns the new asset’s ID.

- HTTP method: POST
- Endpoint: /api/assets
- Function: issue_asset

Path parameters
- None

Request body
Send a JSON object with the following fields:
- employee_name (string, required)
- employee_email (string, required)
- asset_type (string, required)
- asset_model (string, required)
- comments (string, optional; defaults to an empty string if omitted)

Response
On success (201 Created), returns a JSON object:
- message (string) — "Asset issued"
- id (integer) — the identifier of the newly created asset

On validation error (400 Bad Request), returns a JSON object:
- error (string) — a message in the form: "Missing fields: field1, field2"

Status codes
- 201 Created — Asset successfully issued
- 400 Bad Request — One or more required fields are missing

Sample curl
curl -X POST https://your-domain.example.com/api/assets -H "Content-Type: application/json" -d '{"employee_name":"Jane Doe","employee_email":"jane.doe@example.com","asset_type":"laptop","asset_model":"Dell XPS 13","comments":"For remote work"}'