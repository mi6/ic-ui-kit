/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { mdiAccountGroup, mdiDelete, mdiImage } from "@mdi/js";
import {
  IcButton,
  IcEmptyState,
  IcLink,
  IcTypography,
  SlottedSVG,
} from "@ukic/react";
import React, { useEffect, useState } from "react";
import readme from "../../../canary-web-components/src/components/ic-data-table/readme.md";
import {
  ACTION_DATA_ELEMENTS,
  COLS,
  COLS_ALIGNMENT,
  COLS_ELEMENTS,
  COLS_ELEMENTS_SINGLE_ACTION,
  COLS_EXCLUDE_SORT,
  COLS_HIDDEN,
  COLS_WIDTH,
  COLUMNS_NO_TEXT_WRAP,
  COLUMNS_TEXT_WRAP,
  DATA,
  DATA_CELL_ALIGNMENT,
  DATA_ELEMENTS_WITH_DESCRIPTIONS,
  DATA_REACT_ELEMENTS,
  DATA_REACT_ELEMENTS_PAGINATION,
  DATA_WITH_EMPTY_VALUES,
  ICON_COLS,
  ICON_DATA,
  LONG_COLS,
  LONG_DATA,
  LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS,
  LONG_DATA_VALUES,
  ROW_ALIGNMENT,
  ROW_HEADER_COLS,
  ROW_HEADER_DATA,
  TEXT_WRAP_LONG_DATA,
} from "../../../canary-web-components/src/components/ic-data-table/story-data";
import {
  IcDataTable,
  IcDataTableTitleBar,
  IcPaginationBar,
} from "../components";

