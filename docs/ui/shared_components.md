---
title: App
description: A page layout that centers a header and assembles an asset issuance form, an asset table, and device history into one screen.
---

# App

The App component renders a single, centered page that helps you issue assets, review existing assets, and see device history at a glance.

What you’ll see on this screen:
- A prominent, centered page title
- IssueAssetForm — a form area for issuing assets
- AssetTable — a tabular view of assets
- DeviceHistory — a section for device-related history

> ℹ️ Info  
> Content is centered with comfortable spacing and padding for readability.

## How to use it

1. Read the page title to confirm you’re on the correct screen.
2. Use the IssueAssetForm to issue an asset.
   - Fill in the form fields provided by the IssueAssetForm.
   - Submit the form to complete the action.
   
   ![submit form](submit-form.png)

3. Review assets in the AssetTable.
   - Browse the table to find newly issued or existing assets.
   
   ![assets table](asset-table.png)

4. Check DeviceHistory for relevant historical information.
   
   ![device history](device-history.png)

## Notes and tips

- IssueAssetForm is rendered with a prop named onIssued set to true.
- AssetTable is rendered with a refresh prop (provided as an expression).
- DeviceHistory is rendered without additional props.

> 📘 Notes  
> Validation messages, empty states, and specific field labels are provided by the embedded components (IssueAssetForm, AssetTable, DeviceHistory) and aren’t defined in this container.

## API routes

- No API routes are mapped in this component.

---
title: NotificationBanner
description: Display a red notification with message text and a small action button that triggers a recovery handler.
---

# NotificationBanner

## What it does
- Shows a red-toned notification banner with small text, rounded corners, and spacing.
- Displays your message.
- Includes a small underlined button on the right that calls your onRecover handler when clicked.
- Lays out content in a single row, keeping the message and action aligned.

![notification banner example](notification-banner.png)

## How to use
1. Place the component where you want to surface a notification to the user.
2. Provide the text prop with the message you want to display.
3. Pass the onRecover prop a function to run when the user clicks the action button.
4. Keep your message concise to fit comfortably on one line; longer text may wrap.

### Props
- text: string — The message shown in the banner.
- onRecover: function — Called when the action button is clicked.

> 📘 Note  
> The banner is styled with a red color scheme, suitable for alerts or important notices.

## Tips
- Always pass a meaningful text message so the banner communicates clearly.
- Ensure onRecover is a valid function so the action button is interactive.
- The button is visually subtle (small, underlined). Use concise action text inside the component’s implementation to keep it clear.

> ℹ️ Info  
> This component has no mapped API routes. Any network or recovery logic should be handled in the function you provide to onRecover.