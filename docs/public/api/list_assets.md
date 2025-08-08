---
title: List Assets API
description: Retrieve a list of all assets with details including employee and asset information.
---

# List Assets API

This endpoint provides a list of all assets, including detailed information about the asset and the employee to whom it is assigned. The assets are returned in descending order based on the issuance date.

## HTTP Method

- `GET`

## Endpoint Path

- `/api/assets`

## Function Name

- `list_assets`

## Overview

The `list_assets` function retrieves all assets from the database, ordering them by the issuance date in descending order. The assets are returned as a JSON response, including details such as the asset type, model, and associated employee information.

## Path Parameters

- None

## Request Body Fields

- None

## Response Fields

The response is a JSON array of objects, each containing the following fields:

- `id` (integer): The unique identifier of the asset.
- `employee_name` (string): The name of the employee to whom the asset is assigned.
- `employee_email` (string): The email address of the employee.
- `asset_type` (string): The type of the asset.
- `asset_model` (string): The model of the asset.
- `comments` (string): Any comments associated with the asset.
- `issued_at` (string): The date and time when the asset was issued, in ISO 8601 format.
- `returned_at` (string or null): The date and time when the asset was returned, in ISO 8601 format. If the asset has not been returned, this field is `null`.

## Status Codes

- `200 OK`: The request was successful, and the list of assets is returned.

## Sample `curl` Request

To retrieve the list of assets, you can use the following `curl` command:

```
curl -X GET http://yourapi.com/api/assets
```

Replace `http://yourapi.com` with the actual base URL of your API. This command will return a JSON array of assets with all the details mentioned above.