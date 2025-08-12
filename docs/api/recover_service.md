title: Recover Service
description: POST endpoint that attempts to (re)start the device history service by launching device_history_service.py asynchronously.

# Recover Service

## Overview
This endpoint attempts to recover (start or restart) the device history service by spawning a new Python process that runs device_history_service.py. The process is started asynchronously using subprocess.Popen, so the API returns immediately after initiating the launch.

- Side effect: Spawns a new Python process to run device_history_service.py.
- Non-blocking: Does not wait for the service to fully start before responding.

## Endpoint Summary
- HTTP method: POST
- Path: /api/recover
- Function: recover_service

## Path Parameters
- None

## Request Body
- None

## Response
- Content type: application/json

Possible fields:
- On success (200):
  - message (string): Confirmation that the recovery attempt was initiated.
- On error (500):
  - error (string): Error details describing why the recovery failed (e.g., missing script, execution error).

## Status Codes
- 200 OK: The recovery process was initiated successfully.
- 500 Internal Server Error: An exception occurred while attempting to start the service.

## Notes
- The script path is resolved relative to the server file location: ../../device_history_service.py.
- The server must have Python available on the PATH, and the target script must exist and be executable in the server environment.

## Example
Sample request:

    curl -X POST \
      https://your-domain.example.com/api/recover

Sample successful response (200):

    {
      "message": "Service recovered"
    }

Sample error response (500):

    {
      "error": "Detailed error message"
    }