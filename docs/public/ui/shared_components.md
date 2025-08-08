---
title: App Component
description: Learn how to use the App component to manage assets and view device history.
---

# App Component

Welcome to the App component! This component is designed to help you manage assets efficiently and view device history in a user-friendly interface.

## What the Component Does

The App component provides a streamlined interface for issuing assets, viewing asset details, and checking device history. It includes the following key features:

- **IssueAssetForm**: A form to issue new assets.
- **AssetTable**: A table displaying asset information, which updates automatically.
- **DeviceHistory**: A section to view the history of devices.

## How to Use the App Component

### Step 1: Issue a New Asset

1. Locate the **IssueAssetForm** on the page.
2. Fill out the necessary details to issue a new asset.
3. Submit the form to add the asset to the system.

   ![submit form](submit-form.png)

> ℹ️ **Info**: Once an asset is issued, the `onIssued` prop is triggered, ensuring the asset is added successfully.

### Step 2: View Asset Details

- Navigate to the **AssetTable** to see a list of all assets.
- The table automatically refreshes, so you always have the latest information.

> 📘 **Note**: The `refresh` prop ensures the AssetTable displays the most up-to-date data.

### Step 3: Check Device History

- Scroll down to the **DeviceHistory** section to view a comprehensive history of device interactions.

## Additional Information

The App component is designed to be responsive and user-friendly, ensuring a smooth experience across different devices.

> ℹ️ **Info**: There are no mapped API routes explicitly tied to actions in the current setup.

By following these steps, you can efficiently manage and track your assets and device history using the App component. Enjoy a seamless asset management experience!

---
title: NotificationBanner Component
description: Learn how to use the NotificationBanner component to display important messages and provide recovery actions.
---

# NotificationBanner Component

The `NotificationBanner` component is designed to display important notifications to users, with an option to recover from certain actions. It is styled to catch attention with a red background and text, making it suitable for alerts or error messages.

## How to Use

1. **Display a Notification:**
   - Use the `text` prop to set the message you want to display in the notification banner. This text will be prominently shown to the user.

2. **Add a Recovery Action:**
   - Implement the `onRecover` prop to provide a callback function that will be executed when the user clicks the recovery button. This is useful for offering users a way to rectify an issue or undo an action.

### Example

```jsx
<NotificationBanner 
  text="Your session has expired. Please log in again." 
  onRecover={handleSessionRecovery} 
/>
```

### Component Structure

- **Notification Message:**
  - The main message is displayed within a `span` inside a styled `div`. The styling includes a red background and text, padding, and rounded corners for a polished look.

- **Recovery Button:**
  - A button is provided for users to trigger the recovery action. It is styled with an underline and smaller text to distinguish it from the main message.

> 📘 **Note:** Ensure that the `onRecover` function is defined in your component logic to handle the recovery process effectively.

### Styling

The component uses a combination of utility classes to achieve its appearance:

- **Container (`div`):** 
  - `bg-red-100`: Light red background.
  - `text-red-800`: Dark red text for high contrast.
  - `p-2`: Padding for spacing.
  - `rounded`: Rounded corners.
  - `mb-2`: Margin at the bottom for spacing between elements.
  - `text-sm`: Smaller text size.
  - `flex justify-between items-center`: Flexbox layout for aligning items.

- **Button:**
  - `text-red-600`: Medium red text.
  - `underline`: Underlined text.
  - `text-xs`: Extra small text size.

This component does not have any mapped API routes, as it primarily focuses on displaying messages and handling user actions through the provided `onRecover` callback.