import { html } from "lit-html";

const defaultArgs = {
  open: true,
  groupLabel: "View",
  description: "",
  disabled: false,
  href: "/",
  keyboardShortcutLabel: "Cmd + C",
  label: "Copy code",
  variant: "default",
  iconSlot: true,
  theme: "inherit",
};

export default {
  title: "Web Components/Popover menu",
  component: "Popover Menu",
};

export const Default = {
  render: (args) => html`
    <ic-button id="button-1" onclick="buttonClick()"
      >Show/Hide popover</ic-button
    >
    <script>
      var icPopover = document.querySelector("ic-popover-menu");
      function buttonClick() {
        icPopover.open = !icPopover.open;
      }
      icPopover.addEventListener("icPopoverClosed", handleClosed);
      function handleClosed(event) {
        console.log("icPopoverClosed: ", event);
      }
    </script>
    <div>
      <ic-popover-menu anchor="button-1" aria-label="popover">
        <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
        <ic-menu-group label="View">
          <ic-menu-item
            label="Zoom in"
            keyboard-shortcut-label="Cmd+"
          ></ic-menu-item>
          <ic-menu-item
            label="Zoom out"
            keyboard-shortcut-label="Cmd-"
          ></ic-menu-item>
        </ic-menu-group>
        <ic-menu-item label="Actions" submenu-trigger-for="abc"></ic-menu-item>
        <ic-menu-item
          label="Logout"
          variant="destructive"
          disabled="true"
        ></ic-menu-item>
      </ic-popover-menu>
      <ic-popover-menu submenu-id="abc">
        <ic-menu-item label="Edit"></ic-menu-item>
        <ic-menu-item label="Find" submenu-trigger-for="abc123"></ic-menu-item>
        <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
      </ic-popover-menu>
      <ic-popover-menu submenu-id="abc123">
        <ic-menu-item
          disabled="true"
          label="Search the web"
          description="This will search the web to find the thing you are looking for."
        ></ic-menu-item>
        <ic-menu-item label="Find..."></ic-menu-item>
        <ic-menu-item label="Find icons">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-menu-item>
        <ic-menu-item
          label="Show found results"
          variant="toggle"
        ></ic-menu-item>
      </ic-popover-menu>
    </div>
  `,

  name: "Default",
};

export const MaxHeight = {
  render: (args) => html`
    <style>
      ic-popover-menu {
        --max-height: 100px;
      }
    </style>
    <ic-button id="button-1" onclick="buttonClick()"
      >Show/Hide popover</ic-button
    >
    <script>
      var icPopover = document.querySelector("ic-popover-menu");
      function buttonClick() {
        icPopover.open = !icPopover.open;
      }
    </script>
    <div>
      <ic-popover-menu anchor="button-1" aria-label="popover">
        <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
        <ic-menu-group label="View">
          <ic-menu-item
            label="Zoom in"
            keyboard-shortcut-label="Cmd+"
          ></ic-menu-item>
          <ic-menu-item
            label="Zoom out"
            keyboard-shortcut-label="Cmd-"
          ></ic-menu-item>
        </ic-menu-group>
        <ic-menu-item label="Actions" submenu-trigger-for="abc"></ic-menu-item>
      </ic-popover-menu>
      <ic-popover-menu submenu-id="abc">
        <ic-menu-item label="Edit"></ic-menu-item>
        <ic-menu-item label="Find" submenu-trigger-for="abc123"></ic-menu-item>
        <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
      </ic-popover-menu>
      <ic-popover-menu submenu-id="abc123">
        <ic-menu-item
          label="Search the web"
          description="This will search the web to find the thing you are looking for."
        ></ic-menu-item>
        <ic-menu-item label="Find..."></ic-menu-item>
        <ic-menu-item label="Find icons">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-menu-item>
        <ic-menu-item
          label="Show found results"
          variant="toggle"
        ></ic-menu-item>
      </ic-popover-menu>
    </div>
  `,

  name: "Max height",
};

