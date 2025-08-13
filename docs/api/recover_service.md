---
title: Recover Service
description: Start/recover the device history service by launching device_history_service.py in a background process.
---

Overview
This endpoint attempts to recover the device history service by spawning a new Python process that runs device_history_service.py. The process is started asynchronously (non-blocking), and the API responds immediately after initiating the subprocess.

HTTP Request
- Method: POST
- Path: /api/recover
- Function: recover_service

Path Parameters
- None

Query Parameters
- None

Request Body
- None

Behavior and Side Effects
- Starts a new background process using the system’s default python executable:
  - Command: python <path-to>/device_history_service.py
  - The script path is resolved relative to the current file location: two directories up (../../device_history_service.py).
- The endpoint returns immediately after initiating the process; it does not wait for the script to complete or verify its health.
- Each call starts another process. Avoid repeated calls unless intentional.

Response
- 200 OK
  - Content-Type: application/json
  - Body:
    - message (string): Confirmation message.
  - Example:
        {
          "message": "Service recovered"
        }

- 500 Internal Server Error
  - Content-Type: application/json
  - Body:
    - error (string): Error details if the subprocess could not be started.
  - Example:
        {
          "error": "Detailed error message"
        }

Status Codes
- 200 — Subprocess successfully started.
- 500 — Failed to start the subprocess (e.g., script not found, permission issues, Python not in PATH).

Operational Notes
- Prerequisites:
  - device_history_service.py must exist at ../../device_history_service.py relative to this endpoint’s module.
  - The server user must have permission to spawn processes.
  - A suitable python executable must be available on PATH.
- Security: This operation can affect service state. It should typically be restricted to authorized administrators.

Sample curl
    curl -X POST \
      -H "Accept: application/json" \
      https://your-domain.example.com/api/recover