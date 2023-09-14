import { newSpecPage } from "@stencil/core/testing";
import { Button } from "../../../ic-button/ic-button";
import { DataTable } from "../../ic-data-table";
import { Pagination } from "../../../ic-pagination/ic-pagination";
import { PaginationBar } from "../../../ic-pagination-bar/ic-pagination-bar";
import { PaginationItem } from "../../../ic-pagination-item/ic-pagination-item";
import { h } from "@stencil/core";
import { IcDataTableColumnObject } from "../../ic-data-table.types";
import { waitForTimeout } from "../../../../testspec.setup";
import { EmptyState } from "../../../ic-empty-state/ic-empty-state";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

const icDataTable = "ic-data-table";
const icLoadingIndicator = "ic-loading-indicator";
const employeeNumber = "Employee number";
const name1 = "John Smith";
const name2 = "Sally Jones";
const name3 = "Luke Fisher";
const name4 = "Jane Lock";
const name5 = "Margaret Hale";
const highlightedRowClass = "table-row-selected";
const showBackgroundClass = "show-background";

const columns: IcDataTableColumnObject[] = [
  { key: "name", title: "Name", dataType: "string" },
  { key: "age", title: "Age", dataType: "number" },
  { key: "department", title: "Department", dataType: "string" },
  { key: "employeeNumber", title: employeeNumber, dataType: "number" },
];

const columnsWithElements: IcDataTableColumnObject[] = [
  { key: "name", title: "Name", dataType: "string" },
  { key: "age", title: "Age", dataType: "number" },
  { key: "department", title: "Department", dataType: "string" },
  { key: "employeeNumber", title: employeeNumber, dataType: "number" },
  { key: "actions", title: "Actions", dataType: "element" },
];

const columnsWithRowHeader: IcDataTableColumnObject[] = [
  { key: "header", title: employeeNumber, dataType: "number" },
  { key: "name", title: "Name", dataType: "string" },
  { key: "age", title: "Age", dataType: "number" },
  { key: "department", title: "Department", dataType: "string" },
];

const columnsWithOverrides: IcDataTableColumnObject[] = [
  { key: "name", title: "Name", dataType: "string", cellAlignment: "middle" },
  {
    key: "age",
    title: "Age",
    dataType: "number",
    columnAlignment: { horizontal: "middle", vertical: "center" },
  },
  {
    key: "department",
    title: "Department",
    dataType: "string",
    emphasis: "high",
  },
  {
    key: "employeeNumber",
    title: employeeNumber,
    dataType: "number",
    emphasis: "low",
  },
];

const data = [
  { name: name1, age: 36, department: "Accounts", employeeNumber: 1 },
  {
    name: name2,
    age: 32,
    department: "Engineering",
    employeeNumber: 2,
  },
  { name: "Tim Rayes", age: 41, department: "Sales", employeeNumber: 3 },
  {
    name: name3,
    age: "23",
    department: "Engineering",
    employeeNumber: 4,
  },
  { name: name4, age: 34, department: "Engineering", employeeNumber: 5 },
  { name: name5, age: 45, department: "HR", employeeNumber: 6 },
];

const dataWithRowHeaders = [
  { header: { title: 1 }, name: name1, age: 36, department: "Accounts" },
  {
    header: { title: 2 },
    name: name2,
    age: 32,
    department: "Engineering",
  },
  { header: { title: 3 }, name: "Tim Rayes", age: 41, department: "Sales" },
  {
    header: { title: 4 },
    name: name3,
    age: "23",
    department: "Engineering",
  },
  {
    header: { title: 5 },
    name: name4,
    age: 34,
    department: "Engineering",
  },
  { header: { title: 6 }, name: name5, age: 45, department: "HR" },
];

const dataWithRowOverrides = [
  {
    header: { title: 1, rowAlignment: "middle", emphasis: "high" },
    name: name1,
    age: 36,
    department: "Accounts",
  },
  {
    header: { title: 2, rowAlignment: "top", emphasis: "low" },
    name: name2,
    age: 32,
    department: "Engineering",
  },
  {
    header: { title: 3, rowAlignment: "bottom", emphasis: "high" },
    name: "Tim Rayes",
    age: 41,
    department: "Sales",
  },
  {
    header: { title: 4, rowAlignment: "middle", emphasis: "low" },
    name: name3,
    age: "23",
    department: "Engineering",
  },
  {
    header: { title: 5, rowAlignment: "top", emphasis: "high" },
    name: name4,
    age: 34,
    department: "Engineering",
  },
  {
    header: { title: 6, rowAlignment: "bottom", emphasis: "low" },
    name: name5,
    age: 45,
    department: "HR",
  },
];

