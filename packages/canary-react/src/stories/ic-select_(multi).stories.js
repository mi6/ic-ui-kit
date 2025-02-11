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
      onIcRetryLoad={(event) => (selectEl.current.loading = true)}
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
