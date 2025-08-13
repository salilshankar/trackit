---
title: GET /health
description: Simple health check endpoint that returns the service status as JSON.
---

Overview
This endpoint provides a basic health check for the service. It returns a small JSON payload indicating the application is up and responsive. Useful for load balancers, monitoring systems, and uptime checks.

HTTP Method(s)
- GET

Endpoint
- Path: /health

Function
- Name: health

Path Parameters
- None

Query Parameters
- None

Request Body
- None

Response
- Content type: application/json
- Body fields:
  - status (string): The current health status of the service. Example: "ok"

Status Codes
- 200 OK: The service is healthy and responding.

Sample curl Request
  curl -X GET https://your-domain.example.com/health -H "Accept: application/json"

Sample Response
  {
    "status": "ok"
  }