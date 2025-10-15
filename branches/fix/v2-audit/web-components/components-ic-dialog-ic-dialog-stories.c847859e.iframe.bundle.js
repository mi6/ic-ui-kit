/*! For license information please see components-ic-dialog-ic-dialog-stories.c847859e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4871],{"./src/components/ic-dialog/ic-dialog.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoOpening:()=>AutoOpening,BackgroundClosePrevented:()=>BackgroundClosePrevented,Buttons:()=>Buttons,DisableHeightConstraint:()=>DisableHeightConstraint,DisableWidthConstraint:()=>DisableWidthConstraint,EventsExample:()=>EventsExample,HiddenCloseButton:()=>HiddenCloseButton,Playground:()=>Playground,Popover:()=>Popover,Scrollable:()=>Scrollable,ShowHideInteractiveElements:()=>ShowHideInteractiveElements,Sizes:()=>Sizes,SlottedContent:()=>SlottedContent,Status:()=>Status,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Dialog",component:"ic-dialog"},Sizes={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
    </script>
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
  `,name:"Sizes"},Status={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <script>
      function showNeutralDialog() {
        dialog = document.querySelector("#neutral-dialog");
        dialog.open = true;
      }
      function showInfoDialog() {
        dialog = document.querySelector("#info-dialog");
        dialog.open = true;
      }
      function showWarningDialog() {
        dialog = document.querySelector("#warning-dialog");
        dialog.open = true;
      }
      function showErrorDialog() {
        dialog = document.querySelector("#error-dialog");
        dialog.open = true;
      }
      function showSuccessDialog() {
        dialog = document.querySelector("#success-dialog");
        dialog.open = true;
      }
    </script>
    <ic-button variant="primary" onclick="showNeutralDialog()"
      >Launch neutral dialog</ic-button
    >
    <ic-button variant="primary" onclick="showInfoDialog()"
      >Launch info dialog</ic-button
    >
    <ic-button variant="primary" onclick="showWarningDialog()"
      >Launch warning dialog</ic-button
    >
    <ic-button variant="primary" onclick="showErrorDialog()"
      >Launch error dialog</ic-button
    >
    <ic-button variant="primary" onclick="showSuccessDialog()"
      >Launch success dialog</ic-button
    >
    <ic-dialog
      heading="This dialog has a neutral alert"
      label="Neutral"
      status="neutral"
      alert-heading="Neutral alert"
      alert-message="This alert is for generic/miscellaneous messages"
      id="neutral-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
    <ic-dialog
      heading="This dialog has an info alert"
      label="Info"
      status="info"
      alert-heading="Info alert"
      alert-message="This alert is for information"
      id="info-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
    <ic-dialog
      heading="This dialog has a warning alert"
      label="Warning"
      status="warning"
      alert-heading="Warning alert"
      alert-message="This alert is for warnings"
      id="warning-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
    <ic-dialog
      heading="This dialog has an error alert"
      label="Error"
      status="error"
      alert-heading="Error alert"
      alert-message="This alert is for errors"
      id="error-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
    <ic-dialog
      heading="This dialog has a success alert"
      label="Success"
      status="success"
      alert-heading="Success alert"
      alert-message="This alert is for success messages"
      id="success-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  `,name:"Status"},Buttons={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <script>
      function showPlainDialog() {
        dialog = document.querySelector("#plain-dialog");
        dialog.open = true;
      }
      function showSingleDialog() {
        dialog = document.querySelector("#single-dialog");
        dialog.open = true;
      }
      function showDoubleDialog() {
        dialog = document.querySelector("#double-dialog");
        dialog.open = true;
      }
      function showTripleDialog() {
        dialog = document.querySelector("#triple-dialog");
        dialog.open = true;
      }
      function showDestructiveDialog() {
        dialog = document.querySelector("#destructive-dialog");
        dialog.open = true;
      }
      tripleDialog = document.querySelector("#triple-dialog");
      tripleDialog.buttonProps = [
        { label: "Cancel", onclick: "this.hideDialog()" },
        { label: "Options", onclick: "alert('Options...')" },
        { label: "Confirm", onclick: "alert('Confirmed')" },
      ];
      singleDialog = document.querySelector("#single-dialog");
      singleDialog.buttonProps = [
        { label: "Confirm", onclick: "alert('Confirmed')" },
      ];
      destructiveDialog = document.querySelector("#destructive-dialog");
      destructiveDialog.buttonProps = [
        { label: "Confirm", onclick: "alert('Confirmed')" },
      ];
    </script>
    <ic-button variant="primary" onclick="showPlainDialog()"
      >Launch no button dialog</ic-button
    >
    <ic-button variant="primary" onclick="showSingleDialog()"
      >Launch single button dialog</ic-button
    >
    <ic-button variant="primary" onclick="showDoubleDialog()"
      >Launch two button dialog</ic-button
    >
    <ic-button variant="primary" onclick="showTripleDialog()"
      >Launch three button dialog</ic-button
    >
    <ic-button variant="primary" onclick="showDestructiveDialog()"
      >Launch destructive button dialog</ic-button
    >
    <ic-dialog
      heading="This dialog has no default buttons"
      label="None"
      id="plain-dialog"
      buttons="false"
    >
      <ic-typography
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</ic-typography
      >
    </ic-dialog>
    <ic-dialog
      heading="This dialog has a single button"
      label="Single"
      id="single-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
    <ic-dialog
      heading="This dialog has two default buttons"
      label="Double"
      id="double-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
    <ic-dialog
      heading="This dialog has three default buttons"
      label="Triple"
      id="triple-dialog"
    >
      <ic-typography
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</ic-typography
      >
    </ic-dialog>
    <ic-dialog
      heading="This dialog has a default destructive button"
      label="Destructive"
      id="destructive-dialog"
      destructive="true"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  `,name:"Buttons"},SlottedContent={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
    </script>
    <ic-button variant="primary" onclick="showDialog()"
      >Launch dialog</ic-button
    >
    <ic-dialog dismiss-label="Close" size="medium">
      <ic-typography slot="heading" variant="h4"
        >This dialog has slotted interactive content</ic-typography
      >
      <ic-typography slot="label" variant="label">Slotted label</ic-typography>
      <ic-alert
        variant="info"
        heading="Info"
        message="This alert is for displaying information"
        slot="alert"
      ></ic-alert>
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
      <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
      <ic-text-field label="What is your favourite coffee?"> </ic-text-field>
      <ic-select
        id="sel1"
        label="What is your favourite coffee?"
        placeholder="Placeholder goes here"
      ></ic-select>
      <ic-checkbox-group
        style="margin: 8px 0"
        hide-label
        label="confirm"
        name="confirm-checkbox"
      >
        <ic-checkbox label="Option" value="confirm" id="focus"></ic-checkbox>
      </ic-checkbox-group>
      <ic-button id="button-1" onclick="buttonClick()">Show popover</ic-button>
      <ic-tooltip label="This is a description of the button">
        <ic-chip label="Default">
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
          </svg> </ic-chip
      ></ic-tooltip>
      <div>
        <ic-popover-menu anchor="button-1" aria-label="popover">
          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
          <ic-menu-group label="View">
            <ic-menu-item
              label="Zoom in"
              keyboard-shortcut="Cmd+"
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
  `,name:"Slotted content"},BackgroundClosePrevented={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <script>
      function showClosePreventedDialog() {
        dialog = document.querySelector("ic-dialog");
        dialog.open = true;
      }
    </script>
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
  `,name:"Background close prevented"},Scrollable={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
    </script>
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
  `,name:"Scrollable"},EventsExample={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
    </script>
    <ic-button variant="primary" onclick="showDialog()"
      >Launch dialog</ic-button
    >
    <ic-dialog heading="This dialog utilises events" label="Events">
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>
  `,name:"Events example"},Popover={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
    </script>
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
        variant="icon"
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
  `,name:"Popover"},DisableHeightConstraint={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
          document.querySelector("#long-text-select-dialog").showDialog();
        });
      document
        .querySelector("#short-text-select-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#short-text-select-dialog").open = true;
        });
      document.querySelector("#select-dropdown-2").options = dropdownItems();
      document.querySelector("#select-dropdown-3").options = dropdownItems();
    </script>
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
  `,name:"Disable Height Constraint"},DisableWidthConstraint={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <script>
      document
        .querySelector("#full-width-dialog-btn")
        .addEventListener("click", () => {
          document.querySelector("#full-width-dialog").showDialog();
        });
    </script>
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
  `,name:"Disable Width Constraint"},ShowHideInteractiveElements={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <script>
      function showShowHideContentDialog() {
        dialog = document
          .querySelector("#show-hide-content-dialog")
          .showDialog();
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
    </script>
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
        The button which is a child of an existing slotted element will update
        after a 2s delay.
      </ic-typography>
      <br />
      <ic-button class="show">Show</ic-button>
      <ic-button class="hide">Hide</ic-button>
      <div id="base"></div>
    </ic-dialog>
  `,name:"Show / hide interactive elements"},HiddenCloseButton={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <script>
      function showHiddenCloseButtonDialog() {
        dialog = document.querySelector("#hidden-close-button-dialog");
        dialog.open = true;
      }
    </script>
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
  `,name:"Hidden close button"},AutoOpening={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <script>
      function showAutoOpenCloseButtonDialog() {
        dialog = document.querySelector("#auto-opening-dialog");
        dialog.open = true;
      }
    </script>
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
  `,name:"Auto Opening"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-dialog
      heading=${args.heading}
      label=${args.label}
      size=${args.size}
      open=${args.open}
      close-on-backdrop-click=${args.closeOnBackdropClick}
      destructive=${args.destructive}
      dismiss-label=${args.dismissLabel}
      disable-height-constraint=${args.disableHeightConstraint}
      disable-width-constraint=${args.disableWidthConstraint}
      hide-close-button=${args.hideCloseButton}
      buttons=${args.buttons}
      id="medium-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </ic-typography>
    </ic-dialog>`,args:{buttons:!0,closeOnBackdropClick:!0,destructive:!1,dismissLabel:"Dismiss",disableHeightConstraint:!1,disableWidthConstraint:!1,hideCloseButton:!1,heading:"This is a dialog",label:"Dialog",open:!0,size:"medium"},argTypes:{size:{options:["small","medium","large"],control:{type:"radio"}}},name:"Playground"},__namedExportsOrder=["Sizes","Status","Buttons","SlottedContent","BackgroundClosePrevented","Scrollable","EventsExample","Popover","DisableHeightConstraint","DisableWidthConstraint","ShowHideInteractiveElements","HiddenCloseButton","AutoOpening","Playground"];Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function showSmallDialog() {\n        dialog = document.querySelector("#small-dialog");\n        dialog.open = true;\n      }\n      function showMediumDialog() {\n        dialog = document.querySelector("#medium-dialog");\n        dialog.open = true;\n      }\n      function showLargeDialog() {\n        dialog = document.querySelector("#large-dialog");\n        dialog.open = true;\n      }\n    <\/script>\n    <ic-button variant="primary" onclick="showSmallDialog()"\n      >Launch small dialog</ic-button\n    >\n    <ic-button variant="primary" onclick="showMediumDialog()"\n      >Launch medium dialog</ic-button\n    >\n    <ic-button variant="primary" onclick="showLargeDialog()"\n      >Launch large dialog</ic-button\n    >\n    <ic-dialog heading="This is a small dialog" label="Small" id="small-dialog">\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n    <ic-dialog\n      heading="This is a medium dialog"\n      label="Medium"\n      size="medium"\n      id="medium-dialog"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor\n        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n        ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n    <ic-dialog\n      heading="This is a large dialog"\n      label="Large"\n      size="large"\n      id="large-dialog"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n  `,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},Status.parameters={...Status.parameters,docs:{...Status.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function showNeutralDialog() {\n        dialog = document.querySelector("#neutral-dialog");\n        dialog.open = true;\n      }\n      function showInfoDialog() {\n        dialog = document.querySelector("#info-dialog");\n        dialog.open = true;\n      }\n      function showWarningDialog() {\n        dialog = document.querySelector("#warning-dialog");\n        dialog.open = true;\n      }\n      function showErrorDialog() {\n        dialog = document.querySelector("#error-dialog");\n        dialog.open = true;\n      }\n      function showSuccessDialog() {\n        dialog = document.querySelector("#success-dialog");\n        dialog.open = true;\n      }\n    <\/script>\n    <ic-button variant="primary" onclick="showNeutralDialog()"\n      >Launch neutral dialog</ic-button\n    >\n    <ic-button variant="primary" onclick="showInfoDialog()"\n      >Launch info dialog</ic-button\n    >\n    <ic-button variant="primary" onclick="showWarningDialog()"\n      >Launch warning dialog</ic-button\n    >\n    <ic-button variant="primary" onclick="showErrorDialog()"\n      >Launch error dialog</ic-button\n    >\n    <ic-button variant="primary" onclick="showSuccessDialog()"\n      >Launch success dialog</ic-button\n    >\n    <ic-dialog\n      heading="This dialog has a neutral alert"\n      label="Neutral"\n      status="neutral"\n      alert-heading="Neutral alert"\n      alert-message="This alert is for generic/miscellaneous messages"\n      id="neutral-dialog"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n    <ic-dialog\n      heading="This dialog has an info alert"\n      label="Info"\n      status="info"\n      alert-heading="Info alert"\n      alert-message="This alert is for information"\n      id="info-dialog"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n    <ic-dialog\n      heading="This dialog has a warning alert"\n      label="Warning"\n      status="warning"\n      alert-heading="Warning alert"\n      alert-message="This alert is for warnings"\n      id="warning-dialog"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n    <ic-dialog\n      heading="This dialog has an error alert"\n      label="Error"\n      status="error"\n      alert-heading="Error alert"\n      alert-message="This alert is for errors"\n      id="error-dialog"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n    <ic-dialog\n      heading="This dialog has a success alert"\n      label="Success"\n      status="success"\n      alert-heading="Success alert"\n      alert-message="This alert is for success messages"\n      id="success-dialog"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n  `,\n  name: "Status"\n}',...Status.parameters?.docs?.source}}},Buttons.parameters={...Buttons.parameters,docs:{...Buttons.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function showPlainDialog() {\n        dialog = document.querySelector("#plain-dialog");\n        dialog.open = true;\n      }\n      function showSingleDialog() {\n        dialog = document.querySelector("#single-dialog");\n        dialog.open = true;\n      }\n      function showDoubleDialog() {\n        dialog = document.querySelector("#double-dialog");\n        dialog.open = true;\n      }\n      function showTripleDialog() {\n        dialog = document.querySelector("#triple-dialog");\n        dialog.open = true;\n      }\n      function showDestructiveDialog() {\n        dialog = document.querySelector("#destructive-dialog");\n        dialog.open = true;\n      }\n      tripleDialog = document.querySelector("#triple-dialog");\n      tripleDialog.buttonProps = [\n        { label: "Cancel", onclick: "this.hideDialog()" },\n        { label: "Options", onclick: "alert(\'Options...\')" },\n        { label: "Confirm", onclick: "alert(\'Confirmed\')" },\n      ];\n      singleDialog = document.querySelector("#single-dialog");\n      singleDialog.buttonProps = [\n        { label: "Confirm", onclick: "alert(\'Confirmed\')" },\n      ];\n      destructiveDialog = document.querySelector("#destructive-dialog");\n      destructiveDialog.buttonProps = [\n        { label: "Confirm", onclick: "alert(\'Confirmed\')" },\n      ];\n    <\/script>\n    <ic-button variant="primary" onclick="showPlainDialog()"\n      >Launch no button dialog</ic-button\n    >\n    <ic-button variant="primary" onclick="showSingleDialog()"\n      >Launch single button dialog</ic-button\n    >\n    <ic-button variant="primary" onclick="showDoubleDialog()"\n      >Launch two button dialog</ic-button\n    >\n    <ic-button variant="primary" onclick="showTripleDialog()"\n      >Launch three button dialog</ic-button\n    >\n    <ic-button variant="primary" onclick="showDestructiveDialog()"\n      >Launch destructive button dialog</ic-button\n    >\n    <ic-dialog\n      heading="This dialog has no default buttons"\n      label="None"\n      id="plain-dialog"\n      buttons="false"\n    >\n      <ic-typography\n        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</ic-typography\n      >\n    </ic-dialog>\n    <ic-dialog\n      heading="This dialog has a single button"\n      label="Single"\n      id="single-dialog"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n    <ic-dialog\n      heading="This dialog has two default buttons"\n      label="Double"\n      id="double-dialog"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n    <ic-dialog\n      heading="This dialog has three default buttons"\n      label="Triple"\n      id="triple-dialog"\n    >\n      <ic-typography\n        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</ic-typography\n      >\n    </ic-dialog>\n    <ic-dialog\n      heading="This dialog has a default destructive button"\n      label="Destructive"\n      id="destructive-dialog"\n      destructive="true"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n  `,\n  name: "Buttons"\n}',...Buttons.parameters?.docs?.source}}},SlottedContent.parameters={...SlottedContent.parameters,docs:{...SlottedContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function showDialog() {\n        dialog = document.querySelector("ic-dialog");\n        dialog.open = true;\n      }\n      function hideDialog() {\n        dialog.open = false;\n      }\n      function confirm() {\n        checkbox = document.querySelector("ic-checkbox");\n        if (checkbox.checked) {\n          alert("Confirmed with option");\n        } else {\n          alert("Confirmed!");\n        }\n        hideDialog();\n      }\n      var select1 = document.querySelector("#sel1");\n      select1.options = [\n        { label: "Cappuccino", value: "Cap" },\n        { label: "Latte", value: "Lat" },\n        { label: "Americano", value: "Ame" },\n      ];\n      select1.addEventListener("icChange", function (event) {\n        console.log(event.detail.value);\n      });\n      var icPopover = document.querySelector("ic-popover-menu");\n      function buttonClick() {\n        icPopover.open = true;\n      }\n    <\/script>\n    <ic-button variant="primary" onclick="showDialog()"\n      >Launch dialog</ic-button\n    >\n    <ic-dialog dismiss-label="Close" size="medium">\n      <ic-typography slot="heading" variant="h4"\n        >This dialog has slotted interactive content</ic-typography\n      >\n      <ic-typography slot="label" variant="label">Slotted label</ic-typography>\n      <ic-alert\n        variant="info"\n        heading="Info"\n        message="This alert is for displaying information"\n        slot="alert"\n      ></ic-alert>\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n      <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>\n      <ic-text-field label="What is your favourite coffee?"> </ic-text-field>\n      <ic-select\n        id="sel1"\n        label="What is your favourite coffee?"\n        placeholder="Placeholder goes here"\n      ></ic-select>\n      <ic-checkbox-group\n        style="margin: 8px 0"\n        hide-label\n        label="confirm"\n        name="confirm-checkbox"\n      >\n        <ic-checkbox label="Option" value="confirm" id="focus"></ic-checkbox>\n      </ic-checkbox-group>\n      <ic-button id="button-1" onclick="buttonClick()">Show popover</ic-button>\n      <ic-tooltip label="This is a description of the button">\n        <ic-chip label="Default">\n          <svg\n            slot="icon"\n            width="20"\n            height="20"\n            viewBox="0 0 20 20"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n            />\n          </svg> </ic-chip\n      ></ic-tooltip>\n      <div>\n        <ic-popover-menu anchor="button-1" aria-label="popover">\n          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n          <ic-menu-group label="View">\n            <ic-menu-item\n              label="Zoom in"\n              keyboard-shortcut="Cmd+"\n            ></ic-menu-item>\n          </ic-menu-group>\n          <ic-menu-item\n            label="Actions"\n            submenu-trigger-for="abc"\n          ></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc">\n          <ic-menu-item\n            label="Find"\n            submenu-trigger-for="abc123"\n          ></ic-menu-item>\n        </ic-popover-menu>\n        <ic-popover-menu submenu-id="abc123">\n          <ic-menu-item\n            disabled="true"\n            label="Search the web"\n            description="This will search the web to find the thing you are looking for."\n          ></ic-menu-item>\n          <ic-menu-item label="Find icons">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-menu-item>\n        </ic-popover-menu>\n      </div>\n      <ic-button\n        variant="tertiary"\n        onclick="hideDialog()"\n        slot="dialog-controls"\n        >Cancel</ic-button\n      >\n      <ic-button variant="primary" onclick="confirm()" slot="dialog-controls"\n        >Confirm</ic-button\n      >\n    </ic-dialog>\n  `,\n  name: "Slotted content"\n}',...SlottedContent.parameters?.docs?.source}}},BackgroundClosePrevented.parameters={...BackgroundClosePrevented.parameters,docs:{...BackgroundClosePrevented.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function showClosePreventedDialog() {\n        dialog = document.querySelector("ic-dialog");\n        dialog.open = true;\n      }\n    <\/script>\n    <ic-button variant="primary" onclick="showClosePreventedDialog()"\n      >Launch close prevented dialog</ic-button\n    >\n    <ic-dialog\n      heading="This dialog can\'t be closed by clicking the background"\n      label="Background close prevented"\n      close-on-backdrop-click="false"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n  `,\n  name: "Background close prevented"\n}',...BackgroundClosePrevented.parameters?.docs?.source}}},Scrollable.parameters={...Scrollable.parameters,docs:{...Scrollable.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function showScrollableDialog() {\n        dialog = document.querySelector("ic-dialog");\n        dialog.open = true;\n      }\n      var select = document.querySelector("#scroll-sel");\n      select.options = [\n        { label: "Cappuccino", value: "Cap" },\n        { label: "Latte", value: "Lat" },\n        { label: "Americano", value: "Ame" },\n      ];\n      select.addEventListener("icChange", function (event) {\n        console.log(event.detail.value);\n      });\n    <\/script>\n    <ic-button variant="primary" onclick="showScrollableDialog()"\n      >Launch scrollable dialog</ic-button\n    >\n    <ic-dialog heading="This dialog has overflowing content" label="Scrollable">\n      <ic-typography>\n        Lorem Ipsum is simply dummy text of the printing and typesetting\n        industry. Lorem Ipsum has been the industry\'s standard dummy text ever\n        since the 1500s, when an unknown printer took a galley of type and\n        scrambled it to make a type specimen book.\n      </ic-typography>\n      <br />\n      <ic-select\n        id="scroll-sel"\n        label="What is your favourite coffee?"\n        placeholder="Placeholder goes here"\n      ></ic-select>\n      <br />\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n    </ic-dialog>\n  `,\n  name: "Scrollable"\n}',...Scrollable.parameters?.docs?.source}}},EventsExample.parameters={...EventsExample.parameters,docs:{...EventsExample.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function showDialog() {\n        dialog = document.querySelector("ic-dialog");\n        dialog.open = true;\n        document.addEventListener("icDialogConfirmed", dialogConfirmed);\n        document.addEventListener("icDialogCancelled", dialogCancelled);\n      }\n      function dialogConfirmed() {\n        dialog = document.querySelector("ic-dialog");\n        alert("Dialog confirmed");\n        dialog.open = false;\n        document.removeEventListener("icDialogConfirmed", dialogConfirmed);\n        document.removeEventListener("icDialogCancelled", dialogCancelled);\n      }\n      function dialogCancelled() {\n        alert("Dialog cancelled");\n        document.removeEventListener("icDialogConfirmed", dialogConfirmed);\n        document.removeEventListener("icDialogCancelled", dialogCancelled);\n      }\n    <\/script>\n    <ic-button variant="primary" onclick="showDialog()"\n      >Launch dialog</ic-button\n    >\n    <ic-dialog heading="This dialog utilises events" label="Events">\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n  `,\n  name: "Events example"\n}',...EventsExample.parameters?.docs?.source}}},Popover.parameters={...Popover.parameters,docs:{...Popover.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function dropdownItems() {\n        return Array.from(Array(10).keys()).map((i) => {\n          return {\n            label: "Item " + i,\n            value: "item-" + i,\n          };\n        });\n      }\n      document\n        .querySelector("#select-dialog-btn")\n        .addEventListener("click", () => {\n          document.querySelector("#select-dialog").open = true;\n        });\n      document\n        .querySelector("#search-dialog-btn")\n        .addEventListener("click", () => {\n          document.querySelector("#search-dialog").open = true;\n        });\n      document\n        .querySelector("#tooltip-dialog-btn")\n        .addEventListener("click", () => {\n          document.querySelector("#tooltip-dialog").open = true;\n        });\n      document.querySelector("#select-dropdown").options = dropdownItems();\n      document.querySelector("#search-dropdown").options = dropdownItems();\n      document.querySelector("#select-dropdown-2").options = dropdownItems();\n      document\n        .querySelector("#long-text-select-dialog-btn")\n        .addEventListener("click", () => {\n          document.querySelector("#long-text-select-dialog").open = true;\n        });\n      document\n        .querySelector("#popover-menu-dialog-btn")\n        .addEventListener("click", () => {\n          document.querySelector("#popover-menu-dialog").open = true;\n        });\n      document\n        .querySelector("#popover-menu-show-btn")\n        .addEventListener("click", () => {\n          document.querySelector("#popover-menu").open = true;\n        });\n    <\/script>\n    <div>\n      <ic-button id="select-dialog-btn">Select Dialog</ic-button>\n      <ic-button id="search-dialog-btn">Search Dialog</ic-button>\n      <ic-button id="tooltip-dialog-btn">Tooltip Dialog</ic-button>\n      <ic-button id="popover-menu-dialog-btn">Popover Menu Dialog</ic-button>\n      <ic-button id="long-text-select-dialog-btn"\n        >Long Text with Select Dialog</ic-button\n      >\n    </div>\n    <ic-dialog heading="Select" id="select-dialog">\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-select\n        id="select-dropdown"\n        label="What is your favourite coffee?"\n      ></ic-select>\n    </ic-dialog>\n    <ic-dialog heading="Search" id="search-dialog">\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-search-bar\n        id="search-dropdown"\n        label="What is your favourite coffee?"\n      ></ic-search-bar>\n    </ic-dialog>\n    <ic-dialog heading="Tooltip" id="tooltip-dialog">\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-tooltip\n        label="This is a description of the button"\n        target="test-button-default"\n        ><button\n          id="test-button-default"\n          aria-describedby="ic-tooltip-test-button-default"\n        >\n          Default\n        </button></ic-tooltip\n      >\n      <ic-button\n        variant="icon"\n        size="small"\n        aria-label="refresh"\n        id="testbutton"\n        ><svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          /></svg\n      ></ic-button>\n      <ic-chip label="Small" dismissible="true" size="small">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n    </ic-dialog>\n    <ic-dialog heading="Popover Menu" id="popover-menu-dialog">\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-button id="popover-menu-show-btn">Show popover</ic-button>\n      <ic-popover-menu\n        id="popover-menu"\n        anchor="popover-menu-show-btn"\n        aria-label="popover"\n      >\n        <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n        <ic-menu-group label="View">\n          <ic-menu-item label="Zoom in" keyboard-shortcut="Cmd+"></ic-menu-item>\n          <ic-menu-item\n            label="Zoom out"\n            keyboard-shortcut="Cmd-"\n          ></ic-menu-item>\n        </ic-menu-group>\n        <ic-menu-item label="Actions" submenu-trigger-for="abc"></ic-menu-item>\n        <ic-menu-item\n          label="Logout"\n          variant="destructive"\n          disabled="true"\n        ></ic-menu-item>\n      </ic-popover-menu>\n      <ic-popover-menu submenu-id="abc">\n        <ic-menu-item label="Edit"></ic-menu-item>\n        <ic-menu-item label="Find" submenu-trigger-for="abc123"></ic-menu-item>\n        <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n      </ic-popover-menu>\n      <ic-popover-menu submenu-id="abc123">\n        <ic-menu-item\n          disabled="true"\n          label="Search the web"\n          description="This will search the web to find the thing you are looking for."\n        ></ic-menu-item>\n        <ic-menu-item label="Find..."></ic-menu-item>\n        <ic-menu-item label="Find icons">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-menu-item>\n        <ic-menu-item\n          label="Show found results"\n          variant="toggle"\n        ></ic-menu-item>\n      </ic-popover-menu>\n    </ic-dialog>\n    <ic-dialog\n      heading="Long Text Select"\n      id="long-text-select-dialog"\n      disable-height-constraint="true"\n    >\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-select\n        id="select-dropdown-2"\n        label="What is your favourite coffee?"\n      ></ic-select>\n    </ic-dialog>\n  `,\n  name: "Popover"\n}',...Popover.parameters?.docs?.source}}},DisableHeightConstraint.parameters={...DisableHeightConstraint.parameters,docs:{...DisableHeightConstraint.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function dropdownItems() {\n        return Array.from(Array(10).keys()).map((i) => {\n          return {\n            label: "Item " + i,\n            value: "item-" + i,\n          };\n        });\n      }\n      document\n        .querySelector("#long-text-select-dialog-btn")\n        .addEventListener("click", () => {\n          document.querySelector("#long-text-select-dialog").showDialog();\n        });\n      document\n        .querySelector("#short-text-select-dialog-btn")\n        .addEventListener("click", () => {\n          document.querySelector("#short-text-select-dialog").open = true;\n        });\n      document.querySelector("#select-dropdown-2").options = dropdownItems();\n      document.querySelector("#select-dropdown-3").options = dropdownItems();\n    <\/script>\n    <div>\n      <ic-button id="long-text-select-dialog-btn"\n        >Long Text with Select Dialog</ic-button\n      >\n      <ic-button id="short-text-select-dialog-btn"\n        >Short Text with Select Dialog</ic-button\n      >\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-button id="long-text-select-dialog-btn"\n        >Long Text with Select Dialog</ic-button\n      >\n      <ic-button id="short-text-select-dialog-btn"\n        >Short Text with Select Dialog</ic-button\n      >\n    </div>\n    <ic-dialog\n      heading="Short Text Select"\n      label="test"\n      id="short-text-select-dialog"\n      disable-height-constraint="true"\n    >\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n      </ic-typography>\n      <ic-select\n        id="select-dropdown-3"\n        label="What is your favourite coffee?"\n      ></ic-select>\n    </ic-dialog>\n    <ic-dialog\n      heading="Long Text Select"\n      id="long-text-select-dialog"\n      disable-height-constraint="true"\n    >\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />\n        Why do we use it?<br /><br />\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, content here\', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for \'lorem ipsum\' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like).\n      </ic-typography>\n      <ic-select\n        id="select-dropdown-2"\n        label="What is your favourite coffee?"\n      ></ic-select>\n    </ic-dialog>\n  `,\n  name: "Disable Height Constraint"\n}',...DisableHeightConstraint.parameters?.docs?.source}}},DisableWidthConstraint.parameters={...DisableWidthConstraint.parameters,docs:{...DisableWidthConstraint.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      document\n        .querySelector("#full-width-dialog-btn")\n        .addEventListener("click", () => {\n          document.querySelector("#full-width-dialog").showDialog();\n        });\n    <\/script>\n    <div>\n      <ic-button id="full-width-dialog-btn">Full Width Text Dialog</ic-button>\n    </div>\n    <ic-dialog\n      heading="Full Width Text"\n      label="test"\n      id="full-width-dialog"\n      size="large"\n      disable-width-constraint="true"\n    >\n      <ic-typography>\n        It has survived not only five centuries, but also the leap into\n        electronic typesetting, remaining essentially unchanged. It was\n        popularised in the 1960s with the release of Letraset sheets containing\n        Lorem Ipsum passages, and more recently with desktop publishing software\n        like Aldus PageMaker including versions of Lorem Ipsum.\n      </ic-typography>\n    </ic-dialog>\n  `,\n  name: "Disable Width Constraint"\n}',...DisableWidthConstraint.parameters?.docs?.source}}},ShowHideInteractiveElements.parameters={...ShowHideInteractiveElements.parameters,docs:{...ShowHideInteractiveElements.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function showShowHideContentDialog() {\n        dialog = document\n          .querySelector("#show-hide-content-dialog")\n          .showDialog();\n      }\n      var btnShow = document.querySelector(".show");\n      btnShow.addEventListener("click", () => {\n        var el = document.createElement("ic-button");\n        el.id = "slotted-btn";\n        el.innerText = "Slotted element";\n        var childEl = document.createElement("ic-button");\n        childEl.id = "slotted-child-btn";\n        childEl.innerText = "Child of slotted element";\n        var base = document.querySelector("#base");\n        base.after(el);\n        setTimeout(() => base.appendChild(childEl), 2000);\n      });\n      var btnHide = document.querySelector(".hide");\n      btnHide.addEventListener("click", () => {\n        if (document.querySelector("#slotted-btn")) {\n          var btn = document.querySelector("#slotted-btn");\n          btn.remove();\n        }\n        if (document.querySelector("#slotted-child-btn")) {\n          var btn = document.querySelector("#slotted-child-btn");\n          setTimeout(() => btn.remove(), 2000);\n        }\n      });\n    <\/script>\n    <ic-button variant="primary" onclick="showShowHideContentDialog()"\n      >Launch show / hide content dialog</ic-button\n    >\n    <ic-dialog\n      heading="This dialog allows showing and hiding of content"\n      id="show-hide-content-dialog"\n    >\n      <ic-typography>\n        Demonstrates changes to slotted elements happening after first load.\n        <br />\n        The button which is a child of an existing slotted element will update\n        after a 2s delay.\n      </ic-typography>\n      <br />\n      <ic-button class="show">Show</ic-button>\n      <ic-button class="hide">Hide</ic-button>\n      <div id="base"></div>\n    </ic-dialog>\n  `,\n  name: "Show / hide interactive elements"\n}',...ShowHideInteractiveElements.parameters?.docs?.source}}},HiddenCloseButton.parameters={...HiddenCloseButton.parameters,docs:{...HiddenCloseButton.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function showHiddenCloseButtonDialog() {\n        dialog = document.querySelector("#hidden-close-button-dialog");\n        dialog.open = true;\n      }\n    <\/script>\n    <ic-button variant="primary" onclick="showHiddenCloseButtonDialog()"\n      >Launch dialog with hidden close button</ic-button\n    >\n    <ic-dialog\n      id="hidden-close-button-dialog"\n      heading="This dialog does not have a close button"\n      label="Hidden Close Button Dialog"\n      hide-close-button\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n  `,\n  name: "Hidden close button"\n}',...HiddenCloseButton.parameters?.docs?.source}}},AutoOpening.parameters={...AutoOpening.parameters,docs:{...AutoOpening.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function showAutoOpenCloseButtonDialog() {\n        dialog = document.querySelector("#auto-opening-dialog");\n        dialog.open = true;\n      }\n    <\/script>\n    <ic-button variant="primary" onclick="showAutoOpenCloseButtonDialog()"\n      >Launch auto opening dialog</ic-button\n    >\n    <ic-dialog\n      id="auto-opening-dialog"\n      heading="This dialog opens automatically using the open prop"\n      label="Auto opening dialog"\n      open\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>\n  `,\n  name: "Auto Opening"\n}',...AutoOpening.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-dialog\n      heading=${args.heading}\n      label=${args.label}\n      size=${args.size}\n      open=${args.open}\n      close-on-backdrop-click=${args.closeOnBackdropClick}\n      destructive=${args.destructive}\n      dismiss-label=${args.dismissLabel}\n      disable-height-constraint=${args.disableHeightConstraint}\n      disable-width-constraint=${args.disableWidthConstraint}\n      hide-close-button=${args.hideCloseButton}\n      buttons=${args.buttons}\n      id="medium-dialog"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor\n        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n        ut labore et dolore magna aliqua.\n      </ic-typography>\n    </ic-dialog>`,\n  args: defaultArgs,\n  argTypes: {\n    size: {\n      options: ["small", "medium", "large"],\n      control: {\n        type: "radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-dialog-ic-dialog-stories.c847859e.iframe.bundle.js.map