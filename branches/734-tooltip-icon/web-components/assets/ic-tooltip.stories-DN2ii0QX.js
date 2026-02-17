var f=Object.freeze,L=Object.defineProperty;var g=(t,T)=>f(L(t,"raw",{value:f(T||t.slice())}));import{x as o}from"./lit-html-CWQq0DyO.js";const w={disableHover:!1,maxLines:3,placement:"bottom",label:"This is a description of the button",theme:"inherit",fixedPositioning:!1,tooltipIconSlot:"tooltip-icon",tooltipIconAltText:""},$={title:"Web Components/Tooltip",component:"ic-tooltip"},i={render:()=>o`<ic-tooltip
        label="This is a description of the button"
        id="ic-tooltip-1"
        ><button aria-describedby="ic-tooltip-1">Default</button></ic-tooltip
      >
      <ic-tooltip label="This is a description of the button" id="ic-tooltip-2"
        ><ic-button aria-describedby="ic-tooltip-2">
          Default
        </ic-button></ic-tooltip
      > `,name:"Default",height:"100px"};var y;const e={render:()=>o(y||(y=g([`<script>
        let display = true;
        document
          .querySelector("#clickMe")
          .addEventListener("click", handleDisplay);
        const tooltip = document.querySelector("ic-tooltip");
        function handleDisplay() {
          tooltip.displayTooltip(display, display);
          display = !display;
        }
      <\/script>
      <button id="clickMe">Show tooltip</button>
      <ic-tooltip
        label="This is a description of the button"
        id="ic-tooltip-test-button-default"
        ><button aria-describedby="ic-tooltip-test-button-default">
          Default
        </button></ic-tooltip
      >`]))),name:"Using external method",height:"100px"},n={render:()=>o`<ic-tooltip
      label="This shows 'Code' has been copied"
      id="ic-tooltip-test-button-disable-hover"
      disable-hover="true"
      ><button
        aria-labelledby="ic-tooltip-test-button-disable-hover"
        onclick="navigator.clipboard.writeText('Code')"
      >
        Show tooltip
      </button></ic-tooltip
    >`,name:"Disabled Hover",height:"100px"},l={render:()=>o` <div style="margin: 40px">
      <ic-tooltip
        placement="top-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top-start"
      >
        <button aria-describedby="ic-tooltip-test-button-top-start">
          Top start
        </button>
      </ic-tooltip>
      <ic-tooltip
        placement="top"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top"
      >
        <button aria-describedby="ic-tooltip-test-button-top">Top</button>
      </ic-tooltip>
      <ic-tooltip
        placement="top-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top-end"
      >
        <button aria-describedby="ic-tooltip-test-button-top-end">
          Top end
        </button></ic-tooltip
      >
    </div>`,name:"Top placements"},a={render:()=>o` <div style="margin: 40px">
      <ic-tooltip
        placement="bottom-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom-start"
      >
        <button aria-describedby="ic-tooltip-test-button-bottom-start">
          Bottom start
        </button>
      </ic-tooltip>
      <ic-tooltip
        placement="bottom"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom"
      >
        <button aria-describedby="ic-tooltip-test-button-bottom">Bottom</button>
      </ic-tooltip>
      <ic-tooltip
        placement="bottom-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom-end"
      >
        <button aria-describedby="ic-tooltip-test-button-bottom-end">
          Bottom end
        </button></ic-tooltip
      >
    </div>`,name:"Bottom placements"},s={render:()=>o` <div style="margin: 40px">
      <ic-tooltip
        placement="right-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right-start"
      >
        <button aria-describedby="ic-tooltip-test-button-right-start">
          Right start
        </button>
      </ic-tooltip>
      <ic-tooltip
        placement="right"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right"
      >
        <button aria-describedby="ic-tooltip-test-button-right">Right</button>
      </ic-tooltip>
      <ic-tooltip
        placement="right-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right-end"
      >
        <button aria-describedby="ic-tooltip-test-button-right-end">
          Right end
        </button></ic-tooltip
      >
    </div>`,name:"Right placements"},r={render:()=>o` <div style="margin-left: 400px">
      <ic-tooltip
        placement="left-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left-start"
      >
        <button aria-describedby="ic-tooltip-test-button-left-start">
          Left start
        </button>
      </ic-tooltip>
      <ic-tooltip
        placement="left"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left"
      >
        <button aria-describedby="ic-tooltip-test-button-left">Left</button>
      </ic-tooltip>
      <ic-tooltip
        placement="left-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left-end"
      >
        <button aria-describedby="ic-tooltip-test-button-left-end">
          Left end
        </button></ic-tooltip
      >
    </div>`,name:"Left placements"},c={render:()=>o`
    <ic-tooltip
      label="This is a tooltip with a longer label and an icon to show how the text is aligned when there is an icon present."
      id="ic-tooltip-with-icon"
      icon-alt-text="Check mark icon"
    >
      <svg
        slot="tooltip-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
      </svg>
      <button aria-describedby="ic-tooltip-with-icon">Icon on Tooltip</button>
    </ic-tooltip>
  `,name:"With Icon"},p={render:()=>o`<ic-tooltip
      label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the max-lines property. The number of lines in the text is clamped to the number passed through the max-lines property."
      max-lines="3"
      id="ic-tooltip-test-button-truncation"
      ><button aria-describedby="ic-tooltip-test-button-truncation">
        Default
      </button></ic-tooltip
    >`,name:"Truncation",height:"100px"},d={render:()=>o`<div style="height: 100px;background-color:#333333;">
      <ic-tooltip
        label="This is a description of the button"
        id="ic-tooltip-test-button-dark"
      >
        <button aria-describedby="ic-tooltip-test-button-dark">Default</button>
      </ic-tooltip>
    </div>`,name:"Dark background"};var v;const b={render:()=>o(v||(v=g([`<script>
        var icButton = document.querySelector("#testbutton");
        function handleClick() {
          icButton.ariaLabel = "really long message";
        }
      <\/script>
      <div style="display: flex;justify-content:flex-end;">
        <ic-button
          variant="icon-primary"
          aria-label="refresh"
          id="testbutton"
          onclick="handleClick()"
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
      </div> `]))),name:"Changing label"};var x;const u={render:()=>o(x||(x=g([` <script>
        var switchEl = document.querySelector("ic-switch");
        var tooltipEl = document.querySelector("ic-tooltip");
        switchEl.addEventListener("icChange", (ev) => {
          tooltipEl.fixedPositioning = ev.detail.checked;
        });
      <\/script>
      <div style="display:flex; flex-direction:column; gap:var(--ic-space-xs)">
        <ic-typography>
          Toggle the fixed positioning switch and hover over the button to see
          it take effect
        </ic-typography>
        <div
          style="display:flex; flex-direction:column; gap:var(--ic-space-xs); padding:var(--ic-space-md); border:1px solid var(--ic-color-text-primary); overflow:hidden; width:100px; position:relative"
        >
          <ic-tooltip
            label="This is a tooltip with a long label"
            id="ic-tooltip-test-button-1"
          >
            <ic-button aria-describedby="ic-tooltip-test-button-1">
              Button
            </ic-button>
          </ic-tooltip>
        </div>
        <ic-switch label="Fixed tooltip positioning"></ic-switch>
      </div>`]))),name:"Positioning strategy"},h={render:t=>o`<div style="margin: 250px">
      <ic-tooltip
        label=${t.label}
        placement=${t.placement}
        max-lines=${t.maxLines}
        disable-hover=${t.disableHover}
        id="ic-tooltip-1"
        theme=${t.theme}
        fixed-positioning=${t.fixedPositioning}
      >
        <button aria-describedby="ic-tooltip-1">Native</button>
      </ic-tooltip>
      <ic-tooltip
        label=${t.label}
        placement=${t.placement}
        max-lines=${t.maxLines}
        disable-hover=${t.disableHover}
        id="ic-tooltip-2"
        theme=${t.theme}
        fixed-positioning=${t.fixedPositioning}
      >
        <ic-button aria-describedby="ic-tooltip-2"> ICDS </ic-button>
      </ic-tooltip>
    </div> `,args:w,argTypes:{placement:{options:["bottom","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom-start","left-end","left","left-start"],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},m={render:t=>o`<div style="margin: 250px">
      <ic-tooltip
        label=${t.label}
        icon-alt-text=${t.tooltipIconAltText}
        tooltip-icon-slot=${t.tooltipIconSlot}
        placement=${t.placement}
        max-lines=${t.maxLines}
        disable-hover=${t.disableHover}
        id="ic-tooltip-1"
        theme=${t.theme}
        fixed-positioning=${t.fixedPositioning}
      >
        <svg
          slot=${t.tooltipIconSlot}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"
          />
        </svg>
        <button aria-describedby="ic-tooltip-1">Native</button>
      </ic-tooltip>
      <ic-tooltip
        label=${t.label}
        icon-alt-text=${t.tooltipIconAltText}
        tooltip-icon-slot=${t.tooltipIconSlot}
        placement=${t.placement}
        max-lines=${t.maxLines}
        disable-hover=${t.disableHover}
        id="ic-tooltip-2"
        theme=${t.theme}
        fixed-positioning=${t.fixedPositioning}
      >
        <svg
          slot=${t.tooltipIconSlot}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"
          />
        </svg>
        <ic-button aria-describedby="ic-tooltip-2"> ICDS </ic-button>
      </ic-tooltip>
    </div> `,args:w,argTypes:{placement:{options:["bottom","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom-start","left-end","left","left-start"],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},tooltipIconSlot:{options:["tooltip-icon",""],control:{type:"select"}}},name:"Playground With Icon"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-tooltip
        label="This is a description of the button"
        id="ic-tooltip-1"
        ><button aria-describedby="ic-tooltip-1">Default</button></ic-tooltip
      >
      <ic-tooltip label="This is a description of the button" id="ic-tooltip-2"
        ><ic-button aria-describedby="ic-tooltip-2">
          Default
        </ic-button></ic-tooltip
      > \`,
  name: "Default",
  height: "100px"
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`<script>
        let display = true;
        document
          .querySelector("#clickMe")
          .addEventListener("click", handleDisplay);
        const tooltip = document.querySelector("ic-tooltip");
        function handleDisplay() {
          tooltip.displayTooltip(display, display);
          display = !display;
        }
      <\/script>
      <button id="clickMe">Show tooltip</button>
      <ic-tooltip
        label="This is a description of the button"
        id="ic-tooltip-test-button-default"
        ><button aria-describedby="ic-tooltip-test-button-default">
          Default
        </button></ic-tooltip
      >\`,
  name: "Using external method",
  height: "100px"
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-tooltip
      label="This shows 'Code' has been copied"
      id="ic-tooltip-test-button-disable-hover"
      disable-hover="true"
      ><button
        aria-labelledby="ic-tooltip-test-button-disable-hover"
        onclick="navigator.clipboard.writeText('Code')"
      >
        Show tooltip
      </button></ic-tooltip
    >\`,
  name: "Disabled Hover",
  height: "100px"
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\` <div style="margin: 40px">
      <ic-tooltip
        placement="top-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top-start"
      >
        <button aria-describedby="ic-tooltip-test-button-top-start">
          Top start
        </button>
      </ic-tooltip>
      <ic-tooltip
        placement="top"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top"
      >
        <button aria-describedby="ic-tooltip-test-button-top">Top</button>
      </ic-tooltip>
      <ic-tooltip
        placement="top-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-top-end"
      >
        <button aria-describedby="ic-tooltip-test-button-top-end">
          Top end
        </button></ic-tooltip
      >
    </div>\`,
  name: "Top placements"
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\` <div style="margin: 40px">
      <ic-tooltip
        placement="bottom-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom-start"
      >
        <button aria-describedby="ic-tooltip-test-button-bottom-start">
          Bottom start
        </button>
      </ic-tooltip>
      <ic-tooltip
        placement="bottom"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom"
      >
        <button aria-describedby="ic-tooltip-test-button-bottom">Bottom</button>
      </ic-tooltip>
      <ic-tooltip
        placement="bottom-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-bottom-end"
      >
        <button aria-describedby="ic-tooltip-test-button-bottom-end">
          Bottom end
        </button></ic-tooltip
      >
    </div>\`,
  name: "Bottom placements"
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\` <div style="margin: 40px">
      <ic-tooltip
        placement="right-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right-start"
      >
        <button aria-describedby="ic-tooltip-test-button-right-start">
          Right start
        </button>
      </ic-tooltip>
      <ic-tooltip
        placement="right"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right"
      >
        <button aria-describedby="ic-tooltip-test-button-right">Right</button>
      </ic-tooltip>
      <ic-tooltip
        placement="right-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-right-end"
      >
        <button aria-describedby="ic-tooltip-test-button-right-end">
          Right end
        </button></ic-tooltip
      >
    </div>\`,
  name: "Right placements"
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\` <div style="margin-left: 400px">
      <ic-tooltip
        placement="left-start"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left-start"
      >
        <button aria-describedby="ic-tooltip-test-button-left-start">
          Left start
        </button>
      </ic-tooltip>
      <ic-tooltip
        placement="left"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left"
      >
        <button aria-describedby="ic-tooltip-test-button-left">Left</button>
      </ic-tooltip>
      <ic-tooltip
        placement="left-end"
        label="This is a description of the button"
        id="ic-tooltip-test-button-left-end"
      >
        <button aria-describedby="ic-tooltip-test-button-left-end">
          Left end
        </button></ic-tooltip
      >
    </div>\`,
  name: "Left placements"
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-tooltip
      label="This is a tooltip with a longer label and an icon to show how the text is aligned when there is an icon present."
      id="ic-tooltip-with-icon"
      icon-alt-text="Check mark icon"
    >
      <svg
        slot="tooltip-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
      </svg>
      <button aria-describedby="ic-tooltip-with-icon">Icon on Tooltip</button>
    </ic-tooltip>
  \`,
  name: "With Icon"
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-tooltip
      label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the max-lines property. The number of lines in the text is clamped to the number passed through the max-lines property."
      max-lines="3"
      id="ic-tooltip-test-button-truncation"
      ><button aria-describedby="ic-tooltip-test-button-truncation">
        Default
      </button></ic-tooltip
    >\`,
  name: "Truncation",
  height: "100px"
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height: 100px;background-color:#333333;">
      <ic-tooltip
        label="This is a description of the button"
        id="ic-tooltip-test-button-dark"
      >
        <button aria-describedby="ic-tooltip-test-button-dark">Default</button>
      </ic-tooltip>
    </div>\`,
  name: "Dark background"
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<script>
        var icButton = document.querySelector("#testbutton");
        function handleClick() {
          icButton.ariaLabel = "really long message";
        }
      <\/script>
      <div style="display: flex;justify-content:flex-end;">
        <ic-button
          variant="icon-primary"
          aria-label="refresh"
          id="testbutton"
          onclick="handleClick()"
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
      </div> \`,
  name: "Changing label"
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\` <script>
        var switchEl = document.querySelector("ic-switch");
        var tooltipEl = document.querySelector("ic-tooltip");
        switchEl.addEventListener("icChange", (ev) => {
          tooltipEl.fixedPositioning = ev.detail.checked;
        });
      <\/script>
      <div style="display:flex; flex-direction:column; gap:var(--ic-space-xs)">
        <ic-typography>
          Toggle the fixed positioning switch and hover over the button to see
          it take effect
        </ic-typography>
        <div
          style="display:flex; flex-direction:column; gap:var(--ic-space-xs); padding:var(--ic-space-md); border:1px solid var(--ic-color-text-primary); overflow:hidden; width:100px; position:relative"
        >
          <ic-tooltip
            label="This is a tooltip with a long label"
            id="ic-tooltip-test-button-1"
          >
            <ic-button aria-describedby="ic-tooltip-test-button-1">
              Button
            </ic-button>
          </ic-tooltip>
        </div>
        <ic-switch label="Fixed tooltip positioning"></ic-switch>
      </div>\`,
  name: "Positioning strategy"
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => html\`<div style="margin: 250px">
      <ic-tooltip
        label=\${args.label}
        placement=\${args.placement}
        max-lines=\${args.maxLines}
        disable-hover=\${args.disableHover}
        id="ic-tooltip-1"
        theme=\${args.theme}
        fixed-positioning=\${args.fixedPositioning}
      >
        <button aria-describedby="ic-tooltip-1">Native</button>
      </ic-tooltip>
      <ic-tooltip
        label=\${args.label}
        placement=\${args.placement}
        max-lines=\${args.maxLines}
        disable-hover=\${args.disableHover}
        id="ic-tooltip-2"
        theme=\${args.theme}
        fixed-positioning=\${args.fixedPositioning}
      >
        <ic-button aria-describedby="ic-tooltip-2"> ICDS </ic-button>
      </ic-tooltip>
    </div> \`,
  args: defaultArgs,
  argTypes: {
    placement: {
      options: ["bottom", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom-start", "left-end", "left", "left-start"],
      control: {
        type: "select"
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => html\`<div style="margin: 250px">
      <ic-tooltip
        label=\${args.label}
        icon-alt-text=\${args.tooltipIconAltText}
        tooltip-icon-slot=\${args.tooltipIconSlot}
        placement=\${args.placement}
        max-lines=\${args.maxLines}
        disable-hover=\${args.disableHover}
        id="ic-tooltip-1"
        theme=\${args.theme}
        fixed-positioning=\${args.fixedPositioning}
      >
        <svg
          slot=\${args.tooltipIconSlot}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"
          />
        </svg>
        <button aria-describedby="ic-tooltip-1">Native</button>
      </ic-tooltip>
      <ic-tooltip
        label=\${args.label}
        icon-alt-text=\${args.tooltipIconAltText}
        tooltip-icon-slot=\${args.tooltipIconSlot}
        placement=\${args.placement}
        max-lines=\${args.maxLines}
        disable-hover=\${args.disableHover}
        id="ic-tooltip-2"
        theme=\${args.theme}
        fixed-positioning=\${args.fixedPositioning}
      >
        <svg
          slot=\${args.tooltipIconSlot}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"
          />
        </svg>
        <ic-button aria-describedby="ic-tooltip-2"> ICDS </ic-button>
      </ic-tooltip>
    </div> \`,
  args: defaultArgs,
  argTypes: {
    placement: {
      options: ["bottom", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom-start", "left-end", "left", "left-start"],
      control: {
        type: "select"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    },
    tooltipIconSlot: {
      options: ["tooltip-icon", ""],
      control: {
        type: "select"
      }
    }
  },
  name: "Playground With Icon"
}`,...m.parameters?.docs?.source}}};const S=["Default","UsingExternalMethod","DisabledHover","TopPlacements","BottomPlacements","RightPlacements","LeftPlacements","TooltipWithSlottedIcon","Truncation","DarkBackground","ChangingLabel","PositioningStrategy","Playground","PlaygroundWithIcon"],P=Object.freeze(Object.defineProperty({__proto__:null,BottomPlacements:a,ChangingLabel:b,DarkBackground:d,Default:i,DisabledHover:n,LeftPlacements:r,Playground:h,PlaygroundWithIcon:m,PositioningStrategy:u,RightPlacements:s,TooltipWithSlottedIcon:c,TopPlacements:l,Truncation:p,UsingExternalMethod:e,__namedExportsOrder:S,default:$},Symbol.toStringTag,{value:"Module"}));export{P as I};
