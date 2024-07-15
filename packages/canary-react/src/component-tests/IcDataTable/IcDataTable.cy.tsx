/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React, { ReactElement } from "react";
import { mount } from "cypress/react";
import { IcDataTable, IcDataTableTitleBar } from "../../components";
import { IcButton, IcEmptyState, SlottedSVG } from "@ukic/react";
import { IcPaginationBarOptions } from "@ukic/canary-web-components/src/utils/types";

import {
  COLS,
  COLS_ALIGNMENT,
  COLS_ELEMENTS,
  DATA,
  DATA_CELL_ALIGNMENT,
  ICON_COLS,
  ICON_DATA,
  LONG_COLS,
  LONG_DATA,
  ROW_ALIGNMENT,
  ROW_HEADER_COLS,
  ROW_HEADER_DATA,
} from "@ukic/canary-web-components/src/components/ic-data-table/story-data";

import {
  HAVE_CLASS,
  HAVE_TEXT,
  NOT_EXIST,
  HAVE_ATTR,
  HAVE_BEEN_CALLED_ONCE,
  HAVE_LENGTH,
  NOT_HAVE_CLASS,
  HAVE_CSS,
  NOT_HAVE_CSS,
  NOT_BE_VISIBLE,
} from "@ukic/react/src/component-tests/utils/constants";

import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";

const DATA_TABLE_SELECTOR = "ic-data-table";
const DEFAULT_THRESHOLD = 0.031;
const LOADING_INDICATOR_SELECTOR = "ic-loading-indicator";

export const BasicDataTable = (dataTableProps?): ReactElement => (
  <IcDataTable
    columns={COLS}
    data={DATA}
    caption="Data Tables"
    {...dataTableProps}
  />
);

