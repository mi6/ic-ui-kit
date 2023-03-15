# ic-popover-menu

This is a wrapper component to be placed around one or more ic-menu-item components.

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                     | Type      | Default     |
| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `anchor`    | `anchor`     | The ID of the element the popover menu will anchor itself to. This is required unless the popover is a submenu. | `string`  | `undefined` |
| `open`      | `open`       | If `true`, the popover menu will be displayed.                                                                  | `boolean` | `undefined` |
| `submenuId` | `submenu-id` | The unique identifier for a popover submenu.                                                                    | `string`  | `undefined` |


## CSS Custom Properties

| Name                   | Description                         |
| ---------------------- | ----------------------------------- |
| `--ic-z-index-popover` | z-index of popover menu.            |
| `--max-height`         | Maximum height of the popover menu. |
| `--popover-width`      | Default width of the popover menu.  |


## Dependencies

### Depends on

- [ic-menu-item](../ic-menu-item)
- [ic-typography](../ic-typography)

### Graph
```mermaid
graph TD;
  ic-popover-menu --> ic-menu-item
  ic-popover-menu --> ic-typography
  ic-menu-item --> ic-typography
  ic-menu-item --> ic-button
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  style ic-popover-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


