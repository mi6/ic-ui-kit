import { EventEmitter } from "@stencil/core";
import {
  IcCallbackFunctionNoReturn,
  IcInformationStatusOrEmpty,
  IcNavParentDetails,
  IcPropObject,
  IcSearchMatchPositions,
  IcColorRGBA,
  IcDeviceSizes,
  IcColor,
  IcThemeForegroundNoDefault,
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
const icInput = "ic-input";
const linkIcInput = "input.ic-input";

/**
 * converts an enum of strings into an array of strings
 */
export const stringEnumToArray = (
  theEnum: Record<string, string | number>
): string[] => {
  const arr: string[] = [];
  Object.values(theEnum).forEach((val) => {
    if (isNaN(Number(val))) {
      const str = val as string;
      arr.push(str);
    }
  });
  return arr;
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
): { [key: string]: string } => {
  const attributeObject: { [key: string]: string } = {};

  attributes.forEach((attr) => {
    if (element.hasAttribute(attr)) {
      const value = element.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = value;
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
  value: string | Date | undefined | null,
  disabled: boolean
): void => {
  if (name !== undefined && (always || hasShadowDom(container))) {
    const inputs = container.querySelectorAll(linkIcInput);
    const inputEls = Array.from(inputs);
    const filtered = inputEls.filter((el) => container === el.parentElement);

    let input = filtered[0] as HTMLInputElement;
    if (input === null || input === undefined) {
      input = container.ownerDocument.createElement("input");
      input.type = "hidden";
      input.classList.add(icInput);
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;

    if (value instanceof Date) {
      input.value = value ? value.toISOString() : null;
    } else {
      input.value = value || "";
    }
  }
};

/**
 * This method is used to add a hidden file input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param event: The event that is emitted once a file is selected.
 * @param container The element where the input will be added
 * @param multiple If true, multiple files can be selected
 * @param name The name of the input
 * @param value The value of the input
 * @param disabled If true, the input is disabled
 * @param accept A string of the accepted files
 */
export const renderFileHiddenInput = (
  event: EventEmitter,
  container: HTMLElement,
  multiple: boolean,
  name: string,
  value: FileList | undefined | null,
  disabled: boolean,
  accept: string
): void => {
  if (name !== undefined && hasShadowDom(container)) {
    const inputs = container.querySelectorAll(linkIcInput);
    const inputEls = Array.from(inputs);
    const filtered = inputEls.filter((el) => container === el.parentElement);

    let input = filtered[0] as HTMLInputElement;
    if (input === null || input === undefined) {
      input = container.ownerDocument.createElement("input");
      input.classList.add(icInput);
      container.appendChild(input);
    }
    input.type = "file";
    input.hidden = true;
    input.multiple = multiple;
    input.name = name;
    input.files = value;
    input.disabled = disabled;
    input.accept = accept;
    input.onchange = () => {
      event.emit(input.files);
    };
    input.click();
  }
};

export const removeHiddenInput = (container: HTMLElement): void => {
  const inputs = container.querySelectorAll("input.ic-input");
  const inputEls = Array.from(inputs);
  const filtered = inputEls.filter((el) => container === el.parentElement);
  const input = filtered[0] as HTMLInputElement;
  input?.remove();
};

export const hasShadowDom = (el: HTMLElement): boolean =>
  !!el.shadowRoot && !!el.attachShadow;

export const getInputHelperTextID = (id: string): string => id + "-helper-text";

export const getInputValidationTextID = (id: string): string =>
  id + "-validation-text";

export const getInputDescribedByText = (
  inputId: string,
  helperText: boolean,
  validationText: boolean
): string =>
  `${helperText ? getInputHelperTextID(inputId) : ""} ${
    validationText ? getInputValidationTextID(inputId) : ""
  }`.trim();

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

/**
 * Checks if the current device is a mobile or tablet device.
 * @returns {boolean} Returns true if the device is a mobile or tablet device, otherwise returns false.
 */
export const isMobileOrTablet = (): boolean =>
  "maxTouchPoints" in navigator && "userAgent" in navigator
    ? navigator.maxTouchPoints > 0 &&
      /iPad|iPhone|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    : false;

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
  value ? value.trim().length === 0 : true;

// A helper function that checks if a prop has been defined
export const isPropDefined = (prop: string): string | null =>
  prop !== undefined ? prop : null;

/**
 * Extracts the label using the value from an object. Requires the object to have a label and value property.
 * @param value - value from object
 * @param options - list of menu items
 * @returns - label corresponding to value
 */
export const getLabelFromValue = (
  value: string,
  options: IcMenuOption[],
  valueField = "value",
  labelField = "label"
): string | undefined => {
  const ungroupedOptions: IcMenuOption[] = [];
  if (options.length > 0 && options.map) {
    options.map((option) => {
      if (option.children) {
        option.children.map((option: IcMenuOption) =>
          ungroupedOptions.push(option)
        );
      } else {
        ungroupedOptions.push(option);
      }
    });
    const matchingValue = ungroupedOptions.find(
      (option) => option[valueField] === value
    );
    if (matchingValue !== undefined) return matchingValue[labelField];
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
  position: IcSearchMatchPositions,
  labelField = "label"
): IcMenuOption[] =>
  options.filter((option) => {
    const label: string = option[labelField].toLowerCase();
    const description = option.description?.toLowerCase();
    const lowerSearchString = searchString.toLowerCase();

    return position === "anywhere"
      ? includeDescriptions
        ? label.includes(lowerSearchString) ||
          description?.includes(lowerSearchString)
        : label.includes(lowerSearchString)
      : includeDescriptions
      ? label.startsWith(lowerSearchString) ||
        description?.startsWith(lowerSearchString)
      : label.startsWith(lowerSearchString);
  });

/**
 * Gets count of options where only group title "parent" options have been removed.
 * Disabled options are included in the count.
 * @param options - array of options
 * @returns number of options not including group titles
 */
export const getOptionsWithoutGroupTitlesCount = (
  options: IcMenuOption[]
): number => {
  const optionsWithoutGroupTitles: IcMenuOption[] = [];

  if (options.length > 0 && options.map) {
    options.map((option) => {
      if (option.children) {
        option.children.map((option) => optionsWithoutGroupTitles.push(option));
      } else {
        optionsWithoutGroupTitles.push(option);
      }
    });
  }

  return optionsWithoutGroupTitles.length;
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

export const getCssProperty = (cssVar: string): string =>
  getComputedStyle(document.documentElement).getPropertyValue(cssVar);

/**
 * Returns the brightness of the theme colour, calculated by using the theme RGB CSS values by:
 * - Multiplying each RGB value by a set number: https://www.w3.org/TR/AERT/#color-contrast
 * - Adding them together and dividing by 1000
 * This is a similar calculation to its CSS counterpart: "--ic-theme-text"
 * @returns number representing the brightness of the theme colour
 */
export const getThemeColorBrightness = (): number => {
  const themeRed = getCssProperty("--ic-theme-primary-r");
  const themeGreen = getCssProperty("--ic-theme-primary-g");
  const themeBlue = getCssProperty("--ic-theme-primary-b");
  return (
    (parseInt(themeRed) * 299 +
      parseInt(themeGreen) * 587 +
      parseInt(themeBlue) * 114) /
    1000
  );
};

/**
 * Returns if dark or light foreground colors should be used for color contrast reasons
 * @returns "dark" or "light"
 * @param brightness - Optional custom brightness value. Defaults to `getThemeColorBrightness`
 */
export const getThemeForegroundColor = (
  brightness = getThemeColorBrightness()
): IcThemeForegroundNoDefault =>
  brightness > DARK_MODE_THRESHOLD
    ? IcThemeForegroundEnum.Dark
    : IcThemeForegroundEnum.Light;

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

export const getSlotElements = (
  slot: Element
): NodeListOf<ChildNode> | Element[] => {
  const slotContent = slot.firstElementChild as HTMLSlotElement;

  if (slotContent !== null) {
    const elements = slotContent.assignedElements
      ? slotContent.assignedElements()
      : slotContent.childNodes;
    return elements.length ? elements : slot.tagName ? [slot] : null;
  } else {
    //check for single element
    return slot === null ? null : [slot];
  }
};

export const getNavItemParentDetails = ({
  parentElement,
}: HTMLElement): IcNavParentDetails => {
  let navType: IcNavParentDetails = { navType: "", parent: null };
  switch (parentElement.tagName) {
    case "IC-NAVIGATION-GROUP":
      navType = getNavItemParentDetails(parentElement);
      break;
    case "IC-TOP-NAVIGATION":
      navType = { navType: "top", parent: parentElement };
      break;
    case "IC-SIDE-NAVIGATION":
      navType = { navType: "side", parent: parentElement };
      break;
    case "IC-PAGE-HEADER":
      navType = { navType: "page-header", parent: null };
      break;
  }
  return navType;
};

export const DEVICE_SIZES = {
  XS: Number(
    getCssProperty("--ic-breakpoint-xs").replace("px", "")
  ) as IcDeviceSizes, // 0
  S: Number(
    getCssProperty("--ic-breakpoint-sm").replace("px", "")
  ) as IcDeviceSizes, // 576
  M: Number(
    getCssProperty("--ic-breakpoint-md").replace("px", "")
  ) as IcDeviceSizes, // 768
  L: Number(
    getCssProperty("--ic-breakpoint-lg").replace("px", "")
  ) as IcDeviceSizes, // 992
  XL: Number(
    getCssProperty("--ic-breakpoint-xl").replace("px", "")
  ) as IcDeviceSizes, // 1200
  UNDEFINED: 1200,
};

export const hasValidationStatus = (
  status: IcInformationStatusOrEmpty,
  disabled: boolean
): boolean => !!status && !disabled;

export const isSlotUsed = (
  { children }: HTMLElement,
  slotName: string
): boolean =>
  Array.from(children).some((child) => child.getAttribute("slot") === slotName);

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
  props.forEach(({ prop, propName }) => {
    if (prop === null || prop === undefined) {
      console.error(
        `No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(
          propName
        )}' (react) required`
      );
    }
  });
};

export const kebabToCamelCase = (kebabCase: string): string =>
  kebabCase
    .toLowerCase()
    .split("-")
    .map((word, index) =>
      index === 0
        ? word
        : `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`
    )
    .join("");

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

const hex2dec = (v: string) => parseInt(v, 16);

export const hexToRgba = (hex: string): IcColorRGBA => {
  const hexChars = hex
    .replace("#", "")
    .split("")
    .map((char) => char.repeat(2));
  return {
    r: hex2dec(hex.length === 4 ? hexChars[0] : hex.slice(1, 3)),
    g: hex2dec(hex.length === 4 ? hexChars[1] : hex.slice(3, 5)),
    b: hex2dec(hex.length === 4 ? hexChars[2] : hex.slice(5)),
    a: 1,
  };
};

export const rgbaStrToObj = (rgbaStr: string): IcColorRGBA => {
  const isRGBA = rgbaStr.slice(3, 4).toLowerCase() === "a";
  const rgbValues = rgbaStr
    .substring(isRGBA ? 5 : 4, rgbaStr.length - 1)
    .replace(/ /g, "")
    .split(",")
    .map(Number);
  return {
    r: rgbValues[0],
    g: rgbValues[1],
    b: rgbValues[2],
    a: isRGBA ? rgbValues[3] : 1,
  };
};

export const elementOverflowsX = ({
  scrollWidth,
  clientWidth,
}: HTMLElement): boolean => scrollWidth > clientWidth;

export const hasClassificationBanner = (): boolean =>
  !!document.querySelector("ic-classification-banner:not([inline='true'])");

export const addFormResetListener = (
  el: HTMLElement,
  callbackFn: IcCallbackFunctionNoReturn
): void => {
  el.closest("FORM")?.addEventListener("reset", callbackFn);
};

export const removeFormResetListener = (
  el: HTMLElement,
  callbackFn: IcCallbackFunctionNoReturn
): void => {
  el.closest("FORM")?.removeEventListener("reset", callbackFn);
};

export const pxToRem = (px: string, base = 16): string =>
  `${(1 / base) * parseInt(px)}rem`;

export const removeDisabledFalse = (
  disabled: boolean,
  element: HTMLElement
): void => {
  if (!disabled) {
    element.removeAttribute("disabled");
  }
};

export const isMacDevice = (): boolean =>
  window.navigator.userAgent.toUpperCase().indexOf("MAC") >= 0;

export const isNumeric = (value: string): boolean => /^-?\d+$/.test(value);

export async function waitForHydration(): Promise<boolean> {
  const elements = document.getElementsByTagName("*");

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].tagName.startsWith("IC-")) {
      if (elements[i].classList.contains("hydrated")) {
        return true;
      }
    } else {
      return false;
    }
  }

  return false;
}

export const convertToRGBA = (color: IcColor): IcColorRGBA | null => {
  const firstChar = color?.slice(0, 1).toLowerCase();
  return firstChar === "#"
    ? hexToRgba(color)
    : firstChar === "r"
    ? rgbaStrToObj(color)
    : null;
};

export const capitalize = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const checkSlotInChildMutations = (
  addedNodes: NodeList,
  removedNodes: NodeList,
  slotName: string | string[]
): boolean => {
  const hasSlot = (nodeList: NodeList) =>
    Array.from(nodeList).some((node) =>
      Array.isArray(slotName)
        ? slotName.some((name) => (node as Element).slot === name)
        : (node as Element).slot === slotName
    );
  return hasSlot(addedNodes) || hasSlot(removedNodes);
};

export const isElInAGGrid = (el: HTMLElement): boolean =>
  !!el.closest(".ag-cell") && !!el.closest(".ag-root");
