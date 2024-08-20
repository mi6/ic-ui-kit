/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

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
} from "@ukic/react";
import { IcPaginationBarOptions } from "@ukic/canary-web-components/src/utils/types";

import {
  COLS,
  COLS_ALIGNMENT,
  COLS_ELEMENTS,
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
  HAVE_BEEN_CALLED_WITH,
} from "@ukic/react/src/component-tests/utils/constants";

import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import { IcDataTableTruncationTypes } from "@ukic/canary-web-components";

const DATA_TABLE_SELECTOR = "ic-data-table";
const DEFAULT_THRESHOLD = 0.04;
const LOADING_INDICATOR_SELECTOR = "ic-loading-indicator";

export const BasicDataTable = (dataTableProps?): ReactElement => (
  <IcDataTable
    columns={COLS}
    data={DATA}
    caption="Data Tables"
    {...dataTableProps}
  />
);

export const BasicSectionContainer = () => {
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
          data={LONG_DATA}
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.044),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render data tables in the constraints of the section container", () => {
    mount(<BasicSectionContainer />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "section-container",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.093),
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
      cypressScreenshotOptions: {
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
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should render embedded", () => {
    mount(<BasicDataTable embedded />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "embedded",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.046),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should sort data when the sort button is clicked", () => {
    mount(<BasicDataTable sortable />);
    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.compareSnapshot({
      name: "sortable",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(1).click();

    cy.wait(250);

    cy.compareSnapshot({
      name: "sortable-first-sort",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.047),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(2).click();

    cy.wait(250);

    cy.compareSnapshot({
      name: "sortable-second-sort",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
      cypressScreenshotOptions: {
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
      .should(HAVE_TEXT, "Bartholomew Christoper Augustine Zacchaeus Ashford"); // cspell:disable-line
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.049),
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
      name: "row-overrides",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.049),
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
      name: "cell-overrides",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
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

    cy.compareSnapshot({
      name: "custom-icons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.033),
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
      name: "slotted-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.033),
      cypressScreenshotOptions: {
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
      testThreshold: setThresholdBasedOnEnv(0.027),
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
      testThreshold: setThresholdBasedOnEnv(0.027),
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
      testThreshold: setThresholdBasedOnEnv(0.033),
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
      name: "updating",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.015),
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
      testThreshold: setThresholdBasedOnEnv(0.026),
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

    cy.get("ic-data-table").invoke("prop", "loading", true);

    cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR).should(
      HAVE_CLASS,
      "show-background"
    );

    cy.compareSnapshot({
      name: "loading-indicator-background",
      testThreshold: setThresholdBasedOnEnv(0.028),
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
      name: "updating-options",
      testThreshold: setThresholdBasedOnEnv(0.027),
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
      cypressScreenshotOptions: {
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

    cy.wait(300);

    cy.compareSnapshot({
      name: "specified-row-height",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.091),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
    });
  });

  it("should not override the height of certain rows if `variableRowHeight` returns auto", () => {
    mount(
      <BasicDataTable
        variableRowHeight={({ index }) => (index % 2 === 0 ? "auto" : null)}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.wait(300);

    cy.compareSnapshot({
      name: "auto-set-row-height",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.044),
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

    cy.wait(300);

    cy.get("ic-data-table-title-bar").find(".custom-action-button").click();
    cy.get("@customActionClick").should(HAVE_BEEN_CALLED_ONCE);

    cy.wait(300);

    cy.compareSnapshot({
      name: "slotted-title-bar",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.049),
      cypressScreenshotOptions: {
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.033),
      cypressScreenshotOptions: {
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

    cy.wait(300);

    cy.compareSnapshot({
      name: "density-dense",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.04),
    });

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "density", "spacious");

    cy.wait(300);

    cy.compareSnapshot({
      name: "density-spacious",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.044),
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
      name: "globalRowHeight-set-to-auto",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.044),
      cypressScreenshotOptions: {
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.089),
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.086),
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
      name: "density-default-dropdown",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.05),
      cypressScreenshotOptions: {
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.047),
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
      .should("equal", "151px");

    cy.document().then((doc) => {
      const dataTable = doc.querySelector("ic-data-table");
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
      name: "slotted-icon-in-cell",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.032),
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

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(2).click();

    cy.get("@sortChanged").should(HAVE_BEEN_CALLED_ONCE);
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, {
      columnName: "age",
      sorted: "ascending",
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(1).click().click();

    cy.get("@sortChanged").should("have.callCount", 3);
    cy.get("@spyWinConsoleLog").should(HAVE_BEEN_CALLED_WITH, {
      columnName: "lastName",
      sorted: "descending",
    });
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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.129),
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

    cy.wait(500);

    cy.compareSnapshot({
      name: "pagination-uncontrolled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.129),
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
    appearance: "default",
    itemLabel: "Item",
    pageLabel: "Page",
    hideRangeLabel: false,
  };

  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  describe("tooltip truncation", () => {
    // Unable to test hover state
    it("renders tooltip truncation", () => {
      mount(
        <IcDataTable
          columns={COLS}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern="tooltip"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr")
        .eq(0)
        .find(".table-cell")
        .eq(4)
        .find("ic-tooltip")
        .should("have.attr", "label", LONG_DATA_VALUES[0].jobTitle);

      cy.checkA11yWithWait();

      cy.compareSnapshot({
        name: "tooltip-truncation",
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
          truncationPattern="tooltip"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:first-child ic-tooltip")
          .should("exist");
      });
    });

    it("should remove truncation when row height is big enough to display all text when dynamically set", () => {
      mount(
        <>
          <IcDataTable
            columns={COLS}
            data={DATA}
            caption="Data Tables"
            truncationPattern="tooltip"
            globalRowHeight={40}
          />
          <IcButton
            onClick={() =>
              document
                .querySelector("ic-data-table")
                ?.setAttribute("global-row-height", "150")
            }
          >
            Set global row height
          </IcButton>
        </>
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get("ic-button").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child ic-typography")
          .should("have.attr", "style", "--ic-line-clamp: 0");
      });
    });

    it("renders tooltip truncation on sorted data", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern="tooltip"
          sortable
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(2).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .last()
        .find(".table-cell:last-child ic-tooltip")
        .should("have.attr", "label", LONG_DATA_VALUES[2].jobTitle);

      cy.compareSnapshot({
        name: "tooltip-truncation-sort",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.037),

        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("it should display all data on multiple lines when large global row height is set with tooltips removed", () => {
      mount(
        <IcDataTable
          columns={COLS}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          globalRowHeight={150}
          truncationPattern="tooltip"
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.wait(250);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child")
          .find("ic-tooltip")
          .should("not.exist");
      });

      cy.compareSnapshot({
        name: "tooltip-truncation-rowheight", // cspell:disable-line
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
      });
    });

    it("should reset tooltip truncation after row height has been reset", () => {
      mount(
        <>
          <IcDataTable
            columns={COLS}
            data={LONG_DATA_VALUES}
            caption="Data Tables"
            truncationPattern="tooltip"
            globalRowHeight={40}
          />
          <IcButton
            onClick={() =>
              document.querySelector("ic-data-table")?.resetRowHeights(40)
            }
          >
            Reset
          </IcButton>
        </>
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get("ic-button").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr")
        .eq(0)
        .find(".table-cell")
        .eq(4)
        .find("ic-tooltip")
        .should("have.attr", "label", LONG_DATA_VALUES[0].jobTitle);

      cy.compareSnapshot({
        name: "tooltip-truncation-reset-rowheight", // cspell:disable-line
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
          truncationPattern="tooltip"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(DATA_TABLE_SELECTOR).invoke("prop", "data", DATA);

      cy.wait(500);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr")
        .filter(":lt(3)")
        .each(($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child ic-tooltip")
            .should("exist");
        });
    });

    it("should display more truncated data when scrolling down table", () => {
      mount(
        <IcDataTable
          columns={COLS}
          data={LONG_DATA}
          caption="Data Tables"
          truncationPattern="tooltip"
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

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row, i) => {
        if (i > 5 && i < 11) {
          cy.wrap($row)
            .find(".table-cell:last-child")
            .find("ic-tooltip")
            .should("exist");
        }
      });
    });

    it("should removed tooltip truncation if table cell is wide enough to display all content", () => {
      // Ideally, it would be good to test the behaviour once the viewport size has decreased
      // however, it does not seem possible to trigger the ResizeObserver in Cypress tests
      const newColumns = () => {
        return COLS.filter((col) => {
          if (col.key === "jobTitle" || col.key === "address") {
            return col;
          }
        });
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
          truncationPattern="tooltip"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child")
          .find("ic-tooltip")
          .should("not.exist");
      });

      cy.compareSnapshot({
        name: "tooltip-truncation-wide-table",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.029),
      });
    });

    it("should render tooltip truncation when table is in dense", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          density="dense"
          truncationPattern="tooltip"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr")
        .filter(":lt(3)")
        .each(($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child")
            .find("ic-tooltip")
            .should("exist");
        });

      cy.compareSnapshot({
        name: "tooltip-truncation-dense",
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
          truncationPattern="tooltip"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "tbody tr")
        .filter(":lt(3)")
        .each(($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child")
            .find("ic-tooltip")
            .should("exist");
        });

      cy.compareSnapshot({
        name: "tooltip-truncation-spacious",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.034),
      });
    });

    it("should render tooltip truncation with data tables pagination", () => {
      mount(
        <IcDataTable
          columns={COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern="tooltip"
          globalRowHeight={40}
          paginationBarOptions={defaultPaginationBarOptions}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find("ic-pagination")
        .shadow()
        .find("#next-page-button")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row).find("ic-tooltip").should("exist");
      });
    });

    it("should render tooltip truncation using go to page pagination functionality", () => {
      mount(
        <IcDataTable
          columns={COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern="tooltip"
          globalRowHeight={40}
          paginationBarOptions={defaultPaginationBarOptions}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".go-to-page-holder ic-text-field")
        .shadow()
        .find("input")
        .type("2");
      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".go-to-page-holder ic-button")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row).find("ic-tooltip").should("exist");
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".go-to-page-holder ic-text-field")
        .shadow()
        .find("input")
        .type("1");
      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".go-to-page-holder ic-button")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row).find("ic-tooltip").should("exist");
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
          columns={COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern="tooltip"
          globalRowHeight={40}
          paginationBarOptions={nextDefaultPaginationBarOptions}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".items-per-page-input")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".items-per-page-input")
        .shadow()
        .find("li")
        .eq(1)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row).find("ic-tooltip").should("exist");
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
          columns={COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern="tooltip"
          globalRowHeight={40}
          paginationBarOptions={nextDefaultPaginationBarOptions}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".items-per-page-input")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".items-per-page-input")
        .shadow()
        .find("li")
        .eq(1)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".items-per-page-input")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".items-per-page-input")
        .shadow()
        .find("li")
        .eq(2)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find("ic-pagination")
        .shadow()
        .find("#next-page-button")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find("ic-pagination")
        .shadow()
        .find("#previous-page-button")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(0)
        .find(".table-cell:last-child ic-typography")
        .should("have.attr", "style", "--ic-line-clamp: 1");

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child")
          .find("ic-tooltip")
          .should("exist");
      });
    });

    it("should render truncation correctly with custom icon", () => {
      mount(
        <IcDataTable
          columns={ICON_COLS}
          data={ICON_DATA_LONG_VALUES}
          caption="Data Tables"
          showPagination
          truncationPattern="tooltip"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "tooltip-truncation-custom-icon",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.023),
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
          truncationPattern="tooltip"
          globalRowHeight={40}
          showPagination
          sortable
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".items-per-page-input")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".items-per-page-input")
        .shadow()
        .find("li")
        .eq(3)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(0).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(0).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(odd)")
        .filter(":gt(4)")
        .filter(":lt(11)")
        .each(($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child")
            .find("ic-tooltip")
            .should("exist");
        });

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(odd)")
        .filter(":gt(4)")
        .filter(":lt(11)")
        .each(($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child ic-typography")
            .should("have.attr", "style", "--ic-line-clamp: 1");
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
          truncationPattern="show-hide"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(0)
        .find(".table-cell:last-child ic-typography")
        .should("have.text", LONG_DATA_VALUES[0].jobTitle);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(0)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .should("have.text", "See more");

      cy.checkA11yWithWait();

      cy.compareSnapshot({
        name: "show-hide-truncation-hide",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.039),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(0)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(0)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .should("have.text", "See less");

      cy.compareSnapshot({
        name: "show-hide-truncation-show",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
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
          truncationPattern="show-hide"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(0)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .focus();

      cy.compareSnapshot({
        name: "show-hide-truncation-focus-hover-state",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.04),
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
          truncationPattern="show-hide"
          sortable
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(1).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(0)
        .find(".table-cell:last-child ic-typography")
        .should("have.text", "Junior Tester");

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(0)
        .find(".table-cell")
        .eq(2)
        .find("ic-typography")
        .shadow()
        .find("button")
        .should("have.text", "See more");

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(1)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .should("have.text", "See more");
    });

    it("should render full data over multiple lines and show/hide link should be removed", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          globalRowHeight={150}
          truncationPattern="show-hide"
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.wait(250);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child ic-typography")
          .shadow()
          .find("button")
          .should("not.exist");
      });

      cy.compareSnapshot({
        name: "show-hide-truncation-row-height",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.045),
      });
    });

    it("should remove truncation when row height is big enough to display all text when dynamically set", () => {
      mount(
        <>
          <IcDataTable
            columns={COLS}
            data={DATA}
            caption="Data Tables"
            truncationPattern="show-hide"
            globalRowHeight={40}
          />
          <IcButton
            onClick={() =>
              document
                .querySelector("ic-data-table")
                ?.setAttribute("global-row-height", "150")
            }
          >
            Set global row height
          </IcButton>
        </>
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get("ic-button").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child ic-typography")
          .should("not.have.attr", "max-lines");
      });
    });

    it("should remove truncation when row height is big enough to display text when dynamically set and truncation is expanded", () => {
      cy.viewport(1500, 768);
      mount(
        <>
          <IcDataTable
            columns={COLS}
            data={LONG_DATA_VALUES_UPDATE}
            caption="Data Tables"
            truncationPattern="show-hide"
            globalRowHeight={40}
          />
          <IcButton
            onClick={() =>
              document
                .querySelector("ic-data-table")
                ?.setAttribute("global-row-height", "80")
            }
          >
            Set global row height
          </IcButton>
        </>
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(2)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .click();

      cy.get("ic-button").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child ic-typography")
          .should("not.have.attr", "max-lines");
      });
    });

    it("should re-render show hide data truncation when row height is reset", () => {
      mount(
        <>
          <IcDataTable
            columns={COLS}
            data={LONG_DATA_VALUES}
            caption="Data Tables"
            truncationPattern="show-hide"
            globalRowHeight={150}
          />
          <IcButton
            onClick={() =>
              document.querySelector("ic-data-table")?.resetRowHeights(40)
            }
          >
            Reset
          </IcButton>
        </>
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get("ic-button").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .filter(":lt(2)")
        .each(($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child ic-typography")
            .shadow()
            .find("button")
            .should("have.text", "See more");
        });
    });

    it("should add show hide truncation on updated data object", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern="show-hide"
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

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(0)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .should("not.exist");

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(2)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .should("have.text", "See more");

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(2)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .click();

      cy.compareSnapshot({
        name: "show-hide-truncation-data-update",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.027),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should display show hide truncation when scrolling down table", () => {
      mount(
        <IcDataTable
          columns={COLS}
          data={LONG_DATA}
          caption="Data Tables"
          truncationPattern="show-hide"
          style={{ height: "500px" }}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row-container").scrollTo(
        0,
        250
      );

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row, i) => {
        if (i > 5 && i < 11) {
          cy.wrap($row)
            .find(".table-cell:last-child ic-typography")
            .shadow()
            .find("button")
            .should("have.text", "See more");
        }
      });

      cy.compareSnapshot({
        name: "show-hide-truncation-scroll",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.087),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });

    it("should remove show hide truncation if table cell is wide enough to display all content", () => {
      cy.viewport(1400, 768);

      const newColumns = () => {
        return COLUMNS_NO_TEXT_WRAP.filter((col) => {
          if (col.key === "department" || col.key === "jobTitle") {
            return col;
          }
        });
      };

      const newData = () => {
        return LONG_DATA_VALUES.map((d) => ({
          department: d.department,
          jobTitle: d.jobTitle,
        }));
      };

      mount(
        <IcDataTable
          columns={newColumns()}
          data={newData()}
          caption="Data Tables"
          truncationPattern="show-hide"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.wait(250);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child ic-typography")
          .shadow()
          .find("button")
          .should("not.exist");
      });
    });

    it("should increase table width from small to make sure truncation is still displayed", () => {
      const newColumns = () => {
        return COLUMNS_NO_TEXT_WRAP.filter((col) => {
          if (col.key === "department" || col.key === "jobTitle") {
            return col;
          }
        });
      };

      const newData = () => {
        return LONG_DATA_VALUES.map((d) => ({
          department: d.department,
          jobTitle: d.jobTitle,
        }));
      };

      mount(
        <IcDataTable
          columns={newColumns()}
          data={newData()}
          caption="Data Tables"
          truncationPattern="show-hide"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .filter(":gt(0)")
        .filter(":lt(3)")
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .click({ multiple: true });

      cy.viewport(1250, 768);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(1)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .should("have.text", "See less");

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(2)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .should("have.text", "See less");

      cy.viewport(2100, 768);

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(1)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .should("not.exist");

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row")
        .eq(2)
        .find(".table-cell:last-child ic-typography")
        .shadow()
        .find("button")
        .should("not.exist");
    });

    it("should render show hide truncation when data table is set to dense", () => {
      mount(
        <IcDataTable
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern="show-hide"
          density="dense"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "show-hide-truncation-dense",
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
          truncationPattern="show-hide"
          density="spacious"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "show-hide-truncation-spacious",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.039),
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
        appearance: "default",
        itemLabel: "Item",
        pageLabel: "Page",
        hideRangeLabel: false,
      };

      mount(
        <IcDataTable
          columns={COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern="show-hide"
          paginationBarOptions={defaultPaginationBarOptions}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find("ic-pagination")
        .shadow()
        .find("#next-page-button")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child ic-typography")
          .shadow()
          .find("button")
          .should("have.text", "See more");
      });
    });
    it("should render show hide truncation using go to page pagination functionality", () => {
      mount(
        <IcDataTable
          columns={COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern="show-hide"
          paginationBarOptions={defaultPaginationBarOptions}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".go-to-page-holder ic-text-field")
        .shadow()
        .find("input")
        .type("2");
      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".go-to-page-holder ic-button")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child ic-typography")
          .shadow()
          .find("button")
          .should("have.text", "See more");
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".go-to-page-holder ic-text-field")
        .shadow()
        .find("input")
        .type("1");
      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".go-to-page-holder ic-button")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child ic-typography")
          .shadow()
          .find("button")
          .should("have.text", "See more");
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
          columns={COLS}
          data={LONG_DATA}
          caption="Data Tables"
          showPagination
          truncationPattern="show-hide"
          paginationBarOptions={nextDefaultPaginationBarOptions}
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".items-per-page-input")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".items-per-page-input")
        .shadow()
        .find("li")
        .eq(1)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child ic-typography")
          .shadow()
          .find("button")
          .should("have.text", "See more");
      });
    });
    it("should render truncation correctly with custom icon", () => {
      mount(
        <IcDataTable
          columns={ICON_COLS}
          data={ICON_DATA_LONG_VALUES}
          caption="Data Tables"
          truncationPattern="show-hide"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "show-hide-truncation-custom-icon",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.02),
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
          truncationPattern="show-hide"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "show-hide-truncation-link-multiline",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.086),
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
          truncationPattern="show-hide"
          globalRowHeight={40}
          showPagination
          sortable
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".items-per-page-input")
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, "ic-pagination-bar")
        .shadow()
        .find(".items-per-page-input")
        .shadow()
        .find("li")
        .eq(3)
        .click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(0).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(0).click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(odd)")
        .filter(":gt(4)")
        .filter(":lt(11)")
        .each(($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child ic-typography")
            .shadow()
            .find("button")
            .should("have.text", "See more");
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
              onClick={() => handleTruncationClick("show-hide")}
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

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(even)").each(
        ($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child ic-typography")
            .shadow()
            .find("button")
            .should("have.text", "See more");
        }
      );

      cy.get(".update-data").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(even)").each(
        ($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child ic-typography")
            .shadow()
            .find("button")
            .should("have.text", "See more");
        }
      );

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(even)").each(
        ($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child ic-tooltip")
            .should("not.exist");
        }
      );
    });

    it("should render the truncation when switching between tooltip and show hide truncation", () => {
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
              onClick={() => handleTruncationClick("show-hide")}
              class="truncation-show-hide"
            >
              Set show/hide truncation
            </IcButton>
            <IcButton
              onClick={() => handleTruncationClick("tooltip")}
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

      cy.get(".truncation-show-hide").click();

      cy.get(".row-height").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(even)").each(
        ($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child ic-typography")
            .shadow()
            .find("button")
            .should("have.text", "See more");
        }
      );

      cy.get(".truncation-tooltip").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(even)").each(
        ($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child ic-tooltip")
            .should("exist");
        }
      );

      cy.get(".truncation-show-hide").click();

      cy.wait(250);

      cy.compareSnapshot({
        name: "show-hide-truncation-toggle",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.09),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(even)").each(
        ($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child ic-typography")
            .shadow()
            .find("button")
            .should("have.text", "See more");
        }
      );

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(even)").each(
        ($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child ic-typography")
            .shadow()
            .find("button")
            .should("have.text", "See more");
        }
      );

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(even)").each(
        ($row) => {
          cy.wrap($row)
            .find(".table-cell:last-child ic-tooltip")
            .should("not.exist");
        }
      );
    });

    it("should revert all row heights back to auto after show-hide and different row heights have been set", () => {
      const TruncationDataTable = () => {
        const [truncationPattern, setTruncationPattern] =
          useState<IcDataTableTruncationTypes>(undefined);
        const [rowHeight, setRowHeight] = useState<number | "auto">();
        const [updatedRows, setUpdatedRows] = useState<number>(5);
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
              onClick={() => handleTruncationClick("show-hide")}
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

      cy.get(".truncation-show-hide").click();

      cy.wait(500).get(".row-height-40").click();
      cy.wait(500).get(".row-height-80").click();
      cy.wait(500).get(".row-height-auto").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child ic-typography")
          .shadow()
          .find("button")
          .should("not.exist");
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child")
          .invoke("outerHeight")
          .should("equal", 89);
      });
    });

    it("should display tooltip truncation after setting show-hide > row height 40 > tooltip", () => {
      const TruncationDataTable = () => {
        const [truncationPattern, setTruncationPattern] =
          useState<IcDataTableTruncationTypes>(undefined);
        const [rowHeight, setRowHeight] = useState<number | "auto">();
        const [updatedRows, setUpdatedRows] = useState<number>(5);
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
              onClick={() => handleTruncationClick("show-hide")}
              class="truncation-show-hide"
            >
              Set show/hide truncation
            </IcButton>
            <IcButton onClick={() => handleRowHeight(40)} class="row-height-40">
              Set row height: 40
            </IcButton>
            <IcButton
              onClick={() => handleTruncationClick("tooltip")}
              class="truncation-tooltip"
            >
              Set tooltip truncation
            </IcButton>
          </>
        );
      };

      mount(<TruncationDataTable />);

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(".truncation-show-hide").click();

      cy.wait(500).get(".row-height-40").click();
      cy.wait(500).get(".truncation-tooltip").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child ic-typography")
          .shadow()
          .find("button")
          .should("not.exist");
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(even)").each(
        ($row) => {
          cy.wrap($row).find(".table-cell:last-child ic-tooltip");
        }
      );
    });

    it("should display tooltip truncation after setting show-hide > row height 80 > tooltip", () => {
      const TruncationDataTable = () => {
        const [truncationPattern, setTruncationPattern] =
          useState<IcDataTableTruncationTypes>(undefined);
        const [rowHeight, setRowHeight] = useState<number | "auto">();
        const [updatedRows, setUpdatedRows] = useState<number>(5);
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
              onClick={() => handleTruncationClick("show-hide")}
              class="truncation-show-hide"
            >
              Set show/hide truncation
            </IcButton>
            <IcButton onClick={() => handleRowHeight(80)} class="row-height-80">
              Set row height: 80
            </IcButton>
            <IcButton
              onClick={() => handleTruncationClick("tooltip")}
              class="truncation-tooltip"
            >
              Set tooltip truncation
            </IcButton>
          </>
        );
      };

      mount(<TruncationDataTable />);

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.get(".truncation-show-hide").click();

      cy.wait(500).get(".row-height-80").click();
      cy.wait(500).get(".truncation-tooltip").click();

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row").each(($row) => {
        cy.wrap($row)
          .find(".table-cell:last-child ic-typography")
          .shadow()
          .find("button")
          .should("not.exist");
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".table-row:nth-child(even)").each(
        ($row) => {
          cy.wrap($row).find(".table-cell:last-child ic-tooltip");
        }
      );
    });
  });

  describe("textWrap", () => {
    const textWrapColumns = () => {
      return COLUMNS_NO_TEXT_WRAP.map((col) => {
        if (col.key === "jobTitle") {
          return {
            ...col,
            textWrap: true,
          };
        }
        return col;
      });
    };

    const textWrapRow = () => {
      return LONG_DATA_VALUES.map((data) => {
        if (data.name === "Luke Fisher" || data.name === "John Smith") {
          return {
            ...data,
            rowOptions: {
              textWrap: true,
            },
          };
        }

        return data;
      });
    };

    const textWrapCell = () => {
      return LONG_DATA_VALUES.map((data) => {
        if (
          data.jobTitle === "Senior Financial Operations and Reporting Analyst"
        ) {
          return {
            ...data,
            jobTitle: {
              data: data.jobTitle,
              textWrap: true,
            },
          };
        }

        return data;
      });
    };

    it("renders textWrap via columns with tooltip truncation", () => {
      mount(
        <IcDataTable
          columns={textWrapColumns()}
          data={LONG_DATA_VALUES}
          caption="Data Tables"
          truncationPattern="tooltip"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.checkA11yWithWait();

      cy.compareSnapshot({
        name: "text-wrap-tooltip-truncation-column",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.053),
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
          truncationPattern="show-hide"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "text-wrap-show-hide-truncation-column",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.054),
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
          truncationPattern="tooltip"
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "text-wrap-tooltip-truncation-rows",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.055),
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
          truncationPattern="show-hide"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "text-wrap-show-hide-truncation-rows",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.043),
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
          truncationPattern="tooltip"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "text-wrap-tooltip-truncation-table-cell",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.039),
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
          truncationPattern="show-hide"
          globalRowHeight={40}
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "text-wrap-show-hide-truncation-table-cell",
        testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.042),
        cypressScreenshotOptions: {
          capture: "viewport",
        },
      });
    });
  });
});

// This test needs to be last as it seems to affect other tests.
// For example, it will remove the last column for the remaining tests if placed higher.
describe("IcDataTable row deletion", () => {
  beforeEach(() => {
    cy.injectAxe();
    cy.viewport(1024, 768);
  });

  afterEach(() => {
    cy.task("generateReport");
  });

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
      testThreshold: setThresholdBasedOnEnv(DEFAULT_THRESHOLD + 0.049),
      cypressScreenshotOptions: {
        capture: "viewport",
      },
      delay: 500,
    });

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").should(HAVE_LENGTH, 6);

    cy.get(DATA_TABLE_SELECTOR).find("ic-button").eq(2).click();

    cy.findShadowEl(DATA_TABLE_SELECTOR, "tr").should(HAVE_LENGTH, 5);
  });
});
