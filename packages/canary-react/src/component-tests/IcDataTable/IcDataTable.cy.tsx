/* eslint-disable react/jsx-no-bind */
/// <reference types="cypress" />

import React, { ReactElement, useState } from "react";
import { mount } from "cypress/react";
import { IcDataTable, IcDataTableTitleBar } from "../../components";
import {
  IcButton,
  IcEmptyState,
  SlottedSVG,
  IcPageHeader,
  IcStatusTag,
  IcSectionContainer,
  IcTypography,
  IcLink,
  IcSelect,
  IcTheme,
} from "@ukic/react";
import { IcPaginationBarOptions } from "@ukic/canary-web-components/src/utils/types";
import {
  mdiAccountGroup,
  mdiCellphone,
  mdiContentCopy,
  mdiDownload,
  mdiImage,
  mdiPlus,
} from "@mdi/js";

import {
  COLS,
  COLS_ALIGNMENT,
  COLS_ELEMENTS,
  COLS_ELEMENTS_SINGLE_ACTION,
  COLS_EXCLUDE_SORT,
  COLS_HIDDEN,
  DATA,
  DATA_CELL_ALIGNMENT,
  ICON_COLS,
  ICON_DATA,
  ICON_DATA_LONG_VALUES,
  LONG_COLS,
  LONG_DATA,
  ROW_ALIGNMENT,
  ROW_HEADER_COLS,
  ROW_HEADER_DATA,
  LONG_DATA_VALUES,
  COLUMNS_NO_TEXT_WRAP,
  LONG_DATA_VALUES_UPDATE,
  LONG_TEXT,
  VERY_LONG_DATA,
  DATA_REACT_ELEMENTS,
  DATA_REACT_ELEMENTS_PAGINATION,
  DATA_REACT_ELEMENTS_WITH_ICONS,
  textWrapCell,
  textWrapColumns,
  textWrapRow,
  DATA_EMPHASIS,
  DATA_WITH_EMPTY_VALUES,
  LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS,
  DATA_ELEMENTS_PAGINATION,
  COLS_DISABLE_AUTO_SORT,
} from "@ukic/canary-web-components/src/components/ic-data-table/story-data";

import {
  BE_VISIBLE,
  HAVE_ATTR,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_BEEN_CALLED_WITH,
  HAVE_CALL_COUNT,
  HAVE_CLASS,
  HAVE_CSS,
  HAVE_LENGTH,
  HAVE_TEXT,
  NOT_BE_VISIBLE,
  NOT_EXIST,
  NOT_HAVE_CSS,
  NOT_HAVE_BEEN_CALLED,
  EQUAL,
  NOT_HAVE_ATTR,
} from "@ukic/react/src/component-tests/utils/constants";

import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import {
  IcDataTableTruncationTypes,
  IcSortEventDetail,
} from "@ukic/canary-web-components";
import {
  DataTableWithPopover,
  multipleColumnWidth,
  newData,
  singleColumnTruncationWidth,
  singleColumnWidth,
  NativeTable,
} from "./IcDataTableTestData";
import "@ukic/web-components/dist/core/icds-table-style.css";

const DATA_TABLE_SELECTOR = "ic-data-table";
const DEFAULT_THRESHOLD = 0.022;
const LOADING_INDICATOR_SELECTOR = "ic-loading-indicator";
const SORT_BUTTON_SELECTOR = ".sort-button";
const TOOLTIP_BUTTON_SELECTOR = "ic-tooltip button";
const ARIA_LABEL = "aria-label";
const TITLE_BAR_SELECTOR = "ic-data-table-title-bar";
const TYPOGRAPHY_SELECTOR = "ic-typography";
const NEXT_PAGE_BUTTON_ID = "#next-page-button";
const PAGINATION_BAR_SELECTOR = "ic-pagination-bar";
const TABLE_CELL_SELECTOR = ".table-cell";
const TOOLTIP_SELECTOR = "ic-tooltip";
const GLOBAL_ROW_HEIGHT = "global-row-height";
const TABLE_ROW_SELECTOR = ".table-row";
const LAST_CELL_SELECTOR = ".table-cell:last-child";
const LAST_CELL_TYPOGRAPHY_SELECTOR = `${LAST_CELL_SELECTOR} ic-typography`;
const PAGINATION_SELECTOR = "ic-pagination";
const PAGINATION_GO_TO_PAGE_TEXT_FIELD_SELECTOR =
  ".go-to-page-holder ic-text-field";
const PAGINATION_GO_TO_PAGE_BUTTON_SELECTOR = ".go-to-page-holder ic-button";
const ITEMS_PER_PAGE_SELECTOR = ".items-per-page-input";
const EMPTY_STATE = "ic-empty-state";
const ODD_TABLE_ROWS_SELECTOR = ".table-row:nth-child(odd)";
const TABLE_CELL_TYPOGRAPHY_SELECTOR = ".table-cell:last-child ic-typography";
const EVEN_TABLE_ROWS_SELECTOR = ".table-row:nth-child(even)";
const TABLE_CELL_TOOLTIP_SELECTOR = ".table-cell:last-child ic-tooltip";
const TRUNCATION_SHOW_HIDE_SELECTOR = ".truncation-show-hide";
const TRUNCATION_TOOLTIP_SELECTOR = ".truncation-tooltip";
const TABLE_CELL_FIRST_CHILD_SELECTOR = ".table-cell:first-child";
const ICON_BUTTON = "ic-button.ic-button-variant-icon-tertiary";
const ACTION_ELEMENT = "action-element";
const BUTTON_SELECTOR = "button";
const IC_BUTTON_SELECTOR = "ic-button";
const TRUNCATION_TOOLTIP = "tooltip";
const TRUNCATION_SHOW_HIDE = "show-hide";
const SEE_MORE = "See more";
const SEE_LESS = "See less";
const SORT_ASCENDING = "Sort ascending";
const SORT_DESCENDING = "Sort descending";
const CONSOLE_LOG_SPY = "@spyWinConsoleLog";
const LOADING_OVERLAY_SELECTOR = ".loading-overlay";
const LOADING_INDICATOR_OUTER_SELECTOR = ".ic-loading-circular-outer";
const ROW_CHECKBOX_SELECTOR = "tr ic-checkbox";
const HEADER_CHECKBOX_SELECTOR = "th ic-checkbox";

const setDatableTestViewport = (): void => {
  cy.viewport(1024, 768);
};

