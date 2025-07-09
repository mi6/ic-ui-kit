/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
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
  COLS_WIDTH,
  COLUMNS_NO_TEXT_WRAP,
  COLUMNS_TEXT_WRAP,
  DATA,
  DATA_CELL_ALIGNMENT,
  DATA_ELEMENTS_WITH_DESCRIPTIONS,
  DATA_REACT_ELEMENTS,
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
  COLS_EXCLUDE_SORT,
  COLS_ELEMENTS_SINGLE_ACTION,
  DATA_REACT_ELEMENTS_PAGINATION
} from "../../../canary-web-components/src/components/ic-data-table/story-data";
import {
  IcDataTable,
  IcDataTableTitleBar,
  IcPaginationBar,
} from "../components";

import { mdiAccountGroup, mdiCellphone, mdiContentCopy, mdiDelete, mdiDownload, mdiImage } from "@mdi/js";

const StickyHeader = () => {
  const [stickyHeader, setStickyHeader] = useState(false);
  return (
    <>
      <IcDataTable
        caption="Sticky Header"
        columns={COLS}
        data={LONG_DATA}
        stickyColumnHeaders={stickyHeader}
        style={{ height: "366px" }}
      />
      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <IcButton onClick={() => setStickyHeader(true)}>Stick Header</IcButton>
        <IcButton onClick={() => setStickyHeader(false)}>
          Unstick Header
        </IcButton>
      </div>
    </>
  );
};

const HeaderTruncation = () => {
  return (
    <IcDataTable
      style={{ height: "400px", width: "500px" }}
      caption="Column Header Truncation"
      columns={COLS}
      data={LONG_DATA}
      columnHeaderTruncation
    />
  );
};

const TruncationTooltip = () => {
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
};

const TruncationShowHide = () => {
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
};

const UpdatingData = () => {
  const [data, setData] = useState([]);
  const [pageOptions, setPageOptions] = useState([{ label: "5", value: "5" }]);

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
        columns={COLS}
        data={data}
        showPagination
        paginationBarOptions={{
          itemsPerPageOptions: pageOptions,
          showItemsPerPageControl: true,
          showGoToPageControl: true,
          rangeLabelType: "page",
          appearance: "default",
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
};

const SlottedPagination = () => {
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
};

const DisableSort = () => {
  const ExternalData = [...DATA];

  const handleSort = (detail) => {
    if (detail.sorted === "ascending") {
      ExternalData.sort((a, b) => {
        const column = detail.columnName;
        if (a[column] < b[column]) return -1;
        if (a[column] > b[column]) return 1;
        return 0;
      });
    } else if (detail.sorted === "descending") {
      ExternalData.sort((a, b) => {
        const column = detail.columnName;
        if (a[column] < b[column]) return 1;
        if (a[column] > b[column]) return -1;
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
};

const defaultArgs = {
  caption: "Screen reader caption for data table",
  columnHeaderTruncation: true,
  columns: COLS,
  data: LONG_DATA,
  density: "default",
  embedded: false,
  globalRowHeight: 40,
  height: "",
  hideColumnHeaders: false,
  highlightSelectedRow: true,
  loading: false,
  loadingAppearance: "dark",
  loadingDesc: "loading",
  loadingLabel: "Loading data...",
  loadingLabelDuration: 20,
  loadingMax: 100,
  loadingMin: 0,
  loadingProgress: 50,
  loadingOverlay: false,
  loadingShowBackground: false,
  minimumLoadingDisplayDuration: 1000,
  paginationAlignment: "right",
  paginationAppearance: "default",
  paginationHideAllFromItemsPerPage: false,
  paginationHideRangeLabel: false,
  paginationItemLabel: "Item",
  paginationItemsPerPageOptions: [
    { label: "5", value: "5" },
    { label: "10", value: "10" },
    { label: "15", value: "15" },
  ],
  paginationPageLabel: "Page",
  paginationRangeLabelType: "page",
  paginationSetToFirstPageOnPaginationChange: false,
  paginationShowGoToPageControl: true,
  paginationShowItemsPerPageControl: true,
  paginationType: "simple",
  showPagination: true,
  sortable: false,
  sortOrders: ["unsorted", "ascending", "descending"],
  defaultColumn: "",
  stickyColumnHeaders: false,
  stickyRowHeaders: false,
  updating: false,
  updatingAppearance: "dark",
  updatingDesc: "loading",
  updatingMax: 100,
  updatingMin: 0,
  updatingProgress: 50,
  titleBarSlot: true,
  titleBarDesc: "Title bar description",
  titleBarHeading: "Title bar heading",
  truncationPattern: "tooltip",
  hideDensitySelect: false,
  tableLayout: "fixed",
  titleBarMetadata: "128 items | 32gb | Updated: 01/02/03",
  titleBarPrimaryActionSlot: true,
  titleBarCustomActionSlot: true,
  width: "",
};

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
 * Use the data table component to display data in a tabular form. There are two required props for data table:
 * - Caption: `string`
 * - Columns: `IcDataTableColumnObject[]`
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
      caption="Dense"
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
  render: () => <StickyHeader />,
  name: "Sticky Column Headers",
};

/**
 * By default, column header labels will wrap when they exceed the column width. To keep the column header height constant, the `columnHeaderTruncation` can be used. When set to `true`, the label will appear truncated and will display a tooltip with the full text when hovered over.
 */
export const ColumnHeaderTruncation = {
  render: () => <HeaderTruncation />,
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
  name: "Row Headers",
};

/**
 * Set `sortable` to `true` to set the sort functionality on all columns. Sorting can be set to `unsorted`, `ascending` and `descending` by press the sort buttons next to the column heading.
 */
export const Sort = {
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

  name: "Sort Options",
};

/**
 * Set `sortable` to `true` and set `disable-auto-sort` to `true` to enable external sorting functionality.
 */
export const DisabledSort = {
  render: () => <DisableSort />,
  name: "Disable sort"
}

/**
 * Adding 'excludeColumnFromSort: true` to the column object excludes that column from displaying the sort button.
 */
export const ExcludeColumnsFroSort = {
  render: () => <IcDataTable caption="Sort" columns={COLS_EXCLUDE_SORT} data={DATA} sortable />,
  name: "Exclude columns from sort"
}

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
          {
            label: "5",
            value: "5",
          },
          {
            label: "10",
            value: "10",
          },
          {
            label: "15",
            value: "15",
          },
        ],

        showItemsPerPageControl: true,
        showGoToPageControl: true,
      }}
    />
  ),

  name: "Pagination",
};

