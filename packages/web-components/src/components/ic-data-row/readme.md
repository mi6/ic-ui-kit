# ic-data-row



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                         | Type                   | Default     |
| -------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| `label`  | `label`   | The label in the leftmost cell of the row.                                                                                          | `string`               | `undefined` |
| `size`   | `size`    | The size of the data row component.                                                                                                 | `"default" \| "small"` | `"default"` |
| `small`  | `small`   | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/> | `boolean`              | `false`     |
| `value`  | `value`   | The value of the middle (right if no end-component supplied) cell of the row.                                                       | `string`               | `undefined` |


## Slots

| Slot              | Description                                         |
| ----------------- | --------------------------------------------------- |
| `"end-component"` | Content will be displayed in the rightmost cell.    |
| `"label"`         | Content will be rendered in the leftmost cell.      |
| `"value"`         | Content will be rendered to the right of the label. |


## Dependencies

### Depends on

- [ic-typography](../ic-typography)

### Graph
```mermaid
graph TD;
  ic-data-row --> ic-typography
  style ic-data-row fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


