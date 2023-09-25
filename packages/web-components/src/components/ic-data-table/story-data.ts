import { IcDataTableColumnObject } from "./ic-data-table.types";

/* eslint-disable */

const ROW_HEADER_TITLES = [
  "Employee",
  "Employee",
  "Manager",
  "Employee",
  "Apprentice",
];

export const COLS: IcDataTableColumnObject[] = [
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
    key: "jobTitle",
    title: "Job title",
    dataType: "string",
  },
  {
    key: "address",
    title: "Address",
    dataType: "address",
  },
];
export const COLS_ALIGNMENT: IcDataTableColumnObject[] = [
  {
    key: "firstName",
    title: "First name",
    dataType: "string",
    columnAlignment: { horizontal: "center", vertical: "middle" },
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
    key: "jobTitle",
    title: "Job title",
    dataType: "string",
  },
  {
    key: "address",
    title: "Address",
    dataType: "address",
  },
];
export const DATA = [
  {
    firstName: "Joe",
    lastName: "Bloggs",
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    firstName: "Sarah",
    lastName: "Smith",
    age: 28,
    jobTitle: "Analyst",
    address: "2 Main Street, Town, Country, Postcode",
  },
  {
    firstName: "Mark",
    lastName: "Owens",
    age: 45,
    jobTitle: "Team Lead",
    address: "12 Key Street, Town, Country, Postcode",
  },
  {
    firstName: "Naomi",
    lastName: "Thomas",
    age: 32,
    jobTitle: "Developer",
    address: "8 Side Street, Town, Country, Postcode",
  },
  {
    firstName: "Luke",
    lastName: "Ashford",
    age: 18,
    jobTitle: "Junior Developer",
    address: "5 New Street, Town, Country, Postcode",
  },
];

export const DATA_CELL_ALIGNMENT = [
  {
    firstName: {
      data: "Joe",
      cellAlignment: { horizontal: "center", vertical: "middle" },
      emphasis: "high",
    },
    lastName: "Bloggs",
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    firstName: "Sarah",
    lastName: "Smith",
    age: 28,
    jobTitle: "Analyst",
    address: "2 Main Street, Town, Country, Postcode",
  },
  {
    firstName: "Mark",
    lastName: "Owens",
    age: 45,
    jobTitle: "Team Lead",
    address: "12 Key Street, Town, Country, Postcode",
  },
  {
    firstName: "Naomi",
    lastName: "Thomas",
    age: 32,
    jobTitle: "Developer",
    address: "8 Side Street, Town, Country, Postcode",
  },
  {
    firstName: "Luke",
    lastName: "Ashford",
    age: 18,
    jobTitle: "Junior Developer",
    address: "5 New Street, Town, Country, Postcode",
  },
];

export const ROW_ALIGNMENT = [
  {
    header: {
      title: ROW_HEADER_TITLES[0],
      rowAlignment: "middle",
      emphasis: "high",
    },
    firstName: "Joe",
    lastName: "Bloggs",
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    header: {
      title: ROW_HEADER_TITLES[1],
    },
    firstName: "Sarah",
    lastName: "Smith",
    age: 28,
    jobTitle: "Analyst",
    address: "2 Main Street, Town, Country, Postcode",
  },
  {
    header: {
      title: ROW_HEADER_TITLES[2],
    },
    firstName: "Mark",
    lastName: "Owens",
    age: 45,
    jobTitle: "Team Lead",
    address: "12 Key Street, Town, Country, Postcode",
  },
  {
    header: {
      title: ROW_HEADER_TITLES[3],
    },
    firstName: "Naomi",
    lastName: "Thomas",
    age: 32,
    jobTitle: "Developer",
    address: "8 Side Street, Town, Country, Postcode",
  },
  {
    header: {
      title: ROW_HEADER_TITLES[4],
    },
    firstName: "Luke",
    lastName: "Ashford",
    age: 18,
    jobTitle: "Junior Developer",
    address: "5 New Street, Town, Country, Postcode",
  },
];

export const LONG_COLS: IcDataTableColumnObject[] = [
  {
    key: "employeeNumber",
    title: "Employee number",
    dataType: "number",
    columnAlignment: { horizontal: "left" },
  },
  {
    key: "name",
    title: "Name",
    dataType: "string",
  },
  {
    key: "age",
    title: "Age",
    dataType: "number",
  },
  {
    key: "jobTitle",
    title: "Job title",
    dataType: "string",
  },
  {
    key: "address",
    title: "Address",
    dataType: "address",
  },
];

