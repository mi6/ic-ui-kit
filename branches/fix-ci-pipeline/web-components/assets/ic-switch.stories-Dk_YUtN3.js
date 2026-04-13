var b=Object.freeze,f=Object.defineProperty;var u=(t,g)=>b(f(t,"raw",{value:b(g||t.slice())}));import{x as e}from"./lit-html-CWQq0DyO.js";const S={label:"Custom Switch",helperText:"Custom helper text",disabled:!1,checked:!1,hideLabel:!1,size:"medium",theme:"inherit"},y={title:"Web Components/Switch",component:"ic-switch"},a={render:()=>e` <ic-switch label="Label"></ic-switch> `,name:"Default"},r={render:()=>e` <ic-switch label="Label"></ic-switch> `,name:"Name"},n={render:()=>e` <ic-switch checked="true" label="Label"></ic-switch> `,name:"Checked"},s={render:()=>e` <ic-switch size="small" label="Label"></ic-switch> `,name:"Small"},i={render:()=>e` <ic-switch disabled="true" label="Label"></ic-switch> `,name:"Disabled"},l={render:()=>e` <ic-switch disabled="true" label="Label"></ic-switch> `,name:"Disabled and name"},c={render:()=>e`
    <ic-switch disabled="true" label="Label" checked="true"></ic-switch>
  `,name:"Disabled, name and checked"},o={render:()=>e`
    <ic-switch label="Custom label" hide-label="true"></ic-switch>
  `,name:"ARIA label"},m={render:()=>e`<ic-switch label="Label" helper-text="Helper Text"></ic-switch>
      <ic-switch label="Label">
        <ic-typography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <ic-link href="#">link</ic-link>
          </span>
        </ic-typography>
      </ic-switch>`,name:"Helper text"},d={render:()=>e` <ic-switch label="Right adornment">
      <svg
        slot="right-adornment"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
        />
      </svg>
    </ic-switch>`,name:"Right adornment"};var w;const h={render:()=>e(w||(w=u([` <form id="form" aria-label="test form">
      <ic-switch id="switch" label="custom label" hide-label="true"></ic-switch>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
      <form>
        <script>
          const tcForm = document.getElementById("form");
          tcForm.addEventListener("submit", handleSubmit);
          function handleSubmit(e) {
            e.preventDefault();
            var data = "HTML Form Data (name: value): \\n";
            for (const element of document.getElementById("form").elements) {
              data += element.name + ": " + element.value + "\\n";
            }
            alert(data);
          }
        <\/script>
      </form>
    </form>`],[` <form id="form" aria-label="test form">
      <ic-switch id="switch" label="custom label" hide-label="true"></ic-switch>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
      <form>
        <script>
          const tcForm = document.getElementById("form");
          tcForm.addEventListener("submit", handleSubmit);
          function handleSubmit(e) {
            e.preventDefault();
            var data = "HTML Form Data (name: value): \\\\n";
            for (const element of document.getElementById("form").elements) {
              data += element.name + ": " + element.value + "\\\\n";
            }
            alert(data);
          }
        <\/script>
      </form>
    </form>`]))),name:"Default in form"},p={render:t=>e`<ic-switch
      disabled=${t.disabled}
      label=${t.label}
      checked=${t.checked}
      hide-label=${t.hideLabel}
      helper-text=${t.helperText}
      size=${t.size}
      theme=${t.theme}
    ></ic-switch>`,args:S,argTypes:{size:{options:["medium","small"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-switch label="Label"></ic-switch> \`,
  name: "Default"
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-switch label="Label"></ic-switch> \`,
  name: "Name"
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-switch checked="true" label="Label"></ic-switch> \`,
  name: "Checked"
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-switch size="small" label="Label"></ic-switch> \`,
  name: "Small"
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-switch disabled="true" label="Label"></ic-switch> \`,
  name: "Disabled"
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-switch disabled="true" label="Label"></ic-switch> \`,
  name: "Disabled and name"
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-switch disabled="true" label="Label" checked="true"></ic-switch>
  \`,
  name: "Disabled, name and checked"
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-switch label="Custom label" hide-label="true"></ic-switch>
  \`,
  name: "ARIA label"
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-switch label="Label" helper-text="Helper Text"></ic-switch>
      <ic-switch label="Label">
        <ic-typography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <ic-link href="#">link</ic-link>
          </span>
        </ic-typography>
      </ic-switch>\`,
  name: "Helper text"
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-switch label="Right adornment">
      <svg
        slot="right-adornment"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
        />
      </svg>
    </ic-switch>\`,
  name: "Right adornment"
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\` <form id="form" aria-label="test form">
      <ic-switch id="switch" label="custom label" hide-label="true"></ic-switch>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
      <form>
        <script>
          const tcForm = document.getElementById("form");
          tcForm.addEventListener("submit", handleSubmit);
          function handleSubmit(e) {
            e.preventDefault();
            var data = "HTML Form Data (name: value): \\\\n";
            for (const element of document.getElementById("form").elements) {
              data += element.name + ": " + element.value + "\\\\n";
            }
            alert(data);
          }
        <\/script>
      </form>
    </form>\`,
  name: "Default in form"
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-switch
      disabled=\${args.disabled}
      label=\${args.label}
      checked=\${args.checked}
      hide-label=\${args.hideLabel}
      helper-text=\${args.helperText}
      size=\${args.size}
      theme=\${args.theme}
    ></ic-switch>\`,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: {
        type: "inline-radio"
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
}`,...p.parameters?.docs?.source}}};const L=["Default","Name","Checked","Small","Disabled","DisabledAndName","DisabledNameAndChecked","AriaLabel","HelperText","RightAdornment","DefaultInForm","Playground"],x=Object.freeze(Object.defineProperty({__proto__:null,AriaLabel:o,Checked:n,Default:a,DefaultInForm:h,Disabled:i,DisabledAndName:l,DisabledNameAndChecked:c,HelperText:m,Name:r,Playground:p,RightAdornment:d,Small:s,__namedExportsOrder:L,default:y},Symbol.toStringTag,{value:"Module"}));export{x as I};