const checkTableRowHoverState = (rowNum: number): void => {
  // snapshot does not capture hover color for some reason,
  // so additional check that hover state css is applied to the row
  cy.get("table").find("tr").eq(1).realHover().wait(300);
  cy.get("table")
    .find("tr")
    .eq(rowNum)
    .should(HAVE_CSS, "background-image")
    .and(
      "eq",
      "linear-gradient(rgba(23, 89, 188, 0.1) 0px, rgba(23, 89, 188, 0.1) 0px)"
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export const BasicDataTable = (dataTableProps?: any): ReactElement => (
  <IcDataTable
    columns={COLS}
    data={DATA}
    caption="Data Tables"
    {...dataTableProps}
  />
);

export const BasicSectionContainer = (): ReactElement => {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <IcPageHeader heading="Page header">
        <IcStatusTag slot="heading-adornment" label="Beta" />
      </IcPageHeader>
      <IcSectionContainer style={{ flex: "1", minHeight: "0" }}>
        <IcDataTable
          caption="Table"
          stickyColumnHeaders
          columns={COLS}
          data={DATA}
        >
          <IcDataTableTitleBar
            slot="title-bar"
            description="Data table description that describes the purpose of the table."
          >
            <IcButton slot="primary-action">Primary</IcButton>
          </IcDataTableTitleBar>
        </IcDataTable>
      </IcSectionContainer>
    </div>
  );
};

export const ExternalSortDataTable = (): ReactElement => {
  const ExternalData = [...DATA];
  const handleSort = (detail: IcSortEventDetail) => {
    if (detail.sorted === "ascending") {
      ExternalData.sort((a, b) => {
        const column = detail.columnName as keyof typeof ExternalData[0];
        if (a[column] < b[column]) return -1;
        if (a[column] > b[column]) return 1;
        return 0;
      });
    } else if (detail.sorted === "descending") {
      ExternalData.sort((a, b) => {
        const column = detail.columnName as keyof typeof ExternalData[0];
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
      caption="Data Tables"
      sortable
      disableAutoSort
      onIcSortChange={(e) => handleSort(e.detail)}
      sortOptions={{
        sortOrders: ["ascending", "descending"],
      }}
    />
  );
};

export const ExternalSortColumnDataTable = (): ReactElement => {
  const ExternalData = [...DATA];

  const handleSort = ({ columnName, sorted }: IcSortEventDetail) => {
    if (columnName !== "firstName") return;

    const sortedAscending = sorted === "ascending";
    ExternalData.sort((a, b) => {
      if (a[columnName] < b[columnName]) return sortedAscending ? -1 : 1;
      if (a[columnName] > b[columnName]) return sortedAscending ? 1 : -1;
      return 0;
    });
  };

  return (
    <IcDataTable
      columns={COLS_DISABLE_AUTO_SORT}
      data={ExternalData}
      caption="Disable auto sort on columns"
      sortable
      onIcSortChange={(e) => handleSort(e.detail)}
      sortOptions={{
        sortOrders: ["ascending", "descending"],
      }}
    />
  );
};

export const PaginationDataTable = (): ReactElement => {
  return (
    <IcDataTable
      caption="Data tables"
      columns={COLS_ELEMENTS_SINGLE_ACTION}
      data={DATA_ELEMENTS_PAGINATION}
      showPagination
    >
      {DATA_ELEMENTS_PAGINATION.map((_, index) => (
        <>
          {index === 4 || index === 9 ? (
            <IcSelect
              label="Select label"
              hideLabel
              placeholder="Placeholder goes here"
              slot={`actions-${index}`}
              key={`actions-${index}`}
            ></IcSelect>
          ) : (
            <IcButton
              onClick={() => {
                console.log(`${index + 1}`);
              }}
              slot={`actions-${index}`}
              key={`actions-${index}`}
            >
              {index + 1}
            </IcButton>
          )}
        </>
      ))}
    </IcDataTable>
  );
};

describe("IcDataTables", () => {
  beforeEach(() => {
    cy.injectAxe();
    setDatableTestViewport();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(<BasicDataTable />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render data tables in the constraints of the section container", () => {
    mount(<BasicSectionContainer />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/section-container",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.114),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with row headers", () => {
    mount(
      <IcDataTable
        columns={ROW_HEADER_COLS}
        data={ROW_HEADER_DATA}
        caption="Data Tables"
      />
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/with-row-headers",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.047),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render embedded", () => {
    mount(<BasicDataTable embedded />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/embedded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.041),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with column header truncation", () => {
    mount(
      <div style={{ width: "500px" }}>
        <BasicDataTable columnHeaderTruncation />
      </div>
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.findShadowEl(DATA_TABLE_SELECTOR, TOOLTIP_SELECTOR).eq(0).realHover();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/column-header-truncation",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
    cy.get("body").realHover({ position: "bottomLeft" }); // Removes hover from upcoming tests, to not trigger the hover state unintentionally
  });

  it("should render with Age column hidden", () => {
    mount(
      <IcDataTable columns={COLS_HIDDEN} data={DATA} caption="Data Tables" />
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/hidden-column",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should sort data when the sort button is clicked", () => {
    mount(<BasicDataTable sortable />);
    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.compareSnapshot({
      name: "/sortable",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(1).click();

    cy.wait(250);

    cy.compareSnapshot({
      name: "/sortable-first-sort",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(2).click();

    cy.wait(250);

    cy.compareSnapshot({
      name: "/sortable-second-sort",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.044),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it('should sort data to "ascending", descending and then remove sort when the sort button is clicked three times', () => {
    mount(<BasicDataTable sortable />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR)
      .eq(0)
      .shadow()
      .find(TOOLTIP_BUTTON_SELECTOR)
      .should(HAVE_ATTR, ARIA_LABEL, SORT_ASCENDING);

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(0).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(0)
      .should(HAVE_TEXT, "Joe");

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR)
      .eq(0)
      .shadow()
      .find(TOOLTIP_BUTTON_SELECTOR)
      .should(HAVE_ATTR, ARIA_LABEL, SORT_DESCENDING);

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(0).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(0)
      .should(HAVE_TEXT, "Sarah");

    cy.checkA11yWithWait();

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR)
      .eq(0)
      .shadow()
      .find(TOOLTIP_BUTTON_SELECTOR)
      .should(HAVE_ATTR, ARIA_LABEL, "Remove sort");

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(0).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(0)
      .should(HAVE_TEXT, "Joe");

    cy.checkA11yWithWait();
  });

  it("should updated data based on ascending 'lastName' and have two sort option on the buttons", () => {
    mount(
      <IcDataTable
        caption="Sort Options"
        columns={COLS}
        data={DATA}
        sortable
        sortOptions={{
          sortOrders: ["ascending", "unsorted"],
          defaultColumn: "lastName",
        }}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR)
      .eq(1)
      .shadow()
      .find(TOOLTIP_BUTTON_SELECTOR)
      .should(HAVE_ATTR, ARIA_LABEL, "Remove sort");

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(1)
      .should(HAVE_TEXT, "Ashford");

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(1).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR)
      .eq(1)
      .shadow()
      .find(TOOLTIP_BUTTON_SELECTOR)
      .should(HAVE_ATTR, ARIA_LABEL, SORT_ASCENDING);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(1)
      .should(HAVE_TEXT, "Bartholomew Christoper Augustine Zacchaeus Ashford"); // cspell:disable-line
  });

  it("should sort data externally if disableAutoSort is true", () => {
    mount(<ExternalSortDataTable />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR)
      .eq(0)
      .shadow()
      .find(TOOLTIP_BUTTON_SELECTOR)
      .should(HAVE_ATTR, ARIA_LABEL, SORT_ASCENDING);

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(0).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(0)
      .should(HAVE_TEXT, "Joe");

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR)
      .eq(0)
      .shadow()
      .find(TOOLTIP_BUTTON_SELECTOR)
      .should(HAVE_ATTR, ARIA_LABEL, SORT_DESCENDING);

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(0).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(0)
      .should(HAVE_TEXT, "Sarah");

    cy.checkA11yWithWait();
  });

  it("should sort data externally if disableAutoSort is true on a column", () => {
    mount(<ExternalSortColumnDataTable />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR)
      .eq(0)
      .shadow()
      .find(TOOLTIP_BUTTON_SELECTOR)
      .should(HAVE_ATTR, ARIA_LABEL, SORT_ASCENDING);

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(0).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(0)
      .should(HAVE_TEXT, "Joe");

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR)
      .eq(0)
      .shadow()
      .find(TOOLTIP_BUTTON_SELECTOR)
      .should(HAVE_ATTR, ARIA_LABEL, SORT_DESCENDING);

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(0).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(0)
      .should(HAVE_TEXT, "Sarah");

    cy.checkA11yWithWait();
  });

  it("should not show the sort buttons on columns where excludeColumnFromSort is true", () => {
    mount(
      <IcDataTable
        caption="Exclude column from sort"
        data={DATA}
        columns={COLS_EXCLUDE_SORT}
        sortable
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/exclude-column-from-sort",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with column overrides", () => {
    mount(
      <IcDataTable
        columns={COLS_ALIGNMENT}
        data={DATA}
        showPagination
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/column-overrides",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.047),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with row overrides", () => {
    mount(
      <IcDataTable
        columns={ROW_HEADER_COLS}
        data={ROW_ALIGNMENT}
        showPagination
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/row-overrides",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.048),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with cell overrides", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA_CELL_ALIGNMENT}
        showPagination
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/cell-overrides",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.044),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should correctly render a custom icon in the header when passed through the column prop", () => {
    mount(
      <IcDataTable columns={ICON_COLS} data={ICON_DATA} caption="Data Tables" />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    // check the icon is not rendered in the header of first column as hideOnHeader is set to `true`
    cy.findShadowEl(DATA_TABLE_SELECTOR, "th")
      .eq(0)
      .find("span.icon")
      .should(NOT_EXIST);

    cy.compareSnapshot({
      name: "/custom-icons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.036),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render a slotted icon instead of an icon defined in data", () => {
    mount(
      <IcDataTable columns={COLS} data={ICON_DATA} caption="Data tables">
        <SlottedSVG
          slot="name-4-icon"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"></path>
        </SlottedSVG>
      </IcDataTable>
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.compareSnapshot({
      name: "/slotted-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.036),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
    cy.checkA11yWithWait();
  });

  it("should test code in column definition object", () => {
    const clonedCols = JSON.parse(JSON.stringify(ICON_COLS));
    clonedCols[1].icon.icon = `<img src=x onerror=alert(12345)//>`;

    cy.spy(window, "alert").as("spyAlert");

    mount(
      <IcDataTable
        columns={clonedCols}
        data={ICON_DATA}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.get("@spyAlert").should(NOT_HAVE_BEEN_CALLED);
  });

  it("should render the empty state when data is null", () => {
    mount(<IcDataTable columns={COLS} caption="Data Tables" />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.compareSnapshot({
      name: "/null-data",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });

  it("should render the empty state when no data is passed through", () => {
    mount(<IcDataTable columns={COLS} data={[]} caption="Data Tables" />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, EMPTY_STATE)
      .shadow()
      .should(HAVE_TEXT, "No Data");

    cy.compareSnapshot({
      name: "/no-data",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD),
    });
  });

  it("should initially show no data and then show data when added", () => {
    mount(<IcDataTable columns={COLS} data={[]} caption="Data Tables" />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, EMPTY_STATE)
      .shadow()
      .should(HAVE_TEXT, "No Data");

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "data", DATA);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").should(HAVE_LENGTH, 6);
  });

  it("should render a slotted custom empty state into the data table", () => {
    mount(
      <IcDataTable columns={COLS} data={[]} caption="Data Tables">
        <IcEmptyState
          slot="empty-state"
          aligned="left"
          heading="Test heading"
          body="test body"
        >
          <IcButton slot="actions">Button</IcButton>
        </IcEmptyState>
      </IcDataTable>
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.compareSnapshot({
      name: "/empty-state",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.003),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render the updating state when the `updating` prop is passed through", () => {
    mount(<IcDataTable columns={COLS} updating caption="Data Tables" />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.compareSnapshot({
      name: "/updating",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should pass through the loadingOptions to the loading indicator", () => {
    mount(
      <IcDataTable
        columns={COLS}
        loading
        loadingOptions={{
          monochrome: true,
          progress: 30,
          min: 0,
          max: 100,
        }}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.wait(350).compareSnapshot({
      name: "/loading-options",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render the loading indicator with background when data is displayed with ic-loading-indicator above", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA}
        loading
        loadingOptions={{
          progress: 30,
          min: 0,
          max: 100,
        }}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.wait(350);

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "loading", true);

    cy.compareSnapshot({
      name: "/loading-indicator-background",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should pass through the updatingOptions to the linear loading indicator", () => {
    mount(
      <IcDataTable
        columns={COLS}
        updating
        updatingOptions={{
          progress: 30,
        }}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.compareSnapshot({
      name: "/updating-options",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "updating", false);

    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR).should(
      NOT_EXIST
    );
  });

  it("should pass through the multiple updatingOptions to the linear loading indicator", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA}
        updating
        updatingOptions={{
          monochrome: true,
          progress: 45,
          min: 0,
          max: 50,
          description: "Updating",
        }}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR)
      .shadow()
      .find(".ic-loading-linear-outer")
      .should(HAVE_ATTR, ARIA_LABEL, "Updating");

    cy.compareSnapshot({
      name: "/multiple-updating-options",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should apply a specified row height to specific rows when variableRowHeight is set, and any not included should use the default globalRowHeight", () => {
    mount(
      <BasicDataTable
        variableRowHeight={({ index }: { index: number }) =>
          index % 2 === 0 ? 200 : null
        }
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.wait(300);

    cy.compareSnapshot({
      name: "/specified-row-height",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.11),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should not override the height of certain rows if `variableRowHeight` returns auto", () => {
    mount(
      <BasicDataTable
        variableRowHeight={({ index }: { index: number }) =>
          index % 2 === 0 ? "auto" : null
        }
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.wait(300);

    cy.compareSnapshot({
      name: "/auto-set-row-height",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should pass the caption down to any slotted ic-data-table-title-bar", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA}
        caption="Data Tables"
        globalRowHeight={80}
        density="dense"
      >
        <IcDataTableTitleBar
          slot="title-bar"
          description="Data table description that describes the purpose of the table."
          metadata="128 items | 32gb | Updated: 01/02/03"
        >
          <IcButton
            slot="primary-action"
            size="small"
            onClick={cy.stub().as("primaryActionClick")}
            className="primary-button"
          >
            Primary
          </IcButton>
          <IcButton
            slot="custom-actions"
            variant="icon-tertiary"
            aria-label="Icon Button"
            className="custom-action-button"
            onClick={cy.stub().as("customActionClick")}
          >
            <SlottedSVG viewBox="0 -960 960 960" width="24" height="24">
              <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z" />
            </SlottedSVG>
          </IcButton>
        </IcDataTableTitleBar>
      </IcDataTable>
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(TITLE_BAR_SELECTOR).find(".primary-button").click();
    cy.get("@primaryActionClick").should(HAVE_BEEN_CALLED_ONCE);

    cy.wait(300);

    cy.get(TITLE_BAR_SELECTOR).find(".custom-action-button").click();
    cy.get("@customActionClick").should(HAVE_BEEN_CALLED_ONCE);

    cy.wait(300);

    cy.compareSnapshot({
      name: "/slotted-title-bar",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.findShadowEl(
      TITLE_BAR_SELECTOR,
      ".header-container .ic-typography-h3"
    ).should(HAVE_TEXT, "Data Tables");
  });

  it("should cancel the loading state when the loading prop is `true` and data has been set after 1 second from initial loading", () => {
    mount(
      <IcDataTable
        caption="Data tables"
        columns={COLS}
        loading
        loadingOptions={{
          progress: 30,
          min: 0,
          max: 100,
        }}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.clock();

    cy.tick(350);

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "data", DATA);

    cy.tick(1000);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody > tr").should(HAVE_LENGTH, 5);

    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR).should(
      NOT_EXIST
    );

    cy.clock().then((clock) => {
      clock.restore();
    });
  });

  it("should apply the correct density scaler to rowHeights", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA}
        caption="Data Tables"
        globalRowHeight={80}
        density="dense"
      />
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.wait(300);

    cy.compareSnapshot({
      name: "/density-dense",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.041),
    });

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "density", "spacious");

    cy.wait(300);

    cy.compareSnapshot({
      name: "/density-spacious",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.042),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should not override the height of rows if `globalRowHeight` is set to auto", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA}
        caption="Data Tables"
        globalRowHeight="auto"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/globalRowHeight-set-to-auto",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it('should stick the header when "stickyHeader" and height is set', () => {
    mount(
      <IcDataTable
        caption="Data tables"
        columns={LONG_COLS}
        data={LONG_DATA}
        stickyColumnHeaders
        style={{ height: "500px" }}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").eq(20).scrollIntoView();

    cy.compareSnapshot({
      name: "/sticky-header",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.113),
      delay: 500,
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, "thead").should(
      HAVE_CSS,
      "position",
      "sticky"
    );

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "stickyColumnHeaders", false);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "thead").should(NOT_BE_VISIBLE);

    cy.compareSnapshot({
      name: "/sticky-header-removed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.11),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
      delay: 500,
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").eq(0).scrollIntoView();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").should(
      NOT_HAVE_CSS,
      "position",
      "sticky"
    );
  });

  it("should update table density via dropdown", () => {
    mount(
      <IcDataTable caption="Custom Title Bar" columns={COLS} data={DATA}>
        <IcDataTableTitleBar
          slot="title-bar"
          description="Data table description that describes the purpose of the table."
          metadata="128 items | 32gb | Updated: 01/02/03"
        />
      </IcDataTable>
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/density-default-dropdown",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
      delay: 500,
    });

    cy.get(TITLE_BAR_SELECTOR).shadow().find("ic-select").click();

    cy.get(TITLE_BAR_SELECTOR)
      .shadow()
      .find("ic-select")
      .shadow()
      .find("li[role=option]")
      .eq(1)
      .click();

    cy.get(TITLE_BAR_SELECTOR)
      .shadow()
      .find("ic-select")
      .shadow()
      .find("li[role=option]")
      .should(HAVE_LENGTH, 3);

    cy.compareSnapshot({
      name: "/density-dense-dropdown",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should reset globalRowHeight", () => {
    mount(<BasicDataTable globalRowHeight={150} />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(3)
      .invoke("css", "height")
      .should(EQUAL, "151px");

    cy.document().then((doc) => {
      const dataTable = doc.querySelector(DATA_TABLE_SELECTOR);
      dataTable?.resetRowHeights(80);
    });

    // restRowHeight default is 40px but the additional 1px includes the border bottom.
    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(3)
      .should(HAVE_CSS, "height", "81px");
  });

  it("should render a SlottedSVG in the cell slot rather than using the cell icon slot", () => {
    mount(
      <IcDataTable columns={COLS} data={ICON_DATA} caption="Data tables">
        <SlottedSVG
          slot="lastName-4"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"></path>
        </SlottedSVG>
      </IcDataTable>
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/slotted-icon-in-cell",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.035),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
      delay: 500,
    });
  });

  it("should emit icSortChange event when sort button clicked", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA}
        caption="Data Tables"
        sortable
        onIcSortChange={(e: CustomEvent) => console.log(e.detail)}
      />
    );

    cy.get(DATA_TABLE_SELECTOR).invoke(
      "on",
      "icSortChange",
      cy.stub().as("sortChanged")
    );

    cy.spy(window.console, "log").as("spyWinConsoleLog");

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(2).click();

    cy.get("@sortChanged").should(HAVE_BEEN_CALLED_ONCE);
    cy.get(CONSOLE_LOG_SPY).should(HAVE_BEEN_CALLED_WITH, {
      columnName: "age",
      sorted: "ascending",
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(1).click();
    cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(1).click();

    cy.get("@sortChanged").should(HAVE_CALL_COUNT, 3);
    cy.get(CONSOLE_LOG_SPY).should(HAVE_BEEN_CALLED_WITH, {
      columnName: "lastName",
      sorted: "descending",
    });
  });

  context("which uses action elements", () => {
    const mountTableWithSlottedActionElement = (onClick?: () => void) => {
      mount(
        <IcDataTable
          caption="Slotted Action Element"
          columns={COLS}
          data={DATA}
        >
          <div slot="firstName-0-action-element" style={{ display: "flex" }}>
            <IcButton
              variant="icon"
              size="small"
              onClick={onClick}
              aria-label="Download data"
              data-testid="download-button"
            >
              <SlottedSVG path={mdiDownload} viewBox="0 0 24 24" />
            </IcButton>
            <IcButton
              variant="icon"
              size="small"
              onClick={onClick}
              aria-label="Call phone"
              data-testid="cellphone-button"
            >
              <SlottedSVG path={mdiCellphone} viewBox="0 0 24 24" />
            </IcButton>
            <IcButton
              variant="icon"
              size="small"
              onClick={onClick}
              aria-label="Copy data"
              data-testid="copy-button"
            >
              <SlottedSVG path={mdiContentCopy} viewBox="0 0 24 24" />
            </IcButton>
          </div>
        </IcDataTable>
      );
    };

    // Can be re-enabled once snapshots have been generated
    it.skip("should render an element in the table cell if the correct slot is used", () => {
      mountTableWithSlottedActionElement();

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "td")
        .eq(0)
        .find("span")
        .should(HAVE_CLASS, ACTION_ELEMENT)
        .find("slot")
        .should(HAVE_ATTR, "name", "firstName-0-action-element");

      cy.checkA11yWithWait(undefined, 300);

      cy.compareSnapshot({
        name: "/slotted-action-elements",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.039),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should work with a passed in onClick", () => {
      const onClickStub = cy.stub();
      mountTableWithSlottedActionElement(onClickStub);

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get('[data-testid="download-button"]').click();
      cy.get('[data-testid="cellphone-button"]').click();
      cy.get('[data-testid="copy-button"]').click();
      cy.then(() => {
        expect(onClickStub).to.be.calledThrice;
      });
    });

    // Can be re-enabled once snapshots have been generated
    it.skip("should show tooltips on action elements", () => {
      mountTableWithSlottedActionElement();

      cy.checkHydrated(DATA_TABLE_SELECTOR);
      cy.get('[data-testid="copy-button"]').shadow().find("button").realHover();

      cy.checkA11yWithWait(undefined, 1000);

      cy.compareSnapshot({
        name: "/slotted-action-elements-tooltip",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });

      cy.get("body").realHover({ position: "bottomLeft" }); // Removes hover from upcoming tests, to not trigger the hover state unintentionally
    });

    it("should not render an element in the table cell if the slot is not used", () => {
      mount(
        <IcDataTable
          columns={COLS}
          data={DATA}
          caption="Data tables"
        ></IcDataTable>
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "td")
        .eq(1)
        .find("span")
        .should(NOT_EXIST);
    });

    it("should apply styling to the cell container if an action element is present in the cell", () => {
      mountTableWithSlottedActionElement();

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "td")
        .eq(0)
        .find("div")
        .eq(0)
        .should(HAVE_CLASS, "cell-grid-wrapper")
        .should(HAVE_CSS, "grid-template-columns", "108.797px 80px");

      cy.findShadowEl(DATA_TABLE_SELECTOR, "span")
        .should(HAVE_CLASS, ACTION_ELEMENT)
        .should(HAVE_CSS, "justify-content", "right");
    });
  });

  it("should render empty data values", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA_WITH_EMPTY_VALUES}
        caption="Data Table with empty data"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/empty-data-values",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.018),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render a backdrop with circular loading indicator when loadingOption.overlay is set to true", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA}
        caption="Data tables"
        loadingOptions={{
          overlay: true,
        }}
      />
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "loading", true);

    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_OVERLAY_SELECTOR).should(
      BE_VISIBLE
    );
    cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody").should(BE_VISIBLE);
    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR)
      .shadow()
      .find(LOADING_INDICATOR_OUTER_SELECTOR)
      .should(BE_VISIBLE);

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "data", LONG_DATA);

    cy.wait(1000);

    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_OVERLAY_SELECTOR).should(
      "be.not.exist"
    );
    cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody").should(BE_VISIBLE);
    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR).should(
      NOT_EXIST
    );
  });

  it("should not render an overlay with circular loading indicator when loadingOption.overlay is set to false", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA}
        caption="Data tables"
        loadingOptions={{
          overlay: false,
        }}
      />
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "loading", true);

    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_OVERLAY_SELECTOR).should(
      NOT_EXIST
    );
    cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody").should(NOT_EXIST);
    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR)
      .shadow()
      .find(LOADING_INDICATOR_OUTER_SELECTOR)
      .should(BE_VISIBLE);
  });

  it("should render an overlay with circular loading indicator when loadingOption.overlay is set to true and no data is set", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={[]}
        caption="Data tables"
        loadingOptions={{
          overlay: true,
        }}
      />
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "loading", true);

    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_OVERLAY_SELECTOR).should(
      BE_VISIBLE
    );
    cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody").should(NOT_EXIST);
    cy.findShadowEl(DATA_TABLE_SELECTOR, EMPTY_STATE).should(BE_VISIBLE);
    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR)
      .shadow()
      .find(LOADING_INDICATOR_OUTER_SELECTOR)
      .should(BE_VISIBLE);

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "data", LONG_DATA);

    cy.wait(1000);

    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_OVERLAY_SELECTOR).should(
      NOT_EXIST
    );
    cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody").should(BE_VISIBLE);
    cy.findShadowEl(DATA_TABLE_SELECTOR, EMPTY_STATE).should(NOT_EXIST);
    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR).should(
      NOT_EXIST
    );
  });

  it("should render different slotted content when changing page", () => {
    const clonedData = JSON.parse(
      JSON.stringify(DATA_REACT_ELEMENTS_PAGINATION)
    );
    const nextData = [...clonedData];
    mount(
      <IcDataTable
        columns={COLS_ELEMENTS_SINGLE_ACTION}
        data={nextData}
        caption="Data tables"
        showPagination
        paginationBarOptions={{
          itemsPerPageOptions: [
            { label: "5", value: "5" },
            { label: "10", value: "10" },
          ],
          showItemsPerPageControl: true,
          selectedItemsPerPage: 5,
        }}
      >
        {nextData.map((_, index) => (
          <IcButton
            key={`actions-${index}`}
            slot={`actions-${index}`}
            onClick={() => console.log(`${index + 1}`)}
          >
            {index + 1}
          </IcButton>
        ))}
      </IcDataTable>
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR)
      .find(IC_BUTTON_SELECTOR)
      .eq(0)
      .should(HAVE_TEXT, "1")
      .should(BE_VISIBLE);

    cy.get(DATA_TABLE_SELECTOR)
      .find(NEXT_PAGE_BUTTON_ID, { includeShadowDom: true })
      .click();

    cy.get(DATA_TABLE_SELECTOR)
      .find(IC_BUTTON_SELECTOR)
      .eq(0)
      .should(HAVE_TEXT, "1")
      .should(NOT_BE_VISIBLE);

    cy.get(DATA_TABLE_SELECTOR)
      .find(IC_BUTTON_SELECTOR)
      .eq(5)
      .should(HAVE_TEXT, "6")
      .should(BE_VISIBLE);
  });
});

describe("IcDataTables with IcPaginationBar", () => {
  beforeEach(() => {
    cy.injectAxe();
    setDatableTestViewport();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render with pagination", () => {
    mount(
      <IcDataTable
        columns={LONG_COLS}
        data={LONG_DATA}
        showPagination
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/pagination",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.151),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should change page when the pagination items are clicked", () => {
    mount(
      <IcDataTable
        caption="Data tables"
        columns={LONG_COLS}
        data={LONG_DATA}
        showPagination
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR)
      .find("ic-pagination-item", { includeShadowDom: true })
      .find(TYPOGRAPHY_SELECTOR, { includeShadowDom: true })
      .should(HAVE_TEXT, "Page 1");

    cy.get(DATA_TABLE_SELECTOR)
      .find(NEXT_PAGE_BUTTON_ID, { includeShadowDom: true })
      .click();

    cy.get(DATA_TABLE_SELECTOR)
      .find("ic-pagination-item", { includeShadowDom: true })
      .find(TYPOGRAPHY_SELECTOR, { includeShadowDom: true })
      .should(HAVE_TEXT, "Page 2");
  });

  it("should test changing pagination bar props after initial load", () => {
    const defaultPaginationBarOptions: IcPaginationBarOptions = {
      itemsPerPageOptions: [
        { label: "10", value: "10" },
        { label: "25", value: "25" },
        { label: "50", value: "50" },
      ],
      rangeLabelType: "page",
      type: "simple",
      showItemsPerPageControl: true,
      showGoToPageControl: true,
      alignment: "right",
      itemLabel: "Item",
      pageLabel: "Page",
      hideRangeLabel: false,
      hideAllFromItemsPerPage: true,
    };

    mount(
      <IcDataTable
        columns={LONG_COLS}
        data={LONG_DATA}
        showPagination
        caption="Data Tables"
        paginationBarOptions={defaultPaginationBarOptions}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();

    cy.wait(500);

    cy.compareSnapshot({
      name: "/pagination-uncontrolled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.151),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });

    const newPaginationBarOptions: IcPaginationBarOptions = {
      itemsPerPageOptions: [{ label: "5", value: "5" }],
      rangeLabelType: "data",
      type: "complex",
      showItemsPerPageControl: false,
      showGoToPageControl: false,
      alignment: "left",
      itemLabel: "Row",
      pageLabel: "Screen",
      hideRangeLabel: true,
      hideAllFromItemsPerPage: true,
    };

    cy.get(DATA_TABLE_SELECTOR)
      .invoke("prop", "paginationBarOptions", newPaginationBarOptions)
      .then(() => {
        cy.wait(100);
        cy.get(DATA_TABLE_SELECTOR)
          .find(PAGINATION_BAR_SELECTOR, { includeShadowDom: true })
          .invoke("prop", "itemsPerPageOptions")
          .then((itemsPerPageOptions) => {
            expect(itemsPerPageOptions.length).to.equal(1);
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find(PAGINATION_BAR_SELECTOR, { includeShadowDom: true })
          .invoke("prop", "rangeLabelType")
          .then((rangeLabelType) => {
            expect(rangeLabelType).to.equal("data");
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find(PAGINATION_BAR_SELECTOR, { includeShadowDom: true })
          .invoke("prop", "type")
          .then((type) => {
            expect(type).to.equal("complex");
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find(PAGINATION_BAR_SELECTOR, { includeShadowDom: true })
          .invoke("prop", "showItemsPerPageControl")
          .then((showItemsPerPageControl) => {
            expect(showItemsPerPageControl).to.be.false;
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find(PAGINATION_BAR_SELECTOR, { includeShadowDom: true })
          .invoke("prop", "showGoToPageControl")
          .then((showGoToPageControl) => {
            expect(showGoToPageControl).to.be.false;
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find(PAGINATION_BAR_SELECTOR, { includeShadowDom: true })
          .invoke("prop", "alignment")
          .then((alignment) => {
            expect(alignment).to.equal("left");
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find(PAGINATION_BAR_SELECTOR, { includeShadowDom: true })
          .invoke("prop", "itemLabel")
          .then((itemLabel) => {
            expect(itemLabel).to.equal("Row");
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find(PAGINATION_BAR_SELECTOR, { includeShadowDom: true })
          .invoke("prop", "pageLabel")
          .then((pageLabel) => {
            expect(pageLabel).to.equal("Screen");
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find(PAGINATION_BAR_SELECTOR, { includeShadowDom: true })
          .invoke("prop", "hideRangeLabel")
          .then((hideRangeLabel) => {
            expect(hideRangeLabel).to.be.true;
          });
      });
  });

  it("should render a select menu above the pagination bar", () => {
    mount(<PaginationDataTable />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.get("ic-select").eq(1).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/pagination-with-select",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render a popover menu above the pagination bar", () => {
    mount(<DataTableWithPopover />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.get(DATA_TABLE_SELECTOR).find("div").eq(4).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/pagination-with-popover",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});

describe("IcDataTable with truncation", () => {
  const defaultPaginationBarOptions: IcPaginationBarOptions = {
    itemsPerPageOptions: [
      { label: "10", value: "10" },
      { label: "25", value: "25" },
      { label: "50", value: "50" },
    ],
    rangeLabelType: "page",
    type: "simple",
    showItemsPerPageControl: true,
    showGoToPageControl: true,
    alignment: "right",
    itemLabel: "Item",
    pageLabel: "Page",
    hideRangeLabel: false,
  };

  beforeEach(() => {
    cy.injectAxe();
    setDatableTestViewport();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  describe("tooltip truncation", () => {
    // Unable to test hover state
    it("renders tooltip truncation", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr")
        .eq(0)
        .find(TABLE_CELL_SELECTOR)
        .eq(4)
        .find(TOOLTIP_SELECTOR)
        .should(HAVE_ATTR, "label", LONG_DATA_VALUES[0].jobTitle);

      cy.checkA11yWithWait();

      cy.compareSnapshot({
        name: "/tooltip-truncation",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.035),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should truncate long single line text", () => {
      mount(
        <IcDataTable
          columns={COLS}
          data={LONG_TEXT}
          caption="Data Tables"
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr").each(($row) => {
        cy.wrap($row).find(".table-cell:first-child ic-tooltip");
      });
    });

    it("should remove truncation when row height is big enough to display all text when dynamically set", () => {
      mount(
        <>
          <IcDataTable
            columns={COLS}
            data={DATA}
            caption="Data Tables"
            truncationPattern={TRUNCATION_TOOLTIP}
            globalRowHeight={40}
          />
          <IcButton
            onClick={() =>
              document
                .querySelector(DATA_TABLE_SELECTOR)
                ?.setAttribute(GLOBAL_ROW_HEIGHT, "150")
            }
          >
            Set global row height
          </IcButton>
        </>
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(IC_BUTTON_SELECTOR).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
          .should(HAVE_ATTR, "style", "--ic-line-clamp: 0");
      });
    });

    it("renders tooltip truncation on sorted data", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_TOOLTIP}
          sortable
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(4).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .last()
        .find(`${LAST_CELL_SELECTOR} ic-tooltip`)
        .should(HAVE_LENGTH, 1);

      cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(4).click();
      cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(4).click();
      cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(2).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .last()
        .find(`${LAST_CELL_SELECTOR} ic-tooltip`)
        .should(HAVE_LENGTH, 1)
        .should(HAVE_ATTR, "label", LONG_DATA_VALUES[2].jobTitle);

      cy.compareSnapshot({
        name: "/tooltip-truncation-sort",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.041),

        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("it should display all data on multiple lines when large global row height is set with tooltips removed", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          globalRowHeight={150}
          truncationPattern={TRUNCATION_TOOLTIP}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.wait(250);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_SELECTOR)
          .find(TOOLTIP_SELECTOR)
          .should(NOT_EXIST);
      });

      cy.compareSnapshot({
        name: "/tooltip-truncation-rowheight", // cspell:disable-line
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.044),
      });
    });

    it("should reset tooltip truncation after row height has been reset", () => {
      mount(
        <>
          <IcDataTable
            columns={COLUMNS_NO_TEXT_WRAP}
            data={LONG_DATA_VALUES}
            caption="Data Tables"
            truncationPattern={TRUNCATION_TOOLTIP}
            globalRowHeight={40}
          />
          <IcButton
            onClick={() =>
              document.querySelector(DATA_TABLE_SELECTOR)?.resetRowHeights(40)
            }
          >
            Reset
          </IcButton>
        </>
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(IC_BUTTON_SELECTOR).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr")
        .eq(0)
        .find(TABLE_CELL_SELECTOR)
        .eq(4)
        .find(TOOLTIP_SELECTOR)
        .should(HAVE_ATTR, "label", LONG_DATA_VALUES[0].jobTitle);

      cy.compareSnapshot({
        name: "/tooltip-truncation-reset-rowheight", // cspell:disable-line
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.036),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });
    it("should re-evaluate tooltip truncation if data prop is updated", () => {
      mount(
        <IcDataTable
          columns={COLS}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(DATA_TABLE_SELECTOR).invoke("prop", "data", DATA);

      cy.wait(500);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr")
        .filter(":lt(3)")
        .each(($row) => {
          cy.wrap($row).find(`${LAST_CELL_SELECTOR} ic-tooltip`);
        });
    });

    it("should display more truncated data when scrolling down table", () => {
      mount(
        <IcDataTable
          columns={LONG_COLS}
          data={LONG_DATA}
          caption="Data Tables"
          truncationPattern={TRUNCATION_TOOLTIP}
          style={{ height: "250px" }}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.wait(250);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row-container").scrollTo(
        0,
        250
      );

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(
        ($row, i) => {
          if (i > 5 && i < 11) {
            cy.wrap($row).find(LAST_CELL_SELECTOR).find(TOOLTIP_SELECTOR);
          }
        }
      );
    });

    it("should removed tooltip truncation if table cell is wide enough to display all content", () => {
      // Ideally, it would be good to test the behaviour once the viewport size has decreased
      // however, it does not seem possible to trigger the ResizeObserver in Cypress tests
      const newColumns = () => {
        return COLS.filter(
          (col) => col.key === "jobTitle" || col.key === "address"
        );
      };

      const newData = () => {
        return DATA.map((d) => ({
          jobTitle: d.jobTitle,
          address: d.address,
        }));
      };

      mount(
        <IcDataTable
          columns={newColumns()}
          data={newData()}
          caption="Data Tables"
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_SELECTOR)
          .find(TOOLTIP_SELECTOR)
          .should(NOT_EXIST);
      });

      cy.compareSnapshot({
        name: "/tooltip-truncation-wide-table",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.032),
      });
    });

    it("should render tooltip truncation when table is in dense", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          density="dense"
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr")
        .filter(":lt(3)")
        .each(($row) => {
          cy.wrap($row).find(LAST_CELL_SELECTOR).find(TOOLTIP_SELECTOR);
        });

      cy.compareSnapshot({
        name: "/tooltip-truncation-dense",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.039),
      });
    });

    it("should render tooltip truncation when table is in spacious", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          density="spacious"
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr")
        .filter(":lt(3)")
        .each(($row) => {
          cy.wrap($row).find(LAST_CELL_SELECTOR).find(TOOLTIP_SELECTOR);
        });

      cy.compareSnapshot({
        name: "/tooltip-truncation-spacious",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.037),
      });
    });

    it("should render tooltip truncation with data tables pagination", () => {
      mount(
        <IcDataTable
          columns={LONG_COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
          paginationBarOptions={defaultPaginationBarOptions}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(PAGINATION_SELECTOR)
        .shadow()
        .find(NEXT_PAGE_BUTTON_ID)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row).find(TOOLTIP_SELECTOR);
      });
    });

    it("should render tooltip truncation using go to page pagination functionality", () => {
      mount(
        <IcDataTable
          columns={LONG_COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
          paginationBarOptions={defaultPaginationBarOptions}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(PAGINATION_GO_TO_PAGE_TEXT_FIELD_SELECTOR)
        .shadow()
        .find("input")
        .type("2");
      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(PAGINATION_GO_TO_PAGE_BUTTON_SELECTOR)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row).find(TOOLTIP_SELECTOR);
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(PAGINATION_GO_TO_PAGE_TEXT_FIELD_SELECTOR)
        .shadow()
        .find("input")
        .type("1");
      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(PAGINATION_GO_TO_PAGE_BUTTON_SELECTOR)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row).find(TOOLTIP_SELECTOR);
      });
    });

    it("should render show hide truncation using items per page pagination functionality", () => {
      const nextDefaultPaginationBarOptions: IcPaginationBarOptions = {
        ...defaultPaginationBarOptions,
        itemsPerPageOptions: [
          { label: "5", value: "5" },
          { label: "10", value: "10" },
          { label: "15", value: "15" },
        ],
      };

      mount(
        <IcDataTable
          columns={LONG_COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
          paginationBarOptions={nextDefaultPaginationBarOptions}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(ITEMS_PER_PAGE_SELECTOR)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(ITEMS_PER_PAGE_SELECTOR)
        .shadow()
        .find("li")
        .eq(1)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row).find(TOOLTIP_SELECTOR);
      });
    });

    it("should keep addresses truncated when switching between items per page and go to page buttons", () => {
      const nextDefaultPaginationBarOptions: IcPaginationBarOptions = {
        ...defaultPaginationBarOptions,
        itemsPerPageOptions: [
          { label: "5", value: "5" },
          { label: "10", value: "10" },
          { label: "15", value: "15" },
        ],
      };

      mount(
        <IcDataTable
          columns={LONG_COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
          paginationBarOptions={nextDefaultPaginationBarOptions}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(ITEMS_PER_PAGE_SELECTOR)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(ITEMS_PER_PAGE_SELECTOR)
        .shadow()
        .find("li")
        .eq(1)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(ITEMS_PER_PAGE_SELECTOR)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(ITEMS_PER_PAGE_SELECTOR)
        .shadow()
        .find("li")
        .eq(2)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(PAGINATION_SELECTOR)
        .shadow()
        .find(NEXT_PAGE_BUTTON_ID)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(PAGINATION_SELECTOR)
        .shadow()
        .find("#previous-page-button")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(0)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .should(HAVE_ATTR, "style", "--ic-line-clamp: 1");

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row).find(LAST_CELL_SELECTOR).find(TOOLTIP_SELECTOR);
      });
    });

    it("should render truncation correctly with custom icon", () => {
      mount(
        <IcDataTable
          columns={ICON_COLS}
          data={ICON_DATA_LONG_VALUES}
          caption="Data Tables"
          showPagination
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.wait(350);

      cy.compareSnapshot({
        name: "/tooltip-truncation-custom-icon",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.028),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should render truncation on all items once pagination is showing all items and sorted", () => {
      mount(
        <IcDataTable
          columns={COLS}
          data={VERY_LONG_DATA(100)}
          caption="Data Tables"
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
          showPagination
          sortable
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(ITEMS_PER_PAGE_SELECTOR)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(ITEMS_PER_PAGE_SELECTOR)
        .shadow()
        .find("li")
        .eq(3)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(0).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(0).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ODD_TABLE_ROWS_SELECTOR)
        .filter(":gt(4)")
        .filter(":lt(11)")
        .each(($row) => {
          cy.wrap($row).find(LAST_CELL_SELECTOR).find(TOOLTIP_SELECTOR);
        });

      cy.findShadowEl(DATA_TABLE_SELECTOR, ODD_TABLE_ROWS_SELECTOR)
        .filter(":gt(4)")
        .filter(":lt(11)")
        .each(($row) => {
          cy.wrap($row)
            .find(TABLE_CELL_TYPOGRAPHY_SELECTOR)
            .should(HAVE_ATTR, "style", "--ic-line-clamp: 1");
        });
    });
  });

  describe("see more/see less truncation", () => {
    it("renders typography link truncation", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(0)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .should(HAVE_TEXT, LONG_DATA_VALUES[0].jobTitle);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(0)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .should(HAVE_TEXT, SEE_MORE);

      cy.checkA11yWithWait();

      cy.compareSnapshot({
        name: "/show-hide-truncation-hide",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.038),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(0)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(0)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .should(HAVE_TEXT, SEE_LESS);

      cy.compareSnapshot({
        name: "/show-hide-truncation-show",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.04),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should render see more / see less focus underline correctly", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(0)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .focus();

      cy.compareSnapshot({
        name: "/show-hide-truncation-focus-hover-state",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.038),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should re-render show hide truncation on table sort", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          sortable
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(1).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(0)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .should(HAVE_TEXT, "Junior Tester");

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(0)
        .find(TABLE_CELL_SELECTOR)
        .eq(2)
        .find(TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .should(HAVE_TEXT, SEE_MORE);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(1)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .should(HAVE_TEXT, SEE_MORE);
    });

    it("should render full data over multiple lines and show/hide link should be removed", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          globalRowHeight={150}
          truncationPattern={TRUNCATION_SHOW_HIDE}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.wait(250);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
          .shadow()
          .find(BUTTON_SELECTOR)
          .should(NOT_EXIST);
      });

      cy.compareSnapshot({
        name: "/show-hide-truncation-row-height",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
      });
    });

    it("should remove truncation when row height is big enough to display all text when dynamically set", () => {
      mount(
        <>
          <IcDataTable
            columns={COLS}
            data={DATA}
            caption="Data Tables"
            truncationPattern={TRUNCATION_SHOW_HIDE}
            globalRowHeight={40}
          />
          <IcButton
            onClick={() =>
              document
                .querySelector(DATA_TABLE_SELECTOR)
                ?.setAttribute(GLOBAL_ROW_HEIGHT, "150")
            }
          >
            Set global row height
          </IcButton>
        </>
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(IC_BUTTON_SELECTOR).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
          .should(NOT_HAVE_ATTR, "max-lines");
      });
    });

    it("should remove truncation when row height is big enough to display text when dynamically set and truncation is expanded", () => {
      cy.viewport(1500, 768);
      mount(
        <>
          <IcDataTable
            columns={LONG_COLS}
            data={LONG_DATA}
            caption="Data Tables"
            truncationPattern={TRUNCATION_SHOW_HIDE}
            globalRowHeight={40}
          />
          <IcButton
            onClick={() =>
              document
                .querySelector(DATA_TABLE_SELECTOR)
                ?.setAttribute(GLOBAL_ROW_HEIGHT, "80")
            }
          >
            Set global row height
          </IcButton>
        </>
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(2)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .click();

      cy.get(IC_BUTTON_SELECTOR).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
          .should(NOT_HAVE_ATTR, "max-lines");
      });
    });

    it("should re-render show hide data truncation when row height is reset", () => {
      mount(
        <>
          <IcDataTable
            columns={LONG_COLS}
            data={LONG_DATA}
            caption="Data Tables"
            truncationPattern={TRUNCATION_SHOW_HIDE}
            globalRowHeight={150}
          />
          <IcButton
            onClick={() =>
              document.querySelector(DATA_TABLE_SELECTOR)?.resetRowHeights(40)
            }
          >
            Reset
          </IcButton>
        </>
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(IC_BUTTON_SELECTOR).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .filter(":lt(2)")
        .each(($row) => {
          cy.wrap($row)
            .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
            .shadow()
            .find(BUTTON_SELECTOR)
            .should(HAVE_TEXT, SEE_MORE);
        });
    });

    it("should add show hide truncation on updated data object", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.wait(250);

      cy.get(DATA_TABLE_SELECTOR).invoke(
        "prop",
        "data",
        LONG_DATA_VALUES_UPDATE
      );

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(0)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .should(NOT_EXIST);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(2)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .should(HAVE_TEXT, SEE_MORE);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(2)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .click();

      cy.compareSnapshot({
        name: "/show-hide-truncation-data-update",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.028),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should display show hide truncation when scrolling down table", () => {
      mount(
        <IcDataTable
          columns={LONG_COLS}
          data={LONG_DATA}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          style={{ height: "500px" }}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row-container").scrollTo(
        0,
        250
      );

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(
        ($row, i) => {
          if (i > 5 && i < 11) {
            cy.wrap($row)
              .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
              .shadow()
              .find(BUTTON_SELECTOR)
              .should(HAVE_TEXT, SEE_MORE);
          }
        }
      );

      cy.compareSnapshot({
        name: "/show-hide-truncation-scroll",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.111),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    const newColumns = () => {
      return COLUMNS_NO_TEXT_WRAP.filter(
        (col) => col.key === "department" || col.key === "jobTitle"
      );
    };

    const newData = () => {
      return LONG_DATA_VALUES.map((d) => ({
        department: d.department,
        jobTitle: d.jobTitle,
      }));
    };

    it("should remove show hide truncation if table cell is wide enough to display all content", () => {
      cy.viewport(1400, 768);

      mount(
        <IcDataTable
          columns={newColumns()}
          data={newData()}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.wait(250);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
          .shadow()
          .find(BUTTON_SELECTOR)
          .should(NOT_EXIST);
      });
    });

    it("should increase table width from small to make sure truncation is still displayed", () => {
      mount(
        <IcDataTable
          columns={newColumns()}
          data={newData()}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .filter(":gt(0)")
        .filter(":lt(3)")
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .click({ multiple: true });

      cy.viewport(1250, 768);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(1)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .should(HAVE_TEXT, SEE_LESS);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(2)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .should(HAVE_TEXT, SEE_LESS);

      cy.viewport(2100, 768);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(1)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .should(NOT_EXIST);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
        .eq(2)
        .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
        .shadow()
        .find(BUTTON_SELECTOR)
        .should(NOT_EXIST);
    });

    it("should render show hide truncation when data table is set to dense", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          density="dense"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "/show-hide-truncation-dense",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should render show hide truncation when data table is set to spacious", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          density="spacious"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "/show-hide-truncation-spacious",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should render show hide truncation with data table pagination", () => {
      const defaultPaginationBarOptions: IcPaginationBarOptions = {
        itemsPerPageOptions: [
          { label: "10", value: "10" },
          { label: "25", value: "25" },
          { label: "50", value: "50" },
        ],
        rangeLabelType: "page",
        type: "simple",
        showItemsPerPageControl: true,
        showGoToPageControl: true,
        alignment: "right",
        itemLabel: "Item",
        pageLabel: "Page",
        hideRangeLabel: false,
      };

      mount(
        <IcDataTable
          columns={LONG_COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern={TRUNCATION_SHOW_HIDE}
          paginationBarOptions={defaultPaginationBarOptions}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(PAGINATION_SELECTOR)
        .shadow()
        .find(NEXT_PAGE_BUTTON_ID)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
          .shadow()
          .find(BUTTON_SELECTOR)
          .should(HAVE_TEXT, SEE_MORE);
      });
    });
    it("should render show hide truncation using go to page pagination functionality", () => {
      mount(
        <IcDataTable
          columns={LONG_COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern={TRUNCATION_SHOW_HIDE}
          paginationBarOptions={defaultPaginationBarOptions}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(PAGINATION_GO_TO_PAGE_TEXT_FIELD_SELECTOR)
        .shadow()
        .find("input")
        .type("2");
      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(PAGINATION_GO_TO_PAGE_BUTTON_SELECTOR)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
          .shadow()
          .find(BUTTON_SELECTOR)
          .should(HAVE_TEXT, SEE_MORE);
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(PAGINATION_GO_TO_PAGE_TEXT_FIELD_SELECTOR)
        .shadow()
        .find("input")
        .type("1");
      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(PAGINATION_GO_TO_PAGE_BUTTON_SELECTOR)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
          .shadow()
          .find(BUTTON_SELECTOR)
          .should(HAVE_TEXT, SEE_MORE);
      });
    });

    it("should render show hide truncation using items per page pagination functionality", () => {
      const nextDefaultPaginationBarOptions: IcPaginationBarOptions = {
        ...defaultPaginationBarOptions,
        itemsPerPageOptions: [
          { label: "5", value: "5" },
          { label: "10", value: "10" },
          { label: "15", value: "15" },
        ],
      };

      mount(
        <IcDataTable
          columns={LONG_COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern={TRUNCATION_SHOW_HIDE}
          paginationBarOptions={nextDefaultPaginationBarOptions}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(ITEMS_PER_PAGE_SELECTOR)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(ITEMS_PER_PAGE_SELECTOR)
        .shadow()
        .find("li")
        .eq(1)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_TYPOGRAPHY_SELECTOR)
          .shadow()
          .find(BUTTON_SELECTOR)
          .should(HAVE_TEXT, SEE_MORE);
      });
    });

    it("should render truncation correctly with custom icon", () => {
      mount(
        <IcDataTable
          columns={ICON_COLS}
          data={ICON_DATA_LONG_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "/show-hide-truncation-custom-icon",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.024),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should render show / hide on multiple lines for small tables", () => {
      cy.viewport(300, 750);

      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "/show-hide-truncation-link-multiline",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.07),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should render truncation on all items once pagination is showing all items and sorted", () => {
      mount(
        <IcDataTable
          columns={COLS}
          data={VERY_LONG_DATA(100)}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          globalRowHeight={40}
          showPagination
          sortable
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(ITEMS_PER_PAGE_SELECTOR)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
        .shadow()
        .find(ITEMS_PER_PAGE_SELECTOR)
        .shadow()
        .find("li")
        .eq(3)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(0).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, SORT_BUTTON_SELECTOR).eq(0).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ODD_TABLE_ROWS_SELECTOR)
        .filter(":gt(4)")
        .filter(":lt(11)")
        .each(($row) => {
          cy.wrap($row)
            .find(TABLE_CELL_TYPOGRAPHY_SELECTOR)
            .shadow()
            .find(BUTTON_SELECTOR)
            .should(HAVE_TEXT, SEE_MORE);
        });
    });

    it("should render the truncation correctly when setting truncation > setting height and updating data", () => {
      const TruncationDataTable = () => {
        const [truncationPattern, setTruncationPattern] =
          useState<IcDataTableTruncationTypes>(undefined);
        const [rowHeight, setRowHeight] = useState<number>();
        const [updatedRows, setUpdatedRows] = useState<number>(5);
        const handleTruncationClick = (
          truncationPattern: IcDataTableTruncationTypes
        ) => {
          setTruncationPattern(truncationPattern);
        };
        const handleRowHeight = (height: number) => {
          setRowHeight(height);
        };
        const handleDataUpdate = (rows: number) => {
          setUpdatedRows(rows);
        };
        return (
          <>
            <IcDataTable
              columns={COLS}
              data={VERY_LONG_DATA(updatedRows)}
              caption="Data Tables"
              truncationPattern={truncationPattern}
              globalRowHeight={rowHeight}
              showPagination
            />
            <IcButton
              onClick={() => handleTruncationClick(TRUNCATION_SHOW_HIDE)}
              class="truncation"
            >
              Set show/hide truncation
            </IcButton>
            <IcButton onClick={() => handleRowHeight(40)} class="row-height">
              Set row height: 40
            </IcButton>
            <IcButton onClick={() => handleDataUpdate(200)} class="update-data">
              Update data: 200
            </IcButton>
          </>
        );
      };

      mount(<TruncationDataTable />);

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(".truncation").click();

      cy.get(".row-height").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, EVEN_TABLE_ROWS_SELECTOR).each(
        ($row) => {
          cy.wrap($row)
            .find(TABLE_CELL_TYPOGRAPHY_SELECTOR)
            .shadow()
            .find(BUTTON_SELECTOR)
            .should(HAVE_TEXT, SEE_MORE);
        }
      );

      cy.get(".update-data").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, EVEN_TABLE_ROWS_SELECTOR).each(
        ($row) => {
          cy.wrap($row)
            .find(TABLE_CELL_TYPOGRAPHY_SELECTOR)
            .shadow()
            .find(BUTTON_SELECTOR)
            .should(HAVE_TEXT, SEE_MORE);
        }
      );

      cy.findShadowEl(DATA_TABLE_SELECTOR, EVEN_TABLE_ROWS_SELECTOR).each(
        ($row) => {
          cy.wrap($row).find(TABLE_CELL_TOOLTIP_SELECTOR).should(NOT_EXIST);
        }
      );
    });

    it("should render the truncation when switching between tooltip and show hide truncation", () => {
      const TruncationDataTable = () => {
        const [truncationPattern, setTruncationPattern] =
          useState<IcDataTableTruncationTypes>(undefined);
        const [rowHeight, setRowHeight] = useState<number>();
        const handleTruncationClick = (
          truncationPattern: IcDataTableTruncationTypes
        ) => {
          setTruncationPattern(truncationPattern);
        };
        const handleRowHeight = (height: number) => {
          setRowHeight(height);
        };
        return (
          <>
            <IcDataTable
              columns={COLS}
              data={VERY_LONG_DATA(5)}
              caption="Data Tables"
              truncationPattern={truncationPattern}
              globalRowHeight={rowHeight}
              showPagination
            />
            <IcButton
              onClick={() => handleTruncationClick(TRUNCATION_SHOW_HIDE)}
              class="truncation-show-hide"
            >
              Set show/hide truncation
            </IcButton>
            <IcButton
              onClick={() => handleTruncationClick(TRUNCATION_TOOLTIP)}
              class="truncation-tooltip"
            >
              Set tooltip truncation
            </IcButton>
            <IcButton onClick={() => handleRowHeight(40)} class="row-height">
              Set row height: 40
            </IcButton>
          </>
        );
      };

      mount(<TruncationDataTable />);

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(TRUNCATION_SHOW_HIDE_SELECTOR).click();

      cy.get(".row-height").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, EVEN_TABLE_ROWS_SELECTOR).each(
        ($row) => {
          cy.wrap($row)
            .find(TABLE_CELL_TYPOGRAPHY_SELECTOR)
            .shadow()
            .find(BUTTON_SELECTOR)
            .should(HAVE_TEXT, SEE_MORE);
        }
      );

      cy.get(TRUNCATION_TOOLTIP_SELECTOR).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, EVEN_TABLE_ROWS_SELECTOR).each(
        ($row) => {
          cy.wrap($row).find(TABLE_CELL_TOOLTIP_SELECTOR);
        }
      );

      cy.get(TRUNCATION_SHOW_HIDE_SELECTOR).click();

      cy.wait(250);

      cy.compareSnapshot({
        name: "/show-hide-truncation-toggle",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.05),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, EVEN_TABLE_ROWS_SELECTOR).each(
        ($row) => {
          cy.wrap($row)
            .find(TABLE_CELL_TYPOGRAPHY_SELECTOR)
            .shadow()
            .find(BUTTON_SELECTOR)
            .should(HAVE_TEXT, SEE_MORE);
        }
      );

      cy.findShadowEl(DATA_TABLE_SELECTOR, EVEN_TABLE_ROWS_SELECTOR).each(
        ($row) => {
          cy.wrap($row)
            .find(TABLE_CELL_TYPOGRAPHY_SELECTOR)
            .shadow()
            .find(BUTTON_SELECTOR)
            .should(HAVE_TEXT, SEE_MORE);
        }
      );

      cy.findShadowEl(DATA_TABLE_SELECTOR, EVEN_TABLE_ROWS_SELECTOR).each(
        ($row) => {
          cy.wrap($row).find(TABLE_CELL_TOOLTIP_SELECTOR).should(NOT_EXIST);
        }
      );
    });

    it("should revert all row heights back to auto after show-hide and different row heights have been set", () => {
      const TruncationDataTable = () => {
        const [truncationPattern, setTruncationPattern] =
          useState<IcDataTableTruncationTypes>(undefined);
        const [rowHeight, setRowHeight] = useState<number | "auto">();
        const handleTruncationClick = (
          truncationPattern: IcDataTableTruncationTypes
        ) => {
          setTruncationPattern(truncationPattern);
        };
        const handleRowHeight = (height: number | "auto") => {
          setRowHeight(height);
        };
        return (
          <>
            <IcDataTable
              columns={COLS}
              data={VERY_LONG_DATA(5)}
              caption="Data Tables"
              truncationPattern={truncationPattern}
              globalRowHeight={rowHeight}
              showPagination
            />
            <IcButton
              onClick={() => handleTruncationClick(TRUNCATION_SHOW_HIDE)}
              class="truncation-show-hide"
            >
              Set show/hide truncation
            </IcButton>
            <IcButton onClick={() => handleRowHeight(40)} class="row-height-40">
              Set row height: 40
            </IcButton>
            <IcButton onClick={() => handleRowHeight(80)} class="row-height-80">
              Set row height: 80
            </IcButton>
            <IcButton
              onClick={() => handleRowHeight("auto")}
              class="row-height-auto"
            >
              Set row auto
            </IcButton>
          </>
        );
      };

      mount(<TruncationDataTable />);

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(TRUNCATION_SHOW_HIDE_SELECTOR).click();

      cy.wait(500).get(".row-height-40").click();
      cy.wait(500).get(".row-height-80").click();
      cy.wait(500).get(".row-height-auto").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(TABLE_CELL_TYPOGRAPHY_SELECTOR)
          .shadow()
          .find(BUTTON_SELECTOR)
          .should(NOT_EXIST);
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_SELECTOR)
          .invoke("outerHeight")
          .should(EQUAL, 89);
      });
    });

    it("should display tooltip truncation after setting show-hide > row height 40 > tooltip", () => {
      const TruncationDataTable = () => {
        const [truncationPattern, setTruncationPattern] =
          useState<IcDataTableTruncationTypes>(undefined);
        const [rowHeight, setRowHeight] = useState<number | "auto">();
        const [updatedRows] = useState<number>(5);
        const handleTruncationClick = (
          truncationPattern: IcDataTableTruncationTypes
        ) => {
          setTruncationPattern(truncationPattern);
        };
        const handleRowHeight = (height: number | "auto") => {
          setRowHeight(height);
        };
        return (
          <>
            <IcDataTable
              columns={COLS}
              data={VERY_LONG_DATA(updatedRows)}
              caption="Data Tables"
              truncationPattern={truncationPattern}
              globalRowHeight={rowHeight}
              showPagination
            />
            <IcButton
              onClick={() => handleTruncationClick(TRUNCATION_SHOW_HIDE)}
              class="truncation-show-hide"
            >
              Set show/hide truncation
            </IcButton>
            <IcButton onClick={() => handleRowHeight(40)} class="row-height-40">
              Set row height: 40
            </IcButton>
            <IcButton
              onClick={() => handleTruncationClick(TRUNCATION_TOOLTIP)}
              class="truncation-tooltip"
            >
              Set tooltip truncation
            </IcButton>
          </>
        );
      };

      mount(<TruncationDataTable />);

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(TRUNCATION_SHOW_HIDE_SELECTOR).click();

      cy.wait(500).get(".row-height-40").click();
      cy.wait(500).get(TRUNCATION_TOOLTIP_SELECTOR).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(TABLE_CELL_TYPOGRAPHY_SELECTOR)
          .shadow()
          .find(BUTTON_SELECTOR)
          .should(NOT_EXIST);
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, EVEN_TABLE_ROWS_SELECTOR).each(
        ($row) => {
          cy.wrap($row).find(TABLE_CELL_TOOLTIP_SELECTOR);
        }
      );
    });

    it("should display tooltip truncation after setting show-hide > row height 80 > tooltip", () => {
      const TruncationDataTable = () => {
        const [truncationPattern, setTruncationPattern] =
          useState<IcDataTableTruncationTypes>(undefined);
        const [rowHeight, setRowHeight] = useState<number | "auto">();
        const [updatedRows] = useState<number>(5);
        const handleTruncationClick = (
          truncationPattern: IcDataTableTruncationTypes
        ) => {
          setTruncationPattern(truncationPattern);
        };
        const handleRowHeight = (height: number | "auto") => {
          setRowHeight(height);
        };
        return (
          <>
            <IcDataTable
              columns={COLS}
              data={VERY_LONG_DATA(updatedRows)}
              caption="Data Tables"
              truncationPattern={truncationPattern}
              globalRowHeight={rowHeight}
              showPagination
            />
            <IcButton
              onClick={() => handleTruncationClick(TRUNCATION_SHOW_HIDE)}
              class="truncation-show-hide"
            >
              Set show/hide truncation
            </IcButton>
            <IcButton onClick={() => handleRowHeight(80)} class="row-height-80">
              Set row height: 80
            </IcButton>
            <IcButton
              onClick={() => handleTruncationClick(TRUNCATION_TOOLTIP)}
              class="truncation-tooltip"
            >
              Set tooltip truncation
            </IcButton>
          </>
        );
      };

      mount(<TruncationDataTable />);

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(TRUNCATION_SHOW_HIDE_SELECTOR).click();

      cy.wait(500).get(".row-height-80").click();
      cy.wait(500).get(TRUNCATION_TOOLTIP_SELECTOR).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(TABLE_CELL_TYPOGRAPHY_SELECTOR)
          .shadow()
          .find(BUTTON_SELECTOR)
          .should(NOT_EXIST);
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, EVEN_TABLE_ROWS_SELECTOR).each(
        ($row) => {
          cy.wrap($row).find(TABLE_CELL_TOOLTIP_SELECTOR);
        }
      );
    });
  });

  describe("textWrap", () => {
    it("renders textWrap via columns with tooltip truncation", () => {
      mount(
        <IcDataTable
          columns={textWrapColumns()}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.checkA11yWithWait();

      cy.compareSnapshot({
        name: "/text-wrap-tooltip-truncation-column",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.049),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("renders textWrap via columns with show hide truncation", () => {
      mount(
        <IcDataTable
          columns={textWrapColumns()}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "/text-wrap-show-hide-truncation-column",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.05),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should textWrap a row with tooltip truncation set", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={textWrapRow()}
          caption="Data Tables"
          truncationPattern={TRUNCATION_TOOLTIP}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "/text-wrap-tooltip-truncation-rows",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.05),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should textWrap a row with show hide truncation set", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={textWrapRow()}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "/text-wrap-show-hide-truncation-rows",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.04),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should textWrap at the table cell level with tooltip truncation", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={textWrapCell()}
          caption="Data Tables"
          truncationPattern={TRUNCATION_TOOLTIP}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.wait(400);

      cy.compareSnapshot({
        name: "/text-wrap-tooltip-truncation-table-cell",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.037),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should textWrap at the table cell level with show hide truncation", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={textWrapCell()}
          caption="Data Tables"
          truncationPattern={TRUNCATION_SHOW_HIDE}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "/text-wrap-show-hide-truncation-table-cell",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.04),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });
  });
});

describe("IcDataTable table sizing and column width", () => {
  beforeEach(() => {
    cy.injectAxe();
    setDatableTestViewport();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should set the column width to the 200 when table width is 100%", () => {
    mount(
      <IcDataTable
        columns={singleColumnWidth("200px")}
        data={newData()}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 200);
    });
  });

  it("should set the column width to the correct % when table width is 100%", () => {
    mount(
      <IcDataTable
        columns={singleColumnWidth("25%")}
        data={newData()}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 256);
    });
  });

  it("should set the column width to the correct rem when table width is 100%", () => {
    mount(
      <IcDataTable
        columns={singleColumnWidth("12.5rem")}
        data={newData()}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 200);
    });
  });

  it("should set the column width to the correct px when table width is 500px", () => {
    mount(
      <IcDataTable
        columns={singleColumnWidth("200px")}
        data={newData()}
        caption="Data Tables"
        width="500px"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 200);
    });
  });

  it("should set the column width to the correct % when table width is 500px", () => {
    mount(
      <IcDataTable
        columns={singleColumnWidth("25%")}
        data={newData()}
        caption="Data Tables"
        width="500px"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 125);
    });
  });

  it("should set the column width to the correct rem when table width is 500px", () => {
    mount(
      <IcDataTable
        columns={singleColumnWidth("12.5rem")}
        data={newData()}
        caption="Data Tables"
        width="500px"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 200);
    });
  });

  it("should set 2 column width to the correct px when table width is 100%", () => {
    mount(
      <IcDataTable
        columns={multipleColumnWidth("200px", "100px")}
        data={newData()}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 200);
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(LAST_CELL_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 100);
    });
  });

  it("should set 2 column width to the correct % when table width is 100%", () => {
    mount(
      <IcDataTable
        columns={multipleColumnWidth("25%", "10%")}
        data={newData()}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 256);
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(LAST_CELL_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 102.390625);
    });
  });

  it("should set 2 column width to the correct rem when table width is 100%", () => {
    mount(
      <IcDataTable
        columns={multipleColumnWidth("12.5rem", "6.25rem")}
        data={newData()}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 200);
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(LAST_CELL_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 100);
    });
  });

  it("should set 2 column width to the correct px when table width is 500px", () => {
    mount(
      <IcDataTable
        columns={multipleColumnWidth("200px", "100px")}
        data={newData()}
        caption="Data Tables"
        width="500px"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 200);
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(LAST_CELL_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 100);
    });
  });

  it("should set 2 column width to the correct % when table width is 500px", () => {
    mount(
      <IcDataTable
        columns={multipleColumnWidth("25%", "10%")}
        data={newData()}
        caption="Data Tables"
        width="500px"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 125);
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(LAST_CELL_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 50);
    });
  });

  it("should set 2 column width to the correct rem when table width is 500px", () => {
    mount(
      <IcDataTable
        columns={multipleColumnWidth("12.5rem", "6.25rem")}
        data={newData()}
        caption="Data Tables"
        width="500px"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 200);
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(LAST_CELL_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 100);
    });
  });

  it("should display tooltip truncation on truncation column set with px", () => {
    mount(
      <IcDataTable
        caption="Basic Table"
        columns={singleColumnTruncationWidth("200px")}
        data={newData()}
        truncationPattern={TRUNCATION_TOOLTIP}
        globalRowHeight={40}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(".table-cell:nth-child(2) ic-tooltip");
  });

  it("should display show-hide truncation on truncation column set with px", () => {
    mount(
      <IcDataTable
        caption="Basic Table"
        columns={singleColumnTruncationWidth("200px")}
        data={newData()}
        truncationPattern={TRUNCATION_SHOW_HIDE}
        globalRowHeight={40}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(".table-cell:nth-child(2) ic-typography")
      .shadow()
      .find(BUTTON_SELECTOR)
      .should(HAVE_TEXT, SEE_MORE);
  });

  it("should display tooltip truncation on column when first column width set with px and table width set to 500px", () => {
    mount(
      <IcDataTable
        caption="Basic Table"
        columns={singleColumnWidth("300px")}
        data={newData()}
        truncationPattern={TRUNCATION_TOOLTIP}
        globalRowHeight={40}
        width="500px"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(".table-cell:nth-child(2) ic-tooltip");
  });

  it("should display show-hide truncation on column when first column width set with px and table width set to 500px", () => {
    mount(
      <IcDataTable
        caption="Basic Table"
        columns={singleColumnWidth("250px")}
        data={newData()}
        width="500px"
        truncationPattern={TRUNCATION_SHOW_HIDE}
        globalRowHeight={40}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(".table-cell:nth-child(2) ic-typography")
      .shadow()
      .find(BUTTON_SELECTOR)
      .should(HAVE_TEXT, SEE_MORE);
  });

  it("should set column width to correct px when data table includes pagination and navigating to different pages", () => {
    const nextData = (rows: number) => {
      const newData: { firstName: string; lastName: string; age: number }[] =
        [];
      for (let i = 0; i < rows; i++) {
        const obj = {
          firstName: `firstName-${i}`,
          lastName: `lastName-${i}`,
          age: i,
        };
        newData.push(obj);
      }

      return newData;
    };
    mount(
      <IcDataTable
        columns={singleColumnWidth("200px")}
        data={nextData(50)}
        caption="Data Tables"
        showPagination
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 200);
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, PAGINATION_BAR_SELECTOR)
      .shadow()
      .find("ic-pagination")
      .shadow()
      .find("#next-page-button")
      .click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 200);
    });
  });

  it("should render data table height to 500 using px in height prop", () => {
    mount(
      <IcDataTable
        caption="Basic Table"
        columns={singleColumnWidth("250px")}
        data={newData()}
        height="500px"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR).invoke("outerHeight").should(EQUAL, 500);
  });

  it("should render data table height to 700 using percentages in height prop", () => {
    mount(
      <div style={{ height: "700px" }}>
        <IcDataTable
          caption="Basic Table"
          columns={COLS}
          data={DATA}
          height="100%"
        />
      </div>
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR).invoke("outerHeight").should(EQUAL, 700);
  });

  it("should render data table height to 400 using rem in height prop", () => {
    mount(
      <IcDataTable
        caption="Basic Table"
        columns={COLS}
        data={DATA}
        height="37.5rem"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR).invoke("outerHeight").should(EQUAL, 600);
  });

  it("should set the table layout to auto", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA}
        caption="Data Tables"
        tableLayout="auto"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR)
      .then(($el) => {
        return window.getComputedStyle($el[0]);
      })
      .invoke("getPropertyValue", "table-layout")
      .should(EQUAL, "auto");
  });

  it("should set a max width of 700px", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA}
        caption="Data Tables"
        maxWidth="700px"
        showPagination
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR)
      .then(($el) => {
        return window.getComputedStyle($el[0]);
      })
      .invoke("getPropertyValue", "max-width")
      .should(EQUAL, "700px");

    cy.get(DATA_TABLE_SELECTOR).invoke("outerWidth").should(EQUAL, 700);
  });

  it("should set a min width of 500px", () => {
    mount(
      <div style={{ width: "400px" }}>
        <IcDataTable
          columns={[
            {
              key: "firstName",
              title: "First name",
              dataType: "string",
            },
            {
              key: "lastName",
              title: "Last name",
              dataType: "string",
            },
          ]}
          data={[
            {
              firstName: "Jon",
              lastName: "Doe",
            },
            {
              firstName: "Jane",
              lastName: "Doe",
            },
          ]}
          caption="Data Tables"
          minWidth="500px"
          width="auto"
        />
      </div>
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR)
      .then(($el) => {
        return window.getComputedStyle($el[0]);
      })
      .invoke("getPropertyValue", "min-width")
      .should(EQUAL, "500px");

    cy.findShadowEl(DATA_TABLE_SELECTOR, "table")
      .invoke("outerWidth")
      .should(EQUAL, 500);
  });

  it("should set a min width of 800px with pagination", () => {
    mount(
      <div style={{ width: "700px" }}>
        <IcDataTable
          showPagination
          columns={[
            {
              key: "firstName",
              title: "First name",
              dataType: "string",
            },
            {
              key: "lastName",
              title: "Last name",
              dataType: "string",
            },
            {
              key: "age",
              title: "Age",
              dataType: "number",
            },
            {
              key: "address",
              title: "Address",
              dataType: "string",
            },
          ]}
          data={[
            {
              firstName: "Jon",
              lastName: "Doe",
              age: "34",
              address: "1 High Street, Main, AABB CC DD", // cspell:disable-line
            },
            {
              firstName: "Jane",
              lastName: "Doe",
              age: "34",
              address: "1 High Street, Main, AABB CC DD", // cspell:disable-line
            },
          ]}
          caption="Data Tables"
          minWidth="800px"
          width="auto"
        />
      </div>
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR)
      .then(($el) => {
        return window.getComputedStyle($el[0]);
      })
      .invoke("getPropertyValue", "min-width")
      .should(EQUAL, "800px");

    cy.findShadowEl(DATA_TABLE_SELECTOR, "table")
      .invoke("outerWidth")
      .should(EQUAL, 800);
  });

  it("should set a max width of 900px with pagination", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA}
        caption="Data Tables"
        maxWidth="900px"
        showPagination
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR)
      .then(($el) => {
        return window.getComputedStyle($el[0]);
      })
      .invoke("getPropertyValue", "max-width")
      .should(EQUAL, "900px");

    cy.get(DATA_TABLE_SELECTOR).invoke("outerWidth").should(EQUAL, 900);
  });

  it("should set first name column to 300px with table layout set to auto", () => {
    mount(
      <IcDataTable
        caption="Basic Table"
        tableLayout="auto"
        columns={singleColumnWidth("300px")}
        data={newData()}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 300);
    });
  });

  it("should set first name column to 300px and age to 100px with table layout set to auto", () => {
    mount(
      <IcDataTable
        caption="Basic Table"
        tableLayout="auto"
        columns={multipleColumnWidth("300px", "100px")}
        data={newData()}
        width="auto"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
      cy.wrap($row)
        .find(TABLE_CELL_FIRST_CHILD_SELECTOR)
        .invoke("outerWidth")
        .should(EQUAL, 300);

      cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR).each(($row) => {
        cy.wrap($row)
          .find(LAST_CELL_SELECTOR)
          .invoke("outerWidth")
          .should(EQUAL, 100);
      });
    });
  });
});

