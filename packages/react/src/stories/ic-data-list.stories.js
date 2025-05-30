/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {
  IcButton,
  IcDataList,
  IcDataRow,
  IcLink,
  IcSelect,
  IcStatusTag,
  IcTextField,
  IcTypography,
} from "../components";

const defaultArgs = {
  heading: "Details",
  size: "medium",
  label: "Name",
  rowSize: "default",
  value: "Michael Johnson",
  endCompSlot: "end-component",
  theme: "inherit",
  rowTheme: "inherit",
};

export default {
  title: "Data list",
  component: (IcDataRow, IcDataList),
};

export const Default = {
  render: () => (
    <IcDataList heading="Data">
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
    </IcDataList>
  ),

  name: "Default",
};

export const SlottedHeadingAndLabel = {
  render: () => (
    <IcDataList>
      <IcTypography variant="h3" slot="heading">
        Personal details
      </IcTypography>
      <IcDataRow value="Michael Johnson">
        <IcTypography variant="subtitle-large" slot="label">
          Name
        </IcTypography>
      </IcDataRow>
      <IcDataRow value="16 October 1995">
        <IcTypography variant="subtitle-large" slot="label">
          Date of birth
        </IcTypography>
      </IcDataRow>
    </IcDataList>
  ),

  name: "Slotted heading and label",
};

