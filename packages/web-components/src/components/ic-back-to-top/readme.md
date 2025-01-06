# ic-back-to-top



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute | Description                                                                                                                             | Type                             | Default     |
| --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| `target` _(required)_ | `target`  | The ID of the element to jump back to when the link is clicked.                                                                         | `string`                         | `undefined` |
| `theme`               | `theme`   | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \| "inherit" \| "light"` | `"inherit"` |
| `variant`             | `variant` | The variant of the button to render                                                                                                     | `"default" \| "icon"`            | `"default"` |


## Dependencies

### Depends on

- [ic-button](../ic-button)

### Graph
```mermaid
graph TD;
  ic-back-to-top --> ic-button
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  style ic-back-to-top fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


