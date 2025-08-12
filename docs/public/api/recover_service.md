---
title: Recover Service
description: Starts the device history service by launching device_history_service.py in a new subprocess and returns immediately with the outcome.
---

Overview
This endpoint attempts to recover or restart a background service by spawning the device_history_service.py script as a new process. It responds immediately after initiating the subprocess and does not wait for the script to complete.

- The script path is resolved relative to the server code location: ../../device_history_service.py.
- The subprocess is launched using the system's python executable via subprocess.Popen.

HTTP Method
- POST

Endpoint
- /api/recover

Function
- recover_service

Path Parameters
- None

Query Parameters
- None

Request Body
- None

Responses
- 200 OK
  - Content-Type: application/json
  - Body:
    - message (string): Confirmation that the recovery process was initiated.
      - Example: "Service recovered"
- 500 Internal Server Error
  - Content-Type: application/json
  - Body:
    - error (string): Error message describing what went wrong when attempting to start the subprocess.

Status Codes
- 200: Subprocess successfully spawned.
- 500: Failed to spawn the subprocess (e.g., missing script, permissions, environment/path issues).

Notes
- The operation is non-blocking; it does not verify that the launched service remains running or becomes healthy.
- Each call will attempt to start a new instance of the script. Ensure your environment or supervisor handles duplicates appropriately.
- The server must have permission to execute Python and access the target script at the resolved path.

Sample curl
    curl -X POST https://your-domain.example.com/api/recover

Example Responses
- Success (200):
  {
    "message": "Service recovered"
  }

- Error (500):
  {
    "error": "Detailed error message"
  }