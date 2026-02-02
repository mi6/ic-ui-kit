var z=Object.freeze,$=Object.defineProperty;var M=(e,V)=>z($(e,"raw",{value:z(V||e.slice())}));import{x as n}from"./lit-html-CWQq0DyO.js";const T={title:"Web Components/Toggle button",component:"ic-toggle-button"},x="Custom Button",t="inline-radio",L={label:x,disabled:!1,loading:!1,monochrome:!1,outline:!0,size:"medium",theme:"inherit",variant:"default",fullWidth:!1,checked:!1},I={label:x,disabled:!1,loading:!1,monochrome:!1,size:"medium",variant:"default",theme:"inherit",fullWidth:!1,iconPlacement:"left",checked:!1,accessibleLabel:"Custom Button Ally Label"},k={label:x,disabled:!1,loading:!1,monochrome:!1,size:"medium",theme:"inherit",variant:"icon",fullWidth:!1,checked:!1,accessibleLabel:"Custom Button Ally Label",tooltipPlacement:"bottom"};var y;const o={render:()=>n(y||(y=M([`<ic-toggle-button label="Toggle"></ic-toggle-button>
      <script>
        var toggle = document.querySelector("ic-toggle-button");
        toggle.addEventListener("icToggleChecked", function (event) {
          console.log(event.detail.checked);
        });
      <\/script>`]))),name:"Default"},l={render:()=>n`<ic-toggle-button label="Toggle" checked="true"></ic-toggle-button>`,name:"Checked"},i={render:()=>n`<ic-toggle-button label="Toggle" disabled="true"></ic-toggle-button>
      <ic-toggle-button
        label="Toggle"
        disabled="true"
        checked="true"
      ></ic-toggle-button>`,name:"Disabled"},c={render:()=>n`<ic-toggle-button label="Toggle">
      <svg
        slot="icon"
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
    </ic-toggle-button>`,name:"With icon"},a={render:()=>n`<div style="padding: 6px">
        <ic-toggle-button label="Toggle" size="small"></ic-toggle-button>
      </div>
      <div style="padding: 6px">
        <ic-toggle-button label="Toggle"></ic-toggle-button>
      </div>
      <div style="padding: 6px">
        <ic-toggle-button label="Toggle" size="large"></ic-toggle-button>
      </div>`,name:"Sizes"},g={render:()=>n`<ic-toggle-button label="Toggle">
        <ic-badge label="1" slot="badge" variant="success"></ic-badge>
      </ic-toggle-button>
      <ic-toggle-button label="Toggle">
        <ic-badge slot="badge" variant="success" type="dot"></ic-badge>
      </ic-toggle-button>`,name:"With badge"},s={render:()=>n`<ic-toggle-button
      label="Toggle"
      monochrome="true"
    ></ic-toggle-button>`,name:"Monochrome"},r={render:()=>n`<ic-toggle-button
      label="Toggle"
      full-width="true"
    ></ic-toggle-button>`,name:"Full width"},h={render:()=>n`<div style="padding: 6px">
        <ic-toggle-button label="Toggle" loading="true"></ic-toggle-button>
        <ic-toggle-button
          label="Toggle"
          loading="true"
          checked="true"
        ></ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          loading="true"
          accessible-label="Refresh the page"
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
        </ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          loading="true"
          checked="true"
          accessible-label="Refresh the page"
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
        </ic-toggle-button>
      </div>
      <div style="padding:6px 10px; width:fit-content">
        <ic-toggle-button
          label="Toggle"
          loading="true"
          monochrome="true"
        ></ic-toggle-button>
        <ic-toggle-button
          label="Toggle"
          loading="true"
          checked="true"
          monochrome="true"
        ></ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          loading="true"
          accessible-label="Refresh the page"
          monochrome="true"
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
        </ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          loading="true"
          checked="true"
          accessible-label="Refresh the page"
          monochrome="true"
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
        </ic-toggle-button>
      </div>`,name:"Loading"},d={render:()=>n`<div style="padding:6px 10px; width:fit-content">
        <ic-toggle-button
          variant="icon"
          size="small"
          accessible-label="Refresh the page"
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
        </ic-toggle-button>
        <ic-toggle-button variant="icon" accessible-label="Refresh the page">
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
        </ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          size="large"
          accessible-label="Refresh the page"
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
        </ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          disabled="true"
          accessible-label="Refresh the page"
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
        </ic-toggle-button>
      </div>
      <div style="padding:6px 10px; width:fit-content">
        <ic-toggle-button
          variant="icon"
          accessible-label="Refresh the page"
          monochrome="true"
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
        </ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          disabled="true"
          accessible-label="Refresh the page"
          monochrome="true"
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
        </ic-toggle-button>
      </div>`,name:"Icon only"},p={render:()=>n`<ic-toggle-button label="Toggle" icon-placement="right">
      <svg
        slot="icon"
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
    </ic-toggle-button>`,name:"Icon right"},u={render:()=>n`<ic-toggle-button label="Toggle" icon-placement="top">
      <svg
        slot="icon"
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
    </ic-toggle-button>`,name:"Icon top"},b={render:()=>n`<div style="padding:100px 10px; width:fit-content">
      <ic-toggle-button
        variant="icon"
        tooltip-placement="right"
        accessible-label="Refresh the page"
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
      </ic-toggle-button>
      <ic-toggle-button
        variant="icon"
        tooltip-placement="top"
        accessible-label="Refresh the page"
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
      </ic-toggle-button>
      <ic-toggle-button
        variant="icon"
        tooltip-placement="left"
        accessible-label="Refresh the page"
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
      </ic-toggle-button>
    </div>`,name:"Tooltip placement"},m={render:()=>n`<ic-toggle-button label="Toggle" outline="false"></ic-toggle-button>`,name:"Hide outline"},v={render:e=>n` <ic-toggle-button
    label=${e.label}
    disabled=${e.disabled}
    variant=${e.variant}
    size=${e.size}
    loading=${e.loading}
    monochrome=${e.monochrome}
    outline=${e.outline}
    full-width=${e.fullWidth}
    checked=${e.checked}
    theme=${e.theme}
  />`,args:L,argTypes:{size:{options:["medium","large","small"],control:{type:t}},checked:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:t}}},name:"Playground"},w={render:e=>n` <ic-toggle-button
    label=${e.label}
    disabled=${e.disabled}
    variant=${e.variant}
    size=${e.size}
    loading=${e.loading}
    monochrome=${e.monochrome}
    full-width=${e.fullWidth}
    checked=${e.checked}
    icon-placement=${e.iconPlacement}
    theme=${e.theme}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      slot="icon"
      height="24px"
      view-box="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      />
    </svg>
  </ic-toggle-button>`,args:I,argTypes:{size:{options:["medium","large","small"],control:{type:t}},checked:{control:{type:"boolean"}},iconPlacement:{options:["left","right","top"],control:{type:t}},fullWidth:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:t}}},name:"Playground - default with icon"},f={render:e=>n` <ic-toggle-button
    label=${e.label}
    disabled=${e.disabled}
    variant=${e.variant}
    size=${e.size}
    loading=${e.loading}
    monochrome=${e.monochrome}
    full-width=${e.fullWidth}
    checked=${e.checked}
    accessible-label=${e.accessibleLabel}
    theme=${e.theme}
    tooltip-placement=${e.tooltipPlacement}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      slot="icon"
      height="24px"
      view-box="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      />
    </svg>
  </ic-toggle-button>`,args:k,argTypes:{size:{options:["medium","large","small"],control:{type:t}},checked:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:t}},tooltipPlacement:{options:["bottom","top","left","right"],control:{type:"radio"}}},name:"Playground - icon variant"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle"></ic-toggle-button>
      <script>
        var toggle = document.querySelector("ic-toggle-button");
        toggle.addEventListener("icToggleChecked", function (event) {
          console.log(event.detail.checked);
        });
      <\/script>\`,
  name: "Default"
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle" checked="true"></ic-toggle-button>\`,
  name: "Checked"
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle" disabled="true"></ic-toggle-button>
      <ic-toggle-button
        label="Toggle"
        disabled="true"
        checked="true"
      ></ic-toggle-button>\`,
  name: "Disabled"
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle">
      <svg
        slot="icon"
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
    </ic-toggle-button>\`,
  name: "With icon"
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="padding: 6px">
        <ic-toggle-button label="Toggle" size="small"></ic-toggle-button>
      </div>
      <div style="padding: 6px">
        <ic-toggle-button label="Toggle"></ic-toggle-button>
      </div>
      <div style="padding: 6px">
        <ic-toggle-button label="Toggle" size="large"></ic-toggle-button>
      </div>\`,
  name: "Sizes"
}`,...a.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle">
        <ic-badge label="1" slot="badge" variant="success"></ic-badge>
      </ic-toggle-button>
      <ic-toggle-button label="Toggle">
        <ic-badge slot="badge" variant="success" type="dot"></ic-badge>
      </ic-toggle-button>\`,
  name: "With badge"
}`,...g.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button
      label="Toggle"
      monochrome="true"
    ></ic-toggle-button>\`,
  name: "Monochrome"
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button
      label="Toggle"
      full-width="true"
    ></ic-toggle-button>\`,
  name: "Full width"
}`,...r.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="padding: 6px">
        <ic-toggle-button label="Toggle" loading="true"></ic-toggle-button>
        <ic-toggle-button
          label="Toggle"
          loading="true"
          checked="true"
        ></ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          loading="true"
          accessible-label="Refresh the page"
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
        </ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          loading="true"
          checked="true"
          accessible-label="Refresh the page"
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
        </ic-toggle-button>
      </div>
      <div style="padding:6px 10px; width:fit-content">
        <ic-toggle-button
          label="Toggle"
          loading="true"
          monochrome="true"
        ></ic-toggle-button>
        <ic-toggle-button
          label="Toggle"
          loading="true"
          checked="true"
          monochrome="true"
        ></ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          loading="true"
          accessible-label="Refresh the page"
          monochrome="true"
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
        </ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          loading="true"
          checked="true"
          accessible-label="Refresh the page"
          monochrome="true"
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
        </ic-toggle-button>
      </div>\`,
  name: "Loading"
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="padding:6px 10px; width:fit-content">
        <ic-toggle-button
          variant="icon"
          size="small"
          accessible-label="Refresh the page"
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
        </ic-toggle-button>
        <ic-toggle-button variant="icon" accessible-label="Refresh the page">
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
        </ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          size="large"
          accessible-label="Refresh the page"
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
        </ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          disabled="true"
          accessible-label="Refresh the page"
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
        </ic-toggle-button>
      </div>
      <div style="padding:6px 10px; width:fit-content">
        <ic-toggle-button
          variant="icon"
          accessible-label="Refresh the page"
          monochrome="true"
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
        </ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          disabled="true"
          accessible-label="Refresh the page"
          monochrome="true"
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
        </ic-toggle-button>
      </div>\`,
  name: "Icon only"
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle" icon-placement="right">
      <svg
        slot="icon"
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
    </ic-toggle-button>\`,
  name: "Icon right"
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle" icon-placement="top">
      <svg
        slot="icon"
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
    </ic-toggle-button>\`,
  name: "Icon top"
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="padding:100px 10px; width:fit-content">
      <ic-toggle-button
        variant="icon"
        tooltip-placement="right"
        accessible-label="Refresh the page"
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
      </ic-toggle-button>
      <ic-toggle-button
        variant="icon"
        tooltip-placement="top"
        accessible-label="Refresh the page"
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
      </ic-toggle-button>
      <ic-toggle-button
        variant="icon"
        tooltip-placement="left"
        accessible-label="Refresh the page"
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
      </ic-toggle-button>
    </div>\`,
  name: "Tooltip placement"
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle" outline="false"></ic-toggle-button>\`,
  name: "Hide outline"
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => html\` <ic-toggle-button
    label=\${args.label}
    disabled=\${args.disabled}
    variant=\${args.variant}
    size=\${args.size}
    loading=\${args.loading}
    monochrome=\${args.monochrome}
    outline=\${args.outline}
    full-width=\${args.fullWidth}
    checked=\${args.checked}
    theme=\${args.theme}
  />\`,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["medium", "large", "small"],
      control: {
        type: INLINE_RADIO
      }
    },
    checked: {
      control: {
        type: "boolean"
      }
    },
    fullWidth: {
      control: {
        type: "boolean"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: INLINE_RADIO
      }
    }
  },
  name: "Playground"
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => html\` <ic-toggle-button
    label=\${args.label}
    disabled=\${args.disabled}
    variant=\${args.variant}
    size=\${args.size}
    loading=\${args.loading}
    monochrome=\${args.monochrome}
    full-width=\${args.fullWidth}
    checked=\${args.checked}
    icon-placement=\${args.iconPlacement}
    theme=\${args.theme}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      slot="icon"
      height="24px"
      view-box="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      />
    </svg>
  </ic-toggle-button>\`,
  args: defaultWithIconArgs,
  argTypes: {
    size: {
      options: ["medium", "large", "small"],
      control: {
        type: INLINE_RADIO
      }
    },
    checked: {
      control: {
        type: "boolean"
      }
    },
    iconPlacement: {
      options: ["left", "right", "top"],
      control: {
        type: INLINE_RADIO
      }
    },
    fullWidth: {
      control: {
        type: "boolean"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: INLINE_RADIO
      }
    }
  },
  name: "Playground - default with icon"
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => html\` <ic-toggle-button
    label=\${args.label}
    disabled=\${args.disabled}
    variant=\${args.variant}
    size=\${args.size}
    loading=\${args.loading}
    monochrome=\${args.monochrome}
    full-width=\${args.fullWidth}
    checked=\${args.checked}
    accessible-label=\${args.accessibleLabel}
    theme=\${args.theme}
    tooltip-placement=\${args.tooltipPlacement}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      slot="icon"
      height="24px"
      view-box="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      />
    </svg>
  </ic-toggle-button>\`,
  args: defaultIconArgs,
  argTypes: {
    size: {
      options: ["medium", "large", "small"],
      control: {
        type: INLINE_RADIO
      }
    },
    checked: {
      control: {
        type: "boolean"
      }
    },
    fullWidth: {
      control: {
        type: "boolean"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: INLINE_RADIO
      }
    },
    tooltipPlacement: {
      options: ["bottom", "top", "left", "right"],
      control: {
        type: "radio"
      }
    }
  },
  name: "Playground - icon variant"
}`,...f.parameters?.docs?.source}}};const C=["Default","Checked","Disabled","WithIcon","Sizes","WithBadge","Monochrome","FullWidth","Loading","IconOnly","IconRight","IconTop","TooltipPlacement","HideOutline","Playground","PlaygroundDefaultWithIcon","PlaygroundIconVariant"],R=Object.freeze(Object.defineProperty({__proto__:null,Checked:l,Default:o,Disabled:i,FullWidth:r,HideOutline:m,IconOnly:d,IconRight:p,IconTop:u,Loading:h,Monochrome:s,Playground:v,PlaygroundDefaultWithIcon:w,PlaygroundIconVariant:f,Sizes:a,TooltipPlacement:b,WithBadge:g,WithIcon:c,__namedExportsOrder:C,default:T},Symbol.toStringTag,{value:"Module"}));export{R as I};
