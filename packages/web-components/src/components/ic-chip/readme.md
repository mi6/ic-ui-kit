# ic-chip



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute     | Description                                                                                                               | Type                              | Default     |
| -------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------- |
| `appearance`         | `appearance`  | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Use variant prop instead.<br/><br/> | `"filled" \| "outline"`           | `undefined` |
| `disabled`           | `disabled`    | If `true`, the chip will appear disabled.                                                                                 | `boolean`                         | `false`     |
| `dismissible`        | `dismissible` | If `true`, the chip will have a close button at the end to dismiss it.                                                    | `boolean`                         | `false`     |
| `label` _(required)_ | `label`       | The text rendered within the chip.                                                                                        | `string`                          | `undefined` |
| `size`               | `size`        | The size of the chip.                                                                                                     | `"default" \| "large" \| "small"` | `"default"` |
| `variant`            | `variant`     | The emphasis of the chip.                                                                                                 | `"filled" \| "outlined"`          | `"filled"`  |


## Events

| Event       | Description                                                                                                             | Type                |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `dismiss`   | <span style="color:red">**[DEPRECATED]**</span> This event should not be used anymore. Use icDismiss instead.<br/><br/> | `CustomEvent<void>` |
| `icDismiss` | Is emitted when the user dismisses the chip.                                                                            | `CustomEvent<void>` |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the chip.

#### Returns

Type: `Promise<void>`




## Slots

| Slot      | Description                                           |
| --------- | ----------------------------------------------------- |
| `"badge"` | Badge component overlaying the top right of the chip. |
| `"icon"`  | Content will be rendered at the start of the chip.    |


## Dependencies

### Depends on

- [ic-typography](../ic-typography)
- [ic-tooltip](../ic-tooltip)

### Graph
```mermaid
graph TD;
  ic-chip --> ic-typography
  ic-chip --> ic-tooltip
  ic-tooltip --> ic-typography
  style ic-chip fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


