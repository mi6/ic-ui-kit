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

export type IcDataTableColumnObject = {
  key: string;
  title: string;
  dataType: IcDataTableColumnDataTypes;
  columnAlignment?: {
    horizontal?: string;
    vertical?: string;
  };
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

export type IcDataTableTruncationTypes = "tooltip" | "showHide";
