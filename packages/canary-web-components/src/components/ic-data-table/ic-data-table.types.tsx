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

export type IcDataTableAlignmentOptions = {
  horizontal?: string;
  vertical?: string;
};

export type IcDataTableColumnObject = {
  key: string;
  title: string;
  dataType: IcDataTableColumnDataTypes;
  columnAlignment?: IcDataTableAlignmentOptions;
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
  excludeColumnFromSort?: boolean;
  hidden?: boolean;
  disableAutoSort?: boolean;
};

export type IcLoadingOptions = {
  monochrome?: boolean;
  description?: string;
  label?: string;
  labelDuration?: number;
  max?: number;
  min?: number;
  progress?: number;
  overlay?: boolean;
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

export type IcDataTableRowOptions = {
  header?: string;
  emphasis?: string;
  rowAlignment?: IcDataTableAlignmentOptions;
  textWrap?: boolean;
};

export type IcDataTableDataType = {
  [key: string]: any;
  rowOptions?: IcDataTableRowOptions;
};
