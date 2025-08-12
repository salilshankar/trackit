title: Recover Service
description: Starts the device history service process and returns a JSON confirmation. Useful for recovering or restarting the service asynchronously.

# POST /api/recover

Starts (recovers) the device history service by launching a Python script as a background process. The endpoint returns immediately after attempting to spawn the process; it does not wait for the service to initialize or verify its health.

- HTTP method: POST
- Endpoint path: /api/recover
- Function: recover_service

## Overview

When called, this route:
- Resolves the path to a script at ../../device_history_service.py (relative to the server file).
- Starts the script using the system's python interpreter via subprocess.Popen.
- Returns a JSON response indicating success if the process was started without raising an exception.

This is a fire-and-forget operation: success indicates the launch command was issued, not that the service is fully up.

## Path parameters

- None

## Request body

- None

## Responses

- On success (200):
  - Content type: application/json
  - Body:
    - message (string): Human-readable confirmation.
  - Example:
    - { "message": "Service recovered" }

- On error (500):
  - Content type: application/json
  - Body:
    - error (string): Error details describing why the launch failed.
  - Example:
    - { "error": "Reason for failure" }

## Status codes

- 200 OK — The recovery script was invoked successfully.
- 500 Internal Server Error — Failed to start the recovery script.

## Sample curl

curl -X POST https://your-domain.example.com/api/recover

## Notes

- The service is started using the command: python <resolved path to device_history_service.py>. Ensure:
  - The python executable is available in the server’s PATH or environment.
  - The device_history_service.py file exists at the expected relative location and is runnable.
- This endpoint does not accept any parameters and performs no health checks; consider adding monitoring to verify the service after calling this route.