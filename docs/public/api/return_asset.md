title: Return Asset API
description: Endpoint to mark an asset as returned in the system.

## Overview

The Return Asset API allows you to mark an asset as returned. This is useful for managing asset tracking within your system, ensuring that the status of each asset is kept up to date. When an asset is returned, the system records the current UTC time as the return time.

## HTTP Method

- `POST`

## Endpoint Path

- `/api/assets/{asset_id}/return`

## Function Name

- `return_asset`

## Path Parameters

- `asset_id` (integer): The unique identifier of the asset to be marked as returned.

## Request Body Fields

- None. This endpoint does not require a request body.

## Response Fields

- **message** (string): A confirmation message indicating the asset has been successfully returned.

## Status Codes

- `200 OK`: The asset was successfully marked as returned.
- `404 Not Found`: The asset with the specified `asset_id` does not exist.

## Sample `curl` Request

To mark an asset as returned, you can use the following `curl` command, replacing `{asset_id}` with the actual ID of the asset:

```
curl -X POST http://yourapi.com/api/assets/{asset_id}/return
```

This endpoint is part of the asset management functionality, making it easier to keep track of assets within your organization. Use it to ensure that the return status is updated as assets are returned.