const dataWithObjects = [
  { name: name1, age: 36, department: "Accounts", employeeNumber: 1 },
  {
    name: name2,
    age: 32,
    department: "Engineering",
    employeeNumber: 2,
  },
  {
    name: { data: "Tim Rayes" },
    age: 41,
    department: "Sales",
    employeeNumber: 3,
  },
  {
    name: { data: name3 },
    age: "23",
    department: "Engineering",
    employeeNumber: 4,
  },
  { name: name4, age: 34, department: "Engineering", employeeNumber: 5 },
  { name: name5, age: 45, department: "HR", employeeNumber: 6 },
];

const dataWithCellOverrides = [
  {
    name: {
      data: name1,
      columnAlignment: { horizontal: "middle", vertical: "center" },
      emphasis: "high",
    },
    age: 36,
    department: "Accounts",
    employeeNumber: 1,
  },
  {
    name: {
      data: name2,
      columnAlignment: { horizontal: "top", vertical: "right" },
      emphasis: "low",
    },
    age: 32,
    department: "Engineering",
    employeeNumber: 2,
  },
  {
    name: {
      data: "Tim Rayes",
      columnAlignment: { horizontal: "bottom", vertical: "left" },
      emphasis: "high",
    },
    age: 41,
    department: "Sales",
    employeeNumber: 3,
  },
  {
    name: {
      data: name3,
      columnAlignment: { horizontal: "middle", vertical: "center" },
      emphasis: "low",
    },
    age: "23",
    department: "Engineering",
    employeeNumber: 4,
  },
  {
    name: {
      data: name4,
      columnAlignment: { horizontal: "top", vertical: "right" },
      emphasis: "high",
    },
    age: 34,
    department: "Engineering",
    employeeNumber: 5,
  },
  {
    name: {
      data: name5,
      columnAlignment: { horizontal: "bottom", vertical: "left" },
      emphasis: "high",
    },
    age: 45,
    department: "HR",
    employeeNumber: 6,
  },
];

const longData = [
  { name: name1, age: 36, department: "Accounts", employeeNumber: 1 },
  {
    name: name2,
    age: 32,
    department: "Engineering",
    employeeNumber: 2,
  },
  { name: "Tim Rayes", age: 41, department: "Sales", employeeNumber: 3 },
  {
    name: name3,
    age: "23",
    department: "Engineering",
    employeeNumber: 4,
  },
  { name: name4, age: 34, department: "Engineering", employeeNumber: 5 },
  { name: name5, age: 45, department: "HR", employeeNumber: 6 },
  { name: name1, age: 36, department: "Accounts", employeeNumber: 7 },
  {
    name: name2,
    age: 32,
    department: "Engineering",
    employeeNumber: 8,
  },
  { name: "Tim Rayes", age: 41, department: "Sales", employeeNumber: 9 },
  {
    name: name3,
    age: "23",
    department: "Engineering",
    employeeNumber: 10,
  },
  { name: name4, age: 34, department: "Engineering", employeeNumber: 11 },
  { name: name5, age: 45, department: "HR", employeeNumber: 12 },
  { name: name1, age: 36, department: "Accounts", employeeNumber: 13 },
  {
    name: name2,
    age: 32,
    department: "Engineering",
    employeeNumber: 14,
  },
  { name: "Tim Rayes", age: 41, department: "Sales", employeeNumber: 15 },
  {
    name: name3,
    age: "23",
    department: "Engineering",
    employeeNumber: 16,
  },
  { name: name4, age: 34, department: "Engineering", employeeNumber: 17 },
  { name: name5, age: 45, department: "HR", employeeNumber: 18 },
  { name: name1, age: 36, department: "Accounts", employeeNumber: 19 },
  {
    name: name2,
    age: 32,
    department: "Engineering",
    employeeNumber: 20,
  },
];

