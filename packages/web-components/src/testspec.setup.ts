import * as helpers from "./utils/helpers";

//common setup to be used across all spec tests
import { DEVICE_SIZES as device_sizes } from "./utils/helpers";

Object.defineProperty(device_sizes, "XS", { value: 0 });
Object.defineProperty(device_sizes, "S", { value: 576 });
Object.defineProperty(device_sizes, "M", { value: 768 });
Object.defineProperty(device_sizes, "L", { value: 992 });
Object.defineProperty(device_sizes, "XL", { value: 1200 });

// ResizeObserver isn't available in test environment
const mockResizeObserver = jest.fn();
mockResizeObserver.mockReturnValue({
  observe: jest.fn().mockReturnValue(null),
  unobserve: jest.fn().mockReturnValue(null),
  disconnect: jest.fn().mockReturnValue(null),
});
Object.defineProperty(global, "ResizeObserver", {
  value: mockResizeObserver,
});

export const waitForTimeout = async (ms: number): Promise<void> => {
  await new Promise((r) => setTimeout(r, ms));
};

export const mockDeviceSize = (size: number) => {
  const matchesFunc = jest.fn((devSize) => {
    return devSize === size;
  });

  Object.defineProperty(helpers, "deviceSizeMatches", {
    value: matchesFunc,
  });
};

export const waitForNavGroupLoad = async (): Promise<void> => {
  //delay to account for 50ms delay in componentdidload
  await waitForTimeout(100);
};
