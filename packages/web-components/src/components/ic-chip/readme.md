# ic-chip



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                | Description                                                                                                                                                                          | Type                                                    | Default     |
| ----------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ----------- |
| `customColor`           | `custom-color`           | The custom chip colour. This will override the theme colour. Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)".                        | ``#${string}` \| `rgb(${string})` \| `rgba(${string})`` | `null`      |
| `disabled`              | `disabled`               | If `true`, the chip will appear disabled.                                                                                                                                            | `boolean`                                               | `false`     |
| `dismissible`           | `dismissible`            | If `true`, the chip will have a close button at the end to dismiss it.                                                                                                               | `boolean`                                               | `false`     |
| `label` _(required)_    | `label`                  | The text rendered within the chip.                                                                                                                                                   | `string`                                                | `undefined` |
| `size`                  | `size`                   | The size of the chip.                                                                                                                                                                | `"large" \| "medium" \| "small"`                        | `"medium"`  |
| `theme`                 | `theme`                  | Sets the chip to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component. Setting the "customColor" prop will override this. | `"dark" \| "inherit" \| "light"`                        | `"inherit"` |
| `transparentBackground` | `transparent-background` | If `true`, the outlined variant of chip will have a transparent background rather than the theme defined color.                                                                      | `boolean`                                               | `true`      |
| `variant`               | `variant`                | The emphasis of the chip.                                                                                                                                                            | `"filled" \| "outlined"`                                | `"filled"`  |


## Events

| Event       | Description                                  | Type                |
| ----------- | -------------------------------------------- | ------------------- |
| `icDismiss` | Is emitted when the user dismisses the chip. | `CustomEvent<void>` |


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