export const ICON_COLS: IcDataTableColumnObject[] = [
  {
    key: "firstName",
    title: "First name",
    dataType: "string",
    cellAlignment: "right",
    columnAlignment: { horizontal: "right", vertical: "middle" },
    icon: {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>',
      onAllCells: true,
      hideOnHeader: true,
    },
  },
  {
    key: "lastName",
    title: "Last name",
    dataType: "string",
    cellAlignment: "center",
    columnAlignment: { horizontal: "center", vertical: "bottom" },
    icon: {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>',
      onAllCells: true,
    },
  },
  {
    key: "age",
    title: "Age",
    dataType: "number",
  },
  {
    key: "jobTitle",
    title: "Job title",
    dataType: "string",
  },
  {
    key: "address",
    title: "Address",
    dataType: "address",
    icon: {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>',
    },
  },
];
export const ICON_DATA = [
  {
    firstName: {
      data: "Joe",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>',
    },
    lastName: "Bloggs",
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    firstName: "Sarah",
    lastName: {
      data: "Smith",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>',
    },
    age: 28,
    jobTitle: "Analyst",
    address: "2 Main Street, Town, Country, Postcode",
  },
  {
    firstName: "Mark",
    lastName: "Owens",
    age: 45,
    jobTitle: "Team Lead",
    address: "12 Key Street, Town, Country, Postcode",
  },
  {
    firstName: "Naomi",
    lastName: "Thomas",
    age: 32,
    jobTitle: {
      data: "Developer",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>',
    },
    address: "8 Side Street, Town, Country, Postcode",
  },
  {
    firstName: "Luke",
    lastName: "Ashford",
    age: 18,
    jobTitle: "Junior Developer",
    address: "5 New Street, Town, Country, Postcode",
  },
];

export const LONG_DATA = [
  {
    employeeNumber: 1,
    name: "Joe Bloggs",
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    employeeNumber: 2,
    name: "Sarah Jones",
    age: 28,
    jobTitle: "Developer",
    address: "2 Main Street, Town, Country, Postcode",
  },
  {
    employeeNumber: 3,
    name: "Mark Owens",
    age: 45,
    jobTitle: "Team Lead",
    address: "12 Key Street, Town, County, Postcode",
  },
  {
    employeeNumber: 4,
    name: "Naomi Thomas",
    age: 32,
    jobTitle: "Developer",
    address: "8 Side Street, Town, Country, Postcode",
  },
  {
    employeeNumber: 5,
    name: "Luke Ashford",
    age: 18,
    jobTitle: "Junior Developer",
    address: "5 New Street, Town, Country, Postcode",
  },
  {
    employeeNumber: 6,
    name: "Dave Smith",
    age: 33,
    jobTitle: "Analyst",
    address: "4 Extra Street, Town, County, Postcode",
  },
  {
    employeeNumber: 7,
    name: "Amy Fox",
    age: 27,
    jobTitle: "Analyst",
    address: "3 Main Street, Town, Country, Postcode",
  },
  {
    employeeNumber: 8,
    name: "Mary Cooper",
    age: 31,
    jobTitle: "Developer",
    address: "8 Main Street, Town, County, Postcode",
  },
  {
    employeeNumber: 9,
    name: "Alice Cole",
    age: 38,
    jobTitle: "Team Lead",
    address: "10 High Street, Town, Country, Postcode",
  },
  {
    employeeNumber: 10,
    name: "Ben Fields",
    age: 40,
    jobTitle: "Team Lead",
    address: "14 High Street, Town, Country, Postcode",
  },
  {
    employeeNumber: 11,
    name: "Pete Norton",
    age: 32,
    jobTitle: "Analyst",
    address: "6 Key Street, Town, County, Postcode",
  },
  {
    employeeNumber: 12,
    name: "Ashley Langford",
    age: 29,
    jobTitle: "Developer",
    address: "7 Long Street, Town, Country, Postcode",
  },
  {
    employeeNumber: 13,
    name: "Michael Hall",
    age: 35,
    jobTitle: "Team Lead",
    address: "5 Long Street, Town, County, Postcode",
  },
  {
    employeeNumber: 14,
    name: "David Frank",
    age: 28,
    jobTitle: "Developer",
    address: "3 Side Street, Town, Country, Postcode",
  },
  {
    employeeNumber: 15,
    name: "Mary Lincoln",
    age: 23,
    jobTitle: "Developer",
    address: "10 Main Street, Town, Country, Postcode",
  },
  {
    employeeNumber: 16,
    name: "Will Barns",
    age: 36,
    jobTitle: "Analyst",
    address: "1 New Street, Town, County, Postcode",
  },
  {
    employeeNumber: 17,
    name: "Elizabeth Long",
    age: 43,
    jobTitle: "Analyst",
    address: "9 Short Street, Town, Country, Postcode",
  },
  {
    employeeNumber: 18,
    name: "Keith Jones",
    age: 37,
    jobTitle: "Developer",
    address: "11 Main Street, Town, County, Postcode",
  },
  {
    employeeNumber: 19,
    name: "Olivia Brown",
    age: 19,
    jobTitle: "Trainee Analyst",
    address: "4 Side Street, Town, Country, Postcode",
  },
  {
    employeeNumber: 20,
    name: "Tim Green",
    age: 50,
    jobTitle: "Developer",
    address: "2 Long Street, Town, Country, Postcode",
  },
];

