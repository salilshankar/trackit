---
title: App
description: A centered page layout that presents an Issue Asset form, an Assets table, and a Device history section.
---

# Overview

The App component displays a simple, centered workspace for managing assets. It includes:

- A prominent, centered page title.
- An IssueAssetForm section for working with asset issuance.
- An AssetTable section to view assets.
- A DeviceHistory section to review device history.

The layout is constrained to a comfortable reading width with generous spacing for readability.

![App overview](app-overview.png)

> ℹ️ Info  
> The App component serves as a container that organizes these sections on a single page.

# What you’ll see

- Centered page title: Large, bold, and centered at the top.
- IssueAssetForm: A dedicated section for issuing assets.
- AssetTable: A table view for assets, capable of receiving a refresh signal.
- DeviceHistory: A section that shows device history details.

# How to use it

1. Start at the top of the page and review the title to confirm you’re in the right place.
2. Use the IssueAssetForm section to handle asset issuance as needed.
3. Review the AssetTable to see assets listed in a tabular view.
4. Check DeviceHistory for historical information related to devices.

> 📘 Note  
> This page is designed for clarity: content is centered, with consistent vertical spacing to make each section easy to scan.

# Tips

- If you primarily work with issuing assets, start with the IssueAssetForm section, then move down to review the AssetTable and DeviceHistory.
- The layout’s spacing helps you focus on one section at a time as you scroll.

# Developer notes

- IssueAssetForm is rendered with an onIssued prop set to true.
- AssetTable is rendered with a refresh prop that receives an expression: {refreshFlag}.
- DeviceHistory is rendered without props.

> ℹ️ Info  
> No API routes are mapped in this component.

---
title: NotificationBanner
description: Show a red alert banner with a message and an optional recovery action.
---

## What it does

NotificationBanner displays a red, compact banner with your message on the left and a small, link-style action button on the right. It’s designed for error or critical status messages where you also want to offer a quick way to recover or try something else.

![notification banner](notification-banner.png)

- Visual style: red background with red text, small size, rounded corners.
- Layout: message on the left, action button on the right (inline, underlined, small).

## How to use it

1. Place the banner where you want users to see important alerts (e.g., above a form or at the top of a panel).
2. Provide the message via the `text` prop.
3. Provide an action handler via the `onRecover` prop to handle the action button click.

Example (inline):
- `<NotificationBanner text="We couldn’t complete your request." onRecover={() => {/* your recovery logic */}} />`

### Props

- text: string
  - The message shown inside the banner.
- onRecover: function
  - Called when users click the action button on the right.

> 📘 Note  
> The action control is a small, underlined button styled like a link. Pass `onRecover` to make it do something when clicked.

## Tips

- Keep the `text` concise and specific so users understand what happened and what to do next.
- Use this banner for errors or high-severity notices, as the red styling conveys urgency.
- If you enable the action, ensure it’s something users can safely retry or a step that helps them recover.

## Mapped API routes

There are no mapped API routes associated with this component.