/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
import React, { useRef } from "react";
import readme from "../../../canary-web-components/src/components/ic-select-with-multi/readme.md";
import {
  GROUPED_OPTIONS,
  OPTIONS,
  OPTIONS_WITH_DESCRIPTIONS,
  OPTIONS_WITH_DISABLED,
  OPTIONS_WITH_RECOMMENDED,
} from "../../../canary-web-components/src/components/ic-select-with-multi/story-data";
import { IcSelectWithMulti } from "../components";

const LoadingWithError = () => {
  const selectEl = useRef();
  return (
    <IcSelectWithMulti
      ref={selectEl}
      label="What are your favourite types of coffee?"
      options={OPTIONS}
      multiple
      loading
      timeout="1000"
      onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      onIcRetryLoad={() => (selectEl.current.loading = true)}
    />
  );
};

const playgroundOptions = [
  {
    label: "Cappuccino",
    value: "Cap",
    description: "Coffee frothed up with pressurised steam",
  },
  {
    label: "Boring",
    children: [
      {
        label: "Latte",
        value: "Lat",
        description: "A milkier coffee than a cappuccino",
      },
      {
        label: "Filter",
        value: "Fil",
        description: "Coffee filtered using paper or a mesh",
      },
    ],
  },
  {
    label: "Fancy",
    children: [
      {
        label: "Flat white",
        value: "Fla",
        description:
          "Coffee without froth made with espresso and hot steamed milk",
      },
      {
        label: "Macchiato",
        value: "Mac",
        description: "Espresso coffee with a dash of frothy steamed milk",
      },
    ],
  },
  {
    label: "Americano",
    value: "Ame",
    description: "Espresso coffee diluted with hot water",
  },
  {
    label: "Mocha",
    value: "Moc",
    description: "A mixture of coffee and chocolate",
  },
];

const defaultArgs = {
  disabled: false,
  fullWidth: false,
  helperText: "Select some options from the list",
  hideLabel: false,
  loading: false,
  loadingLabel: "Loading...",
  label: "What is your favourite coffee?",
  placeholder: "Select an option",
  readonly: false,
  required: false,
  size: "default",
  validationStatus: "",
  validationText: "",
  showClearButton: false,
};

