/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable sonarjs/no-duplicate-string */
import React, { useRef, useState } from "react";

import { IcButton, IcLink, IcSelect, IcTypography } from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

const defaultArgs = {
  disabled: false,
  fullWidth: false,
  helperText: "Select one option from the list",
  hideLabel: false,
  loading: false,
  loadingLabel: "Loading...",
  label: "What is your favourite coffee?",
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
];

const optionsInFrench = [
  { label: "Chocolat Chaud", value: "choc" },
  { label: "Jus", value: "jus" },
  { label: "Limonade", value: "lim" },
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
      component: `<ic-status-tag label="Success status" status="success"></ic-status-tag>`,
      ariaLabel: "Success status tag",
    },
  },
  {
    label: "Americano",
    value: "Ame",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><g><path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>`,
  },
];

const optionsWithHiddenLabels = [
  {
    label: "Small",
    value: "s",
    element: {
      component: `<ic-chip label="Small" size="small"></ic-chip>`,
      ariaLabel: "small chip",
    },
    hideLabel: true,
  },
  {
    label: "Medium size",
    value: "m",
    element: {
      component: `<ic-chip label="Medium"></ic-chip>`,
      ariaLabel: "medium chip",
    },
    hideLabel: true,
  },
  {
    label: "Large",
    value: "l",
    element: {
      component: `<ic-chip label="Large" size="large"></ic-chip>`,
      ariaLabel: "large chip",
    },
    hideLabel: true,
  },
  {
    label: "Extra Large",
    value: "xl",
  },
];

const optionsWithDisabled = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat", disabled: true },
  { label: "Americano", value: "Ame" },
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
];

const groupedOptions = [
  {
    label: "Fancy",
    children: [
      { label: "Cappuccino", value: "Cap" },
      { label: "Flat white", value: "Fla" },
      {
        label: "Macchiato",
        value: "Mac",
      },
    ],
  },
  {
    label: "Boring",
    children: [
      { label: "Filter", value: "Fil" },
      { label: "Latte", value: "Lat" },
      {
        label: "Americano",
        value: "Ame",
      },
    ],
  },
];

const optionsWithRecommended = [
  { label: "Cappuccino", value: "Cappuccino" },
  { label: "Flat white", value: "Flat white", recommended: true },
  { label: "Latte", value: "Latte" },
  { label: "Americano", value: "Americano", recommended: true },
  { label: "Filter", value: "Fil" },
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

const optionsWithLangProps = [
  { label: "Flat White", value: "Fla", htmlProps: { lang: "en-GB" } },
  { label: "Cappuccino", value: "Cap", htmlProps: { lang: "it" } },
  { label: "Latte", value: "Lat", htmlProps: { lang: "it" } },
  { label: "Americano", value: "Ame", htmlProps: { lang: "it" } },
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
      loading
      timeout="1000"
      onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      onIcRetryLoad={() => (selectEl.current.loading = true)}
    />
  );
};

const ControlledExample = () => {
  const [value, setValue] = useState("Cap");
  const handleChange = (event) => {
    console.log(event.detail.value);
    setValue(event.detail.value);
  };
  return (
    <IcSelect
      placeholder="Controlled"
      label="Controlled"
      options={options}
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
        onIcChange={handleChange}
      />
    </>
  );
};

const AriaLiveBehaviourExample = () => {
  const [showErrors1, setShowErrors1] = useState(false);
  const [showErrors2, setShowErrors2] = useState(false);

  return (
    <>
      <IcSelect
        label="What is your favourite coffee?"
        helperText="Error already set on page load and aria-live overridden as 'assertive'"
        validationStatus={showErrors1 ? "" : "error"}
        validationText={showErrors1 ? "" : "First error message"}
        validationAriaLive="assertive"
      />
      <br />
      <IcSelect
        label="What is your favourite coffee?"
        helperText="Error set after page load and aria-live overridden as 'assertive'"
        validationStatus={showErrors1 ? "error" : ""}
        validationText={showErrors1 ? "Second error message" : ""}
        validationAriaLive="assertive"
      />
      <br />
      <IcButton onClick={() => setShowErrors1(!showErrors1)}>
        Toggle errors
      </IcButton>
      <br />
      <br />
      <br />
      <br />
      <IcSelect
        label="What is your favourite coffee?"
        helperText="Default aria-live behaviour (i.e. 'polite')"
        validationStatus={showErrors2 ? "error" : ""}
        validationText={showErrors2 ? "Third error message" : ""}
      />
      <br />
      <IcSelect
        label="What is your favourite coffee?"
        helperText="Default aria-live behaviour (i.e. 'polite')"
        validationStatus={showErrors2 ? "error" : ""}
        validationText={showErrors2 ? "Fourth error message" : ""}
      />
      <br />
      <IcButton onClick={() => setShowErrors2(!showErrors2)}>
        Toggle errors
      </IcButton>
    </>
  );
};

export default {
  title: "Select/Single",
  component: IcSelect,
};

export const Default = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={options}
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        onIcOptionSelect={(event) =>
          console.log(`icOptionSelect: ${event.detail.value}`)
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
        label="What is your favourite coffee?"
        options={options}
        value="Cap"
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
        label="What is your favourite coffee?"
        showClearButton
        options={options}
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
        label="What is your favourite coffee?"
        options={optionsWithDescriptions}
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
        label="What is your favourite coffee?"
        helperText="Select one option from the list"
        options={options}
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
      <br />
      <IcSelect
        label="What is your favourite coffee?"
        options={options}
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
        label="What is your favourite coffee?"
        placeholder="Placeholder goes here"
        options={options}
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
        label="What is your favourite coffee?"
        options={optionsWithCustomElements}
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Custom elements",
};

export const HiddenOptionLabels = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee size?"
        options={optionsWithHiddenLabels}
        onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
      />
    );
  },

  name: "Hidden menu option labels",
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
          label="What is your favourite coffee?"
          options={options}
          size="small"
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={options}
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={options}
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
        label="What is your favourite coffee?"
        disabled
        options={options}
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
        label="What is your favourite coffee?"
        options={optionsWithDisabled}
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
        label="What is your favourite coffee?"
        fullWidth
        options={options}
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
        label="What is your favourite coffee?"
        hideLabel
        options={options}
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
        label="What is your favourite coffee?"
        required
        options={options}
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
        label="What is your favourite coffee?"
        readonly
        options={options}
        value="Cap"
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
        label="What is your favourite coffee?"
        options={groupedOptions}
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
        label="What is your favourite coffee?"
        options={optionsWithRecommended}
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
          label="What is your favourite coffee?"
          validationStatus="success"
          validationText="Coffee available"
          options={options}
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <IcSelect
          label="What is your favourite coffee?"
          validationStatus="warning"
          validationText="Only a few left"
          options={options}
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
        <IcSelect
          label="What is your favourite coffee?"
          validationStatus="error"
          validationText="Coffee unavailable"
          options={options}
          onIcChange={(event) => console.log(`icChange: ${event.detail.value}`)}
        />
      </div>
    );
  },

  name: "Validation",
};

export const AriaLiveBehaviour = {
  render: () => <AriaLiveBehaviourExample />,
  name: "Aria-live behaviour",
};

export const ScrollBehaviour = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={manyOptions}
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

export const EmittingIcOptionSelectOnEnter = {
  render: () => {
    return (
      <IcSelect
        label="What is your favourite coffee?"
        options={options}
        selectOnEnter
        onIcOptionSelect={(event) =>
          console.log(`icOptionSelect: ${event.detail.value}`)
        }
      />
    );
  },

  name: "Emitting icOptionSelect on enter",
};

export const Controlled = {
  render: () => <ControlledExample />,
  name: "Controlled",
};

export const Uncontrolled_ = {
  render: () => <Uncontrolled />,
  name: "Uncontrolled",
};

export const Internationalisation = {
  render: () => {
    return (
      <>
      <p>The first select is wrapped in a <code>&lt;span lang="fr"&gt;</code> to change the language. All options will read in french, which can be tested using a screen
        reader.</p>
      <span lang="fr">
      <IcSelect
        label="Boisson Préférée"
        options={optionsInFrench}
      />
      </span>
      <hr/>
      <IcSelect
        label="What is your favourite coffee?"
        options={optionsWithLangProps}
      />
      <br />
      <p>
        <code>lang="it"</code> has been set on some of the
        {" "}<code>&lt;li&gt;</code> elements. This can be tested using a screen
        reader.
      </p>
      </>
    );
  },

  name: "Internationalisation (+ options with htmlProps)",
};

export const Playground = {
  render: (args) => (
    <IcSelect
      options={args.options ? playgroundOptions : []}
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

    options: {
      defaultValue: true,

      control: {
        type: "boolean",
      },
    },
  },
};
