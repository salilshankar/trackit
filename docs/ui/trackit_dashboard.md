---
title: DeviceHistory
description: Look up device history by employee email, view details, and recover from errors using a built-in notification banner.
---

# DeviceHistory

DeviceHistory displays a simple, card-style panel for looking up device history associated with an employee email. It includes:
- A section header at the top.
- An input field labeled by its placeholder: “Employee Email.”
- A blue action button next to the input.
- A notification banner that can display error text and provide a recovery action.
- A details area below, shown in small text, with bolded labels for key values.

![Enter employee email](device-history-enter-email.png)

## How to use it
1. In the Employee Email field, type the employee’s email address.
2. Select the blue button next to the field to run the lookup.
3. Review the details that appear beneath the controls. Information is presented in small text; labels may appear in bold.

![Error notification banner](device-history-error-banner.png)

## Troubleshooting and recovery
- If something goes wrong, a notification banner may appear showing an error message.
- Use the banner’s recovery action to attempt to resolve the issue.

> 📘 Note  
> The banner displays text provided to it and offers a recovery action. The exact label and appearance of the banner’s action depend on your implementation of the NotificationBanner component.

## API route
- POST /api/recover  
  This endpoint is used when you trigger the notification banner’s recovery action.

> ℹ️ Info  
> The action button adjacent to the email input is styled in blue. If the button text isn’t visible, look for the blue button next to the “Employee Email” field.

---
title: AssetTable
description: Filter, sort, and inline‑edit assets in a simple table view. Includes new dropdown filters.
---

# AssetTable

Use AssetTable to browse a list of assets, filter and sort them with dropdowns, and make quick inline edits to selected fields.

![filters and table](asset-table-filters.png)

> 📘 Note  
> This component introduces new filters at the top of the table.

## What you can do

- Filter the list using dropdown controls above the table.
- Change the sort order (ascending or descending).
- Review assets in a multi‑column table.
- Inline‑edit fields directly in a row (single‑line text and a multi‑line comments area).
- Use row‑level action buttons to apply or discard your changes.

## How to use it

1. Open the filters
   - Use the first dropdown to narrow the list. The available choices are shown in the menu.
   - Use the second dropdown to set sort order:
     - Descending (desc)
     - Ascending (asc)

2. Check the helper text
   - A small line of helper text may appear under the filters to give additional context (for example, selection or filter hints).

3. Browse the table
   - The table displays assets in rows with multiple columns.
   - Column headers are shown at the top.

4. Make inline edits (when fields are visible in a row)
   - Update the single‑line text field as needed.
   - Add or edit notes in the multi‑line comments area.
   - Click the primary blue action button to apply your changes.
   - Click the underlined gray button to cancel and revert.

   ![inline edit](asset-table-inline-edit.png)

   > ℹ️ Info  
   > While an action is in progress, the primary button may be disabled and appear faded.

## Tips and states

- Filtering and sorting
  - You can combine the top‑level dropdowns to refine the list and adjust its ordering.
  - Sort options explicitly include “desc” and “asc.”

- Empty or no‑results state
  - When there are no items to show, the table displays a centered message spanning all columns in subtle gray text.

- Readability
  - Long text (such as comments) preserves line breaks for easier reading.

## API routes

No API routes are mapped from this component.

---
title: IssueAssetForm
description: A simple form to issue an asset by selecting an asset type and submitting. Sends a POST to /api/assets.
---

# IssueAssetForm

## What this component does
IssueAssetForm renders a form with:
- A required dropdown to select an asset type.
- A submit button to send your selection.

The form sends a field named asset_type with one of the following values:
- Laptop
- Monitor
- Keyboard
- Mouse
- Phone
- Tablet
- Other

![submit form](submit-form.png)

> 📘 Note  
> The asset type field is required. If you don’t choose a value, the browser will prevent submission.

## How to use it
1. Open the IssueAssetForm in your app.
2. In the Asset type dropdown, choose one of the available options.
3. Select the submit button to send the form.

> ℹ️ Info  
> You may see the submit button disabled in some states. Wait until it’s enabled to submit.

## Tips and validations
- The dropdown is marked required. If left blank (the top option is empty), the form won’t submit.
- Only one field is submitted: asset_type with one of the listed values.

## API mapping
Submitting this form is tied to the following API route:
- POST /api/assets — issues an asset.

## Props
- onIssued (function, optional) — an optional callback prop exposed by the component for parent integrations.