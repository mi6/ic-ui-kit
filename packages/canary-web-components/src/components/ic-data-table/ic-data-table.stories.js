/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import readme from "./readme.md";
import {
  ActionElement,
  Basic,
  CellDescriptions,
  CellOverrides,
  ColumnOverrides,
  CustomIcons,
  CustomRowHeights,
  CustomTitleBar,
  DataTableSizing,
  Dense,
  DevArea,
  DisableAutoSortColumns,
  DisableSort,
  Embedded,
  Empty,
  EmptySlotted,
  ExcludeColumnsFromSort,
  HeaderTruncation,
  HiddenCol,
  LargeDataSet,
  LinksHTMLElements,
  Loading,
  LongCellDescriptions,
  MissingCellData,
  Pagination,
  RowHeaders,
  RowOverrides,
  Scrollable,
  SlottedElementsWithPagination,
  SlottedPagination,
  Sort,
  SortOptions,
  Spacious,
  TruncationShowHide,
  TruncationTextWrap,
  TruncationTooltip,
  Updating,
  UpdatingData,
  SelectWithCheckbox,
} from "./story-data";

export default {
  title: "Web Components/Data Table",
  component: "ic-data-table",
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Use the data table component to display data in a tabular form.
 *
 * There are two required props for data table:
 * - Caption: `string`
 * - Columns: `IcDataTableColumnObject[]`
 *
 * Click the 'Component API' tab to view all the available props, events and slots for data tables.
 *
 * To use the data table component, import `@ukic/canary-web-components` into your application.
 */
export const Default = {
  render: () => Basic(),
  name: "Basic",
};

export const LargeDataSetExample = {
  render: () => LargeDataSet(),
  name: "Large data set",
};

/**
 * The `embedded` boolean adds a border around the table so it can be added as a standalone table and is not required to stretch the full width of its parent container.
 */
export const EmbeddedExample = {
  render: () => Embedded(),
  name: "Embedded",
};

/**
 * The `density` variant provides three different styles for the data table:
 * - `dense` reduces the padding and font size of the table cells to give the data a more dense style.
 * - `default` provides a padding of `8px` which is the default spacing. This variant is seen in the [first](#basic) example.
 * - `spacious` gives the data table a more spacious look and feel by increasing the vertical padding as well as the font size.
 */
export const DenseExample = {
  render: () => Dense(),
  name: "Dense",
};

export const SpaciousExample = {
  render: () => Spacious(),
  name: "Spacious",
};

/**
 * When a height for the data table is set, the scroll bar will appear to the right. However, by default, the column headers will move up and out of view making it difficult to understand what the data means.
 * This can be mitigated by using the `sticky-column-headers` prop which takes a boolean. This can be toggled within the example below.
 */
export const StickyColumnHeaders = {
  render: () => Scrollable(),
  name: "Sticky column headers",
};

/**
 * By default, column header labels will wrap when they exceed the column width. To keep the column header height constant, the `columnHeaderTruncation` can be used. When set to `true`, the label will appear truncated and will display a tooltip with the full text when hovered over.
 */
export const ColumnHeaderTruncation = {
  render: () => HeaderTruncation(),
  name: "Column header truncation",
};

/**
 * Row headers allow headings to be added to individual rows and styles them as column headings. The column collection includes an additional `header` key which aligns with the row headers. The structure of the `header` column is the same as the columns (i.e. key, title, dataType).
 * The data array includes an additional `header` key which takes an object. The title of the row header is set by passing `title` as the key and a value.
 */
export const RowHeadersExample = {
  render: () => RowHeaders(),
  name: "Row headers",
};

/**
 * Set `sortable` to `true` to set the sort functionality on all columns. Sorting can be set to `unsorted`, `ascending` and `descending` by press the sort buttons next to the column heading.
 */
export const Sortable = {
  render: () => Sort(),
  name: "Sortable",
};

/**
 * It is possible to change the sort options for the sort buttons. The `sortOptions` prop takes an object with `sortOrders` and `defaultColumn`. `sortOrders` allows the sort order to be amended as we all as remove a sort type. Such as changing the order to `descending`, `unsorted` and remove `ascending`. `defaultColumn` sets which column is ordered by default. This is set by padding the column key as the `defaultColumn` value.
 */
export const SortOptionsExample = {
  render: () => SortOptions(),
  name: "Sort options",
};

/**
 * Set `sortable` to `true` and set `disable-auto-sort` to `true` to enable external sorting functionality.
 */
export const DisableSortExample = {
  render: () => DisableSort(),
  name: "Disable sort",
};

/**
 * Alternatively, set `disable-auto-sort` to `true` within the column object to have it apply only to certain columns that may require special custom sorting.
 */
export const DisableAutoSortOnColumns = {
  render: () => DisableAutoSortColumns(),
  name: "Disable sort on columns",
};

/**
 * Adding 'excludeColumnFromSort: true` to the column object excludes that column from displaying the sort button.
 */
export const ExcludeColumnsFromSortExample = {
  render: () => ExcludeColumnsFromSort(),
  name: "Exclude columns from sort",
};

/**
 * Adding 'hidden: true` to the column object hides that column. In this example, the Age column is hidden.
 */
export const HideColumnExample = {
  render: () => HiddenCol(),
  name: "Column visibility",
};

/**
 * Pagination allows large data sets to be split into pages in order to make the data easier to digest. Setting `show-pagination` to `true` will add the `ic-pagination` component to the bottom of the table. There a several sub components within pagination which are set via the `paginationBarOptions` prop:
 * - `itemsPerPage` allows customization on the number of items on each page. This requires a collection with `label` and `value` key pairs.
 * - `showItemsPerPageControl` shows or hides the `itemsPerPage` component using `true` or `false`.
 * - `showGoToPageControl` displays controls which allows jumping between pages in a non-linear approach.
 */
export const PaginationExample = {
  render: () => Pagination(),
  name: "Pagination",
};

/**
 * There may be a requirement to style a column differently to the rest of the data to add emphasis. For example, centre align data within the 'first name' column. To do this, add `columnAlignment` to the column. `columnAlignment` takes an object which sets the `horizontal` and `vertical` property:
 * - `horizontal` accepts `left`, `right` or `center`.
 * - `vertical` accepts `top`, `middle`, `bottom`.
 *
 * `emphasis` can be added to the column by setting `high` or `low`.
 */
export const ColumnOverridesExample = {
  render: () => ColumnOverrides(),
  name: "Column overrides",
};

/**
 * Row overrides allow styling to be applied at a row level and is set within the `header` object. The row overrides are used in conjunction with row headers. The following row overrides options apply:
 * - `rowAlignment` accepts `left`, `right` and `center`.
 * - `emphasis` accepts `high` or `low`.
 */
export const RowOverridesExample = {
  render: () => RowOverrides(),
  name: "Row overrides",
};

/**
 * Cell overrides allows styling to be applied at a cell level. The cell which requires an override accepts an object which requires `data` and can contain `cellAlignment` and/or `emphasis`:
 * - `data` is the cell value.
 * - `emphasis` accepts `high` or `low`.
 * - `cellAlignment` accepts an object with the following key pairs:
 *  - `horizontal` accepts `left`, `right` or `center`.
 *  - `vertical` accepts `top`, `middle`, `bottom`.
 */
export const CellOverridesExample = {
  render: () => CellOverrides(),
  name: "Cell overrides",
};

/**
 * When the table receives no data (either `null` or an empty array) it will automatically show an `ic-empty-state` below the headers.
 */
export const DefaultEmptyState = {
  render: () => Empty(),
  name: "Empty state",
};

/**
 * You can customise your own `ic-empty-state` component and slot it into the data table using the `empty-state` slot, to reflect different scenarios.
 */
export const SlottedEmptyState = {
  render: () => EmptySlotted(),
  name: "Slotted empty state",
};

/**
 * When a user wants to fetch their data asynchronously, a `loading` prop can be set to `true`, which then renders a circular variant of the `ic-loading-indicator`.
 * The loading indicator can be customised using the `loadingOptions` prop:
 * - `description` sets the aria-label of the component
 * - `label` sets the visual message
 * - `labelDuration` is the number of milliseconds before the label changes
 * - `overlay` renders a dark overlay over the previous data set while new data is loaded
 *
 * If it needs to be determinate, use `max`, `min` and `progress`.
 */
export const LoadingState = {
  render: () => Loading(),
  name: "Loading state",
  height: "720px",
};

/**
 * If data in the table has changed, an `updating` prop has been supplied to show a linear `ic-loading-indicator` just above the data rows.
 *
 * This prop is also accompanied by an `updatingOptions` prop, which contains similar options to `loadingOptions`, minus `label` and `labelDuration` since the linear version is displayed.
 */
export const UpdatingState = {
  render: () => Updating(),
  name: "Updating state",
};

/**
 * Custom HTML elements can be slotted or passed via the `data` prop to display in certain cells. When using the slotted method, the slot name follows the format of `{COLUMN_TAG}-{ROW_INDEX}`.
 */
export const LinksAndElementsInData = {
  render: () => LinksHTMLElements(),
  name: "Links and elements in data",
};

export const SlottedElementsWithPaginationExample = {
  render: () => SlottedElementsWithPagination(),
  name: "Slotted elements with pagination",
};

/**
 * Custom icons can be added to cells, columns and headers in the data table. To add it to headers, set the icon via the `columns` prop:
 * ```
 * icon: {
 *  icon: //ICON_STRING_GOES_HERE,
 *  onAllCells: //Boolean to determine whether column header icon should be replicated on all cells in the column,
 *  hideOnHeader: //Boolean for whether this icon should only be shown on cells and not on the header,
 * }
 * ```
 *
 * To add icons to individual cells, they can be added through the `data` prop, in a similar method to overriding the cell. Cell icons take priority over the `onAllCells` prop, meaning specific cells can be made to stand out.
 *
 * Both cells and headers can also have icons slotted in. Cells use the slot format: `{COLUMN_KEY}-{ROW_INDEX}-icon`, and headers use the format: `{COLUMN_KEY}-column-icon`. Slotted icons take priority over icons inserted via the `columns` and `data` props.
 */
export const CustomIconsExample = {
  render: () => CustomIcons(),
  name: "Custom icons",
};

/**
 * A data table can have its rows use custom heights, to help display more data per row. This involves using the `globalRowHeight` prop, which applies this custom height to all rows.
 *
 * For a more granular approach, `variableRowHeight` exists. This is passed through the data object for each row of data, as well as that row's `index`. Using these properties, you can write a custom function that will return a number for that row's height based on your criteria.
 * Returning `null` from this function means that the row will use the `globalRowHeight` property value.
 *
 * **_NOTE:_** If the data table uses the `density` prop, then your custom value will be scaled depending on the density, in order to keep content readable as the text size changes:
 * - `Dense` = 80% of `globalRowHeight` or `variableRowHeight`
 * - `Spacious` = 120% of `globalRowHeight` or `variableRowHeight`
 *
 * E.G: If `globalRowHeight` = 100, a dense table will set the height to be **_80_**.
 *
 * **_NOTE:_** If a cell has a description (see "Description and icons within cells"), then the row height for that individual row will be increased by the description height in order to fully display it.
 *
 * E.G: If `globalRowHeight` = 100 and a cell has a description with a height of 20, then the row height for that cell's row will be set to **_120_**.
 *
 * To quickly reset all row heights to the default, you can run the `resetRowHeights` method.
 *
 * If you'd rather let the row calculate its own height based on its content, either set `globalRowHeight` to `auto`, or return `auto` from `variableRowHeight`.
 */
export const CustomRowHeightsExample = {
  render: () => CustomRowHeights(),
  name: "Custom row heights",
};

/**
 * To add additional information about the data held in your data table, you can use the `title-bar` slot to add an `ic-data-table-title-bar`, which will appear above the column headers.
 *
 * The title bar can have a description and metadata added, to provide supporting information to display some context about the data to the user. Primary and custom action slots also exist to allow for actions to be performed that are related to the data, which can be prominently displayed.
 *
 * The `ic-data-table-title-bar` has a built-in density selector, which allows a user to quickly change the size and padding of cells to make it more readable. This can also be hidden if preferred.
 *
 * More details on `ic-data-table-title-bar` can be found in the <ic-link href="/?path=/story/web-components-data-table-title-bar--basic" inline="">data table title bar documentation</ic-link>.
 */
export const CustomTitleBarExample = {
  render: () => CustomTitleBar(),
  name: "Custom title bar",
};

/**
 * The example below demonstrates how the pagination bar responds to changes within the data.
 *
 * More details on `ic-pagination-bar` can be found in the <ic-link href="/?path=/story/web-components-pagination-bar--docs" inline="">pagination bar documentation</ic-link>.
 */
export const UpdatingDataExample = {
  render: () => UpdatingData(),
  name: "Updating data",
};

/**
 * There may be scenarios when using `ic-data-table` when pagination and data fetching is done using a backend API.
 *
 * To enable this behaviour, the `pagination-bar` slot can be utilised to provide a custom `ic-pagination-bar` component, allowing the user to have more control over how their data is displayed & interacted with.
 */
export const SlottedPaginationBar = {
  render: () => SlottedPagination(),
  name: "Slotted pagination bar",
};

/**
 * When a row is given a set height, and has content that no longer fits into the cell area, the content becomes truncated. There are two types of truncation:
 * - `tooltip`: Adds a line-clamp to the cell and displays the message in a tooltip.
 * - `show-hide`: Adds a `See more/See less` button underneath the cell text, allowing the user to display the full content should they wish.
 *
 * These values are set using the `truncation-pattern` attribute.
 *
 * By default, `global-row-height` is set to `auto`. If the `truncation-pattern` attribute is set to `tooltip` or `show-hide` while `global-row-height` is `auto`, the data will not appear truncated due to the row height being set to the data which has the most height.
 *
 * To see the data truncated, the `global-row-height` or `variable-row-height` needs to be explicitly set to a height which is shorter than data which has the most lines.
 *
 * **_NOTE:_** `truncation-pattern` only applies to a cell's main data value. If a cell has a description (see "Description and icons within cells") then this will not be truncated and will still be visible beyond the truncation.
 */
export const DataTruncationTooltip = {
  render: () => TruncationTooltip(),
  name: "Data truncation tooltip",
};

export const TruncationShowHideExample = {
  render: () => TruncationShowHide(),
  name: "Data truncation see more / see less",
};

/**
 * Text can be set to wrap in a particular column, row or cell. Any column, row or cell that text wrap is applied to will ignore the custom height if the custom height is too small and the full content will be shown.
 *
 * To set text to wrap in a column, add `textWrap: true` as a key value:
 * ```
 * const column = [
 *  { key: "name", title: "Name", dataType: "string" },
 *  ...
 * ]
 * ```
 *
 * To set text to wrap in a row, add `rowOptions: { textWrap: true }` to an object within the data array:
 * ```
 * const data = [
 *  {
 *    name: "Tim Rayes",
 *    age: 41,
 *    department: "Sales and Marketing",
 *    employeeNumber: 3,
 *    jobTitle:
 *      "Regional Sales and Marketing Strategy Director (Europe, the Middle East, and Africa)",
 *    rowOptions: {
 *      textWrap: true
 *    }
 *  },
 *  ...
 * ]
 * ```
 *
 * To set text wrap in a cell, add `textWrap` to a data key within an object:
 * ```
 * const data = [
 *  {
 *    name: {
 *      data:"Tim Rayes",
 *      textWrap: true
 *    },
 *    age: 41,
 *    department: "Sales and Marketing",
 *    employeeNumber: 3,
 *    jobTitle:
 *      "Regional Sales and Marketing Strategy Director (Europe, the Middle East, and Africa)",
 *  },
 *  ...
 * ]
 * ```
 */
export const TextWrap = {
  render: () => TruncationTextWrap(),
  name: "Text wrap",
};

/**
 * The dimensions of the data table can be set using the `width` and `height` attributes. The attribute accepts dimensions in `px`, `%`, `rem` and `auto`.
 *
 * By default, the width is set to `100%` so the table spans across the viewport or parent container.
 *
 * To set the column widths, the `columnWidth` property should be added to the relevant column within the column array.
 *
 * The [table layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) attribute is vital to how the table resizing and column widths behave. By default, the table layout is set to `fixed`. If no column width is set, the columns widths will be equally set within the viewport or parent container.
 *
 * A table with a `fixed` layout will force the table column widths to take precedence over the data with the table cells.
 *
 * For the column widths to be dictated by the content inside, set the `table-layout` attribute to `auto` and set the table `width` to `auto`.
 *
 * To set the min and max width of a table cell, set the `table-layout` attribute to `auto` and set a `minWidth` or `maxWidth` value into `columnWidth`. The min and max width accepts dimensions in `px`, `%`, `rem`.
 */
export const TableSizingAndColumnWidth = {
  render: () => DataTableSizing(),
  name: "Table sizing and column width",
};

/**
 * The cells can contain a slotted `actionElement`. The `actionElement` will be displayed to the right of the cell data.
 */
export const ActionElements = {
  render: () => ActionElement(),
  name: "Action element",
};

/**
 * Descriptions and icons can be included in the cells by proving a `description` field in the data. This will populate the cell with an icon (if provided) and a text string underneath the cell data. This can be applied to any cell.
 *
 * You can provide a `description` object with or without an icon:
 * ```
 * // With an icon
 * firstName: {
 *  data: "Joe",
 *  description: {
 *    data: "The name of Joe",
 *    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>',
 *  },
 * }
 * ```
 *
 * ```
 * // Without an icon
 * firstName: {
 *  data: "Joe",
 *  description: "The name of Joe"
 * }
 * ```
 */
export const CellDescriptionsAndIcons = {
  render: () => CellDescriptions(),
  name: "Description and icons within cells",
};

export const CellDescriptionsLongText = {
  render: () => LongCellDescriptions(),
  name: "Description and icons within cells with long text",
};

/**
 * The example below demonstrates the table being able to handle empty cell values (null, undefined or empty string).
 */
export const MissingCellDataExample = {
  render: () => MissingCellData(),
  name: "Missing cell data",
};

/**
 * By setting `row-selection` to `true`, `ic-checkbox` elements will appear in the leftmost column, with one in the header.
 * When checked, the corresponding row will be selected, with the `icSelectedRowChange` containing the selected row and an array of all the currently selected rows.
 *
 * When checking the header checkbox, all rows will be selected, with the `icSelectAllRows` event being emitted with an array of all the rows. When using pagination, only the rows on the current page will be selected.
 */
export const SelectRowsUsingCheckboxExample = {
  render: () => SelectWithCheckbox(),
  name: "Select rows with checkbox",
};

export const DevAreaExample = {
  render: () => DevArea(),
  name: "Dev area",
};
