title: Recover Service API
description: API endpoint to recover a service by executing a specific script.

# Recover Service API

## Overview

The Recover Service API provides an endpoint to initiate the recovery of a service by executing a predefined script on the server. This endpoint is useful for scenarios where automated service recovery is needed.

## HTTP Method

- **POST**

## Endpoint Path

- `/api/recover`

## Function Name

- `recover_service`

## Path Parameters

- None

## Request Body Fields

- None

## Response Fields

- **message**: A string indicating the success of the service recovery.
- **error**: A string containing error details if the recovery fails.

## Status Codes

- **200 OK**: The service was successfully recovered.
- **500 Internal Server Error**: An error occurred during the recovery process.

## Sample `curl` Request

To use the Recover Service API, you can execute the following `curl` command:

```
curl -X POST http://yourserver.com/api/recover
```

Replace `http://yourserver.com` with the actual server URL where the API is hosted.

## Additional Notes

- This endpoint is designed to execute a script located at `../../device_history_service.py` relative to the server's file structure.
- Make sure the server has the necessary permissions to execute scripts and that the script path is correct for your deployment environment.
- No authentication or additional headers are required for this endpoint, but you may want to secure it depending on your use case.