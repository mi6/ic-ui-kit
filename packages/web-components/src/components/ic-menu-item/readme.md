# ic-menu-item



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute             | Description                                                                                                                                  | Type                                                                                                                                                                                     | Default     |
| -------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `description`        | `description`         | The description displayed in the menu item, below the label.                                                                                 | `string`                                                                                                                                                                                 | `undefined` |
| `disabled`           | `disabled`            | If `true`, the menu item will be in disabled state.                                                                                          | `boolean`                                                                                                                                                                                | `false`     |
| `href`               | `href`                | The URL that the link points to. This will render the menu item as an "a" tag.                                                               | `string`                                                                                                                                                                                 | `undefined` |
| `hreflang`           | `hreflang`            | The human language of the linked URL.                                                                                                        | `string`                                                                                                                                                                                 | `undefined` |
| `keyboardShortcut`   | `keyboard-shortcut`   | The label describing the keyboard shortcut for a menu item's action.                                                                         | `string`                                                                                                                                                                                 | `undefined` |
| `label` _(required)_ | `label`               | The label to display in the menu item.                                                                                                       | `string`                                                                                                                                                                                 | `undefined` |
| `referrerpolicy`     | `referrerpolicy`      | How much of the referrer to send when following the link.                                                                                    | `"" \| "no-referrer" \| "no-referrer-when-downgrade" \| "origin" \| "origin-when-cross-origin" \| "same-origin" \| "strict-origin" \| "strict-origin-when-cross-origin" \| "unsafe-url"` | `undefined` |
| `rel`                | `rel`                 | The relationship of the linked URL as space-separated link types.                                                                            | `string`                                                                                                                                                                                 | `undefined` |
| `submenuTriggerFor`  | `submenu-trigger-for` | This references the popover menu instance that the menu item is a trigger for. If this prop is set, then the variant will always be default. | `string`                                                                                                                                                                                 | `undefined` |
| `target`             | `target`              | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                          | `string`                                                                                                                                                                                 | `undefined` |
| `variant`            | `variant`             | The variant of the menu item.                                                                                                                | `"default" \| "destructive" \| "toggle"`                                                                                                                                                 | `"default"` |


## Slots

| Slot     | Description                                                |
| -------- | ---------------------------------------------------------- |
| `"icon"` | Content will be placed to the left of the menu item label. |


## Dependencies

### Depends on

- [ic-typography](../ic-typography)
- [ic-button](../ic-button)

### Graph
```mermaid
graph TD;
  ic-menu-item --> ic-typography
  ic-menu-item --> ic-button
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  style ic-menu-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


