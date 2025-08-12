title: POST /api/recover
description: Triggers a background recovery process for the device history service by launching device_history_service.py and returns an immediate status message.

Overview
This endpoint attempts to recover (start or restart) the device history service by spawning a new background Python process that runs device_history_service.py. The response is returned immediately and does not wait for the launched process to complete.

Details
- HTTP method: POST
- Endpoint: /api/recover
- Function: recover_service
- Path parameters: None

Request
- Body: None. The request body is not required and is ignored if provided.

Responses
- 200 OK
  - Fields:
    - message (string): Human-readable success message.
  - Example: {"message": "Service recovered"}

- 500 Internal Server Error
  - Fields:
    - error (string): Error details if the recovery process fails to start.
  - Example: {"error": "details about the exception"}

Behavior and notes
- The server uses subprocess.Popen to launch the script in the background and does not wait for it to finish.
- The script path is resolved relative to the current file: ../../device_history_service.py.
- The command used is python <script_path>; it relies on the system’s default python executable being available on PATH.
- This endpoint performs a side-effecting operation. Ensure appropriate authentication/authorization in production.

Sample request
    curl -X POST http://localhost:5000/api/recover

Status codes
- 200: Recovery process started
- 500: Failed to start the recovery process (exception occurred)