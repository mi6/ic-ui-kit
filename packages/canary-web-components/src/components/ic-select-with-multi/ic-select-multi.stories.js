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

const defaultArgs = {
  disabled: false,
  ["full-width"]: false,
  ["helper-text"]: "Select some options from the list",
  ["hide-label"]: false,
  loading: false,
  loadingLabel: "Loading...",
  label: "What are your favourite types of coffee?",
  placeholder: "Select an option",
  readonly: false,
  required: false,
  size: "default",
  ["validation-status"]: "none",
  ["validation-text"]: "",
  ["show-clear-button"]: false,
};

export default {
  title: "Web Components/Multi-Select",
  component: "ic-select-with-multi",

  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

export const DefaultExample = {
  render: () => Default(),
  name: "Default",
};

export const DefaultValueExample = {
  render: () => DefaultValue(),
  name: "Default Value",
};

export const WithClearButtonExample = {
  render: () => WithClearButton(),
  name: "With Clear Button",
};

export const WithDescriptionsExample = {
  render: () => WithDescriptions(),
  name: "With Descriptions",
};

export const HelperTextExample = {
  render: () => HelperText(),
  name: "Helper Text",
};

export const SizesExample = {
  render: () => Sizes(),
  name: "Sizes",
};

export const DisabledExample = {
  render: () => Disabled(),
  name: "Disabled",
};

export const DisabledOptionsExample = {
  render: () => DisabledOptions(),
  name: "Disabled Options",
};

export const HiddenLabelExample = {
  render: () => HiddenLabel(),
  name: "Hidden Label",
};

export const RequiredExample = {
  render: () => Required(),
  name: "Required",
};

export const ReadOnlyExample = {
  render: () => ReadOnly(),
  name: "Read-only",
};

export const GroupsExample = {
  render: () => Groups(),
  name: "Groups",
};

export const RecommendedExample = {
  render: () => Recommended(),
  name: "Recommended",
};

export const ValidationExample = {
  render: () => Validation(),
  name: "Validation",
};

export const LoadingWithErrorExample = {
  render: () => LoadingWithError(),
  name: "Loading With Error",
};

export const InFormExample = {
  render: () => InForm(),
  name: "In Form",
};
