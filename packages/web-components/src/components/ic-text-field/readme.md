# ic-textfield



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                                                                                                                                                                                         | Type                                                                                  | Default                                                   |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `autocapitalize`       | `autocapitalize`         | The automatic capitalisation of the text value as it is entered/edited by the user. Available options: "off", "none", "on", "sentences", "words", "characters".                                                     | `string`                                                                              | `"off"`                                                   |
| `autocomplete`         | `autocomplete`           | The state of autocompletion the browser can apply on the text value.                                                                                                                                                | `IcAutocompleteTypes \| undefined`                                                    | `"off"`                                                   |
| `autocorrect`          | `autocorrect`            | The state of autocorrection the browser can apply when the user is entering/editing the text value.                                                                                                                 | `"off" \| "on" \| undefined`                                                          | `"off"`                                                   |
| `autofocus`            | `autofocus`              | If `true`, the form control will have input focus when the page loads.                                                                                                                                              | `boolean`                                                                             | `false`                                                   |
| `debounce`             | `debounce`               | The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.                                                                                                                  | `number`                                                                              | `0`                                                       |
| `disabled`             | `disabled`               | If `true`, the disabled state will be set.                                                                                                                                                                          | `boolean`                                                                             | `false`                                                   |
| `fullWidth`            | `full-width`             | Specify whether the text field fills the full width of the container. If `true`, this overrides the --input-width CSS variable.                                                                                     | `boolean`                                                                             | `false`                                                   |
| `helperText`           | `helper-text`            | The helper text that will be displayed for additional field guidance.                                                                                                                                               | `string`                                                                              | `""`                                                      |
| `hideCharCount`        | `hide-char-count`        | If `true`, the character count which is displayed when `maxCharacters` is set will be visually hidden.                                                                                                              | `boolean`                                                                             | `false`                                                   |
| `hideLabel`            | `hide-label`             | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                                                                  | `boolean`                                                                             | `false`                                                   |
| `inputId`              | `input-id`               | The ID for the input.                                                                                                                                                                                               | `string`                                                                              | `` `ic-text-field-input-${inputIds++}` ``                 |
| `inputmode`            | `inputmode`              | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.                                                    | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"` | `"text"`                                                  |
| `label` _(required)_   | `label`                  | The label for the input.                                                                                                                                                                                            | `string`                                                                              | `undefined`                                               |
| `max`                  | `max`                    | The maximum number that can be accepted as a value, when `type` is `number` and `rows` is `1`. (NOTE: Ensure to include visual indication of max value in `helperText` or `label`)                                  | `number \| string \| undefined`                                                       | `undefined`                                               |
| `maxCharacters`        | `max-characters`         | The count of characters in the field. Will display a warning if the bound is reached. (NOTE: If the value of the text field has been set using the `value` prop, it will be truncated to this number of characters) | `number`                                                                              | `0`                                                       |
| `maxCharactersMessage` | `max-characters-message` | The text to display as the warning message when the maximum number of characters (the `maxCharacters` prop value) is reached.                                                                                       | `string`                                                                              | `` `Maximum input is ${this.maxCharacters} characters` `` |
| `maxMessage`           | `max-message`            | The text to display as the error message when the maximum value (the `max` prop value) has been exceeded.                                                                                                           | `string`                                                                              | `` `Maximum value of ${this.max} exceeded` ``             |
| `min`                  | `min`                    | The minimum number that can be accepted as a value, when `type` is `number` and `rows` is `1`. (NOTE: Ensure to include visual indication of min value in `helperText` or `label`)                                  | `number \| string \| undefined`                                                       | `undefined`                                               |
| `minCharacters`        | `min-characters`         | The minimum number of characters that can be entered in the field.                                                                                                                                                  | `number`                                                                              | `0`                                                       |
| `minCharactersMessage` | `min-characters-message` | The text to display as the error message when the minimum number of characters (the `minCharacters` prop value) has not been met.                                                                                   | `string`                                                                              | `` `Minimum input is ${this.minCharacters} characters` `` |
| `minMessage`           | `min-message`            | The text to display as the error message when the minimum value (the `min` prop value) has not been met.                                                                                                            | `string`                                                                              | `` `Minimum value of ${this.min} not met` ``              |
| `name`                 | `name`                   | The name of the control, which is submitted with the form data.                                                                                                                                                     | `string`                                                                              | `this.inputId`                                            |
| `placeholder`          | `placeholder`            | The placeholder value to be displayed.                                                                                                                                                                              | `string`                                                                              | `""`                                                      |
| `readonly`             | `readonly`               | If `true`, the read only state will be set.                                                                                                                                                                         | `boolean`                                                                             | `false`                                                   |
| `required`             | `required`               | If `true`, the input will require a value.                                                                                                                                                                          | `boolean`                                                                             | `false`                                                   |
| `resize`               | `resize`                 | If `true`, the multiline text area will be resizeable.                                                                                                                                                              | `boolean`                                                                             | `false`                                                   |
| `rows`                 | `rows`                   | The number of rows to transform the text field into a text area with a specific height.                                                                                                                             | `number`                                                                              | `1`                                                       |
| `size`                 | `size`                   | The size of the text field component.                                                                                                                                                                               | `"medium" \| "small"`                                                                 | `"medium"`                                                |
| `spellcheck`           | `spellcheck`             | If `true`, the value of the text field will have its spelling and grammar checked.                                                                                                                                  | `boolean`                                                                             | `false`                                                   |
| `theme`                | `theme`                  | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                                                             | `"dark" \| "inherit" \| "light"`                                                      | `"inherit"`                                               |
| `type`                 | `type`                   | The type of control to display. The default type is text.                                                                                                                                                           | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"`           | `"text"`                                                  |
| `validationInline`     | `validation-inline`      | If `true`, the icon in input control will be displayed - only applies when validationStatus ='success'.                                                                                                             | `boolean`                                                                             | `false`                                                   |
| `validationStatus`     | `validation-status`      | The validation state - e.g. 'error' \| 'warning' \| 'success'.                                                                                                                                                      | `"" \| "error" \| "success" \| "warning"`                                             | `""`                                                      |
| `validationText`       | `validation-text`        | The text to display as the validation message.                                                                                                                                                                      | `string`                                                                              | `""`                                                      |
| `value`                | `value`                  | The value of the text field.                                                                                                                                                                                        | `string`                                                                              | `""`                                                      |


