# ic-tree-item



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                             | Type                                                                                                                                                                                                  | Default     |
| ------------------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `disabled`         | `disabled`           | If `true`, the tree item appears in the disabled state.                                                                                 | `boolean`                                                                                                                                                                                             | `false`     |
| `expanded`         | `expanded`           | If `true`, the tree item appears in the expanded state.                                                                                 | `boolean`                                                                                                                                                                                             | `false`     |
| `href`             | `href`               | The URL that the tree item link points to. If set, the tree item will render as an "a" tag, otherwise it will render as a div.          | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `hreflang`         | `hreflang`           | The human language of the linked URL.                                                                                                   | `string \| undefined`                                                                                                                                                                                 | `""`        |
| `label`            | `label`              | The label of the tree item.                                                                                                             | `string`                                                                                                                                                                                              | `""`        |
| `referrerpolicy`   | `referrerpolicy`     | How much of the referrer to send when following the link.                                                                               | `"" \| "no-referrer" \| "no-referrer-when-downgrade" \| "origin" \| "origin-when-cross-origin" \| "same-origin" \| "strict-origin" \| "strict-origin-when-cross-origin" \| "unsafe-url" \| undefined` | `undefined` |
| `rel`              | `rel`                | The relationship of the linked URL as space-separated link types.                                                                       | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `selected`         | `selected`           | If `true`, the tree item appears in the selected state.                                                                                 | `boolean`                                                                                                                                                                                             | `false`     |
| `target`           | `target`             | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                     | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `theme`            | `theme`              | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \| "inherit" \| "light" \| undefined`                                                                                                                                                         | `"inherit"` |
| `truncateTreeItem` | `truncate-tree-item` | If `true`, the tree item label will be truncated instead of text wrapping.                                                              | `boolean \| undefined`                                                                                                                                                                                | `undefined` |


## Events

| Event                | Description                         | Type                           |
| -------------------- | ----------------------------------- | ------------------------------ |
| `icTreeItemSelected` | Emitted when tree item is selected. | `CustomEvent<{ id: string; }>` |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the native `input`.

#### Returns

Type: `Promise<void>`




## Slots

| Slot            | Description                                         |
| --------------- | --------------------------------------------------- |
| `"icon"`        | Content is placed to the left of the label.         |
| `"label"`       | Content is set as the tree item label.              |
| `"router-item"` | Handle routing by nesting your routes in this slot. |


## Dependencies

### Depends on

- ic-typography
- ic-tooltip

### Graph
```mermaid
graph TD;
  ic-tree-item --> ic-typography
  ic-tree-item --> ic-tooltip
  ic-tooltip --> ic-typography
  style ic-tree-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


