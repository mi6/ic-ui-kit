import { EventEmitter } from "@stencil/core";
import {
  IcCallbackFunctionNoReturn,
  IcInformationStatusOrEmpty,
  IcNavParentDetails,
  IcPropObject,
  IcSearchMatchPositions,
  IcColorRGBA,
} from "./types";

import {
  IcMenuOption,
  IcThemeForeground,
  IcThemeForegroundEnum,
} from "../utils/types";
import {
  IC_BLOCK_COLOR_COMPONENTS,
  IC_BLOCK_COLOR_EXCEPTIONS,
  IC_FIXED_COLOR_COMPONENTS,
} from "./constants";

const DARK_MODE_THRESHOLD = 133.3505;

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

export const debounceEvent = (
  event: EventEmitter,
  wait: number
): EventEmitter => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const original = (event as any)._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait),
  } as EventEmitter;
};

export const debounce = (
  func: (...args: unknown[]) => void,
  wait = 0
): unknown => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};

/**
 * This method is used to add a hidden input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param always Add a hidden input even if the container does not use Shadow
 * @param container The element where the input will be added
 * @param name The name of the input
 * @param value The value of the input
 * @param disabled If true, the input is disabled
 */
export const renderHiddenInput = (
  always: boolean,
  container: HTMLElement,
  name: string,
  value: string | undefined | null,
  disabled: boolean
): void => {
  if (name !== undefined) {
    if (always || hasShadowDom(container)) {
      const inputs = container.querySelectorAll("input.ic-input");
      const inputEls = Array.from(inputs);
      const filtered = inputEls.filter((el) => container === el.parentElement);

      let input = filtered[0] as HTMLInputElement;
      if (input === null || input === undefined) {
        input = container.ownerDocument.createElement("input");
        input.type = "hidden";
        input.classList.add("ic-input");
        container.appendChild(input);
      }
      input.disabled = disabled;
      input.name = name;
      input.value = value || "";
    }
  }
};

export const removeHiddenInput = (container: HTMLElement): void => {
  const inputs = container.querySelectorAll("input.ic-input");
  const inputEls = Array.from(inputs);
  const filtered = inputEls.filter((el) => container === el.parentElement);
  const input = filtered[0] as HTMLInputElement;
  input?.remove();
};

export const hasShadowDom = (el: HTMLElement): boolean => {
  return !!el.shadowRoot && !!el.attachShadow;
};

export const getInputHelperTextID = (id: string): string => {
  return id + "-helper-text";
};

export const getInputValidationTextID = (id: string): string => {
  return id + "-validation-text";
};

export const getInputDescribedByText = (
  inputId: string,
  helperText: boolean,
  validationText: boolean
): string => {
  return `${helperText ? getInputHelperTextID(inputId) : ""} ${
    validationText ? getInputValidationTextID(inputId) : ""
  }`.trim();
};

/**
 * This method helps to understand the context in which a component exists,
 * to assist with choosing appropriate foreground colours to use. For example,
 * this method will help you use the 'white' version of a button if it's within
 * a block colour element using white foreground text.
 *
 * This only works for components/elements passed via <slot> and not if they
 * are part of an IC component.
 *
 * ""
 * @returns IcThemeForeground depending on the context
 */
export const getThemeFromContext = (
  el: Element,
  themeFromEvent: IcThemeForeground = null
): IcThemeForeground => {
  const parentElement =
    el.parentElement || (<ShadowRoot>el.getRootNode()).host.parentElement;
  const blockColorParent = parentElement.closest(
    IC_BLOCK_COLOR_COMPONENTS.join(",")
  );

  // If within a block color component
  if (blockColorParent !== null) {
    const parentTag = blockColorParent.tagName.toLowerCase();
    const currentTag = el.tagName.toLowerCase();

    if (IC_BLOCK_COLOR_EXCEPTIONS[parentTag]?.includes(currentTag)) {
      return IcThemeForegroundEnum.Default;
    } else if (
      themeFromEvent !== null &&
      !IC_FIXED_COLOR_COMPONENTS.includes(parentTag)
    ) {
      return themeFromEvent;
    } else if (
      blockColorParent.classList.contains(IcThemeForegroundEnum.Dark)
    ) {
      return IcThemeForegroundEnum.Dark;
    }

    return IcThemeForegroundEnum.Light;
  }

  return IcThemeForegroundEnum.Default;
};

export const isMobileOrTablet = (): boolean => {
  let isMobileOrTablet = false;
  if ("maxTouchPoints" in navigator) {
    isMobileOrTablet = navigator.maxTouchPoints > 0;
  }
  return isMobileOrTablet;
};

/**
 * Will create a button within the lightDOM which interacts with the parent form.
 * This is required as buttons within the shadowDOM will not invoke a submit or reset
 *
 * @param form - parent form element which contains shadowDom button
 * @param button - shadowDOM button
 */
export const handleHiddenFormButtonClick = (
  form: HTMLFormElement,
  button: HTMLIcButtonElement | HTMLButtonElement
): void => {
  const hiddenFormButton = document.createElement("button");

  hiddenFormButton.setAttribute("type", button.type);
  hiddenFormButton.style.display = "none";

  form.appendChild(hiddenFormButton);

  hiddenFormButton.click();
  hiddenFormButton.remove();
};

