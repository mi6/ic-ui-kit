/* istanbul ignore file */

import {
  IcDataTableColumnObject,
  IcSortEventDetail,
} from "./ic-data-table.types";

/* eslint-disable */
const name1 = "John Smith";
const name2 = "Sally Jones";
const name3 = "Luke Fisher";
const name4 = "Jane Lock";
const name5 = "Margaret Hale";

const ROW_HEADER_TITLES = [
  "Employee",
  "Employee",
  "Manager",
  "Employee",
  "Apprentice",
];

const imageIconSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>';
const userIconSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>';
const alertIconSVG =
  '<svg aria-label="alert-icon" xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 24 24" fill="#000000"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"/></svg>';
const copyIconSVG =
  '<svg aria-label="copy-button" xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="#000000"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/></svg>';
const cellphoneIconSVG =
  '<svg aria-label="cellphone-button" xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="#000000"><path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"/></svg>';
const downloadIconSVG =
  '<svg aria-label="download-button" xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="#000000"><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/></svg>';

// TODO: Add columnOptions
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

export const COLS_WIDTH: IcDataTableColumnObject[] = [
  {
    key: "firstName",
    title: "First name",
    dataType: "string",
    columnWidth: "15%",
  },
  {
    key: "lastName",
    title: "Last name",
    dataType: "string",
    columnWidth: "300px",
  },
  {
    key: "age",
    title: "Age",
    dataType: "number",
    columnWidth: {
      maxWidth: "100px",
    },
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

export const COLS_DISABLE_AUTO_SORT: IcDataTableColumnObject[] = [
  {
    key: "firstName",
    title: "First name",
    dataType: "string",
    disableAutoSort: true,
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
    excludeColumnFromSort: true,
  },
  {
    key: "address",
    title: "Address",
    dataType: "address",
    excludeColumnFromSort: true,
  },
];

export const COLS_EXCLUDE_SORT: IcDataTableColumnObject[] = [
  {
    key: "firstName",
    title: "First name",
    dataType: "string",
    excludeColumnFromSort: true,
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
    excludeColumnFromSort: true,
  },
  {
    key: "address",
    title: "Address",
    dataType: "address",
    excludeColumnFromSort: true,
  },
];

export const COLS_HIDDEN: IcDataTableColumnObject[] = [
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
    hidden: true,
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

export const VERY_LONG_DATA = (rows: number = 100) => {
  const nextData = [];
  for (let i = 0; i < rows; i++) {
    const obj = {
      firstName: `firstName-${i}`,
      lastName: `lastName-${i}`,
      age: i,
      jobTitle: `jobTitle-${i}`,
      address: `${i} Main Street, Town, County, Postcode AA${i}${i} BB${i}${i}`,
      rowOptions: {
        textWrap: i % 2 === 0,
      },
    };
    nextData.push(obj);
  }

  return nextData;
};

export const textWrapColumns = () => {
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

export const textWrapRow = () => {
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

export const textWrapCell = () => {
  return LONG_DATA_VALUES.map((data) => {
    if (data.jobTitle === "Senior Financial Operations and Reporting Analyst") {
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

// data is deliberately in different order for some elements to show this can be handled
export const DATA = [
  {
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
    firstName: "Joe",
    lastName: "Bartholomew Christoper Augustine Zacchaeus Ashford", // cspell:disable-line
  },
  {
    address: "2 Main Street, Town, Country, Postcode",
    age: 28,
    firstName: "Sarah",
    lastName: "Smith",
    jobTitle: "Senior Software Developer, Site Reliability Engineering",
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
    jobTitle: "Analyst",
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
export const LONG_TEXT = [
  {
    firstName: "Joehasaverylongnamewhichneedstruncating", // cspell:disable-line
    lastName: "BartholomewChristoperAugustineZacchaeus Ashford", // cspell:disable-line
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    firstName: "Sarahalsohasaverylongname", // cspell:disable-line
    lastName: "Smithisnotaverylongname", // cspell:disable-line
    age: 28,
    jobTitle: "Senior Software Developer, Site Reliability Engineering",
    address: "2 Main Street, Town, Country, Postcode",
  },
];

export const TEXT_WRAP_LONG_DATA = [
  {
    name: name1,
    age: 36,
    department: "Accounts & Finance",
    employeeNumber: 1,
    jobTitle: {
      data: "Senior Financial Operations and Reporting Analyst",
      textWrap: true,
    },
  },
  {
    name: name2,
    age: 32,
    department: "Engineering",
    employeeNumber: 2,
    jobTitle:
      "Senior Software Engineer, Site Reliability Engineering (Microsoft Azure)",
  },
  {
    name: "Tim Rayes",
    age: 41,
    department: "Sales and Marketing",
    employeeNumber: 3,
    jobTitle:
      "Regional Sales and Marketing Strategy Director (Europe, the Middle East, and Africa)",
    rowOptions: {
      textWrap: true,
    },
  },
  {
    name: name3,
    age: "23",
    department: "Engineering (Mobile App Development)",
    employeeNumber: 4,
    jobTitle: "Junior Tester",
  },
  {
    name: name4,
    age: 34,
    department: "Engineering",
    employeeNumber: 5,
    jobTitle: "Junior Product Manager",
  },
  {
    name: name5,
    age: 45,
    department: "HR",
    employeeNumber: 6,
    jobTitle: "Junior Human Resource Information Specialist",
  },
];

export const COLUMNS_NO_TEXT_WRAP: IcDataTableColumnObject[] = [
  { key: "name", title: "Name", dataType: "string" },
  { key: "age", title: "Age", dataType: "number" },
  { key: "department", title: "Department", dataType: "string" },
  { key: "employeeNumber", title: "Employee Number", dataType: "number" },
  { key: "jobTitle", title: "Job Title", dataType: "string" },
];

export const COLUMNS_TEXT_WRAP: IcDataTableColumnObject[] = [
  { key: "name", title: "Name", dataType: "string" },
  { key: "age", title: "Age", dataType: "number" },
  {
    key: "department",
    title: "Department",
    dataType: "string",
    textWrap: true,
  },
  { key: "employeeNumber", title: "Employee Number", dataType: "number" },
  { key: "jobTitle", title: "Job Title", dataType: "string" },
];
export const LONG_DATA_VALUES = [
  {
    name: name1,
    age: 36,
    department: "Accounts & Finance",
    employeeNumber: 1,
    jobTitle: "Senior Financial Operations and Reporting Analyst",
  },
  {
    name: name2,
    age: 32,
    department: "Engineering",
    employeeNumber: 2,
    jobTitle:
      "Senior Software Engineer, Site Reliability Engineering (Microsoft Azure)",
  },
  {
    name: "Tim Rayes",
    age: 41,
    department: "Sales and Marketing",
    employeeNumber: 3,
    jobTitle:
      "Regional Sales and Marketing Strategy Director (Europe, the Middle East, and Africa)",
  },
  {
    name: name3,
    age: "23",
    department: "Engineering (Mobile App Development)",
    employeeNumber: 4,
    jobTitle: "Junior Tester",
  },
  {
    name: name4,
    age: 34,
    department: "Engineering",
    employeeNumber: 5,
    jobTitle: "Junior Product Manager",
  },
  {
    name: name5,
    age: 45,
    department: "HR",
    employeeNumber: 6,
    jobTitle: "Junior Human Resource Information Specialist",
  },
];

export const LONG_DATA_VALUES_UPDATE = [
  {
    name: "Michael Phelps",
    age: 23,
    department: "United States",
    employeeNumber: 1,
    jobTitle: "Swimmer",
  },
  {
    name: "Natalie Coughlin",
    age: 25,
    department: "United States",
    employeeNumber: 2,
    jobTitle: "Swimmer",
  },
  {
    name: "Debbie Flood",
    age: 28,
    department: "Great Britain",
    employeeNumber: 3,
    jobTitle: "7 time Olympic and Commonwealth Champion for Rowing",
  },
  {
    name: "Gillian Charleton",
    age: "22",
    department: "Canada",
    employeeNumber: 4,
    jobTitle: "Cycling",
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
    jobTitle: "Senior Software Developer, Site Reliability Engineering",
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
    jobTitle: "Analyst",
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

export const DATA_EMPHASIS = [
  {
    firstName: {
      data: "Joe",
      emphasis: "high",
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
      emphasis: "low",
    },
    age: 28,
    jobTitle: "Senior Software Developer, Site Reliability Engineering",
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
    jobTitle: "Analyst",
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

export const ROW_ALIGNMENT = DATA.map((row, index) => ({
  ...row,
  rowOptions: {
    header: ROW_HEADER_TITLES[index],
    ...(index === 0 && {
      rowAlignment: { vertical: "middle" },
      emphasis: "high",
    }),
  },
}));

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
      icon: imageIconSVG,
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
      icon: imageIconSVG,
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
      icon: imageIconSVG,
    },
  },
];
export const ICON_DATA_LONG_VALUES = [
  {
    firstName: {
      data: "Joe with a very long first name",
      icon: userIconSVG,
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
      icon: userIconSVG,
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
];

export const ICON_DATA = [
  {
    firstName: {
      data: "Joe",
      icon: userIconSVG,
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
      icon: userIconSVG,
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
      icon: userIconSVG,
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
    name: "Bartholomew Christoper Augustine Zacchaeus Ashford", // cspell:disable-line
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
    name: "Chrysanthemum Finnleigh Carrington Savannah Norton", // cspell:disable-line
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
    name: "Bernadette Mariah Genevieve Maddison Lincoln", // cspell:disable-line
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
export const ROW_HEADER_DATA = DATA.map((data, index) => ({
  ...data,
  rowOptions: {
    header: ROW_HEADER_TITLES[index],
  },
}));

export const COLS_ELEMENTS: IcDataTableColumnObject[] = [
  {
    key: "actions",
    title: "Actions",
    dataType: "element",
    columnAlignment: { horizontal: "center" },
  },
  {
    key: "firstName",
    title: "First name",
    dataType: "string",
  },
  {
    key: "actions2",
    title: "Actions2",
    dataType: "element",
    columnAlignment: { horizontal: "center" },
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

export const COLS_ELEMENTS_SINGLE_ACTION: IcDataTableColumnObject[] = [
  {
    key: "actions",
    title: "Actions",
    dataType: "element",
    columnAlignment: { horizontal: "center" },
  },
  {
    key: "firstName",
    title: "First name",
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

export const DATA_ELEMENTS = [
  {
    actions: `<ic-button variant='destructive' onClick='this.closest("tr").remove()'>Delete</ic-button>`,
    firstName: {
      data: "Joe",
      href: "https://www.example.com",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    actions2: `<ic-button aria-label="Delete row" variant='icon-tertiary' onClick='this.closest("tr").remove()'><svg viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem;"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" style="fill: currentcolor;"></path></svg></ic-button>`,
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    actions: `<ic-button variant='destructive' onClick='this.closest("tr").remove()'>Delete</ic-button>`,
    firstName: {
      data: "Sarah",
      href: "https://www.example.org",
    },
    actions2: `<ic-button aria-label="Delete row" variant='icon-tertiary' onClick='this.closest("tr").remove()'><svg viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem;"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" style="fill: currentcolor;"></path></svg></ic-button>`,
    age: 28,
    jobTitle: "Senior Software Developer, Site Reliability Engineering",
    address: "2 Main Street, Town, Country, Postcode",
  },
  {
    actions: `<ic-button variant='destructive' onClick='this.closest("tr").remove()'>Delete</ic-button>`,
    firstName: "Mark",
    actions2: `<ic-button aria-label="Delete row" variant='icon-tertiary' onClick='this.closest("tr").remove()'><svg viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem;"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" style="fill: currentcolor;"></path></svg></ic-button>`,
    age: 45,
    jobTitle: "Team Lead",
    address: "12 Key Street, Town, Country, Postcode",
  },
  {
    actions: `<ic-button variant='destructive' onClick='this.closest("tr").remove()'>Delete</ic-button>`,
    firstName: "Naomi",
    actions2: `<ic-button aria-label="Delete row" variant='icon-tertiary' onClick='this.closest("tr").remove()'><svg viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem;"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" style="fill: currentcolor;"></path></svg></ic-button>`,
    age: 32,
    jobTitle: "Analyst",
    address: "8 Side Street, Town, Country, Postcode",
  },
  {
    actions: `<ic-button variant='destructive' onClick='this.closest("tr").remove()'>Delete</ic-button>`,
    firstName: "Luke",
    actions2: `<ic-button aria-label="Delete row" variant='icon-tertiary' onClick='this.closest("tr").remove()'><svg viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem;"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" style="fill: currentcolor;"></path></svg></ic-button>`,
    age: 18,
    jobTitle: "Junior Developer",
    address: "5 New Street, Town, Country, Postcode",
  },
];

export const DATA_ELEMENTS_PAGINATION = [
  {
    actions: `<ic-button onClick='console.log("1")'>1</ic-button>`,
    firstName: {
      data: "Joe",
      href: "https://www.example.com",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    actions: `<ic-button onClick='console.log("2")'>2</ic-button>`,
    firstName: {
      data: "Sarah",
      href: "https://www.example.org",
    },
    age: 28,
    jobTitle: "Senior Software Developer, Site Reliability Engineering",
    address: "2 Main Street, Town, Country, Postcode",
  },
  {
    actions: `<ic-button onClick='console.log("3")'>3</ic-button>`,
    firstName: "Mark",
    age: 45,
    jobTitle: "Team Lead",
    address: "12 Key Street, Town, Country, Postcode",
  },
  {
    actions: `<ic-button onClick='console.log("4")'>4</ic-button>`,
    firstName: "Naomi",
    age: 32,
    jobTitle: "Analyst",
    address: "8 Side Street, Town, Country, Postcode",
  },
  {
    actions: `<ic-select placeholder="Placeholder goes here"></ic-select>`,
    firstName: "Luke",
    age: 18,
    jobTitle: "Junior Developer",
    address: "5 New Street, Town, Country, Postcode",
  },
  {
    actions: `<ic-button onClick='console.log("6")'>6</ic-button>`,
    firstName: "Dave",
    age: 33,
    jobTitle: "Analyst",
    address: "4 Extra Street, Town, County, Postcode",
  },
  {
    actions: `<ic-button onClick='console.log("7")'>7</ic-button>`,
    firstName: "Amy",
    age: 27,
    jobTitle: "Analyst",
    address: "3 Main Street, Town, Country, Postcode",
  },
  {
    actions: `<ic-button onClick='console.log("8")'>8</ic-button>`,
    firstName: "Mary",
    age: 31,
    jobTitle: "Developer",
    address: "8 Main Street, Town, County, Postcode",
  },
  {
    actions: `<ic-button onClick='console.log("9")'>9</ic-button>`,
    firstName: "Alice",
    age: 38,
    jobTitle: "Team Lead",
    address: "10 High Street, Town, Country, Postcode",
  },
  {
    actions: `<ic-select placeholder="Placeholder goes here"></ic-select>`,
    firstName: "Ben",
    age: 40,
    jobTitle: "Team Lead",
    address: "14 High Street, Town, Country, Postcode",
  },
];

export const DATA_REACT_ELEMENTS = [
  {
    firstName: {
      data: "Joe",
      href: "https://www.example.com",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    firstName: {
      data: "Sarah",
      href: "https://www.example.org/",
    },
    age: 28,
    jobTitle: "Senior Software Developer, Site Reliability Engineering",
    address: "2 Main Street, Town, Country, Postcode",
  },
  {
    firstName: "Mark",
    age: 45,
    jobTitle: "Team Lead",
    address: "12 Key Street, Town, Country, Postcode",
  },
  {
    firstName: "Naomi",
    age: 32,
    jobTitle: "Analyst",
    address: "8 Side Street, Town, Country, Postcode",
  },
  {
    firstName: "Luke",
    age: 18,
    jobTitle: "Junior Developer",
    address: "5 New Street, Town, Country, Postcode",
  },
];

export const DATA_REACT_ELEMENTS_PAGINATION = [
  ...DATA_REACT_ELEMENTS,
  {
    firstName: "Dave",
    age: 33,
    jobTitle: "Analyst",
    address: "4 Extra Street, Town, County, Postcode",
  },
  {
    firstName: "Amy",
    age: 27,
    jobTitle: "Analyst",
    address: "3 Main Street, Town, Country, Postcode",
  },
  {
    firstName: "Mary",
    age: 31,
    jobTitle: "Developer",
    address: "8 Main Street, Town, County, Postcode",
  },
  {
    firstName: "Alice",
    age: 38,
    jobTitle: "Team Lead",
    address: "10 High Street, Town, Country, Postcode",
  },
  {
    firstName: "Ben",
    age: 40,
    jobTitle: "Team Lead",
    address: "14 High Street, Town, Country, Postcode",
  },
];

export const DATA_REACT_ELEMENTS_WITH_ICONS = [
  {
    firstName: {
      data: "Joe",
      href: "https://www.example.com",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>',
    },
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    firstName: {
      data: "Sarah",
      href: "https://www.example.com",
      icon: "",
    },
    age: 28,
    jobTitle: "Senior Software Developer, Site Reliability Engineering",
    address: "2 Main Street, Town, Country, Postcode",
  },
  {
    firstName: "Mark",
    age: 45,
    jobTitle: "Team Lead",
    address: "12 Key Street, Town, Country, Postcode",
  },
  {
    firstName: "Naomi",
    age: 32,
    jobTitle: "Analyst",
    address: "8 Side Street, Town, Country, Postcode",
  },
  {
    firstName: "Luke",
    age: 18,
    jobTitle: "Junior Developer",
    address: "5 New Street, Town, Country, Postcode",
  },
];

export const DATA_WITH_EMPTY_VALUES = [
  {
    firstName: "Nigel",
    lastName: null,
    age: 62,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    firstName: "Sarah",
    lastName: "Smith",
    age: 28,
    jobTitle: undefined,
    address: "2 Main Street, Town, Country, Postcode",
  },
  {
    firstName: "Mark",
    lastName: "Owens",
    age: 45,
    jobTitle: "Team Lead",
    address: "",
  },
];

export const LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS = [
  {
    firstName: {
      data: "Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe",
      description: {
        data: "Alias: JB",
        icon: imageIconSVG,
      },
      icon: userIconSVG,
    },
    lastName: "Bloggs",
    age: 30,
    jobTitle:
      "Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer",
    address: "N/A",
  },
  {
    firstName: {
      data: "Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe Joe",
    },
    lastName: "Bloggs",
    age: 30,
    jobTitle:
      "Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer",
    address: "N/A",
  },
  {
    firstName: {
      data: "Joey",
      description: {
        data: "Unverified",
        icon: alertIconSVG,
      },
    },
    lastName: "Bloggy",
    age: 31,
    jobTitle: "Developer",
    address: "N/A",
  },
  {
    firstName: {
      description: "Alias: The Ghost",
    },
    lastName: "Blogger",
    age: 32,
    jobTitle: "Writer",
    address: "N/A",
  },
];

export const DATA_ELEMENTS_WITH_DESCRIPTIONS = [
  {
    firstName: {
      data: "Joe",
      description: {
        data: "The name of Joe",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>',
      },
    },
    lastName: "Bloggs",
    age: 30,
    jobTitle: "Developer",
    address: "1 Main Street, Town, County, Postcode",
  },
  {
    firstName: {
      data: "Sarah",
      description: {
        data: "The name of Sarah",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>',
      },
    },
    lastName: "Smith",
    age: 28,
    jobTitle: "Senior Software Developer, Site Reliability Engineering",
    address: "2 Main Street, Town, Country, Postcode",
  },
  {
    firstName: {
      data: "Mark",
      description: {
        data: "The name of Mark",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>',
      },
    },
    lastName: "Owens",
    age: 45,
    jobTitle: "Team Lead",
    address: "12 Key Street, Town, Country, Postcode",
  },
  {
    firstName: {
      data: "Naomi",
      description: {
        data: "The name of Naomi",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>',
      },
    },
    lastName: "Thomas",
    age: 32,
    jobTitle: "Analyst",
    address: "8 Side Street, Town, Country, Postcode",
  },
  {
    firstName: "Luke",
    lastName: "Ashford",
    age: {
      data: 18,
      description: {
        data: "The age of Luke",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>',
      },
    },
    jobTitle: {
      data: "Junior Developer",
      description: {
        data: "The job title of Luke",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>',
      },
    },
    address: "5 New Street, Town, Country, Postcode",
  },
];

export const createDataTableElement = (
  caption: string,
  columns: IcDataTableColumnObject[] = [],
  data: object[] = []
): HTMLIcDataTableElement => {
  const dataTable = document.createElement("ic-data-table");
  dataTable.setAttribute("caption", caption);
  dataTable.columns = columns;
  dataTable.data = data;
  return dataTable;
};

export const Basic = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Basic Table", COLS, DATA);
  dataTable.setAttribute("sortable", "true");
  return dataTable;
};

export const DataTableSizing = (): HTMLElement => {
  const dataTable = createDataTableElement("Basic Table", COLS_WIDTH, DATA);
  dataTable.setAttribute("width", "800px");
  dataTable.setAttribute("table-layout", "auto");
  return dataTable;
};

export const HiddenCol = (): HTMLElement => {
  const dataTable = createDataTableElement("Basic Table", COLS_HIDDEN, DATA);
  const setColumnVisible = (visible: boolean) => {
    const cols = [...COLS_HIDDEN];
    cols[2].hidden = !visible;
    dataTable.columns = cols;
  };
  const showButton = document.createElement("ic-button");
  const hideButton = document.createElement("ic-button");
  showButton.innerHTML = "Show Age";
  hideButton.innerHTML = "Hide Age";
  showButton.addEventListener("click", () => setColumnVisible(true));
  hideButton.addEventListener("click", () => setColumnVisible(false));

  const buttonWrapper = document.createElement("div");
  buttonWrapper.style["display"] = "flex";
  buttonWrapper.style["paddingTop"] = "10px";
  buttonWrapper.style["gap"] = "8px";
  buttonWrapper.insertAdjacentElement("afterbegin", showButton);
  buttonWrapper.insertAdjacentElement("beforeend", hideButton);

  const wrapper = document.createElement("div");
  wrapper.insertAdjacentElement("afterbegin", dataTable);
  dataTable.insertAdjacentElement("afterend", buttonWrapper);

  return wrapper;
};

// Used for table overflow testing
// export const TableOverflow = (): HTMLElement => {
//   const wrapper = document.createElement('div');
//   const dataTable = createDataTableElement("Basic Table", COLS_WIDTH, DATA);

//   wrapper.style.maxWidth = '500px'
//   wrapper.style.overflow = 'auto';
//   dataTable.setAttribute("width", "1000px");
//   wrapper.insertAdjacentElement('afterbegin', dataTable);
//   return wrapper;
// }

export const LargeDataSet = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Basic Table", LONG_COLS, LONG_DATA);
  dataTable.setAttribute("sortable", "true");
  return dataTable;
};

export const Embedded = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Embedded Table", COLS, DATA);
  dataTable.setAttribute("embedded", "true");
  return dataTable;
};

export const Dense = (): HTMLElement => {
  const dataTableDense = createDataTableElement("Dense Table", COLS, DATA);
  dataTableDense.setAttribute("density", "dense");
  return dataTableDense;
};

export const Spacious = (): HTMLElement => {
  const dataTableSpacious = createDataTableElement(
    "Spacious Table",
    COLS,
    DATA
  );
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
  dataTable.insertAdjacentElement("afterend", buttonWrapper);

  return wrapper;
};

export const HeaderTruncation = (): HTMLElement => {
  const dataTable = createDataTableElement(
    "Column Header Truncation",
    COLS,
    DATA
  );
  dataTable.setAttribute("column-header-truncation", "true");
  dataTable.style["height"] = "400px";
  dataTable.style["width"] = "500px";

  return dataTable;
};

export const RowHeaders = (): HTMLIcDataTableElement =>
  createDataTableElement("Row Header Table", ROW_HEADER_COLS, ROW_HEADER_DATA);

export const Sort = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Sort", COLS, DATA);
  dataTable.setAttribute("sortable", "true");
  dataTable.addEventListener("icSortChange", (event: CustomEvent) => {
    console.log("Sort changed", event.detail);
  });
  return dataTable;
};

export const SortOptions = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Sort Order", COLS, DATA);
  dataTable.setAttribute("sortable", "true");
  dataTable.sortOptions = {
    sortOrders: ["descending", "unsorted"],
    defaultColumn: "firstName",
  };
  dataTable.addEventListener("icSortChange", (event: CustomEvent) => {
    console.log("Sort changed", event.detail);
  });
  return dataTable;
};

export const DisableSort = (): HTMLIcDataTableElement => {
  const originalData = [...DATA];
  const dataTable = createDataTableElement("Sort", COLS, DATA);
  dataTable.setAttribute("sortable", "true");
  dataTable.setAttribute("disable-auto-sort", "true");
  dataTable.addEventListener("icSortChange", (event: CustomEvent) => {
    console.log("Sort changed", event.detail);
    if (event.detail.sorted === "ascending") {
      DATA.sort((a, b) => {
        const column = event.detail.columnName as keyof typeof DATA[0];
        if (a[column] < b[column]) return -1;
        if (a[column] > b[column]) return 1;
        return 0;
      });
    } else if (event.detail.sorted === "descending") {
      DATA.sort((a, b) => {
        const column = event.detail.columnName as keyof typeof DATA[0];
        if (a[column] < b[column]) return 1;
        if (a[column] > b[column]) return -1;
        return 0;
      });
    } else {
      DATA.splice(0, DATA.length, ...originalData);
    }
    dataTable.data = [...DATA];
  });
  return dataTable;
};

export const DisableAutoSortColumns = () => {
  const originalData = [...DATA];
  const dataTable = createDataTableElement(
    "Disable sort on columns",
    COLS_DISABLE_AUTO_SORT,
    DATA
  );
  dataTable.setAttribute("sortable", "true");
  dataTable.addEventListener(
    "icSortChange",
    (event: CustomEvent<IcSortEventDetail>) => {
      const { columnName, sorted } = event.detail;
      console.log("Sort changed", columnName, sorted);
      if (columnName !== "firstName") return;

      if (sorted === "unsorted") {
        DATA.splice(0, DATA.length, ...originalData);
      } else {
        const sortedAscending = sorted === "ascending";
        DATA.sort((a, b) => {
          if (a[columnName] < b[columnName]) return sortedAscending ? -1 : 1;
          if (a[columnName] > b[columnName]) return sortedAscending ? 1 : -1;
          return 0;
        });
      }
      dataTable.data = [...DATA];
      console.log("Custom sort applied");
    }
  );

  return dataTable;
};

export const ExcludeColumnsFromSort = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Sort", COLS_EXCLUDE_SORT, DATA);
  dataTable.setAttribute("sortable", "true");
  return dataTable;
};

export const Pagination = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Pagination", LONG_COLS, LONG_DATA);
  dataTable.setAttribute("show-pagination", "true");
  dataTable.paginationBarOptions = {
    itemsPerPageOptions: [
      { label: "5", value: "5" },
      { label: "10", value: "10" },
      { label: "15", value: "15" },
    ],
    showItemsPerPageControl: true,
    showGoToPageControl: true,
  };
  return dataTable;
};

export const ColumnOverrides = (): HTMLIcDataTableElement =>
  createDataTableElement("Column Overrides", COLS_ALIGNMENT, DATA);

export const RowOverrides = (): HTMLIcDataTableElement =>
  createDataTableElement("Row Overrides", ROW_HEADER_COLS, ROW_ALIGNMENT);

export const CellOverrides = (): HTMLIcDataTableElement =>
  createDataTableElement("Cell Overrides", COLS, DATA_CELL_ALIGNMENT);

export const LinksHTMLElements = (): HTMLIcDataTableElement =>
  createDataTableElement(
    "Links and HTML Elements Overrides",
    COLS_ELEMENTS,
    DATA_ELEMENTS
  );

export const SlottedElementsWithPagination = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement(
    "Slotted elements with pagination",
    COLS_ELEMENTS_SINGLE_ACTION,
    DATA_ELEMENTS_PAGINATION
  );
  dataTable.setAttribute("show-pagination", "true");
  dataTable.paginationBarOptions = {
    itemsPerPageOptions: [
      { label: "5", value: "5" },
      { label: "10", value: "10" },
    ],
    showItemsPerPageControl: true,
    showGoToPageControl: true,
    selectedItemsPerPage: 5,
  };
  return dataTable;
};

export const Empty = (): HTMLIcDataTableElement =>
  createDataTableElement("Empty State", COLS);

export const EmptySlotted = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Empty State", COLS);

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

export const EmptyLoading = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Empty and Loading State", COLS);

  setTimeout(() => {
    dataTable.setAttribute("loading", "true");
    setTimeout(() => (dataTable.data = DATA), 10);
  }, 5000);
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

export const CustomRowHeights = (): HTMLElement => {
  const dataTable = createDataTableElement(
    "Custom Row Heights",
    COLUMNS_NO_TEXT_WRAP,
    LONG_DATA_VALUES
  );
  dataTable.globalRowHeight = 80;
  dataTable.variableRowHeight = ({ name, age }) =>
    name === "John Smith" || age === 41 ? 200 : null;

  const resetButton = document.createElement("ic-button");
  resetButton.addEventListener("click", () => dataTable.resetRowHeights(80));
  resetButton.innerHTML = "Reset rowHeight to 80";

  const setButton = document.createElement("ic-button");
  setButton.addEventListener("click", () => {
    dataTable.globalRowHeight = 80;
    dataTable.variableRowHeight = ({ name, age }) =>
      name === "John Smith" || age === 41 ? 200 : null;
  });
  setButton.innerHTML = "Set global row height";

  const buttonWrapper = document.createElement("div");
  buttonWrapper.style["display"] = "flex";
  buttonWrapper.style["paddingTop"] = "10px";
  buttonWrapper.style["gap"] = "8px";
  buttonWrapper.insertAdjacentElement("afterbegin", setButton);
  buttonWrapper.insertAdjacentElement("beforeend", resetButton);

  const wrapper = document.createElement("div");
  wrapper.insertAdjacentElement("afterbegin", dataTable);
  wrapper.insertAdjacentElement("beforeend", buttonWrapper);
  return wrapper;
};

export const TruncationShowHide = (): HTMLElement => {
  const dataTable = CustomRowHeights().querySelector("ic-data-table")!;
  dataTable.globalRowHeight = 40;
  dataTable.variableRowHeight = undefined;
  dataTable.truncationPattern = "show-hide";

  const resetButton = document.createElement("ic-button");
  resetButton.addEventListener("click", () => dataTable.resetRowHeights(40));
  resetButton.innerHTML = "Reset rowHeight to 40";

  const setButton = document.createElement("ic-button");
  setButton.addEventListener("click", () => {
    dataTable.globalRowHeight = 80;
  });
  setButton.innerHTML = "Set globalRowHeight to 80";

  const updateDataButton = document.createElement("ic-button");
  updateDataButton.addEventListener("click", () => {
    setTimeout(() => {
      dataTable.data = LONG_DATA_VALUES_UPDATE;
    }, 500);
  });
  updateDataButton.innerHTML = "Update data";

  const buttonWrapper = document.createElement("div");
  buttonWrapper.style["display"] = "flex";
  buttonWrapper.style["paddingTop"] = "10px";
  buttonWrapper.style["gap"] = "8px";
  buttonWrapper.insertAdjacentElement("afterbegin", setButton);
  buttonWrapper.insertAdjacentElement("beforeend", resetButton);
  buttonWrapper.insertAdjacentElement("beforeend", updateDataButton);

  const wrapper = document.createElement("div");
  wrapper.insertAdjacentElement("afterbegin", dataTable);
  wrapper.insertAdjacentElement("beforeend", buttonWrapper);
  return wrapper;
};

export const TruncationTextWrap = (): HTMLElement => {
  const dataTable = createDataTableElement(
    "Text Wrap",
    COLUMNS_TEXT_WRAP,
    TEXT_WRAP_LONG_DATA
  );
  dataTable.globalRowHeight = 40;
  dataTable.variableRowHeight = undefined;

  const wrapper = document.createElement("div");
  wrapper.insertAdjacentElement("afterbegin", dataTable);
  return wrapper;
};

export const TruncationTooltip = (): HTMLElement => {
  const dataTable = CustomRowHeights().querySelector("ic-data-table")!;
  dataTable.globalRowHeight = 40;
  dataTable.variableRowHeight = undefined;
  dataTable.setAttribute("truncation-pattern", "tooltip");
  dataTable.setAttribute("sortable", "true");

  const resetButton = document.createElement("ic-button");
  resetButton.addEventListener("click", () => dataTable.resetRowHeights(40));
  resetButton.innerHTML = "Reset rowHeight to 40";

  const setButton = document.createElement("ic-button");
  setButton.addEventListener("click", () => {
    dataTable.globalRowHeight = 80;
  });
  setButton.innerHTML = "Set global row heights to 80";

  const buttonWrapper = document.createElement("div");
  buttonWrapper.style["display"] = "flex";
  buttonWrapper.style["paddingTop"] = "10px";
  buttonWrapper.style["gap"] = "8px";
  buttonWrapper.insertAdjacentElement("afterbegin", setButton);
  buttonWrapper.insertAdjacentElement("beforeend", resetButton);

  const wrapper = document.createElement("div");
  wrapper.insertAdjacentElement("afterbegin", dataTable);
  wrapper.insertAdjacentElement("beforeend", buttonWrapper);
  return wrapper;
};

export const CustomTitleBar = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement("Custom Title Bar", COLS, DATA);

  const titleBar = document.createElement("ic-data-table-title-bar");
  titleBar.setAttribute(
    "description",
    "Data table description that describes the purpose of the table."
  );
  titleBar.setAttribute("metadata", "128 items | 32gb | Updated: 01/02/03");
  titleBar.setAttribute("slot", "title-bar");

  const customDescription = document.createElement("ic-typography");
  customDescription.setAttribute("variant", "body");
  customDescription.setAttribute("slot", "description");
  customDescription.innerHTML =
    '<p>This is some text and <ic-link href="/" inline="">this is an inline link</ic-link> within the text.</p>';

  const primaryButton = document.createElement("ic-button");
  primaryButton.setAttribute("slot", "primary-action");
  primaryButton.setAttribute("size", "small");
  primaryButton.innerHTML = "Primary";

  const customButtons = [1, 2, 3].map((x) => {
    const customButton = document.createElement("ic-button");
    customButton.setAttribute("slot", "custom-actions");
    customButton.setAttribute("variant", "icon");
    customButton.setAttribute("aria-label", `Icon ${x}`);
    customButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z" /></svg>';
    return customButton;
  });

  titleBar.append(primaryButton, customDescription);
  customButtons.forEach((button) => titleBar.append(button));
  dataTable.appendChild(titleBar);

  return dataTable;
};

export const UpdatingData = (): HTMLElement => {
  const dataTable = createDataTableElement("Updating Data", LONG_COLS, []);
  const pageOptions = [{ label: "5", value: "5" }];

  dataTable.showPagination = true;
  dataTable.paginationBarOptions = {
    itemsPerPageOptions: pageOptions,
    showItemsPerPageControl: true,
    showGoToPageControl: true,
    rangeLabelType: "page",
  };

  const updateDataButton = document.createElement("ic-button");
  updateDataButton.addEventListener("click", () => {
    dataTable.data = [...dataTable.data!, ...LONG_DATA];
  });
  updateDataButton.innerHTML = "Update data";

  const clearDataButton = document.createElement("ic-button");
  clearDataButton.addEventListener("click", () => {
    dataTable.data = [];
  });
  clearDataButton.innerHTML = "Clear data";

  const updatePaginationButton = document.createElement("ic-button");
  updatePaginationButton.addEventListener("click", () => {
    dataTable.paginationBarOptions = {
      ...dataTable.paginationBarOptions,
      itemsPerPageOptions: [
        { label: "10", value: "10" },
        { label: "20", value: "20" },
        { label: "50", value: "50" },
      ],
    };
  });
  updatePaginationButton.innerHTML = "Update page lengths";

  const resetPaginationButton = document.createElement("ic-button");
  resetPaginationButton.addEventListener("click", () => {
    dataTable.paginationBarOptions = {
      ...dataTable.paginationBarOptions,
      itemsPerPageOptions: pageOptions,
    };
  });
  resetPaginationButton.innerHTML = "Reset page lengths";

  const buttonWrapper = document.createElement("div");
  buttonWrapper.style["display"] = "flex";
  buttonWrapper.style["paddingTop"] = "10px";
  buttonWrapper.style["gap"] = "8px";
  buttonWrapper.insertAdjacentElement("afterbegin", updateDataButton);
  buttonWrapper.insertAdjacentElement("beforeend", clearDataButton);
  buttonWrapper.insertAdjacentElement("beforeend", updatePaginationButton);
  buttonWrapper.insertAdjacentElement("beforeend", resetPaginationButton);

  const wrapper = document.createElement("div");
  wrapper.insertAdjacentElement("afterbegin", dataTable);
  wrapper.insertAdjacentElement("beforeend", buttonWrapper);
  return wrapper;
};

export const SlottedPagination = (): HTMLIcDataTableElement => {
  let itemsPerPage = 5;
  const dataTable = createDataTableElement(
    "slotted-pagination",
    LONG_COLS,
    LONG_DATA
  );
  const paginationBar = document.createElement("ic-pagination-bar");
  paginationBar.setAttribute("total-items", `${LONG_DATA.length}`);
  paginationBar.setAttribute("show-items-per-page-control", "true");
  paginationBar.itemsPerPageOptions = [
    { label: "5", value: "5" },
    { label: "10", value: "10" },
  ];
  paginationBar.setAttribute("slot", "pagination-bar");
  paginationBar.addEventListener("icItemsPerPageChange", (ev) => {
    itemsPerPage = ev.detail.value;
    dataTable.data = LONG_DATA.slice(0, itemsPerPage);
  });
  paginationBar.addEventListener("icPageChange", (ev) => {
    const fromRow = (ev.detail.value - 1) * itemsPerPage;
    dataTable.data = LONG_DATA.slice(fromRow, fromRow + itemsPerPage);
  });
  dataTable.appendChild(paginationBar);
  return dataTable;
};

export const ActionElement = (): HTMLElement => {
  const dataTable = createDataTableElement("Action Element", COLS, DATA);

  const actionElement = document.createElement("div");
  actionElement.setAttribute("slot", "firstName-0-action-element");
  actionElement.setAttribute("style", "display: flex");

  const downloadButtonEl = document.createElement("ic-button");
  downloadButtonEl.setAttribute("variant", "icon");
  downloadButtonEl.setAttribute("size", "small");
  downloadButtonEl.addEventListener("click", () =>
    alert("Download button clicked")
  );
  downloadButtonEl.innerHTML = downloadIconSVG;
  downloadButtonEl.setAttribute("aria-label", "Download data");
  actionElement.appendChild(downloadButtonEl);

  const cellphoneButtonEl = document.createElement("ic-button");
  cellphoneButtonEl.setAttribute("variant", "icon");
  cellphoneButtonEl.setAttribute("size", "small");
  cellphoneButtonEl.addEventListener("click", () =>
    alert("Cellphone button clicked")
  );
  cellphoneButtonEl.innerHTML = cellphoneIconSVG;
  cellphoneButtonEl.setAttribute("aria-label", "Call phone");
  actionElement.appendChild(cellphoneButtonEl);

  const copyButtonEl = document.createElement("ic-button");
  copyButtonEl.setAttribute("variant", "icon");
  copyButtonEl.setAttribute("size", "small");
  copyButtonEl.addEventListener("click", () => alert("Copy button clicked"));
  copyButtonEl.innerHTML = copyIconSVG;
  copyButtonEl.setAttribute("aria-label", "Copy data");
  actionElement.appendChild(copyButtonEl);

  dataTable.appendChild(actionElement);

  return dataTable;
};

export const MissingCellData = (): HTMLElement =>
  createDataTableElement("Missing Cell Data", COLS, DATA_WITH_EMPTY_VALUES);

export const SelectWithCheckbox = (): HTMLElement => {
  const dataTable = createDataTableElement(
    "Select using checkboxes",
    COLS,
    DATA
  );

  dataTable.setAttribute("row-selection", "true");
  dataTable.addEventListener("icSelectedRowChange", (event: CustomEvent) => {
    console.log("Selected row changed", event.detail);
  });
  dataTable.addEventListener("icSelectAllRows", (event: CustomEvent) => {
    console.log("Selected all rows", event.detail);
  });

  return dataTable;
};

export const DevArea = (): HTMLElement => {
  const dataTable = createDataTableElement(
    "Basic Table",
    COLS,
    VERY_LONG_DATA(5)
  );
  dataTable.sortable = true;
  dataTable.variableRowHeight = undefined;
  dataTable.showPagination = true;
  dataTable.addEventListener("icDataLoaded", () => {
    console.log("Data loaded");
  });
  dataTable.addEventListener("icColumnsLoaded", () => {
    console.log("Columns loaded");
  });

  const description = document.createElement("ic-typography");
  description.innerHTML = `
  Use the buttons to change the state of the Data Tables component.<br /><br />
  By default, the global row height is set to <b>'auto'</b>. This means the row height will be dictated by the cell with the most lines.<br />
  In order to view the truncated data, the truncation pattern must first be set and then the row height. The reason for this is, the data will know how to behave if the cell space is reduced.<br />
  Setting the truncation pattern while the row height is set to auto will not display the truncated data as the table cells
  will have enough space to show all table cell data.<br /><br />
  In this demo, the even rows have <b>'textWrap'</b> applied.
  `;

  const resetButton = document.createElement("ic-button");
  resetButton.addEventListener("click", () => dataTable.resetRowHeights());
  resetButton.innerHTML = "Reset row height: auto";

  const rowHeight40Btn = document.createElement("ic-button");
  rowHeight40Btn.addEventListener("click", () => {
    dataTable.globalRowHeight = 40;
  });
  rowHeight40Btn.innerHTML = "Set global row height: 40";

  const rowHeight80Btn = document.createElement("ic-button");
  rowHeight80Btn.addEventListener("click", () => {
    dataTable.globalRowHeight = 80;
  });
  rowHeight80Btn.innerHTML = "Set global row height: 80";

  const rowHeight150Btn = document.createElement("ic-button");
  rowHeight150Btn.addEventListener("click", () => {
    dataTable.globalRowHeight = 150;
  });
  rowHeight150Btn.innerHTML = "Set global row height: 150";

  const updateRows200Btn = document.createElement("ic-button");
  updateRows200Btn.addEventListener("click", () => {
    setTimeout(() => {
      dataTable.data = VERY_LONG_DATA(200);
    }, 500);
  });
  updateRows200Btn.innerHTML = "Update data rows: 200";

  const tooltipTruncationBtn = document.createElement("ic-button");
  tooltipTruncationBtn.textContent = "truncationPattern: tooltip";
  tooltipTruncationBtn.addEventListener("click", () => {
    dataTable.truncationPattern = "tooltip";
  });

  const showHideTruncationBtn = document.createElement("ic-button");
  showHideTruncationBtn.textContent = "truncationPattern: show-hide";
  showHideTruncationBtn.addEventListener("click", () => {
    dataTable.truncationPattern = "show-hide";
  });

  const buttonWrapper = document.createElement("div");
  buttonWrapper.className = "wrapper";
  buttonWrapper.style["display"] = "flex";
  buttonWrapper.style["flexWrap"] = "wrap";
  buttonWrapper.style["paddingBlock"] = "10px";
  buttonWrapper.style["gap"] = "8px";

  buttonWrapper.insertAdjacentElement("beforeend", tooltipTruncationBtn);
  buttonWrapper.insertAdjacentElement("beforeend", showHideTruncationBtn);
  buttonWrapper.insertAdjacentElement("beforeend", rowHeight40Btn);
  buttonWrapper.insertAdjacentElement("beforeend", rowHeight80Btn);
  buttonWrapper.insertAdjacentElement("beforeend", rowHeight150Btn);
  buttonWrapper.insertAdjacentElement("beforeend", resetButton);
  buttonWrapper.insertAdjacentElement("beforeend", updateRows200Btn);

  const wrapper = document.createElement("div");
  wrapper.insertAdjacentElement("beforeend", description);
  wrapper.insertAdjacentElement("beforeend", buttonWrapper);
  wrapper.insertAdjacentElement("beforeend", dataTable);
  return wrapper;
};

export const CellDescriptions = (): HTMLIcDataTableElement => {
  const dataTable = createDataTableElement(
    "Cell descriptions data table",
    COLS,
    DATA_ELEMENTS_WITH_DESCRIPTIONS
  );
  dataTable.setAttribute("sortable", "true");
  return dataTable;
};

export const LongCellDescriptions = (): HTMLElement => {
  const dataTable = createDataTableElement(
    "Cell descriptions data table auto with tooltip",
    COLS,
    LONG_DATA_ELEMENTS_WITH_DESCRIPTIONS
  );

  const tooltipTruncationBtn = document.createElement("ic-button");
  tooltipTruncationBtn.textContent = "truncationPattern: tooltip";
  tooltipTruncationBtn.addEventListener("click", () => {
    dataTable.truncationPattern = "tooltip";
  });

  const showHideTruncationBtn = document.createElement("ic-button");
  showHideTruncationBtn.textContent = "truncationPattern: show-hide";
  showHideTruncationBtn.addEventListener("click", () => {
    dataTable.truncationPattern = "show-hide";
  });

  const buttonWrapper = document.createElement("div");
  buttonWrapper.className = "wrapper";
  buttonWrapper.style["display"] = "flex";
  buttonWrapper.style["flexWrap"] = "wrap";
  buttonWrapper.style["paddingBlock"] = "10px";
  buttonWrapper.style["gap"] = "8px";
  const resetButton = document.createElement("ic-button");
  resetButton.addEventListener("click", () => dataTable.resetRowHeights());
  resetButton.innerHTML = "Reset row height: auto";

  const rowHeight40Btn = document.createElement("ic-button");
  rowHeight40Btn.addEventListener("click", () => {
    dataTable.globalRowHeight = 40;
  });
  rowHeight40Btn.innerHTML = "Set global row height: 40";

  const rowHeight80Btn = document.createElement("ic-button");
  rowHeight80Btn.addEventListener("click", () => {
    dataTable.globalRowHeight = 80;
  });
  rowHeight80Btn.innerHTML = "Set global row height: 80";

  const rowHeight150Btn = document.createElement("ic-button");
  rowHeight150Btn.addEventListener("click", () => {
    dataTable.globalRowHeight = 150;
  });
  rowHeight150Btn.innerHTML = "Set global row height: 150";

  buttonWrapper.insertAdjacentElement("beforeend", tooltipTruncationBtn);
  buttonWrapper.insertAdjacentElement("beforeend", showHideTruncationBtn);
  buttonWrapper.insertAdjacentElement("beforeend", rowHeight40Btn);
  buttonWrapper.insertAdjacentElement("beforeend", rowHeight80Btn);
  buttonWrapper.insertAdjacentElement("beforeend", rowHeight150Btn);
  buttonWrapper.insertAdjacentElement("beforeend", resetButton);

  const wrapper = document.createElement("div");
  wrapper.insertAdjacentElement("beforeend", buttonWrapper);
  wrapper.insertAdjacentElement("beforeend", dataTable);
  return wrapper;
};
