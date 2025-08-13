---
title: DeviceHistory
description: Look up details by employee email and handle errors with a recovery action.
---

# DeviceHistory

Use the DeviceHistory component to enter an employee email, run an action from a primary blue button, view small-text details, and, if something goes wrong, see a notification banner with a recovery option.

![Device history card](device-history.png)

## What it does

- Displays a card with a header.
- Provides an input field with the placeholder “Employee Email.”
- Includes a primary blue button next to the input.
- Shows a notification banner when there’s an error, with a recovery action.
- Renders a details area using small text with paragraphs and bold labels.

## How to use it

1. Find the Employee Email field.
   - Type the employee’s email address.
   - Example: jane.doe@company.com
   ![Enter employee email](enter-email.png)

2. Click the blue button to proceed.
   - The button appears next to the email field.

3. Review the details area below.
   - Information is shown in small text with bold labels and paragraphs.

4. If an error appears, use the recovery option in the notification banner.
   - The banner displays the error text and offers a recovery action.
   ![Notification banner with recovery](notification-banner.png)

## Tips and notes

- The placeholder “Employee Email” hints at the expected input format. Validation rules are not displayed in the UI.
- The details area uses small text and bold labels, which is helpful for scanning key information.
- The primary button is styled blue; the exact label may vary based on your implementation.

> 📘 Note  
> The notification banner only appears when there’s error text to show. It also provides a recovery action you can run directly from the banner.

## Related API route

When you use the recovery action in the notification banner, the app maps it to:
- POST /api/recover

> ℹ️ Info  
> This route is associated with the recovery action exposed in the banner. Integration specifics depend on your application setup.

---
title: AssetTable
description: Browse assets in a clean table with filtering, sorting, and inline edits — all from a single view.
---

# AssetTable

The AssetTable displays your assets in a structured table with top-of-page controls for filtering and sorting. You can make quick inline edits to key fields directly within each row.

![Asset table overview](asset-table-overview.png)

## What this component does

- Presents assets inside a white, card-style container.
- Shows a header and a controls row with:
  - A Status filter dropdown (three selectable options).
  - A Sort dropdown with two options (ascending and descending).
- Includes a small gray helper area beneath the controls for contextual info.
- Renders a multi-column table (nine columns) with rows of asset data.
- Supports inline editing within rows:
  - A small text field for a model/detail.
  - A multi-line comments area that preserves line breaks.
- Provides an actions cell with:
  - A primary blue action button (can be disabled).
  - A secondary underline-style button.
  - Additional action buttons for row-level tasks.
- Shows a centered, full-width message row when there are no items to display.

> 📘 Note  
> Comments are shown with preserved line breaks (whitespace is kept, and text wraps naturally).

## How to use it

1. Filter your list
   - Use the first dropdown to filter by status.
   - There are three options available. Select the one that matches what you want to see.

2. Sort the results
   - Use the second dropdown to choose the sort order.
   - Pick ascending or descending to reorder the table.

3. Review the table
   - Scan the nine columns to view asset details.
   - If present, refer to the small gray helper text above the table for context (e.g., counts or hints).

4. Make inline edits
   - In any row, update the small text field to change a model/detail.
   - Use the multi-line comments area to add or edit notes.
   - Select the primary blue button in the same row to apply your change.
   - Use the underline-style button to cancel changes.

   ![Inline edit in a row](asset-inline-edit.png)

5. Use row actions
   - Additional buttons may appear in the actions cell for item-level tasks. Select the one you need.

> ℹ️ Info  
> The primary blue button can appear disabled (faded). When it’s disabled, wait a moment or review your changes before trying again.

## Tips and empty states

- Line breaks in comments are retained, making longer notes easier to read.
- If the table is empty or a filter returns no results, you’ll see a centered message spanning all columns.

## API routes

No mapped API routes are declared for this component.

---
title: IssueAssetForm
description: A simple form for issuing an asset by selecting an asset type and submitting. Submits to POST /api/assets and supports an optional onIssued callback.
---

# IssueAssetForm

## What this component does
IssueAssetForm renders a simple form that lets you choose an asset type from a dropdown and submit your choice to issue an asset.

- Field: a required asset type dropdown (name: asset_type)
- Options: Laptop, Monitor, Keyboard, Mouse, Phone, Tablet, Other
- Action: a submit button to send the form

> ℹ️ Info  
> The submit button may be disabled during submission.

> 📘 Note  
> The dropdown includes an initial blank option. You must select a value to submit.

## How to use it

1. Open the form and locate the asset type dropdown.
2. Choose an asset type:
   - Laptop
   - Monitor
   - Keyboard
   - Mouse
   - Phone
   - Tablet
   - Other
3. Select Submit to issue the asset.

![submit form](submit-form.png)

## Tips and validations

- The asset type is required. If left blank, the browser will prevent submission until you choose a value.
- Use Other if your asset type isn’t listed.

## Mapped API route

On submit, the form is tied to the following endpoint:

- POST /api/assets

This route is used to issue the asset based on your selection.

## Props

- onIssued (function, optional): Callback prop you can provide to run custom logic after the asset is issued.