---
title: App — Issue Assets, View Asset Table, and Device History
description: Use the App page to issue assets, browse the asset table, and review device history in a clear, centered layout.
---

# Overview

The App component lays out a simple, focused page that helps you work with assets and devices. It presents:

- A prominent, centered page title.
- An IssueAssetForm section to handle asset issuance.
- An AssetTable to view assets in a tabular list.
- A DeviceHistory section to review device-related history.

The content is centered on the page with a comfortable maximum width and vertical spacing between sections for readability.

![page overview](page-overview.png)

> ℹ️ Info  
> This page composes three child components: IssueAssetForm, AssetTable, and DeviceHistory. Their exact fields and interactions are defined within those components.

## What you can do here

- Issue a new asset using the IssueAssetForm area.
- Browse assets in the AssetTable.
- Review device history in the DeviceHistory section.

## How to use this page

1. Start at the top of the page and review the title to confirm you’re in the right place.
2. In the IssueAssetForm section, complete the form to issue an asset.
   - When you’re done, submit the form according to the controls provided within that section.
   - ![issue asset form](issue-asset-form.png)
3. Scroll to the AssetTable to browse assets.
   - Look through the listed entries to find what you need.
   - ![asset table](asset-table.png)
4. Continue to DeviceHistory to review relevant device events or records.
   - ![device history](device-history.png)

## Layout and presentation

- The page is centered with a maximum content width for comfortable reading.
- Sections are stacked vertically with consistent spacing.
- The page title is large, bold, and centered for quick scanning.

> 📘 Note  
> The AssetTable is rendered with a refresh flag provided by the parent. Any visible refresh behavior or controls are handled inside the table itself.

## Mapped routes

No mapped API routes are declared by this component.

---
title: NotificationBanner
description: Show a compact red alert with a message and an action button that triggers your recovery handler.
---

# NotificationBanner

A compact, red-tinted banner for important alerts. It displays your message and includes a small, underlined action button that calls your recovery handler when clicked.

![notification banner](notification-banner.png)

> ℹ️ Info  
> Visually, the banner appears as a red background with red text, small type, rounded corners, and the content laid out in a single row with space between the message and the action.

## What it does
- Shows an alert message.
- Renders a clickable action on the right that invokes your onRecover handler.

## How to use

1. Provide the message to display via the text prop.
2. Pass a function to onRecover to handle what should happen when the action is clicked.
3. Place the banner where you want the alert to appear in your UI.

Example:
```jsx
function Page() {
  const handleRecover = () => {
    // Your recovery logic here (e.g., retry, reopen, or navigate)
  };

  return (
    <NotificationBanner
      text="We couldn't complete your request."
      onRecover={handleRecover}
    />
  );
}
```

## Props
- text: string — The message shown in the banner.
- onRecover: function — Called when the action button is clicked.

> 📘 Notes  
> - The action appears as a small, underlined red link-style button.  
> - The component’s layout is a single row: message on the left, action on the right.

## Mapped API routes
None. This component does not map to any API routes; it only triggers your provided onRecover handler.