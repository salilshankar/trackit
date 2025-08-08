title: Health Check Endpoint  
description: A simple endpoint to verify the health status of the API.

# Health Check Endpoint

## Overview
The `/health` endpoint is a simple health check mechanism used to verify that the API is running and responsive. It returns a basic status message to confirm the system's operational state.

## HTTP Method
- `GET`

## Endpoint Path
- `/health`

## Function Name
- `health`

## Path Parameters
- None

## Request Body Fields
- None

## Response Fields
- `status`: A string indicating the health status. Always returns `"ok"`.

## Status Codes
- `200 OK`: The request was successful, and the API is operational.

## Example Request

To check the health of the API, you can use the following `curl` command:

    curl -X GET http://<your-api-domain>/health

Replace `<your-api-domain>` with the actual domain where your API is hosted. This request will return a JSON object with the health status and a status code of 200 if the API is healthy.