export default {
  title: "React Components/Multi-Select",
  component: IcSelectWithMulti,

  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Use the multi-select component to allow users to select one or more values from a list of options.
 * 
 * There is one required prop for the multi-select:
 * - label: `string`
 * 
 * Click the 'Component API' tab to view all the available props, events and slots for the multi-select.
 * 
 * To use the multi-select component, import `@ukic/canary-react` into your application.
 * 
 * The component tag name for the multi-select is `IcSelectWithMulti`. Even though it is a variant of the `IcSelect` component (which includes the single and searchable selects), this different tag name is necessary because of the need to keep the multi-select functionality separate while it is experimental (in a canary release).
 * Note that the `multiple` prop still needs to be applied in order to enable the multi-select functionality.
 */
export const Default = {
  render: () => (
    <div
      style={{
        height: "430px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        onIcOptionSelect={(event) =>
          console.log(`icOptionSelect: ${event.detail.value}`)
        }
        onIcOptionDeselect={(event) =>
          console.log(`icOptionDeselect: ${event.detail.value}`)
        }
      />
    </div>
  ),

  name: "Default",
};

/**
 * Show options as pre-selected by setting the `value` prop to an array containing the values of these options.
 */
export const DefaultValue = {
  render: () => (
    <div
      style={{
        height: "430px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        value={["Ame", "Fil", "Moc"]}
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "Default Value",
};

/**
 * Display a clear button by using the `showClearButton` prop.
 * This will appear when the user has selected some options and allow them to easily clear their selection.
 */
export const WithClearButton = {
  render: () => (
    <div
      style={{
        height: "430px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        showClearButton
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "With Clear Button",
};

/**
 * Display extra information about the options by providing a description using the `description` property for each option.
 */
export const WithDescriptions = {
  render: () => (
    <div
      style={{
        height: "470px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS_WITH_DESCRIPTIONS}
        multiple
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "With Descriptions",
};

/**
 * Display helper text to provide additional information by using the `helperText` prop.
 */
export const HelperText = {
  render: () => (
    <div
      style={{
        height: "450px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        helperText="Select some options from the list"
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "Helper Text",
};

/**
 * Set the size of the multi-select by using the `size` prop. This prop takes the values `small`, `default` or `large`.
 * Depending on the chosen size, the prop will apply styling to increase or decrease the amount of spacing within the component.
 * The `default` variant is seen in the first [default](#default) example.
 */
export const Sizes = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "650px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        size="small"
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        size="large"
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "Sizes",
};

/**
 * Disable the multi-select and prevent user interaction by using the `disabled` prop.
 */
export const Disabled = {
  render: () => (
    <div
      style={{
        height: "200px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        disabled
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "Disabled",
};

/**
 * Disable certain options by setting the `disabled` property to `true` for each option.
 */
export const DisabledOptions = {
  render: () => (
    <div
      style={{
        height: "430px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS_WITH_DISABLED}
        multiple
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "Disabled Options",
};

/**
 * Hide the visible label for the multi-select by using the `hideLabel` prop.
 */
export const HiddenLabel = {
  render: () => (
    <div
      style={{
        height: "400px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        hideLabel
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "Hidden label",
};

/**
 * Inform the user that the multi-select is a required field by using the `required` prop.
 * This will display an asterisk next to the label and apply the `aria-required` attribute.
 */
export const Required = {
  render: () => (
    <div
      style={{
        height: "430px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        required
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "Required",
};

/**
 * Make the multi-select read-only by using the `readonly` prop.
 * Use the `value` prop to set which options are selected and will be displayed when it is read-only.
 */
export const ReadOnly = {
  render: () => (
    <div
      style={{
        height: "200px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        readonly
        value={["Cap", "Fla", "Moc"]}
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "Read-only",
};

/**
 * Display options in groups by passing an array of child options to the `children` property of a parent option.
 * The parent option will be rendered as the title of the group.
 */
export const Groups = {
  render: () => (
    <div
      style={{
        height: "430px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={GROUPED_OPTIONS}
        multiple
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "Groups",
};

/**
 * Display certain options at the top of the option list by setting the `recommended` property to `true` on each option. This will allow for quick access to these options.
 */
export const Recommended = {
  render: () => (
    <div
      style={{
        height: "430px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS_WITH_RECOMMENDED}
        multiple
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "Recommended",
};

/**
 * Display a validation status and message by using the `validationStatus` and `validationMessage` props.
 * The `validationStatus` prop takes the values `success`, `warning` or `error`.
 */
export const Validation = {
  render: () => (
    <div
      style={{
        height: "640px",
      }}
    >
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        validationStatus="success"
        validationText="Coffee available"
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        validationStatus="warning"
        validationText="Only a few left"
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
      <IcSelectWithMulti
        label="What are your favourite types of coffee?"
        options={OPTIONS}
        multiple
        validationStatus="error"
        validationText="Coffee unavailable"
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    </div>
  ),

  name: "Validation",
};

/**
 * Display the loading state by using the `loading` prop.
 * The multi-select will show a loading error after the amount of time specified using the `timeout` prop has elapsed.
 */
export const LoadingWithError_ = {
  render: () => (
    <div
      style={{
        height: "430px",
      }}
    >
      <LoadingWithError />
    </div>
  ),

  name: "Loading With Error",
};

/**
 * Go to the <ic-link href="/?path=/story/react-components-multi-select--playground-example">separate page for the playground example</ic-link> to view the prop controls.
 */
export const PlaygroundExample = {
  render: (args) => (
    <div
      style={{
        height: "500px",
      }}
    >
      <IcSelectWithMulti
        multiple
        options={playgroundOptions}
        disabled={args.disabled}
        fullWidth={args.fullWidth}
        helperText={args.helperText}
        hideLabel={args.hideLabel}
        loading={args.loading}
        loadingLabel={args.loadingLabel}
        label={args.label}
        placeholder={args.placeholder}
        readonly={args.readonly}
        required={args.required}
        size={args.size}
        validationStatus={args.validationStatus}
        validationText={args.validationText}
        showClearButton={args.showClearButton}
      />
    </div>
  ),

  name: "Playground Example",
  args: defaultArgs,

  argTypes: {
    size: {
      options: ["default", "large", "small"],

      control: {
        type: "inline-radio",
      },
    },

    validationStatus: {
      defaultValue: "",
      options: ["", "error", "success", "warning"],

      control: {
        type: "select",
      },
    },
  },
};