describe("IcDataTables", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(<BasicDataTable />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.042),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should highlight row when clicked", () => {
    mount(<BasicDataTable />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").eq(1).click();
    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").eq(4).click();

    cy.compareSnapshot({
      name: "highlighted-row",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.041),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.checkA11yWithWait();
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
      name: "with-row-headers",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.049),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render embedded", () => {
    mount(<BasicDataTable embedded />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "embedded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should sort data when the sort button is clicked", () => {
    mount(<BasicDataTable sortable />);
    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.compareSnapshot({
      name: "sortable",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.042),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(1).click();

    cy.compareSnapshot({
      name: "sortable-first-sort",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.044),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(2).click();

    cy.compareSnapshot({
      name: "sortable-second-sort",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.044),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it('should sort data to "ascending", descending and then remove sort when the sort button is clicked three times', () => {
    mount(<BasicDataTable sortable />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button")
      .eq(0)
      .shadow()
      .find("ic-tooltip button")
      .should(HAVE_ATTR, "aria-label", "Sort ascending");

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(0).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(0)
      .should(HAVE_TEXT, "Joe");

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button")
      .eq(0)
      .shadow()
      .find("ic-tooltip button")
      .should(HAVE_ATTR, "aria-label", "Sort descending");

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(0).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(0)
      .should(HAVE_TEXT, "Sarah");

    cy.checkA11yWithWait();

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button")
      .eq(0)
      .shadow()
      .find("ic-tooltip button")
      .should(HAVE_ATTR, "aria-label", "Remove sort");

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(0).click();

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

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button")
      .eq(1)
      .shadow()
      .find("ic-tooltip button")
      .should(HAVE_ATTR, "aria-label", "Remove sort");

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(1)
      .should(HAVE_TEXT, "Ashford");

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(1).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button")
      .eq(1)
      .shadow()
      .find("ic-tooltip button")
      .should(HAVE_ATTR, "aria-label", "Sort ascending");

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .find("td")
      .eq(1)
      .should(HAVE_TEXT, "Bloggs");
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
      name: "column-overrides",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.048),
      cypressSCreenshotOptions: {
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
      name: "row-overrides",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.054),
      cypressSCreenshotOptions: {
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
      name: "cell-overrides",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.048),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should correctly render a custom icon in the header when passed through the column prop", () => {
    mount(
      <IcDataTable columns={ICON_COLS} data={ICON_DATA} caption="Data Tables" />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "custom-icons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.06),
      cypressSCreenshotOptions: {
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
      name: "slotted-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.047),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render the empty state when data is null", () => {
    mount(<IcDataTable columns={COLS} caption="Data Tables" />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.compareSnapshot({
      name: "null-data",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD),
    });
    cy.checkA11yWithWait();
  });

  it("should render the empty state when no data is passed through", () => {
    mount(<IcDataTable columns={COLS} data={[]} caption="Data Tables" />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-empty-state")
      .shadow()
      .should(HAVE_TEXT, "No Data");

    cy.compareSnapshot({
      name: "no-data",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD),
    });
  });

  it("should initially show no data and then show data when added", () => {
    mount(<IcDataTable columns={COLS} data={[]} caption="Data Tables" />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-empty-state")
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
      name: "empty-state",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.047),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });
    cy.checkA11yWithWait();
  });

  it("should render the updating state when the `updating` prop is passed through", () => {
    mount(<IcDataTable columns={COLS} updating caption="Data Tables" />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.compareSnapshot({
      name: "updating",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.056),
      cypressSCreenshotOptions: {
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
          appearance: "light",
          progress: 30,
          min: 0,
          max: 100,
        }}
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.wait(350).compareSnapshot({
      name: "loading-options",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.015),
      cypressSCreenshotOptions: {
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

    cy.get("ic-data-table").invoke("prop", "loading", true);

    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR).should(
      HAVE_CLASS,
      "show-background"
    );

    cy.compareSnapshot({
      name: "loading-indicator-background",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.033),
      cypressSCreenshotOptions: {
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
      name: "updating-options",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.054),
      cypressSCreenshotOptions: {
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
          appearance: "light",
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
      .should(HAVE_ATTR, "aria-label", "Updating");

    cy.compareSnapshot({
      name: "multiple-updating-options",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.033),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should apply a specified row height to specific rows when variableRowHeight is set, and any not included should use the default globalRowHeight", () => {
    mount(
      <BasicDataTable
        variableRowHeight={({ index }) => (index % 2 === 0 ? 200 : null)}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "specified-row-height",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.078),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
      delay: 1000,
    });
  });

  it("should not override the height of certain rows if `variableRowHeight` returns auto", () => {
    mount(
      <BasicDataTable
        variableRowHeight={({ index }) => (index % 2 === 0 ? "auto" : null)}
      />
    );

    cy.compareSnapshot({
      name: "auto-set-row-height",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.042),
      cypressSCreenshotOptions: {
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
            variant="icon"
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

    cy.get("ic-data-table-title-bar").find(".primary-button").click();
    cy.get("@primaryActionClick").should(HAVE_BEEN_CALLED_ONCE);

    cy.get("ic-data-table-title-bar").find(".custom-action-button").click();
    cy.get("@customActionClick").should(HAVE_BEEN_CALLED_ONCE);

    cy.compareSnapshot({
      name: "slotted-title-bar",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.04),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.findShadowEl(
      "ic-data-table-title-bar",
      ".header-container .ic-typography-h3"
    ).should(HAVE_TEXT, "Data Tables");
  });

  it('should not render custom icon in header when "hideOnHeader" is set', () => {
    mount(
      <IcDataTable caption="Data tables" columns={ICON_COLS} data={ICON_DATA} />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "th")
      .eq(0)
      .find("span.icon")
      .should(NOT_EXIST);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "on-all-cells-except-cells-with-custom-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.06),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });
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

    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR).should(
      NOT_HAVE_CLASS,
      "show-background"
    );

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

    cy.compareSnapshot({
      name: "density-dense",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.06),
      delay: 1000,
    });

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "density", "spacious");

    cy.compareSnapshot({
      name: "density-spacious",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.034),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
      delay: 500,
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
      name: "globalRowHeight-set-to-auto",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.042),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it('should stick the header when "stickyHeader" and height is set', () => {
    mount(
      <IcDataTable
        caption="Data tables"
        columns={COLS}
        data={LONG_DATA}
        stickyColumnHeaders
        style={{ height: "500px" }}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").eq(20).scrollIntoView();

    cy.compareSnapshot({
      name: "sticky-header",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.098),
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
      name: "sticky-header-removed",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.095),
      cypressSCreenshotOptions: {
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
      name: "density-default-dropdown",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.04),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
      delay: 500,
    });

    cy.get("ic-data-table-title-bar").shadow().find("ic-select").click();

    cy.get("ic-data-table-title-bar")
      .shadow()
      .find("ic-select")
      .shadow()
      .find("li[role=option]")
      .eq(1)
      .click();

    cy.get("ic-data-table-title-bar")
      .shadow()
      .find("ic-select")
      .shadow()
      .find("li[role=option]")
      .should(HAVE_LENGTH, 3);

    cy.compareSnapshot({
      name: "density-dense-dropdown",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.038),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should reset globalRowHeight", () => {
    mount(<BasicDataTable globalRowHeight={150} />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.wait(350);

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .should(HAVE_CSS, "height", "150px");

    cy.document().then((doc) => {
      const dataTable = doc.querySelector("ic-data-table");
      dataTable?.resetRowHeights();
    });

    // restRowHeight default is 40px but due to viewport and content falling onto two lines, it's 65px
    // for the tests.
    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr")
      .eq(1)
      .should(HAVE_CSS, "height", "65px");
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
      name: "slotted-icon-in-cell",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.032),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
      delay: 500,
    });
  });

  // This test needs to be last as it seems to affect other tests.
  // For example, it will remove the last column for the remaining tests if placed higher.
  it('should delete a row when the "Delete" button is clicked', () => {
    const nextData = [...DATA];
    mount(
      <IcDataTable
        columns={COLS_ELEMENTS}
        data={nextData}
        caption="Data tables"
      >
        {nextData.map((_, index) => (
          <IcButton
            key={index}
            slot={`actions-${index}`}
            onClick={() => nextData.splice(index, 1)}
          >
            Delete
          </IcButton>
        ))}
      </IcDataTable>
    );
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "slotted-custom-element-in-cell",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.04),
      cypressSCreenshotOptions: {
        capture: "viewport",
      },
      delay: 500,
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").should(HAVE_LENGTH, 6);

    cy.get(DATA_TABLE_SELECTOR).find("ic-button").eq(2).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").should(HAVE_LENGTH, 5);
  });
});

describe("IcDataTables with IcPaginationBar", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render with pagination", () => {
    mount(
      <IcDataTable
        columns={COLS}
        data={LONG_DATA}
        showPagination
        caption="Data Tables"
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "pagination",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.072),
      cypressSCreenshotOptions: {
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
      .find("ic-typography", { includeShadowDom: true })
      .should(HAVE_TEXT, "Page 1");

    cy.get(DATA_TABLE_SELECTOR)
      .find("#next-page-button", { includeShadowDom: true })
      .click();

    cy.get(DATA_TABLE_SELECTOR)
      .find("ic-pagination-item", { includeShadowDom: true })
      .find("ic-typography", { includeShadowDom: true })
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
      appearance: "default",
      itemLabel: "Item",
      pageLabel: "Page",
      hideRangeLabel: false,
    };

    mount(
      <IcDataTable
        columns={COLS}
        data={LONG_DATA}
        showPagination
        caption="Data Tables"
        paginationBarOptions={defaultPaginationBarOptions}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.checkA11yWithWait();

    cy.compareSnapshot({
      name: "pagination-uncontrolled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.072),
      cypressSCreenshotOptions: {
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
      appearance: "dark",
      itemLabel: "Row",
      pageLabel: "Screen",
      hideRangeLabel: true,
    };

    cy.get(DATA_TABLE_SELECTOR)
      .invoke("prop", "paginationBarOptions", newPaginationBarOptions)
      .then(() => {
        cy.wait(100);
        cy.get(DATA_TABLE_SELECTOR)
          .find("ic-pagination-bar", { includeShadowDom: true })
          .invoke("prop", "itemsPerPageOptions")
          .then((itemsPerPageOptions) => {
            expect(itemsPerPageOptions.length).to.equal(1);
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find("ic-pagination-bar", { includeShadowDom: true })
          .invoke("prop", "rangeLabelType")
          .then((rangeLabelType) => {
            expect(rangeLabelType).to.equal("data");
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find("ic-pagination-bar", { includeShadowDom: true })
          .invoke("prop", "type")
          .then((type) => {
            expect(type).to.equal("complex");
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find("ic-pagination-bar", { includeShadowDom: true })
          .invoke("prop", "showItemsPerPageControl")
          .then((showItemsPerPageControl) => {
            expect(showItemsPerPageControl).to.be.false;
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find("ic-pagination-bar", { includeShadowDom: true })
          .invoke("prop", "showGoToPageControl")
          .then((showGoToPageControl) => {
            expect(showGoToPageControl).to.be.false;
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find("ic-pagination-bar", { includeShadowDom: true })
          .invoke("prop", "alignment")
          .then((alignment) => {
            expect(alignment).to.equal("left");
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find("ic-pagination-bar", { includeShadowDom: true })
          .invoke("prop", "appearance")
          .then((appearance) => {
            expect(appearance).to.equal("dark");
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find("ic-pagination-bar", { includeShadowDom: true })
          .invoke("prop", "itemLabel")
          .then((itemLabel) => {
            expect(itemLabel).to.equal("Row");
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find("ic-pagination-bar", { includeShadowDom: true })
          .invoke("prop", "pageLabel")
          .then((pageLabel) => {
            expect(pageLabel).to.equal("Screen");
          });
        cy.get(DATA_TABLE_SELECTOR)
          .find("ic-pagination-bar", { includeShadowDom: true })
          .invoke("prop", "hideRangeLabel")
          .then((hideRangeLabel) => {
            expect(hideRangeLabel).to.be.true;
          });
      });
  });
});