export const LeftPlacement = {
  render: (args) => html`
    <div style="margin-left: 1000px">
      <ic-button id="button-1" onclick="buttonClick()"
        >Show/Hide popover</ic-button
      >
      <script>
        var icPopover = document.querySelector("ic-popover-menu");
        function buttonClick() {
          icPopover.open = !icPopover.open;
        }
      </script>
      <div>
        <ic-popover-menu anchor="button-1" aria-label="popover">
          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
          <ic-menu-group label="View">
            <ic-menu-item
              label="Zoom in"
              keyboard-shortcut-label="Cmd+"
            ></ic-menu-item>
            <ic-menu-item
              label="Zoom out"
              keyboard-shortcut-label="Cmd-"
            ></ic-menu-item>
          </ic-menu-group>
          <ic-menu-item
            label="Actions"
            submenu-trigger-for="abc"
          ></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="abc">
          <ic-menu-item label="Edit"></ic-menu-item>
          <ic-menu-item
            label="Find"
            submenu-trigger-for="abc123"
          ></ic-menu-item>
          <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="abc123">
          <ic-menu-item
            label="Search the web"
            description="This will search the web to find the thing you are looking for."
          ></ic-menu-item>
          <ic-menu-item label="Find..."></ic-menu-item>
          <ic-menu-item label="Find icons">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-menu-item>
          <ic-menu-item
            label="Show found results"
            variant="toggle"
          ></ic-menu-item>
        </ic-popover-menu>
      </div>
    </div>
  `,

  name: "Left placement",
};

export const TopPlacement = {
  render: (args) => html`
    <div style="margin-top: 540px">
      <ic-button id="button-1" onclick="buttonClick()"
        >Show/Hide popover</ic-button
      >
      <script>
        var icPopover = document.querySelector("ic-popover-menu");
        function buttonClick() {
          icPopover.open = !icPopover.open;
        }
      </script>
      <div>
        <ic-popover-menu anchor="button-1" aria-label="popover">
          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
          <ic-menu-group label="View">
            <ic-menu-item
              label="Zoom in"
              keyboard-shortcut-label="Cmd+"
            ></ic-menu-item>
            <ic-menu-item
              label="Zoom out"
              keyboard-shortcut-label="Cmd-"
            ></ic-menu-item>
          </ic-menu-group>
          <ic-menu-item
            label="Actions"
            submenu-trigger-for="abc"
          ></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="abc">
          <ic-menu-item label="Edit"></ic-menu-item>
          <ic-menu-item
            label="Find"
            submenu-trigger-for="abc123"
          ></ic-menu-item>
          <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="abc123">
          <ic-menu-item
            label="Search the web"
            description="This will search the web to find the thing you are looking for."
          ></ic-menu-item>
          <ic-menu-item label="Find..."></ic-menu-item>
          <ic-menu-item label="Find icons">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-menu-item>
          <ic-menu-item
            label="Show found results"
            variant="toggle"
          ></ic-menu-item>
        </ic-popover-menu>
      </div>
    </div>
  `,

  name: "Top placement",
};

export const MultiplePopoversOnPage = {
  render: (args) =>
    html` <ic-link href="/">Link1</ic-link>
      <ic-button id="button-1" onclick="buttonClick(1)"
        >Show/Hide popover</ic-button
      >
      <ic-link href="/">Link2</ic-link>
      <ic-button id="button-2" onclick="buttonClick(2)"
        >Show/Hide popover 2</ic-button
      >
      <ic-link href="/">Link3</ic-link>
      <script>
        function buttonClick(pos) {
          var icPopover = document.querySelector("#popover" + pos);
          icPopover.open = !icPopover.open;
        }
      </script>
      <div>
        <ic-popover-menu anchor="button-1" aria-label="popover" id="popover1">
          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
          <ic-menu-group label="View">
            <ic-menu-item
              label="Zoom in"
              keyboard-shortcut-label="Cmd+"
            ></ic-menu-item>
            <ic-menu-item
              label="Zoom out"
              keyboard-shortcut-label="Cmd-"
            ></ic-menu-item>
          </ic-menu-group>
          <ic-menu-item
            label="Actions"
            submenu-trigger-for="abc"
          ></ic-menu-item>
          <ic-menu-item
            label="Logout"
            variant="destructive"
            disabled="true"
          ></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="abc">
          <ic-menu-item label="Edit"></ic-menu-item>
          <ic-menu-item
            label="Find"
            submenu-trigger-for="abc123"
          ></ic-menu-item>
          <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="abc123">
          <ic-menu-item
            disabled="true"
            label="Search the web"
            description="This will search the web to find the thing you are looking for."
          ></ic-menu-item>
          <ic-menu-item label="Find..."></ic-menu-item>
          <ic-menu-item label="Find icons">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-menu-item>
          <ic-menu-item
            label="Show found results"
            variant="toggle"
          ></ic-menu-item>
        </ic-popover-menu>
      </div>
      <div>
        <ic-popover-menu anchor="button-2" aria-label="popover" id="popover2">
          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
          <ic-menu-group label="View">
            <ic-menu-item
              label="Zoom in"
              keyboard-shortcut-label="Cmd+"
            ></ic-menu-item>
            <ic-menu-item
              label="Zoom out"
              keyboard-shortcut-label="Cmd-"
            ></ic-menu-item>
          </ic-menu-group>
          <ic-menu-item
            label="Actions"
            submenu-trigger-for="def"
          ></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="def">
          <ic-menu-item label="Edit"></ic-menu-item>
          <ic-menu-item
            label="Find"
            submenu-trigger-for="def123"
          ></ic-menu-item>
          <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="def123">
          <ic-menu-item
            label="Search the web"
            description="This will search the web to find the thing you are looking for."
          ></ic-menu-item>
          <ic-menu-item label="Find..."></ic-menu-item>
          <ic-menu-item label="Find icons">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-menu-item>
          <ic-menu-item
            label="Show found results"
            variant="toggle"
          ></ic-menu-item>
        </ic-popover-menu>
      </div>`,

  name: "Multiple popovers on page",
};

