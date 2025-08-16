---
title: DeviceHistory
description: Look up device history by entering an employee email, submit with the blue button, and handle errors via a recovery action.
description: Look up device history by entering an employee email, submit with the blue button, and handle errors via a recovery action.
---

# DeviceHistory

## What this component does
DeviceHistory presents a simple, card-style panel where you:
- Enter an employee email in a text field.
- Submit using a blue button next to the field.
- See status or error messages in a notification banner.
- View resulting details in a text section below (labels and values are shown with emphasized headings).

![enter email](enter-email.png)

> ℹ️ Info  
> The notification banner displays an error message when available and provides a recovery action you can use to try resolving the issue.
## What this component does
DeviceHistory presents a simple, card-style panel where you:
- Enter an employee email in a text field.
- Submit using a blue button next to the field.
- See status or error messages in a notification banner.
- View resulting details in a text section below (labels and values are shown with emphasized headings).

![enter email](enter-email.png)

> ℹ️ Info  
> The notification banner displays an error message when available and provides a recovery action you can use to try resolving the issue.

## How to use it
1. Type the email into the Employee Email field.
2. Select the blue button to submit.
3. If information is available, review the details displayed beneath the form.
4. If an error appears, use the recovery option in the banner.

![error banner](error-banner.png)
1. Type the email into the Employee Email field.
2. Select the blue button to submit.
3. If information is available, review the details displayed beneath the form.
4. If an error appears, use the recovery option in the banner.

![error banner](error-banner.png)

## Tips and behaviors
- The email field shows a placeholder: “Employee Email.”
- The submit control is a blue button positioned next to the email field.
- When an error occurs, a notification banner appears with the message and a recovery option.
## Tips and behaviors
- The email field shows a placeholder: “Employee Email.”
- The submit control is a blue button positioned next to the email field.
- When an error occurs, a notification banner appears with the message and a recovery option.

> 📘 Note  
> The lower section uses paragraph text with bold labels to present details. Exact labels and values depend on the data returned.
> The lower section uses paragraph text with bold labels to present details. Exact labels and values depend on the data returned.

## Related API route
- POST /api/recover  
  The recovery action in the notification banner triggers a recovery flow backed by this endpoint.
- POST /api/recover  
  The recovery action in the notification banner triggers a recovery flow backed by this endpoint.

---
title: AssetTable
description: Filter, sort, and edit assets inline in a compact, nine‑column table. NEW: filters.
description: Filter, sort, and edit assets inline in a compact, nine‑column table. NEW: filters.
---

# AssetTable

Quickly browse your assets in a clean table, apply filters, and make inline edits without leaving the page.

> ℹ️ Info  
> This release adds a filters bar at the top of the table.
Quickly browse your assets in a clean table, apply filters, and make inline edits without leaving the page.

> ℹ️ Info  
> This release adds a filters bar at the top of the table.

![Asset table overview](asset-table-overview.png)

## What it does
## What it does

- Presents assets in a white, card-like container with a header.
- Shows a toolbar with:
  - Two dropdowns (left to right): one for filtering the list, one for ordering it.
  - A small, gray helper line beneath the controls.
- Renders a 9‑column table with a header row and data rows.
- Lets you edit two fields inline within each row:
  - A single-line text field (compact width) for a model or similar identifier.
- Presents assets in a white, card-like container with a header.
- Shows a toolbar with:
  - Two dropdowns (left to right): one for filtering the list, one for ordering it.
  - A small, gray helper line beneath the controls.
- Renders a 9‑column table with a header row and data rows.
- Lets you edit two fields inline within each row:
  - A single-line text field (compact width) for a model or similar identifier.
  - A multi-line comments area that preserves line breaks.
- Includes an actions cell in each row with:
  - A prominent blue button that can appear disabled.
  - A secondary underlined text-style button.
  - Two additional action buttons.

![Filters](asset-table-filters.png)
- Includes an actions cell in each row with:
  - A prominent blue button that can appear disabled.
  - A secondary underlined text-style button.
  - Two additional action buttons.

![Filters](asset-table-filters.png)

## How to use it

1. Filter the list
   - Open the first dropdown in the toolbar and choose an option to narrow down what’s shown.
1. Filter the list
   - Open the first dropdown in the toolbar and choose an option to narrow down what’s shown.

2. Change the order
   - Use the second dropdown to adjust how the table is ordered.
2. Change the order
   - Use the second dropdown to adjust how the table is ordered.

3. Edit a row
   - Click into the single-line field to update the item’s model or identifier.
   - Use the multi-line area to enter or update comments. Line breaks are preserved in display.
   - Select the blue button in the row to apply your changes, or choose the underlined button to back out.

![Inline editing](asset-table-editing.png)

## Tips and states

- Comments formatting
  - Multi-line comments are displayed with preserved line breaks for readability.

- Button states
  - The blue action button may appear disabled (faded) when it’s not available.

- Empty state
  - If there are no items to display, the table shows a centered, gray message spanning all columns.

> 📘 Note  
> Exact labels and options for the dropdowns and table columns may vary based on your implementation.
3. Edit a row
   - Click into the single-line field to update the item’s model or identifier.
   - Use the multi-line area to enter or update comments. Line breaks are preserved in display.
   - Select the blue button in the row to apply your changes, or choose the underlined button to back out.

![Inline editing](asset-table-editing.png)

## Tips and states

- Comments formatting
  - Multi-line comments are displayed with preserved line breaks for readability.

- Button states
  - The blue action button may appear disabled (faded) when it’s not available.

- Empty state
  - If there are no items to display, the table shows a centered, gray message spanning all columns.

> 📘 Note  
> Exact labels and options for the dropdowns and table columns may vary based on your implementation.

## API routes

No mapped API routes are shown for this component.
No mapped API routes are shown for this component.

---
title: IssueAssetForm
description: A simple form to issue an asset by selecting its type and submitting.
description: A simple form to issue an asset by selecting its type and submitting.
---

## What this component does

IssueAssetForm renders a lightweight form that lets you choose an asset type from a dropdown and submit the request to issue it. The form appears as a white, rounded card with padding and a shadow.

![submit form](submit-form.png)

## How to use it (in the UI)

1. Open the form in your app.
2. In the Asset type dropdown, choose one of the available options:
   - Laptop
   - Monitor
   - Keyboard
   - Mouse
   - Phone
   - Tablet
   - Other
3. Select the option you need, then press the submit button to send your request.
3. Select the option you need, then press the submit button to send your request.

> 📘 Note  
> The dropdown includes an initial empty option. You must choose a value before submitting.
> 📘 Note  
> The dropdown includes an initial empty option. You must choose a value before submitting.

## Tips and validations

- The asset type field is required. If you don’t select a type, the form won’t submit.
- The submit button may be disabled while the form is processing, preventing duplicate submissions.
- If your asset doesn’t match the listed types, choose Other.
- The asset type field is required. If you don’t select a type, the form won’t submit.
- The submit button may be disabled while the form is processing, preventing duplicate submissions.
- If your asset doesn’t match the listed types, choose Other.

## API
## API

Submitting this form triggers a request to:
Submitting this form triggers a request to:
- POST /api/assets

This route is used to create/issue the asset based on your selection.
This route is used to create/issue the asset based on your selection.