/**
 * There may be a requirement to style a column differently to the rest of the data to add emphasis. For example, centre align data within the 'first name' column. To do this, add `columnAlignment` to the column. `columnAlignment` takes an object which sets the `horizontal` and `vertical` property.
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
  name: "Column Overrides",
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
  name: "Row Overrides",
};

/**
 * Cell overrides allows styling to be applied at a cell level. The cell which requires an override accepts an object which requires `data` and can contain `cellAlignment` and/or `emphasis`.
 * 
 * `data` is the cell value.
 * `cellAlignment` accepts an object with the following key pairs:
 * - `horizontal` accepts `left`, `right` or `center`.
 * - `vertical` accepts `top`, `middle`, `bottom`.
 * 
 * `emphasis` accepts `high` or `low`.
 */
export const CellOverrides = {
  render: () => (
    <IcDataTable
      caption="Cell Overrides"
      columns={COLS}
      data={DATA_CELL_ALIGNMENT}
    />
  ),
  name: "Cell Overrides",
};

/**
 * When the table receives no data (either `null` or an empty array) it will automatically show an `IcEmptyState` below the headers.
 */
export const DefaultEmptyState = {
  render: () => <IcDataTable caption="Default Empty State" columns={COLS} />,
  name: "Default Empty State",
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

  name: "Slotted Empty State",
};

/**
 * When a user wants to fetch their data asynchronously, a `loading` prop can be set to `true`, which then renders a circular variant of the `IcLoadingIndicator`. The loading indicator can be customised using the `loadingOptions` prop:
 * - `appearance` can be `light` or `dark`
 * - `description` sets the aria-label of the component
 * - `label` sets the visual message
 * - `labelDuration` is the number of milliseconds before the label changes
 * - `showBackground` allows for a white background and grey border to help the indicator stand out
 * - `overlay` renders a dark overlay over the previous data set while new data is loaded. Setting `overlay` also sets `showBackground` to `true` so the loading indicator stands out against the dark overlay.
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
  height: "500px"
};

/**
 * If data in the table has changed, an `updating` prop has been supplied to show a linear `IcLoadingIndicator` just above the data rows.
 * This prop is also accompanied by an `updatingOptions` prop, which contains similar options to `loadingOptions`, minus `label` and `labelDuration` since the linear version is displayed.
 */
