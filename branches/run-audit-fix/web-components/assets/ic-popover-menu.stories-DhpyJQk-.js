var p=Object.freeze,y=Object.defineProperty;var n=(e,f)=>p(y(e,"raw",{value:p(f||e.slice())}));import{x as i}from"./lit-html-CWQq0DyO.js";const C={open:!0,groupLabel:"View",description:"",disabled:!1,href:"/",keyboardShortcutLabel:"Cmd + C",label:"Copy code",variant:"default",iconSlot:!0,theme:"inherit"},k={title:"Web Components/Popover menu",component:"Popover Menu"};var d;const o={render:()=>i(d||(d=n([`
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
    <\/script>
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
  `]))),name:"Default"};var s;const t={render:()=>i(s||(s=n([`
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
    <\/script>
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
  `]))),name:"Max height"};var b;const c={render:()=>i(b||(b=n([`
    <div style="margin-left: 1000px">
      <ic-button id="button-1" onclick="buttonClick()"
        >Show/Hide popover</ic-button
      >
      <script>
        var icPopover = document.querySelector("ic-popover-menu");
        function buttonClick() {
          icPopover.open = !icPopover.open;
        }
      <\/script>
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
  `]))),name:"Left placement"};var v;const m={render:()=>i(v||(v=n([`
    <div style="margin-top: 540px">
      <ic-button id="button-1" onclick="buttonClick()"
        >Show/Hide popover</ic-button
      >
      <script>
        var icPopover = document.querySelector("ic-popover-menu");
        function buttonClick() {
          icPopover.open = !icPopover.open;
        }
      <\/script>
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
  `]))),name:"Top placement"};var h;const u={render:()=>i(h||(h=n([` <ic-link href="/">Link1</ic-link>
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
      <\/script>
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
      </div>`]))),name:"Multiple popovers on page"};var g;const r={render:()=>i(g||(g=n([`
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
    <\/script>
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
  `]))),name:"Auto opening"};var w;const l={render:()=>i(w||(w=n([`
    <script>
      var icPopovers = document.querySelectorAll("ic-popover-menu");
      var icParentPopover = icPopovers[0];
      var switchEl = document.querySelector("ic-switch");
      switchEl.addEventListener("icChange", (ev) => {
        icPopovers.forEach((popover) => {
          popover.fixedPositioning = ev.detail.checked;
        });
      });
      function buttonClick() {
        icParentPopover.open = !icParentPopover.open;
      }
      icParentPopover.addEventListener("icPopoverClosed", handleClosed);
      function handleClosed(event) {
        console.log("icPopoverClosed: ", event);
      }
    <\/script>
    <div style="display:flex; flex-direction:column; gap:var(--ic-space-xs)">
      <ic-typography>
        Toggle the fixed positioning switch and open the popover to see it take
        effect
      </ic-typography>
      <div
        style="display:flex; flex-direction:column; gap:var(--ic-space-xs); padding:var(--ic-space-md); border:1px solid var(--ic-color-text-primary); overflow:hidden; width:160px; position:relative"
      >
        <ic-button id="button-1" onclick="buttonClick()"
          >Show/Hide popover</ic-button
        >
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
      <ic-switch label="Fixed popover positioning"></ic-switch>
    </div>
  `]))),name:"Positioning strategy"},a={render:e=>i`<div>
      <ic-popover-menu
        aria-label="popover"
        open=${e.open}
        theme=${e.theme}
        id="popover-menu-playground"
      >
        <ic-menu-group label=${e.groupLabel}>
          <ic-menu-item
            description=${e.description}
            disabled=${e.disabled}
            href=${e.href}
            keyboard-shortcut-label=${e.keyboardShortcutLabel}
            label=${e.label}
            variant=${e.variant}
          >
            <svg
              slot=${e.iconSlot}
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
      <ic-popover-menu submenu-id="abc" theme=${e.theme}>
        <ic-menu-item label="Edit"></ic-menu-item>
        <ic-menu-item label="Find"></ic-menu-item>
        <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
      </ic-popover-menu>
    </div>`,args:C,argTypes:{variant:{options:["default","toggle","destructive"],control:{type:"radio"}},iconSlot:{mapping:{true:"icon",false:""}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
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
    <\/script>
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
  \`,
  name: "Default"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
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
    <\/script>
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
  \`,
  name: "Max height"
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="margin-left: 1000px">
      <ic-button id="button-1" onclick="buttonClick()"
        >Show/Hide popover</ic-button
      >
      <script>
        var icPopover = document.querySelector("ic-popover-menu");
        function buttonClick() {
          icPopover.open = !icPopover.open;
        }
      <\/script>
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
  \`,
  name: "Left placement"
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="margin-top: 540px">
      <ic-button id="button-1" onclick="buttonClick()"
        >Show/Hide popover</ic-button
      >
      <script>
        var icPopover = document.querySelector("ic-popover-menu");
        function buttonClick() {
          icPopover.open = !icPopover.open;
        }
      <\/script>
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
  \`,
  name: "Top placement"
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-link href="/">Link1</ic-link>
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
      <\/script>
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
      </div>\`,
  name: "Multiple popovers on page"
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
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
    <\/script>
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
  \`,
  name: "Auto opening"
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      var icPopovers = document.querySelectorAll("ic-popover-menu");
      var icParentPopover = icPopovers[0];
      var switchEl = document.querySelector("ic-switch");
      switchEl.addEventListener("icChange", (ev) => {
        icPopovers.forEach((popover) => {
          popover.fixedPositioning = ev.detail.checked;
        });
      });
      function buttonClick() {
        icParentPopover.open = !icParentPopover.open;
      }
      icParentPopover.addEventListener("icPopoverClosed", handleClosed);
      function handleClosed(event) {
        console.log("icPopoverClosed: ", event);
      }
    <\/script>
    <div style="display:flex; flex-direction:column; gap:var(--ic-space-xs)">
      <ic-typography>
        Toggle the fixed positioning switch and open the popover to see it take
        effect
      </ic-typography>
      <div
        style="display:flex; flex-direction:column; gap:var(--ic-space-xs); padding:var(--ic-space-md); border:1px solid var(--ic-color-text-primary); overflow:hidden; width:160px; position:relative"
      >
        <ic-button id="button-1" onclick="buttonClick()"
          >Show/Hide popover</ic-button
        >
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
      <ic-switch label="Fixed popover positioning"></ic-switch>
    </div>
  \`,
  name: "Positioning strategy"
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => html\`<div>
      <ic-popover-menu
        aria-label="popover"
        open=\${args.open}
        theme=\${args.theme}
        id="popover-menu-playground"
      >
        <ic-menu-group label=\${args.groupLabel}>
          <ic-menu-item
            description=\${args.description}
            disabled=\${args.disabled}
            href=\${args.href}
            keyboard-shortcut-label=\${args.keyboardShortcutLabel}
            label=\${args.label}
            variant=\${args.variant}
          >
            <svg
              slot=\${args.iconSlot}
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
      <ic-popover-menu submenu-id="abc" theme=\${args.theme}>
        <ic-menu-item label="Edit"></ic-menu-item>
        <ic-menu-item label="Find"></ic-menu-item>
        <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
      </ic-popover-menu>
    </div>\`,
  args: defaultArgs,
  argTypes: {
    variant: {
      options: ["default", "toggle", "destructive"],
      control: {
        type: "radio"
      }
    },
    iconSlot: {
      mapping: {
        true: "icon",
        false: ""
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground"
}`,...a.parameters?.docs?.source}}};const x=["Default","MaxHeight","LeftPlacement","TopPlacement","MultiplePopoversOnPage","AutoOpening","PositioningStrategy","Playground"],V=Object.freeze(Object.defineProperty({__proto__:null,AutoOpening:r,Default:o,LeftPlacement:c,MaxHeight:t,MultiplePopoversOnPage:u,Playground:a,PositioningStrategy:l,TopPlacement:m,__namedExportsOrder:x,default:k},Symbol.toStringTag,{value:"Module"}));export{V as I};
