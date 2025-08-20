# ic-layout-grid



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                                                           | Type                                                                                                                                                           | Default     |
| ----------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `aligned`         | `aligned`           | The alignment of the grid.                                                                                            | `"center" \| "full-width" \| "left" \| undefined`                                                                                                              | `"left"`    |
| `columns`         | `columns`           | The number of columns in the grid. This can be a number or an object specifying different values for each breakpoint. | `number \| undefined \| { xs?: number \| undefined; sm?: number \| undefined; md?: number \| undefined; lg?: number \| undefined; xl?: number \| undefined; }` | `undefined` |
| `defaultColSpan`  | `default-col-span`  | The default column span for grid items.                                                                               | `number \| undefined \| { xs?: number \| undefined; sm?: number \| undefined; md?: number \| undefined; lg?: number \| undefined; xl?: number \| undefined; }` | `1`         |
| `defaultColWidth` | `default-col-width` | The default column width for grid items. This is used when the grid type is set to "fixed".                           | `string \| undefined`                                                                                                                                          | `"64px"`    |
| `defaultRowSpan`  | `default-row-span`  | The default row span for grid items.                                                                                  | `number \| undefined`                                                                                                                                          | `1`         |
| `fullHeight`      | `full-height`       | If `true`, the standard vertical padding from the grid will be removed.                                               | `boolean \| undefined`                                                                                                                                         | `false`     |
| `gridSpacing`     | `grid-spacing`      | The space between grid items, in multiples of the base spacing unit (`var(--ic-space-xs)`).                           | `number \| undefined`                                                                                                                                          | `2`         |
| `rows`            | `rows`              | The number of rows in the grid.                                                                                       | `number \| undefined`                                                                                                                                          | `1`         |
| `type`            | `type`              | The layout type of the grid.                                                                                          | `"fixed" \| "fluid"`                                                                                                                                           | `"fixed"`   |


----------------------------------------------