export const ROW_HEADER_COLS: IcDataTableColumnObject[] = [
  {
    key: "header",
    title: "Job type",
    dataType: "string",
  },
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
    key: "jobTitle",
    title: "Job title",
    dataType: "string",
  },
  {
    key: "address",
    title: "Address",
    dataType: "address",
  },
];
export const ROW_HEADER_DATA = DATA.map((data, index) => {
  return { header: { title: ROW_HEADER_TITLES[index] }, ...data };
});

export const COLS_ELEMENTS: IcDataTableColumnObject[] = [
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
    key: "jobTitle",
    title: "Job title",
    dataType: "string",
  },
  {
    key: "address",
    title: "Address",
    dataType: "address",
  },
  {
    key: "actions",
    title: "Actions",
    dataType: "element",
    columnAlignment: { horizontal: "center" },
  },
];

export const DATA_ELEMENTS = [
  {
    firstName: {
      data: "Joe",
      href: "https://www.example.com",
    },
    lastName: "Bloggs",
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
    actions: `<ic-button variant='destructive' onClick='this.closest("tr").remove()'>Delete</ic-button>`,
  },
  {
    firstName: "Sarah",
    lastName: "Smith",
    age: 28,
    jobTitle: "Analyst",
    address: "2 Main Street, Town, Country, Postcode",
    actions: `<ic-button variant='destructive' onClick='this.closest("tr").remove()'>Delete</ic-button>`,
  },
  {
    firstName: "Mark",
    lastName: "Owens",
    age: 45,
    jobTitle: "Team Lead",
    address: "12 Key Street, Town, Country, Postcode",
    actions: `<ic-button variant='destructive' onClick='this.closest("tr").remove()'>Delete</ic-button>`,
  },
  {
    firstName: "Naomi",
    lastName: "Thomas",
    age: 32,
    jobTitle: "Developer",
    address: "8 Side Street, Town, Country, Postcode",
    actions: `<ic-button variant='destructive' onClick='this.closest("tr").remove()'>Delete</ic-button>`,
  },
  {
    firstName: "Luke",
    lastName: "Ashford",
    age: 18,
    jobTitle: "Junior Developer",
    address: "5 New Street, Town, Country, Postcode",
    actions: `<ic-button variant='destructive' onClick='this.closest("tr").remove()'>Delete</ic-button>`,
  },
];

export const DATA_REACT_ELEMENTS = [
  {
    firstName: {
      data: "Joe",
      href: "https://www.example.com",
    },
    lastName: "Bloggs",
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    firstName: "Sarah",
    lastName: "Smith",
    age: 28,
    jobTitle: "Analyst",
    address: "2 Main Street, Town, Country, Postcode",
  },
  {
    firstName: "Mark",
    lastName: "Owens",
    age: 45,
    jobTitle: "Team Lead",
    address: "12 Key Street, Town, Country, Postcode",
  },
  {
    firstName: "Naomi",
    lastName: "Thomas",
    age: 32,
    jobTitle: "Developer",
    address: "8 Side Street, Town, Country, Postcode",
  },
  {
    firstName: "Luke",
    lastName: "Ashford",
    age: 18,
    jobTitle: "Junior Developer",
    address: "5 New Street, Town, Country, Postcode",
  },
];

export const createDataTableElement = (
  caption: string,
  columns: IcDataTableColumnObject[] = COLS,
  data: object[] = DATA
): HTMLIcDataTableElement => {
  const dataTable = document.createElement("ic-data-table");
  dataTable.setAttribute("caption", caption);
  dataTable.columns = columns;
  dataTable.data = data;
  return dataTable;
};

export const Basic = (): HTMLIcDataTableElement =>
  createDataTableElement("Basic Table");

export const Embedded = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Embedded Table");
  dataTable.setAttribute("embedded", "true");
  return dataTable;
};

