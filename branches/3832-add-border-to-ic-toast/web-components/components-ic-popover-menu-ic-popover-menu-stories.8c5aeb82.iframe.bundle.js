/*! For license information please see components-ic-popover-menu-ic-popover-menu-stories.8c5aeb82.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8807,582,6199,6763],{"./src/components/ic-popover-menu/ic-popover-menu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoOpening:()=>AutoOpening,Default:()=>Default,LeftPlacement:()=>LeftPlacement,MaxHeight:()=>MaxHeight,MultiplePopoversOnPage:()=>MultiplePopoversOnPage,Playground:()=>Playground,PositioningStrategy:()=>PositioningStrategy,TopPlacement:()=>TopPlacement,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Popover menu",component:"Popover Menu"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Default"},MaxHeight={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Max height"},LeftPlacement={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Left placement"},TopPlacement={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Top placement"},MultiplePopoversOnPage={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-link href="/">Link1</ic-link>
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
      </div>`,name:"Multiple popovers on page"},AutoOpening={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Auto opening"},PositioningStrategy={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
    </script>
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
  `,name:"Positioning strategy"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div>
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
    </div>`,args:{open:!0,groupLabel:"View",description:"",disabled:!1,href:"/",keyboardShortcutLabel:"Cmd + C",label:"Copy code",variant:"default",iconSlot:!0,theme:"inherit"},argTypes:{variant:{options:["default","toggle","destructive"],control:{type:"radio"}},iconSlot:{mapping:{true:"icon",false:""}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","MaxHeight","LeftPlacement","TopPlacement","MultiplePopoversOnPage","AutoOpening","PositioningStrategy","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-button id="button-1" onclick="buttonClick()"\n      >Show/Hide popover</ic-button\n    >\n    <script>\n      var icPopover = document.querySelector("ic-popover-menu");\n      function buttonClick() {\n        icPopover.open = !icPopover.open;\n      }\n      icPopover.addEventListener("icPopoverClosed", handleClosed);\n      function handleClosed(event) {\n        console.log("icPopoverClosed: ", event);\n      }\n    <\/script>\n    <div>\n      <ic-popover-menu anchor="button-1" aria-label="popover">\n        <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n        <ic-menu-group label="View">\n          <ic-menu-item\n            label="Zoom in"\n            keyboard-shortcut-label="Cmd+"\n          ></ic-menu-item>\n          <ic-menu-item\n            label="Zoom out"\n            keyboard-shortcut-label="Cmd-"\n          ></ic-menu-item>\n        </ic-menu-group>\n        <ic-menu-item label="Actions" submenu-trigger-for="abc"></ic-menu-item>\n        <ic-menu-item\n          label="Logout"\n          variant="destructive"\n          disabled="true"\n        ></ic-menu-item>\n      </ic-popover-menu>\n      <ic-popover-menu submenu-id="abc">\n        <ic-menu-item label="Edit"></ic-menu-item>\n        <ic-menu-item label="Find" submenu-trigger-for="abc123"></ic-menu-item>\n        <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n      </ic-popover-menu>\n      <ic-popover-menu submenu-id="abc123">\n        <ic-menu-item\n          disabled="true"\n          label="Search the web"\n          description="This will search the web to find the thing you are looking for."\n        ></ic-menu-item>\n        <ic-menu-item label="Find..."></ic-menu-item>\n        <ic-menu-item label="Find icons">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-menu-item>\n        <ic-menu-item\n          label="Show found results"\n          variant="toggle"\n        ></ic-menu-item>\n      </ic-popover-menu>\n    </div>\n  `,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},MaxHeight.parameters={...MaxHeight.parameters,docs:{...MaxHeight.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <style>\n      ic-popover-menu {\n        --max-height: 100px;\n      }\n    </style>\n    <ic-button id="button-1" onclick="buttonClick()"\n      >Show/Hide popover</ic-button\n    >\n    <script>\n      var icPopover = document.querySelector("ic-popover-menu");\n      function buttonClick() {\n        icPopover.open = !icPopover.open;\n      }\n    <\/script>\n    <div>\n      <ic-popover-menu anchor="button-1" aria-label="popover">\n        <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n        <ic-menu-group label="View">\n          <ic-menu-item\n            label="Zoom in"\n            keyboard-shortcut-label="Cmd+"\n          ></ic-menu-item>\n          <ic-menu-item\n            label="Zoom out"\n            keyboard-shortcut-label="Cmd-"\n          ></ic-menu-item>\n        </ic-menu-group>\n        <ic-menu-item label="Actions" submenu-trigger-for="abc"></ic-menu-item>\n      </ic-popover-menu>\n      <ic-popover-menu submenu-id="abc">\n        <ic-menu-item label="Edit"></ic-menu-item>\n        <ic-menu-item label="Find" submenu-trigger-for="abc123"></ic-menu-item>\n        <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n      </ic-popover-menu>\n      <ic-popover-menu submenu-id="abc123">\n        <ic-menu-item\n          label="Search the web"\n          description="This will search the web to find the thing you are looking for."\n        ></ic-menu-item>\n        <ic-menu-item label="Find..."></ic-menu-item>\n        <ic-menu-item label="Find icons">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-menu-item>\n        <ic-menu-item\n          label="Show found results"\n          variant="toggle"\n        ></ic-menu-item>\n      </ic-popover-menu>\n    </div>\n  `,\n  name: "Max height"\n}',...MaxHeight.parameters?.docs?.source}}},LeftPlacement.parameters={...LeftPlacement.parameters,docs:{...LeftPlacement.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="margin-left: 1000px">\n      <ic-button id="button-1" onclick="buttonClick()"\n        >Show/Hide popover</ic-button\n      >\n      <script>\n        var icPopover = document.querySelector("ic-popover-menu");\n        function buttonClick() {\n          icPopover.open = !icPopover.open;\n        }\n      <\/script>\n      <div>\n        <ic-popover-menu anchor="button-1" aria-label="popover">\n          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n          <ic-menu-group label="View">\n            <ic-menu-item\n              label="Zoom in"\n              keyboard-shortcut-label="Cmd+"\n            ></ic-menu-item>\n            <ic-menu-item\n              label="Zoom out"\n              keyboard-shortcut-label="Cmd-"\n            ></ic-menu-item>\n          </ic-menu-group>\n          <ic-menu-item\n            label="Actions"\n            submenu-trigger-for="abc"\n          ></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc">\n          <ic-menu-item label="Edit"></ic-menu-item>\n          <ic-menu-item\n            label="Find"\n            submenu-trigger-for="abc123"\n          ></ic-menu-item>\n          <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc123">\n          <ic-menu-item\n            label="Search the web"\n            description="This will search the web to find the thing you are looking for."\n          ></ic-menu-item>\n          <ic-menu-item label="Find..."></ic-menu-item>\n          <ic-menu-item label="Find icons">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-menu-item>\n          <ic-menu-item\n            label="Show found results"\n            variant="toggle"\n          ></ic-menu-item>\n        </ic-popover-menu>\n      </div>\n    </div>\n  `,\n  name: "Left placement"\n}',...LeftPlacement.parameters?.docs?.source}}},TopPlacement.parameters={...TopPlacement.parameters,docs:{...TopPlacement.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="margin-top: 540px">\n      <ic-button id="button-1" onclick="buttonClick()"\n        >Show/Hide popover</ic-button\n      >\n      <script>\n        var icPopover = document.querySelector("ic-popover-menu");\n        function buttonClick() {\n          icPopover.open = !icPopover.open;\n        }\n      <\/script>\n      <div>\n        <ic-popover-menu anchor="button-1" aria-label="popover">\n          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n          <ic-menu-group label="View">\n            <ic-menu-item\n              label="Zoom in"\n              keyboard-shortcut-label="Cmd+"\n            ></ic-menu-item>\n            <ic-menu-item\n              label="Zoom out"\n              keyboard-shortcut-label="Cmd-"\n            ></ic-menu-item>\n          </ic-menu-group>\n          <ic-menu-item\n            label="Actions"\n            submenu-trigger-for="abc"\n          ></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc">\n          <ic-menu-item label="Edit"></ic-menu-item>\n          <ic-menu-item\n            label="Find"\n            submenu-trigger-for="abc123"\n          ></ic-menu-item>\n          <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc123">\n          <ic-menu-item\n            label="Search the web"\n            description="This will search the web to find the thing you are looking for."\n          ></ic-menu-item>\n          <ic-menu-item label="Find..."></ic-menu-item>\n          <ic-menu-item label="Find icons">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-menu-item>\n          <ic-menu-item\n            label="Show found results"\n            variant="toggle"\n          ></ic-menu-item>\n        </ic-popover-menu>\n      </div>\n    </div>\n  `,\n  name: "Top placement"\n}',...TopPlacement.parameters?.docs?.source}}},MultiplePopoversOnPage.parameters={...MultiplePopoversOnPage.parameters,docs:{...MultiplePopoversOnPage.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-link href="/">Link1</ic-link>\n      <ic-button id="button-1" onclick="buttonClick(1)"\n        >Show/Hide popover</ic-button\n      >\n      <ic-link href="/">Link2</ic-link>\n      <ic-button id="button-2" onclick="buttonClick(2)"\n        >Show/Hide popover 2</ic-button\n      >\n      <ic-link href="/">Link3</ic-link>\n      <script>\n        function buttonClick(pos) {\n          var icPopover = document.querySelector("#popover" + pos);\n          icPopover.open = !icPopover.open;\n        }\n      <\/script>\n      <div>\n        <ic-popover-menu anchor="button-1" aria-label="popover" id="popover1">\n          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n          <ic-menu-group label="View">\n            <ic-menu-item\n              label="Zoom in"\n              keyboard-shortcut-label="Cmd+"\n            ></ic-menu-item>\n            <ic-menu-item\n              label="Zoom out"\n              keyboard-shortcut-label="Cmd-"\n            ></ic-menu-item>\n          </ic-menu-group>\n          <ic-menu-item\n            label="Actions"\n            submenu-trigger-for="abc"\n          ></ic-menu-item>\n          <ic-menu-item\n            label="Logout"\n            variant="destructive"\n            disabled="true"\n          ></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc">\n          <ic-menu-item label="Edit"></ic-menu-item>\n          <ic-menu-item\n            label="Find"\n            submenu-trigger-for="abc123"\n          ></ic-menu-item>\n          <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc123">\n          <ic-menu-item\n            disabled="true"\n            label="Search the web"\n            description="This will search the web to find the thing you are looking for."\n          ></ic-menu-item>\n          <ic-menu-item label="Find..."></ic-menu-item>\n          <ic-menu-item label="Find icons">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-menu-item>\n          <ic-menu-item\n            label="Show found results"\n            variant="toggle"\n          ></ic-menu-item>\n        </ic-popover-menu>\n      </div>\n      <div>\n        <ic-popover-menu anchor="button-2" aria-label="popover" id="popover2">\n          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n          <ic-menu-group label="View">\n            <ic-menu-item\n              label="Zoom in"\n              keyboard-shortcut-label="Cmd+"\n            ></ic-menu-item>\n            <ic-menu-item\n              label="Zoom out"\n              keyboard-shortcut-label="Cmd-"\n            ></ic-menu-item>\n          </ic-menu-group>\n          <ic-menu-item\n            label="Actions"\n            submenu-trigger-for="def"\n          ></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="def">\n          <ic-menu-item label="Edit"></ic-menu-item>\n          <ic-menu-item\n            label="Find"\n            submenu-trigger-for="def123"\n          ></ic-menu-item>\n          <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="def123">\n          <ic-menu-item\n            label="Search the web"\n            description="This will search the web to find the thing you are looking for."\n          ></ic-menu-item>\n          <ic-menu-item label="Find..."></ic-menu-item>\n          <ic-menu-item label="Find icons">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-menu-item>\n          <ic-menu-item\n            label="Show found results"\n            variant="toggle"\n          ></ic-menu-item>\n        </ic-popover-menu>\n      </div>`,\n  name: "Multiple popovers on page"\n}',...MultiplePopoversOnPage.parameters?.docs?.source}}},AutoOpening.parameters={...AutoOpening.parameters,docs:{...AutoOpening.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-button id="button-1" onclick="buttonClick()"\n      >Show/Hide popover</ic-button\n    >\n    <script>\n      var icPopover = document.querySelector("ic-popover-menu");\n      function buttonClick() {\n        icPopover.open = !icPopover.open;\n      }\n      icPopover.addEventListener("icPopoverClosed", handleClosed);\n      function handleClosed(event) {\n        console.log("icPopoverClosed: ", event);\n      }\n    <\/script>\n    <div>\n      <ic-popover-menu anchor="button-1" aria-label="popover" open>\n        <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n        <ic-menu-group label="View">\n          <ic-menu-item label="Zoom in" keyboard-shortcut="Cmd+"></ic-menu-item>\n          <ic-menu-item\n            label="Zoom out"\n            keyboard-shortcut="Cmd-"\n          ></ic-menu-item>\n        </ic-menu-group>\n        <ic-menu-item label="Actions" submenu-trigger-for="abc"></ic-menu-item>\n        <ic-menu-item\n          label="Logout"\n          variant="destructive"\n          disabled="true"\n        ></ic-menu-item>\n      </ic-popover-menu>\n      <ic-popover-menu submenu-id="abc">\n        <ic-menu-item label="Edit"></ic-menu-item>\n        <ic-menu-item label="Find" submenu-trigger-for="abc123"></ic-menu-item>\n        <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n      </ic-popover-menu>\n      <ic-popover-menu submenu-id="abc123">\n        <ic-menu-item\n          disabled="true"\n          label="Search the web"\n          description="This will search the web to find the thing you are looking for."\n        ></ic-menu-item>\n        <ic-menu-item label="Find..."></ic-menu-item>\n        <ic-menu-item label="Find icons">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-menu-item>\n        <ic-menu-item\n          label="Show found results"\n          variant="toggle"\n        ></ic-menu-item>\n      </ic-popover-menu>\n    </div>\n  `,\n  name: "Auto opening"\n}',...AutoOpening.parameters?.docs?.source}}},PositioningStrategy.parameters={...PositioningStrategy.parameters,docs:{...PositioningStrategy.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      var icPopovers = document.querySelectorAll("ic-popover-menu");\n      var icParentPopover = icPopovers[0];\n      var switchEl = document.querySelector("ic-switch");\n      switchEl.addEventListener("icChange", (ev) => {\n        icPopovers.forEach((popover) => {\n          popover.fixedPositioning = ev.detail.checked;\n        });\n      });\n      function buttonClick() {\n        icParentPopover.open = !icParentPopover.open;\n      }\n      icParentPopover.addEventListener("icPopoverClosed", handleClosed);\n      function handleClosed(event) {\n        console.log("icPopoverClosed: ", event);\n      }\n    <\/script>\n    <div style="display:flex; flex-direction:column; gap:var(--ic-space-xs)">\n      <ic-typography>\n        Toggle the fixed positioning switch and open the popover to see it take\n        effect\n      </ic-typography>\n      <div\n        style="display:flex; flex-direction:column; gap:var(--ic-space-xs); padding:var(--ic-space-md); border:1px solid var(--ic-color-text-primary); overflow:hidden; width:160px; position:relative"\n      >\n        <ic-button id="button-1" onclick="buttonClick()"\n          >Show/Hide popover</ic-button\n        >\n        <ic-popover-menu anchor="button-1" aria-label="popover">\n          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n          <ic-menu-group label="View">\n            <ic-menu-item\n              label="Zoom in"\n              keyboard-shortcut-label="Cmd+"\n            ></ic-menu-item>\n            <ic-menu-item\n              label="Zoom out"\n              keyboard-shortcut-label="Cmd-"\n            ></ic-menu-item>\n          </ic-menu-group>\n          <ic-menu-item\n            label="Actions"\n            submenu-trigger-for="abc"\n          ></ic-menu-item>\n          <ic-menu-item\n            label="Logout"\n            variant="destructive"\n            disabled="true"\n          ></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc">\n          <ic-menu-item label="Edit"></ic-menu-item>\n          <ic-menu-item\n            label="Find"\n            submenu-trigger-for="abc123"\n          ></ic-menu-item>\n          <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc123">\n          <ic-menu-item\n            disabled="true"\n            label="Search the web"\n            description="This will search the web to find the thing you are looking for."\n          ></ic-menu-item>\n          <ic-menu-item label="Find..."></ic-menu-item>\n          <ic-menu-item label="Find icons">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-menu-item>\n          <ic-menu-item\n            label="Show found results"\n            variant="toggle"\n          ></ic-menu-item>\n        </ic-popover-menu>\n      </div>\n      <ic-switch label="Fixed popover positioning"></ic-switch>\n    </div>\n  `,\n  name: "Positioning strategy"\n}',...PositioningStrategy.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div>\n      <ic-popover-menu\n        aria-label="popover"\n        open=${args.open}\n        theme=${args.theme}\n        id="popover-menu-playground"\n      >\n        <ic-menu-group label=${args.groupLabel}>\n          <ic-menu-item\n            description=${args.description}\n            disabled=${args.disabled}\n            href=${args.href}\n            keyboard-shortcut-label=${args.keyboardShortcutLabel}\n            label=${args.label}\n            variant=${args.variant}\n          >\n            <svg\n              slot=${args.iconSlot}\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-menu-item>\n          <ic-menu-item\n            label="Zoom out"\n            keyboard-shortcut-label="Cmd-"\n          ></ic-menu-item>\n        </ic-menu-group>\n        <ic-menu-item label="Actions" submenu-trigger-for="abc"></ic-menu-item>\n      </ic-popover-menu>\n      <ic-popover-menu submenu-id="abc" theme=${args.theme}>\n        <ic-menu-item label="Edit"></ic-menu-item>\n        <ic-menu-item label="Find"></ic-menu-item>\n        <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n      </ic-popover-menu>\n    </div>`,\n  args: defaultArgs,\n  argTypes: {\n    variant: {\n      options: ["default", "toggle", "destructive"],\n      control: {\n        type: "radio"\n      }\n    },\n    iconSlot: {\n      mapping: {\n        true: "icon",\n        false: ""\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-popover-menu-ic-popover-menu-stories.8c5aeb82.iframe.bundle.js.map