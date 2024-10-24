# ic-input-container



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                                      | Type                                      | Default     |
| ------------------ | ------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------- | ----------- |
| `appearance`       | `appearance`        | The appearance of the input component container.                                                 | `"dark" \| "default"`                     | `"default"` |
| `disabled`         | `disabled`          | If `true`, the disabled state will be set.                                                       | `boolean`                                 | `false`     |
| `fullWidth`        | `full-width`        | If `true`, the input component container will fill the width of the container it is in.          | `boolean`                                 | `false`     |
| `multiLine`        | `multi-line`        | If `true`, the input component container will allow for multiple lines.                          | `boolean`                                 | `false`     |
| `readonly`         | `readonly`          | If `true`, the readonly state will be set.                                                       | `boolean`                                 | `false`     |
| `size`             | `size`              | The size of the input component container component.                                             | `"large" \| "medium" \| "small"`          | `"medium"`  |
| `validationInline` | `validation-inline` | If `true`, the validation will display inline.                                                   | `boolean`                                 | `false`     |
| `validationStatus` | `validation-status` | The validation status of the input component container - e.g. 'error' \| 'warning' \| 'success'. | `"" \| "error" \| "success" \| "warning"` | `""`        |


## Slots

| Slot          | Description                                      |
| ------------- | ------------------------------------------------ |
| `"left-icon"` | Content will be placed to the left of the input. |


## CSS Custom Properties

| Name                      | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| `--border-color`          | Border colour of the input component container               |
| `--border-color-disabled` | Border colour of the input component container when disabled |


## Dependencies

### Used by

 - [ic-select](../ic-select)
 - [ic-text-field](../ic-text-field)

### Graph
```mermaid
graph TD;
  ic-select --> ic-input-component-container
  ic-text-field --> ic-input-component-container
  style ic-input-component-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


