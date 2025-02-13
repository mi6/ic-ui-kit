import readme from "./readme.md";
import {
  ActionElement,
  Basic,
  CellDescriptions,
  CellOverrides,
  ColumnOverrides,
  CustomIcons,
  CustomRowHeights,
  CustomTitleBar,
  DataTableSizing,
  Dense,
  DevArea,
  Embedded,
  Empty,
  EmptySlotted,
  HeaderTruncation,
  LargeDataSet,
  LinksHTMLElements,
  Loading,
  LongCellDescriptions,
  MissingCellData,
  Pagination,
  RowHeaders,
  RowOverrides,
  Scrollable,
  SelectedRowChangeEvent,
  SlottedPagination,
  Sort,
  SortOptions,
  Spacious,
  TruncationShowHide,
  TruncationTextWrap,
  TruncationTooltip,
  TurnOffSelectedRowHighlighting,
  Updating,
  UpdatingData,
} from "./story-data";

export default {
  title: "Web Components/Data Table",
  component: "ic-data-table",

  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

export const BasicExample = {
  render: () => Basic(),
  name: "Basic",
};

export const LargeDataSetExample = {
  render: () => LargeDataSet(),
  name: "Large Data Set",
};

export const EmbeddedExample = {
  render: () => Embedded(),
  name: "Embedded",
};

export const DenseExample = {
  render: () => Dense(),
  name: "Dense",
};

export const SpaciousExample = {
  render: () => Spacious(),
  name: "Spacious",
};

export const StickyColumnHeadersExample = {
  render: () => Scrollable(),
  name: "Sticky Column Headers",
};

export const ColumnHeaderTruncationExample = {
  render: () => HeaderTruncation(),
  name: "Column header truncation",
};

export const RowHeadersExample = {
  render: () => RowHeaders(),
  name: "Row Headers",
};

export const SortExample = {
  render: () => Sort(),
  name: "Sort",
};

export const SortOptionsExample = {
  render: () => SortOptions(),
  name: "Sort Options",
};

export const PaginationExample = {
  render: () => Pagination(),
  name: "Pagination",
};

export const ColumnOverridesExample = {
  render: () => ColumnOverrides(),
  name: "Column Overrides",
};

export const RowOverridesExample = {
  render: () => RowOverrides(),
  name: "Row Overrides",
};

export const CellOverridesExample = {
  render: () => CellOverrides(),
  name: "Cell Overrides",
};

export const DefaultEmptyStateExample = {
  render: () => Empty(),
  name: "Default Empty State",
};

export const SlottedEmptyStateExample = {
  render: () => EmptySlotted(),
  name: "Slotted Empty State",
};

export const LoadingStateExample = {
  render: () => Loading(),
  name: "Loading State",
  height: "360px",
};

export const UpdatingStateExample = {
  render: () => Updating(),
  name: "Updating State",
};

export const LinksAndElementsInDataExample = {
  render: () => LinksHTMLElements(),
  name: "Links and Elements in data",
};

export const CustomIconsExample = {
  render: () => CustomIcons(),
  name: "Custom Icons",
};

export const CustomRowHeightsExample = {
  render: () => CustomRowHeights(),
  name: "Custom Row Heights",
};

export const CustomTitleBarExample = {
  render: () => CustomTitleBar(),
  name: "Custom Title Bar",
};

export const UpdatingDataExample = {
  render: () => UpdatingData(),
  name: "Updating data",
};

export const SlottedPaginationBarExample = {
  render: () => SlottedPagination(),
  name: "Slotted pagination bar",
};

export const DataTruncationTooltipExample = {
  render: () => TruncationTooltip(),
  name: "Data truncation tooltip",
};

export const DataTruncationSeeMoreSeeLessExample = {
  render: () => TruncationShowHide(),
  name: "Data truncation see more / see less",
};

export const TextWrapExample = {
  render: () => TruncationTextWrap(),
  name: "Text Wrap",
};

export const TableSizingAndColumnWidthExample = {
  render: () => DataTableSizing(),
  name: "Table sizing and column width",
};

export const ActionElementExample = {
  render: () => ActionElement(),
  name: "Action Element",
};

export const DescriptionAndIconsWithinCellsExample = {
  render: () => CellDescriptions(),
  name: "Description and icons within cells",

  parameters: {
    loki: {
      skip: true,
    },
  },
};

export const DescriptionAndIconsWithinCellsWithLongTextExample = {
  render: () => LongCellDescriptions(),
  name: "Description and icons within cells with long text",

  parameters: {
    loki: {
      skip: true,
    },
  },
};

export const MissingCellDataExample = {
  render: () => MissingCellData(),
  name: "Missing cell data",

  parameters: {
    loki: {
      skip: true,
    },
  },
};

export const TurnOffSelectedRowHighlightingExample = {
  render: () => TurnOffSelectedRowHighlighting(),
  name: "Turn off selected row highlighting",
};

export const SelectedRowChangeEventExample = {
  render: () => SelectedRowChangeEvent(),
  name: "Selected row change event",
};

export const DevAreaExample = {
  render: () => DevArea(),

  parameters: {
    loki: {
      skip: true,
    },
  },

  name: "Dev Area",
};
