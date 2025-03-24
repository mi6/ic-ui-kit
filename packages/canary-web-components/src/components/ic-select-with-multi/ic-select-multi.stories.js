/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import readme from "./readme.md";
import {
  Default,
  DefaultValue,
  Disabled,
  DisabledOptions,
  Groups,
  HelperText,
  HiddenLabel,
  InForm,
  LoadingWithError,
  ReadOnly,
  Recommended,
  Required,
  Sizes,
  Validation,
  WithClearButton,
  WithDescriptions,
} from "./story-data";

export default {
  title: "Web Components/Multi-Select",
  component: "ic-select-with-multi",

  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Use the multi-select component to allow users to select one or more values from a list of options.
 * There is one required prop for the multi-select:
 * - label: `string`
 *
 * Click the 'Component API' tab to view all the available props, events and slots for the multi-select.
 *
 * To use the multi-select component, import `@ukic/canary-web-components` into your application.
 *
 * The component tag name for the multi-select is `ic-select-with-multi`.
 * Even though it is a variant of the `ic-select` component (which includes the single and searchable selects), this different tag name is necessary because of the need to keep the multi-select functionality separate while it is experimental (in a canary release).
 * Note that the `multiple` prop still needs to be applied in order to enable the multi-select functionality.
 */
export const DefaultExample = {
  render: () => Default(),
  name: "Default",
};

/**
 * Show options as pre-selected by setting the `value` prop to an array containing the values of these options.
 */
export const DefaultValueExample = {
  render: () => DefaultValue(),
  name: "Default Value",
};

/**
 * Display a clear button by using the `show-clear-button` prop.
 * This will appear when the user has selected some options and allow them to easily clear their selection.
 */
export const WithClearButtonExample = {
  render: () => WithClearButton(),
  name: "With Clear Button",
};

/**
 * Display extra information about the options by providing a description using the `description` property for each option.
 */
export const WithDescriptionsExample = {
  render: () => WithDescriptions(),
  name: "With Descriptions",
};

/**
 * Display helper text to provide additional information by using the `helper-text` prop.
 */
export const HelperTextExample = {
  render: () => HelperText(),
  name: "Helper Text",
};

/**
 * Set the size of the multi-select by using the `size` prop. This prop takes the values `small`, `default` or `large`.
 * Depending on the chosen size, the prop will apply styling to increase or decrease the amount of spacing within the component.
 * The `default` variant is seen in the first [default](#default) example.
 */
export const SizesExample = {
  render: () => Sizes(),
  name: "Sizes",
};

/**
 * Disable the multi-select and prevent user interaction by using the `disabled` prop.
 */
export const DisabledExample = {
  render: () => Disabled(),
  name: "Disabled",
};

/**
 * Disable certain options by setting the `disabled` property to `true` for each option.
 */
export const DisabledOptionsExample = {
  render: () => DisabledOptions(),
  name: "Disabled Options",
};

/**
 * Hide the visible label for the multi-select by using the `hide-label` prop.
 */
export const HiddenLabelExample = {
  render: () => HiddenLabel(),
  name: "Hidden Label",
};

/**
 * Inform the user that the multi-select is a required field by using the `required` prop.
 * This will display an asterisk next to the label and apply the `aria-required` attribute.
 */
export const RequiredExample = {
  render: () => Required(),
  name: "Required",
};

/**
 * Make the multi-select read-only by using the `readonly` prop.
 * Use the `value` prop to set which options are selected and will be displayed when it is read-only.
 */
export const ReadOnlyExample = {
  render: () => ReadOnly(),
  name: "Read-only",
};

/**
 * Display options in groups by passing an array of child options to the `children` property of a parent option.
 * The parent option will be rendered as the title of the group.
 */
export const GroupsExample = {
  render: () => Groups(),
  name: "Groups",
};

/**
 * Display certain options at the top of the option list by setting the `recommended` property to `true` on each option.
 * This will allow for quick access to these options.
 */
export const RecommendedExample = {
  render: () => Recommended(),
  name: "Recommended",
};

/**
 * Display a validation status and message by using the `validation-status` and `validation-message` props.
 * The `validation-status` prop takes the values `success`, `warning` or `error`.
 */
export const ValidationExample = {
  render: () => Validation(),
  name: "Validation",
};

/**
 * Display the loading state by using the `loading` prop.
 * The multi-select will show a loading error after the amount of time specified using the `timeout` prop has elapsed.
 */
export const LoadingWithErrorExample = {
  render: () => LoadingWithError(),
  name: "Loading With Error",
};

/**
 * An example of the multi-select working in a form. The value will appear in the console on submit.
 */
export const InFormExample = {
  render: () => InForm(),
  name: "In Form",
};
