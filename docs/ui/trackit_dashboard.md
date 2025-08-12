---
title: DeviceHistory
description: Look up device history by entering an employee’s email, then review the details and handle notifications with a built‑in recovery action.
---

# DeviceHistory

Use the DeviceHistory panel to input an employee’s email and run a history lookup. The component presents a simple, card‑style layout with:
- An Employee Email input field
- A primary action button to submit the lookup
- A notification banner that displays messages and includes a recovery action
- A details area that lists information in small text with bold labels

![Enter employee email](device-history-email.png)

## How to use it

1. Type the employee’s address into the Employee Email field.
2. Select the primary action button next to the field to submit your lookup.
3. Review the details shown below the input. Information appears in a compact format with bold labels and values.
4. If a notification banner appears with a message, use its recovery action to proceed as directed.

![Notification banner with recovery action](device-history-error.png)

> 📘 Note  
> The details section uses small text and bold labels to make key values easy to scan.

## Tips

- Enter a complete work email (for example, name@company.com) to improve search accuracy.
- The action button is styled as a prominent blue button.

> ℹ️ Info  
> Recovery actions in the notification banner are mapped to the API route:  
> POST /api/recover

---
title: AssetTable
description: Filter, sort, and edit items inline in a 9‑column table. Includes new filter controls and an empty state.
---

## What this component does

AssetTable presents your data in a clean, white card with:
- A heading
- A filter bar with two dropdowns (NEW)
- A small info line
- A full-width, bordered table with 9 columns
- Inline editing fields directly inside each row
- An actions cell with multiple buttons, including a primary blue action

![AssetTable overview](asset-table-overview.png)

> 📘 Note  
> The filter controls are new. Use them to narrow and order the table results.

## How to use it

1. Filter the list
   - Use the first dropdown in the filter bar to narrow results. It contains 3 options.
   - Use the second dropdown to set sort order. It offers two options: “desc” and “asc.”

   ![Filters and sort](asset-table-filters.png)

2. Review the table
   - The table includes a header row and 9 left-aligned columns.
   - A subtle info line appears beneath the filters for small, gray helper text.

3. Edit a row inline
   - Update values directly in the row:
     - Single-line input field (compact width)
     - Multi-line textarea (wider, about 16 rows tall)
   - Use the actions cell on the right:
     - Click the blue primary button to apply changes (it can appear disabled with reduced opacity).
     - Click the gray, underlined text button to back out of changes.
     - Additional action buttons may also be available in the same cell.

   ![Inline edit](asset-table-inline-edit.png)

## Tips and states

- Sorting options are “desc” and “asc.”
- Long text can display with preserved line breaks and wrapping.
- The primary (blue) action button supports a disabled state and shows reduced opacity when disabled.
- Empty state: when there’s nothing to show, a centered gray message appears in a single row that spans all 9 columns.

> ℹ️ Info  
> Column headers and filter labels aren’t specified in the markup shown here. Your app may provide those labels at runtime.

## Mapped API routes

None are declared for this component.

---
title: IssueAssetForm
description: Select an asset type and submit the form to issue an asset. Submits to the POST /api/assets endpoint.
---

# IssueAssetForm

## What this component does
IssueAssetForm renders a simple form to issue an asset. You choose an asset type from a required dropdown and submit the form.

- Field: a required select named asset_type
- Options include: Laptop, Monitor, Keyboard, Mouse, Phone, Tablet, Other
- Action: a submit button to send the form

![Select asset type](asset-type-select.png)

## How to use it
1. Open the form.
2. From the Asset type dropdown, pick one of:
   - Laptop
   - Monitor
   - Keyboard
   - Mouse
   - Phone
   - Tablet
   - Other
3. Click the submit button to send your selection.

![Submit form](submit-form.png)

> 📘 Note  
> The asset type field is required. You must select an option before submitting.

> ℹ️ Info  
> The submit button may be disabled at times. When it’s disabled, wait until it becomes active to try again.

## Tips and validations
- The dropdown is required; the form will not submit without a selection.
- The field name is asset_type (useful when integrating with back-end form parsing).

## Props
- onIssued (function)

## Mapped API routes
- On submit, the form maps to:
  - Method: POST
  - Path: /api/assets

This mapping indicates the form submission issues an asset via the /api/assets endpoint.