describe("IcDataTable table with descriptions", () => {
  beforeEach(() => {
    cy.injectAxe();
    setDatableTestViewport();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  const FIRST_CELL_TEXT_QUERY = ".table-cell:nth-child(1) ic-typography";
  const FIRST_CELL_DESCRIPTION_TEXT_QUERY =
    ".table-cell:nth-child(1) div div ic-typography";

  it("should fully display descriptions in cells with no restrictions set", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(FIRST_CELL_TEXT_QUERY)
      .should(
        "contain",
        LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS[0].firstName.data
      );

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(FIRST_CELL_DESCRIPTION_TEXT_QUERY)
      .should(
        "contain",
        (
          LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS[0].firstName.description as {
            data: string;
            icon: string;
          }
        ).data
      );
  });

  it("should add an icon next to the descriptions when provided", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS}
        caption="Data Tables"
      >
        <IcButton
          slot={`firstName-0-action-element`}
          data-testid="copy-button"
          variant="icon-tertiary"
          size="small"
          aria-label="you can disable tooltips on icon buttons"
        >
          <SlottedSVG path={mdiContentCopy} viewBox="0 0 24 24" />
        </IcButton>
      </IcDataTable>
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(".table-cell:nth-child(1) div div span");

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "/cell-descriptions-icons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.153),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should test code in description object", () => {
    const clonedData = JSON.parse(
      JSON.stringify(LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS)
    );
    clonedData[0].firstName.icon = `<img src=x onerror=alert(12345)//>`;
    clonedData[0].firstName.description.icon = `<img src=x onerror=alert(12345)//>`;

    cy.spy(window, "alert").as("spyAlert");

    mount(
      <IcDataTable columns={COLS} data={clonedData} caption="Data Tables" />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.get("@spyAlert").should(NOT_HAVE_BEEN_CALLED);
  });

  it("should truncate long text without truncating descriptions - using show/hide pattern when global row height is set", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS}
        caption="Data Tables"
        truncationPattern={TRUNCATION_SHOW_HIDE}
        globalRowHeight={120}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(FIRST_CELL_TEXT_QUERY)
      .shadow()
      .find(BUTTON_SELECTOR)
      .contains(SEE_MORE);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(FIRST_CELL_DESCRIPTION_TEXT_QUERY)
      .should(
        "contain",
        (
          LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS[0].firstName.description as {
            data: string;
            icon: string;
          }
        ).data
      );
  });

  it("should not truncate long text if global row height allows for all text to be present", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS}
        caption="Data Tables"
        truncationPattern={TRUNCATION_TOOLTIP}
        globalRowHeight={200}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(".table-cell:nth-child(1) ic-tooltip")
      .should(NOT_EXIST);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(FIRST_CELL_TEXT_QUERY)
      .should(
        "contain",
        LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS[0].firstName.data
      );

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(FIRST_CELL_DESCRIPTION_TEXT_QUERY)
      .should(
        "contain",
        (
          LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS[0].firstName.description as {
            data: string;
            icon: string;
          }
        ).data
      );
  });

  it("should truncate long text without truncating descriptions - using tooltip pattern when global row height is set", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS}
        caption="Data Tables"
        truncationPattern={TRUNCATION_TOOLTIP}
        globalRowHeight={40}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(".table-cell:nth-child(1) ic-tooltip");

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(".table-cell:nth-child(1) ic-tooltip ic-typography")
      .should(
        "contain",
        LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS[0].firstName.data
      );

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(FIRST_CELL_DESCRIPTION_TEXT_QUERY)
      .should(
        "contain",
        (
          LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS[0].firstName.description as {
            data: string;
            icon: string;
          }
        ).data
      );
  });

  it("should expand row height beyond global row height if description is present", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS}
        caption="Data Tables"
        truncationPattern={TRUNCATION_TOOLTIP}
        globalRowHeight={40}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(1)
      .find(".table-cell:nth-child(1) .cell-container")
      .should(HAVE_ATTR, "style", "--row-height: 1.5rem;");
  });

  it("should expand row height beyond global row height if a description is present but no cell data is present", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS}
        caption="Data Tables"
        truncationPattern={TRUNCATION_TOOLTIP}
        globalRowHeight={40}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(3)
      .find(".table-cell:nth-child(1) .cell-container")
      .should(HAVE_ATTR, "style", "--row-height: 24px");
  });
});