describe(icDataTable, () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with row headers", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columnsWithRowHeader}
          data={dataWithRowHeaders}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render embedded", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          embedded
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render sortable", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          sortable
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with pagination", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={longData}
          show-pagination
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with column overrides", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columnsWithOverrides}
          data={data}
          show-pagination
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with row overrides", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columnsWithRowHeader}
          data={dataWithRowOverrides}
          show-pagination
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with cell overrides", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={dataWithCellOverrides}
          show-pagination
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render the empty state when data is null", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table caption="test table" columns={columns}></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render the empty state when no data is passed through", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={[]}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should be able to slot a custom empty state into the data table", async () => {
    const page = await newSpecPage({
      components: [Button, DataTable, EmptyState],
      template: () => (
        <ic-data-table caption="test table" columns={columns} data={[]}>
          <ic-empty-state
            slot="empty-state"
            aligned="left"
            heading="Test heading"
            body="test body"
          >
            <ic-button slot="actions">Button</ic-button>
          </ic-empty-state>
        </ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render the loading state when the `loading` prop is passed through", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          loading={true}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render the updating state when the `updating` prop is passed through", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          updating={true}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should pass through the loadingOptions to the loading indicator", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          loadingOptions={{
            appearance: "light",
          }}
          loading={true}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should pass through the updatingOptions to the linear loading indicator", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          updatingOptions={{
            progress: 30,
          }}
          updating={true}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should apply a background to the loading indicator if data is supplied to the table", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="Table"
          columns={columns}
          data={data}
        ></ic-data-table>
      ),
    });

    expect(page.rootInstance.loadingOptions.showBackground).toBeTruthy();
    const loadingIndicator =
      page.root.shadowRoot.querySelector(icLoadingIndicator);
    expect(loadingIndicator).toHaveClass(showBackgroundClass);
  });

  it("should not apply a background to the loading indicator if no data is supplied to the table, and apply one when data is provided later", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table caption="Table" columns={columns}></ic-data-table>
      ),
    });

    expect(page.rootInstance.loadingOptions.showBackground).toBeFalsy();
    let loadingIndicator =
      page.root.shadowRoot.querySelector(icLoadingIndicator);
    expect(loadingIndicator).not.toHaveClass(showBackgroundClass);

    page.root.data = data;
    await page.waitForChanges();

    expect(page.rootInstance.loadingOptions.showBackground).toBeTruthy();
    loadingIndicator = page.root.shadowRoot.querySelector(icLoadingIndicator);
    expect(loadingIndicator).toHaveClass(showBackgroundClass);
  });

  it("when loading is `true`, setting data should cancel the loading after 1 second from initial loading", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          loading={true}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();

    await waitForTimeout(1100);
    page.root.data = data;
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("when loading is `true`, if data is set before 1 second of loading it will wait 1 second before rendering the data", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          loading={true}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();

    page.root.data = data;
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();

    await waitForTimeout(1500);
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it("should return correct alignment from getCellAlignment", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={dataWithCellOverrides}
          show-pagination
        ></ic-data-table>
      ),
    });

    let cellAlignment = await page.rootInstance.getCellAlignment(
      {
        data: name1,
        cellAlignment: { horizontal: "middle", vertical: "center" },
        emphasis: "high",
      },
      "vertical"
    );
    expect(cellAlignment).toBe("center");

    cellAlignment = await page.rootInstance.getCellAlignment(
      {
        data: name1,
        cellAlignment: { horizontal: "middle", vertical: "center" },
        emphasis: "high",
      },
      "horizontal"
    );
    expect(cellAlignment).toBe("middle");

    cellAlignment = await page.rootInstance.getCellAlignment(
      {
        data: name1,
        columnAlignment: { horizontal: "middle", vertical: "center" },
        emphasis: "high",
      },
      "horizontal"
    );
    expect(cellAlignment).toBeUndefined;

    cellAlignment = await page.rootInstance.getCellAlignment(
      name1,
      "horizontal"
    );
    expect(cellAlignment).toBeUndefined;

    cellAlignment = await page.rootInstance.getCellAlignment(
      undefined,
      "horizontal"
    );
    expect(cellAlignment).toBeUndefined;
  });

  it("should change page when the pagination items are clicked", async () => {
    const page = await newSpecPage({
      components: [
        Button,
        DataTable,
        Pagination,
        PaginationBar,
        PaginationItem,
      ],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={longData}
          show-pagination
        ></ic-data-table>
      ),
    });

    await page.waitForChanges();

    const dataTable = document.querySelector(icDataTable);

    const paginationBar =
      dataTable.shadowRoot.querySelector("ic-pagination-bar");

    const pagination = paginationBar.shadowRoot.querySelector("ic-pagination");

    const paginationItem =
      pagination.shadowRoot.querySelector("ic-pagination-item");

    let currentPage =
      paginationItem.shadowRoot.querySelector("ic-typography").textContent;

    const nextPageButton = pagination.shadowRoot.querySelector(
      "#next-page-button"
    ) as HTMLButtonElement;

    expect(currentPage).toEqual("Page 1");

    nextPageButton.focus();

    nextPageButton.click();

    const icPageChangeEvent = new CustomEvent("icPageChange", {
      detail: { value: "2" },
    });

    dataTable.dispatchEvent(icPageChangeEvent);

    currentPage = "Page 2";

    page.rootInstance.updateScrollOffset();

    await page.waitForChanges();

    expect(currentPage).toEqual("Page 2");
  });

  it("should change number of items per page when select dropdown is changed", async () => {
    const page = await newSpecPage({
      components: [DataTable, PaginationBar],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={longData}
          show-pagination
          paginationOptions={{
            itemsPerPage: [
              { label: "10", value: "10" },
              { label: "25", value: "25" },
              { label: "50", value: "50" },
            ],
            type: "data",
          }}
        ></ic-data-table>
      ),
    });

    await page.waitForChanges();

    const dataTable = document.querySelector(icDataTable);

    const paginationBar =
      dataTable.shadowRoot.querySelector("ic-pagination-bar");

    const itemsPerPageLabel = paginationBar.shadowRoot.querySelector(
      ".item-pagination-label"
    );

    page.rootInstance.rowsPerPage = 10;

    expect(itemsPerPageLabel.textContent).toEqual("1 - 10 of 20 items");

    const icPageChangeEvent = new CustomEvent("icPageChange", {
      detail: { value: "1" },
    });

    const icItemsPerPageChangeEventUp = new CustomEvent(
      "icItemsPerPageChange",
      {
        detail: { value: "20" },
      }
    );

    const icItemsPerPageChangeEventDown = new CustomEvent(
      "icItemsPerPageChange",
      { detail: { value: "10" } }
    );

    dataTable.dispatchEvent(icItemsPerPageChangeEventUp);

    page.rootInstance.rowsPerPage = 20;

    dataTable.dispatchEvent(icPageChangeEvent);

    page.rootInstance.toRow = 20;

    await page.waitForChanges();

    dataTable.dispatchEvent(icItemsPerPageChangeEventDown);

    page.rootInstance.previousRowsPerPage = 20;

    page.rootInstance.rowsPerPage = 10;

    dataTable.dispatchEvent(icPageChangeEvent);

    await page.waitForChanges();

    expect(itemsPerPageLabel.textContent).toEqual("1 - 10 of 20 items");
  });

  it("should sort data when the sort button is clicked", async () => {
    const page = await newSpecPage({
      components: [Button, DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={dataWithObjects}
          sortable
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);

    const sortButton = Array.from(
      dataTable.shadowRoot.querySelectorAll(".sort-button")
    ) as HTMLIcButtonElement[];

    expect(page.root).toMatchSnapshot();

    sortButton[0].click();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();

    sortButton[0].click();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();

    sortButton[1].click();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should highlight the correct row when clicked", async () => {
    const page = await newSpecPage({
      components: [Button, DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);

    const rows = dataTable.shadowRoot.querySelectorAll("tr");

    rows[1].click();

    await page.waitForChanges();

    expect(rows[1]).toHaveClass(highlightedRowClass);

    rows[2].click();

    await page.waitForChanges();

    expect(rows[1]).not.toHaveClass(highlightedRowClass);
    expect(rows[2]).toHaveClass(highlightedRowClass);

    page.win.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(rows[1]).not.toHaveClass(highlightedRowClass);
    expect(rows[2]).not.toHaveClass(highlightedRowClass);
  });

  it("should slot a custom element into a cell", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="Table"
          columns={columnsWithElements}
          data={data}
        >
          {data.map((_, index) => (
            <ic-button key={index} slot={`actions-${index}`}>
              Delete
            </ic-button>
          ))}
        </ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });
});
