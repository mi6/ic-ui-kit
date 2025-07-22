/* eslint-disable react/jsx-no-bind */
import React, { useRef } from "react";
import { IcDataTableColumnObject } from "@ukic/canary-web-components";
import {
  COLS_ELEMENTS_SINGLE_ACTION,
  DATA,
  DATA_REACT_ELEMENTS_PAGINATION,
} from "@ukic/canary-web-components/src/components/ic-data-table/story-data";
import { IcDataTable } from "../../components";
import { IcButton, IcMenuItem, IcPopoverMenu } from "@ukic/react";

const FIRST_NAME_TITLE = "First name";

export const singleColumnWidth = (
  firstNameWidth: string
): IcDataTableColumnObject[] => [
  {
    key: "firstName",
    title: FIRST_NAME_TITLE,
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
    title: FIRST_NAME_TITLE,
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
    title: FIRST_NAME_TITLE,
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
    title: FIRST_NAME_TITLE,
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const newData = (): { [key: string]: any }[] => {
  return DATA.map((d) => ({
    firstName: d.firstName,
    lastName: d.lastName,
    age: d.age,
  }));
};

export const DataTableWithPopover = (): JSX.Element => {
  return (
    <IcDataTable
      caption="Slotted elements with pagination"
      columns={COLS_ELEMENTS_SINGLE_ACTION}
      data={DATA_REACT_ELEMENTS_PAGINATION}
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
      {DATA_REACT_ELEMENTS_PAGINATION.map((_, index) => {
        const popoverRef = useRef<{ open: boolean }>(null);

        return (
          <div key={`actions-${index}`} slot={`actions-${index}`}>
            <IcButton
              id={`popover-anchor-${index}`}
              onClick={() => {
                if (popoverRef.current) {
                  popoverRef.current.open = !popoverRef.current.open;
                }
              }}
            >
              {index + 1}
            </IcButton>
            <IcPopoverMenu
              ref={popoverRef}
              anchor={`popover-anchor-${index}`}
              aria-label="popover"
            >
              <IcMenuItem label="Copy code"></IcMenuItem>
              <IcMenuItem label="Logout" variant="destructive"></IcMenuItem>
            </IcPopoverMenu>
          </div>
        );
      })}
    </IcDataTable>
  );
};
