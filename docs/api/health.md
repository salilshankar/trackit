---
title: GET /health — Health Check
description: A simple liveness/readiness endpoint that returns {"status":"ok"} with HTTP 200 when the service is healthy.
---

Overview
This endpoint provides a lightweight health check for the service. It can be used by load balancers, orchestrators, or monitoring systems to verify that the application is running and responsive.

- HTTP method: GET
- Endpoint path: /health
- Function name: health

Path parameters
- None

Request body
- None

Response
- Content type: application/json
- Body fields:
  - status (string): Fixed value "ok" when the service is healthy.

Example response body:
    {
      "status": "ok"
    }

Status codes
- 200 OK: The service is healthy.

Sample curl request
    curl -X GET http://localhost:5000/health

Notes
- This route requires no request body and typically no authentication.
- Suitable for use as a liveness or readiness probe in deployment environments.