export const UpdatingState = {
  render: () => (
    <IcDataTable
      caption="Updating state"
      columns={COLS}
      data={DATA}
      updating={true}
      updatingOptions={{
        progress: 30,
      }}
    />
  ),

  name: "Updating state",
};

/**
 * Custom HTML elements can be slotted or passed via the `data` prop to display in certain cells. When using the slotted method, the slot name follows the format of `{COLUMN_TAG}-{ROW_INDEX}`.
 */
export const LinksAndElementsInData = {
  render: () => (
    <IcDataTable
      caption="Links and Elements in data"
      columns={COLS_ELEMENTS}
      data={DATA_REACT_ELEMENTS}
    >
      {DATA_REACT_ELEMENTS.map((_, index) => (
        <>
          <IcButton
            key={`actions-${index}`}
            variant="destructive"
            slot={`actions-${index}`}
            onClick={() => console.log("Delete")}
          >
            Delete
          </IcButton>
          <IcButton
            key={`actions2-${index}`}
            variant="icon"
            slot={`actions2-${index}`}
            aria-label="Delete row"
            onClick={() => console.log("Delete")}
          >
            <SlottedSVG path={mdiDelete} viewBox="0 0 24 24" />
          </IcButton>
        </>
      ))}
    </IcDataTable>
  ),

  name: "Links and Elements in data",
};

export const SlottedElementsWithPagination = {
  render: () => 
    <IcDataTable
      caption="Slotted elements with pagination"
      columns={COLS_ELEMENTS_SINGLE_ACTION}
      data={DATA_REACT_ELEMENTS_PAGINATION}
      showPagination
      paginationBarOptions={{
        itemsPerPageOptions: [
          { label: '5', value: '5' },
          { label: '10', value: '10' },
        ],
        showItemsPerPageControl: true,
        selectedItemsPerPage: "5"
      }}
    >
      {DATA_REACT_ELEMENTS_PAGINATION.map((_, index) => (
        <IcButton
          key={`actions-${index}`}
          slot={`actions-${index}`}
          onClick={() => console.log(`${index+1}`)}
        >
          {index+1}
        </IcButton>
      ))}
    </IcDataTable>,
  
  name: "Slotted elements with pagination"
}

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
 * ***NOTE:*** If the data table uses the `density` prop, then your custom value will be scaled depending on the density, in order to keep content readable as the text size changes:
 * - Dense = 80% of `globalRowHeight` or `variableRowHeight`
 * - Spacious = 120% of `globalRowHeight` or `variableRowHeight`
 * 
 * E.G: If `globalRowHeight` = 100, a dense table will set the height to be ***80***.
 * 
 * ***NOTE:*** If a cell has a description (see "Description and icons within cells"), then the row height for that individual row will be increased by the description height in order to fully display it.
 * E.G: If `globalRowHeight` = 100 and a cell has a description with a height of 20, then the row height for that cell's row will be set to ***120***.
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

  name: "Custom Row Heights",
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
 * ***NOTE:*** `truncation-pattern` only applies to a cell's main data value. If a cell has a description (see "Description and icons within cells") then this will not be truncated and will still be visible beyond the truncation.
 */
export const DataTruncationTooltip = {
  render: () => <TruncationTooltip />,
  name: "Data truncation tooltip",
};

export const DataTruncationSeeMoreSeeLess = {
  render: () => <TruncationShowHide />,
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
 *    },
 *    ...
 *  }
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

  name: "Text Wrap",
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
        <IcButton slot="custom-actions" variant="icon" aria-label="Icon 1">
          <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
        </IcButton>
        <IcButton slot="custom-actions" variant="icon" aria-label="Icon 2">
          <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
        </IcButton>
        <IcButton slot="custom-actions" variant="icon" aria-label="Icon 3">
          <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
        </IcButton>
        <IcTypography slot="description" variant="body">
          <p>
            This is some text and{" "}
            <IcLink href="/" inline="">
              this is an inline link
            </IcLink>
            within the text.
          </p>
        </IcTypography>
      </IcDataTableTitleBar>
    </IcDataTable>
  ),

  name: "Custom Title Bar",
};

