export type IcDataTableSortOrderOptions =
  | "unsorted"
  | "ascending"
  | "descending";

export type IcDataTableDensityOptions = "default" | "dense" | "spacious";

export type IcDataTableColumnDataTypes =
  | "string"
  | "number"
  | "address"
  | "element"
  | "date";

export type IcDataTableColumnWidthTypes = {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
};

export type IcDataTableColumnObject = {
  key: string;
  title: string;
  dataType: IcDataTableColumnDataTypes;
  columnAlignment?: {
    horizontal?: string;
    vertical?: string;
  };
  rowOptions?: {
    textWrap: boolean;
  };
  columnWidth?: string | IcDataTableColumnWidthTypes;
  textWrap?: boolean;
  cellAlignment?: string;
  emphasis?: string;
  colspan?: number;
  icon?: {
    icon: string;
    onAllCells?: boolean;
    hideOnHeader?: boolean;
  };
};

export type IcDataTableRowHeights = number | "auto";

export interface IcDensityUpdateEventDetail {
  value: IcDataTableDensityOptions;
}
export type IcDataTableTruncationTypes = "tooltip" | "show-hide" | undefined;

export interface IcSortEventDetail {
  columnName: string;
  sorted: IcDataTableSortOrderOptions;
}

export type truncWrapperDetailsTypes = {
  scrollHeight: number | null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IcDataTableDataType = { [key: string]: any };
