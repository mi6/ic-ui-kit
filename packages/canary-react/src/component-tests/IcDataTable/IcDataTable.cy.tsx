/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React, { ReactElement } from "react";
import { mount } from "cypress/react";
import { IcDataTable, IcDataTableTitleBar } from "../../components";
import { IcButton, IcEmptyState, SlottedSVG } from "@ukic/react";

import {
  COLS,
  COLS_ALIGNMENT,
  DATA,
  DATA_CELL_ALIGNMENT,
  ICON_COLS,
  ICON_DATA,
  LONG_COLS,
  LONG_DATA,
  ROW_ALIGNMENT,
  ROW_HEADER_COLS,
  ROW_HEADER_DATA,
} from "../../../../canary-web-components/src/components/ic-data-table/story-data";

import {
  BE_VISIBLE,
  HAVE_CLASS,
} from "../../../../react/src/component-tests/utils/constants";

import { setThresholdBasedOnEnv } from "../../../../react/cypress/utils/helpers";
import { CYPRESS_AXE_OPTIONS } from "@ukic/react/cypress/utils/a11y";

const DATA_TABLE_SELECTOR = "ic-data-table";
const LOADING_INDICATOR_SELECTOR = "ic-loading-indicator";
const PAGINATION_SELECTOR = "ic-pagination";
const PAGINATION_BAR_SELECTOR = "ic-pagination-bar";

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
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  describe("IcDataTable visual regression tests", () => {
    it("renders", () => {
      mount(<BasicDataTable />);

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "default",
        testThreshold: setThresholdBasedOnEnv(0.109),
      });
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
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
      cy.compareSnapshot({
        name: "with-row-headers",
        testThreshold: setThresholdBasedOnEnv(0.106),
      });
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });

    it("should render embedded", () => {
      mount(<BasicDataTable embedded />);

      cy.checkHydrated(DATA_TABLE_SELECTOR);

      cy.compareSnapshot({
        name: "embedded",
        testThreshold: setThresholdBasedOnEnv(0.11),
      });
    });

    it("should sort data when the sort button is clicked", () => {
      mount(<BasicDataTable sortable />);
      cy.checkHydrated(DATA_TABLE_SELECTOR);
      cy.compareSnapshot({
        name: "sortable",
        testThreshold: setThresholdBasedOnEnv(0.109),
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(1).click();

      cy.compareSnapshot({
        name: "sortable-first-sort",
        testThreshold: setThresholdBasedOnEnv(0.189),
      });

      cy.findShadowEl(DATA_TABLE_SELECTOR, ".sort-button").eq(2).click();

      cy.compareSnapshot({
        name: "sortable-second-sort",
        testThreshold: setThresholdBasedOnEnv(0.113),
      });
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

      cy.compareSnapshot({
        name: "pagination",
        testThreshold: setThresholdBasedOnEnv(0.138),
      });
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
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
        testThreshold: setThresholdBasedOnEnv(0.105),
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
        testThreshold: setThresholdBasedOnEnv(0.114),
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
        testThreshold: setThresholdBasedOnEnv(0.115),
      });
    });

    it("should correctly render a custom icon in the header when passed through the column prop", () => {
      mount(
        <IcDataTable
          columns={ICON_COLS}
          data={ICON_DATA}
          caption="Data Tables"
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);
      cy.compareSnapshot({
        name: "custom-icons",
        testThreshold: setThresholdBasedOnEnv(0.0845),
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
        testThreshold: setThresholdBasedOnEnv(0.107),
      });
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });

    it("should render the empty state when data is null", () => {
      mount(<IcDataTable columns={COLS} caption="Data Tables" />);

      cy.checkHydrated(DATA_TABLE_SELECTOR);
      cy.compareSnapshot({
        name: "null-data",
        testThreshold: setThresholdBasedOnEnv(0.047),
      });
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });

    it("should render the empty state when no data is passed through", () => {
      mount(<IcDataTable columns={COLS} data={[]} caption="Data Tables" />);

      cy.checkHydrated(DATA_TABLE_SELECTOR);
      cy.compareSnapshot({
        name: "no-data",
        testThreshold: setThresholdBasedOnEnv(0.047),
      });
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
        testThreshold: setThresholdBasedOnEnv(0.056),
      });
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
    });

    it("should render the updating state when the `updating` prop is passed through", () => {
      mount(<IcDataTable columns={COLS} updating caption="Data Tables" />);

      cy.checkHydrated(DATA_TABLE_SELECTOR);
      cy.compareSnapshot({
        name: "updating",
        testThreshold: setThresholdBasedOnEnv(0.088),
      });
    });

    it("should pass through the loadingOptions to the loading indicator", () => {
      mount(
        <IcDataTable
          columns={COLS}
          loading
          loadingOptions={{
            appearance: "light",
          }}
          caption="Data Tables"
        />
      );

      cy.checkHydrated(DATA_TABLE_SELECTOR);
      cy.compareSnapshot({
        name: "loading-options",
        testThreshold: setThresholdBasedOnEnv(0.081),
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
        testThreshold: setThresholdBasedOnEnv(0.047),
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
        testThreshold: setThresholdBasedOnEnv(0.094),
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
        testThreshold: setThresholdBasedOnEnv(0.0845),
      });
    });
  });

  it("should pass the caption down to any slotted ic-data-table-title-bar", () => {
    mount(
      <BasicDataTable>
        <IcDataTableTitleBar slot="title-bar" />
      </BasicDataTable>
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "slotted-title-bar",
      testThreshold: setThresholdBasedOnEnv(0.082),
    });

    cy.findShadowEl("ic-data-table-title-bar", ".header-container").contains(
      "Data Tables"
    );
  });

  // it("should not render custom icon in header when hideOnHeader is set", () => {
  //   const page = await newSpecPage({
  //     components: [DataTable],
  //     template: () => (
  //       <ic-data-table
  //         caption="Data tables"
  //         columns={columnsWithIconsHideOnHeader}
  //         data={DATA}
  //       ></ic-data-table>
  //     ),
  //   });

  //   expect(page.root).toMatchSnapshot();
  // });

  // it("should render column icon on all column cells if onAllCells is true, except ones that already have a custom icon", () => {
  //   const page = await newSpecPage({
  //     components: [DataTable],
  //     template: () => (
  //       <ic-data-table
  //         caption="Data tables"
  //         columns={columnsWithIconsOnAllCells}
  //         data={dataWithIcons}
  //       ></ic-data-table>
  //     ),
  //   });

  //   expect(page.root).toMatchSnapshot();
  // });

  // it("should apply a background to the loading indicator if data is supplied to the table", () => {
  //   mount(<BasicDataTable />);
  //   // TODO: no longer needed?
  //   cy.checkHydrated(DATA_TABLE_SELECTOR);
  //   cy.get(DATA_TABLE_SELECTOR).should(BE_VISIBLE);
  //   cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR).should(
  //     HAVE_CLASS,
  //     "show-background"
  //   );
  // });

  // it("should not apply a background to the loading indicator if no data is supplied to the table, and apply one when data is provided later", () => {
  //   mount(<IcDataTable caption="Data tables" columns={COLS} />);

  //   cy.checkHydrated(DATA_TABLE_SELECTOR);
  //   cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR).should(
  //     NOT_HAVE_CLASS,
  //     "show-background"
  //   );

  //   cy.get(DATA_TABLE_SELECTOR).invoke("prop", "data", DATA);

  //   cy.findShadowEl(DATA_TABLE_SELECTOR, LOADING_INDICATOR_SELECTOR).should(
  //     HAVE_CLASS,
  //     "show-background"
  //   );
  // });

  it("should cancel the loading state when the loading prop is `true` and data has been set after 1 second from initial loading", () => {
    mount(<IcDataTable caption="Data tables" columns={COLS} loading />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "data", DATA);

    cy.compareSnapshot({
      name: "loaded-data-after-1-second",
      testThreshold: setThresholdBasedOnEnv(0.173),
    });

    cy.compareSnapshot({
      name: "loaded-data",
      testThreshold: setThresholdBasedOnEnv(0.181),
    });
    //   const page = await newSpecPage({
    //     components: [DataTable],
    //     template: () => (
    //       <ic-data-table
    //         caption="Data tables"
    //         columns={COLS}
    //         loading={true}
    //       ></ic-data-table>
    //     ),
    //   });

    //   expect(page.root).toMatchSnapshot();

    //   await waitForTimeout(1100);
    //   page.root.data = data;
    //   await page.waitForChanges();

    //   expect(page.root).toMatchSnapshot();
  });

  it("should wait 1 second before rendering the data when the `loading` prop is passed through and data is set before 1 second of loading", () => {
    mount(<IcDataTable caption="Data tables" columns={COLS} loading />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);
    cy.compareSnapshot({
      name: "loading-before-loaded-data",
      testThreshold: setThresholdBasedOnEnv(0.075),
    });

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "data", DATA);

    cy.compareSnapshot({
      name: "loading-after-loaded-data",
      testThreshold: setThresholdBasedOnEnv(0.181),
    });
  });

  // it("should return correct alignment from getCellAlignment", () => {
  //   const page = await newSpecPage({
  //     components: [DataTable],
  //     template: () => (
  //       <ic-data-table
  //         caption="Data tables"
  //         columns={COLS}
  //         data={dataWithCellOverrides}
  //         showPagination
  //       ></ic-data-table>
  //     ),
  //   });

  //   let cellAlignment = await page.rootInstance.getCellAlignment(
  //     {
  //       data: name1,
  //       cellAlignment: { horizontal: "middle", vertical: "center" },
  //       emphasis: "high",
  //     },
  //     "vertical"
  //   );
  //   expect(cellAlignment).toBe("center");

  //   cellAlignment = await page.rootInstance.getCellAlignment(
  //     {
  //       data: name1,
  //       cellAlignment: { horizontal: "middle", vertical: "center" },
  //       emphasis: "high",
  //     },
  //     "horizontal"
  //   );
  //   expect(cellAlignment).toBe("middle");

  //   cellAlignment = await page.rootInstance.getCellAlignment(
  //     {
  //       data: name1,
  //       columnAlignment: { horizontal: "middle", vertical: "center" },
  //       emphasis: "high",
  //     },
  //     "horizontal"
  //   );
  //   expect(cellAlignment).toBeUndefined;

  //   cellAlignment = await page.rootInstance.getCellAlignment(
  //     name1,
  //     "horizontal"
  //   );
  //   expect(cellAlignment).toBeUndefined;

  //   cellAlignment = await page.rootInstance.getCellAlignment(
  //     undefined,
  //     "horizontal"
  //   );
  //   expect(cellAlignment).toBeUndefined;
  // });

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
      .contains("Page 1");

    cy.get(DATA_TABLE_SELECTOR)
      .find("#next-page-button", { includeShadowDom: true })
      .click();

    cy.get(DATA_TABLE_SELECTOR)
      .find("ic-pagination-item", { includeShadowDom: true })
      .find("ic-typography", { includeShadowDom: true })
      .contains("Page 2");
  });

  it("should change number of items per page when select dropdown is changed", () => {
    mount(
      <IcDataTable
        caption="Data tables"
        columns={COLS}
        data={LONG_DATA}
        showPagination
        paginationOptions={{
          itemsPerPage: [
            { label: "10", value: "10" },
            { label: "25", value: "25" },
            { label: "50", value: "50" },
          ],
          type: "data",
        }}
      />
    );

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    // TODO
    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "rowsPerPage", 10);

    cy.get(DATA_TABLE_SELECTOR)
      .find(".item-pagination-label", { includeShadowDom: true })
      .contains("1 - 10 of 20 items");

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "rowsPerPage", 20);

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "toRow", 20);
    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "previousRowsPerPage", 20);
    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "rowsPerPage", 10);

    cy.get(DATA_TABLE_SELECTOR)
      .find(".item-pagination-label", { includeShadowDom: true })
      .contains("1 - 10 of 20 items");

    //   dataTable.dispatchEvent(icItemsPerPageChangeEventUp);

    //   page.rootInstance.rowsPerPage = 20;

    //   dataTable.dispatchEvent(icPageChangeEvent);

    //   page.rootInstance.toRow = 20;

    //   await page.waitForChanges();

    //   dataTable.dispatchEvent(icItemsPerPageChangeEventDown);

    //   page.rootInstance.previousRowsPerPage = 20;

    //   page.rootInstance.rowsPerPage = 10;

    //   dataTable.dispatchEvent(icPageChangeEvent);

    //   await page.waitForChanges();

    //   expect(itemsPerPageLabel.textContent).toEqual("1 - 10 of 20 items");
  });

  it("should change the density of the element when it receives the icTableDensityUpdate event", () => {
    mount(
      <BasicDataTable>
        <IcDataTableTitleBar slot="title-bar" />
      </BasicDataTable>
    );
    //   const page = await newSpecPage({
    //     components: [DataTable],
    //     template: () => (
    //       <ic-data-table caption="Data tables" columns={COLS} data={DATA}>
    //         <ic-data-table-title-bar slot="title-bar"></ic-data-table-title-bar>
    //       </ic-data-table>
    //     ),
    //   });

    //   expect(page.rootInstance.density).toBe("default");

    //   let icDensityUpdateEvent = new CustomEvent("icTableDensityUpdate", {
    //     detail: { value: "dense" },
    //   });
    //   page.root.dispatchEvent(icDensityUpdateEvent);

    //   await page.waitForChanges();
    //   expect(page.rootInstance.density).toBe("dense");

    //   icDensityUpdateEvent = new CustomEvent("icTableDensityUpdate", {
    //     detail: { value: "spacious" },
    //   });
    //   page.root.dispatchEvent(icDensityUpdateEvent);

    //   await page.waitForChanges();
    //   expect(page.rootInstance.density).toBe("spacious");
  });

  // it("should highlight the correct row when clicked", () => {
  //   mount(<IcDataTable caption="Data tables" columns={COLS} data={DATA} />);
  //   cy.checkHydrated(DATA_TABLE_SELECTOR);
  //   cy.get(DATA_TABLE_SELECTOR)
  //     .find("tr")
  //     .eq(1)
  //     .click()
  //     .should(HAVE_CLASS, highlightedRowClass);
  //   cy.find("tr").eq(2).click().should(HAVE_CLASS, highlightedRowClass);
  //   cy.find("tr").eq(1).should(NOT_HAVE_CLASS, highlightedRowClass);

  //   //   const dataTable = document.querySelector(icDataTable);

  //   //   const rows = dataTable.shadowRoot.querySelectorAll("tr");

  //   //   rows[1].click();

  //   //   await page.waitForChanges();

  //   //   expect(rows[1]).toHaveClass();

  //   //   rows[2].click();

  //   //   await page.waitForChanges();

  //   //   expect(rows[1]).not.toHaveClass(highlightedRowClass);
  //   //   expect(rows[2]).toHaveClass(highlightedRowClass);

  //   //   page.win.dispatchEvent(
  //   //     new MouseEvent("click", {
  //   //       bubbles: true,
  //   //       cancelable: true,
  //   //     })
  //   //   );

  //   //   await page.waitForChanges();

  //   //   expect(rows[1]).not.toHaveClass(highlightedRowClass);
  //   //   expect(rows[2]).not.toHaveClass(highlightedRowClass);
  // });

  // it("should apply a specified row height to all rows when globalRowHeight is set", () => {
  //   const page = await newSpecPage({
  //     components: [DataTable],
  //     template: () => (
  //       <ic-data-table
  //         caption="Data tables"
  //         columns={COLS}
  //         data={DATA}
  //         globalRowHeight={80}
  //       ></ic-data-table>
  //     ),
  //   });

  //   expect(page.root).toMatchSnapshot();
  // });
  //  });

  // it("should reset all rows to the default height when resetRowHeights is called", () => {
  //   mount(
  //     <BasicDataTable
  //       globalRowHeight={80}
  //       variableRowHeight={({ index }) => (index % 2 === 0 ? 200 : null)}
  //     />
  //   );
  //   cy.checkHydrated(DATA_TABLE_SELECTOR);
  //   cy.get(DATA_TABLE_SELECTOR).invoke("resetRowHeights");
  // });

  // it("should emit icRowHeightChange when globalRowHeight or variableRowHeight is changed", () => {
  //   const page = await newSpecPage({
  //     components: [DataTable],
  //     template: () => (
  //       <ic-data-table
  //         caption="Data tables"
  //         columns={COLS}
  //         data={DATA}
  //         globalRowHeight={80}
  //         // eslint-disable-next-line react/jsx-no-bind
  //         variableRowHeight={({ index }) => (index % 2 === 0 ? 200 : null)}
  //       ></ic-data-table>
  //     ),
  //   });

  //   const eventSpy = jest.fn();

  //   page.root.addEventListener("icRowHeightChange", eventSpy);

  //   const dataTable = page.root as HTMLIcDataTableElement;
  //   dataTable.globalRowHeight = 50;
  //   await page.waitForChanges();

  //   expect(eventSpy).toHaveBeenCalledTimes(1);

  //   dataTable.variableRowHeight = ({ index }) => (index % 2 === 0 ? 100 : null);
  //   await page.waitForChanges();

  //   expect(eventSpy).toHaveBeenCalledTimes(2);
  // });

  it("should apply the correct density scaler to rowHeights", () => {
    mount(<BasicDataTable globalRowHeight={80} density="dense" />);
    // todo
    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "density-dense",
      testThreshold: setThresholdBasedOnEnv(0.104),
    });

    cy.get(DATA_TABLE_SELECTOR).invoke("prop", "density", "spacious");
    cy.compareSnapshot({
      name: "density-spacious",
      testThreshold: setThresholdBasedOnEnv(0.116),
    });
  });

  it("should not override the height of rows if `globalRowHeight` is set to auto", () => {
    mount(<BasicDataTable globalRowHeight="auto" />);

    cy.checkHydrated(DATA_TABLE_SELECTOR);

    cy.compareSnapshot({
      name: "slotted-custom-element-in-cell",
      testThreshold: setThresholdBasedOnEnv(0.106),
    });
  });

  // it("should slot a custom element into a cell", () => {
  //   mount(
  //     <IcDataTable columns={COLS_ELEMENTS} data={DATA} caption="Data tables">
  //       {DATA.map((_, index) => (
  //         <IcButton key={index} slot={`actions-${index}`}>
  //           Delete
  //         </IcButton>
  //       ))}
  //     </IcDataTable>
  //   );

  //   cy.checkHydrated(DATA_TABLE_SELECTOR);
  //   cy.compareSnapshot({name: "slotted-custom-element-in-cell", testThreshold: setThresholdBasedOnEnv()})
  // });

  // it("should render text-wrapped content in cells", () => {
  //   mount(
  //     <IcDataTable
  //       caption="Data tables"
  //       columns={COLS}
  //       data={LONG_DATA_VALUES}
  //       globalRowHeight="auto"
  //     ></IcDataTable>
  //   );

  //   cy.checkHydrated(DATA_TABLE_SELECTOR);
  //   cy.compareSnapshot({name: "slotted-custom-element-in-cell", testThreshold: setThresholdBasedOnEnv()})
  // });
});
