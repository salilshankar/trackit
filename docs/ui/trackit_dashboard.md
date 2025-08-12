---
title: DeviceHistory
description: Submit an employee email, review related history details, and handle errors with a recover action.
---

## What this component does

DeviceHistory provides a simple way to:
- Enter an employee’s email address.
- Submit it using a primary action button.
- See any error message in a notification banner with a Recover action.
- Review a details area rendered beneath the form (small text with bold labels).

![submit form](submit-form.png)

> ℹ️ Info  
> A NotificationBanner is included. It displays error text and offers a Recover action.

## How to use it

1. Type the address into the Employee Email field.
2. Select the button next to the field to submit.
3. If a notification banner appears, read the message. Choose Recover if you want to attempt the recovery action.
4. Review the details shown below the form.

![notification banner](notification-banner.png)

## Tips

- The input field uses the placeholder: “Employee Email.”
- The primary action button is styled prominently (blue background, white text, rounded corners) and sits next to the email field.
- The details section appears below the form and uses small text with bold labels for clarity.

## Related API route

- POST /api/recover  
  Used by the Recover action exposed in the notification banner.

---
title: AssetTable
description: Filter, sort, and edit assets inline in a table. Includes new filtering controls.
---

## What this component does

AssetTable presents your assets in a clean, card-style table with nine columns. It includes a compact toolbar above the table for filtering and sorting, and supports inline edits for certain fields directly within each row. Row-level action buttons let you apply or discard changes.

![Asset table overview](asset-table-overview.png)

## How to use it

1. Open the filter toolbar
   - At the top of the table, use the two dropdowns to control what you see:
     - The first dropdown filters the list (three options available).
     - The second dropdown adjusts sort order (ascending or descending).

2. Sort your results
   - Choose the sort dropdown and select:
     - asc — ascending order
     - desc — descending order

3. Edit a row inline
   - Find the row you want to update.
   - Edit the single-line text field (short width) for one attribute.
   - Edit the multi-line notes field for comments/longer text.

4. Apply or cancel changes
   - Use the primary blue button in the row to apply changes.
   - Use the underlined gray button to cancel.
   - Additional action buttons may be present in the same cell for other row-level actions.

![Inline editing](asset-table-edit.png)

> 📘 Note  
> The primary blue action button can appear disabled. This indicates the action isn’t available yet (for example, while a change is in progress).

## Tips and states

- Helper text
  - A small, gray helper line appears below the filter toolbar to provide context or guidance.

- Multi-line notes
  - Notes are displayed with preserved line breaks for readability.

- Empty state
  - When there are no rows to show, the table displays a full-width, centered gray message across all nine columns.

## Mapped API routes

No mapped API routes are defined for this component.

---
title: IssueAssetForm
description: A simple form to issue an asset by selecting an asset type and submitting to your backend.
---

# IssueAssetForm

## What this component does
IssueAssetForm renders a lightweight form that lets you choose an asset type from a dropdown and submit it. On submit, it issues an asset via your backend.

![submit form](submit-form.png)

> ℹ️ Info  
> The form includes a required dropdown for “asset type” with these choices:
> - Laptop
> - Monitor
> - Keyboard
> - Mouse
> - Phone
> - Tablet
> - Other  
> An initial blank option is present so you explicitly choose a type.

## How to use it
1. Open the IssueAssetForm in your app.
2. Select an asset type from the dropdown.
3. Select the submit button to send your selection.

> 📘 Note  
> The asset type is required. You must choose an option before you can submit.

> ℹ️ Info  
> The submit button may be temporarily disabled while the form is processing.

## Tips and validations
- The asset type field is required. If no option is chosen (left blank), the form won’t submit.
- The dropdown is the only input in this form.

## Mapped API route
- Submitting the form corresponds to a POST request to: `POST /api/assets`.

## Props
- onIssued (function): Optional callback prop exposed by the component. You can supply a function to react when the form has completed the issuance flow in your app.