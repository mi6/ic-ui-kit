# ic-pagination-bar



<!-- Auto Generated Below -->


## Properties

<<<<<<< HEAD
| Property                  | Attribute                     | Description                                                                                                                                                                    | Type                                   | Default     |
| ------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- | ----------- |
| `alignment`               | `alignment`                   | Sets the alignment of the items in the pagination bar.                                                                                                                         | `"left" \| "right" \| "space-between"` | `"right"`   |
| `appearance`              | `appearance`                  | Sets the styling for the items in the pagination bar.                                                                                                                          | `"dark" \| "default" \| "light"`       | `"default"` |
| `itemLabel`               | `item-label`                  | The label which will be used in place of 'items' if paginationType is data. Should be capitalised.                                                                             | `string`                               | `"Item"`    |
| `itemsPerPageOptions`     | --                            | The options which will be displayed for 'items per page' select input. Set a maximum of 4 options including a required 'All' option with value equal to total number of items. | `{ label: string; value: string; }[]`  | `undefined` |
| `pageLabel`               | `page-label`                  | The label which will be used in place of 'Page' if paginationType is page. Should be capitalised.                                                                              | `string`                               | `"Page"`    |
| `paginationControl`       | `pagination-control`          | Whether the displayed pagination is simple or complex.                                                                                                                         | `"complex" \| "simple"`                | `"simple"`  |
| `paginationType`          | `pagination-type`             | Whether total number of items and current item range or total number of pages and current page is displayed.                                                                   | `"data" \| "page"`                     | `"page"`    |
| `showGoToPageControl`     | `show-go-to-page-control`     | If `true`, the 'go to page' control should be displayed.                                                                                                                       | `boolean`                              | `false`     |
| `showItemsPerPage`        | `show-items-per-page`         | If `true`, the number of total items and current item range or number of total pages and current page should be displayed.                                                     | `boolean`                              | `true`      |
| `showItemsPerPageControl` | `show-items-per-page-control` | If `true`, the select input to control 'items per page' should be displayed.                                                                                                   | `boolean`                              | `false`     |
| `totalItems` _(required)_ | `total-items`                 | Total number of items to be displayed across all pages.                                                                                                                        | `number`                               | `undefined` |
=======
| Property                  | Attribute                     | Description                                                                                                                                                         | Type                                   | Default     |
| ------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |
| `alignment`               | `alignment`                   | Sets the alignment of the items in the pagination bar.                                                                                                              | `"left" \| "right" \| "space-between"` | `"right"`   |
| `appearance`              | `appearance`                  | Sets the styling for the items in the pagination bar.                                                                                                               | `"dark" \| "default" \| "light"`       | `"default"` |
| `itemLabel`               | `item-label`                  | What label will be used in place of 'items' if paginationType is data, should be capitalised.                                                                       | `string`                               | `"Item"`    |
| `itemsPerPageOptions`     | --                            | What options will be displayed for 'items per page' select input, maximum of 4 options including a required 'All' option with value equal to total number of items. | `{ label: string; value: string; }[]`  | `undefined` |
| `pageLabel`               | `page-label`                  | What label will be used in place of 'Page' if paginationType is page, should be capitalised.                                                                        | `string`                               | `"Page"`    |
| `paginationControl`       | `pagination-control`          | Whether the displayed pagination is simple or complex.                                                                                                              | `"complex" \| "simple"`                | `"simple"`  |
| `paginationType`          | `pagination-type`             | Whether total number of items and current item range or total number of pages and current page is displayed.                                                        | `"data" \| "page"`                     | `"page"`    |
| `showGoToPageControl`     | `show-go-to-page-control`     | If `true`, the 'go to page' control should be displayed.                                                                                                            | `boolean`                              | `false`     |
| `showItemsPerPage`        | `show-items-per-page`         | If `true`, the number of total items and current item range or number of total pages and current page should be displayed.                                          | `boolean`                              | `true`      |
| `showItemsPerPageControl` | `show-items-per-page-control` | If `true`, the select input to control 'items per page' should be displayed.                                                                                        | `boolean`                              | `false`     |
| `totalItems` _(required)_ | `total-items`                 | Total number of items to be displayed across all pages.                                                                                                             | `number`                               | `undefined` |
>>>>>>> 2bd78d8e (feat(web-components): add pagination bar component)


## Events

| Event                  | Description                                                | Type                              |
| ---------------------- | ---------------------------------------------------------- | --------------------------------- |
| `icItemsPerPageChange` | Emitted when the items per page option is changed.         | `CustomEvent<{ value: number; }>` |
| `icPageChange`         | Emitted when a page is navigated to via the 'go to' input. | `CustomEvent<{ value: number; }>` |


## Dependencies

<<<<<<< HEAD
### Used by

 - [ic-data-table](../ic-data-table)

=======
>>>>>>> 2bd78d8e (feat(web-components): add pagination bar component)
### Depends on

- [ic-typography](../ic-typography)
- [ic-select](../ic-select)
- [ic-pagination](../ic-pagination)
- [ic-tooltip](../ic-tooltip)
- [ic-text-field](../ic-text-field)
- [ic-button](../ic-button)

### Graph
```mermaid
graph TD;
  ic-pagination-bar --> ic-typography
  ic-pagination-bar --> ic-select
  ic-pagination-bar --> ic-pagination
  ic-pagination-bar --> ic-tooltip
  ic-pagination-bar --> ic-text-field
  ic-pagination-bar --> ic-button
  ic-select --> ic-input-container
  ic-select --> ic-input-label
  ic-select --> ic-input-component-container
  ic-select --> ic-typography
  ic-select --> ic-button
  ic-select --> ic-menu
  ic-select --> ic-input-validation
  ic-input-label --> ic-typography
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  ic-menu --> ic-loading-indicator
  ic-menu --> ic-typography
  ic-menu --> ic-button
  ic-input-validation --> ic-typography
  ic-pagination --> ic-button
  ic-pagination --> ic-pagination-item
  ic-pagination-item --> ic-typography
  ic-text-field --> ic-input-container
  ic-text-field --> ic-input-label
  ic-text-field --> ic-input-component-container
  ic-text-field --> ic-input-validation
  ic-text-field --> ic-typography
<<<<<<< HEAD
  ic-data-table --> ic-pagination-bar
=======
>>>>>>> 2bd78d8e (feat(web-components): add pagination bar component)
  style ic-pagination-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


