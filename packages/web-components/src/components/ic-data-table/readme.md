# ic-data-table



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute               | Description                                                                              | Type                                                                                                                                                                                                                        | Default                                                                                                                                                                                                                                                                   |
| ---------------------- | ----------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `caption` _(required)_ | `caption`               | The title for the table only visible to screen readers.                                  | `string`                                                                                                                                                                                                                    | `undefined`                                                                                                                                                                                                                                                               |
| `columns` _(required)_ | --                      | The column headers for the table.                                                        | `IcDataTableColumnObject[]`                                                                                                                                                                                                 | `undefined`                                                                                                                                                                                                                                                               |
| `data`                 | --                      | The row content for the table.                                                           | `{ [key: string]: any; }[]`                                                                                                                                                                                                 | `undefined`                                                                                                                                                                                                                                                               |
| `density`              | `density`               | Set the density of the table including font and padding.                                 | `"default" \| "dense" \| "spacious"`                                                                                                                                                                                        | `"default"`                                                                                                                                                                                                                                                               |
| `embedded`             | `embedded`              | Applies a border to the table container.                                                 | `boolean`                                                                                                                                                                                                                   | `false`                                                                                                                                                                                                                                                                   |
| `hideColumnHeaders`    | `hide-column-headers`   | If `true`, column headers will not be visible.                                           | `boolean`                                                                                                                                                                                                                   | `false`                                                                                                                                                                                                                                                                   |
| `paginationOptions`    | --                      | Sets the props for the pagination bar.                                                   | `{ itemsPerPage?: { label: string; value: string; }[]; type?: IcPaginationTypes; control?: IcPaginationControlTypes; itemsPerPageControl?: boolean; goToPageControl?: boolean; alignment?: IcPaginationAlignmentOptions; }` | `{     itemsPerPage: [       { label: "10", value: "10" },       { label: "25", value: "25" },       { label: "50", value: "50" },     ],     type: "page",     control: "simple",     itemsPerPageControl: true,     goToPageControl: true,     alignment: "right",   }` |
| `showPagination`       | `show-pagination`       | If `true`, adds a pagination bar to the bottom of the table.                             | `boolean`                                                                                                                                                                                                                   | `false`                                                                                                                                                                                                                                                                   |
| `sortOptions`          | --                      | Sets the order columns will be sorted in and allows for 'default' sorts to be added.     | `{ sortOrders: IcDataTableSortOrderOptions[]; defaultColumn?: string; }`                                                                                                                                                    | `{     sortOrders: ["unsorted", "ascending", "descending"],     defaultColumn: "",   }`                                                                                                                                                                                   |
| `sortable`             | `sortable`              | If `true`, allows table columns to be sorted using applied sort buttons.                 | `boolean`                                                                                                                                                                                                                   | `false`                                                                                                                                                                                                                                                                   |
| `stickyColumnHeaders`  | `sticky-column-headers` | If `true`, column headers will remain at the top of the table when scrolling vertically. | `boolean`                                                                                                                                                                                                                   | `false`                                                                                                                                                                                                                                                                   |
| `stickyRowHeaders`     | `sticky-row-headers`    | If `true`, row headers will remain to the left when scrolling horizontally.              | `boolean`                                                                                                                                                                                                                   | `false`                                                                                                                                                                                                                                                                   |


## Dependencies

### Depends on

- [ic-typography](../ic-typography)
- [ic-link](../ic-link)
- [ic-button](../ic-button)
- [ic-pagination-bar](../ic-pagination-bar)

### Graph
```mermaid
graph TD;
  ic-data-table --> ic-typography
  ic-data-table --> ic-link
  ic-data-table --> ic-button
  ic-data-table --> ic-pagination-bar
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
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
  style ic-data-table fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