describe("IcDataTable row deletion", () => {
  beforeEach(() => {
    cy.injectAxe();
    setDatableTestViewport();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it('should delete a row when the "Delete" button is clicked', () => {
    const DeleteElementsExample = () => {
      const clonedData = JSON.parse(JSON.stringify(DATA_REACT_ELEMENTS));
      const [nextData, setNextData] = useState([...clonedData]);
      return (
        <IcDataTable
          columns={COLS_ELEMENTS}
          data={nextData}
          caption="Data tables"
        >
          {nextData.map((_, index) => (
            <>
              <IcButton
                key={`actions-${index}`}
                slot={`actions-${index}`}
                onClick={() =>
                  setNextData(nextData.filter((_, i) => i !== index))
                }
              >
                Delete
              </IcButton>
              <IcButton
                key={`actions2-${index}`}
                variant="icon-tertiary"
                slot={`actions2-${index}`}
                onClick={() =>
                  setNextData(nextData.filter((_, i) => i !== index))
                }
                aria-label="Add info"
              >
                <SlottedSVG path={mdiPlus} viewBox="0 0 24 24" />
              </IcButton>
            </>
          ))}
        </IcDataTable>
      );
    };

    mount(<DeleteElementsExample />);
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR)
      .find(ICON_BUTTON)
      .eq(0)
      .shadow()
      .find(BUTTON_SELECTOR)
      .focus();

    cy.wait(1000);
    cy.compareSnapshot({
      name: "/slotted-custom-element-in-cell",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.042),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").should(HAVE_LENGTH, 6);

    cy.get(DATA_TABLE_SELECTOR).find(IC_BUTTON_SELECTOR).eq(2).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").should(HAVE_LENGTH, 5);
  });

  it("should have tooltip visible when it would overlap bottom of table", () => {
    const clonedData = JSON.parse(JSON.stringify(DATA_REACT_ELEMENTS));
    const nextData = [...clonedData];
    mount(
      <IcDataTable
        columns={COLS_ELEMENTS}
        data={nextData}
        caption="Data tables"
      >
        {nextData.map((_, index) => (
          <>
            <IcButton
              key={`actions-${index}`}
              slot={`actions-${index}`}
              onClick={() => nextData.splice(index, 1)}
            >
              Delete
            </IcButton>
            <IcButton
              key={`actions2-${index}`}
              variant="icon-tertiary"
              slot={`actions2-${index}`}
              onClick={() => nextData.splice(index, 1)}
              aria-label="Add info"
            >
              <SlottedSVG path={mdiPlus} viewBox="0 0 24 24" />
            </IcButton>
          </>
        ))}
      </IcDataTable>
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR)
      .find(ICON_BUTTON)
      .eq(4)
      .shadow()
      .find(BUTTON_SELECTOR)
      .focus();

    cy.checkA11yWithWait(undefined, 1000);

    cy.compareSnapshot({
      name: "/tooltip-in-final-row",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.042),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
      delay: 1000,
    });
  });

  it("should render table correctly when only some rows have an icon in the column", () => {
    const clonedData = JSON.parse(
      JSON.stringify(DATA_REACT_ELEMENTS_WITH_ICONS)
    );
    const data = [...clonedData];
    mount(
      <IcDataTable columns={COLS_ELEMENTS} data={data} caption="Data tables">
        {data.map((_, index) => (
          <>
            <IcButton
              key={`actions-${index}`}
              slot={`actions-${index}`}
              onClick={() => data.splice(index, 1)}
            >
              Delete
            </IcButton>
            <IcButton
              key={`actions2-${index}`}
              variant="icon-tertiary"
              slot={`actions2-${index}`}
              onClick={() => data.splice(index, 1)}
              aria-label="Add info"
            >
              <SlottedSVG path={mdiPlus} viewBox="0 0 24 24" />
            </IcButton>
          </>
        ))}
      </IcDataTable>
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/icons-only-in-some-rows",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.041),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
      delay: 500,
    });
  });
});

