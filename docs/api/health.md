---
title: GET /health
description: Health check endpoint that returns a simple JSON status indicating the service is running.
---

Overview
This endpoint provides a lightweight health check for the service. It is suitable for load balancer health probes and uptime monitoring. When called, it returns a 200 OK status with a small JSON payload indicating the service is healthy.

- HTTP Method(s): GET
- Endpoint Path: /health
- Function Name: health

Path Parameters
- None

Request Body
- None

Response
- Content Type: application/json
- Body:
  - status (string): The health status of the service. Expected value: "ok".

Status Codes
- 200 OK: The service is healthy.

Sample curl Request
curl -i -X GET http://localhost:5000/health

Example Response
HTTP/1.1 200 OK
Content-Type: application/json

{"status":"ok"}