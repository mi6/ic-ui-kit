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

export const isSlotUsed = (element: HTMLElement, slotName: string): boolean => {
  return Array.from(element.children).some(
    (child) => child.getAttribute("slot") === slotName
  );
};

export const getSlot = (element: HTMLElement, name: string): Element | null => {
  if (element && element.querySelector) {
    return element.querySelector(`[slot="${name}"]`);
  }
  return null;
};

export const getSlotElements = (
  slot: Element
): NodeListOf<ChildNode> | Element[] => {
  const slotContent = slot.firstElementChild as HTMLSlotElement;

  if (slotContent !== null) {
    const elements = slotContent.assignedElements
      ? slotContent.assignedElements()
      : slotContent.childNodes;
    return elements.length ? elements : null;
  } else {
    //check for single element
    return slot === null ? null : [slot];
  }
};

export const getSlotContent = (
  element: HTMLElement,
  name: string
): Element[] | NodeListOf<ChildNode> | null => {
  const slot = getSlot(element, name);
  if (slot) {
    return getSlotElements(slot);
  }

  return null;
};

/**
 * Used to inherit global attributes set on the host. Called in componentWillLoad and assigned
 * to a variable that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
export const inheritAttributes = (
  element: HTMLElement,
  attributes: string[] = []
): { [key: string]: unknown } => {
  const attributeObject: { [key: string]: unknown } = {};

  attributes.forEach((attr) => {
    if (element.hasAttribute(attr)) {
      const value = element.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = element.getAttribute(attr);
      }
      element.removeAttribute(attr);
    }
  });

  return attributeObject;
};
