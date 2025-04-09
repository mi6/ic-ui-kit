# ic-toggle-button-group



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                                                                                                                                                    | Type                                          | Default                 |
| ------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------- |
| `accessibleLabel`  | `accessible-label`  | The accessible label of the toggle button group component to provide context for screen reader users.                                                                                                          | `string \| undefined`                         | `"Toggle button group"` |
| `disabled`         | `disabled`          | If `true`, the toggle button group will be set to the disabled state.                                                                                                                                          | `boolean`                                     | `false`                 |
| `fullWidth`        | `full-width`        | If `true`, the toggle button group will fill the width of the container.                                                                                                                                       | `boolean \| undefined`                        | `false`                 |
| `iconPlacement`    | `icon-placement`    | The placement of the icons in relation to the toggle button labels.                                                                                                                                            | `"left" \| "right" \| "top" \| undefined`     | `undefined`             |
| `loading`          | `loading`           | If `true`, the toggle button group will be in loading state.                                                                                                                                                   | `boolean \| undefined`                        | `false`                 |
| `monochrome`       | `monochrome`        | If `true`, the toggle button group will display as black in the light theme, and white in dark theme.                                                                                                          | `boolean \| undefined`                        | `false`                 |
| `selectMethod`     | `select-method`     | If `auto`, controls are toggled automatically when navigated to. If `manual`, the controls must be actioned to change their toggled state. The value of this prop is ignored if `selectType` is set to`multi`. | `"auto" \| "manual" \| undefined`             | `"manual"`              |
| `selectType`       | `select-type`       | Sets whether single or multiple options can be toggled. If `multi`, then the `selectMethod` is always `manual`.                                                                                                | `"multi" \| "single" \| undefined`            | `"single"`              |
| `size`             | `size`              | The size of the toggle buttons to be displayed. This does not affect the font size of the accessible label.                                                                                                    | `"large" \| "medium" \| "small" \| undefined` | `"medium"`              |
| `theme`            | `theme`             | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                                                        | `"dark" \| "inherit" \| "light" \| undefined` | `"inherit"`             |
| `tooltipPlacement` | `tooltip-placement` | The position of the tooltip in relation to the toggle buttons.                                                                                                                                                 | `"bottom" \| "left" \| "right" \| "top"`      | `"bottom"`              |
| `variant`          | `variant`           | The variant of the toggle button.                                                                                                                                                                              | `"default" \| "icon"`                         | `"default"`             |


## Events

| Event      | Description                               | Type                               |
| ---------- | ----------------------------------------- | ---------------------------------- |
| `icChange` | Emitted when a toggle button is selected. | `CustomEvent<IcChangeEventDetail>` |


----------------------------------------------


