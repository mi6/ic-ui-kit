# ic-dialog



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description                                                                                                                                                                                 | Type                                                       | Default                                                                                                                                        |
| ---------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `alertHeading`         | `alert-heading`           | If a status is set, sets the heading for the displayed alert.                                                                                                                               | `string`                                                   | `undefined`                                                                                                                                    |
| `alertMessage`         | `alert-message`           | If a status is set, sets the message for the displayed alert.                                                                                                                               | `string`                                                   | `undefined`                                                                                                                                    |
| `buttonProps`          | --                        | Sets the label and onclick functions for default buttons.                                                                                                                                   | `{ label: string; onclick: string; }[]`                    | `[     {       label: "Cancel",       onclick: "this.cancelDialog();",     },     { label: "Confirm", onclick: "this.confirmDialog();" },   ]` |
| `buttons`              | `buttons`                 | If set to `false`, dialog controls will not be displayed overriding buttonProps or slotted dialog controls.                                                                                 | `boolean`                                                  | `true`                                                                                                                                         |
| `closeOnBackdropClick` | `close-on-backdrop-click` | If set to `true`, the dialog will not close when the backdrop is clicked.                                                                                                                   | `boolean`                                                  | `true`                                                                                                                                         |
| `destructive`          | `destructive`             | If default buttons are displayed, sets the 'primary' or rightmost button to the destructive variant. Stops initial focus being set on the 'primary' or rightmost default or slotted button. | `boolean`                                                  | `false`                                                                                                                                        |
| `dismissLabel`         | `dismiss-label`           | Sets the dismiss label tooltip and aria label.                                                                                                                                              | `string`                                                   | `"Dismiss"`                                                                                                                                    |
| `heading` _(required)_ | `heading`                 | Sets the heading for the dialog.                                                                                                                                                            | `string`                                                   | `undefined`                                                                                                                                    |
| `label`                | `label`                   | Sets the optional label for the dialog which appears above the heading.                                                                                                                     | `string`                                                   | `undefined`                                                                                                                                    |
| `size`                 | `size`                    | Sets the maximum and minimum height and width for the dialog.                                                                                                                               | `"large" \| "medium" \| "small"`                           | `"small"`                                                                                                                                      |
| `status`               | `status`                  | If set, displays an alert of the corresponding variant below the heading.                                                                                                                   | `"error" \| "info" \| "neutral" \| "success" \| "warning"` | `undefined`                                                                                                                                    |


## Events

| Event               | Description                                                                                                   | Type                |
| ------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------- |
| `icDialogCancelled` | Cancelation event emitted when default 'Cancel' button clicked or 'cancelDialog' method is called.            | `CustomEvent<void>` |
| `icDialogClosed`    | Emitted when dialog has closed.                                                                               | `CustomEvent<void>` |
| `icDialogConfirmed` | Confirmation event emitted when default 'Confirm' primary button clicked or 'confirmDialog' method is called. | `CustomEvent<void>` |
| `icDialogOpened`    | Emitted when dialog has opened.                                                                               | `CustomEvent<void>` |


## Methods

### `cancelDialog() => Promise<void>`

Cancels the dialog. Used by the default 'Cancel' button or can be called manually to trigger cancelling of dialog.

#### Returns

Type: `Promise<void>`



### `confirmDialog() => Promise<void>`

Confirms the dialog. Used by the default 'Confirm' button or can be called manually to trigger confirming of dialog.

#### Returns

Type: `Promise<void>`



### `hideDialog() => Promise<void>`

Use to hide the dialog.

#### Returns

Type: `Promise<void>`



### `showDialog() => Promise<void>`

Use to show the dialog.

#### Returns

Type: `Promise<void>`




## Slots

| Slot                | Description                                        |
| ------------------- | -------------------------------------------------- |
| `"dialog-controls"` | Content will be place at the bottom of the dialog. |
| `"heading"`         | Content will be placed at the top of the dialog.   |
| `"label"`           | Content will be placed above the dialog heading.   |


## CSS Custom Properties

| Name                  | Description       |
| --------------------- | ----------------- |
| `--ic-z-index-dialog` | z-index of dialog |


## Dependencies

### Depends on

- [ic-typography](../ic-typography)
- [ic-button](../ic-button)
- [ic-alert](../ic-alert)

### Graph
```mermaid
graph TD;
  ic-dialog --> ic-typography
  ic-dialog --> ic-button
  ic-dialog --> ic-alert
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  ic-alert --> ic-typography
  ic-alert --> ic-button
  style ic-dialog fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