export const AutoOpening = {
  render: (args) => html`
    <ic-button id="button-1" onclick="buttonClick()"
      >Show/Hide popover</ic-button
    >
    <script>
      var icPopover = document.querySelector("ic-popover-menu");
      function buttonClick() {
        icPopover.open = !icPopover.open;
      }
      icPopover.addEventListener("icPopoverClosed", handleClosed);
      function handleClosed(event) {
        console.log("icPopoverClosed: ", event);
      }
    </script>
    <div>
      <ic-popover-menu anchor="button-1" aria-label="popover" open>
        <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
        <ic-menu-group label="View">
          <ic-menu-item label="Zoom in" keyboard-shortcut="Cmd+"></ic-menu-item>
          <ic-menu-item
            label="Zoom out"
            keyboard-shortcut="Cmd-"
          ></ic-menu-item>
        </ic-menu-group>
        <ic-menu-item label="Actions" submenu-trigger-for="abc"></ic-menu-item>
        <ic-menu-item
          label="Logout"
          variant="destructive"
          disabled="true"
        ></ic-menu-item>
      </ic-popover-menu>
      <ic-popover-menu submenu-id="abc">
        <ic-menu-item label="Edit"></ic-menu-item>
        <ic-menu-item label="Find" submenu-trigger-for="abc123"></ic-menu-item>
        <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
      </ic-popover-menu>
      <ic-popover-menu submenu-id="abc123">
        <ic-menu-item
          disabled="true"
          label="Search the web"
          description="This will search the web to find the thing you are looking for."
        ></ic-menu-item>
        <ic-menu-item label="Find..."></ic-menu-item>
        <ic-menu-item label="Find icons">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-menu-item>
        <ic-menu-item
          label="Show found results"
          variant="toggle"
        ></ic-menu-item>
      </ic-popover-menu>
    </div>
  `,

  name: "Auto opening",
};

export const Playground = {
  render: (args) =>
    html`<div>
      <ic-popover-menu
        aria-label="popover"
        open=${args.open}
        theme=${args.theme}
        id="popover-menu-playground"
      >
        <ic-menu-group label=${args.groupLabel}>
          <ic-menu-item
            description=${args.description}
            disabled=${args.disabled}
            href=${args.href}
            keyboard-shortcut-label=${args.keyboardShortcutLabel}
            label=${args.label}
            variant=${args.variant}
          >
            <svg
              slot=${args.iconSlot}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-menu-item>
          <ic-menu-item
            label="Zoom out"
            keyboard-shortcut-label="Cmd-"
          ></ic-menu-item>
        </ic-menu-group>
        <ic-menu-item label="Actions" submenu-trigger-for="abc"></ic-menu-item>
      </ic-popover-menu>
      <ic-popover-menu submenu-id="abc" theme=${args.theme}>
        <ic-menu-item label="Edit"></ic-menu-item>
        <ic-menu-item label="Find"></ic-menu-item>
        <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
      </ic-popover-menu>
    </div>`,

  args: defaultArgs,

  argTypes: {
    variant: {
      options: ["default", "toggle", "destructive"],

      control: {
        type: "radio",
      },
    },

    iconSlot: {
      mapping: {
        true: "icon",
        false: "",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
