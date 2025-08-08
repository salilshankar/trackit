---
title: AssetTable Component
description: Learn how to use the AssetTable component to display asset data in a structured table format.
---

# AssetTable Component

The `AssetTable` component is designed to display a list of assets in a clean, organized table format. This component provides a straightforward way to view asset information with a user-friendly interface.

## How to Use the AssetTable

1. **Display the Table**: The `AssetTable` automatically renders a table with a white background, padding, and a shadow for a polished look. The table includes a header and rows for asset data.

2. **Table Structure**:
   - The table header (`<thead>`) is styled with a light gray background to distinguish it from the data rows.
   - Each column header (`<th>`) is left-aligned with padding for readability.
   - Asset data is displayed in rows (`<tr>`) with a border-top to separate each entry.

3. **Interacting with Data**:
   - Each row of data is clickable, allowing for potential interaction or selection.
   - The component does not explicitly provide buttons or controls for refreshing data, but it does support a `refresh` prop for potential data updates.

## Tips

- Ensure that the asset data is correctly formatted and available to be displayed in the table.
- The component is styled to be responsive and should fit within most standard layouts.

> 📘 **Note**: The `AssetTable` fetches asset data using a `GET` request to the `/api/assets` endpoint. Ensure your API is configured to handle this request and return data in the expected format.

By following these instructions, you can effectively utilize the `AssetTable` component to present asset data in a structured and visually appealing manner.

---
title: DeviceHistory Component
description: Learn how to use the DeviceHistory component to view and manage device history.
---

## What the DeviceHistory Component Does

The `DeviceHistory` component allows you to view the history of devices associated with an employee. By entering an employee's email, you can fetch and display their device history. This component also handles errors and provides a way to recover from them.

## How to Use the DeviceHistory Component

1. **Enter Employee Email**:  
   In the input field labeled "Employee Email", type the email address of the employee whose device history you wish to view.

   ![Enter employee email](enter-email.png)

2. **Fetch Device History**:  
   Click the button styled with a blue background and white text to fetch the device history for the entered email. This action will trigger the retrieval of device data.

   ![Fetch device history](fetch-history.png)

3. **View Notifications**:  
   If there is an error during the fetching process, a notification banner will appear displaying the error message. You can attempt to recover from the error using the provided recovery option.

   ![Error notification](error-notification.png)

## Tips and Additional Information

- **Input Validation**: Ensure that the email entered is valid to successfully fetch the device history.
- **Error Handling**: The component includes a `NotificationBanner` that displays error messages and provides a recovery option if something goes wrong.
- **Styling**: The component is styled with a clean, modern look using white backgrounds and blue accents for action elements.

> 📘 **Note**: The component interacts with the `/api/recover` endpoint via a POST request to handle recovery actions when errors occur.

By following these steps, you can effectively use the `DeviceHistory` component to manage and view device history associated with employees.

---
title: IssueAssetForm Component
description: Learn how to use the IssueAssetForm component to issue new assets efficiently.
---

## What the Component Does

The `IssueAssetForm` component allows you to issue new assets by selecting an asset type and submitting the form. It provides a user-friendly interface to facilitate the asset issuance process.

## How to Use the IssueAssetForm

1. **Open the Form**: Access the form where you want to issue a new asset.

2. **Select Asset Type**:
   - Use the dropdown menu to select the type of asset you wish to issue. Options include:
     - Laptop
     - Monitor
     - Keyboard
     - Mouse
     - Phone
     - Tablet
     - Other

   ![select asset type](select-asset-type.png)

3. **Submit the Form**:
   - Once you've selected the asset type, click the **Submit** button to issue the asset.
   - The submit button is styled with a blue background and white text for easy identification.

   ![submit form](submit-form.png)

   > 📘 **Note**: The submit button will be disabled if the form is in a loading state, ensuring that you do not submit the form multiple times accidentally.

## Additional Information

- **Form Styling**: The form is styled with a white background, padding, and a shadow for better visual separation.
- **API Interaction**: On submission, the form sends a `POST` request to the `/api/assets` endpoint to process the asset issuance.

> ℹ️ **Info**: Ensure that all required fields are filled out to successfully submit the form. The asset type selection is mandatory.