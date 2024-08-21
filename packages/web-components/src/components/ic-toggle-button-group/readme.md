# ic-toggle-button-group



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                                                                                                                    | Type                             | Default                 |
| ----------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------- |
| `accessibleLabel` | `accessible-label` | The accessible label of the toggle button group component to provide context for screen reader users.                                                                                                          | `string`                         | `"Toggle button group"` |
| `appearance`      | `appearance`       | The appearance of the toggle button group, e.g dark, or light.                                                                                                                                                 | `"dark" \| "default" \| "light"` | `"default"`             |
| `disabled`        | `disabled`         | If `true`, the toggle button group will be set to the disabled state.                                                                                                                                          | `boolean`                        | `false`                 |
| `fullWidth`       | `full-width`       | If `true`, the toggle button group will fill the width of the container.                                                                                                                                       | `boolean`                        | `false`                 |
| `iconPlacement`   | `icon-placement`   | The placement of the icons in relation to the toggle button labels.                                                                                                                                            | `"left" \| "right" \| "top"`     | `undefined`             |
| `loading`         | `loading`          | If `true`, the toggle button group will be in loading state.                                                                                                                                                   | `boolean`                        | `false`                 |
| `selectMethod`    | `select-method`    | If `auto`, controls are toggled automatically when navigated to. If `manual`, the controls must be actioned to change their toggled state. The value of this prop is ignored if `selectType` is set to`multi`. | `"auto" \| "manual"`             | `"manual"`              |
| `selectType`      | `select-type`      | Sets whether single or multiple options can be toggled. If `multi`, then the `selectMethod` is always `manual`.                                                                                                | `"multi" \| "single"`            | `"single"`              |
| `size`            | `size`             | The size of the toggle buttons to be displayed. This does not affect the font size of the accessible label.                                                                                                    | `"large" \| "medium" \| "small"` | `"medium"`              |
| `variant`         | `variant`          | The variant of the toggle button.                                                                                                                                                                              | `"default" \| "icon"`            | `"default"`             |


## Events

| Event      | Description                               | Type                               |
| ---------- | ----------------------------------------- | ---------------------------------- |
| `icChange` | Emitted when a toggle button is selected. | `CustomEvent<IcChangeEventDetail>` |


----------------------------------------------


