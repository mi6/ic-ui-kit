# ic-pagination-item



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                               | Type                                       | Default     |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------- |
| `appearance`   | `appearance`    | The appearance of the pagination, e.g. dark, light or the default.                                        | `"dark" \| "default" \| "light"`           | `undefined` |
| `ariaOverride` | `aria-override` | If true the aria-label will be set to `Page X of Y`, where X is the current page and Y is the page count. | `boolean`                                  | `false`     |
| `disabled`     | `disabled`      | If `true`, the pagination item will be disabled.                                                          | `boolean`                                  | `false`     |
| `label`        | `label`         | The label for the pagination item (applicable when simple pagination is being used).                      | `string`                                   | `"Page "`   |
| `page`         | `page`          | The current page number.                                                                                  | `number`                                   | `undefined` |
| `pages`        | `pages`         | The total number of pages.                                                                                | `number`                                   | `undefined` |
| `selected`     | `selected`      | If `true`, the pagination item will be selected.                                                          | `boolean`                                  | `false`     |
| `type`         | `type`          | The type of pagination item - 'page' or 'ellipsis'.                                                       | `"ellipsis" \| "page" \| "simple-current"` | `undefined` |


## Dependencies

### Used by

 - [ic-pagination](../ic-pagination)

### Depends on

- [ic-typography](../ic-typography)

### Graph
```mermaid
graph TD;
  ic-pagination-item --> ic-typography
  ic-pagination --> ic-pagination-item
  style ic-pagination-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


