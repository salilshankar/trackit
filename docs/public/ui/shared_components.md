---
title: App: Issue Assets, View Assets, and Device History
description: Use the App page to issue assets, review the asset list, and browse device history in a clean, centered layout.
---

# Overview

The App component presents a single, centered page with three sections:
- A form for issuing assets
- A table of existing assets
- A device history view

A large, bold, centered title appears at the top to orient you on the page.

> ℹ️ Info  
> This documentation focuses on what’s visible from the component structure. Exact field labels, table columns, or history details depend on the child components (IssueAssetForm, AssetTable, DeviceHistory).

## What you can do here

- Issue new assets using the form section.
- Review a list of assets in a table layout.
- Explore device history in a dedicated section.

## How to use it

1. Read the title at the top of the page to confirm you’re in the right place.
2. In the IssueAssetForm section, follow the on-screen form to issue an asset.
   - ![submit form](submit-form.png)
3. Check the AssetTable section to review assets.
   - ![asset table](asset-table.png)
4. Open the DeviceHistory section to browse historical activity.
   - ![device history](device-history.png)

## Layout and behavior

- The page content is centered with a comfortable maximum width for readability.
- Sections are spaced vertically to keep the flow clear.
- The page title is large, bold, and centered for quick scanning.

> 📘 Note  
> The AssetTable supports a “refresh” capability controlled by the app. There isn’t a visible refresh button in this component.

## Tips and states

- Required fields, validation messages, and empty states are managed within the child components and aren’t defined here.
- If a section appears empty, it may be waiting for data or input provided within that section’s component.

## API routes

- None are mapped directly in this component.

---
title: NotificationBanner
description: Display a red notification banner with message text and a right-aligned action that triggers a recovery callback.
---

# NotificationBanner

A compact, red-tinted banner for alerts or errors. It shows your message and includes a right-aligned action that calls a recovery handler when clicked.

![notification banner](notification-banner.png)

## What it does

- Renders a red banner styled for alerts.
- Displays your message text.
- Shows a small, underlined action on the right; clicking it calls the provided recovery callback.

> ℹ️ Info  
> The action is implemented as a button. Its onClick triggers the onRecover prop you provide.

## How to use it

1. Place NotificationBanner where you want to alert users.
2. Pass the message via the text prop.
3. Provide a function to onRecover to handle the action click.

Props:
- text: string — The message displayed in the banner.
- onRecover: function — Called when the right-aligned action is clicked.

> 📘 Note  
> This component focuses on presentation and invoking your callback. Any follow-up behavior (such as navigation, retrying a request, or resetting state) should be handled in your onRecover function.

## Tips

- Keep the message concise so it fits comfortably in the compact banner.
- Use clear, actionable language in text to set expectations for the recovery action.

## Mapped API routes

- None. This component does not directly map to any API routes.