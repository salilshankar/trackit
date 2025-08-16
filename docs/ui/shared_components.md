---
title: App
description: A page-level layout that centers content and renders a heading, an issue form, an asset table, and a device history section.
---

# App

The App component lays out a simple, centered page for working with assets and devices. It renders:
- A prominent, centered page heading (h1).
- An IssueAssetForm component.
- An AssetTable component.
- A DeviceHistory component.

![App layout overview](app-layout.png)

> ℹ️ Info  
> The content of the page title (h1) is defined elsewhere; this component ensures the heading is displayed and centered.

## What this component does

- Centers the content on the page with a comfortable maximum width and vertical spacing between sections.
- Displays a large, centered h1 heading at the top.
- Mounts IssueAssetForm with a boolean prop `onIssued` set to true.
- Mounts AssetTable with a `refresh` prop sourced from an expression.
- Mounts DeviceHistory with its default configuration (no props provided).

## How to use it

1. Open the page that renders App. You’ll see a centered layout with a page title at the top.
2. Use the IssueAssetForm section to provide the details required by that form.
   - In this App, the form receives `onIssued={true}`.
   - Refer to the IssueAssetForm documentation for how this prop affects the form’s behavior.
   ![submit form](submit-form.png)
3. Review the AssetTable section to view its output.
   - The table receives a `refresh` prop from an expression (named `refreshFlag` in this implementation).
   - Consult the AssetTable documentation for how it responds to changes in `refresh`.
   ![asset table](asset-table.png)
4. Check the DeviceHistory section for its default output.
   ![device history](device-history.png)

## Layout and visual behavior

- Content is centered with a constrained width for readability.
- Sections are vertically spaced for clear separation.
- The page heading is large, bold, and centered.

> 📘 Note  
> This component focuses on layout and composition. Field definitions, table columns, interactions, and behaviors are controlled by the IssueAssetForm, AssetTable, and DeviceHistory components themselves.

## Props

App does not accept any props.

Child components and their provided props in this App:
- IssueAssetForm: `onIssued` (boolean) set to true.
- AssetTable: `refresh` bound to an expression.
- DeviceHistory: no props.

## Mapped API routes

No API routes are mapped in this component.

---
title: NotificationBanner
description: A compact red-styled banner for inline alerts, showing your message with a small recovery action.
---

# NotificationBanner

## What it does
NotificationBanner displays an inline alert with a red theme. It shows your message and provides a small, underlined action button on the right. Clicking the button triggers your onRecover callback.

![notification banner](notification-banner.png)

> ℹ️ Info  
> This component renders UI only; there are no mapped API routes or automatic network calls.

## How to use it

1. Add the component to your view where an inline alert is needed.
2. Pass a short, clear message via the text prop.
3. Provide an onRecover function to handle the user's action when they click the button.

Example:
```jsx
import { NotificationBanner } from './NotificationBanner';

function Example() {
  const handleRecover = () => {
    // Your recovery logic here (e.g., retry an action)
  };

  return (
    <NotificationBanner
      text="Something went wrong while saving."
      onRecover={handleRecover}
    />
  );
}
```

## Props

- text: string  
  The message displayed in the banner.
- onRecover: function  
  Called when the user clicks the action button.

## UI and behavior

- Layout and styling
  - Red background with red text for an alert/issue (bg-red-100, text-red-800).
  - Compact, rounded banner with small text and spacing (p-2, rounded, mb-2, text-sm).
  - Horizontal layout with space between the message and the action (flex, justify-between, items-center).
- Content
  - Message area: rendered in a span.
  - Action button: small, red, and underlined (text-red-600, underline, text-xs).
- Interaction
  - Clicking the button calls the onRecover function you provide.

> 📘 Note  
> The component exposes a single user action via the button click (onRecover). It does not navigate or refresh by itself.

## Tips

- Keep text concise and actionable to fit the compact layout.
- Place the banner close to the context of the issue so users understand what the message refers to.
- Ensure the action tied to onRecover is safe to attempt multiple times, as users may click repeatedly.