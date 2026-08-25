import { DataTable } from "../../ic-data-table";

type LineClampTarget = {
  typographyEl: HTMLIcTypographyElement;
  cellContainer: HTMLElement;
};

type DataTablePerformanceInternals = {
  truncationPattern?: "tooltip" | "show-hide";
  addLineClampCSSBatch: (targets: LineClampTarget[]) => void;
  setupTruncationResizeObserver: (
    typographyElements: HTMLIcTypographyElement[]
  ) => void;
  updateTruncationTooltip: (
    removeTooltipOnly?: boolean,
    typographyElements?: HTMLIcTypographyElement[]
  ) => void;
};

describe("ic-data-table truncation performance", () => {
  it("batches line-clamp layout reads before applying style writes", () => {
    const dataTable =
      new DataTable() as unknown as DataTablePerformanceInternals;
    const order: string[] = [];

    const createTarget = (id: number): LineClampTarget => {
      const cellContainer = document.createElement("div");
      const typographyEl = document.createElement(
        "ic-typography"
      ) as HTMLIcTypographyElement;

      Object.defineProperty(cellContainer, "clientHeight", {
        configurable: true,
        get: () => {
          order.push(`read-${id}`);
          return 72;
        },
      });

      const setAttribute = typographyEl.setAttribute.bind(typographyEl);
      jest
        .spyOn(typographyEl, "setAttribute")
        .mockImplementation((name: string, value: string) => {
          order.push(`write-${id}`);
          setAttribute(name, value);
        });

      return { typographyEl, cellContainer };
    };

    dataTable.addLineClampCSSBatch([createTarget(1), createTarget(2)]);

    expect(order).toEqual(["read-1", "read-2", "write-1", "write-2"]);
  });

  it("uses one resize observer for all truncated typography elements", () => {
    const dataTable =
      new DataTable() as unknown as DataTablePerformanceInternals;
    const observe = jest.fn();
    const disconnect = jest.fn();
    const originalResizeObserver = globalThis.ResizeObserver;
    const ResizeObserverMock = jest.fn(() => ({
      observe,
      disconnect,
      unobserve: jest.fn(),
    }));

    globalThis.ResizeObserver =
      ResizeObserverMock as unknown as typeof ResizeObserver;

    const typographyElements = [1, 2, 3].map(
      () =>
        document.createElement("ic-typography") as HTMLIcTypographyElement
    );

    try {
      dataTable.setupTruncationResizeObserver(typographyElements);

      expect(ResizeObserverMock).toHaveBeenCalledTimes(1);
      expect(observe).toHaveBeenCalledTimes(3);
      typographyElements.forEach((typographyEl) => {
        expect(observe).toHaveBeenCalledWith(typographyEl);
      });
    } finally {
      globalThis.ResizeObserver = originalResizeObserver;
    }
  });

  it("re-evaluates the full observed set in one debounced resize batch", () => {
    jest.useFakeTimers();

    const dataTable =
      new DataTable() as unknown as DataTablePerformanceInternals;
    dataTable.truncationPattern = "tooltip";

    const originalResizeObserver = globalThis.ResizeObserver;
    let resizeCallback: ResizeObserverCallback | undefined;
    const observe = jest.fn();
    const ResizeObserverMock = jest.fn((callback: ResizeObserverCallback) => {
      resizeCallback = callback;
      return {
        observe,
        disconnect: jest.fn(),
        unobserve: jest.fn(),
      };
    });

    globalThis.ResizeObserver =
      ResizeObserverMock as unknown as typeof ResizeObserver;

    const typographyElements = [1, 2, 3].map(() => {
      const cellContainer = document.createElement("div");
      cellContainer.classList.add("cell-container");
      const typographyEl = document.createElement(
        "ic-typography"
      ) as HTMLIcTypographyElement;
      cellContainer.append(typographyEl);
      return typographyEl;
    });

    const updateTruncationTooltip = jest
      .spyOn(dataTable, "updateTruncationTooltip")
      .mockImplementation(() => undefined);

    try {
      dataTable.setupTruncationResizeObserver(typographyElements);

      expect(resizeCallback).toBeDefined();
      resizeCallback?.([], {} as ResizeObserver);
      jest.runOnlyPendingTimers();

      expect(updateTruncationTooltip).toHaveBeenCalledTimes(1);
      expect(updateTruncationTooltip).toHaveBeenCalledWith(
        false,
        typographyElements
      );
    } finally {
      globalThis.ResizeObserver = originalResizeObserver;
      jest.useRealTimers();
    }
  });
});
