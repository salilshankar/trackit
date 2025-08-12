---
title: DeviceHistory
description: Capture an employee email, submit your request, and review details with an optional recovery action when a notification appears.
---

# DeviceHistory

## What this component does

DeviceHistory renders a focused, card-style section that lets you:
- Enter an employee email address.
- Submit the input using a primary action button.
- See a notification banner that can include an error message and a recovery action.
- Review detail text below, with certain values emphasized in bold.

The layout includes:
- A section header.
- An input field with the placeholder “Employee Email.”
- A primary button next to the input.
- A NotificationBanner that displays message text and offers a recovery action.
- A small-text details area using paragraphs and bold highlights.

![lookup](device-history-lookup.png)

> ℹ️ Info  
> The button’s label isn’t specified here, but it appears next to the email field and is styled as a primary action (blue background, white text).

## How to use it

1. Locate the email field.
2. Type the employee’s email address (the placeholder reads “Employee Email”).
3. Select the button to submit your request.
4. If a notification banner appears, read the message. You can use its recovery action to attempt to resolve the issue.
5. Review the details area beneath; it presents information in small text and uses bold to highlight key values.

## Tips and behavior

- Input guidance: The field uses the placeholder “Employee Email” to indicate what to enter.
- NotificationBanner:
  - Shows text content (for example, an error message) when displayed.
  - Includes a recovery action you can trigger.

> 📘 Note  
> The details section uses paragraphs with bold text to highlight important values. Actual labels and values depend on what the component renders at runtime.

## Related API routes

- POST /api/recover  
  When you use the recovery action in the notification banner, the component may call this endpoint to attempt a recovery.

---
title: AssetTable
description: Browse assets in a 9‑column table with inline updates. NEW: filter and sort controls.
---

## What this component does

AssetTable displays a white, rounded card with:
- A header and control bar
- A status filter (dropdown)
- A sort dropdown with options for descending and ascending
- A helper text line under the filters
- A 9‑column data table
- Row-level fields for quick updates (a compact text input and a multi‑line textarea)
- Row-level action buttons, including a blue primary action and a gray underlined secondary action

![Asset table overview](asset-table-overview.png)

> ℹ️ Info  
> This release adds filter controls at the top of the table.

## How to use it

1. Filter the list
   - Open the first dropdown to select a status.
   - The table updates to reflect your selection.

2. Sort the results
   - Use the second dropdown to choose sort order.
   - Available option values include “desc” and “asc.”

3. Review the table
   - Column headers appear in a gray header row.
   - Data is shown in rows with clear borders for readability.

4. Make quick updates inline
   - In a row, type into the compact text field to update a value.
   - Use the multi‑line field to add or adjust comments.

5. Apply or discard changes
   - Use the blue primary button in the row to confirm changes.
   - Use the gray underlined button to discard changes.

![Edit a row inline](asset-table-edit.png)

## Tips and behaviors

- The helper text beneath the filters provides brief guidance in a subtle gray style (small text).
- Comments keep their formatting when displayed; line breaks are preserved.
- The primary action button may appear disabled in certain states (it becomes semi‑transparent).
- Empty state
  - When no data is available, a single centered message cell spans all 9 columns to clearly indicate the empty state.

> 📘 Note  
> Sort option values are “desc” and “asc.” Status options are provided by your application and may vary.

## API routes

No mapped API routes are visible for this component.

---
title: IssueAssetForm
description: Choose an asset type and submit the form to create/issue an asset via your API.
---

# IssueAssetForm

## What this component does

IssueAssetForm renders a simple, card-style form that lets you select an asset type and submit it. The form includes:
- A required dropdown for choosing an asset type
- A submit button

Visual style: white background, rounded corners, and a subtle shadow for emphasis.

> ℹ️ Info  
> The asset type field is required. You must pick a non-empty option before you can submit.

## How to use it

1. Open the form. You’ll see a dropdown and a submit button inside a white card.
2. Open the dropdown and choose an asset type:
   - Laptop
   - Monitor
   - Keyboard
   - Mouse
   - Phone
   - Tablet
   - Other

   The first option is intentionally blank. Select one of the listed types to proceed.
   ![select asset type](select-asset-type.png)
3. Click the submit button to send your selection.
   ![submit form](submit-form.png)

> 📘 Note  
> The submit button may appear disabled in some states. Enablement depends on the component’s internal conditions.

## Tips and validations

- The asset type dropdown is required. If you try to submit without a selection, your browser will prevent submission because of the required attribute.
- If your asset doesn’t fit a listed category, pick “Other.”

## API route

When you submit the form, it maps to this API endpoint:
- POST /api/assets

This route is used to create/issue the asset based on your selection.

## Props

- onIssued  
  Optional callback prop exposed by the component for integration needs in your application.