---
title: App
description: Main screen that centers content and shows an asset issuance form, an assets table, and device history, under a prominent page heading.
---

## What this component does

App lays out the primary workspace for asset management. It displays:
- A prominent, centered page heading.
- A form for issuing or registering an asset (IssueAssetForm).
- A table of assets (AssetTable).
- A device history section (DeviceHistory).

> ℹ️ Info  
> The content is centered with comfortable spacing and a maximum width for readability.

## How to use it

1. Review the page heading at the top to confirm you’re on the right screen.
2. Use the IssueAssetForm to submit a new asset issuance.
   - ![Issue asset form](issue-asset-form.png)
3. Review the AssetTable to see listed assets.
   - ![Assets table](asset-table.png)
4. Check DeviceHistory to view related device activity.
   - ![Device history](device-history.png)

## Layout and appearance

- The page is centered on large screens with a comfortable max width.
- Generous vertical spacing separates the heading, form, table, and history sections.
- The heading is large, bold, and centered for clear hierarchy.

> 📘 Note  
> Exact field names, table columns, and history details are provided by the IssueAssetForm, AssetTable, and DeviceHistory components themselves and may vary by implementation.

## Mapped API routes

- None are mapped in this component.

---
title: NotificationBanner
description: Show an inline red alert with a compact action to trigger a recovery handler.
---

## What this component does

NotificationBanner displays a compact, red-styled message with an inline action. Your message appears on the left, and a small, underlined action button sits alongside it. Clicking the action triggers your recovery handler.

![notification banner](notification-banner.png)

- Visual style: red background, red text, small size, rounded corners
- Layout: single line with the message and action spaced apart

## How to use it

1. Place the component where you want the alert to appear in your UI.
2. Pass a short, clear message via the `text` prop.
3. Provide an `onRecover` function to handle clicks on the action button.

### Props

- text: The message shown inside the banner.
- onRecover: Function called when the action button is clicked.

> 📘 Note  
> If you don’t supply `onRecover`, the action button won’t perform any action when clicked.

## Tips and behavior

- The action is rendered as a small, underlined red button for emphasis.
- The banner is compact and intended for inline use above or near relevant content.
- Spacing and sizing are optimized for brief messages; keep the text concise.

> ℹ️ Info  
> This component doesn’t call any API routes directly. It simply invokes your `onRecover` handler when the action button is clicked.