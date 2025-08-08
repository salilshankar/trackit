title: Device History Retrieval API  
description: Retrieve the device history for a specific user identified by their email address.

## Overview

The Device History Retrieval API allows clients to obtain a history of devices associated with a specific user's email. This is useful for applications that need to track or display device usage history linked to user accounts.

### HTTP Method

- GET

### Endpoint Path

- `/api/device-history/{email}`

### Function Name

- `get_device_history`

### Path Parameters

- `email` (string): The email address of the user whose device history is being requested. This parameter is required and should be URL-encoded if it contains special characters.

### Request Body Fields

- None. The request does not require a body.

### Response

The API returns a JSON object. Although the specific fields are not detailed in the metadata, we can infer that the response will typically include device history data related to the specified email. In case of an error, the response will include an error message.

### Status Codes

- `200 OK`: The request was successful, and the device history is returned.
- `500 Internal Server Error`: An error occurred while contacting the device-history service. The response will include an error message indicating the service is unavailable.

### Sample `curl` Request

To fetch the device history for a user with the email `user@example.com`, you can use the following `curl` command:

```
curl -X GET http://localhost:5000/api/device-history/user%40example.com
```

This command assumes that the Flask server is running locally on port 5000. Adjust the host and port as necessary based on your deployment environment.