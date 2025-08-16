title: POST /api/recover
description: Triggers a background recovery of the device history service by launching a Python script and returns a JSON status message.

Overview
This endpoint attempts to recover a backend service by starting the device_history_service.py script in a new background process. The call responds immediately; it does not wait for the script to complete or verify its runtime health.

- Implementation: subprocess.Popen(['python', <computed script path>])
- Behavior: Fire-and-forget; asynchronous process launch

HTTP method
- POST

Endpoint
- /api/recover

Function
- recover_service

Path parameters
- None

Request body
- None

Responses
- 200 OK
  - Content type: application/json
  - Body fields:
    - message (string): Human-readable confirmation that the recovery was triggered.
  - Example: `{"message":"Service recovered"}`

- 500 Internal Server Error
  - Content type: application/json
  - Body fields:
    - error (string): Error message describing why the recovery could not be started.
  - Example: `{"error":"<details>"}`

Status codes
- 200: Recovery process was successfully started.
- 500: An exception occurred while attempting to start the recovery process.

Notes
- The script path is computed relative to the current module location: ../../device_history_service.py.
- The process is started using the system’s default python executable on PATH. If python is unavailable or the script path is invalid, the endpoint returns a 500 error.
- No PID or process state is returned; the endpoint does not track the launched process.

Sample curl
- `curl -X POST https://your-host.example.com/api/recover`