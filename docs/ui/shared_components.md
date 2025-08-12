---
title: App overview
description: Use the App page to issue assets, view the current asset list, and review device history—all in a clean, centered layout.
---

## What this component does

The App component renders a single page with a centered layout and clear vertical spacing. It includes:

- A prominent, centered page heading (H1).
- An IssueAssetForm section configured to be active for issuance.
- An AssetTable that accepts a refresh prop.
- A DeviceHistory section.

Visually, the content is centered with a comfortable maximum width and consistent spacing between sections.

![Issue an asset](issue-asset-form.png)
![Asset list](asset-table.png)
![Device history](device-history.png)

> ℹ️ Info  
> App does not accept any props.

## How to use it

1. Open the App page. You’ll see a large, centered heading at the top.
2. Use the IssueAssetForm section to complete the steps required to issue an asset.
3. Review the AssetTable section to see the list of assets.
4. Check the DeviceHistory section to review device-related activity.

> 📘 Notes  
> - IssueAssetForm is rendered with onIssued set to true.  
> - AssetTable is rendered with a refresh prop. Any refresh behavior is handled inside AssetTable.  
> - The exact fields, controls, and interactions in IssueAssetForm, AssetTable, and DeviceHistory are defined by those components and aren’t specified here.

## Tips and behavior you can expect

- Page layout: content is centered with ample spacing between sections for readability.
- Heading: large, bold, and centered for instant orientation.

## API routes

There are no mapped API routes surfaced by this component.

---
title: NotificationBanner
description: Display a compact, red-styled notification with your message and a small action button.
---

# NotificationBanner

A compact, red-styled banner for drawing attention to issues or important notices. It shows your message on the left and a small, underlined action button on the right.

![notification banner](notification-banner.png)

- Layout: horizontal, with space between message and action.
- Style: light red background, red text, rounded corners, small text size, and bottom margin.
- Action: a small underlined red button aligned to the right.

## How to use it

1. Add the component to your UI where you need a notice.
2. Pass the message you want to show via the `text` prop.
3. Provide an `onRecover` function to handle clicks on the action button.

Example (inline):
- `<NotificationBanner text="Something went wrong." onRecover={handleRecover} />`

> 📘 Note  
> The component renders a button with `onClick={onRecover}`. The button’s visible label isn’t defined here, but clicking it will call the function you pass.

## Props

- text (string)  
  The message to display in the banner.

- onRecover (function)  
  Called when the banner’s button is clicked.

## Tips

- Keep the `text` concise so it fits nicely in the compact layout.
- This banner uses red tones, making it suitable for errors or important alerts.
- If you don’t provide `onRecover`, the button will render but clicking it won’t do anything.

## API routes

There are no mapped API routes associated with this component.