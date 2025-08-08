---
title: Issue Asset API
description: API endpoint for issuing a new asset to an employee.
---

## Overview

The `Issue Asset API` allows you to issue a new asset to an employee. This endpoint is part of the asset management system and is used to create a record of an asset being assigned to an employee, including details such as the employee's name and email, asset type, and model. If required fields are missing, the API will return an error indicating which fields are missing.

## HTTP Method

- `POST`

## Endpoint Path

- `/api/assets`

## Function Name

- `issue_asset`

## Request Body Fields

The request body must be in JSON format and include the following fields:

- `employee_name` (string): The name of the employee receiving the asset.
- `employee_email` (string): The email address of the employee.
- `asset_type` (string): The type of asset being issued.
- `asset_model` (string): The model of the asset being issued.
- `comments` (string, optional): Additional comments about the asset issuance. Defaults to an empty string if not provided.

## Response Fields

The response is returned in JSON format and includes the following fields:

- `message` (string): A message indicating the outcome of the operation, e.g., "Asset issued".
- `id` (integer): The unique identifier of the newly created asset record.

## Status Codes

- `201 Created`: The asset has been successfully issued.
- `400 Bad Request`: One or more required fields are missing from the request.

## Sample `curl` Request

To issue a new asset, you can use the following `curl` command:

```
curl -X POST http://<your-domain>/api/assets \
-H "Content-Type: application/json" \
-d '{
  "employee_name": "John Doe",
  "employee_email": "john.doe@example.com",
  "asset_type": "Laptop",
  "asset_model": "Dell XPS 13",
  "comments": "Urgent requirement"
}'
```

Replace `<your-domain>` with your actual API domain. This command will issue a new asset to the employee specified in the request body. If successful, it will return a JSON response with a message and the asset ID.