describe("IcDataTable row selection", () => {
  beforeEach(() => {
    cy.injectAxe();
    setDatableTestViewport();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should display selection checkboxes when `rowSelection` is set to `true`, and should highlight the row when one is selected", () => {
    mount(<BasicDataTable rowSelection />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, ROW_CHECKBOX_SELECTOR).eq(3).click();

    cy.compareSnapshot({
      name: "/selected-row-highlight",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.048),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should emit icSelectedRowChange event when the selected row changes", () => {
    mount(
      <BasicDataTable
        rowSelection
        onIcSelectedRowChange={(e: CustomEvent) => console.log(e.detail)}
      />
    );

    const EVENT_OBJECT = {
      firstName: "Mark",
      lastName: "Owens",
      age: 45,
      jobTitle: "Team Lead",
      address: "12 Key Street, Town, Country, Postcode",
      icRowId: "row-2",
    };

    cy.get(DATA_TABLE_SELECTOR).invoke(
      "on",
      "icSelectedRowChange",
      cy.stub().as("selectedRowChange")
    );

    cy.spy(window.console, "log").as("spyWinConsoleLog");

    cy.findShadowEl(DATA_TABLE_SELECTOR, ROW_CHECKBOX_SELECTOR).eq(3).click();

    cy.get("@selectedRowChange").should(HAVE_BEEN_CALLED_ONCE);
    cy.get(CONSOLE_LOG_SPY).should(HAVE_BEEN_CALLED_WITH, {
      row: EVENT_OBJECT,
      selectedRows: [EVENT_OBJECT],
      icRowId: "row-2",
      selectedIcRowIds: ["row-2"],
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, ROW_CHECKBOX_SELECTOR).eq(3).click();

    cy.get("@selectedRowChange").should(HAVE_CALL_COUNT, 2);
    cy.get(CONSOLE_LOG_SPY).should(HAVE_BEEN_CALLED_WITH, {
      row: null,
      selectedRows: [],
      icRowId: null,
      selectedIcRowIds: [],
    });
  });

  it("should select all rows when the header checkbox is clicked, and should emit the `icSelectAllRows` event", () => {
    mount(
      <BasicDataTable
        rowSelection
        onIcSelectAllRows={(e: CustomEvent) => console.log(e.detail)}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR).invoke(
      "on",
      "icSelectAllRows",
      cy.stub().as("selectedAllRows")
    );

    cy.findShadowEl(DATA_TABLE_SELECTOR, HEADER_CHECKBOX_SELECTOR).click();

    cy.get("@selectedAllRows").should(HAVE_BEEN_CALLED_ONCE);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/selected-all-rows",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.039),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, HEADER_CHECKBOX_SELECTOR).click();

    cy.get("@selectedAllRows").should(HAVE_CALL_COUNT, 2);
  });

  it("should select all remaining rows when header checkbox clicked after rows checkboxes", () => {
    mount(<BasicDataTable rowSelection />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, ROW_CHECKBOX_SELECTOR).eq(3).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, HEADER_CHECKBOX_SELECTOR).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/selected-all-remaining-rows",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.039),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should not render the header checkbox if the table contains no data", () => {
    mount(<IcDataTable columns={COLS} caption="Data Tables" rowSelection />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, HEADER_CHECKBOX_SELECTOR).should(
      NOT_EXIST
    );
  });

  it("should correctly render the updating indicator with the correct colspan when the checkbox column is present", () => {
    mount(<BasicDataTable rowSelection updating />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/updating-with-header-checkbox",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.041),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});

describe("IcDataTable visual regression tests in high contrast mode", () => {
  beforeEach(() => {
    cy.enableForcedColors();
    cy.wait(500);
    setDatableTestViewport();
    cy.wait(500);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render in high contrast mode", () => {
    mount(<BasicDataTable />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.056),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with title bar in high contrast mode", () => {
    mount(
      <IcDataTable caption="Custom Title Bar" columns={COLS} data={DATA}>
        <IcDataTableTitleBar
          slot="title-bar"
          description="Data table description that describes the purpose of the table."
          metadata="128 items | 32gb | Updated: 01/02/03"
        />
      </IcDataTable>
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/with-title-bar-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.065),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
      delay: 500,
    });
  });

  it("should correctly render a custom icon in the header when passed through the column prop in high contrast mode", () => {
    mount(
      <IcDataTable columns={ICON_COLS} data={ICON_DATA} caption="Data Tables" />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/custom-icons-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.048),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should highlight row when clicked in high contrast mode", () => {
    mount(<BasicDataTable rowSelection />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, ROW_CHECKBOX_SELECTOR).eq(1).click();
    cy.findShadowEl(DATA_TABLE_SELECTOR, ROW_CHECKBOX_SELECTOR).eq(4).click();

    cy.compareSnapshot({
      name: "/highlighted-row-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.052),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render the loading indicator with background in high contrast mode when data is displayed with ic-loading-indicator above", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={DATA}
        loading
        loadingOptions={{
          progress: 30,
          min: 0,
          max: 100,
        }}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.wait(350);

    cy.get("ic-data-table").invoke("prop", "loading", true);

    cy.compareSnapshot({
      name: "/loading-indicator-background-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.006),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render the empty state in high contrast mode when no data is passed through", () => {
    mount(<IcDataTable columns={COLS} data={[]} caption="Data Tables" />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, EMPTY_STATE)
      .shadow()
      .should(HAVE_TEXT, "No Data");

    cy.compareSnapshot({
      name: "/no-data-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.006),
    });
  });

  it("should render show hide truncation in high contrast mode when data table is set to dense", () => {
    mount(
      <IcDataTable
        columns={COLUMNS_NO_TEXT_WRAP}
        data={LONG_DATA_VALUES}
        caption="Data Tables"
        truncationPattern={TRUNCATION_SHOW_HIDE}
        density="dense"
        globalRowHeight={40}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/show-hide-truncation-dense-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.055),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render tooltip truncation in high contrast mode when table is in spacious", () => {
    mount(
      <IcDataTable
        columns={COLUMNS_NO_TEXT_WRAP}
        data={LONG_DATA_VALUES}
        caption="Data Tables"
        density="spacious"
        truncationPattern={TRUNCATION_TOOLTIP}
        globalRowHeight={40}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr")
      .filter(":lt(3)")
      .each(($row) => {
        cy.wrap($row).find(LAST_CELL_SELECTOR).find(TOOLTIP_SELECTOR);
      });

    cy.compareSnapshot({
      name: "/tooltip-truncation-spacious-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.046),
    });
  });

  it("should render see more / see less focus underline correctly in high contrast mode", () => {
    mount(
      <IcDataTable
        columns={COLUMNS_NO_TEXT_WRAP}
        data={LONG_DATA_VALUES}
        caption="Data Tables"
        truncationPattern={TRUNCATION_SHOW_HIDE}
        globalRowHeight={40}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, TABLE_ROW_SELECTOR)
      .eq(0)
      .find(TABLE_CELL_TYPOGRAPHY_SELECTOR)
      .shadow()
      .find(BUTTON_SELECTOR)
      .focus();

    cy.compareSnapshot({
      name: "/show-hide-truncation-focus-hover-state-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.054),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render a slotted icon instead of an icon defined in data when in high contrast mode", () => {
    mount(
      <IcDataTable columns={COLS} data={ICON_DATA} caption="Data tables">
        <SlottedSVG
          slot="name-4-icon"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"></path>
        </SlottedSVG>
      </IcDataTable>
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.compareSnapshot({
      name: "/slotted-icon-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.047),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render sort buttons in high contrast mode", () => {
    mount(<BasicDataTable sortable />);
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.wait(300).compareSnapshot({
      name: "/sortable-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.056),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render with row overrides and pagination bar in high contrast mode", () => {
    mount(
      <IcDataTable
        columns={ROW_HEADER_COLS}
        data={ROW_ALIGNMENT}
        showPagination
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "/row-overrides-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.062),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render slotted custom elements in cell in high contrast mode", () => {
    const clonedData = JSON.parse(JSON.stringify(DATA_REACT_ELEMENTS));
    const nextData = [...clonedData];

    mount(
      <IcDataTable
        columns={COLS_ELEMENTS}
        data={nextData}
        caption="Data tables"
      >
        {nextData.map((_, index) => (
          <>
            <IcButton
              key={`actions-${index}`}
              slot={`actions-${index}`}
              onClick={() => nextData.splice(index, 1)}
            >
              Delete
            </IcButton>
            <IcButton
              key={`actions2-${index}`}
              variant="icon-tertiary"
              slot={`actions2-${index}`}
              onClick={() => nextData.splice(index, 1)}
              aria-label="Add info"
            >
              <SlottedSVG path={mdiPlus} viewBox="0 0 24 24" />
            </IcButton>
          </>
        ))}
      </IcDataTable>
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.get(DATA_TABLE_SELECTOR)
      .find(ICON_BUTTON)
      .eq(0)
      .shadow()
      .find(BUTTON_SELECTOR)
      .focus();

    cy.compareSnapshot({
      name: "/slotted-custom-element-in-cell-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.054),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
      delay: 500,
    });
  });
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const BasicDarkModeDataTable = (props?: any): ReactElement => (
  <IcDataTable
    caption="dark mode"
    columns={COLS}
    data={DATA}
    theme="dark"
    {...props}
  />
);

describe("Dark mode", () => {
  beforeEach(() => {
    cy.injectAxe();
    setDatableTestViewport();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render a custom title bar in dark mode", () => {
    mount(
      <IcDataTable
        caption="Custom Title Bar"
        columns={COLS}
        data={DATA}
        theme="dark"
      >
        <IcDataTableTitleBar
          slot="title-bar"
          description="Data table description that describes the purpose of the table."
          metadata="128 items | 32gb | Updated: 01/02/03"
        >
          <IcButton slot="primary-action">Primary</IcButton>
          <IcButton
            slot="custom-actions"
            variant="icon-tertiary"
            aria-label="Icon 1"
          >
            <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
          </IcButton>
          <IcButton
            slot="custom-actions"
            variant="icon-tertiary"
            aria-label="Icon 2"
          >
            <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
          </IcButton>
          <IcButton
            slot="custom-actions"
            variant="icon-tertiary"
            aria-label="Icon 3"
          >
            <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
          </IcButton>
          <IcTypography slot="description" variant="body">
            <p>
              This is some text and{" "}
              <IcLink href="/">this is an inline link</IcLink> within the text.
            </p>
          </IcTypography>
        </IcDataTableTitleBar>
      </IcDataTable>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-mode-title-bar",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.052),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render rows, columns and cells in dark mode", () => {
    mount(<BasicDarkModeDataTable />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-mode-default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.046),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render embedded in dark mode", () => {
    mount(<BasicDarkModeDataTable embedded />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-mode-embedded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.044),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render row headers in dark mode", () => {
    mount(
      <IcDataTable
        columns={ROW_HEADER_COLS}
        data={ROW_HEADER_DATA}
        caption="Data Tables"
        theme="dark"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-mode-row-headers",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.051),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render sortable in dark mode", () => {
    mount(
      <BasicDarkModeDataTable
        sortable
        sortOptions={{
          sortOrders: ["ascending", "unsorted"],
          defaultColumn: "firstName",
        }}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-mode-sortable",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.047),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render pagination in dark mode", () => {
    mount(
      <IcDataTable
        caption="dark mode pagination"
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
        theme="dark"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    // cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-mode-pagination",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.048),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render different emphasis in dark mode", () => {
    mount(
      <IcDataTable
        caption="dark mode emphasis"
        columns={COLS}
        data={DATA_EMPHASIS}
        theme="dark"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-mode-emphasis",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.042),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render an empty state in dark mode", () => {
    mount(
      <div style={{ backgroundColor: "#121212" }}>
        <IcDataTable caption="Slotted Empty State" columns={COLS} theme="dark">
          <IcEmptyState
            slot="empty-state"
            aligned="left"
            heading="Data source error"
            body="Error loading new data"
          />
        </IcDataTable>
      </div>
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-mode-empty-state",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.008),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render loading in dark mode", () => {
    mount(
      <BasicDarkModeDataTable
        loading
        loadingOptions={{
          progress: 45,
          min: 0,
          max: 50,
        }}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-mode-loading",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.002),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render updating in dark mode", () => {
    mount(
      <BasicDarkModeDataTable
        updating
        updatingOptions={{
          progress: 45,
          min: 0,
          max: 50,
        }}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-mode-updating",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render custom icons in dark mode", () => {
    mount(
      <IcDataTable
        caption="Custom icons"
        columns={ICON_COLS}
        data={ICON_DATA}
        theme="dark"
      >
        <SlottedSVG slot="age-column-icon" path={mdiAccountGroup} />
        <SlottedSVG slot="firstName-0-icon" path={mdiAccountGroup} />
      </IcDataTable>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/dark-mode-icons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.044),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render cell descriptions and icons in dark mode", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS}
        caption="Data Tables"
        theme="dark"
      >
        <IcButton
          slot={`firstName-0-action-element`}
          data-testid="copy-button"
          variant="icon-tertiary"
          size="small"
          aria-label="you can disable tooltips on icon buttons"
        >
          <SlottedSVG path={mdiContentCopy} viewBox="0 0 24 24" />
        </IcButton>
      </IcDataTable>
    );

    cy.checkA11yWithWait();

    //triggers a mouse down event on header to prevent hover styling on data row
    cy.findShadowEl(DATA_TABLE_SELECTOR, "th.column-header")
      .eq(0)
      .realMouseDown();

    cy.compareSnapshot({
      name: "/dark-mode-cell-descriptions-icons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.163),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});

describe("Native tables styled like ic-data-table", () => {
  beforeEach(() => {
    setDatableTestViewport();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render a native table", () => {
    mount(
      <div
        style={{
          padding: "0.5rem",
        }}
      >
        <IcTheme theme="light">
          <NativeTable />
        </IcTheme>
      </div>
    );

    checkTableRowHoverState(1);

    cy.compareSnapshot({
      name: "/native-table/light-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.014),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render a dense native table", () => {
    mount(
      <div
        style={{
          padding: "0.5rem",
        }}
      >
        <IcTheme theme="light">
          <NativeTable type="dense" />
        </IcTheme>
      </div>
    );

    cy.compareSnapshot({
      name: "/native-table/dense-light-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.013),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render a spacious native table", () => {
    mount(
      <div
        style={{
          padding: "0.5rem",
        }}
      >
        <IcTheme theme="light">
          <NativeTable type="spacious" />
        </IcTheme>
      </div>
    );

    cy.compareSnapshot({
      name: "/native-table/spacious-light-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.013),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render an embedded native table", () => {
    mount(
      <div
        style={{
          padding: "0.5rem",
        }}
      >
        <IcTheme theme="light">
          <NativeTable type="embedded" />
        </IcTheme>
      </div>
    );

    cy.compareSnapshot({
      name: "/native-table/embedded-light-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.014),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render a native table in dark mode", () => {
    mount(
      <div
        style={{
          backgroundColor: "var(--ic-color-page-background-dark)",
          padding: "0.5rem",
        }}
      >
        <IcTheme theme="dark">
          <NativeTable />
        </IcTheme>
      </div>
    );

    checkTableRowHoverState(1);

    cy.compareSnapshot({
      name: "/native-table/dark-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.016),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render a dense native table in dark mode", () => {
    mount(
      <div
        style={{
          backgroundColor: "var(--ic-color-page-background-dark)",
          padding: "0.5rem",
        }}
      >
        <IcTheme theme="dark">
          <NativeTable type="dense" />
        </IcTheme>
      </div>
    );

    cy.compareSnapshot({
      name: "/native-table/dense-dark-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.013),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render a spacious native table in dark mode", () => {
    mount(
      <div
        style={{
          backgroundColor: "var(--ic-color-page-background-dark)",
          padding: "0.5rem",
        }}
      >
        <IcTheme theme="dark">
          <NativeTable type="spacious" />
        </IcTheme>
      </div>
    );

    cy.compareSnapshot({
      name: "/native-table/spacious-dark-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.013),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render an embedded native table in dark mode", () => {
    mount(
      <div
        style={{
          backgroundColor: "var(--ic-color-page-background-dark)",
          padding: "0.5rem",
        }}
      >
        <IcTheme theme="dark">
          <NativeTable type="embedded" />
        </IcTheme>
      </div>
    );

    cy.compareSnapshot({
      name: "/native-table/embedded-dark-mode",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.016),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });
});
