import { EventEmitter, forceUpdate } from "@stencil/core";
import {
  IcCallbackFunctionNoReturn,
  IcInformationStatusOrEmpty,
  IcNavParentDetails,
  IcPropObject,
  IcSearchMatchPositions,
  IcColorRGBA,
  IcDeviceSizes,
  IcColor,
  IcBrandForegroundNoDefault,
  IcThemeMode,
} from "./types";

import {
  IcMenuOption,
  IcBrandForeground,
  IcBrandForegroundEnum,
} from "../utils/types";
import {
  IC_BLOCK_COLOR_COMPONENTS,
  IC_BLOCK_COLOR_EXCEPTIONS,
  IC_FIXED_COLOR_COMPONENTS,
} from "./constants";

const DARK_MODE_THRESHOLD = 133.3505;
const ANYWHERE_SEARCH_POSITION = "anywhere";
const icInput = "ic-input";

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
    const value = element.getAttribute(attr);
    if (value !== null) {
      attributeObject[attr] = value;
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
 * @param container The element where the input will be added
 * @param value The value of the input
 * @param name The name of the input
 * @param disabled If true, the input is disabled
 * @param always Add a hidden input even if the container does not use Shadow
 */
export const renderHiddenInput = (
  container: HTMLElement,
  value?: string | Date | null,
  name?: string,
  disabled = false,
  always = true
): void => {
  if (name && (always || hasShadowDom(container))) {
    let input = getHiddenInputElement(container);

    if (!input) {
      input = container.ownerDocument.createElement("input");
      input.type = "hidden";
      input.classList.add(icInput);
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;
    input.value = value instanceof Date ? value.toISOString() : value || "";
  }
};

const getHiddenInputElement = (container: HTMLElement) =>
  Array.from(
    container.querySelectorAll<HTMLInputElement>(`input.${icInput}`)
  ).filter((el) => container === el.parentElement)[0];

/**
 * This method is used to add a hidden file input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param event: The event that is emitted once a file is selected.
 * @param container The element where the input will be added
 * @param multiple If true, multiple files can be selected
 * @param disabled If true, the input is disabled
 * @param accept A string of the accepted files
 * @param name The name of the input
 * @param value The value of the input
 */
export const renderFileHiddenInput = (
  event: EventEmitter,
  container: HTMLElement,
  multiple: boolean,
  disabled: boolean,
  accept?: string,
  name?: string,
  value?: FileList
): void => {
  if (name !== undefined && hasShadowDom(container)) {
    let input = getHiddenInputElement(container);

    if (input === null || input === undefined) {
      input = container.ownerDocument.createElement("input");
      input.classList.add(icInput);
      container.appendChild(input);
    }
    input.type = "file";
    input.hidden = true;
    input.multiple = multiple;
    input.name = name;
    input.disabled = disabled;

    if (value) input.files = value;
    if (accept) input.accept = accept;

    input.onchange = () => {
      event.emit(input.files);
    };
    input.click();
  }
};

export const removeHiddenInput = (container: HTMLElement): void => {
  getHiddenInputElement(container)?.remove();
};

export const hasShadowDom = (el: HTMLElement | null | undefined): boolean =>
  !!el && !!el.shadowRoot && !!el.attachShadow;

export const getInputHelperTextID = (id: string): string => id + "-helper-text";

export const getInputValidationTextID = (id: string): string =>
  id + "-validation-text";

export const getInputDescribedByText = (
  el: HTMLElement,
  inputId: string,
  helperText: boolean,
  validationText: boolean
): string =>
  `${
    isSlotUsed(el, "helper-text") || helperText
      ? getInputHelperTextID(inputId)
      : ""
  } ${validationText ? getInputValidationTextID(inputId) : ""}`.trim();

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
 * @returns IcBrandForeground depending on the context
 */
export const getBrandFromContext = (
  el: Element,
  brandFromEvent: IcBrandForeground | null = null
): IcBrandForeground => {
  const parentElement =
    el.parentElement || (<ShadowRoot>el.getRootNode()).host.parentElement;
  const blockColorParent = parentElement?.closest(IC_BLOCK_COLOR_COMPONENTS);

  if (!blockColorParent) return IcBrandForegroundEnum.Default;

  const parentTag = blockColorParent.tagName.toLowerCase();

  if (
    IC_BLOCK_COLOR_EXCEPTIONS[parentTag]?.includes(el.tagName.toLowerCase())
  ) {
    return IcBrandForegroundEnum.Default;
  } else if (
    brandFromEvent !== null &&
    !IC_FIXED_COLOR_COMPONENTS.includes(parentTag)
  ) {
    return brandFromEvent;
  } else if (
    blockColorParent.classList.contains(
      `${parentTag}-${IcBrandForegroundEnum.Dark}`
    ) ||
    blockColorParent.classList.contains(IcBrandForegroundEnum.Dark)
  ) {
    return IcBrandForegroundEnum.Dark;
  } else {
    return IcBrandForegroundEnum.Light;
  }
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
 * Will create a button within the lightDOM which interacts with the form.
 * This is required as buttons within the shadowDOM will not invoke a submit or reset
 *
 * @param form - form element to associate button with
 * @param button - shadowDOM button
 */
export const handleHiddenFormButtonClick = (
  form: HTMLFormElement | null,
  button: HTMLIcButtonElement
): void => {
  const hiddenFormButtonId =
    button.type === "submit" || button.type === "reset"
      ? `hidden-form-${button.type}-button`
      : "hidden-form-button";

  const hiddenFormButton =
    document.querySelector<HTMLButtonElement>(`#${hiddenFormButtonId}`) ??
    document.createElement("button");

  hiddenFormButton.setAttribute("type", button.type ?? "button");
  hiddenFormButton.id = hiddenFormButtonId;
  hiddenFormButton.style.display = "none";

  hiddenFormButton.formAction = button.formaction ?? "";
  hiddenFormButton.formEnctype = button.formenctype ?? "";
  hiddenFormButton.formMethod = button.formmethod ?? "";
  hiddenFormButton.formNoValidate = button.formnovalidate ?? false;
  hiddenFormButton.formTarget = button.formtarget ?? "";

  form?.appendChild(hiddenFormButton);
  hiddenFormButton.click();
};

export const isEmptyString = (value?: string): boolean =>
  !value || value.trim().length === 0;

// A helper function that checks if a prop has been defined
export const isPropDefined = (prop?: string): string | undefined =>
  prop !== undefined ? prop : undefined;

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
  position: IcSearchMatchPositions = ANYWHERE_SEARCH_POSITION,
  labelField = "label"
): IcMenuOption[] =>
  options.filter((option) => {
    const label: string = option[labelField].toLowerCase();
    const description = option.description?.toLowerCase();
    const lowerSearchString = searchString.toLowerCase();

    return position === ANYWHERE_SEARCH_POSITION
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
 * This is a similar calculation to its CSS counterpart: "--ic-brand-text-color"
 * @returns number representing the brightness of the theme colour
 */
export const getBrandColorBrightness = (): number =>
  (parseInt(getCssProperty("--ic-brand-color-primary-r")) * 299 +
    parseInt(getCssProperty("--ic-brand-color-primary-g")) * 587 +
    parseInt(getCssProperty("--ic-brand-color-primary-b")) * 114) /
  1000;

/**
 * Returns if dark or light foreground colors should be used for color contrast reasons
 * @returns "dark" or "light"
 * @param brightness - Optional custom brightness value. Defaults to `getBrandColorBrightness`
 */
export const getBrandForegroundAppearance = (
  brightness = getBrandColorBrightness()
): IcBrandForegroundNoDefault =>
  brightness > DARK_MODE_THRESHOLD
    ? IcBrandForegroundEnum.Dark
    : IcBrandForegroundEnum.Light;

export const getSlot = (
  element: HTMLElement | undefined,
  name: string
): Element | null => element?.querySelector(`[slot="${name}"]`) || null;

export const slotHasContent = (element: HTMLElement, name: string): boolean =>
  getSlot(element, name) !== null;

export const getSlotContent = (
  element: HTMLElement,
  name: string
): Element[] | NodeListOf<ChildNode> | null => {
  const slot = getSlot(element, name);
  return slot ? getSlotElements(slot) : null;
};

export const getSlotElements = (
  slot: Element
): NodeListOf<ChildNode> | Element[] | null => {
  const slotContent = slot.firstElementChild as HTMLSlotElement;

  if (slotContent === null) return [slot];

  const elements = slotContent.assignedElements
    ? slotContent.assignedElements()
    : slotContent.childNodes;
  return elements.length ? elements : slot.tagName ? [slot] : null;
};

export const getNavItemParentDetails = ({
  parentElement,
}: HTMLElement): IcNavParentDetails => {
  let navType: IcNavParentDetails = { navType: "", parent: null };
  if (parentElement) {
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
  status?: IcInformationStatusOrEmpty,
  disabled?: boolean
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

/**
 * Removes the disabled attribute from the provided element when its value is set to false.
 * This effectively makes it null, to not confuse screen readers that cannot interpret the false value
 */
export const removeDisabledFalse = (
  disabled: boolean | undefined,
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

  if (firstChar !== "#" && firstChar !== "r") return null;
  return firstChar === "#" ? hexToRgba(color) : rgbaStrToObj(color);
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

/**
 * Checks if the component is slotted in its relevant 'group' component
 * @param component - the component to check
 */
export const isSlottedInGroup = (component: HTMLElement): boolean =>
  component.parentElement?.tagName === `${component.tagName}-GROUP`;

export const hasDynamicChildSlots = (
  mutationList: MutationRecord[],
  slotNames: string | string[]
): boolean =>
  mutationList.some(
    ({ type, addedNodes, removedNodes }) =>
      type === "childList" &&
      checkSlotInChildMutations(addedNodes, removedNodes, slotNames)
  );

export const renderDynamicChildSlots = (
  mutationList: MutationRecord[],
  slotNames: string | string[],
  ref: any
): void => {
  if (hasDynamicChildSlots(mutationList, slotNames)) {
    forceUpdate(ref);
  }
};

export const getElementInheritedTheme = (el: HTMLElement): IcThemeMode => {
  const blockParentTheme =
    el.parentElement?.closest<HTMLIcTopNavigationElement>(
      IC_BLOCK_COLOR_COMPONENTS
    )?.theme;

  if (blockParentTheme && blockParentTheme !== "inherit")
    return blockParentTheme;

  const wrapperTheme = el.parentElement?.closest("ic-theme")?.theme;

  if (wrapperTheme && wrapperTheme !== "system") return wrapperTheme;

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const isSafari =
  /safari/i.test(window.navigator.userAgent) &&
  !/Edge/i.test(window.navigator.userAgent) &&
  !/chrome/i.test(window.navigator.userAgent);
