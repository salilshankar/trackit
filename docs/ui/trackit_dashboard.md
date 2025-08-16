---
title: DeviceHistory
description: Look up history by employee email and handle errors with an in-line recovery option.
---

# DeviceHistory

Use the DeviceHistory component to enter an employee’s email address and submit a lookup request. If something goes wrong, a notification banner appears with a recovery action.

![Device History card](device-history.png)

## What this component does

- Presents a white, card-style section with a headline area.
- Provides a single text field with the placeholder “Employee Email.”
- Includes a primary blue button to submit your request.
- Can display a notification banner with a message and a recovery action.
- Shows a small-print info area with paragraphs and bold highlights beneath the form.

## How to use it

1. In the “Employee Email” field, type the employee’s email address.
2. Select the blue button to submit your request.
   - The button is styled blue with white text and rounded corners.
3. If a notification banner appears, read the message. If a recovery action is offered, select it to try resolving the issue.

![Submit request](submit-form.png)

## Tips and visible behaviors

- The email field is clearly indicated by its placeholder text: “Employee Email.”
- A small text section appears under the form with additional information and bolded callouts.
- The notification banner only appears when there’s a message to show; it includes an action you can use to attempt recovery.

> 📘 Note  
> This component does not require any external props to render. All interactive elements are visible: one email input, one primary button, and a notification banner that may appear.

## Related API route

- POST /api/recover  
  - Used for the recovery action surfaced in the notification banner.  
  - Trigger this when you choose the banner’s recovery option to attempt to fix an issue.

---
title: AssetTable
description: View a list of assets in a table, filter and sort results, and update fields inline with clear actions and states.
---

## What this component does

AssetTable presents your assets in a structured table with:
- A header area that includes a title and control panel.
- Filter and sort controls.
- A data table with multiple columns and an actions cell per row.
- Inline inputs for editing certain fields (single-line and multi-line).
- Clear empty and disabled states.

![Asset table overview](asset-table.png)

> 📘 Note  
> This version introduces filtering controls at the top of the table.

## How to use it

1. Open the control panel
   - At the top of the table, you’ll see a compact control bar next to the title.
   - Use the first labeled dropdown to filter the results.
   - Use the second dropdown to set the sort order. Supported values are:
     - desc
     - asc

   ![Filters and sort](filters.png)

   An optional helper line may appear beneath the controls in small, gray text to provide context (for example, showing a summary or hint).

2. Review the table
   - The table displays multiple columns with a header row.
   - Rows are separated by subtle borders for easy scanning.

   ![Table with rows](table.png)

3. Update values inline
   - Some columns provide editable fields directly in the row:
     - A single-line text input (compact width, rounded border).
     - A multi-line text area (medium width, preserved line breaks).
   - Text in the read-only display uses “pre-wrap” styling so line breaks and spacing are preserved.

   ![Inline editing](inline-edit.png)

4. Use row actions
   - Each row includes an actions cell with buttons:
     - A blue primary button (rounded) that can be disabled.
     - A gray, underlined secondary button.
     - Additional buttons may also be present.
   - When the primary button is disabled, it appears faded to indicate it’s not currently actionable.

## Tips and states

- Disabled state
  - The primary blue button visibly dims when disabled (reduced opacity).
- Empty state
  - When there’s nothing to show, the table displays a centered, light-gray message spanning all columns to make the state unmistakable.
- Formatting
  - Multi-line content is displayed with preserved line breaks for readability.

## Mapped API routes

- None visible in this component.

---
title: IssueAssetForm
description: A simple form to issue an asset by selecting an asset type and submitting to POST /api/assets.
---

# IssueAssetForm

IssueAssetForm renders a lightweight form that lets you issue an asset by choosing an asset type from a dropdown and submitting the form. It includes a heading, a required asset type selector, and a submit button.

![submit form](submit-form.png)

## What this component does

- Renders a form with:
  - A heading.
  - A required dropdown to choose the asset type.
  - A submit button that may be disabled while the form is processing.
- Submits asset data to your backend.

> ℹ️ Info  
> The form field name is `asset_type`. The dropdown starts with a blank option so you must actively choose a value.

## How to use it (in the UI)

1. Open the form.
2. Choose an asset type from the dropdown:
   - Laptop
   - Monitor
   - Keyboard
   - Mouse
   - Phone
   - Tablet
   - Other
3. Select the submit button to send the form.

> 📘 Note  
> The submit button can be disabled while the form is being submitted. If it’s disabled, wait for the process to complete.

## Validations and states

- Asset type is required. You must select one of the listed options (the initial blank option won’t pass validation).
- The submit button may be disabled during submission.

## Props

- onIssued (function): Optional callback prop you can provide to react after the form completes the issuing action.

## API mapping

- On submit, the form maps to the following API route:
  - POST /api/assets — issues an asset.