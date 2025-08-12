---
title: GET /health
description: Lightweight health check endpoint that returns the service status as JSON.
---

Overview
This endpoint provides a simple health check for the service. It is commonly used by load balancers, monitoring systems, or container orchestrators (e.g., Kubernetes) to verify that the application is running.

Route details
- HTTP method: GET
- Endpoint path: /health
- Function name: health

Path parameters
- None

Request
- Body: None
- Query parameters: None

Response
- Content type: application/json
- Body fields:
  - status (string): The current health status of the service. In this implementation, it always returns "ok".

Example response body:
    {
      "status": "ok"
    }

Status codes
- 200 OK: The service is healthy.

Sample curl request
    curl -X GET https://your-domain.example.com/health

Notes
- This implementation always returns 200 with {"status":"ok"}. If you need deeper checks (e.g., database connectivity), consider extending the handler to perform those validations and return appropriate status codes.