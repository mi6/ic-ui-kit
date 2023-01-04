# ic-switch



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute     | Description                                                                                                                                                                                                                                           | Type      | Default        |
| -------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------- |
| `checked`            | `checked`     | If `true`, the switch will display as checked.                                                                                                                                                                                                        | `boolean` | `false`        |
| `disabled`           | `disabled`    | If `true`, the disabled state will be set.                                                                                                                                                                                                            | `boolean` | `false`        |
| `helperText`         | `helper-text` | The helper text that will be displayed for additional field guidance.                                                                                                                                                                                 | `string`  | `""`           |
| `hideLabel`          | `hide-label`  | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                                                                                                    | `boolean` | `false`        |
| `label` _(required)_ | `label`       | The aria-label applied to the switch when no visual 'name' is provided.                                                                                                                                                                               | `string`  | `undefined`    |
| `name`               | `name`        | The name of the control, which is submitted with the form data.                                                                                                                                                                                       | `string`  | `this.inputId` |
| `showState`          | `show-state`  | If `true`, the switch will render the On/Off state text.                                                                                                                                                                                              | `boolean` | `false`        |
| `small`              | `small`       | If `true`, the small styling will be applied to the switch.                                                                                                                                                                                           | `boolean` | `false`        |
| `value`              | `value`       | The value of the toggle does not mean if it's checked or not, use the `checked` property for that.  The value of a toggle is analogous to the value of a `<input type="checkbox">`, it's only used when the toggle participates in a native `<form>`. | `string`  | `"on"`         |


## Events

| Event      | Description                                  | Type                                     |
| ---------- | -------------------------------------------- | ---------------------------------------- |
| `icBlur`   | Emitted when the toggle loses focus.         | `CustomEvent<void>`                      |
| `icChange` | Emitted when the value property has changed. | `CustomEvent<IcSwitchChangeEventDetail>` |
| `icFocus`  | Emitted when the toggle has focus.           | `CustomEvent<void>`                      |


## Slots

| Slot                | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `"right-adornment"` | Content is placed to the right of switch before state label. |


## Dependencies

### Depends on

- [ic-input-label](../ic-input-label)
- [ic-typography](../ic-typography)

### Graph
```mermaid
graph TD;
  ic-switch --> ic-input-label
  ic-switch --> ic-typography
  ic-input-label --> ic-typography
  style ic-switch fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


