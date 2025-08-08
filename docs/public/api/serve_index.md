---
title: Serve Index Route
description: Documentation for the root endpoint that serves the main index HTML file of the application.
---

# Serve Index Route

This document provides information about the root endpoint (`/`) of the application, which is responsible for serving the main index HTML file. This is typically used to deliver the main page of a web application to the client.

## Overview

The root endpoint serves the `index.html` file located in the `app/static` directory. It is commonly used to load the initial page of a web application, allowing users to interact with the client-side interface.

## HTTP Method

- **GET**

## Endpoint Path

- **/**

## Function Name

- **serve_index**

## Path Parameters

There are no path parameters for this endpoint.

## Request Body Fields

This endpoint does not require any request body fields.

## Response Fields

The response consists of the HTML content of the `index.html` file. There are no additional fields or structured data returned.

## Status Codes

- **200 OK**: The request was successful, and the `index.html` file was returned.
- **404 Not Found**: The requested resource could not be found. This may occur if the `index.html` file is missing from the `app/static` directory.

## Sample Request

Here is an example of how to make a request to this endpoint using `curl`:

```bash
curl -X GET http://yourdomain.com/
```

Replace `http://yourdomain.com/` with the actual domain where your application is hosted. This request will return the HTML content of the `index.html` file, typically rendering the main page of your web application in a browser.