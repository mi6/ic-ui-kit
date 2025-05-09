# ic-radio-option



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                  | Description                                                                                                                             | Type                                          | Default                                        |
| ------------------------ | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------- |
| `additionalFieldDisplay` | `additional-field-display` | The style of additionalField that will be displayed if used.                                                                            | `"dynamic" \| "static" \| undefined`          | `"static"`                                     |
| `disabled`               | `disabled`                 | If `true`, the disabled state will be set.                                                                                              | `boolean \| undefined`                        | `false`                                        |
| `dynamicText`            | `dynamic-text`             | The text to be displayed when dynamic.                                                                                                  | `string \| undefined`                         | `"This selection requires additional answers"` |
| `form`                   | `form`                     | The <form> element to associate the radio with.                                                                                         | `string \| undefined`                         | `undefined`                                    |
| `groupLabel`             | `group-label`              | The group label for the radio option.                                                                                                   | `string \| undefined`                         | `undefined`                                    |
| `label`                  | `label`                    | The label for the radio option.                                                                                                         | `string \| undefined`                         | `undefined`                                    |
| `name`                   | `name`                     | The name for the radio option.                                                                                                          | `string \| undefined`                         | `undefined`                                    |
| `selected`               | `selected`                 | If `true`, the radio option will be displayed in a selected state.                                                                      | `boolean \| undefined`                        | `false`                                        |
| `theme`                  | `theme`                    | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \| "inherit" \| "light" \| undefined` | `"inherit"`                                    |
| `value` _(required)_     | `value`                    | The value for the radio option.                                                                                                         | `string`                                      | `undefined`                                    |


## Events

| Event              | Description                                              | Type                              |
| ------------------ | -------------------------------------------------------- | --------------------------------- |
| `icCheck`          | Emitted when the radio option is selected.               | `CustomEvent<IcValueEventDetail>` |
| `icSelectedChange` | Emitted when the radio option is selected or deselected. | `CustomEvent<void>`               |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the radio option.

#### Returns

Type: `Promise<void>`




## Slots

| Slot                 | Description                                    |
| -------------------- | ---------------------------------------------- |
| `"additional-field"` | Content to displayed alongside a radio option. |


## Dependencies

### Depends on

- [ic-typography](../ic-typography)

### Graph
```mermaid
graph TD;
  ic-radio-option --> ic-typography
  style ic-radio-option fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


