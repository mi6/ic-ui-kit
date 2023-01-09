# ic-data-row



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                        | Type      | Default     |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `label`  | `label`   | The label in the leftmost cell of the row.                                                                                         | `string`  | `undefined` |
| `small`  | `small`   | If `true`, the small styling will be applied to the row. This is automatically applied if small is set on the parent data heading. | `boolean` | `false`     |
| `value`  | `value`   | The value of the middle (right if no end-component supplied) cell of the row.                                                      | `string`  | `undefined` |


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