export default {
  title: "React Components/Data Table",
  component: IcDataTable,
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
 * - caption: `string`
 * - columns: `IcDataTableColumnObject[]`
 *
 * Click the 'Component API' tab to view all the available props, events and slots for data tables.
 *
 * To use the data table component, import `@ukic/canary-react` into your application.
 */
export const Basic = {
  render: () => <IcDataTable caption="Basic" columns={COLS} data={DATA} />,
  name: "Basic",
};

/**
 * The `embedded` boolean adds a border around the table so it can be added as a standalone table and is not required to stretch the full width of its parent container.
 */
export const Embedded = {
  render: () => (
    <IcDataTable caption="Embedded" columns={COLS} data={DATA} embedded />
  ),
  name: "Embedded",
};

/**
 * The `density` variant provides three different styles for the data table:
 * - `dense` reduces the padding and font size of the table cells to give the data a more dense style.
 * - `default` provides a padding of `8px` which is the default spacing. This variant is seen in the first [basic](#basic) example.
 * - `spacious` gives the data table a more spacious look and feel by increasing the vertical padding as well as the font size.
 */
export const Dense = {
  render: () => (
    <IcDataTable caption="Dense" columns={COLS} data={DATA} density="dense" />
  ),
  name: "Dense",
};

export const Spacious = {
  render: () => (
    <IcDataTable
      caption="Spacious"
      columns={COLS}
      data={DATA}
      density="spacious"
    />
  ),
  name: "Spacious",
};

/**
 * When a height for the data table is set, the scroll bar will appear to the right. However, by default, the column headers will move up and out of view making it difficult to understand what the data means.
 * This can be mitigated by using the `stickyColumnHeaders` prop which takes a boolean. This can be toggled within the example below.
 */
export const StickyColumnHeaders = {
  render: () => {
    const [stickyHeader, setStickyHeader] = useState(false);
    return (
      <>
        <IcDataTable
          caption="Sticky Header"
          columns={LONG_COLS}
          data={LONG_DATA}
          stickyColumnHeaders={stickyHeader}
          style={{ height: "366px" }}
        />
        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <IcButton onClick={() => setStickyHeader(true)}>
            Stick Header
          </IcButton>
          <IcButton onClick={() => setStickyHeader(false)}>
            Unstick Header
          </IcButton>
        </div>
      </>
    );
  },
  name: "Sticky column headers",
};

/**
 * By default, column header labels will wrap when they exceed the column width. To keep the column header height constant, the `columnHeaderTruncation` can be used. When set to `true`, the label will appear truncated and will display a tooltip with the full text when hovered over.
 */
export const ColumnHeaderTruncation = {
  render: () => {
    return (
      <IcDataTable
        style={{ height: "400px", width: "500px" }}
        caption="Column Header Truncation"
        columns={COLS}
        data={DATA}
        columnHeaderTruncation
      />
    );
  },
  name: "Column header truncation",
};

/**
 * Row headers allow headings to be added to individual rows and styles them as column headings. The column collection includes an additional `header` key which aligns with the row headers. The structure of the `header` column is the same as the columns (i.e. key, title, dataType).
 * The data array includes an additional `header` key which takes an object. The title of the row header is set by passing `title` as the key and a value.
 */
export const RowHeaders = {
  render: () => (
    <IcDataTable
      caption="Row Headers"
      columns={ROW_HEADER_COLS}
      data={ROW_HEADER_DATA}
    />
  ),
  name: "Row headers",
};

/**
 * Set `sortable` to `true` to set the sort functionality on all columns. Sorting can be set to `unsorted`, `ascending` and `descending` by press the sort buttons next to the column heading.
 */
export const Sortable = {
  render: () => (
    <IcDataTable caption="Sort" columns={COLS} data={DATA} sortable />
  ),
  name: "Sort",
};

/**
 * It is possible to change the sort options for the sort buttons. The `sortOptions` prop takes an object with `sortOrders` and `defaultColumn`. `sortOrders` allows the sort order to be amended as we all as remove a sort type. Such as changing the order to `descending`, `unsorted` and remove `ascending`. `defaultColumn` sets which column is ordered by default. This is set by padding the column key as the `defaultColumn` value.
 */
export const SortOptions = {
  render: () => (
    <IcDataTable
      caption="Sort Options"
      columns={COLS}
      data={DATA}
      sortable
      sortOptions={{
        sortOrders: ["descending", "unsorted"],
        defaultColumn: "firstName",
      }}
    />
  ),
  name: "Sort options",
};

/**
 * Set `sortable` to `true` and set `disable-auto-sort` to `true` to enable external sorting functionality.
 */
export const DisableSort = {
  render: () => {
    const ExternalData = [...DATA];

    const handleSort = ({ columnName, sorted }) => {
      if (sorted === "ascending") {
        ExternalData.sort((a, b) => {
          if (a[columnName] < b[columnName]) return -1;
          if (a[columnName] > b[columnName]) return 1;
          return 0;
        });
      } else if (sorted === "descending") {
        ExternalData.sort((a, b) => {
          if (a[columnName] < b[columnName]) return 1;
          if (a[columnName] > b[columnName]) return -1;
          return 0;
        });
      }
    };

    return (
      <IcDataTable
        columns={COLS}
        data={ExternalData}
        caption="Disable auto sort"
        sortable
        disableAutoSort
        onIcSortChange={(e) => handleSort(e.detail)}
        sortOptions={{
          sortOrders: ["ascending", "descending"],
        }}
      />
    );
  },
  name: "Disable sort",
};

/**
 * Adding 'excludeColumnFromSort: true` to the column object excludes that column from displaying the sort button.
 */
export const ExcludeColumnsFromSort = {
  render: () => (
    <IcDataTable
      caption="Sort"
      columns={COLS_EXCLUDE_SORT}
      data={DATA}
      sortable
    />
  ),
  name: "Exclude columns from sort",
};

/**
 * Adding 'hidden: true` to the column object hides that column. In this example, the Age column is hidden.
 */
export const HideColumnExample = {
  render: () => {
    const [columns, setColumns] = useState(COLS_HIDDEN);
    const setAgeHidden = (hidden) => {
      const updatedColumns = columns.map((col) => {
        if (col.key === "age") {
          return { ...col, hidden };
        }
        return col;
      });
      setColumns(updatedColumns);
    }
    return (
      <>
        <IcDataTable
          caption="Hide Column"
          columns={columns}
          data={DATA}
        />
        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <IcButton onClick={() => setAgeHidden(false)}>
            Show Age
          </IcButton>
          <IcButton onClick={() => setAgeHidden(true)}>
            Hide Age
          </IcButton>
        </div>
      </>
    );
  },
  name: "Column visibility",
};
/**
 * Pagination allows large data sets to be split into pages in order to make the data easier to digest. Setting `showPagination` to `true` will add the `IcPagination` component to the bottom of the table. There a several sub components within pagination which are set via the `paginationBarOptions` prop:
 * - `itemsPerPageOptions` which allows customization of how many items appear on each page. This requires a collection with `label` and `value` key pairs.
 * - `showItemsPerPageControl` which show or hides the `itemsPerPage` component.
 * - `showGoToPageControl` displays controls which allows jumping between pages in a non-linear approach.
 */
export const Pagination = {
  render: () => (
    <IcDataTable
      caption="Pagination"
      columns={LONG_COLS}
      data={LONG_DATA}
      showPagination
      paginationBarOptions={{
        itemsPerPageOptions: [
          { label: "5", value: "5" },
          { label: "10", value: "10" },
          { label: "15", value: "15" },
        ],
        showItemsPerPageControl: true,
        showGoToPageControl: true,
      }}
    />
  ),
  name: "Pagination",
};

/**
 * There may be a requirement to style a column differently to the rest of the data to add emphasis. For example, centre align data within the 'first name' column. To do this, add `columnAlignment` to the column. `columnAlignment` takes an object which sets the `horizontal` and `vertical` property:
 * - `horizontal` accepts `left`, `right` or `center`.
 * - `vertical` accepts `top`, `middle`, `bottom`.
 *
 * `emphasis` can be added to the column by setting `high` or `low`.
 */
export const ColumnOverrides = {
  render: () => (
    <IcDataTable
      caption="Column Overrides"
      columns={COLS_ALIGNMENT}
      data={DATA}
    />
  ),
  name: "Column overrides",
};

/**
 * Row overrides allow styling to be applied at a row level and is set within the `header` object. The row overrides are used in conjunction with row headers. The following row overrides options apply:
 * - `rowAlignment` accepts `left`, `right` and `center`.
 * - `emphasis` accepts `high` or `low`.
 */
export const RowOverrides = {
  render: () => (
    <IcDataTable
      caption="Row Overrides"
      columns={ROW_HEADER_COLS}
      data={ROW_ALIGNMENT}
    />
  ),
  name: "Row overrides",
};

/**
 * Cell overrides allows styling to be applied at a cell level. The cell which requires an override accepts an object which requires `data` and can contain `cellAlignment` and/or `emphasis`:
 * - `data` is the cell value.
 * - `cellAlignment` accepts an object with the following key pairs:
 *  - `horizontal` accepts `left`, `right` or `center`.
 *  - `vertical` accepts `top`, `middle`, `bottom`.
 * - `emphasis` accepts `high` or `low`.
 */
export const CellOverrides = {
  render: () => (
    <IcDataTable
      caption="Cell Overrides"
      columns={COLS}
      data={DATA_CELL_ALIGNMENT}
    />
  ),
  name: "Cell overrides",
};

/**
 * When the table receives no data (either `null` or an empty array) it will automatically show an `IcEmptyState` below the headers.
 */
export const DefaultEmptyState = {
  render: () => <IcDataTable caption="Default Empty State" columns={COLS} />,
  name: "Default empty state",
};

/**
 * You can customise your own `IcEmptyState` component and slot it into the data table using the `empty-state` slot, to reflect different scenarios.
 */
export const SlottedEmptyState = {
  render: () => (
    <IcDataTable caption="Slotted Empty State" columns={COLS}>
      <IcEmptyState
        slot="empty-state"
        aligned="left"
        heading="Data source error"
        body="Error loading new data"
      >
        <IcButton slot="actions">Retry</IcButton>
      </IcEmptyState>
    </IcDataTable>
  ),
  name: "Slotted empty state",
};

/**
 * When a user wants to fetch their data asynchronously, a `loading` prop can be set to `true`, which then renders a circular variant of the `IcLoadingIndicator`. The loading indicator can be customised using the `loadingOptions` prop:
 * - `description` sets the aria-label of the component
 * - `label` sets the visual message
 * - `labelDuration` is the number of milliseconds before the label changes
 * - `overlay` renders a dark overlay over the previous data set while new data is loaded
 *
 * If it needs to be determinate, use `max`, `min` and `progress`.
 */
export const LoadingState = {
  render: () => (
    <IcDataTable
      caption="Loading state"
      columns={COLS}
      data={DATA}
      loading={true}
    />
  ),
  name: "Loading state",
  height: "720px",
};

/**
 * If data in the table has changed, an `updating` prop has been supplied to show a linear `IcLoadingIndicator` just above the data rows.
 *
 * This prop is also accompanied by an `updatingOptions` prop, which contains similar options to `loadingOptions`, minus `label` and `labelDuration` since the linear version is displayed.
 */
export const UpdatingState = {
  render: () => (
    <IcDataTable
      caption="Updating state"
      columns={COLS}
      data={DATA}
      updating={true}
      updatingOptions={{ progress: 30 }}
    />
  ),
  name: "Updating state",
};

/**
 * Custom HTML elements can be slotted or passed via the `data` prop to display in certain cells. When using the slotted method, the slot name follows the format of `{COLUMN_TAG}-{ROW_INDEX}`.
 */
export const LinksElementsInData = {
  render: () => (
    <IcDataTable
      caption="Links and slotted elements in data"
      columns={COLS_ELEMENTS}
      data={DATA_REACT_ELEMENTS}
      showPagination
    >
      {DATA_REACT_ELEMENTS.map((_, index) => (
        <>
          <IcButton
            key={`actions-${index}`}
            variant="destructive"
            slot={`actions-${index}`}
            title="Delete row (top level tooltip)"
            onClick={() => console.log("Delete")}
          >
            Delete
          </IcButton>
          <div key={`actions2-${index}`} slot={`actions2-${index}`}>
            <IcButton
              variant="icon-tertiary"
              aria-label="Delete row (nested tooltip)"
              onClick={() => console.log("Delete")}
            >
              <SlottedSVG path={mdiDelete} viewBox="0 0 24 24" />
            </IcButton>
          </div>
        </>
      ))}
    </IcDataTable>
  ),
  name: "Links and elements in data",
};

export const SlottedElementsWithPagination = {
  render: () => (
    <IcDataTable
      caption="Slotted elements with pagination"
      columns={COLS_ELEMENTS_SINGLE_ACTION}
      data={DATA_REACT_ELEMENTS_PAGINATION}
      showPagination
      paginationBarOptions={{
        itemsPerPageOptions: [
          { label: "5", value: "5" },
          { label: "10", value: "10" },
        ],
        showItemsPerPageControl: true,
        selectedItemsPerPage: "5",
      }}
    >
      {DATA_REACT_ELEMENTS_PAGINATION.map((_, index) => (
        <IcButton
          key={`actions-${index}`}
          slot={`actions-${index}`}
          onClick={() => console.log(`${index + 1}`)}
        >
          {index + 1}
        </IcButton>
      ))}
    </IcDataTable>
  ),
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
export const CustomIcons = {
  render: () => (
    <IcDataTable caption="Custom icons" columns={ICON_COLS} data={ICON_DATA}>
      <SlottedSVG slot="age-column-icon" path={mdiAccountGroup} />
      <SlottedSVG slot="firstName-0-icon" path={mdiAccountGroup} />
    </IcDataTable>
  ),
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
export const CustomRowHeights = {
  render: () => (
    <IcDataTable
      caption="Custom Row Heights"
      columns={COLS}
      data={DATA}
      globalRowHeight={80}
      variableRowHeight={({ firstName, lastName }) =>
        firstName === "Joe" || lastName === "Owens" ? 200 : null
      }
    />
  ),
  name: "Custom row heights",
};

/**
 * When a row is given a set height, and has content that no longer fits into the cell area, the content becomes truncated. There are two types of truncation:
 * - `tooltip`: Adds a line-clamp to the cell and displays the message in a tooltip.
 * - `show-hide`: Adds a `See more/See less` button underneath the cell text, allowing the user to display the full content should they wish.
 *
 * These values are set using the `truncationPattern` property.
 *
 * By default, `globalRowHeight` is set to `auto`. If the `truncationPattern` attribute is set to `tooltip` or `show-hide` while `globalRowHeight` is `auto`, the data will not appear truncated due to the row height being set to the data which has the most height.
 *
 * To see the data truncated, the `globalRowHeight` or `variableRowHeight` needs to be explicitly set to a height which is shorter than data which has the most lines.
 *
 * **_NOTE:_** `truncation-pattern` only applies to a cell's main data value. If a cell has a description (see "Description and icons within cells") then this will not be truncated and will still be visible beyond the truncation.
 */
export const DataTruncationTooltip = {
  render: () => {
    const [globalRowHeight, setGlobalRowHeight] = useState(40);
    const handleRowHeight = (height) => {
      setGlobalRowHeight(height);
    };
    return (
      <>
        <IcDataTable
          caption="Truncating tooltip"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncationPattern="tooltip"
          globalRowHeight={globalRowHeight}
        />
        <div style={{ display: "flex", gap: "8px", paddingBlock: "8px" }}>
          <IcButton onClick={() => handleRowHeight(80)}>
            Set globalRowHeight to 80
          </IcButton>
          <IcButton onClick={() => handleRowHeight(40)}>
            Reset globalRowHeight to 40
          </IcButton>
        </div>
      </>
    );
  },
  name: "Data truncation tooltip",
};

export const DataTruncationShowHide = {
  render: () => {
    const [globalRowHeight, setGlobalRowHeight] = useState(40);
    const handleRowHeight = (height) => {
      setGlobalRowHeight(height);
    };
    return (
      <>
        <IcDataTable
          caption="Truncating show hide"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncationPattern="show-hide"
          globalRowHeight={globalRowHeight}
        />
        <div style={{ display: "flex", gap: "8px", paddingBlock: "8px" }}>
          <IcButton onClick={() => handleRowHeight(80)}>
            Set globalRowHeight to 80
          </IcButton>
          <IcButton onClick={() => handleRowHeight(40)}>
            Reset globalRowHeight to 40
          </IcButton>
        </div>
      </>
    );
  },
  name: "Data truncation see more / see less",
};

/**
 * Text can be set to wrap in a particular column, row or cell.
 *
 * Any column, row or cell that text wrap is applied to will ignore the custom height if the custom height is too small and the full content will be shown.
 *
 * To set text to wrap in a column, add `textWrap: true` as a key value.
 * ```
 * const column = [
 *  { key: "name", title: "Name", dataType: "string" },
 *  ...
 * ]
 * ```
 *
 * To set text to wrap in a row, add `rowOptions: { textWrap: true }` to an object within the data array.
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
 * To set text wrap in a cell, add `textWrap` to a data key within an object.
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
  render: () => (
    <IcDataTable
      caption="Truncating Cell Data"
      columns={COLUMNS_TEXT_WRAP}
      data={TEXT_WRAP_LONG_DATA}
    />
  ),
  name: "Text wrap",
};

/**
 * To add additional information about the data held in your data table, you can use the `title-bar` slot to add an `IcDataTableTitleBar`, which will appear above the column headers.
 *
 * The title bar can have a description and metadata added, to provide supporting information to display some context about the data to the user. Primary and custom action slots also exist to allow for actions to be performed that are related to the data, which can be prominently displayed.
 *
 * The `IcDataTableTitleBar` has a built-in density selector, which allows a user to quickly change the size and padding of cells to make it more readable. This can also be hidden if preferred.
 *
 * More details on `IcDataTableTitleBar` can be found in the <ic-link href="/?path=/docs/react-components-data-table-title-bar--docs" inline="">data table title bar documentation</ic-link>.
 */
export const CustomTitleBar = {
  render: () => (
    <IcDataTable caption="Custom Title Bar" columns={COLS} data={DATA}>
      <IcDataTableTitleBar
        slot="title-bar"
        description="Data table description that describes the purpose of the table."
        metadata="128 items | 32gb | Updated: 01/02/03"
      >
        <IcButton slot="primary-action">Primary</IcButton>
        <IcButton slot="custom-actions" variant="icon-tertiary" aria-label="Icon 1">
          <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
        </IcButton>
        <IcButton slot="custom-actions" variant="icon-tertiary" aria-label="Icon 2">
          <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
        </IcButton>
        <IcButton slot="custom-actions" variant="icon-tertiary" aria-label="Icon 3">
          <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
        </IcButton>
        <IcTypography slot="description" variant="body">
          <p>
            This is some text and{" "}
            <IcLink href="/" inline="">
              this is an inline link
            </IcLink>{" "}
            within the text.
          </p>
        </IcTypography>
      </IcDataTableTitleBar>
    </IcDataTable>
  ),
  name: "Custom title bar",
};

/**
 * The example below demonstrates how the pagination bar responds to changes within the data.
 *
 * More details on `IcPaginationBar` can be found in the <ic-link href="/?path=/docs/react-components-pagination-bar--docs" inline="">pagination bar documentation</ic-link>.
 */
export const UpdatingData = {
  render: () => {
    const [data, setData] = useState([]);
    const [pageOptions, setPageOptions] = useState([
      { label: "5", value: "5" },
    ]);

    const addData = () => {
      setData([...data, ...LONG_DATA]);
    };

    const clearData = () => {
      setData([]);
    };

    const updatePageOptions = () => {
      setPageOptions([
        { label: "10", value: "10" },
        { label: "20", value: "20" },
        { label: "50", value: "50" },
      ]);
    };

    const resetPageOptions = () => {
      setPageOptions([{ label: "5", value: "5" }]);
    };

    return (
      <>
        <IcDataTable
          caption="Updating Data"
          columns={LONG_COLS}
          data={data}
          showPagination
          paginationBarOptions={{
            itemsPerPageOptions: pageOptions,
            showItemsPerPageControl: true,
            showGoToPageControl: true,
            rangeLabelType: "page",
          }}
        />
        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <IcButton onClick={addData}>Add data</IcButton>
          <IcButton onClick={updatePageOptions}>Update page lengths</IcButton>
          <IcButton onClick={clearData}>Reset data</IcButton>
          <IcButton onClick={resetPageOptions}>Reset page lengths</IcButton>
        </div>
      </>
    );
  },
  name: "Updating data example",
};

/**
 * There may be scenarios when using `IcDataTable` when pagination and data fetching is done using a backend API.
 *
 * To enable this behaviour, the `pagination-bar` slot can be utilised to provide a custom `IcPaginationBar` component, allowing the user to have more control over how their data is displayed & interacted with.
 */
export const SlottedPaginationBar = {
  render: () => {
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [render, setRender] = useState(false);
    const [data, setData] = useState(LONG_DATA);

    useEffect(() => {
      setTimeout(() => {
        setRender(true);
      }, 2000);
    });

    const icItemsPerPageChangeHandler = (ev) => {
      setItemsPerPage(ev.detail.value);
      setData(LONG_DATA.slice(0, itemsPerPage));
    };

    const pageChangeHandler = (ev) => {
      const fromRow = (ev.detail.value - 1) * itemsPerPage;
      setData(LONG_DATA.slice(fromRow, fromRow + itemsPerPage));
    };

    return (
      <IcDataTable
        caption="Slotted pagination bar"
        columns={LONG_COLS}
        data={data}
      >
        {render && (
          <IcPaginationBar
            slot="pagination-bar"
            showItemsPerPageControl
            totalItems={LONG_DATA.length}
            itemsPerPageOptions={[
              { label: "5", value: "5" },
              { label: "10", value: "10" },
            ]}
            onIcItemsPerPageChange={icItemsPerPageChangeHandler}
            onIcPageChange={pageChangeHandler}
          />
        )}
      </IcDataTable>
    );
  },
  name: "Slotted pagination bar",
};

/**
 * The dimensions of the data table can be set using the `width` and `height` prop. The prop accepts dimensions in `px`, `%`, `rem` and `auto`.
 *
 * By default, the width is set to `100%` so the table spans across the viewport or parent container.
 *
 * To set the column widths, the `columnWidth` property should be added to the relevant column within the column array.
 *
 * The [table layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) prop is vital to how the table resizing and column widths behave. By default, the table layout is set to `fixed`. If no column width is set, the columns widths will be equally set within the viewport or parent container.
 *
 * A table with a `fixed` layout will force the table column widths to take precedence over the data with the table cells.
 *
 * For the column widths to be dictated by the content inside, set the `tableLayout` prop to `auto` and set the table `width` to `auto`.
 *
 * To set the min and max width of a table cell, set the `table-layout` attribute to `auto` and set a `minWidth` or `maxWidth` value into `columnWidth`. The min and max width accepts dimensions in `px`, `%`, `rem`.
 */
export const TableSizingColumnWidth = {
  render: () => (
    <IcDataTable
      caption="Basic Table"
      columns={COLS_WIDTH}
      data={DATA}
      width="800px"
      tableLayout="auto"
    />
  ),
  name: "Table sizing and column width",
};

/**
 * The cell data can contain an `actionElement` which can be a string containing any html to be rendered. The `actionElement` will be displayed to the right of the cell data. An `actionOnClick` can be specified for the `actionElement`. This should be used with a keyboard accessible component such as 'icButton' to allow for a function to be run when the `actionElement` is clicked.
 */
export const ActionElement = {
  render: () => (
    <IcDataTable
      caption="Action Element"
      columns={COLS}
      data={ACTION_DATA_ELEMENTS}
    />
  ),
  name: "Action element",
};

/**
 * An example showing the table being able to handle empty cell values (null, undefined or empty string).
 */
export const MissingCellData = {
  render: () => (
    <IcDataTable
      caption="Missing cell data"
      columns={COLS}
      data={DATA_WITH_EMPTY_VALUES}
    />
  ),
  name: "Missing cell data",
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
 *    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>'
 *  }
 * }
 * ```
 *
 * ```
 * // Without an icon
 * firstName: {
 *  data: "Joe",
 *  description: {
 *    data: "The name of Joe"
 *  }
 * }
 * ```
 */
export const CellDescriptionsAndIcons = {
  render: () => (
    <IcDataTable
      caption="Description and icons within cells"
      columns={COLS_WIDTH}
      data={DATA_ELEMENTS_WITH_DESCRIPTIONS}
      tableLayout="auto"
    />
  ),
  name: "Description and icons within cells",
};

export const CellDescriptionsLongText = {
  render: () => (
    <IcDataTable
      caption="Basic Table"
      columns={COLS_WIDTH}
      data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS}
      tableLayout="auto"
    />
  ),
  name: "Description and icons within cells with long text",
};

/**
 * By setting `rowSelection` to `true`, `IcCheckbox` elements will appear in the leftmost column, with one in the header.
 * When checked, the corresponding row will be selected, with the `icSelectedRowChange` containing the selected row and an array of all the currently selected rows.
 *
 * When checking the header checkbox, all rows will be selected, with the `icSelectAllRows` event being emitted with an array of all the rows. When using pagination, only the rows on the current page will be selected.
 */
export const SelectRowsUsingCheckboxExample = {
  render: () => (
    <IcDataTable
      caption="Select rows with checkbox"
      columns={COLS}
      data={DATA}
      rowSelection
      onIcSelectedRowChange={(ev) => console.log(ev.detail)}
      onIcSelectAllRows={(ev) => console.log(ev.detail)}
    />
  ),
  name: "Select rows with checkbox",
};

const defaultArgs = {
  caption: "Screen reader caption for data table",
  columnHeaderTruncation: true,
  columns: LONG_COLS,
  data: LONG_DATA,
  defaultColumn: "",
  density: "default",
  disableAutoSort: false,
  embedded: false,
  globalRowHeight: 40,
  height: "",
  hideColumnHeaders: false,
  hideDensitySelect: false,
  loading: false,
  loadingDesc: "loading",
  loadingLabel: "Loading data...",
  loadingLabelDuration: 20,
  loadingMax: 100,
  loadingMin: 0,
  loadingProgress: 50,
  loadingOverlay: false,
  minimumLoadingDisplayDuration: 1000,
  paginationItemsPerPageOptions: [
    { label: "5", value: "5" },
    { label: "10", value: "10" },
    { label: "15", value: "15" },
  ],
  paginationRangeLabelType: "page",
  paginationSelectedItemsPerPage: 5,
  paginationSelectItemsPerPageOnEnter: true,
  paginationSetToFirstPageOnPaginationChange: false,
  paginationShowGoToPageControl: true,
  paginationShowItemsPerPageControl: true,
  paginationType: "simple",
  paginationAlignment: "right",
  paginationItemLabel: "Item",
  paginationPageLabel: "Page",
  paginationHideRangeLabel: false,
  rowSelection: false,
  showPagination: true,
  sortable: false,
  sortOrders: ["unsorted", "ascending", "descending"],
  stickyColumnHeaders: false,
  stickyRowHeaders: false,
  tableLayout: "fixed",
  theme: "inherit",
  titleBarSlot: true,
  titleBarDesc: "Title bar description",
  titleBarHeading: "Title bar heading",
  truncationPattern: "tooltip",
  titleBarMetadata: "128 items | 32gb | Updated: 01/02/03",
  titleBarPrimaryActionSlot: true,
  titleBarCustomActionSlot: true,
  updating: false,
  updatingDesc: "loading",
  updatingMax: 100,
  updatingMin: 0,
  updatingProgress: 50,
  width: "",
};

/**
 * Go to the <ic-link href="/?path=/story/react-components-data-table--playground">separate page for the playground example</ic-link> to view the prop controls.
 */
export const Playground = {
  render:(args) => (
    <IcDataTable
      caption={args.caption}
      columnHeaderTruncation={args.columnHeaderTruncation}
      columns={args.columns}
      data={args.data}
      density={args.density}
      disableAutoSort={args.disableAutoSort}
      embedded={args.embedded}
      globalRowHeight={args.globalRowHeight}
      height={args.height}
      hideColumnHeaders={args.hideColumnHeaders}
      loading={args.loading}
      loadingOptions={{
        description:args.loadingDesc,
        label:args.loadingLabel,
        labelDuration:args.loadingLabelDuration,
        max:args.loadingMax,
        min:args.loadingMin,
        progress:args.loadingProgress,
        overlay:args.loadingOverlay,
      }}
      minimumLoadingDisplayDuration={args.minimumLoadingDisplayDuration}
      paginationBarOptions={{
        itemsPerPageOptions:args.paginationItemsPerPageOptions,
        rangeLabelType:args.paginationRangeLabelType,
        type:args.paginationType,
        selectedItemsPerPage:args.paginationSelectedItemsPerPage,
        selectItemsPerPageOnEnter:args.paginationSelectItemsPerPageOnEnter,
        setToFirstPageOnPaginationChange:
          args.paginationSetToFirstPageOnPaginationChange,
        showGoToPageControl:args.paginationShowGoToPageControl,
        showItemsPerPageControl:args.paginationShowItemsPerPageControl,
        alignment:args.paginationAlignment,
        pageLabel:args.paginationPageLabel,
        itemLabel:args.paginationItemLabel,
        hideRangeLabel:args.paginationHideRangeLabel,
      }}
      rowSelection={args.rowSelection}
      showPagination={args.showPagination}
      sortable={args.sortable}
      sortOptions={{
        sortOrders:args.sortOrders,
        defaultColumn:args.defaultColumn,
      }}
      stickyColumnHeaders={args.stickyColumnHeaders}
      stickyRowHeaders={args.stickyRowHeaders}
      tableLayout={args.tableLayout}
      theme={args.theme}
      truncationPattern={args.truncationPattern}
      updating={args.updating}
      updatingOptions={{
        description:args.updatingDesc,
        max:args.updatingMax,
        min:args.updatingMin,
        progress:args.updatingProgress,
      }}
      width={args.width}
    >
      <IcDataTableTitleBar
        slot={args.titleBarSlot}
        description={args.titleBarDesc}
        heading={args.titleBarHeading}
        hideDensitySelect={args.hideDensitySelect}
        metadata={args.titleBarMetadata}
      >
        <IcButton slot={args.titleBarPrimaryActionSlot}>Primary</IcButton>
        <IcButton
          slot={args.titleBarCustomActionSlot}
          variant="icon-tertiary"
          aria-label="Icon 1"
        >
          <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
        </IcButton>
      </IcDataTableTitleBar>
    </IcDataTable>
  ),
  args:defaultArgs,
  argTypes:{
    density:{
      options:["default", "dense", "spacious"],
      control:{ type: "inline-radio" },
    },
    globalRowHeight:{
      control:{ type: "text" },
    },
    paginationRangeLabelType:{
      options:["page", "data"],
      control:{ type: "inline-radio" },
    },
    paginationType:{
      options:["simple", "complex"],
      control:{ type: "inline-radio" },
    },
    paginationAlignment:{
      options:["left", "right", "space-between"],
      control:{ type: "inline-radio" },
    },
    tableLayout:{
      options:["fixed", "auto"],
      control:{ type: "inline-radio" },
    },
    truncationPattern:{
      options:["tooltip", "show-hide"],
      control:{ type: "inline-radio" },
    },
    titleBarSlot:{
      mapping:{
        true:"title-bar",
        false:"",
      },
    },
    titleBarPrimaryActionSlot:{
      mapping:{
        true:"primary-action",
        false:"",
      },
    },
    titleBarCustomActionSlot:{
      mapping:{
        true:"custom-actions",
        false:"",
      },
    },
    theme:{
      options:["inherit", "light", "dark"],
      control:{ type: "inline-radio" },
    },
  },
  name:"Playground",
};
