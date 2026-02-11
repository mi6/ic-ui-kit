var u=Object.freeze,x=Object.defineProperty;var y=(o,v)=>u(x(o,"raw",{value:u(v||o.slice())}));import{x as i}from"./lit-html-CWQq0DyO.js";const w={accessibleButtonLabel:"accordions",expanded:!1,label:"Accordion group",singleExpansion:!1,size:"medium",disabled:!1,heading:"Accordion 1",message:"This is an example of the main body text.",theme:"inherit",expandedAccordion:!1,sizeAccordion:"medium",themeAccordion:"inherit"},L={title:"Web Components/Accordion",component:"ic-accordion"},n={render:()=>i` <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,name:"Default"},e={render:()=>i` <ic-accordion expanded="true" heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>`,name:"Expanded"},c={render:()=>i` <ic-accordion heading="Accordion 1">
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
      </ic-accordion>`,name:"Icon"},a={render:()=>i` <ic-accordion-group label="Title of the Accordion Group">
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
    </ic-accordion-group>`,name:"Group Title"},t={render:()=>i` <ic-accordion-group label="Small Accordion Group" size="small">
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
      </ic-accordion-group>`,name:"Sizes"},r={render:()=>i` <ic-accordion-group
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
    </ic-accordion-group>`,name:"Single expansion"},d={render:()=>i` <ic-accordion-group label="Title of the Accordion Group">
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
    </ic-accordion-group>`,name:"Parent"},l={render:()=>i` <ic-accordion heading="Accordion 1">
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
      </ic-accordion>`,name:"Disabled"};var b;const s={render:()=>i(b||(b=y([`
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
    <\/script>
  `]))),name:"With popover content"},p={render:()=>i`<ic-accordion-group>
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
    </ic-accordion-group>`,name:"Slotted headings"},h={render:()=>i` <ic-accordion-group label="Title of the Accordion Group">
      <span slot="accessibleButtonLabel"> accordions </span>
      <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>`,name:"Accessible button label slot"},g="inline-radio",m={render:o=>i`<ic-accordion-group
      accessible-button-label=${o.accessibleButtonLabel}
      label=${o.label}
      expanded=${o.expanded}
      single-expansion=${o.singleExpansion}
      size=${o.size}
      theme=${o.theme}
    >
      <ic-accordion
        heading=${o.heading}
        disabled=${o.disabled}
        expanded=${o.expandedAccordion}
        size=${o.sizeAccordion}
        message=${o.message}
        theme=${o.themeAccordion}
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
    </ic-accordion-group>`,args:w,name:"Playground",argTypes:{size:{options:["small","medium","large"],control:{type:g}},theme:{options:["inherit","light","dark"],control:{type:g}},sizeAccordion:{options:["small","medium","large"],control:{type:g}},themeAccordion:{options:["inherit","light","dark"],control:{type:g}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>\`,
  name: "Default"
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-accordion expanded="true" heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>\`,
  name: "Expanded"
}`,...e.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-accordion heading="Accordion 1">
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
      </ic-accordion>\`,
  name: "Icon"
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-accordion-group label="Title of the Accordion Group">
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
    </ic-accordion-group>\`,
  name: "Group Title"
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-accordion-group label="Small Accordion Group" size="small">
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
      </ic-accordion-group>\`,
  name: "Sizes"
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-accordion-group
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
    </ic-accordion-group>\`,
  name: "Single expansion"
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-accordion-group label="Title of the Accordion Group">
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
    </ic-accordion-group>\`,
  name: "Parent"
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-accordion heading="Accordion 1">
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
      </ic-accordion>\`,
  name: "Disabled"
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
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
    <\/script>
  \`,
  name: "With popover content"
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-accordion-group>
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
    </ic-accordion-group>\`,
  name: "Slotted headings"
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-accordion-group label="Title of the Accordion Group">
      <span slot="accessibleButtonLabel"> accordions </span>
      <ic-accordion heading="Accordion 1">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
      <ic-accordion heading="Accordion 2">
        <ic-typography variant="body">
          This is an example of the main body text.
        </ic-typography>
      </ic-accordion>
    </ic-accordion-group>\`,
  name: "Accessible button label slot"
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-accordion-group
      accessible-button-label=\${args.accessibleButtonLabel}
      label=\${args.label}
      expanded=\${args.expanded}
      single-expansion=\${args.singleExpansion}
      size=\${args.size}
      theme=\${args.theme}
    >
      <ic-accordion
        heading=\${args.heading}
        disabled=\${args.disabled}
        expanded=\${args.expandedAccordion}
        size=\${args.sizeAccordion}
        message=\${args.message}
        theme=\${args.themeAccordion}
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
    </ic-accordion-group>\`,
  args: defaultArgs,
  name: "Playground",
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: inlineRadioSelector
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: inlineRadioSelector
      }
    },
    sizeAccordion: {
      options: ["small", "medium", "large"],
      control: {
        type: inlineRadioSelector
      }
    },
    themeAccordion: {
      options: ["inherit", "light", "dark"],
      control: {
        type: inlineRadioSelector
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const f=["Default","Expanded","Icon","GroupTitle","Sizes","SingleExpansion","Parent","Disabled","WithPopoverContent","SlottedHeadings","AccessibleButtonLabelSlot","Playground"],z=Object.freeze(Object.defineProperty({__proto__:null,AccessibleButtonLabelSlot:h,Default:n,Disabled:l,Expanded:e,GroupTitle:a,Icon:c,Parent:d,Playground:m,SingleExpansion:r,Sizes:t,SlottedHeadings:p,WithPopoverContent:s,__namedExportsOrder:f,default:L},Symbol.toStringTag,{value:"Module"}));export{z as I};