export const isEmptyString = (value: string): boolean =>
  value.trim().length === 0;

/**
 * Extracts the label using the value from an object. Requires the object to have a label and value property.
 * @param value - value from object
 * @param options - list of menu items
 * @returns - label corresponding to value
 */
export const getLabelFromValue = (
  value: string,
  options: IcMenuOption[]
): string | undefined => {
  const ungroupedOptions: IcMenuOption[] = [];
  if (options.length > 0) {
    options.map((option) => {
      if (option.children) {
        option.children.map((option: IcMenuOption) =>
          ungroupedOptions.push(option)
        );
      } else {
        ungroupedOptions.push(option);
      }
    });
    return ungroupedOptions.find((option) => option.value === value)?.label;
  }

  return undefined;
};

/**
 * Filters the options based on the search string.
 * @param options - array of options
 * @param includeDescriptions - determines whether option descriptions are included when filtering options
 * @param searchString - string used to filter the options
 * @param position - whether the search string matches the start of or anywhere in the options
 * @returns filtered array of options
 */
export const getFilteredMenuOptions = (
  options: IcMenuOption[],
  includeDescriptions: boolean,
  searchString: string,
  position: IcSearchMatchPositions
): IcMenuOption[] => {
  let rawFilteredOptions;

  if (position === "anywhere") {
    rawFilteredOptions = options.filter((option) => {
      if (includeDescriptions) {
        return (
          option.label.toLowerCase().includes(searchString.toLowerCase()) ||
          option.description?.toLowerCase().includes(searchString.toLowerCase())
        );
      } else {
        return option.label.toLowerCase().includes(searchString.toLowerCase());
      }
    });
  } else {
    rawFilteredOptions = options.filter((option) => {
      if (includeDescriptions) {
        return (
          option.label.toLowerCase().startsWith(searchString.toLowerCase()) ||
          option.description
            ?.toLowerCase()
            .startsWith(searchString.toLowerCase())
        );
      } else {
        return option.label
          .toLowerCase()
          .startsWith(searchString.toLowerCase());
      }
    });
  }

  return rawFilteredOptions;
};

export const deviceSizeMatches = (size: number): boolean =>
  window.matchMedia(`(max-width: ${size}px)`).matches;

export const getCurrentDeviceSize = (): number => {
  if (deviceSizeMatches(DEVICE_SIZES.S)) {
    return DEVICE_SIZES.S;
  }
  if (deviceSizeMatches(DEVICE_SIZES.M)) {
    return DEVICE_SIZES.M;
  }
  if (deviceSizeMatches(DEVICE_SIZES.L)) {
    return DEVICE_SIZES.L;
  }
  if (deviceSizeMatches(DEVICE_SIZES.XL)) {
    return DEVICE_SIZES.XL;
  }
  //fallback needed as all of above get initialised to 0 in jest tests
  return DEVICE_SIZES.UNDEFINED;
};

export const getCssProperty = (cssVar: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVar);
};

/**
 * Returns the brightness of the theme colour, calculated by using the theme RGB CSS values by:
 * - Multiplying each RGB value by a set number: https://www.w3.org/TR/AERT/#color-contrast
 * - Adding them together and dividing by 1000
 * This is a similar calculation to its CSS counterpart: "--ic-theme-text"
 * @returns number representing the brightness of the theme colour
 */
export const getThemeColorBrightness = () => {
  const themeRed = getCssProperty("--ic-theme-primary-r");
  const themeGreen = getCssProperty("--ic-theme-primary-g");
  const themeBlue = getCssProperty("--ic-theme-primary-b");
  const themeColorBrightness =
    (parseInt(themeRed) * 299 +
      parseInt(themeGreen) * 587 +
      parseInt(themeBlue) * 114) /
    1000;
  return themeColorBrightness;
};

/**
 * Returns if dark or light foreground colors should be used for color contrast reasons
 * @returns "dark" or "light"
 */
export const getThemeForegroundColor = (): IcThemeForeground => {
  return getThemeColorBrightness() > DARK_MODE_THRESHOLD
    ? IcThemeForegroundEnum.Dark
    : IcThemeForegroundEnum.Light;
};

export const getSlot = (element: HTMLElement, name: string): Element | null => {
  if (element && element.querySelector) {
    return element.querySelector(`[slot="${name}"]`);
  }
  return null;
};

export const slotHasContent = (element: HTMLElement, name: string): boolean =>
  getSlot(element, name) !== null;

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