/**
 * The example below demonstrates how the pagination bar responds to changes within the data.
 * 
 * More details on `IcPaginationBar` can be found in the <ic-link href="/?path=/docs/react-components-pagination-bar--docs" inline="">pagination bar documentation</ic-link>.
 */
export const UpdatingDataExample = {
  render: () => <UpdatingData />,
  name: "Updating data example",
};

/**
 * There may be scenarios when using `IcDataTable` when pagination and data fetching is done using a backend API.
 * 
 * To enable this behaviour, the `pagination-bar` slot can be utilised to provide a custom `IcPaginationBar` component, allowing the user to have more control over how their data is displayed & interacted with.
 */
export const SlottedPaginationBar = {
  render: () => <SlottedPagination />,
  name: "Slotted pagination bar",
};

/**
 * The dimensions of the data table can be set using the `width` and `height` prop. The prop accepts dimensions in `px`, `%`, `rem` and `auto`.
 * By default, the width is set to `100%` so the table spans across the viewport or parent container.
 * 
 * To set the column widths, the `columnWidth` property should be added to the relevant column within the column array.
 * 
 * The [table layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) prop is vital to how the table resizing and column widths behave. By default, the table layout is set to `fixed`. If no column width is set, the columns widths will be equally set within the viewport or parent container.
 * A table with a `fixed` layout will force the table column widths to take precedence over the data with the table cells.
 * For the column widths to be dictated by the content inside, set the `tableLayout` prop to `auto` and set the table `width` to `auto`.
 * To set the min and max width of a table cell, set the `tableLayout` prop to `auto` and set a `minWidth` or `maxWidth` value into `columnWidth`. The min and max width accepts dimensions in `px`, `%`, `rem`.
 */
export const TableSizingAndColumnWidth = {
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
  name: "Action Element",
};

/**
* The cells can contain a slotted `actionElement`. The `actionElement` will be displayed to the right of the cell data.
*/
export const SlottedActionElement = {
  render: () => (
   <IcDataTable
     caption="Slotted Action Element"
     columns={COLS}
     data={DATA}
   >
     <div slot="firstName-0-action-element" style={{display: "flex"}}>
       <IcButton variant="icon" size="small" aria-label="Download data" onClick={() => alert("Download button clicked")}>
         <SlottedSVG path={mdiDownload} viewBox="0 0 24 24" />
       </IcButton>
       <IcButton variant="icon" size="small" aria-label="Call phone" onClick={() => alert("Cellphone button clicked")}>
         <SlottedSVG path={mdiCellphone} viewBox="0 0 24 24" />
       </IcButton>
       <IcButton variant="icon" size="small" aria-label="Copy data" onClick={() => alert("Copy button clicked")}>
         <SlottedSVG path={mdiContentCopy} viewBox="0 0 24 24" />
       </IcButton>
     </div>
   </IcDataTable>
 ),
  name: "Slotted action element",
};

/**
 * This example shows the table being able to handle empty cell values (null, undefined or empty string).
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
 * To remove the styling displayed when selecting a row, set `highlightSelectedRow` to `false`.
 */
export const TurnOffSelectedRowHighlighting = {
  render: () => (
    <IcDataTable
      caption="Turn off selected row highlighting"
      columns={COLS}
      data={DATA}
      highlightSelectedRow={false}
    />
  ),

  name: "Turn off selected row highlighting",
};

/**
 * The `icSelectedRowChange` event is emitted when a row is selected or de-selected, allowing for actions to be performed based on its value.
 */
export const SelectedRowEvent = {
  render: () => (
    <IcDataTable
      caption="Selected row event"
      columns={COLS}
      data={DATA}
      onIcSelectedRowChange={(event) =>
        console.log("Selected row changed: ", event.detail)
      }
    />
  ),

  name: "Selected row event",
};

/**
 * Descriptions and icons can be included in the cells by proving a `description` field in the data. This will populate the cell with an icon (if provided) and a text string underneath the cell data. This can be applied to any cell.
 * 
 * You can provide a `description` object with an icon:
 * ```
 * firstName: {
 *  data: "Joe",
 *  description: {
 *    data: "The name of Joe",
 *    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>'
 *  }
 * }
 * ```
 * 
 * and without an icon:
 * ```
 * firstName: {
 *  data: "Joe",
 *  description: {
 *    data: "The name of Joe"
 *  }
 * }
 * ```
 */
