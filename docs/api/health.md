---
title: GET /health
description: Lightweight health check endpoint that returns the service status as JSON.
---

Overview
This endpoint provides a simple health check to verify that the service is up and responsive. It returns a minimal JSON payload indicating operational status, making it suitable for uptime monitoring and load balancer health probes.

Endpoint details
- HTTP method: GET
- Path: /health
- Function: health

Path parameters
- None

Request body
- None

Response
- Content type: application/json
- Body:
  - status (string): The current service status. Example: "ok"

Status codes
- 200 OK: The service is healthy and responding.

Sample curl request
curl -X GET https://your-domain.example.com/health

Notes
- No request body is required.
- This endpoint is typically polled by monitoring tools to assess service availability.