# ic-navigation-menu



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                  | Type     | Default |
| --------- | --------- | ---------------------------- | -------- | ------- |
| `status`  | `status`  | The status info to display.  | `string` | `""`    |
| `version` | `version` | The version info to display. | `string` | `""`    |


## Slots

| Slot           | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| `"buttons"`    | Content will be rendered above version info and below navigation. |
| `"navigation"` | Content will be rendered at top of panel.                         |


## CSS Custom Properties

| Name                           | Description                |
| ------------------------------ | -------------------------- |
| `--ic-z-index-navigation-menu` | z-index of navigation menu |


## Dependencies

### Used by

 - [ic-top-navigation](../ic-top-navigation)

### Depends on

- [ic-button](../ic-button)
- [ic-typography](../ic-typography)

### Graph
```mermaid
graph TD;
  ic-navigation-menu --> ic-button
  ic-navigation-menu --> ic-typography
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  ic-top-navigation --> ic-navigation-menu
  style ic-navigation-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


