---
title: App
description: Get oriented with the App page that presents an Issue Asset form, an assets table, and a device history section in a simple, centered layout.
---

# App

The App page brings together three key sections so you can issue assets and review what’s already in your system:

- A centered page title (H1)
- IssueAssetForm
- AssetTable
- DeviceHistory

All content is presented in a clean, centered layout with comfortable spacing for readability.

## What you can do here

- Issue a new asset using the IssueAssetForm.
- View a list of assets in the AssetTable.
- Review device-related history in DeviceHistory.

## How to use it

1. Start at the top
   - You’ll see a centered page title that introduces the page.

2. Issue a new asset
   - Use the IssueAssetForm section to create/issue a new asset.
   - Complete the form as prompted by the UI.
   - When you’re done, submit the form according to the controls provided in that section.
   - ![Issue Asset form](issue-asset-form.png)

3. Review assets
   - Check the AssetTable section to see assets listed in a table format.
   - ![Assets table](assets-table.png)

4. Check device history
   - Open the DeviceHistory section to review past device activity or records as provided by the UI.
   - ![Device history](device-history.png)

## Tips

- If the AssetTable or DeviceHistory appears empty, it can mean there are no items to display yet.
- Use the sections independently—issuing an asset, reviewing assets, and checking device history are presented as distinct parts of the page.

> ℹ️ Info  
> From the visible JSX:
> - IssueAssetForm is rendered with a prop `onIssued` set to `true`.  
> - AssetTable is rendered with a `refresh` prop sourced from an expression.  
> - No mapped API routes are exposed here.

---
title: NotificationBanner
description: Display a red alert banner with a message and a single recovery action.
---

# NotificationBanner

A compact, red-tinted banner for surfacing alerts or failures. It shows your message and provides a small action button to let users attempt recovery.

![notification banner](notification-banner.png)

> ℹ️ Info  
> This component renders a red alert-style container with your text on the left and a small, underlined action button on the right.

## What it does

- Shows a red alert banner with rounded corners and small text.
- Displays your provided message.
- Includes a right-aligned action button that runs your recovery handler when clicked.

Visual details (from styles):
- Red background with dark red text.
- Compact padding, small type, and a horizontal layout that spaces message and action apart.
- Action button appears as a small, underlined red link.

## How to use

1. Place the banner where you want to surface an alert to the user.
2. Pass a text string to describe the issue.
3. Provide an onRecover function to handle the user’s click on the action button.

Props:
- text: string — The message shown in the banner.
- onRecover: function — Called when the action button is clicked.

Example:
- Set text="We couldn’t complete your request."
- Set onRecover to a function that attempts your recovery flow.

> 📘 Note  
> The action button’s click handler comes from the onRecover prop. Provide this prop to make the button interactive.

## Tips

- Keep the text concise and actionable so users understand what happened.
- Pair the banner with a clear recovery path via onRecover to help users resolve the issue.
- This banner uses a compact layout and small text, making it suitable to stack above or below related content.

## API routes

There are no mapped API routes associated with this component.