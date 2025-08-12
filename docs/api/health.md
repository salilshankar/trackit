title: GET /health
description: Lightweight health check endpoint that returns the service status as JSON.

Overview
The /health endpoint provides a simple health check for the service. It returns a small JSON payload indicating whether the application is running. This route is typically used by load balancers, uptime monitors, and container orchestrators for liveness/readiness checks.

HTTP Method
- GET

Endpoint
- /health

Function
- health

Path Parameters
- None

Request Body
- None

Response
- Content type: application/json
- Body fields:
  - status (string): The current health status of the service. Expected value: "ok".

Example response body:
    {
      "status": "ok"
    }

Status Codes
- 200 OK: The service is healthy.

Sample curl
    curl -X GET https://your-domain.tld/health

Notes
- This endpoint returns a static JSON response with HTTP 200 when the application is running and able to handle requests. Integration environments may layer additional checks or authentication depending on deployment configuration.