export const Dense = (): HTMLElement => {
  const dataTableDense = createDataTableElement("Dense Table");
  dataTableDense.setAttribute("density", "dense");
  return dataTableDense;
};

export const Spacious = (): HTMLElement => {
  const dataTableSpacious = createDataTableElement("Spacious Table");
  dataTableSpacious.setAttribute("density", "spacious");
  return dataTableSpacious;
};

export const Scrollable = (): HTMLElement => {
  const dataTable = createDataTableElement(
    "Scrollable Table",
    LONG_COLS,
    LONG_DATA
  );
  dataTable.setAttribute("embedded", "true");
  dataTable.style["height"] = "366px";

  const setStickyHeaders = (sticky: boolean) => {
    dataTable.setAttribute("sticky-column-headers", `${sticky}`);
  };
  const stickButton = document.createElement("ic-button");
  const unstickButton = document.createElement("ic-button");
  stickButton.innerHTML = "Stick Header";
  unstickButton.innerHTML = "Unstick Header";
  stickButton.addEventListener("click", () => setStickyHeaders(true));
  unstickButton.addEventListener("click", () => setStickyHeaders(false));

  const buttonWrapper = document.createElement("div");
  buttonWrapper.style["display"] = "flex";
  buttonWrapper.style["paddingTop"] = "10px";
  buttonWrapper.style["gap"] = "8px";
  buttonWrapper.insertAdjacentElement("afterbegin", stickButton);
  buttonWrapper.insertAdjacentElement("beforeend", unstickButton);

  const wrapper = document.createElement("div");
  wrapper.insertAdjacentElement("afterbegin", dataTable);
  wrapper.insertAdjacentElement("beforeend", buttonWrapper);

  return wrapper;
};

export const RowHeaders = (): HTMLIcDataTableElement =>
  createDataTableElement("Row Header Table", ROW_HEADER_COLS, ROW_HEADER_DATA);

export const Sort = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Sort", COLS, DATA);
  dataTable.setAttribute("sortable", "true");
  return dataTable;
};

export const SortOptions = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Sort Order", COLS, DATA);
  dataTable.setAttribute("sortable", "true");
  dataTable.sortOptions = {
    sortOrders: ["descending", "unsorted"],
    defaultColumn: "firstName",
  };
  return dataTable;
};

export const Pagination = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Pagination", LONG_COLS, LONG_DATA);
  dataTable.setAttribute("show-pagination", "true");
  dataTable.paginationOptions = {
    itemsPerPage: [
      { label: "5", value: "5" },
      { label: "10", value: "10" },
      { label: "15", value: "15" },
    ],
    itemsPerPageControl: true,
    goToPageControl: true,
  };
  return dataTable;
};

export const ColumnOverrides = (): HTMLIcDataTableElement =>
  createDataTableElement("Column Overides", COLS_ALIGNMENT, DATA);

export const RowOverrides = (): HTMLIcDataTableElement =>
  createDataTableElement("Row Overides", ROW_HEADER_COLS, ROW_ALIGNMENT);

export const CellOverrides = (): HTMLIcDataTableElement =>
  createDataTableElement("Cell Overides", COLS, DATA_CELL_ALIGNMENT);

export const LinksHTMLElements = (): HTMLIcDataTableElement =>
  createDataTableElement(
    "Links and HTML Elements Overides",
    COLS_ELEMENTS,
    DATA_ELEMENTS
  );

export const Empty = (): HTMLIcDataTableElement =>
  createDataTableElement("Empty State", COLS, null);

export const EmptySlotted = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Empty State", COLS, null);

  const emptyState = document.createElement("ic-empty-state");
  emptyState.setAttribute("aligned", "left");
  emptyState.setAttribute("heading", "Data source error");
  emptyState.setAttribute("body", "Error loading new data");
  emptyState.setAttribute("slot", "empty-state");

  const button = document.createElement("ic-button");
  button.innerHTML = "Retry";
  button.setAttribute("slot", "actions");

  emptyState.appendChild(button);
  dataTable.appendChild(emptyState);
  return dataTable;
};

export const Loading = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Loading State", COLS, DATA);

  dataTable.setAttribute("loading", "true");
  return dataTable;
};

export const Updating = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Updating State", COLS, DATA);
  dataTable.updatingOptions = { progress: 30 };
  dataTable.setAttribute("updating", "true");
  return dataTable;
};

export const CustomIcons = (): HTMLIcDataTableElement =>
  createDataTableElement("Custom icons", ICON_COLS, ICON_DATA);
