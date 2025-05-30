# ic-input-label



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute     | Description                                       | Type                   | Default     |
| -------------------- | ------------- | ------------------------------------------------- | ---------------------- | ----------- |
| `disabled`           | `disabled`    | If `true`, the disabled state will be set.        | `boolean \| undefined` | `false`     |
| `for`                | `for`         | The ID of the form element the label is bound to. | `string \| undefined`  | `undefined` |
| `helperText`         | `helper-text` | The helper text that will be displayed.           | `string`               | `""`        |
| `hideLabel`          | `hide-label`  | The label will be visually hidden.                | `boolean`              | `false`     |
| `label` _(required)_ | `label`       | The text content of the label.                    | `string`               | `undefined` |
| `readonly`           | `readonly`    | If `true`, the readonly state will be set.        | `boolean`              | `false`     |
| `required`           | `required`    | If `true`, the input label will require a value.  | `boolean`              | `false`     |
| `status`             | `status`      | The status of the label - e.g. 'error'.           | `"" \| "error"`        | `""`        |


## Dependencies

### Used by

 - [ic-checkbox-group](../ic-checkbox-group)
 - [ic-radio-group](../ic-radio-group)
 - [ic-search-bar](../ic-search-bar)
 - [ic-select](../ic-select)
 - [ic-switch](../ic-switch)
 - [ic-text-field](../ic-text-field)

### Depends on

- [ic-typography](../ic-typography)

### Graph
```mermaid
graph TD;
  ic-input-label --> ic-typography
  ic-checkbox-group --> ic-input-label
  ic-radio-group --> ic-input-label
  ic-search-bar --> ic-input-label
  ic-select --> ic-input-label
  ic-switch --> ic-input-label
  ic-text-field --> ic-input-label
  style ic-input-label fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