const getSlotElements = (slot: Element) => {
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

export const getNavItemParentDetails = (
  el: HTMLElement
): IcNavParentDetails => {
  let navType: IcNavParentDetails = { navType: "", parent: null };
  switch (getParentElementType(el)) {
    case "IC-NAVIGATION-GROUP":
      navType = getNavItemParentDetails(el.parentElement);
      break;
    case "IC-TOP-NAVIGATION":
      navType = { navType: "top", parent: getParentElement(el) };
      break;
    case "IC-SIDE-NAVIGATION":
      navType = { navType: "side", parent: getParentElement(el) };
      break;
    case "IC-PAGE-HEADER":
      navType = { navType: "page-header", parent: null };
      break;
  }
  return navType;
};

export const DEVICE_SIZES = {
  XS: Number(getCssProperty("--ic-breakpoint-xs").replace("px", "")), // 0
  S: Number(getCssProperty("--ic-breakpoint-sm").replace("px", "")), // 576
  M: Number(getCssProperty("--ic-breakpoint-md").replace("px", "")), // 768
  L: Number(getCssProperty("--ic-breakpoint-lg").replace("px", "")), // 992
  XL: Number(getCssProperty("--ic-breakpoint-xl").replace("px", "")), // 1200
  UNDEFINED: 1200,
};

export const hasValidationStatus = (
  status: IcInformationStatusOrEmpty,
  disabled: boolean
): boolean => {
  return status !== "" && !disabled;
};

export const isSlotUsed = (element: HTMLElement, slotName: string): boolean => {
  return Array.from(element.children).some(child => child.getAttribute('slot') === slotName);
};

// added as a common method to allow detection of gatsby hydration issue, where (camelCase) props are initially undefined & then update
// with a value. Allows a callback function to be executed when this is the case
export const onComponentPropUndefinedChange = (
  oldValue: string | undefined,
  newValue: string | undefined,
  callback: IcCallbackFunctionNoReturn
): void => {
  if (oldValue === undefined && newValue !== oldValue) {
    callback();
  }
};

export const onComponentRequiredPropUndefined = (
  props: IcPropObject[],
  component: string
): void => {
  for (let i = 0; i < props.length; i++) {
    const { prop, propName } = props[i];
    if (prop === null || prop === undefined) {
      console.error(
        `No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(
          propName
        )}' (react) required`
      );
    }
  }
};

export const kebabToCamelCase = (kebabCase: string): string => {
  kebabCase = kebabCase.toLowerCase();
  const individualWords: string[] = kebabCase.split("-");
  let camelCase = individualWords[0];
  for (let i = 1; i < individualWords.length; i++) {
    camelCase +=
      individualWords[i].substring(0, 1).toUpperCase() +
      individualWords[i].substring(1);
  }
  return camelCase;
};

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

const hex2dec = function (v: string) {
  return parseInt(v, 16);
};

export const hexToRgba = (hex: string): IcColorRGBA => {
  let c;
  if (hex.length === 4) {
    c = hex.replace("#", "").split("");
    return {
      r: hex2dec(c[0] + c[0]),
      g: hex2dec(c[1] + c[1]),
      b: hex2dec(c[2] + c[2]),
      a: 1,
    };
  } else {
    return {
      r: hex2dec(hex.slice(1, 3)),
      g: hex2dec(hex.slice(3, 5)),
      b: hex2dec(hex.slice(5)),
      a: 1,
    };
  }
};

export const rgbaStrToObj = (rgbaStr: string): IcColorRGBA => {
  const fourthChar = rgbaStr.slice(3, 4);
  let colorRGBA: IcColorRGBA;
  if (fourthChar.toLowerCase() === "a") {
    colorRGBA = { r: null, g: null, b: null, a: null };
    const rgba = rgbaStr
      .substring(5, rgbaStr.length - 1)
      .replace(/ /g, "")
      .split(",");
    colorRGBA.r = Number(rgba[0]);
    colorRGBA.g = Number(rgba[1]);
    colorRGBA.b = Number(rgba[2]);
    colorRGBA.a = Number(rgba[3]);
  } else {
    colorRGBA = { r: null, g: null, b: null, a: 1 };
    const rgb = rgbaStr
      .substring(4, rgbaStr.length - 1)
      .replace(/ /g, "")
      .split(",");
    colorRGBA.r = Number(rgb[0]);
    colorRGBA.g = Number(rgb[1]);
    colorRGBA.b = Number(rgb[2]);
  }

  return colorRGBA;
};

export const elementOverflowsX = (element: HTMLElement): boolean => {
  return element.scrollWidth > element.clientWidth;
};
/**
 *
 * @param child - The child element
 * @returns string
 */
export const getParentElementType = (child: HTMLElement): string =>
  child.parentElement.tagName;

export const getParentElement = (child: HTMLElement): HTMLElement =>
  child.parentElement;

export const hasClassificationBanner = (): boolean => {
  if (document.querySelector("ic-classification-banner:not([inline='true'])")) {
    return true;
  } else {
    return false;
  }
};

export const getForm = (el: HTMLElement): HTMLFormElement | null => {
  return el.closest("FORM");
};

export const addFormResetListener = (
  el: HTMLElement,
  callbackFn: IcCallbackFunctionNoReturn
) => {
  const form = getForm(el);
  if (form !== null) {
    form.addEventListener("reset", callbackFn);
  }
};

export const removeFormResetListener = (
  el: HTMLElement,
  callbackFn: IcCallbackFunctionNoReturn
) => {
  const form = getForm(el);
  if (form !== null) {
    form.removeEventListener("reset", callbackFn);
  }
};
