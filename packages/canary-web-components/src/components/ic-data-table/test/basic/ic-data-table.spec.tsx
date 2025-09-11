import { newSpecPage } from "@stencil/core/testing";
import { IcButton } from "@ukic/web-components/dist/components/ic-button";
import { DataTable } from "../../ic-data-table";
import { IcLoadingIndicator } from "@ukic/web-components/dist/components/ic-loading-indicator";
import { IcPagination } from "@ukic/web-components/dist/components/ic-pagination";
import { PaginationBar } from "../../../ic-pagination-bar/ic-pagination-bar";
import { IcPaginationItem } from "@ukic/web-components/dist/components/ic-pagination-item";
import { IcTooltip } from "@ukic/web-components/dist/components/ic-tooltip";
import { IcTypography } from "@ukic/web-components/dist/components/ic-typography";
import { h } from "@stencil/core";
import { IcDataTableColumnObject } from "../../ic-data-table.types";
import { waitForTimeout } from "../../../../testspec.setup";
import { IcEmptyState } from "@ukic/web-components/dist/components/ic-empty-state";
import { DataTableTitleBar } from "../../../ic-data-table-title-bar/ic-data-table-title-bar";
import {
  COLUMNS_NO_TEXT_WRAP,
  COLUMNS_TEXT_WRAP,
  LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS,
  LONG_DATA_VALUES,
} from "../../story-data";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

const icDataTable = "ic-data-table";
const employeeNumber = "Employee number";
const name1 = "John Smith";
const name2 = "Sally Jones";
const name3 = "Luke Fisher";
const name4 = "Jane Lock";
const name5 = "Margaret Hale";
const customIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><title>Error</title><g><path d="M8.77 3L3.5 8.27V15.73L8.77 21H16.23L21.5 15.73V8.27L16.23 3M8.91 7L12.5 10.59L16.09 7L17.5 8.41L13.91 12L17.5 15.59L16.09 17L12.5 13.41L8.91 17L7.5 15.59L11.09 12L7.5 8.41" /></g></svg>';
const copyIconSVG =
  '<svg aria-label="copy-button" xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="#000000"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/></svg>';
const cellphoneIconSVG =
  '<svg aria-label="cellphone-button" xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="#000000"><path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"/></svg>';
const downloadIconSVG =
  '<svg aria-label="download-button" xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="#000000"><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/></svg>';
const SORT_BUTTON_CLASS = ".sort-button";
const MOCK_TOOLTIP = {
  setAttribute: (attribute: string, value: string): string | null =>
    attribute + value,
  remove: (): null => null,
};
const CELL_TYPOGRAPHY = ".table-cell ic-typography";
const TABLE_CONTAINER_CLASS = ".table-container";

const columns: IcDataTableColumnObject[] = [
  { key: "name", title: "Name", dataType: "string" },
  { key: "age", title: "Age", dataType: "number" },
  { key: "department", title: "Department", dataType: "string" },
  { key: "employeeNumber", title: employeeNumber, dataType: "number" },
];

const columnsWithHiddenAge: IcDataTableColumnObject[] = [
  { key: "name", title: "Name", dataType: "string" },
  { key: "age", title: "Age", dataType: "number", hidden: true },
  { key: "department", title: "Department", dataType: "string" },
  { key: "employeeNumber", title: employeeNumber, dataType: "number" },
];

