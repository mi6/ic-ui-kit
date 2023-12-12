import { IcCallbackFunctionNoReturn } from "@ukic/web-components";

// Build does not recognise this function being passed via @ukic/web-components so it has been added locally
export const checkResizeObserver = (
  callbackFn: IcCallbackFunctionNoReturn
): void => {
  if (
    typeof window !== "undefined" &&
    typeof window.ResizeObserver !== "undefined"
  ) {
    callbackFn();
  }
};

export const getCssProperty = (cssVar: string): string =>
  getComputedStyle(document.documentElement).getPropertyValue(cssVar);

export const DEVICE_SIZES = {
  XS: Number(getCssProperty("--ic-breakpoint-xs").replace("px", "")), // 0
  S: Number(getCssProperty("--ic-breakpoint-sm").replace("px", "")), // 576
  M: Number(getCssProperty("--ic-breakpoint-md").replace("px", "")), // 768
  L: Number(getCssProperty("--ic-breakpoint-lg").replace("px", "")), // 992
  XL: Number(getCssProperty("--ic-breakpoint-xl").replace("px", "")), // 1200
  UNDEFINED: 1200,
};
