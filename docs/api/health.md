---
title: GET /health
description: Health check endpoint that returns the service status for readiness/liveness monitoring.
---

Overview
The /health endpoint provides a simple liveness/readiness check for the service. It responds with a small JSON payload indicating the service is up and reachable. This is commonly used by load balancers, orchestrators, and uptime monitors.

- HTTP Method: GET
- Endpoint: /health
- Function: health

Path Parameters
- None

Query Parameters
- None

Request Body
- None

Response
- Content type: application/json
- Body:
  - status (string): A fixed string indicating the service status. Expected value: "ok".

Example response body:
    {
      "status": "ok"
    }

Status Codes
- 200 OK: The service is healthy and responding.

Sample curl request
    curl -sS -X GET https://your-api.example.com/health

Notes
- This endpoint is safe to call frequently and is intended for automated health checks.