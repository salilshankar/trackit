---
title: DeviceHistory
description: Enter an employee email, submit the request, and handle errors with a built-in recovery action.
---

## What this component does

DeviceHistory presents a simple, card-style interface where you:
- Enter an employee email address.
- Click a primary action button beside the input.
- See any error message in a notification banner that also offers a recovery action.
- Read additional small-print details below the form (with emphasized labels).

![Device history form](device-history-form.png)

> ℹ️ Info  
> The layout places the input and button side-by-side in a compact row. Content is presented in a clean, white card with a title at the top.

## How to use it

1. Find the Employee Email field.
2. Type the employee’s email address.
3. Click the primary button next to the input to submit your request.
4. If a notification banner appears with an error message, use its recovery action to proceed.
5. Review the details displayed in the small-print section below the form.

![Error banner with recovery](recovery-banner.png)

> 📘 Note  
> The notification banner displays error text when available and includes a recovery action you can trigger.

## Tips and details

- Field: The input uses the placeholder “Employee Email” to guide what to enter.
- Action button: Styled as the primary call-to-action next to the input.
- Additional info: Below the form, small text with emphasized labels provides further context or results.

> ℹ️ Info  
> No external props are required to render this component.

## Related API route

- POST /api/recover  
  Used by the recovery action exposed in the notification banner.

---
title: IssueAssetForm
description: Let users select an asset type and submit a request to issue an asset.
---

## What this component does

IssueAssetForm renders a simple form that lets a user choose an asset type from a dropdown and submit the selection. The form appears as a white, padded card with a rounded, shadowed container and a clear heading.

Available asset types:
- Laptop
- Monitor
- Keyboard
- Mouse
- Phone
- Tablet
- Other

> ℹ️ Info  
> The asset type field is required.

![submit form](submit-form.png)

## How to use it

1. Open the form.
2. Choose an option from the Asset type dropdown.
   - The dropdown includes a blank option at the top; pick one of the listed asset types before submitting.
3. Select the submit button to send your request.

![select asset type](select-asset-type.png)

## Tips and validations

- The Asset type field is marked as required. If left blank, the browser will prevent submission until a value is selected.
- The submit button may be disabled depending on application state (for example, while a submission is in progress).

## API behavior

Submitting the form is mapped to the following API route:
- POST /api/assets

> 📘 Note  
> The specific request payload and response details are not visible in this component’s JSX. Only the mapped route is known from the integration.

## Props

- onIssued (optional): A callback prop you can provide from your app to handle post-issue behavior. The component exposes the prop, but invocation timing and payload are not shown in the JSX.

---
title: AssetTable
description: Display a list of assets in a styled table with per-row inputs, comments, and action buttons. Data is sourced from GET /api/assets.
---

## What this component does

AssetTable renders a card-style section with a header and a full-width, bordered table. The table includes:
- A header row (light gray background) with multiple left-aligned column headers.
- Data rows, each with padded cells.
- Inline fields per row:
  - A bordered text input (compact width) for a model-like value.
  - A bordered, multiline textarea for comments.
  - A read-only text block that preserves line breaks and spacing (whitespace-pre-wrap).
- A primary action button per row (blue, rounded). This button can be disabled and shows reduced opacity when disabled.
- A secondary text-style button per row (gray, underlined).

> 📘 Note  
> The header text, column labels, and button labels are defined by your implementation and may vary. The component’s styles indicate roles (e.g., “primary” vs. “secondary” action) without prescribing specific labels.

![asset table](asset-table.png)

## How to use it

1. Add the component to your page where you want to list assets.
2. Make sure your backend exposes the assets endpoint at /api/assets.
3. Interact with rows as needed:
   - Type in the text input to update a model-like field.
   - Use the multiline field to add or edit comments.
   - Use the blue button to perform the primary action for that row. If it’s disabled, it appears semi-transparent.
   - Use the underlined gray button for the secondary action for that row.

![editing a row](asset-row-edit.png)

> ℹ️ Info  
> Comments rendered in the read-only view preserve line breaks and spacing. This helps longer notes remain readable.

## Props

- refresh  
  Exposes a refresh prop on the component for parent-level integration. Your app can supply this prop as needed.

> 📘 Note  
> The component does not include a built-in “Refresh” button. If you need a visible refresh control, add it in the parent and wire it to your data flow.

## Styles and layout details

- Container: white background, padding, rounded corners, shadow.
- Table: full width, small text, bordered.
- Header cells: left-aligned with padding; header row uses a light gray background.
- Body rows: top-aligned with a subtle top border.
- Inputs: compact widths with borders and rounded corners (a text input and a multiline textarea).
- Read-only text: uses whitespace-preserving formatting (line breaks and spacing are kept).
- Actions: blue primary button (rounded, disabled state supported) and a gray underlined secondary button.

## API mapping

- GET /api/assets  
  Used to retrieve the list of assets displayed in the table.

> ℹ️ Info  
> Ensure your API returns data in the shape your table rows expect. The component relies on the assets returned by this route to populate its rows.