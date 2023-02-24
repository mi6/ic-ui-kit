# ic-link



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                                                                         | Type                                                                                                                                                                                     | Default     |
| ---------------- | ---------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `appearance`     | `appearance`     | The appearance of the link, e.g. dark, light, or default.                                           | `"dark" \| "default" \| "light"`                                                                                                                                                         | `"default"` |
| `download`       | `download`       | If `true`, the user can save the linked URL instead of navigating to it.                            | `boolean \| string`                                                                                                                                                                      | `false`     |
| `href`           | `href`           | The URL that the link points to.                                                                    | `string`                                                                                                                                                                                 | `null`      |
| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                               | `string`                                                                                                                                                                                 | `undefined` |
| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                           | `"" \| "no-referrer" \| "no-referrer-when-downgrade" \| "origin" \| "origin-when-cross-origin" \| "same-origin" \| "strict-origin" \| "strict-origin-when-cross-origin" \| "unsafe-url"` | `undefined` |
| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                   | `string`                                                                                                                                                                                 | `undefined` |
| `showIcon`       | `show-icon`      | If `true`, the 'open in new tab/window' icon will be displayed.                                     | `boolean`                                                                                                                                                                                | `undefined` |
| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe). | `string`                                                                                                                                                                                 | `undefined` |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the link.

#### Returns

Type: `Promise<void>`




## Slots

| Slot            | Description                                         |
| --------------- | --------------------------------------------------- |
| `"router-item"` | Handle routing by nesting your routes in this slot. |


## Dependencies

### Used by

 - [ic-breadcrumb](../ic-breadcrumb)

### Graph
```mermaid
graph TD;
  ic-breadcrumb --> ic-link
  style ic-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


