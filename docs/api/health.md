title: GET /health — Health Check
description: A lightweight health check endpoint that returns the service status for monitoring and uptime probes.

Overview
The /health endpoint provides a simple way to verify that the service is running. It returns a small JSON payload indicating the service status, making it suitable for load balancer checks, uptime monitors, and container liveness/readiness probes.

- HTTP Method: GET
- Endpoint Path: /health
- Function Name: health

Path Parameters
- None

Request Body
- None

Response
- Content: JSON object
- Fields:
  - status (string): The current health status of the service. Expected value: "ok".

Example Response
    {
      "status": "ok"
    }

Status Codes
- 200 OK: The service is healthy and responding.

Sample curl
    curl -X GET http://localhost:5000/health -H "Accept: application/json"