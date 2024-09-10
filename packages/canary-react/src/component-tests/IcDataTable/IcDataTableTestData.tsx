import { IcDataTableColumnObject } from "@ukic/canary-web-components";
import { DATA } from "@ukic/canary-web-components/src/components/ic-data-table/story-data";

export const singleColumnWidth = (
  firstNameWidth: string
): IcDataTableColumnObject[] => [
  {
    key: "firstName",
    title: "First name",
    dataType: "string",
    columnWidth: firstNameWidth,
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
];

export const multipleColumnWidth = (
  firstNameWidth: string,
  ageWidth: string
): IcDataTableColumnObject[] => [
  {
    key: "firstName",
    title: "First name",
    dataType: "string",
    columnWidth: firstNameWidth,
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
    columnWidth: ageWidth,
  },
];

export const singleMinWidthColumn = (
  minWidth: string
): IcDataTableColumnObject[] => [
  {
    key: "firstName",
    title: "First name",
    dataType: "string",
    columnWidth: {
      minWidth: minWidth,
    },
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
];

export const singleColumnTruncationWidth = (
  lastNameWidth: string
): IcDataTableColumnObject[] => [
  {
    key: "firstName",
    title: "First name",
    dataType: "string",
  },
  {
    key: "lastName",
    title: "Last name",
    dataType: "string",
    columnWidth: lastNameWidth,
  },
  {
    key: "age",
    title: "Age",
    dataType: "number",
  },
];

export const newData = () => {
  return DATA.map((d) => ({
    firstName: d.firstName,
    lastName: d.lastName,
    age: d.age,
  }));
};
