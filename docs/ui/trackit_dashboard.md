---
title: DeviceHistory
description: Look up device history by employee email and handle errors with a built-in recovery action.
---

## What this component does

DeviceHistory lets you submit an employee’s email address to retrieve device history. It presents a simple form inside a white, card-like section with a header, an email input, and a blue action button. If something goes wrong, a notification banner appears with the error message and a recovery action.

![submit form](submit-form.png)

## How to use it

1. Enter the employee’s email in the “Employee Email” field.
2. Select the blue button next to the field to submit your request.

If an error occurs:
- A notification banner will appear showing the error text.
- Use the banner’s recovery action to attempt to resolve the issue.

> ℹ️ Info  
> The header text and the action button’s label may vary based on your implementation, but the button is styled as a blue primary action.

## Tips and behaviors

- The email field uses a standard text input with the placeholder “Employee Email.”
- An informational area appears below the form for additional notes or details.

> 📘 Note  
> Error handling is surfaced through a notification banner that provides both the error text and a recovery control.

## Related API route

- POST /api/recover  
  Triggered by the recovery action in the notification banner to attempt a recovery operation.

---
title: AssetTable
description: Filter, sort, and manage items in a table with inline editing and row-level actions.
---

## What this component does

AssetTable presents a white, card-style table with filters at the top and a grid of up to nine columns below. You can:
- Filter the list using a dropdown.
- Sort the list ascending or descending.
- Edit row values inline where inputs are present.
- Use row-level action buttons to apply or discard changes.

![Filters at top](asset-table-filters.png)

## How to use it

1. Use the filters
   - Open the first dropdown to filter the list. It offers three choices.
   - Use the next dropdown to set sort order. Choose desc or asc.

2. Review helper text
   - A small line of gray helper text may appear under the filters to provide context.

3. Work with the table
   - The table shows a header row and data rows across nine columns.
   - Some cells may display an inline text field or a multi-line field. Type directly into these fields to change values.

4. Apply or discard changes
   - In rows with editable fields, you’ll see:
     - A blue primary action button to apply changes.
     - An underlined gray button to discard changes.
   - You may also see additional row action buttons.

![Row actions](asset-table-row-actions.png)

## Tips and states

- Sorting
  - The sort dropdown provides two options: desc or asc.

- Disabled actions
  - When a primary action is unavailable, it appears faded (reduced opacity) and can’t be clicked.

- Empty state
  - If there are no rows to show, a single centered message appears across the full width of the table.

> 📘 Note  
> Column names and button labels depend on how your app provides them. This component renders the structure and controls; actual text content comes from your implementation.

## Mapped API routes

There are no mapped API routes declared by this component.

---
title: IssueAssetForm
description: Select an asset type and submit it to be issued via a simple form. Submits to POST /api/assets.
---

## What this component does

IssueAssetForm renders a simple form to issue an asset. You choose an asset type from a required dropdown and submit the form.

- Includes a section heading.
- Provides a required “Asset type” dropdown.
- Includes a submit button that can be disabled by the component while processing.

![submit form](submit-form.png)

## How to use it

1. Open the form.
2. In the Asset type dropdown, choose one of:
   - Laptop
   - Monitor
   - Keyboard
   - Mouse
   - Phone
   - Tablet
   - Other
3. Click the submit button to issue the asset.

> ℹ️ Info  
> The dropdown is required. If the blank option is selected, the form cannot be submitted.

## Field reference

- Asset type (select)
  - name: asset_type
  - required
  - Options: Laptop, Monitor, Keyboard, Mouse, Phone, Tablet, Other
  - Includes an initial blank option (acts as an unselected state).

## Actions

- Submit button
  - type: submit
  - May render disabled depending on the component state.

## API

Submitting this form is mapped to:
- POST /api/assets

The form includes the field asset_type in the submission payload.

> 📘 Note  
> This component is mapped to the POST /api/assets route specifically for issuing assets.

## Props

- onIssued (function, optional): A callback you can provide to handle what happens after an asset is issued.