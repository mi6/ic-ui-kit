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
} from "../../../canary-web-components/src/components/ic-data-table/story-data";
import {
  IcDataTable,
  IcDataTableTitleBar,
  IcPaginationBar,
} from "../components";

import { mdiAccountGroup, mdiDelete, mdiImage } from "@mdi/js";

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

export const Basic = {
  render: () => <IcDataTable caption="Basic" columns={COLS} data={DATA} />,
  name: "Basic",
};

export const Embedded = {
  render: () => (
    <IcDataTable caption="Embedded" columns={COLS} data={DATA} embedded />
  ),
  name: "Embedded",
};

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

export const StickyColumnHeaders = {
  render: () => <StickyHeader />,
  name: "Sticky Column Headers",
};

export const ColumnHeaderTruncation = {
  render: () => <HeaderTruncation />,
  name: "Column header truncation",
};

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

export const Sort = {
  render: () => (
    <IcDataTable caption="Sort" columns={COLS} data={DATA} sortable />
  ),
  name: "Sort",
};

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

export const DefaultEmptyState = {
  render: () => <IcDataTable caption="Default Empty State" columns={COLS} />,
  name: "Default Empty State",
};

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
};

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

export const CustomIcons = {
  render: () => (
    <IcDataTable caption="Custom icons" columns={ICON_COLS} data={ICON_DATA}>
      <SlottedSVG slot="age-column-icon" path={mdiAccountGroup} />
      <SlottedSVG slot="firstName-0-icon" path={mdiAccountGroup} />
    </IcDataTable>
  ),

  name: "Custom icons",
};

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

export const DataTruncationTooltip = {
  render: () => <TruncationTooltip />,
  name: "Data truncation tooltip",
};

export const DataTruncationSeeMoreSeeLess = {
  render: () => <TruncationShowHide />,
  name: "Data truncation see more / see less",
};

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

export const UpdatingDataExample = {
  render: () => <UpdatingData />,
  name: "Updating data example",
};

export const SlottedPaginationBar = {
  render: () => <SlottedPagination />,
  name: "Slotted pagination bar",
};

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
