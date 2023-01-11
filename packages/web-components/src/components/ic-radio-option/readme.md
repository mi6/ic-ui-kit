# ic-radio-option



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                  | Description                                                        | Type                    | Default                                        |
| ------------------------ | -------------------------- | ------------------------------------------------------------------ | ----------------------- | ---------------------------------------------- |
| `additionalFieldDisplay` | `additional-field-display` | The style of additionalField that will be displayed if used.       | `"dynamic" \| "static"` | `"static"`                                     |
| `disabled`               | `disabled`                 | If `true`, the disabled state will be set.                         | `boolean`               | `false`                                        |
| `dynamicText`            | `dynamic-text`             | The text to be displayed when dynamic.                             | `string`                | `"This selection requires additional answers"` |
| `groupLabel`             | `group-label`              | The group label for the radio option.                              | `string`                | `undefined`                                    |
| `label`                  | `label`                    | The label for the radio option.                                    | `string`                | `undefined`                                    |
| `name`                   | `name`                     | The name for the radio option.                                     | `string`                | `undefined`                                    |
| `selected`               | `selected`                 | If `true`, the radio option will be displayed in a selected state. | `boolean`               | `false`                                        |
| `value` _(required)_     | `value`                    | The value for the radio option.                                    | `string`                | `undefined`                                    |


## Events

| Event               | Description                                                                                                           | Type                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `icCheck`           | Emitted when a radio is selected.                                                                                     | `CustomEvent<IcValueEventDetail>` |
| `radioOptionSelect` | <span style="color:red">**[DEPRECATED]**</span> This event should not be used anymore. Use icCheck instead.<br/><br/> | `CustomEvent<IcValueEventDetail>` |


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