## Events

| Event       | Description                                    | Type                                     |
| ----------- | ---------------------------------------------- | ---------------------------------------- |
| `icBlur`    | Emitted when input loses focus.                | `CustomEvent<IcValueEventDetail>`        |
| `icChange`  | Emitted when the value has changed.            | `CustomEvent<IcValueEventDetail>`        |
| `icFocus`   | Emitted when input gains focus.                | `CustomEvent<IcValueEventDetail>`        |
| `icInput`   | Emitted when a keyboard input occurred.        | `CustomEvent<IcValueEventDetail>`        |
| `icKeydown` | Emitted when a keydown event occurred.         | `CustomEvent<{ event: KeyboardEvent; }>` |
| `icScroll`  | Emitted when the textarea variant is scrolled. | `CustomEvent<any>`                       |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the native `input`.

#### Returns

Type: `Promise<void>`




## Slots

| Slot            | Description                                           |
| --------------- | ----------------------------------------------------- |
| `"helper-text"` | Content is set as the helper text for the text field. |
| `"icon"`        | Content will be placed to the left of the text input. |


## CSS Custom Properties

| Name            | Description              |
| --------------- | ------------------------ |
| `--input-width` | Width of the input field |


## Dependencies

### Depends on

- [ic-input-container](../ic-input-container)
- [ic-input-label](../ic-input-label)
- [ic-input-component-container](../ic-input-component-container)
- [ic-input-validation](../ic-input-validation)
- [ic-typography](../ic-typography)

### Graph
```mermaid
graph TD;
  ic-text-field --> ic-input-container
  ic-text-field --> ic-input-label
  ic-text-field --> ic-input-component-container
  ic-text-field --> ic-input-validation
  ic-text-field --> ic-typography
  ic-input-label --> ic-typography
  ic-input-validation --> ic-typography
  style ic-text-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


