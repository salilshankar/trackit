title: Health Check API
description: Lightweight liveness endpoint that returns a simple JSON payload indicating the service is healthy.

Overview
The Health Check endpoint provides a quick way to verify that the service is running. It returns a minimal JSON response suitable for uptime monitors, load balancers, and readiness/liveness probes.

- Intended use: Liveness/readiness checks
- Response format: JSON

HTTP Method
- GET

Endpoint
- /health

Function
- health

Path Parameters
- None

Query Parameters
- None

Request Body
- None

Response
- Content-Type: application/json
- Body fields:
  - status (string): The health status of the service. Expected value: "ok".

Status Codes
- 200 OK: The service is healthy.

Example Request (curl)
    curl -sS -X GET https://your-domain.com/health

Example Response
    HTTP/1.1 200 OK
    Content-Type: application/json

    { "status": "ok" }