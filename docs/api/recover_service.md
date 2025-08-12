title: Recover Service
description: POST /api/recover to trigger a background recovery of the device history service by launching device_history_service.py. Returns a JSON status message.

# Recover Service

## Overview
Triggers a recovery/restart of the device history service by launching a Python script (device_history_service.py) as a separate process. The call returns immediately after starting the process and does not wait for or verify the service’s health.

- Launches the script using subprocess.Popen (non-blocking).
- Intended for operational recovery tasks (e.g., restarting a crashed service).

## HTTP Method
- POST

## Endpoint
- /api/recover

## Function
- recover_service

## Path Parameters
- None

## Request Body
- None (no payload required)

## Response
- On success (200):
  - JSON object with:
    - message (string): A confirmation message (e.g., "Service recovered").

- On error (500):
  - JSON object with:
    - error (string): Error details describing what went wrong when attempting to start the service.

## Status Codes
- 200 OK — The recovery script was successfully launched.
- 500 Internal Server Error — An exception occurred while attempting to launch the script.

## Notes on Behavior
- The endpoint starts the recovery script and returns immediately; it does not check whether the service is already running or became healthy.
- The script path is resolved relative to the running file and may depend on your deployment layout.

## Sample Request

    curl -X POST https://your-domain.example.com/api/recover \
      -H "Accept: application/json"

## Sample Responses

Success (200):

    {
      "message": "Service recovered"
    }

Error (500):

    {
      "error": "Detailed error message"
    }