title: Recover Service
description: Start or recover the device history service by launching device_history_service.py in a background process.

Overview
This endpoint attempts to recover the device history service by starting the device_history_service.py script as a background process on the server. The operation returns immediately after spawning the process; it does not wait for or verify the new process’s completion.

Details
- HTTP method: POST
- Endpoint: /api/recover
- Handler function: recover_service

Path parameters
- None

Request body
- None (no request payload required)

Behavior
- On invocation, the server computes the path to device_history_service.py relative to the running application file and executes it using the system’s python interpreter via subprocess.Popen.
- The process is launched in the background; the API returns as soon as the process is started.
- If the process is started successfully, a confirmation message is returned.
- If an error occurs (e.g., script not found, execution environment issues), an error message is returned.

Response
- Success (200):
  - message (string): Confirmation that the service recovery was initiated.
    - Example: {"message": "Service recovered"}
- Error (500):
  - error (string): Error description.
    - Example: {"error": "Detailed error message"}

Status codes
- 200 OK: The recovery process was started.
- 500 Internal Server Error: The server failed to start the recovery process.

Notes
- The server uses the python command found in its PATH. Ensure the appropriate interpreter (e.g., python vs python3) and environment are available on the server.
- The script path is resolved relative to the current file: ../../device_history_service.py.

Sample curl request
curl -X POST https://your-domain.example.com/api/recover

Sample responses
- 200 OK:
  {"message": "Service recovered"}

- 500 Internal Server Error:
  {"error": "No such file or directory: '.../device_history_service.py'"}