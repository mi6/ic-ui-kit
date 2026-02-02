/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable sonarjs/no-duplicate-string */
import React, { useRef, useState } from "react";

import { IcLink, IcSelect, IcTypography } from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

const defaultArgs = {
  disabled: false,
  fullWidth: false,
  helperText: "Select some options from the list",
  hideLabel: false,
  loading: false,
  loadingLabel: "Loading...",
  label: "What are your favourite types of coffee?",
  placeholder: "Select an option",
  readonly: false,
  required: false,
  size: "medium",
  validationAriaLive: "polite",
  validationStatus: "no status",
  validationText: "",
  showClearButton: false,
  theme: "inherit",
};

const options = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame" },
  { label: "Filter", value: "Fil" },
  { label: "Flat white", value: "Fla" },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
];

const optionsWithCustomElements = [
  {
    label: "Cappuccino",
    value: "Cap",
  },
  {
    label: "Latte",
    value: "Lat",
    element: {
      component: `<ic-status-tag label="Neutral status"></ic-status-tag>`,
      ariaLabel: "Neutral status tag",
    },
  },
  {
    label: "Americano",
    value: "Ame",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><g><path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>`,
  },
  { label: "Filter", value: "Fil" },
  { label: "Flat white", value: "Fla" },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
];

const optionsWithDisabled = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat", disabled: true },
  { label: "Americano", value: "Ame" },
  { label: "Filter", value: "Fil", disabled: true },
  { label: "Flat white", value: "Fla", disabled: true },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
];

const optionsWithDescriptions = [
  {
    label: "Cappuccino",
    value: "Cap",
    description: "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
  },
  {
    label: "Latte",
    value: "Lat",
    description: "A milkier coffee than a cappuccino",
  },
  {
    label: "Americano",
    value: "Ame",
    description: "Espresso coffee diluted with hot water",
  },
  {
    label: "Filter",
    value: "Fil",
    description: "Coffee filtered using paper or a mesh",
  },
  {
    label: "Flat white",
    value: "Fla",
    description: "Coffee without froth made with espresso and hot steamed milk",
  },
  {
    label: "Mocha",
    value: "Moc",
    description: "A mixture of coffee and chocolate",
  },
  {
    label: "Macchiato",
    value: "Mac",
    description: "Espresso coffee with a dash of frothy steamed milk",
  },
];

const groupedOptions = [
  {
    label: "Fancy",
    children: [
      { label: "Cappuccino", value: "Cap" },
      { label: "Flat white", value: "Fla" },
    ],
  },
  {
    label: "Boring",
    children: [
      { label: "Filter", value: "Fil" },
      { label: "Latte", value: "Lat" },
    ],
  },
];

const optionsWithRecommended = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame", recommended: true },
  { label: "Filter", value: "Fil" },
  { label: "Flat white", value: "Fla", recommended: true },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
];

const manyOptions = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame" },
  { label: "Filter", value: "Fil" },
  { label: "Flat white", value: "Fla" },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
  { label: "Café au lait", value: "Caf" },
  { label: "Espresso", value: "Esp" },
  { label: "Cortado", value: "Cor" },
  { label: "Ristretto", value: "Ris" },
  { label: "Latte macchiato", value: "Lam" },
];

const playgroundOptions = [
  {
    label: "Cappuccino",
    value: "Cap",
    description: "An espresso-based drink traditionally composed of equal parts espresso, steamed milk, and milk foam, creating a balanced flavor and velvety texture",
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

const LoadingWithError = () => {
  const selectEl = useRef();
  return (
    <IcSelect
      ref={selectEl}
      label="What are your favourite types of coffee?"
      options={options}
      multiple
      loading
      timeout="1000"
      onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      onIcRetryLoad={() => (selectEl.current.loading = true)}
    />
  );
};

const ControlledExample = () => {
  const [value, setValue] = useState(["Cap"]);
  const handleChange = (event) => {
    console.log(event.detail.value);
    setValue(event.detail.value);
  };
  return (
    <IcSelect
      placeholder="Controlled"
      label="Controlled"
      options={options}
      multiple
      value={value}
      onIcChange={handleChange}
    />
  );
};

const Uncontrolled = () => {
  const selectEl = useRef();
  const handleChange = () => {
    console.log(selectEl.current.value);
  };
  return (
    <>
      <IcSelect
        ref={selectEl}
        placeholder="Uncontrolled"
        label="Uncontrolled"
        options={options}
        multiple
        onIcChange={handleChange}
      />
    </>
  );
};

export default {
  title: "Select/Multi",
  component: IcSelect,
};

export const Default = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={options}
        multiple
        onIcClear={() => console.log("clear all clicked")}
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        onIcOptionSelect={(event) =>
          console.log(`icOptionSelect: ${event.detail.value}`)
        }
        onIcOptionDeselect={(event) =>
          console.log(`icOptionDeselect: ${event.detail.value}`)
        }
        onIcOpen={() => console.log("select dropdown opened")}
        onIcClose={() => console.log("select dropdown closed")}
      />
    );
  },

  name: "Default",
};

export const DefaultValue = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={options}
        multiple
        value={["Ame", "Fil", "Moc"]}
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Default value",
};

export const WithClearButton = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={options}
        multiple
        showClearButton
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "With clear button",
};

export const WithDescriptions = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={optionsWithDescriptions}
        multiple
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "With descriptions",
};

export const HelperText = {
  render: () => {
    return (
      <>
        <IcSelect
          label="What are your favourite types of coffee?"
          options={options}
          multiple
          helperText="Select some options from the list"
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <br />
        <IcSelect
          label="What are your favourite types of coffee?"
          options={options}
          multiple
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        >
          <IcTypography variant="caption" slot="helper-text">
            <span>
              Slotted helper text with a <IcLink href="#">link</IcLink>
            </span>
          </IcTypography>
        </IcSelect>
      </>
    );
  },

  name: "Helper text",
};

export const CustomPlaceholder = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={options}
        multiple
        placeholder="Placeholder goes here"
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Custom placeholder",
};

export const CustomElements = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={optionsWithCustomElements}
        multiple
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Custom elements",
};

export const Sizes = {
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <IcSelect
          label="What are your favourite types of coffee?"
          options={options}
          multiple
          size="small"
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <IcSelect
          label="What are your favourite types of coffee?"
          options={options}
          multiple
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <IcSelect
          label="What are your favourite types of coffee?"
          options={options}
          multiple
          size="large"
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
      </div>
    );
  },

  name: "Sizes",
};

export const Disabled = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={options}
        multiple
        disabled
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Disabled",
};

export const DisabledOptions = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={optionsWithDisabled}
        multiple
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Disabled options",
};

export const FullWidth = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={options}
        multiple
        fullWidth
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Full width",
};

export const HiddenLabel = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={options}
        multiple
        hideLabel
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Hidden label",
};

export const Required = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={options}
        multiple
        required
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Required",
};

export const ReadOnly = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={options}
        multiple
        readonly
        value={["Cap", "Fla", "Moc"]}
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Read-only",
};

export const Groups = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={groupedOptions}
        multiple
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Groups",
};

export const Recommended = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={optionsWithRecommended}
        multiple
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Recommended",
};

export const Validation = {
  render: () => {
    return (
      <div>
        <IcSelect
          label="What are your favourite types of coffee?"
          validationStatus="success"
          validationText="Coffee available"
          options={options}
          multiple
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <IcSelect
          label="What are your favourite types of coffee?"
          validationStatus="warning"
          validationText="Only a few left"
          options={options}
          multiple
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <IcSelect
          label="What are your favourite types of coffee?"
          validationStatus="error"
          validationText="Coffee unavailable"
          options={options}
          multiple
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
      </div>
    );
  },

  name: "Validation",
};

export const ScrollBehaviour = {
  render: () => {
    return (
      <IcSelect
        label="What are your favourite types of coffee?"
        options={manyOptions}
        multiple
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Scroll behaviour",
};

export const LoadingWithError_ = {
  render: () => <LoadingWithError />,
  name: "Loading with error",
};

export const Controlled = {
  render: () => <ControlledExample />,
  name: "Controlled",
};

export const Uncontrolled_ = {
  render: () => <Uncontrolled />,
  name: "Uncontrolled",
};

export const Playground = {
  render: (args) => (
    <IcSelect
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
      showClearButton={args.showClearButton}
      size={args.size}
      validationAriaLive={args.validationAriaLive}
      validationStatus={args.validationStatus === "no status" ? "" : args.validationStatus}
      validationText={args.validationText}
      theme={args.theme}
    >
      {args.showIcon && (
        <SlottedSVG
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
        </SlottedSVG>
      )}
    </IcSelect>
  ),

  name: "Playground",
  args: defaultArgs,

  argTypes: {
    size: {
      options: ["medium", "large", "small"],

      control: {
        type: "inline-radio",
      },
    },

    validationAriaLive: {
      options: ["polite", "assertive", "off"],

      control: {
        type: "inline-radio",
      },
    },

    validationStatus: {
      defaultValue: "no status",
      options: ["no status", "error", "success", "warning"],

      control: {
        type: "select",
      },
    },

    showIcon: {
      control: {
        type: "boolean",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },
};
