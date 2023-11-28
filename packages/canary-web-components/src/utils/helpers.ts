import { IcCallbackFunctionNoReturn, IcInformationStatusOrEmpty, IcPropObject, IcSearchMatchPositions, IcMenuOption } from "@ukic/web-components";

// Build does not recognise these functions being passed via @ukic/web-components so they have been added locally

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
  if (name !== undefined && (always || hasShadowDom(container))) {
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

export const isMobileOrTablet = (): boolean =>
  "maxTouchPoints" in navigator ? navigator.maxTouchPoints > 0 : false;

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

export const hasValidationStatus = (
  status: IcInformationStatusOrEmpty,
  disabled: boolean
): boolean => {
  return status !== "" && !disabled;
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

export const getForm = (el: HTMLElement): HTMLFormElement => el.closest("FORM");

export const addFormResetListener = (
  el: HTMLElement,
  callbackFn: IcCallbackFunctionNoReturn
): void => {
  const form = getForm(el);
  if (form !== null) {
    form.addEventListener("reset", callbackFn);
  }
};

export const removeFormResetListener = (
  el: HTMLElement,
  callbackFn: IcCallbackFunctionNoReturn
): void => {
  const form = getForm(el);
  if (form !== null) {
    form.removeEventListener("reset", callbackFn);
  }
};

export const removeDisabledFalse = (
  disabled: boolean,
  element: HTMLElement
): void => {
  if (!disabled) {
    element.removeAttribute("disabled");
  }
};

export const isMacDevice = (): boolean => {
  return window.navigator.userAgent.toUpperCase().indexOf("MAC") >= 0;
};