export const DescriptionAndIconsWithinCells = {
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

export const DescriptionAndIconsWithinCellsWithLongText = {
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
 * Go to the <ic-link href="/?path=/story/react-components-data-table--playground-example">separate page for the playground example</ic-link> to view the prop controls.
 */
export const PlaygroundExample = {
  render: (args) => (
    <IcDataTable
        caption={args.caption}
        columnHeaderTruncation={args.columnHeaderTruncation}
        columns={args.columns}
        data={args.data}
        density={args.density}
        embedded={args.embedded}
        globalRowHeight={args.globalRowHeight}
        height={args.height}
        hideColumnHeaders={args.hideColumnHeaders}
        highlightSelectedRow={args.highlightSelectedRow}
        loading={args.loading}
        loadingOptions={{
          appearance: args.loadingAppearance,
          description: args.loadingDesc,
          label: args.loadingLabel,
          labelDuration: args.loadingLabelDuration,
          max: args.loadingMax,
          min: args.loadingMin,
          progress: args.loadingProgress,
          showBackground: args.loadingShowBackground,
          overlay: args.loadingOverlay,
        }}
        minimumLoadingDisplayDuration={args.minimumLoadingDisplayDuration}
        paginationBarOptions={{
          alignment: args.paginationAlignment,
          appearance: args.paginationAppearance,
          hideAllFromItemsPerPage: args.paginationHideAllFromItemsPerPage,
          hideRangeLabel: args.paginationHideRangeLabel,
          itemLabel: args.paginationItemLabel,
          itemsPerPageOptions: args.paginationItemsPerPageOptions,
          pageLabel: args.paginationPageLabel,
          rangeLabelType: args.paginationRangeLabelType,
          selectedItemsPerPage: args.paginationSelectedItemsPerPage,
          setToFirstPageOnPaginationChange: args.paginationSetToFirstPageOnPaginationChange,
          showGoToPageControl: args.paginationShowGoToPageControl,
          showItemsPerPageControl: args.paginationShowItemsPerPageControl,
          type: args.paginationType
        }}
        showPagination={args.showPagination}
        sortable={args.sortable}
        sortOptions={{
          sortOrders: args.sortOrders,
          defaultColumn: args.defaultColumn
        }}
        stickyColumnHeaders={args.stickyColumnHeaders}
        stickyRowHeaders={args.stickyRowHeaders}
        tableLayout={args.tableLayout}
        truncationPattern={args.truncationPattern}
        updating={args.updating}
        updatingOptions={{
          appearance: args.updatingAppearance,
          description: args.updatingDesc,
          max: args.updatingMax,
          min: args.updatingMin,
          progress: args.updatingProgress
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
          <IcButton slot={args.titleBarCustomActionSlot} variant="icon" aria-label="Icon 1">
            <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
          </IcButton>
        </IcDataTableTitleBar>
      </IcDataTable>
  ),

  args: defaultArgs,

  argTypes: {
    density: {
      options: ["default", "dense", "spacious"],

      control: { type: "inline-radio" },
    },

    loadingAppearance: {
      options: ["dark", "light"],

      control: { type: "inline-radio" },
    },

    paginationAppearance: {
      options: ["default", "dark", "light"],

      control: { type: "inline-radio" },
    },

    paginationRangeLabelType: {
      options: ["page", "data"],

      control: { type: "inline-radio" },
    },

    paginationType: {
      options: ["simple", "complex"],

      control: { type: "inline-radio" },
    },

    paginationAlignment: {
      options: ["left", "right", "space-between"],

      control: { type: "inline-radio" },
    },

    tableLayout: {
      options: ["fixed", "auto"],

      control: { type: "inline-radio" },
    },

    truncationPattern: {
      options: ["tooltip", "show-hide"],

      control: { type: "inline-radio" },
    },

    updatingAppearance: {
      options: ["dark", "light"],

      control: { type: "inline-radio" },
    },

    titleBarSlot: {
      mapping: {
        true: "title-bar",
        false: "",
      },
    },

    titleBarPrimaryActionSlot: {
      mapping: {
        true: "primary-action",
        false: "",
      },
    },

    titleBarCustomActionSlot: {
      mapping: {
        true: "custom-actions",
        false: "",
      },
    },
  },

  name: "Playground example",
};