const options = [
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

export const LongTextValues = {
  render: () => (
    <IcDataList heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua">
      <IcDataRow
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        value="value"
      />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow
        label="Label"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label">
        <IcSelect slot="value" label="What are your favourite types of coffee?"
            value={[
              'Cap',
              'Lat',
              'Ame',
              'Fil',
              'Fla',
              'Moc',
              'Mac',
              'Caf',
              'Cor',
              'Esp',
              'Ris',
            ]}
            options={options}
            multiple
            readonly
        />
      </IcDataRow>
      <IcDataRow label="Label">
        <IcTypography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </IcTypography>
      </IcDataRow>
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
    </IcDataList>
  ),

  name: "Long text values",
};

export const SizeSmall = {
  render: () => (
    <IcDataList heading="Data" size="small">
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
      <IcDataRow label="Label" value="value" />
    </IcDataList>
  ),

  name: "Size small",
};

export const Link = {
  render: () => (
    <IcDataList heading="Data">
      <IcDataRow label="Label" value="value">
        <IcLink href="/" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcLink href="/" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcLink href="/" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcLink href="/" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcLink href="/" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcLink href="/" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcLink href="/" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcLink href="/" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
    </IcDataList>
  ),

  name: "Link",
};

export const IconButton = {
  render: () => (
    <IcDataList heading="Data">
      <IcDataRow label="Label" value="value">
        <IcButton variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </IcButton>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcButton variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </IcButton>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcButton variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </IcButton>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcButton variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </IcButton>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcButton variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </IcButton>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcButton variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </IcButton>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcButton variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </IcButton>
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcButton variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </IcButton>
      </IcDataRow>
    </IcDataList>
  ),

  name: "Icon button",
};

export const Adornment = {
  render: () => (
    <IcDataList heading="Data">
      <IcDataRow label="Label" value="value">
        <IcStatusTag
          status="success"
          label="complete"
          variant="filled"
          slot="end-component"
        />
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcStatusTag
          status="success"
          label="complete"
          variant="filled"
          slot="end-component"
        />
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcStatusTag
          status="success"
          label="complete"
          variant="filled"
          slot="end-component"
        />
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcStatusTag
          status="success"
          label="complete"
          variant="filled"
          slot="end-component"
        />
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcStatusTag
          status="success"
          label="complete"
          variant="filled"
          slot="end-component"
        />
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcStatusTag
          status="success"
          label="complete"
          variant="filled"
          slot="end-component"
        />
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcStatusTag
          status="success"
          label="complete"
          variant="filled"
          slot="end-component"
        />
      </IcDataRow>
      <IcDataRow label="Label" value="value">
        <IcStatusTag
          status="success"
          label="complete"
          variant="filled"
          slot="end-component"
        />
      </IcDataRow>
    </IcDataList>
  ),

  name: "Adornment",
};

export const StatusTag = {
  render: () => (
    <IcDataList heading="Data">
      <IcDataRow label="Label">
        <IcStatusTag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
        />
      </IcDataRow>
      <IcDataRow label="Label">
        <IcStatusTag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
        />
      </IcDataRow>
      <IcDataRow label="Label">
        <IcStatusTag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
        />
      </IcDataRow>
      <IcDataRow label="Label">
        <IcStatusTag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
        />
      </IcDataRow>
      <IcDataRow label="Label">
        <IcStatusTag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
        />
      </IcDataRow>
      <IcDataRow label="Label">
        <IcStatusTag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
        />
      </IcDataRow>
      <IcDataRow label="Label">
        <IcStatusTag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
        />
      </IcDataRow>
      <IcDataRow label="Label">
        <IcStatusTag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
        />
      </IcDataRow>
    </IcDataList>
  ),

  name: "Status tag",
};

export const EditableExample = {
  render: () => (
    <>
      <IcDataList heading="Data">
        <IcDataRow label="Label">
          <IcTextField slot="value" label="label" value="value" readonly />
        </IcDataRow>
        <IcDataRow label="Label">
          <IcTextField slot="value" label="label" value="value" readonly />
        </IcDataRow>
        <IcDataRow label="Label">
          <IcTextField slot="value" label="label" value="value" readonly />
        </IcDataRow>
        <IcDataRow label="Label">
          <IcTextField slot="value" label="label" value="value" readonly />
        </IcDataRow>
        <IcDataRow label="Label">
          <IcTextField slot="value" label="label" value="value" readonly />
        </IcDataRow>
        <IcDataRow label="Label">
          <IcTextField slot="value" label="label" value="value" readonly />
        </IcDataRow>
        <IcDataRow label="Label">
          <IcTextField slot="value" label="label" value="value" readonly />
        </IcDataRow>
        <IcDataRow label="Label">
          <IcTextField slot="value" label="label" value="value" readonly />
        </IcDataRow>
      </IcDataList>
      <IcButton
        onclick="
            var textFields = document.querySelectorAll('ic-text-field');
            for (var i=0; i < textFields.length; i++) {
              textFields[i].setAttribute('readonly', '');
            }"
        style={{
          marginRight: "var(--ic-space-md)",
          marginTop: "var(--ic-space-lg)",
        }}
      >
        Confirm
      </IcButton>
      <IcButton
        onclick="
            var textFields = document.querySelectorAll('ic-text-field');
            for (var i=0; i < textFields.length; i++) {
              textFields[i].removeAttribute('readonly');
            }"
        variant="secondary"
        style={{ marginTop: "var(--ic-space-lg)" }}
      >
        Edit
      </IcButton>
    </>
  ),

  name: "Editable example",
};

export const Playground = {
  render: (args) => (
    <IcDataList heading={args.heading} size={args.size} theme={args.theme}>
      <IcDataRow
        label={args.label}
        value={args.value}
        size={args.rowSize}
        theme={args.rowTheme}
      >
        <IcButton variant="icon" aria-label="Edit" slot={args.endCompSlot}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </IcButton>
      </IcDataRow>
      <IcDataRow label="Date of birth" value="16 October 1995" />
      <IcDataRow label="Telephone" value="07449 7654873" />
    </IcDataList>
  ),

  args: defaultArgs,

  argTypes: {
    size: {
      options: ["medium", "small"],

      control: {
        type: "inline-radio",
      },
    },

    rowSize: {
      options: ["medium", "small"],

      control: {
        type: "inline-radio",
      },
    },

    endCompSlot: {
      options: ["end-component", ""],

      control: {
        type: "select",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },

    rowTheme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