const columnsWithElements: IcDataTableColumnObject[] = [
  { key: "firstName", title: "First name", dataType: "string" },
  { key: "lastName", title: "Last name", dataType: "string" },
  { key: "age", title: "Age", dataType: "number" },
  { key: "jobTitle", title: "Job title", dataType: "string" },
  { key: "address", title: "Address", dataType: "address" },
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

const columnsWithIcons: IcDataTableColumnObject[] = [
  {
    key: "name",
    title: "Name",
    dataType: "string",
    icon: {
      icon: customIcon,
    },
  },
  { key: "age", title: "Age", dataType: "number" },
  { key: "department", title: "Department", dataType: "string" },
  { key: "employeeNumber", title: employeeNumber, dataType: "number" },
];

const columnsWithIconsOnAllCells: IcDataTableColumnObject[] = [
  {
    key: "name",
    title: "Name",
    dataType: "string",
    icon: {
      icon: customIcon,
      onAllCells: true,
    },
  },
  { key: "age", title: "Age", dataType: "number" },
  { key: "department", title: "Department", dataType: "string" },
  { key: "employeeNumber", title: employeeNumber, dataType: "number" },
];

const columnsWithIconsHideOnHeader: IcDataTableColumnObject[] = [
  {
    key: "name",
    title: "Name",
    dataType: "string",
    icon: {
      icon: customIcon,
      hideOnHeader: true,
    },
  },
  { key: "age", title: "Age", dataType: "number" },
  { key: "department", title: "Department", dataType: "string" },
  { key: "employeeNumber", title: employeeNumber, dataType: "number" },
];

const data = [
  { name: name1, employeeNumber: 1, department: "Accounts", age: 36 },
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

const dataWithElements = [
  {
    name: name1,
    age: 36,
    department: "Accounts",
    employeeNumber: 1,
    actions: "",
  },
  {
    name: name2,
    age: 32,
    department: "Engineering",
    employeeNumber: 2,
    actions: "",
  },
  {
    name: "Tim Rayes",
    age: 41,
    department: "Sales",
    employeeNumber: 3,
    actions: "",
  },
  {
    name: name3,
    age: "23",
    department: "Engineering",
    employeeNumber: 4,
    actions: "",
  },
  {
    name: name4,
    age: 34,
    department: "Engineering",
    employeeNumber: 5,
    actions: "",
  },
  { name: name5, age: 45, department: "HR", employeeNumber: 6, actions: "" },
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

const dataWithRowOverridesInRowOptions = [
  {
    rowOptions: { rowAlignment: { vertical: "middle", horizontal: "center" } },
    name: name1,
    age: 36,
    department: "Accounts",
  },
  {
    rowOptions: { rowAlignment: { vertical: "top", horizontal: "left" } },
    name: name2,
    age: 32,
    department: "Engineering",
  },
  {
    rowOptions: { rowAlignment: { vertical: "bottom", horizontal: "right" } },
    name: "Tim Rayes",
    age: 41,
    department: "Sales",
  },
  {
    name: name3,
    age: "23",
    department: "Engineering",
  },
  {
    name: name4,
    age: 34,
    department: "Engineering",
  },
  {
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

const dataWithLinks = [
  { name: name1, age: 36, department: "Accounts", employeeNumber: 1 },
  {
    name: name2,
    age: 32,
    department: "Engineering",
    employeeNumber: 2,
  },
  {
    name: { data: "Tim Rayes", href: "http://example.com" },
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
    age: 32,
    name: name2,
    employeeNumber: 2,
    department: "Engineering",
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

const dataWithIcons = [
  {
    name: {
      data: name1,
      icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/></svg>',
    },
    age: 36,
    department: "Accounts",
    employeeNumber: 1,
  },
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

  it("should render with column headers hidden", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          hide-column-headers
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with Age column hidden", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columnsWithHiddenAge}
          data={data}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with width and height set", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          height="800px"
          width="800px"
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with min-width set", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          min-width="400px"
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with max-width set", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          max-width="1200px"
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with column header truncation", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          column-header-truncation
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();

    page.root!.columnHeaderTruncation = false;
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();

    page.root!.columnHeaderTruncation = true;
    expect(page.rootInstance.prevTableContainerWidth).toBe(0);
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

  it("should render with a slotted ic-data-table-title-bar", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table caption="test table" columns={columns} data={data}>
          <ic-data-table-title-bar slot="title-bar"></ic-data-table-title-bar>
        </ic-data-table>
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

  it("should render with row overrides set via rowOptions", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columnsWithRowHeader}
          data={dataWithRowOverridesInRowOptions}
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

  it("should correctly render a custom icon in the header when passed through the column prop", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="Table"
          columns={columnsWithIcons}
          data={data}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should not render custom icon in header when hideOnHeader is set", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="Table"
          columns={columnsWithIconsHideOnHeader}
          data={data}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render column icon on all column cells if onAllCells is true, except ones that already have a custom icon", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="Table"
          columns={columnsWithIconsOnAllCells}
          data={dataWithIcons}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render a slotted icon instead of an icon defined in data", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table caption="Table" columns={columns} data={dataWithIcons}>
          <svg
            slot="name-0-icon"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"></path>
          </svg>
        </ic-data-table>
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

  it("should render the empty state on overlay when no data is passed through", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={[]}
          loading
          loadingOptions={{ overlay: true }}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should be able to slot a custom empty state into the data table", async () => {
    const page = await newSpecPage({
      components: [IcButton, DataTable, IcEmptyState],
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

    await waitForTimeout(1100);
    expect(page.root).toMatchSnapshot();
  });

  it("should render the loading state when the `loading` prop is updated", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table caption="test table" columns={columns}></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);

    dataTable?.setAttribute("loading", "true");

    await page.waitForChanges();

    await waitForTimeout(1100);

    expect(page.rootInstance.loadingIndicator).toHaveClass("show");
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
      components: [DataTable, IcLoadingIndicator],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          loadingOptions={{
            monochrome: true,
            label: "Loading data...",
            description: "This may take a while",
            min: 20,
            max: 80,
            progress: 50,
          }}
          loading={true}
        ></ic-data-table>
      ),
    });

    await waitForTimeout(1100);
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
    page.root!.data = data;
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

    page.root!.data = data;
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
        IcButton,
        DataTable,
        IcPagination,
        PaginationBar,
        IcPaginationItem,
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
      dataTable!.shadowRoot?.querySelector("ic-pagination-bar");

    const pagination =
      paginationBar?.shadowRoot?.querySelector("ic-pagination");

    const paginationItem =
      pagination?.shadowRoot?.querySelector("ic-pagination-item");

    let currentPage =
      paginationItem?.shadowRoot?.querySelector("ic-typography")?.textContent;

    const nextPageButton = pagination?.shadowRoot?.querySelector(
      "#next-page-button"
    ) as HTMLButtonElement;

    expect(currentPage).toEqual("Page 1");

    nextPageButton.focus();

    nextPageButton.click();

    const icPageChangeEvent = new CustomEvent("icPageChange", {
      detail: { value: "2" },
    });

    dataTable!.dispatchEvent(icPageChangeEvent);

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
          truncation-pattern="tooltip"
          paginationBarOptions={{
            itemsPerPageOptions: [
              { label: "10", value: "10" },
              { label: "25", value: "25" },
              { label: "50", value: "50" },
            ],
            rangeLabelType: "data",
          }}
        ></ic-data-table>
      ),
    });

    await page.waitForChanges();

    const dataTable = document.querySelector(icDataTable);

    const paginationBar =
      dataTable!.shadowRoot?.querySelector("ic-pagination-bar");

    const itemsPerPageLabel = paginationBar?.shadowRoot?.querySelector(
      ".item-pagination-label"
    );

    page.rootInstance.rowsPerPage = 10;

    expect(itemsPerPageLabel?.textContent).toEqual("1 - 10 of 20 items");

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

    dataTable!.dispatchEvent(icItemsPerPageChangeEventUp);

    page.rootInstance.rowsPerPage = 20;

    dataTable!.dispatchEvent(icPageChangeEvent);

    page.rootInstance.toRow = 20;

    await page.waitForChanges();

    dataTable!.dispatchEvent(icItemsPerPageChangeEventDown);

    page.rootInstance.previousRowsPerPage = 20;

    page.rootInstance.rowsPerPage = 10;

    dataTable!.dispatchEvent(icPageChangeEvent);

    await page.waitForChanges();

    expect(itemsPerPageLabel?.textContent).toEqual("1 - 10 of 20 items");
  });

  it("should sort data when the sort button is clicked", async () => {
    const page = await newSpecPage({
      components: [IcButton, DataTable],
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
      dataTable!.shadowRoot?.querySelectorAll<HTMLIcButtonElement>(
        SORT_BUTTON_CLASS
      ) || []
    );

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

  it("should change the density of the element when it receives the icTableDensityUpdate event", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table caption="Table" columns={columns} data={data}>
          <ic-data-table-title-bar slot="title-bar"></ic-data-table-title-bar>
        </ic-data-table>
      ),
    });

    expect(page.rootInstance.density).toBe("default");

    let icDensityUpdateEvent = new CustomEvent("icTableDensityUpdate", {
      detail: { value: "dense" },
    });
    page.root!.dispatchEvent(icDensityUpdateEvent);

    await page.waitForChanges();
    expect(page.rootInstance.density).toBe("dense");

    icDensityUpdateEvent = new CustomEvent("icTableDensityUpdate", {
      detail: { value: "spacious" },
    });
    page.root!.dispatchEvent(icDensityUpdateEvent);

    await page.waitForChanges();
    expect(page.rootInstance.density).toBe("spacious");
  });

  it("should pass the caption down to any slotted ic-data-table-title-bar", async () => {
    const page = await newSpecPage({
      components: [DataTable, DataTableTitleBar],
      template: () => (
        <ic-data-table caption="Table" columns={columns} data={data}>
          <ic-data-table-title-bar slot="title-bar"></ic-data-table-title-bar>
        </ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with row selection checkboxes", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          row-selection={true}
        ></ic-data-table>
      ),
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should render with small row selection checkboxes", async () => {
    await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          row-selection={true}
          density="dense"
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);
    const checkbox = dataTable!.shadowRoot?.querySelector("ic-checkbox");

    expect(checkbox?.getAttribute("size")).toBe("small");
  });

  it("should render with header checkbox checked when all rows selected", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          row-selection={true}
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);
    const checkbox = dataTable!.shadowRoot?.querySelector("ic-checkbox");

    await page.rootInstance.selectAllRows();
    await page.waitForChanges();

    expect(checkbox?.getAttribute("checked")).toBe("");
  });

  it("should apply a specified row height to all rows when globalRowHeight is set", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          globalRowHeight={80}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should apply a specified row height to specific rows when variableRowHeight is set, and any not included should use the default globalRowHeight", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          // eslint-disable-next-line react/jsx-no-bind
          variableRowHeight={({ index }) => (index % 2 === 0 ? 200 : null)}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should reset all rows to the default height when resetRowHeights is called", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          globalRowHeight={80}
          // eslint-disable-next-line react/jsx-no-bind
          variableRowHeight={({ index }) => (index % 2 === 0 ? 200 : null)}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();

    await (page.root as HTMLIcDataTableElement).resetRowHeights(40);
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should emit icRowHeightChange when globalRowHeight or variableRowHeight is changed", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          globalRowHeight={80}
          // eslint-disable-next-line react/jsx-no-bind
          variableRowHeight={({ index }) => (index % 2 === 0 ? 200 : null)}
        ></ic-data-table>
      ),
    });

    const eventSpy = jest.fn();

    page.root!.addEventListener("icRowHeightChange", eventSpy);

    const dataTable = page.root as HTMLIcDataTableElement;
    dataTable.globalRowHeight = 50;
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledTimes(1);

    dataTable.variableRowHeight = ({ index }) => (index % 2 === 0 ? 100 : null);
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledTimes(2);
  });

  it("should emit icSortChange when column sort button is clicked", async () => {
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

    const eventSpy = jest.fn();

    page.root!.addEventListener("icSortChange", eventSpy);

    const dataTable = document.querySelector(icDataTable);

    const sortButton = Array.from(
      dataTable!.shadowRoot?.querySelectorAll<HTMLIcButtonElement>(
        SORT_BUTTON_CLASS
      ) || []
    );

    sortButton[0].click();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { columnName: "name", sorted: "ascending" },
      })
    );
  });

  it("should emit icColumnsLoaded and icDataLoaded when the columns and data have initially loaded", async () => {
    const columnsSpy = jest.fn();
    const dataSpy = jest.fn();
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          onIcColumnsLoaded={columnsSpy}
          onIcDataLoaded={dataSpy}
        ></ic-data-table>
      ),
    });

    expect(columnsSpy).toHaveBeenCalledTimes(1);
    expect(dataSpy).toHaveBeenCalledTimes(1);

    page.rootInstance.columns = columnsWithElements;
    page.rootInstance.data = dataWithElements;
    await page.waitForChanges();

    expect(columnsSpy).toHaveBeenCalledTimes(2);
    expect(dataSpy).toHaveBeenCalledTimes(2);

    page.rootInstance.data = LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS;
    await page.waitForChanges();

    expect(columnsSpy).toHaveBeenCalledTimes(2);
    expect(dataSpy).toHaveBeenCalledTimes(3);
  });

  it("should not emit icDataLoaded when loading=`true` or updating=`true`", async () => {
    const dataSpy = jest.fn();
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          loading={true}
          onIcDataLoaded={dataSpy}
        ></ic-data-table>
      ),
    });

    expect(dataSpy).not.toHaveBeenCalled;

    page.rootInstance.loading = false;
    page.rootInstance.updating = true;
    page.rootInstance.data = longData;
    await page.waitForChanges();

    expect(dataSpy).not.toHaveBeenCalled;
  });

  it("should apply the correct density scaler to rowHeights when not using the default density", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          globalRowHeight={80}
          density="dense"
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();

    (page.root as HTMLIcDataTableElement).density = "spacious";
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should not override the height of rows if `globalRowHeight` is set to auto", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          globalRowHeight="auto"
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should not override the height of certain rows if `variableRowHeight` returns auto", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          // eslint-disable-next-line react/jsx-no-bind
          variableRowHeight={({ index }) => (index % 2 === 0 ? "auto" : null)}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should slot a custom element into a cell", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="Table"
          columns={columnsWithElements}
          data={dataWithElements}
        >
          {dataWithElements.map((_, index) => (
            <ic-button key={index} slot={`actions-${index}`}>
              Delete
            </ic-button>
          ))}
        </ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render ic-link if data contains href", async () => {
    const page = await newSpecPage({
      components: [IcButton, DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={dataWithLinks}
          sortable
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render action elements with clickable buttons", async () => {
    const mockCallback = jest.fn((x) => x + 1);

    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table caption="test table" columns={columns} data={data}>
          <div slot="name-0-action-element" style={{ display: "flex" }}>
            <ic-button
              variant="icon"
              size="small"
              onClick={mockCallback(1)}
              aria-label="Download data"
              id="download-button"
              innerHTML={downloadIconSVG}
            ></ic-button>
            <ic-button
              variant="icon"
              size="small"
              onClick={mockCallback(2)}
              aria-label="Call phone"
              id="cellphone-button"
              innerHTML={cellphoneIconSVG}
            ></ic-button>
            <ic-button
              variant="icon"
              size="small"
              onClick={mockCallback(3)}
              aria-label="Copy data"
              id="copy-button"
              innerHTML={copyIconSVG}
            ></ic-button>
          </div>
        </ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
    const dataTable = document.querySelector(icDataTable);
    const actionEl = dataTable?.shadowRoot?.querySelector(".action-element");

    const downloadButton =
      actionEl?.querySelector<HTMLIcButtonElement>("#download-button");
    downloadButton?.click();

    const cellphoneButton =
      actionEl?.querySelector<HTMLIcButtonElement>("#cellphone-button");
    cellphoneButton?.click();

    const copyButton =
      actionEl?.querySelector<HTMLIcButtonElement>("#copy-button");
    copyButton?.click();

    expect(mockCallback.mock.results[0].value).toEqual(2);
    expect(mockCallback.mock.results[1].value).toEqual(3);
    expect(mockCallback.mock.results[2].value).toEqual(4);
  });

  it("should add description text or sub-icon to cells of table", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="Table"
          columns={columnsWithElements}
          data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render the loading indicator with an overlay above the table", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={[data[0]]}
          loading={true}
          loadingOptions={{
            overlay: true,
          }}
        ></ic-data-table>
      ),
    });

    await waitForTimeout(1100);
    expect(page.root).toMatchSnapshot();
  });

  it("should update row heights for descriptions if the exceed global row height", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columnsWithElements}
          data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS}
          truncation-pattern="tooltip"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "getDescriptionHeight")
      .mockImplementation(() => 100);

    page.rootInstance.updateCellHeightsWithDescriptions();
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render with tooltip truncation pattern", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="tooltip"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with show-hide truncation pattern", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with tooltip truncation pattern - after data updated", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography, IcTooltip],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={[]}
          truncation-pattern="tooltip"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    const dataTable = page.root as HTMLIcDataTableElement;

    dataTable.data = LONG_DATA_VALUES;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should render with show-hide truncation pattern - after data updated", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={[]}
          updating={true}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "typographyScrollHeightExceedsContainerHeight")
      .mockImplementation(() => true);

    const dataTable = page.root as HTMLIcDataTableElement;

    dataTable.data = LONG_DATA_VALUES;

    await page.waitForChanges();

    await waitForTimeout(500);

    expect(page.root).toMatchSnapshot();
  });

  it("should render with tooltip truncation pattern for data with descriptions", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columnsWithElements}
          data={LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS}
          truncation-pattern="tooltip"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should update tooltip truncation when data sorted", async () => {
    const page = await newSpecPage({
      components: [IcButton, DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="tooltip"
          global-row-height={40}
          sortable
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);

    jest
      .spyOn(page.rootInstance, "getTooltip")
      .mockImplementation(() => MOCK_TOOLTIP);

    const sortButton = Array.from(
      dataTable!.shadowRoot?.querySelectorAll<HTMLIcButtonElement>(
        SORT_BUTTON_CLASS
      ) || []
    );

    sortButton[0].click();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should update show-hide truncation when data sorted", async () => {
    const page = await newSpecPage({
      components: [IcButton, DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
          sortable
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);

    const sortButton = Array.from(
      dataTable!.shadowRoot?.querySelectorAll<HTMLIcButtonElement>(
        SORT_BUTTON_CLASS
      ) || []
    );

    sortButton[0].click();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should update tooltip truncation on row height change to auto", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="tooltip"
          globalRowHeight={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "getTooltip")
      .mockImplementation(() => MOCK_TOOLTIP);

    const dataTable = document.querySelector(icDataTable);

    dataTable!.globalRowHeight = "auto";

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should update show-hide truncation on row height change to auto", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          globalRowHeight={40}
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);

    dataTable!.globalRowHeight = "auto";

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should update show-hide truncation on row height change to new value", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          globalRowHeight={40}
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);

    dataTable!.globalRowHeight = 80;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should update show-hide truncation on row height change to new value and typography scrollheight exceeds container height", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          globalRowHeight={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "typographyScrollHeightExceedsContainerHeight")
      .mockImplementation(() => true);

    const dataTable = document.querySelector(icDataTable);

    dataTable!.globalRowHeight = 80;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should switch to show-hide truncation pattern", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "typographyScrollHeightExceedsContainerHeight")
      .mockImplementation(() => true);

    const dataTable = document.querySelector(icDataTable);
    dataTable!.truncationPattern = "show-hide";
    await page.waitForChanges();

    await waitForTimeout(500);

    expect(page.root).toMatchSnapshot();
  });

  it("should switch to show-hide truncation pattern - resetSingleShowHideTruncation", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(
        page.rootInstance,
        "cellContainerMinusLineHeightIsGreaterThanTruncWrapperScrollHeight"
      )
      .mockImplementation(() => true);

    const dataTable = document.querySelector(icDataTable);
    dataTable!.truncationPattern = "show-hide";
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should switch to tooltip truncation pattern", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography, IcTooltip],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "typographyScrollHeightExceedsContainerHeight")
      .mockImplementation(() => true);

    const dataTable = document.querySelector(icDataTable);
    dataTable!.truncationPattern = "tooltip";
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should switch to tooltip truncation pattern and remove tooltips", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography, IcTooltip],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "typographyScrollHeightExceedsContainerHeight")
      .mockImplementation(() => true);

    jest
      .spyOn(page.rootInstance, "getTooltip")
      .mockImplementation(() => MOCK_TOOLTIP);

    const dataTable = document.querySelector(icDataTable);
    dataTable!.truncationPattern = "tooltip";
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should update truncation when density changes", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
          truncation-pattern="show-hide"
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);
    dataTable!.density = "spacious";

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should update tooltip truncation when page changed", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
          truncation-pattern="tooltip"
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);

    const icPageChangeEvent = new CustomEvent("icPageChange", {
      detail: { value: "1" },
    });

    dataTable!.dispatchEvent(icPageChangeEvent);

    await page.waitForChanges();

    const icPageChangeEvent2 = new CustomEvent("icPageChange", {
      detail: { value: "2" },
    });

    dataTable!.dispatchEvent(icPageChangeEvent2);

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should update show-hide truncation when page changed", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
          truncation-pattern="show-hide"
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);

    jest
      .spyOn(page.rootInstance, "typographyScrollHeightExceedsContainerHeight")
      .mockImplementation(() => true);

    jest
      .spyOn(page.rootInstance, "getShowHideButton")
      .mockImplementation(() => null);

    const icPageChangeEvent = new CustomEvent("icPageChange", {
      detail: { value: "1" },
    });

    dataTable!.dispatchEvent(icPageChangeEvent);

    await page.waitForChanges();

    const icPageChangeEvent2 = new CustomEvent("icPageChange", {
      detail: { value: "2" },
    });

    dataTable!.dispatchEvent(icPageChangeEvent2);

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should test 'dataTruncate' method - should not call truncate when dataUpdated is true", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest.spyOn(page.rootInstance, "truncate").mockImplementation();

    page.rootInstance.dataUpdated = true;
    await page.waitForChanges();

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(CELL_TYPOGRAPHY);
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    page.rootInstance.dataTruncation(typographyEl, cellContainer);
    await page.waitForChanges();

    expect(page.rootInstance.truncate).not.toHaveBeenCalled();
  });

  it("should test 'dataTruncate' method - should remove truncation if number of lines equals max-lines", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "resetSingleShowHideTruncation")
      .mockImplementation();
    jest.spyOn(page.rootInstance, "truncate").mockImplementation();

    jest
      .spyOn(page.rootInstance, "getShowHideButton")
      .mockImplementation(() => true);

    jest
      .spyOn(page.rootInstance, "getTruncWrapper")
      .mockImplementation(() => ({ scrollHeight: 48 }));

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(CELL_TYPOGRAPHY);
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);
    typographyEl?.setAttribute("max-lines", "2");

    await page.waitForChanges();

    page.rootInstance.dataTruncation(typographyEl, cellContainer);
    await page.waitForChanges();

    expect(
      page.rootInstance.resetSingleShowHideTruncation
    ).toHaveBeenCalledTimes(1);
    expect(page.rootInstance.truncate).toHaveBeenCalled();
  });

  it("should test 'dataTruncate' method - should remove show-hide truncation if rowHeightSet is true", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "resetSingleShowHideTruncation")
      .mockImplementation();
    jest.spyOn(page.rootInstance, "truncate").mockImplementation();

    jest
      .spyOn(
        page.rootInstance,
        "cellContainerMinusLineHeightIsGreaterThanTruncWrapperScrollHeight"
      )
      .mockImplementation(() => true);

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(CELL_TYPOGRAPHY);
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    page.rootInstance.rowHeightSet = true;
    await page.waitForChanges();

    page.rootInstance.dataTruncation(typographyEl, cellContainer);
    await page.waitForChanges();

    expect(
      page.rootInstance.resetSingleShowHideTruncation
    ).toHaveBeenCalledTimes(1);
    expect(page.rootInstance.truncate).not.toHaveBeenCalled();
  });

  it("should test 'dataTruncate' method - should add show-hide truncation if rowHeightSet is true", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest.spyOn(page.rootInstance, "truncate").mockImplementation();
    jest
      .spyOn(page.rootInstance, "addShowHideTruncationIfNeeded")
      .mockImplementation(() => true);
    jest
      .spyOn(
        page.rootInstance,
        "cellContainerMinusLineHeightIsGreaterThanTruncWrapperScrollHeight"
      )
      .mockImplementation(() => false);

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(CELL_TYPOGRAPHY);
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    page.rootInstance.rowHeightSet = true;
    await page.waitForChanges();

    page.rootInstance.dataTruncation(typographyEl, cellContainer);
    await page.waitForChanges();

    expect(
      page.rootInstance.addShowHideTruncationIfNeeded
    ).toHaveBeenCalledTimes(1);
    expect(page.rootInstance.truncate).not.toHaveBeenCalled();
  });

  it("should test 'dataTruncate' method - should remove tooltip if scroll height equals container height", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="tooltip"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest.spyOn(page.rootInstance, "truncate").mockImplementation();
    jest.spyOn(page.rootInstance, "removeTooltip").mockImplementation();

    jest
      .spyOn(page.rootInstance, "getTooltip")
      .mockImplementation(() => MOCK_TOOLTIP);

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as any;
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    cellContainer.clientHeight = 40;
    typographyEl.scrollHeight = 40;

    await page.waitForChanges();

    page.rootInstance.dataTruncation(typographyEl, cellContainer);
    await page.waitForChanges();

    expect(page.rootInstance.removeTooltip).toHaveBeenCalledTimes(1);
    expect(page.rootInstance.truncate).not.toHaveBeenCalled();
  });

  it("should set line-clamp to 0 when 'truncate' method is called and scroll height does not exceed container height", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
          truncation-pattern="tooltip"
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as HTMLIcTypographyElement;
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    page.rootInstance.truncate(typographyEl, cellContainer, MOCK_TOOLTIP);

    await page.waitForChanges();

    expect(typographyEl.getAttribute("style")).toEqual("--ic-line-clamp: 0;");
  });

  it("should call 'resetSingleShowHideTruncation' method when 'truncate' method is called and scroll height does not exceed container height", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
          truncation-pattern="show-hide"
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "resetSingleShowHideTruncation")
      .mockImplementation();
    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as HTMLIcTypographyElement;
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    typographyEl.setAttribute("max-lines", "2");
    await page.waitForChanges();

    page.rootInstance.truncate(typographyEl, cellContainer, MOCK_TOOLTIP);

    await page.waitForChanges();

    expect(
      page.rootInstance.resetSingleShowHideTruncation
    ).toHaveBeenCalledTimes(1);
  });

  it("should test 'resetSingleShowHideTruncation' - update max-lines attribute when cell height changes", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
          truncation-pattern="show-hide"
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "getTruncWrapper")
      .mockImplementation(() => ({ scrollHeight: 96 }));

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as HTMLIcTypographyElement;
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    cellContainer.clientHeight = 80;

    typographyEl.setAttribute("max-lines", "1");
    await page.waitForChanges();

    page.rootInstance.resetSingleShowHideTruncation(
      typographyEl,
      cellContainer
    );

    await page.waitForChanges();

    expect(typographyEl.getAttribute("max-lines")).toBe("3");
  });

  it("should test 'resetSingleShowHideTruncation' - should reset truncation when scroll height no longer exceeds container height", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
          truncation-pattern="show-hide"
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "getTruncWrapper")
      .mockImplementation(() => ({ scrollHeight: 80 }));

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as HTMLIcTypographyElement;
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    cellContainer.clientHeight = 80;
    page.rootInstance.resetSingleShowHideTruncation(
      typographyEl,
      cellContainer
    );

    await page.waitForChanges();

    expect(cellContainer.getAttribute("style")).toBe("--row-height: 1.5rem;");
  });

  it("should call 'resetSingleShowHideTruncation' method in 'truncateUpdatedData'", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
          truncation-pattern="show-hide"
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "getTruncWrapper")
      .mockImplementation(() => ({ scrollHeight: 80 }));

    jest
      .spyOn(page.rootInstance, "resetSingleShowHideTruncation")
      .mockImplementation();

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as HTMLIcTypographyElement;
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    cellContainer.clientHeight = 200;
    page.rootInstance.truncateUpdatedData();

    await page.waitForChanges();

    expect(cellContainer.getAttribute("style")).toBe("--row-height: 1.5rem;");

    expect(
      page.rootInstance.resetSingleShowHideTruncation
    ).toHaveBeenCalledTimes(1);
  });

  it("should call 'resetSingleShowHideTruncation' method in 'truncateRowHeightSet'", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
          truncation-pattern="show-hide"
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "getShowHideButton")
      .mockImplementation(() => true);

    jest
      .spyOn(page.rootInstance, "getTruncWrapper")
      .mockImplementation(() => ({ scrollHeight: 40 }));

    jest
      .spyOn(page.rootInstance, "resetSingleShowHideTruncation")
      .mockImplementation();

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as HTMLIcTypographyElement;
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    cellContainer.clientHeight = 200;
    page.rootInstance.truncateRowHeightSet();

    await page.waitForChanges();

    expect(
      page.rootInstance.resetSingleShowHideTruncation
    ).toHaveBeenCalledTimes(1);
  });

  it("should call 'updateSetRowHeight' method in 'truncateRowHeightSet' when no truncation pattern set", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest.spyOn(page.rootInstance, "updateSetRowHeight").mockImplementation();

    page.rootInstance.truncateRowHeightSet();

    await page.waitForChanges();

    expect(page.rootInstance.updateSetRowHeight).toHaveBeenCalledTimes(30);
  });

  it("should set '--row-height' to 'data-row-height' in 'truncateRowHeightSet' ", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest.spyOn(page.rootInstance, "getRowHeight").mockImplementation(() => 80);

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as HTMLIcTypographyElement;
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    cellContainer.clientHeight = 40;

    cellContainer.setAttribute("data-row-height", "80");
    await page.waitForChanges();

    page.rootInstance.truncateRowHeightSet();

    await page.waitForChanges();

    expect(cellContainer.getAttribute("style")).toContain("--row-height: 80;");
  });

  it("should call 'removeTooltip' method in 'updateTruncationTooltip'", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          global-row-height={40}
          truncation-pattern="tooltip"
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "getTooltip")
      .mockImplementation(() => MOCK_TOOLTIP);

    jest.spyOn(page.rootInstance, "removeTooltip").mockImplementation();
    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as HTMLIcTypographyElement;
    const tableCell = dataTable?.shadowRoot?.querySelector(".table-cell");

    tableCell?.classList.add(page.rootInstance.TEXT_WRAP_STRING);
    await page.waitForChanges();

    await page.rootInstance.updateTruncationTooltip();

    expect(page.rootInstance.removeTooltip).toHaveBeenCalled();
    expect(typographyEl.getAttribute("style")).toEqual("--ic-line-clamp: 0;");
  });

  it("should test 'removeTextWrap' method", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);
    const tableCell = dataTable?.shadowRoot?.querySelector(".table-cell");

    tableCell?.classList.add(page.rootInstance.TEXT_WRAP_STRING);
    await page.waitForChanges();
    await page.rootInstance.removeTextWrap();
    expect(tableCell).not.toHaveClass(page.rootInstance.TEXT_WRAP_STRING);
  });

  it("should test 'handleTypographyTruncationExpandToggle' method", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as HTMLIcTypographyElement;
    const cellContainer = page.rootInstance.getCellContainer(
      typographyEl
    ) as HTMLDivElement;

    expect(cellContainer.getAttribute("style")).not.toContain(
      "--row-height: inherit;"
    );

    await page.rootInstance.handleTypographyTruncationExpandToggle({
      detail: { expanded: true, typographyEl: typographyEl },
    });

    expect(cellContainer.getAttribute("style")).toContain(
      "--row-height: inherit;"
    );
  });

  it("should remove '--row-height' property via 'updateSetRowHeight' method", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest.spyOn(page.rootInstance, "getRowHeight").mockImplementation(() => 80);

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as any;
    const cellContainer = page.rootInstance.getCellContainer(
      typographyEl
    ) as HTMLDivElement;

    cellContainer.style.setProperty("--row-height", "80px");
    await page.waitForChanges();
    expect(cellContainer.getAttribute("style")).toContain(
      "--row-height: 80px;"
    );

    typographyEl.scrollHeight = 100;
    await page.waitForChanges();
    await page.rootInstance.updateSetRowHeight();
    expect(cellContainer.getAttribute("style")).toBeNull();
  });

  it("should remove '--row-height' property for single typography element via 'updateSetRowHeight' method", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest.spyOn(page.rootInstance, "getRowHeight").mockImplementation(() => 40);

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as any;
    const cellContainer = page.rootInstance.getCellContainer(
      typographyEl
    ) as HTMLDivElement;

    cellContainer.style.setProperty("--row-height", "40px");
    await page.waitForChanges();
    expect(cellContainer.getAttribute("style")).toContain(
      "--row-height: 40px;"
    );

    typographyEl.scrollHeight = 100;
    await page.waitForChanges();
    await page.rootInstance.updateSetRowHeight(typographyEl);
    expect(cellContainer.getAttribute("style")).toBeNull();
  });

  it("should test 'cellContainerMinusLineHeightIsGreaterThanTruncWrapperScrollHeight' returns true when scrollheight less than clientheight + line height", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "getTruncWrapper")
      .mockImplementation(() => ({ scrollHeight: 48 }));

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as any;
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    cellContainer.clientHeight = 80;

    const value =
      page.rootInstance.cellContainerMinusLineHeightIsGreaterThanTruncWrapperScrollHeight(
        typographyEl,
        cellContainer
      );
    await page.waitForChanges();
    expect(value).toBe(true);
  });

  it("should test 'cellContainerMinusLineHeightIsGreaterThanTruncWrapperScrollHeight' returns false when scrollheight greater than clientheight + line height", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "getTruncWrapper")
      .mockImplementation(() => ({ scrollHeight: 100 }));

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as any;
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    cellContainer.clientHeight = 80;

    const value =
      page.rootInstance.cellContainerMinusLineHeightIsGreaterThanTruncWrapperScrollHeight(
        typographyEl,
        cellContainer
      );
    await page.waitForChanges();
    expect(value).toBe(false);
  });

  it("should test 'addShowHideTruncationIfNeeded' returns false when typography scrollheight is less than container height", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "typographyScrollHeightExceedsContainerHeight")
      .mockImplementation(() => false);

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as any;
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    const value = page.rootInstance.addShowHideTruncationIfNeeded(
      typographyEl,
      cellContainer
    );

    await page.waitForChanges();
    expect(value).toBe(false);
  });

  it("should test 'addShowHideTruncationIfNeeded' returns true when typography scrollheight is greater than container height", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    jest
      .spyOn(page.rootInstance, "typographyScrollHeightExceedsContainerHeight")
      .mockImplementation(() => true);

    const dataTable = document.querySelector(icDataTable);
    const typographyEl = dataTable?.shadowRoot?.querySelector(
      CELL_TYPOGRAPHY
    ) as any;
    const cellContainer = page.rootInstance.getCellContainer(typographyEl);

    const value = page.rootInstance.addShowHideTruncationIfNeeded(
      typographyEl,
      cellContainer
    );

    await page.waitForChanges();
    expect(value).toBe(true);
  });

  it("should test 'getColumnWidth' method", async () => {
    const page = await newSpecPage({
      components: [DataTable, IcTypography],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={COLUMNS_NO_TEXT_WRAP}
          data={LONG_DATA_VALUES}
          truncation-pattern="show-hide"
          global-row-height={40}
        ></ic-data-table>
      ),
    });

    let output = page.rootInstance.getColumnWidth("100px");

    expect(output).toEqual({
      "--column-width": "100px",
    });

    output = page.rootInstance.getColumnWidth({ minWidth: "100px" });

    expect(output).toEqual({
      "--column-min-width": "100px",
    });

    output = page.rootInstance.getColumnWidth({ maxWidth: "100px" });

    expect(output).toEqual({
      "--column-max-width": "100px",
    });
  });

  it("should test 'headerResizeCallback' method", async () => {
    const page = await newSpecPage({
      components: [DataTable],
      template: () => (
        <ic-data-table
          caption="test table"
          columns={columns}
          data={data}
          column-header-truncation
        ></ic-data-table>
      ),
    });

    const dataTable = document.querySelector(icDataTable);
    const tableContainerEl = dataTable?.shadowRoot?.querySelector(
      TABLE_CONTAINER_CLASS
    ) as any;

    tableContainerEl.clientWidth = 1000;

    page.rootInstance.prevTableContainerWidth = 500;

    await page.waitForChanges();

    await page.rootInstance.headerResizeCallback();

    expect(page.rootInstance.prevTableContainerWidth).toBe(1000);
  });

  it("should clear dataUpdated when component loads", async () => {
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

    page.rootInstance.dataUpdated = true;
    await page.waitForChanges();
    expect(page.rootInstance.dataUpdated).toBe(true);
    await page.rootInstance.componentDidLoad();
    expect(page.rootInstance.dataUpdated).toBe(false);
  });

  it("should set scrollable when component loads and table height exceeds container height", async () => {
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

    const dataTable = document.querySelector(icDataTable);
    const tableEl = dataTable?.shadowRoot?.querySelector("table") as any;
    const tableContainerEl = dataTable?.shadowRoot?.querySelector(
      TABLE_CONTAINER_CLASS
    ) as any;

    tableEl.clientHeight = 1000;
    tableContainerEl.clientHeight = 500;

    await page.waitForChanges();
    await page.rootInstance.componentDidLoad();
    expect(page.rootInstance.scrollable).toBe(true);
  });

  it("should set scrollable when component loads and table width exceeds container width", async () => {
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

    const dataTable = document.querySelector(icDataTable);
    const tableEl = dataTable?.shadowRoot?.querySelector("table") as any;
    const tableContainerEl = dataTable?.shadowRoot?.querySelector(
      TABLE_CONTAINER_CLASS
    ) as any;

    tableEl.clientWidth = 1000;
    tableContainerEl.clientWidth = 500;

    await page.waitForChanges();
    await page.rootInstance.componentDidLoad();
    expect(page.rootInstance.scrollable).toBe(true);
  });

  it("should return undefined when getCellContent is called with dataType 'element'", async () => {
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

    const cellContent = page.rootInstance.getCellContent({}, "element");
    expect(cellContent).toBeUndefined();
  });
});
