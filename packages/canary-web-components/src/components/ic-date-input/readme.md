# ic-date-input



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                                                                                                                                                                                                                            | Type                                           | Default                                                                                                 |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `dateFormat`           | `date-format`            | The format in which the date will be displayed.                                                                                                                                                                                                        | `"DD/MM/YYYY" \| "MM/DD/YYYY" \| "YYYY/MM/DD"` | `this.DEFAULT_DATE_FORMAT`                                                                              |
| `disableDays`          | --                       | The days of the week to disable.                                                                                                                                                                                                                       | `IcWeekDays[]`                                 | `[]`                                                                                                    |
| `disableDaysMessage`   | `disable-days-message`   | The text to display as the validation message when `disableDays` is set and a disabled date is entered.                                                                                                                                                | `string`                                       | `"The date you have selected is on a day of the week that is not allowed. Please select another date."` |
| `disableFuture`        | `disable-future`         | If `true`, dates in the future are not allowed. A validation message will appear if a date in the future is entered.                                                                                                                                   | `boolean \| undefined`                         | `false`                                                                                                 |
| `disableFutureMessage` | `disable-future-message` | The text to display as the validation message when `disableFuture` is true and a date in the future is entered.                                                                                                                                        | `string`                                       | `"Dates in the future are not allowed. Please select a date in the past."`                              |
| `disablePast`          | `disable-past`           | If `true`, dates in the past are not allowed. A validation message will appear if a date in the past is entered.                                                                                                                                       | `boolean \| undefined`                         | `false`                                                                                                 |
| `disablePastMessage`   | `disable-past-message`   | The text to display as the validation message when `disablePast` is true and a date in the past is entered.                                                                                                                                            | `string`                                       | `"Dates in the past are not allowed. Please select a date in the future."`                              |
| `disabled`             | `disabled`               | If `true`, the disabled state will be set.                                                                                                                                                                                                             | `boolean`                                      | `false`                                                                                                 |
| `emitDatePartChange`   | `emit-date-part-change`  | If `true`, every individual input field completed will emit an icChange event.                                                                                                                                                                         | `boolean \| undefined`                         | `false`                                                                                                 |
| `helperText`           | `helper-text`            | The helper text that will be displayed for additional field guidance. This will default to the text "Use format" along with the `dateFormat` value.                                                                                                    | `null \| string`                               | `undefined`                                                                                             |
| `hideHelperText`       | `hide-helper-text`       | If `true`, the helper text will be visually hidden, but still read out by screenreaders.                                                                                                                                                               | `boolean`                                      | `false`                                                                                                 |
| `hideLabel`            | `hide-label`             | If `true`, the label will be visually hidden, but will still be read out by screen readers.                                                                                                                                                            | `boolean \| undefined`                         | `false`                                                                                                 |
| `inputId`              | `input-id`               | The ID for the input.                                                                                                                                                                                                                                  | `string`                                       | `` `ic-date-input-${inputIds++}` ``                                                                     |
| `invalidDateMessage`   | `invalid-date-message`   | The text to display as the validation message when an invalid date is entered.                                                                                                                                                                         | `string`                                       | `"Please enter a valid date."`                                                                          |
| `label` _(required)_   | `label`                  | The label for the date input.                                                                                                                                                                                                                          | `string`                                       | `undefined`                                                                                             |
| `max`                  | `max`                    | The latest date that will be allowed. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object. The value of this prop is ignored if `disableFuture` is set to `true`. | `Date \| string`                               | `""`                                                                                                    |
| `min`                  | `min`                    | The earliest date that will be allowed. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object. The value of this prop is ignored if `disablePast` is set to `true`. | `Date \| string`                               | `""`                                                                                                    |
| `name`                 | `name`                   | The name of the control, which is submitted with the form data.                                                                                                                                                                                        | `string`                                       | `this.inputId`                                                                                          |
| `required`             | `required`               | If `true`, the input will require a value.                                                                                                                                                                                                             | `boolean`                                      | `false`                                                                                                 |
| `showClearButton`      | `show-clear-button`      | If `true`, a button which clears the date input when clicked will be displayed.                                                                                                                                                                        | `boolean \| undefined`                         | `true`                                                                                                  |
| `size`                 | `size`                   | The size of the date input to be displayed.                                                                                                                                                                                                            | `"large" \| "medium" \| "small"`               | `"medium"`                                                                                              |
| `theme`                | `theme`                  | Sets the date picker to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.                                                                                                               | `"dark" \| "inherit" \| "light" \| undefined`  | `"inherit"`                                                                                             |
| `validationStatus`     | `validation-status`      | The validation status - e.g. 'error' \| 'warning' \| 'success'. This will override the built-in date validation.                                                                                                                                       | `"" \| "error" \| "success" \| "warning"`      | `""`                                                                                                    |
| `validationText`       | `validation-text`        | The text to display as the validation message. This will override the built-in date validation.                                                                                                                                                        | `string \| undefined`                          | `""`                                                                                                    |
| `value`                | `value`                  | The value of the date input. The value can be in any format supported as `dateFormat`, in ISO 8601 date string format (`yyyy-mm-dd`) or as a JavaScript `Date` object.                                                                                 | `Date \| null \| string \| undefined`          | `""`                                                                                                    |


## Events

| Event      | Description                         | Type                                                                                                                                               |
| ---------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `icBlur`   | Emitted when the input loses focus. | `CustomEvent<{ value: Date \| null; }>`                                                                                                            |
| `icChange` | Emitted when the value has changed. | `CustomEvent<{ value: Date \| null; dateObject: { day: string \| null; month: string \| null; year: string \| null; }; utcValue: Date \| null; }>` |
| `icFocus`  | Emitted when the input gains focus. | `CustomEvent<{ value: Date \| null; }>`                                                                                                            |


## Methods

### `getDate() => Promise<Date | null>`

Returns the value as a Date object

#### Returns

Type: `Promise<Date | null>`

Date


## Slots

| Slot            | Description                                           |
| --------------- | ----------------------------------------------------- |
| `"helper-text"` | Content is set as the helper text for the date input. |


## Dependencies

### Used by

 - [ic-date-picker](../ic-date-picker)

### Depends on

- ic-input-container
- ic-input-label
- ic-input-component-container
- ic-button
- ic-input-validation

### Graph
```mermaid
graph TD;
  ic-date-input --> ic-input-container
  ic-date-input --> ic-input-label
  ic-date-input --> ic-input-component-container
  ic-date-input --> ic-button
  ic-date-input --> ic-input-validation
  ic-input-label --> ic-typography
  ic-button --> ic-typography
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  ic-input-validation --> ic-typography
  ic-date-picker --> ic-date-input
  style ic-date-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


