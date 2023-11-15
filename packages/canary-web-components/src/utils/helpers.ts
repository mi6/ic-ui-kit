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