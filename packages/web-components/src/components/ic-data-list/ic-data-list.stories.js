import { html } from "lit-html";

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
  title: "Web Components/Data list",
  component: "ic-data-list",
};

export const Default = {
  render: () =>
    html`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
      </ic-data-row>
    </ic-data-list>`,

  name: "Default",
};

export const SlottedHeadingAndLabel = {
  render: () =>
    html`<ic-data-list>
      <ic-typography variant="h3" slot="heading"
        >Personal details</ic-typography
      >
      <ic-data-row value="Michael Johnson">
        <ic-typography variant="subtitle-large" slot="label"
          >Name</ic-typography
        >
      </ic-data-row>
      <ic-data-row value="16 October 1995">
        <ic-typography variant="subtitle-large" slot="label"
          >Date of birth</ic-typography
        >
      </ic-data-row>
    </ic-data-list>`,

  name: "Slotted heading and label",
};

export const LongTextValues = {
  render: () =>
    html`<ic-data-list
      heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    >
      <ic-data-row
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        value="Michael Johnson"
      ></ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>
      <ic-data-row
        label="Address"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      ></ic-data-row>
      <ic-data-row label="Second address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
      </ic-data-row>
    </ic-data-list>`,

  name: "Long text values",
};

export const Small = {
  render: () =>
    html`<ic-data-list heading="Personal details" size="small">
      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
      </ic-data-row>
    </ic-data-list>`,

  name: "Small",
};

export const WithLink = {
  render: () =>
    html`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson">
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995">
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873">
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov">
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
    </ic-data-list>`,

  name: "Link",
};

export const IconButton = {
  render: () =>
    html`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson">
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995">
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873">
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov">
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
    </ic-data-list>`,

  name: "Icon button",
};

export const Adornment = {
  render: () =>
    html`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson">
        <ic-status-tag
          status="success"
          label="confirmed"
          variant="filled"
          slot="end-component"
        >
        </ic-status-tag>
      </ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995">
        <ic-status-tag
          status="warning"
          label="in review"
          variant="filled"
          slot="end-component"
        />
      </ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873">
        <ic-status-tag
          status="warning"
          label="in review"
          variant="filled"
          slot="end-component"
        />
      </ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov">
        <ic-status-tag
          status="success"
          label="confirmed"
          variant="filled"
          slot="end-component"
        />
      </ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
        <ic-status-tag
          label="not confirmed"
          variant="filled"
          slot="end-component"
        />
      </ic-data-row>
    </ic-data-list>`,

  name: "Adornment",
};

export const WithStatusTag = {
  render: () =>
    html` <ic-data-list heading="Personal details">
      <ic-data-row label="Name"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
      <ic-data-row label="Date of birth"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
      <ic-data-row label="Telephone"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
      <ic-data-row label="Address"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
      <ic-data-row label="Email"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
    </ic-data-list>`,

  name: "Status tag",
};

export const EditableExample = {
  render: () =>
    html`<ic-data-list heading="Personal details">
        <ic-data-row label="Name">
          <ic-text-field
            slot="value"
            label="Name"
            value="Michael Johnson"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
        <ic-data-row label="Date of birth">
          <ic-text-field
            slot="value"
            label="Date of birth"
            value="16 October 1995"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
        <ic-data-row label="Telephone">
          <ic-text-field
            slot="value"
            label="Telephone"
            value="07449 7654873"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
        <ic-data-row label="Email">
          <ic-text-field
            slot="value"
            label="Email"
            value="mjohnson@coffee.gov"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
        <ic-data-row label="Address">
          <ic-text-field
            slot="value"
            label="Address"
            value="383 Coffee Drive, London, SW7 988, United Kingdom"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
      </ic-data-list>
      <ic-button
        onclick="
        var textFields = document.querySelectorAll('ic-text-field');
        for (var i=0; i < textFields.length; i++) {
          textFields[i].setAttribute('readonly', '');
        }"
        style="margin-right: var(--ic-space-md);margin-top: var(--ic-space-lg);"
      >
        Confirm
      </ic-button>
      <ic-button
        onclick="
        var textFields = document.querySelectorAll('ic-text-field');
        for (var i=0; i < textFields.length; i++) {
          textFields[i].removeAttribute('readonly');
        }"
        variant="secondary"
        style="margin-top: var(--ic-space-lg);"
      >
        Edit
      </ic-button>`,

  name: "Editable example",
};

export const LabelWidth = {
  render: () =>
    html`<ic-data-list heading="Personal details">
        <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>
        <ic-data-row
          label="Date of birth with extra words to make long heading"
          value="16 October 1995"
        ></ic-data-row>
        <ic-data-row
          label="Telephone with additional words"
          value="07449 7654873"
        ></ic-data-row>
        <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>
        <ic-data-row label="Address">
          <ic-typography variant="body" slot="value">
            383 Coffee Drive
            <br />
            London
            <br />
            SW7 988
            <br />
            United Kingdom
          </ic-typography>
        </ic-data-row>
      </ic-data-list>
      <script>
        const dataList = document.querySelector("ic-data-list");
        dataList.style.setProperty("--data-row-label-width", "30rem");
      </script>`,

  name: "With label width",
};

const inlineRadioSelector = "inline-radio";

export const Playground = {
  render: (args) =>
    html`<ic-data-list
      heading=${args.heading}
      size=${args.size}
      theme=${args.theme}
    >
      <ic-data-row
        label=${args.label}
        value=${args.value}
        size=${args.rowSize}
        theme=${args.rowTheme}
      >
        <ic-button variant="icon" aria-label="Edit" slot=${args.endCompSlot}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
    </ic-data-list>`,

  args: defaultArgs,

  argTypes: {
    size: {
      options: ["medium", "small"],

      control: {
        type: inlineRadioSelector,
      },
    },

    rowSize: {
      options: ["medium", "small"],

      control: {
        type: inlineRadioSelector,
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
        type: inlineRadioSelector,
      },
    },

    rowTheme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: inlineRadioSelector,
      },
    },
  },

  name: "Playground",
};
