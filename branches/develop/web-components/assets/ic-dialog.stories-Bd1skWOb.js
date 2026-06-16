import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";import{n as i,t as a}from"./taggedTemplateLiteral-pWa2IaV6.js";var o=e({AutoOpening:()=>M,BackgroundClosePrevented:()=>w,DisableHeightConstraint:()=>O,DisableWidthConstraint:()=>k,EventsExample:()=>E,HiddenCloseButton:()=>j,Playground:()=>N,Popover:()=>D,Scrollable:()=>T,ShowHideInteractiveElements:()=>A,Sizes:()=>x,SlottedContent:()=>S,SlottedTabs:()=>C,__namedExportsOrder:()=>P,default:()=>b}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=t((()=>{n(),i(),y={closeOnBackdropClick:!0,destructive:!1,dismissLabel:`Dismiss`,disableHeightConstraint:!1,disableWidthConstraint:!1,hideCloseButton:!1,hideDefaultControls:!1,heading:`This is a dialog`,label:`Dialog`,open:!0,size:`medium`,theme:`inherit`},b={title:`Web Components/Dialog`,component:`ic-dialog`},x={render:()=>r(s||=a([`
    <script>
      function showSmallDialog() {
        dialog = document.querySelector("#small-dialog");
        dialog.open = true;
      }
      function showMediumDialog() {
        dialog = document.querySelector("#medium-dialog");
        dialog.open = true;
      }
      function showLargeDialog() {
        dialog = document.querySelector("#large-dialog");
        dialog.open = true;
      }
    <\/script>
    <ic-button variant="primary" onclick="showSmallDialog()"
      >Launch small dialog</ic-button
    >
    <ic-button variant="primary" onclick="showMediumDialog()"
      >Launch medium dialog</ic-button
    >
    <ic-button variant="primary" onclick="showLargeDialog()"
      >Launch large dialog</ic-button
    >
    <ic-dialog heading="This is a small dialog" label="Small" id="small-dialog">
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
    <ic-dialog
      heading="This is a medium dialog"
      label="Medium"
      size="medium"
      id="medium-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
    <ic-dialog
      heading="This is a large dialog"
      label="Large"
      size="large"
      id="large-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  `])),name:`Sizes`},S={render:()=>r(c||=a([`
    <script>
      function showDialog() {
        dialog = document.querySelector("ic-dialog");
        dialog.open = true;
      }
      function hideDialog() {
        dialog.open = false;
      }
      function confirm() {
        checkbox = document.querySelector("ic-checkbox");
        if (checkbox.checked) {
          alert("Confirmed with option");
        } else {
          alert("Confirmed!");
        }
        hideDialog();
      }
      var select1 = document.querySelector("#sel1");
      select1.options = [
        { label: "Cappuccino", value: "Cap" },
        { label: "Latte", value: "Lat" },
        { label: "Americano", value: "Ame" },
      ];
      select1.addEventListener("icChange", function (event) {
        console.log(event.detail.value);
      });
      var icPopover = document.querySelector("ic-popover-menu");
      function buttonClick() {
        icPopover.open = true;
      }
    <\/script>
    <ic-button variant="primary" onclick="showDialog()"
      >Launch dialog</ic-button
    >
    <ic-dialog dismiss-label="Close" size="large" disable-width-constraint="true">
      <div style="display:flex; flex-direction:column; gap: 0.75rem">
        <ic-typography slot="heading" variant="h4"
          >This dialog has slotted interactive content</ic-typography
        >
        <ic-typography slot="label" variant="label">Slotted label</ic-typography>
        <ic-alert
          variant="info"
          heading="Info"
          message="This alert is for displaying information"
          slot="alert"
        >
        <ic-typography slot="message">
          This is some text and <ic-link href="/" inline>this is an inline link</ic-link> within the text.
        </ic-typography>
        <ic-button slot="action" variant="secondary">Button</ic-button>
        </ic-alert>
        <ic-typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </ic-typography>
        <ic-tooltip
          label="This is a description of the button"
          target="test-button"
        >
          <ic-button
            id="test-button"
          >
            Button with tooltip
          </ic-button>
        </ic-tooltip>
        <ic-button
          variant="icon-primary"
          aria-label="This is a description of the button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-accordion heading="This is an accordion">
          <ic-checkbox label="Agree" value="confirm" additional-field-display="static">
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            />
          </ic-checkbox>
          <ic-radio-group label="This is a label" name="1">
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
            additional-field-display="dynamic"
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            >
            </ic-text-field>
          </ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            additional-field-display="static"
            selected
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            >
            </ic-text-field>
          </ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      </ic-accordion>
      <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
      <ic-text-field label="What is your favourite coffee?"></ic-text-field>
      <ic-select
        id="sel1"
        label="What is your favourite coffee?"
        placeholder="Placeholder goes here"
      ></ic-select>
      <ic-button id="button-1" onclick="buttonClick()">Show popover</ic-button>
      <div>
        <ic-popover-menu anchor="button-1" aria-label="popover">
          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
          <ic-menu-group label="View">
            <ic-menu-item
              label="Zoom in"
              keyboard-shortcut-label="Cmd+"
            ></ic-menu-item>
          </ic-menu-group>
          <ic-menu-item
            label="Actions"
            submenu-trigger-for="abc"
          ></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="abc">
          <ic-menu-item
            label="Find"
            submenu-trigger-for="abc123"
          ></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="abc123">
          <ic-menu-item
            disabled="true"
            label="Search the web"
            description="This will search the web to find the thing you are looking for."
          ></ic-menu-item>
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
        </ic-popover-menu>
      </div>
      <ic-checkbox-group
        label="confirm"
        hide-label
        name="confirm-checkbox"
      >
        <ic-checkbox label="Agree" value="confirm" id="focus" additional-field-display="static">
        <ic-text-field
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          /></ic-checkbox>
        <ic-checkbox additional-field-display="dynamic" value="disagree" label="Disagree">
          <ic-text-field
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          />
        </ic-checkbox>
        <ic-checkbox label="Disabled" value="disabled" disabled>
      </ic-checkbox-group>
      <ic-chip label="Default" dismissible="true">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-switch label="Switch label"></ic-switch>
    </div>
    <ic-button
      variant="tertiary"
      onclick="hideDialog()"
      slot="dialog-controls"
      >Cancel</ic-button
    >
    <ic-button variant="primary" onclick="confirm()" slot="dialog-controls"
      >Confirm</ic-button
    >
    </ic-dialog>
  `])),name:`Slotted content`},C={render:()=>r(l||=a([`
  <script>
      function showDialog() {
        dialog = document.querySelector("ic-dialog");
        dialog.open = true;
      }
      function hideDialog() {
        dialog.open = false;
      }
    <\/script>
      <ic-button variant="primary" onclick="showDialog()">
        Launch dialog
      </ic-button>
      <ic-dialog dismiss-label="Close" size="large" disable-width-constraint="true">
      <div style="display:flex; flex-direction:column; gap: 0.75rem">
          <ic-typography slot="heading" variant="h4">
            This is a slotted heading
          </ic-typography>
          <ic-typography slot="label" variant="label">
            Slotted label
          </ic-typography>
           <ic-tab-context>
          <ic-tab-group label="Example tab group">
            <ic-tab>Ingredients</ic-tab>
            <ic-tab>Method</ic-tab>
            <ic-tab>History</ic-tab>
          </ic-tab-group>
          <ic-tab-panel>Tab One - Ingredients</ic-tab-panel>
          <ic-tab-panel>Tab Two - Method</ic-tab-panel>
          <ic-tab-panel>Tab Three - History</ic-tab-panel>
        </ic-tab-context>
        </div>
      </ic-dialog>
    </>`])),name:`Slotted tabs`},w={render:()=>r(u||=a([`
    <script>
      function showClosePreventedDialog() {
        dialog = document.querySelector("ic-dialog");
        dialog.open = true;
      }
    <\/script>
    <ic-button variant="primary" onclick="showClosePreventedDialog()"
      >Launch close prevented dialog</ic-button
    >
    <ic-dialog
      heading="This dialog can't be closed by clicking the background"
      label="Background close prevented"
      close-on-backdrop-click="false"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  `])),name:`Background close prevented`},T={render:()=>r(d||=a([`
    <script>
      function showScrollableDialog() {
        dialog = document.querySelector("ic-dialog");
        dialog.open = true;
      }
      var select = document.querySelector("#scroll-sel");
      select.options = [
        { label: "Cappuccino", value: "Cap" },
        { label: "Latte", value: "Lat" },
        { label: "Americano", value: "Ame" },
      ];
      select.addEventListener("icChange", function (event) {
        console.log(event.detail.value);
      });
    <\/script>
    <ic-button variant="primary" onclick="showScrollableDialog()"
      >Launch scrollable dialog</ic-button
    >
    <ic-dialog heading="This dialog has overflowing content" label="Scrollable">
      <ic-typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </ic-typography>
      <br />
      <ic-select
        id="scroll-sel"
        label="What is your favourite coffee?"
        placeholder="Placeholder goes here"
      ></ic-select>
      <br />
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
    </ic-dialog>
  `])),name:`Scrollable`},E={render:()=>r(f||=a([`
    <script>
      function showDialog() {
        dialog = document.querySelector("ic-dialog");
        dialog.open = true;
        document.addEventListener("icDialogConfirmed", dialogConfirmed);
        document.addEventListener("icDialogCancelled", dialogCancelled);
      }
      function dialogConfirmed() {
        dialog = document.querySelector("ic-dialog");
        alert("Dialog confirmed");
        dialog.open = false;
        document.removeEventListener("icDialogConfirmed", dialogConfirmed);
        document.removeEventListener("icDialogCancelled", dialogCancelled);
      }
      function dialogCancelled() {
        alert("Dialog cancelled");
        document.removeEventListener("icDialogConfirmed", dialogConfirmed);
        document.removeEventListener("icDialogCancelled", dialogCancelled);
      }
    <\/script>
    <ic-button variant="primary" onclick="showDialog()"
      >Launch dialog</ic-button
    >
    <ic-dialog heading="This dialog utilises events" label="Events">
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  `])),name:`Events example`},D={render:()=>r(p||=a([`
    <script>
      function dropdownItems() {
        return Array.from(Array(10).keys()).map((i) => {
          return {
            label: "Item " + i,
            value: "item-" + i,
          };
        });
      }
      document
        .querySelector("#select-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#select-dialog").open = true;
        });
      document
        .querySelector("#search-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#search-dialog").open = true;
        });
      document
        .querySelector("#tooltip-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#tooltip-dialog").open = true;
        });
      document.querySelector("#select-dropdown").options = dropdownItems();
      document.querySelector("#search-dropdown").options = dropdownItems();
      document.querySelector("#select-dropdown-2").options = dropdownItems();
      document
        .querySelector("#long-text-select-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#long-text-select-dialog").open = true;
        });
      document
        .querySelector("#popover-menu-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#popover-menu-dialog").open = true;
        });
      document
        .querySelector("#popover-menu-show-btn")
        .addEventListener("click", () => {
          document.querySelector("#popover-menu").open = true;
        });
    <\/script>
    <div>
      <ic-button id="select-dialog-btn">Select Dialog</ic-button>
      <ic-button id="search-dialog-btn">Search Dialog</ic-button>
      <ic-button id="tooltip-dialog-btn">Tooltip Dialog</ic-button>
      <ic-button id="popover-menu-dialog-btn">Popover Menu Dialog</ic-button>
      <ic-button id="long-text-select-dialog-btn"
        >Long Text with Select Dialog</ic-button
      >
    </div>
    <ic-dialog heading="Select" id="select-dialog">
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-select
        id="select-dropdown"
        label="What is your favourite coffee?"
      ></ic-select>
    </ic-dialog>
    <ic-dialog heading="Search" id="search-dialog">
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-search-bar
        id="search-dropdown"
        label="What is your favourite coffee?"
      ></ic-search-bar>
    </ic-dialog>
    <ic-dialog heading="Tooltip" id="tooltip-dialog">
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-tooltip
        label="This is a description of the button"
        target="test-button-default"
        ><button
          id="test-button-default"
          aria-describedby="ic-tooltip-test-button-default"
        >
          Default
        </button></ic-tooltip
      >
      <ic-button
        variant="icon-tertiary"
        size="small"
        aria-label="refresh"
        id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-chip label="Small" dismissible="true" size="small">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
    </ic-dialog>
    <ic-dialog heading="Popover Menu" id="popover-menu-dialog">
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-button id="popover-menu-show-btn">Show popover</ic-button>
      <ic-popover-menu
        id="popover-menu"
        anchor="popover-menu-show-btn"
        aria-label="popover"
      >
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
    </ic-dialog>
    <ic-dialog
      heading="Long Text Select"
      id="long-text-select-dialog"
      disable-height-constraint="true"
    >
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-select
        id="select-dropdown-2"
        label="What is your favourite coffee?"
      ></ic-select>
    </ic-dialog>
  `])),name:`Popover`},O={render:()=>r(m||=a([`
    <script>
      function dropdownItems() {
        return Array.from(Array(10).keys()).map((i) => {
          return {
            label: "Item " + i,
            value: "item-" + i,
          };
        });
      }
      document
        .querySelector("#long-text-select-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#long-text-select-dialog").open = true;
        });
      document
        .querySelector("#short-text-select-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#short-text-select-dialog").open = true;
        });
      document.querySelector("#select-dropdown-2").options = dropdownItems();
      document.querySelector("#select-dropdown-3").options = dropdownItems();
    <\/script>
    <div>
      <ic-button id="long-text-select-dialog-btn"
        >Long Text with Select Dialog</ic-button
      >
      <ic-button id="short-text-select-dialog-btn"
        >Short Text with Select Dialog</ic-button
      >
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-button id="long-text-select-dialog-btn"
        >Long Text with Select Dialog</ic-button
      >
      <ic-button id="short-text-select-dialog-btn"
        >Short Text with Select Dialog</ic-button
      >
    </div>
    <ic-dialog
      heading="Short Text Select"
      label="test"
      id="short-text-select-dialog"
      disable-height-constraint="true"
    >
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
      </ic-typography>
      <ic-select
        id="select-dropdown-3"
        label="What is your favourite coffee?"
      ></ic-select>
    </ic-dialog>
    <ic-dialog
      heading="Long Text Select"
      id="long-text-select-dialog"
      disable-height-constraint="true"
    >
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-select
        id="select-dropdown-2"
        label="What is your favourite coffee?"
      ></ic-select>
    </ic-dialog>
  `])),name:`Disable Height Constraint`},k={render:()=>r(h||=a([`
    <script>
      document
        .querySelector("#full-width-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#full-width-dialog").open = true;
        });
    <\/script>
    <div>
      <ic-button id="full-width-dialog-btn">Full Width Text Dialog</ic-button>
    </div>
    <ic-dialog
      heading="Full Width Text"
      label="test"
      id="full-width-dialog"
      size="large"
      disable-width-constraint="true"
    >
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </ic-typography>
    </ic-dialog>
  `])),name:`Disable Width Constraint`},A={render:()=>r(g||=a([`
    <script>
      function showShowHideContentDialog() {
        dialog = document.querySelector(
          "#show-hide-content-dialog"
        ).open = true;
      }
      var btnShow = document.querySelector(".show");
      btnShow.addEventListener("click", () => {
        var el = document.createElement("ic-button");
        el.id = "slotted-btn";
        el.innerText = "Slotted element";
        var childEl = document.createElement("ic-button");
        childEl.id = "slotted-child-btn";
        childEl.innerText = "Child of slotted element";
        var base = document.querySelector("#base");
        base.after(el);
        setTimeout(() => base.appendChild(childEl), 2000);
      });
      var btnHide = document.querySelector(".hide");
      btnHide.addEventListener("click", () => {
        if (document.querySelector("#slotted-btn")) {
          var btn = document.querySelector("#slotted-btn");
          btn.remove();
        }
        if (document.querySelector("#slotted-child-btn")) {
          var btn = document.querySelector("#slotted-child-btn");
          setTimeout(() => btn.remove(), 2000);
        }
      });
    <\/script>
    <ic-button variant="primary" onclick="showShowHideContentDialog()"
      >Launch show / hide content dialog</ic-button
    >
    <ic-dialog
      heading="This dialog allows showing and hiding of content"
      id="show-hide-content-dialog"
    >
      <ic-typography>
        Demonstrates changes to slotted elements happening after first load.
        <br />
        The button which is a child of an already rendered slotted
        <code>`,`</code> will show / hide after a 2s delay.
      </ic-typography>
      <br />
      <ic-button class="show">Show</ic-button>
      <ic-button class="hide">Hide</ic-button>
      <div id="base"></div>
    </ic-dialog>
  `]),`<div>`),name:`Show / hide interactive elements`},j={render:()=>r(_||=a([`
    <script>
      function showHiddenCloseButtonDialog() {
        dialog = document.querySelector("#hidden-close-button-dialog");
        dialog.open = true;
      }
    <\/script>
    <ic-button variant="primary" onclick="showHiddenCloseButtonDialog()"
      >Launch dialog with hidden close button</ic-button
    >
    <ic-dialog
      id="hidden-close-button-dialog"
      heading="This dialog does not have a close button"
      label="Hidden Close Button Dialog"
      hide-close-button
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  `])),name:`Hidden close button`},M={render:()=>r(v||=a([`
    <script>
      function showAutoOpenCloseButtonDialog() {
        dialog = document.querySelector("#auto-opening-dialog");
        dialog.open = true;
      }
    <\/script>
    <ic-button variant="primary" onclick="showAutoOpenCloseButtonDialog()"
      >Launch auto opening dialog</ic-button
    >
    <ic-dialog
      id="auto-opening-dialog"
      heading="This dialog opens automatically using the open prop"
      label="Auto opening dialog"
      open
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  `])),name:`Auto Opening`},N={render:e=>r`<ic-dialog
      heading=${e.heading}
      label=${e.label}
      size=${e.size}
      open=${e.open}
      close-on-backdrop-click=${e.closeOnBackdropClick}
      destructive=${e.destructive}
      dismiss-label=${e.dismissLabel}
      disable-height-constraint=${e.disableHeightConstraint}
      disable-width-constraint=${e.disableWidthConstraint}
      hide-close-button=${e.hideCloseButton}
      hide-default-controls=${e.hideDefaultControls}
      theme=${e.theme}
      id="medium-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>`,args:y,argTypes:{size:{options:[`small`,`medium`,`large`],control:{type:`radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      function showSmallDialog() {
        dialog = document.querySelector("#small-dialog");
        dialog.open = true;
      }
      function showMediumDialog() {
        dialog = document.querySelector("#medium-dialog");
        dialog.open = true;
      }
      function showLargeDialog() {
        dialog = document.querySelector("#large-dialog");
        dialog.open = true;
      }
    <\/script>
    <ic-button variant="primary" onclick="showSmallDialog()"
      >Launch small dialog</ic-button
    >
    <ic-button variant="primary" onclick="showMediumDialog()"
      >Launch medium dialog</ic-button
    >
    <ic-button variant="primary" onclick="showLargeDialog()"
      >Launch large dialog</ic-button
    >
    <ic-dialog heading="This is a small dialog" label="Small" id="small-dialog">
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
    <ic-dialog
      heading="This is a medium dialog"
      label="Medium"
      size="medium"
      id="medium-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
    <ic-dialog
      heading="This is a large dialog"
      label="Large"
      size="large"
      id="large-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  \`,
  name: "Sizes"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      function showDialog() {
        dialog = document.querySelector("ic-dialog");
        dialog.open = true;
      }
      function hideDialog() {
        dialog.open = false;
      }
      function confirm() {
        checkbox = document.querySelector("ic-checkbox");
        if (checkbox.checked) {
          alert("Confirmed with option");
        } else {
          alert("Confirmed!");
        }
        hideDialog();
      }
      var select1 = document.querySelector("#sel1");
      select1.options = [
        { label: "Cappuccino", value: "Cap" },
        { label: "Latte", value: "Lat" },
        { label: "Americano", value: "Ame" },
      ];
      select1.addEventListener("icChange", function (event) {
        console.log(event.detail.value);
      });
      var icPopover = document.querySelector("ic-popover-menu");
      function buttonClick() {
        icPopover.open = true;
      }
    <\/script>
    <ic-button variant="primary" onclick="showDialog()"
      >Launch dialog</ic-button
    >
    <ic-dialog dismiss-label="Close" size="large" disable-width-constraint="true">
      <div style="display:flex; flex-direction:column; gap: 0.75rem">
        <ic-typography slot="heading" variant="h4"
          >This dialog has slotted interactive content</ic-typography
        >
        <ic-typography slot="label" variant="label">Slotted label</ic-typography>
        <ic-alert
          variant="info"
          heading="Info"
          message="This alert is for displaying information"
          slot="alert"
        >
        <ic-typography slot="message">
          This is some text and <ic-link href="/" inline>this is an inline link</ic-link> within the text.
        </ic-typography>
        <ic-button slot="action" variant="secondary">Button</ic-button>
        </ic-alert>
        <ic-typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </ic-typography>
        <ic-tooltip
          label="This is a description of the button"
          target="test-button"
        >
          <ic-button
            id="test-button"
          >
            Button with tooltip
          </ic-button>
        </ic-tooltip>
        <ic-button
          variant="icon-primary"
          aria-label="This is a description of the button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-button>
        <ic-accordion heading="This is an accordion">
          <ic-checkbox label="Agree" value="confirm" additional-field-display="static">
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            />
          </ic-checkbox>
          <ic-radio-group label="This is a label" name="1">
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
            additional-field-display="dynamic"
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            >
            </ic-text-field>
          </ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            additional-field-display="static"
            selected
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            >
            </ic-text-field>
          </ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      </ic-accordion>
      <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
      <ic-text-field label="What is your favourite coffee?"></ic-text-field>
      <ic-select
        id="sel1"
        label="What is your favourite coffee?"
        placeholder="Placeholder goes here"
      ></ic-select>
      <ic-button id="button-1" onclick="buttonClick()">Show popover</ic-button>
      <div>
        <ic-popover-menu anchor="button-1" aria-label="popover">
          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
          <ic-menu-group label="View">
            <ic-menu-item
              label="Zoom in"
              keyboard-shortcut-label="Cmd+"
            ></ic-menu-item>
          </ic-menu-group>
          <ic-menu-item
            label="Actions"
            submenu-trigger-for="abc"
          ></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="abc">
          <ic-menu-item
            label="Find"
            submenu-trigger-for="abc123"
          ></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="abc123">
          <ic-menu-item
            disabled="true"
            label="Search the web"
            description="This will search the web to find the thing you are looking for."
          ></ic-menu-item>
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
        </ic-popover-menu>
      </div>
      <ic-checkbox-group
        label="confirm"
        hide-label
        name="confirm-checkbox"
      >
        <ic-checkbox label="Agree" value="confirm" id="focus" additional-field-display="static">
        <ic-text-field
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          /></ic-checkbox>
        <ic-checkbox additional-field-display="dynamic" value="disagree" label="Disagree">
          <ic-text-field
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          />
        </ic-checkbox>
        <ic-checkbox label="Disabled" value="disabled" disabled>
      </ic-checkbox-group>
      <ic-chip label="Default" dismissible="true">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-switch label="Switch label"></ic-switch>
    </div>
    <ic-button
      variant="tertiary"
      onclick="hideDialog()"
      slot="dialog-controls"
      >Cancel</ic-button
    >
    <ic-button variant="primary" onclick="confirm()" slot="dialog-controls"
      >Confirm</ic-button
    >
    </ic-dialog>
  \`,
  name: "Slotted content"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
  <script>
      function showDialog() {
        dialog = document.querySelector("ic-dialog");
        dialog.open = true;
      }
      function hideDialog() {
        dialog.open = false;
      }
    <\/script>
      <ic-button variant="primary" onclick="showDialog()">
        Launch dialog
      </ic-button>
      <ic-dialog dismiss-label="Close" size="large" disable-width-constraint="true">
      <div style="display:flex; flex-direction:column; gap: 0.75rem">
          <ic-typography slot="heading" variant="h4">
            This is a slotted heading
          </ic-typography>
          <ic-typography slot="label" variant="label">
            Slotted label
          </ic-typography>
           <ic-tab-context>
          <ic-tab-group label="Example tab group">
            <ic-tab>Ingredients</ic-tab>
            <ic-tab>Method</ic-tab>
            <ic-tab>History</ic-tab>
          </ic-tab-group>
          <ic-tab-panel>Tab One - Ingredients</ic-tab-panel>
          <ic-tab-panel>Tab Two - Method</ic-tab-panel>
          <ic-tab-panel>Tab Three - History</ic-tab-panel>
        </ic-tab-context>
        </div>
      </ic-dialog>
    </>\`,
  name: "Slotted tabs"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      function showClosePreventedDialog() {
        dialog = document.querySelector("ic-dialog");
        dialog.open = true;
      }
    <\/script>
    <ic-button variant="primary" onclick="showClosePreventedDialog()"
      >Launch close prevented dialog</ic-button
    >
    <ic-dialog
      heading="This dialog can't be closed by clicking the background"
      label="Background close prevented"
      close-on-backdrop-click="false"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  \`,
  name: "Background close prevented"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      function showScrollableDialog() {
        dialog = document.querySelector("ic-dialog");
        dialog.open = true;
      }
      var select = document.querySelector("#scroll-sel");
      select.options = [
        { label: "Cappuccino", value: "Cap" },
        { label: "Latte", value: "Lat" },
        { label: "Americano", value: "Ame" },
      ];
      select.addEventListener("icChange", function (event) {
        console.log(event.detail.value);
      });
    <\/script>
    <ic-button variant="primary" onclick="showScrollableDialog()"
      >Launch scrollable dialog</ic-button
    >
    <ic-dialog heading="This dialog has overflowing content" label="Scrollable">
      <ic-typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </ic-typography>
      <br />
      <ic-select
        id="scroll-sel"
        label="What is your favourite coffee?"
        placeholder="Placeholder goes here"
      ></ic-select>
      <br />
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
    </ic-dialog>
  \`,
  name: "Scrollable"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      function showDialog() {
        dialog = document.querySelector("ic-dialog");
        dialog.open = true;
        document.addEventListener("icDialogConfirmed", dialogConfirmed);
        document.addEventListener("icDialogCancelled", dialogCancelled);
      }
      function dialogConfirmed() {
        dialog = document.querySelector("ic-dialog");
        alert("Dialog confirmed");
        dialog.open = false;
        document.removeEventListener("icDialogConfirmed", dialogConfirmed);
        document.removeEventListener("icDialogCancelled", dialogCancelled);
      }
      function dialogCancelled() {
        alert("Dialog cancelled");
        document.removeEventListener("icDialogConfirmed", dialogConfirmed);
        document.removeEventListener("icDialogCancelled", dialogCancelled);
      }
    <\/script>
    <ic-button variant="primary" onclick="showDialog()"
      >Launch dialog</ic-button
    >
    <ic-dialog heading="This dialog utilises events" label="Events">
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  \`,
  name: "Events example"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      function dropdownItems() {
        return Array.from(Array(10).keys()).map((i) => {
          return {
            label: "Item " + i,
            value: "item-" + i,
          };
        });
      }
      document
        .querySelector("#select-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#select-dialog").open = true;
        });
      document
        .querySelector("#search-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#search-dialog").open = true;
        });
      document
        .querySelector("#tooltip-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#tooltip-dialog").open = true;
        });
      document.querySelector("#select-dropdown").options = dropdownItems();
      document.querySelector("#search-dropdown").options = dropdownItems();
      document.querySelector("#select-dropdown-2").options = dropdownItems();
      document
        .querySelector("#long-text-select-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#long-text-select-dialog").open = true;
        });
      document
        .querySelector("#popover-menu-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#popover-menu-dialog").open = true;
        });
      document
        .querySelector("#popover-menu-show-btn")
        .addEventListener("click", () => {
          document.querySelector("#popover-menu").open = true;
        });
    <\/script>
    <div>
      <ic-button id="select-dialog-btn">Select Dialog</ic-button>
      <ic-button id="search-dialog-btn">Search Dialog</ic-button>
      <ic-button id="tooltip-dialog-btn">Tooltip Dialog</ic-button>
      <ic-button id="popover-menu-dialog-btn">Popover Menu Dialog</ic-button>
      <ic-button id="long-text-select-dialog-btn"
        >Long Text with Select Dialog</ic-button
      >
    </div>
    <ic-dialog heading="Select" id="select-dialog">
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-select
        id="select-dropdown"
        label="What is your favourite coffee?"
      ></ic-select>
    </ic-dialog>
    <ic-dialog heading="Search" id="search-dialog">
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-search-bar
        id="search-dropdown"
        label="What is your favourite coffee?"
      ></ic-search-bar>
    </ic-dialog>
    <ic-dialog heading="Tooltip" id="tooltip-dialog">
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-tooltip
        label="This is a description of the button"
        target="test-button-default"
        ><button
          id="test-button-default"
          aria-describedby="ic-tooltip-test-button-default"
        >
          Default
        </button></ic-tooltip
      >
      <ic-button
        variant="icon-tertiary"
        size="small"
        aria-label="refresh"
        id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-chip label="Small" dismissible="true" size="small">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
    </ic-dialog>
    <ic-dialog heading="Popover Menu" id="popover-menu-dialog">
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-button id="popover-menu-show-btn">Show popover</ic-button>
      <ic-popover-menu
        id="popover-menu"
        anchor="popover-menu-show-btn"
        aria-label="popover"
      >
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
    </ic-dialog>
    <ic-dialog
      heading="Long Text Select"
      id="long-text-select-dialog"
      disable-height-constraint="true"
    >
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-select
        id="select-dropdown-2"
        label="What is your favourite coffee?"
      ></ic-select>
    </ic-dialog>
  \`,
  name: "Popover"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      function dropdownItems() {
        return Array.from(Array(10).keys()).map((i) => {
          return {
            label: "Item " + i,
            value: "item-" + i,
          };
        });
      }
      document
        .querySelector("#long-text-select-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#long-text-select-dialog").open = true;
        });
      document
        .querySelector("#short-text-select-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#short-text-select-dialog").open = true;
        });
      document.querySelector("#select-dropdown-2").options = dropdownItems();
      document.querySelector("#select-dropdown-3").options = dropdownItems();
    <\/script>
    <div>
      <ic-button id="long-text-select-dialog-btn"
        >Long Text with Select Dialog</ic-button
      >
      <ic-button id="short-text-select-dialog-btn"
        >Short Text with Select Dialog</ic-button
      >
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-button id="long-text-select-dialog-btn"
        >Long Text with Select Dialog</ic-button
      >
      <ic-button id="short-text-select-dialog-btn"
        >Short Text with Select Dialog</ic-button
      >
    </div>
    <ic-dialog
      heading="Short Text Select"
      label="test"
      id="short-text-select-dialog"
      disable-height-constraint="true"
    >
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
      </ic-typography>
      <ic-select
        id="select-dropdown-3"
        label="What is your favourite coffee?"
      ></ic-select>
    </ic-dialog>
    <ic-dialog
      heading="Long Text Select"
      id="long-text-select-dialog"
      disable-height-constraint="true"
    >
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Why do we use it?<br /><br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </ic-typography>
      <ic-select
        id="select-dropdown-2"
        label="What is your favourite coffee?"
      ></ic-select>
    </ic-dialog>
  \`,
  name: "Disable Height Constraint"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      document
        .querySelector("#full-width-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#full-width-dialog").open = true;
        });
    <\/script>
    <div>
      <ic-button id="full-width-dialog-btn">Full Width Text Dialog</ic-button>
    </div>
    <ic-dialog
      heading="Full Width Text"
      label="test"
      id="full-width-dialog"
      size="large"
      disable-width-constraint="true"
    >
      <ic-typography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </ic-typography>
    </ic-dialog>
  \`,
  name: "Disable Width Constraint"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  // Delay with second button prevents false positive by ensuring the two slot updates happen at separate times
  render: () => html\`
    <script>
      function showShowHideContentDialog() {
        dialog = document.querySelector(
          "#show-hide-content-dialog"
        ).open = true;
      }
      var btnShow = document.querySelector(".show");
      btnShow.addEventListener("click", () => {
        var el = document.createElement("ic-button");
        el.id = "slotted-btn";
        el.innerText = "Slotted element";
        var childEl = document.createElement("ic-button");
        childEl.id = "slotted-child-btn";
        childEl.innerText = "Child of slotted element";
        var base = document.querySelector("#base");
        base.after(el);
        setTimeout(() => base.appendChild(childEl), 2000);
      });
      var btnHide = document.querySelector(".hide");
      btnHide.addEventListener("click", () => {
        if (document.querySelector("#slotted-btn")) {
          var btn = document.querySelector("#slotted-btn");
          btn.remove();
        }
        if (document.querySelector("#slotted-child-btn")) {
          var btn = document.querySelector("#slotted-child-btn");
          setTimeout(() => btn.remove(), 2000);
        }
      });
    <\/script>
    <ic-button variant="primary" onclick="showShowHideContentDialog()"
      >Launch show / hide content dialog</ic-button
    >
    <ic-dialog
      heading="This dialog allows showing and hiding of content"
      id="show-hide-content-dialog"
    >
      <ic-typography>
        Demonstrates changes to slotted elements happening after first load.
        <br />
        The button which is a child of an already rendered slotted
        <code>\${\`<div>\`}</code> will show / hide after a 2s delay.
      </ic-typography>
      <br />
      <ic-button class="show">Show</ic-button>
      <ic-button class="hide">Hide</ic-button>
      <div id="base"></div>
    </ic-dialog>
  \`,
  name: "Show / hide interactive elements"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      function showHiddenCloseButtonDialog() {
        dialog = document.querySelector("#hidden-close-button-dialog");
        dialog.open = true;
      }
    <\/script>
    <ic-button variant="primary" onclick="showHiddenCloseButtonDialog()"
      >Launch dialog with hidden close button</ic-button
    >
    <ic-dialog
      id="hidden-close-button-dialog"
      heading="This dialog does not have a close button"
      label="Hidden Close Button Dialog"
      hide-close-button
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  \`,
  name: "Hidden close button"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      function showAutoOpenCloseButtonDialog() {
        dialog = document.querySelector("#auto-opening-dialog");
        dialog.open = true;
      }
    <\/script>
    <ic-button variant="primary" onclick="showAutoOpenCloseButtonDialog()"
      >Launch auto opening dialog</ic-button
    >
    <ic-dialog
      id="auto-opening-dialog"
      heading="This dialog opens automatically using the open prop"
      label="Auto opening dialog"
      open
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  \`,
  name: "Auto Opening"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-dialog
      heading=\${args.heading}
      label=\${args.label}
      size=\${args.size}
      open=\${args.open}
      close-on-backdrop-click=\${args.closeOnBackdropClick}
      destructive=\${args.destructive}
      dismiss-label=\${args.dismissLabel}
      disable-height-constraint=\${args.disableHeightConstraint}
      disable-width-constraint=\${args.disableWidthConstraint}
      hide-close-button=\${args.hideCloseButton}
      hide-default-controls=\${args.hideDefaultControls}
      theme=\${args.theme}
      id="medium-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>\`,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "radio"
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
}`,...N.parameters?.docs?.source}}},P=[`Sizes`,`SlottedContent`,`SlottedTabs`,`BackgroundClosePrevented`,`Scrollable`,`EventsExample`,`Popover`,`DisableHeightConstraint`,`DisableWidthConstraint`,`ShowHideInteractiveElements`,`HiddenCloseButton`,`AutoOpening`,`Playground`]}));F();export{M as AutoOpening,w as BackgroundClosePrevented,O as DisableHeightConstraint,k as DisableWidthConstraint,E as EventsExample,j as HiddenCloseButton,N as Playground,D as Popover,T as Scrollable,A as ShowHideInteractiveElements,x as Sizes,S as SlottedContent,C as SlottedTabs,P as __namedExportsOrder,b as default,F as n,o as t};