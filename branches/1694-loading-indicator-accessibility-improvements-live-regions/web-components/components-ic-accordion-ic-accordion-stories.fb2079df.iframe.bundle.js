/*! For license information please see components-ic-accordion-ic-accordion-stories.fb2079df.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2427,582,6199,6763],{"./src/components/ic-accordion/ic-accordion.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Expanded:()=>Expanded,GroupTitle:()=>GroupTitle,Icon:()=>Icon,Parent:()=>Parent,Playground:()=>Playground,SingleExpansion:()=>SingleExpansion,Sizes:()=>Sizes,SlottedHeadings:()=>SlottedHeadings,WithPopoverContent:()=>WithPopoverContent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Accordion",component:"ic-accordion"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,name:"Default"},Expanded={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-accordion expanded="true" heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,name:"Expanded"},Icon={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-accordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>`,name:"Icon"},GroupTitle={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-accordion-group label="Title of the Accordion Group">
      <ic-accordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`,name:"Group Title"},Sizes={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-accordion-group label="Small Accordion Group" size="small">
        <ic-accordion heading="Accordion 1">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Accordion 2">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
      </ic-accordion-group>
      <ic-accordion-group label="Default Accordion Group" size="medium">
        <ic-accordion heading="Accordion 1">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Accordion 2">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
      </ic-accordion-group>
      <ic-accordion-group label="Large Accordion Group" size="large">
        <ic-accordion heading="Accordion 1">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Accordion 2">
          <svg
            slot="icon"
            width="20"
            height="1em"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            />
          </svg>
          <ic-typography variant="body">
            This is an example of the main body text
          </ic-typography>
        </ic-accordion>
      </ic-accordion-group>`,name:"Sizes"},SingleExpansion={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-accordion-group
      label="Title of the Accordion Group"
      single-expansion="true"
    >
      <ic-accordion heading="Accordion 1">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`,name:"Single expansion"},Parent={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-accordion-group label="Title of the Accordion Group">
      <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-accordion heading="Child Accordion 1">
          <ic-typography variant="body">
            This is an example of the child main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Child Accordion 2">
          <ic-typography variant="body">
            This is an example of the child main body text
          </ic-typography>
        </ic-accordion>
        <ic-accordion heading="Child Accordion 3">
          <ic-typography variant="body">
            This is an example of the child main body text
          </ic-typography>
        </ic-accordion>
      </ic-accordion>
    </ic-accordion-group>`,name:"Parent"},Disabled={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2" disabled>
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 3">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,name:"Disabled"},WithPopoverContent={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-accordion expanded="true" heading="With Select">
      <ic-select
        id="select-1"
        label="What is your favourite coffee?"
      ></ic-select>
      <ic-button id="set-content-btn">Set Content</ic-button>
      <div id="extra-content" style="width: 50px"></div>
    </ic-accordion>
    <ic-accordion heading="With Tooltip">
      <ic-tooltip
        label="This is a description of the button"
        target="test-button-default"
      >
        <button
          id="test-button-default"
          aria-describedby="ic-tooltip-test-button-default"
        >
          Default
        </button>
      </ic-tooltip>
    </ic-accordion>
    <ic-accordion heading="With Search Bar">
      <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
    </ic-accordion>
    <ic-accordion heading="With Popover Menu">
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
      <ic-button id="button-1" onclick="buttonClick()">Show popover</ic-button>
    </ic-accordion>
    <ic-button id="with-dialog">With Dialog</ic-button>
    <ic-dialog
      heading="This is a medium dialog"
      label="medium"
      size="medium"
      id="medium-dialog"
    >
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
      <ic-typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ic-typography>
      <ic-accordion heading="Internal 1">
        <ic-typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ic-typography>
        <ic-select
          id="select-2"
          label="What is your favourite coffee?"
        ></ic-select>
      </ic-accordion>
      <ic-accordion heading="Internal 2">
        <ic-typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ic-typography>
        <ic-button>Click</ic-button>
      </ic-accordion>
    </ic-dialog>
    <script>
      document.querySelector("#with-dialog").addEventListener("click", () => {
        document.querySelector("#medium-dialog").open = true;
      });
      document.querySelector("#select-1").options = [
        { label: "Cappuccino", value: "Cap" },
        { label: "Latte", value: "Lat" },
        { label: "Americano", value: "Ame" },
      ];
      document.querySelector("#select-2").options = [
        { label: "Cappuccino", value: "Cap" },
        { label: "Latte", value: "Lat" },
        { label: "Americano", value: "Ame" },
      ];
      document.querySelector("ic-search-bar").options = [
        { label: "Espresso", value: "espresso" },
        { label: "Double Espresso", value: "doubleespresso" },
        { label: "Flat White", value: "flatwhite" },
        { label: "Cappuccino", value: "cappuccino" },
        { label: "Americano", value: "americano" },
        { label: "Ameno", value: "ameno" },
        { label: "Aicano", value: "acano" },
        { label: "Mocha", value: "mocha" },
      ];
      var icPopover = document.querySelector("ic-popover-menu");
      function buttonClick() {
        icPopover.open = true;
      }
      document
        .querySelector("#set-content-btn")
        .addEventListener("click", () => {
          document.querySelector("#extra-content").innerHTML =
            "This is a very very very lon sentence which should appear below without any issues";
        });
    </script>
  `,name:"With popover content"},SlottedHeadings={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-accordion-group>
      <ic-typography variant="h4" slot="label">
        Slotted group title
      </ic-typography>
      <ic-accordion>
        <ic-typography variant="h5" slot="heading">
          Slotted heading
        </ic-typography>
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`,name:"Slotted headings"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-accordion-group
      accessible-button-label=${args.accessibleButtonLabel}
      label=${args.label}
      expanded=${args.expanded}
      single-expansion=${args.singleExpansion}
      size=${args.size}
      theme=${args.theme}
    >
      <ic-accordion
        heading=${args.heading}
        disabled=${args.disabled}
        expanded=${args.expandedAccordion}
        size=${args.sizeAccordion}
        message=${args.message}
        theme=${args.themeAccordion}
      >
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <svg
          slot="icon"
          width="20"
          height="1em"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
        <ic-typography variant="body">
          This is an example of the main body text
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`,args:{accessibleButtonLabel:"accordions",expanded:!1,label:"Accordion group",singleExpansion:!1,size:"medium",disabled:!1,heading:"Accordion 1",message:"This is an example of the main body text.",theme:"inherit",expandedAccordion:!1,sizeAccordion:"medium",themeAccordion:"inherit"},name:"Playground",argTypes:{size:{options:["small","medium","large"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},sizeAccordion:{options:["small","medium","large"],control:{type:"inline-radio"}},themeAccordion:{options:["inherit","light","dark"],control:{type:"inline-radio"}}}},__namedExportsOrder=["Default","Expanded","Icon","GroupTitle","Sizes","SingleExpansion","Parent","Disabled","WithPopoverContent","SlottedHeadings","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-accordion heading="Accordion 1">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>`,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Expanded.parameters={...Expanded.parameters,docs:{...Expanded.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-accordion expanded="true" heading="Accordion 1">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>`,\n  name: "Expanded"\n}',...Expanded.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-accordion heading="Accordion 1">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>`,\n  name: "Icon"\n}',...Icon.parameters?.docs?.source}}},GroupTitle.parameters={...GroupTitle.parameters,docs:{...GroupTitle.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-accordion-group label="Title of the Accordion Group">\n      <ic-accordion heading="Accordion 1">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n    </ic-accordion-group>`,\n  name: "Group Title"\n}',...GroupTitle.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-accordion-group label="Small Accordion Group" size="small">\n        <ic-accordion heading="Accordion 1">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Accordion 2">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion-group>\n      <ic-accordion-group label="Default Accordion Group" size="medium">\n        <ic-accordion heading="Accordion 1">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Accordion 2">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion-group>\n      <ic-accordion-group label="Large Accordion Group" size="large">\n        <ic-accordion heading="Accordion 1">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Accordion 2">\n          <svg\n            slot="icon"\n            width="20"\n            height="1em"\n            viewBox="0 0 512 512"\n            fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n            />\n          </svg>\n          <ic-typography variant="body">\n            This is an example of the main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion-group>`,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},SingleExpansion.parameters={...SingleExpansion.parameters,docs:{...SingleExpansion.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-accordion-group\n      label="Title of the Accordion Group"\n      single-expansion="true"\n    >\n      <ic-accordion heading="Accordion 1">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n    </ic-accordion-group>`,\n  name: "Single expansion"\n}',...SingleExpansion.parameters?.docs?.source}}},Parent.parameters={...Parent.parameters,docs:{...Parent.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-accordion-group label="Title of the Accordion Group">\n      <ic-accordion heading="Accordion 1">\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <ic-accordion heading="Child Accordion 1">\n          <ic-typography variant="body">\n            This is an example of the child main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Child Accordion 2">\n          <ic-typography variant="body">\n            This is an example of the child main body text\n          </ic-typography>\n        </ic-accordion>\n        <ic-accordion heading="Child Accordion 3">\n          <ic-typography variant="body">\n            This is an example of the child main body text\n          </ic-typography>\n        </ic-accordion>\n      </ic-accordion>\n    </ic-accordion-group>`,\n  name: "Parent"\n}',...Parent.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-accordion heading="Accordion 1">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2" disabled>\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 3">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>`,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},WithPopoverContent.parameters={...WithPopoverContent.parameters,docs:{...WithPopoverContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-accordion expanded="true" heading="With Select">\n      <ic-select\n        id="select-1"\n        label="What is your favourite coffee?"\n      ></ic-select>\n      <ic-button id="set-content-btn">Set Content</ic-button>\n      <div id="extra-content" style="width: 50px"></div>\n    </ic-accordion>\n    <ic-accordion heading="With Tooltip">\n      <ic-tooltip\n        label="This is a description of the button"\n        target="test-button-default"\n      >\n        <button\n          id="test-button-default"\n          aria-describedby="ic-tooltip-test-button-default"\n        >\n          Default\n        </button>\n      </ic-tooltip>\n    </ic-accordion>\n    <ic-accordion heading="With Search Bar">\n      <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>\n    </ic-accordion>\n    <ic-accordion heading="With Popover Menu">\n      <ic-popover-menu anchor="button-1" aria-label="popover">\n        <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n        <ic-menu-group label="View">\n          <ic-menu-item\n            label="Zoom in"\n            keyboard-shortcut-label="Cmd+"\n          ></ic-menu-item>\n          <ic-menu-item\n            label="Zoom out"\n            keyboard-shortcut-label="Cmd-"\n          ></ic-menu-item>\n        </ic-menu-group>\n        <ic-menu-item label="Actions" submenu-trigger-for="abc"></ic-menu-item>\n        <ic-menu-item\n          label="Logout"\n          variant="destructive"\n          disabled="true"\n        ></ic-menu-item>\n      </ic-popover-menu>\n      <ic-popover-menu submenu-id="abc">\n        <ic-menu-item label="Edit"></ic-menu-item>\n        <ic-menu-item label="Find" submenu-trigger-for="abc123"></ic-menu-item>\n        <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n      </ic-popover-menu>\n      <ic-popover-menu submenu-id="abc123">\n        <ic-menu-item\n          disabled="true"\n          label="Search the web"\n          description="This will search the web to find the thing you are looking for."\n        ></ic-menu-item>\n        <ic-menu-item label="Find..."></ic-menu-item>\n        <ic-menu-item label="Find icons">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-menu-item>\n        <ic-menu-item\n          label="Show found results"\n          variant="toggle"\n        ></ic-menu-item>\n      </ic-popover-menu>\n      <ic-button id="button-1" onclick="buttonClick()">Show popover</ic-button>\n    </ic-accordion>\n    <ic-button id="with-dialog">With Dialog</ic-button>\n    <ic-dialog\n      heading="This is a medium dialog"\n      label="medium"\n      size="medium"\n      id="medium-dialog"\n    >\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n      <ic-typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </ic-typography>\n      <ic-accordion heading="Internal 1">\n        <ic-typography>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </ic-typography>\n        <ic-select\n          id="select-2"\n          label="What is your favourite coffee?"\n        ></ic-select>\n      </ic-accordion>\n      <ic-accordion heading="Internal 2">\n        <ic-typography>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </ic-typography>\n        <ic-button>Click</ic-button>\n      </ic-accordion>\n    </ic-dialog>\n    <script>\n      document.querySelector("#with-dialog").addEventListener("click", () => {\n        document.querySelector("#medium-dialog").open = true;\n      });\n      document.querySelector("#select-1").options = [\n        { label: "Cappuccino", value: "Cap" },\n        { label: "Latte", value: "Lat" },\n        { label: "Americano", value: "Ame" },\n      ];\n      document.querySelector("#select-2").options = [\n        { label: "Cappuccino", value: "Cap" },\n        { label: "Latte", value: "Lat" },\n        { label: "Americano", value: "Ame" },\n      ];\n      document.querySelector("ic-search-bar").options = [\n        { label: "Espresso", value: "espresso" },\n        { label: "Double Espresso", value: "doubleespresso" },\n        { label: "Flat White", value: "flatwhite" },\n        { label: "Cappuccino", value: "cappuccino" },\n        { label: "Americano", value: "americano" },\n        { label: "Ameno", value: "ameno" },\n        { label: "Aicano", value: "acano" },\n        { label: "Mocha", value: "mocha" },\n      ];\n      var icPopover = document.querySelector("ic-popover-menu");\n      function buttonClick() {\n        icPopover.open = true;\n      }\n      document\n        .querySelector("#set-content-btn")\n        .addEventListener("click", () => {\n          document.querySelector("#extra-content").innerHTML =\n            "This is a very very very lon sentence which should appear below without any issues";\n        });\n    <\/script>\n  `,\n  name: "With popover content"\n}',...WithPopoverContent.parameters?.docs?.source}}},SlottedHeadings.parameters={...SlottedHeadings.parameters,docs:{...SlottedHeadings.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-accordion-group>\n      <ic-typography variant="h4" slot="label">\n        Slotted group title\n      </ic-typography>\n      <ic-accordion>\n        <ic-typography variant="h5" slot="heading">\n          Slotted heading\n        </ic-typography>\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <ic-typography variant="body">\n          This is an example of the main body text.\n        </ic-typography>\n      </ic-accordion>\n    </ic-accordion-group>`,\n  name: "Slotted headings"\n}',...SlottedHeadings.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-accordion-group\n      accessible-button-label=${args.accessibleButtonLabel}\n      label=${args.label}\n      expanded=${args.expanded}\n      single-expansion=${args.singleExpansion}\n      size=${args.size}\n      theme=${args.theme}\n    >\n      <ic-accordion\n        heading=${args.heading}\n        disabled=${args.disabled}\n        expanded=${args.expandedAccordion}\n        size=${args.sizeAccordion}\n        message=${args.message}\n        theme=${args.themeAccordion}\n      >\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n      </ic-accordion>\n      <ic-accordion heading="Accordion 2">\n        <svg\n          slot="icon"\n          width="20"\n          height="1em"\n          viewBox="0 0 512 512"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"\n          />\n        </svg>\n        <ic-typography variant="body">\n          This is an example of the main body text\n        </ic-typography>\n      </ic-accordion>\n    </ic-accordion-group>`,\n  args: defaultArgs,\n  name: "Playground",\n  argTypes: {\n    size: {\n      options: ["small", "medium", "large"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    sizeAccordion: {\n      options: ["small", "medium", "large"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    themeAccordion: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    }\n  }\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-accordion-ic-accordion-stories.fb2079df.iframe.bundle.js.map