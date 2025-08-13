---
title: App page overview
description: A centered, single-page layout that presents a page title, an issue form section, an assets table, and device history.
---

# App

The App component renders a simple, focused page that brings together three key sections in a clean, centered column layout:
- A large, centered page title
- An IssueAssetForm section
- An AssetTable section
- A DeviceHistory section

![App overview](app-overview.png)

> ℹ️ Info  
> This page is a container for three child components: IssueAssetForm, AssetTable, and DeviceHistory. It uses generous vertical spacing between sections to keep the layout scannable.

## What this component does

- Displays a prominent, centered heading at the top of the page.
- Shows an IssueAssetForm section for asset-related input.
- Lists assets in an AssetTable section.
- Provides a DeviceHistory section for device-related history.
- Keeps everything centered on the page with comfortable spacing between sections.

## How to use it

1. Open the page to view the title and the three sections arranged vertically.
2. Use the IssueAssetForm section to work with asset details as provided by your implementation.
   - ![submit form](submit-form.png)
3. Review the AssetTable section to see the current list of assets.
4. Check the DeviceHistory section to view device-related history information.

> 📘 Note  
> The exact fields, actions, and contents inside IssueAssetForm, AssetTable, and DeviceHistory are defined by those components. This App component only arranges them on the page.

## Layout and presentation

- Centered column: Content is centered within a comfortable max width to maintain readability.
- Vertical spacing: Sections are separated with consistent spacing for clarity.
- Title styling: The page title is large and bold, centered above the content.

## Developer notes

- IssueAssetForm is rendered with a prop onIssued set to true.
- AssetTable is rendered with a refresh prop (passed an expression).
- DeviceHistory is rendered without props.
- There are no mapped API routes from this component.

> ℹ️ Info  
> App does not expose its own props. It serves as a parent layout that composes the three sections and passes the props shown above to the child components.

---
title: NotificationBanner
description: Show a concise red alert with a message and a recovery action your users can click.
---

## What it does

NotificationBanner displays a compact, red-toned banner designed for errors or critical notices. It presents:

- A message area
- A small, underlined action button aligned to the right that triggers your recovery callback

It appears with:
- Red background and red text
- Padding, rounded corners, and small text size
- A horizontal layout that spaces the message and action

![Notification banner example](notification-banner.png)

## How to use it

1. Add the component where you need to surface an error or important notice.
2. Provide `text` with the message you want to display.
3. Provide an `onRecover` function to run when the user clicks the action button.

### Props

- `text`: The message shown in the banner.
- `onRecover`: Function called when the action button is clicked.

> 📘 Note  
> The action button’s click is wired to your `onRecover` callback. Ensure this function handles the recovery path you want (e.g., retrying an action or guiding the user to fix an issue).

## Tips

- Keep the message brief and clear; the banner uses small text and compact spacing.
- Use this component for error or high-severity alerts (it’s styled in red).
- Place it near the relevant content so users immediately see what needs attention.
- Always pass a meaningful `text` value so the banner communicates the issue effectively.

> ℹ️ Info  
> There are no mapped API routes associated with this component. Any follow-up actions should be handled inside your `onRecover` callback.