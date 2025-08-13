---
title: Recover Service
description: Starts the device history service in the background and returns an immediate status response.
---

## Overview

Use this endpoint to trigger a recovery action for the device history service. Internally, it launches the script `device_history_service.py` as a background process using the system’s `python` executable. The request returns immediately; it does not wait for the started process to complete.

Notes:
- Each call spawns a new process; calling repeatedly may start multiple instances.
- The server environment must have `python` on the PATH and the script available at `../../device_history_service.py` relative to the running module.

## HTTP Method
- POST

## Endpoint
- /api/recover

## Function
- recover_service

## Path Parameters
- None

## Request Body
- None (no payload is required or used)

## Responses

- 200 OK
  - Body:
    - message (string): Confirmation that the recovery was triggered.
  - Example:
    
        {
          "message": "Service recovered"
        }

- 500 Internal Server Error
  - Body:
    - error (string): Error description if the process launch fails.
  - Example:
    
        {
          "error": "Detailed error message"
        }

## Sample Request

    curl -X POST https://your-server.example.com/api/recover

## Status Codes
- 200 — Recovery process successfully initiated.
- 500 — An error occurred while attempting to start the service.