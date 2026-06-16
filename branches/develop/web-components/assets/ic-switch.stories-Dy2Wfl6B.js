import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";import{n as i,t as a}from"./taggedTemplateLiteral-pWa2IaV6.js";var o=e({AriaLabel:()=>_,Checked:()=>f,Default:()=>u,DefaultInForm:()=>b,Disabled:()=>m,DisabledAndName:()=>h,DisabledNameAndChecked:()=>g,HelperText:()=>v,Name:()=>d,Playground:()=>x,RightAdornment:()=>y,Sizes:()=>p,__namedExportsOrder:()=>S,default:()=>l}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{n(),i(),c={label:`Custom Switch`,helperText:`Custom helper text`,disabled:!1,checked:!1,hideLabel:!1,size:`medium`,theme:`inherit`},l={title:`Web Components/Switch`,component:`ic-switch`},u={render:()=>r` <ic-switch label="Label"></ic-switch> `,name:`Default`},d={render:()=>r` <ic-switch label="Label"></ic-switch> `,name:`Name`},f={render:()=>r` <ic-switch checked="true" label="Label"></ic-switch> `,name:`Checked`},p={render:()=>r`
    <ic-switch size="small" label="Label"></ic-switch>
    <ic-switch label="Label"></ic-switch>
    <ic-switch size="large" label="Label"></ic-switch>
  `,name:`Sizes`},m={render:()=>r` <ic-switch disabled="true" label="Label"></ic-switch> `,name:`Disabled`},h={render:()=>r` <ic-switch disabled="true" label="Label"></ic-switch> `,name:`Disabled and name`},g={render:()=>r`
    <ic-switch disabled="true" label="Label" checked="true"></ic-switch>
  `,name:`Disabled, name and checked`},_={render:()=>r`
    <ic-switch label="Custom label" hide-label="true"></ic-switch>
  `,name:`ARIA label`},v={render:()=>r`<ic-switch label="Label" helper-text="Helper Text"></ic-switch>
      <ic-switch label="Label">
        <ic-typography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <ic-link href="#">link</ic-link>
          </span>
        </ic-typography>
      </ic-switch>`,name:`Helper text`},y={render:()=>r` <ic-switch label="Right adornment">
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
    </ic-switch>`,name:`Right adornment`},b={render:()=>r(s||=a([` <form id="form" aria-label="test form">
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
    </form>`])),name:`Default in form`},x={render:e=>r`<ic-switch
      disabled=${e.disabled}
      label=${e.label}
      checked=${e.checked}
      hide-label=${e.hideLabel}
      helper-text=${e.helperText}
      size=${e.size}
      theme=${e.theme}
    ></ic-switch>`,args:c,argTypes:{size:{options:[`small`,`medium`,`large`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-switch label="Label"></ic-switch> \`,
  name: "Default"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-switch label="Label"></ic-switch> \`,
  name: "Name"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-switch checked="true" label="Label"></ic-switch> \`,
  name: "Checked"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-switch size="small" label="Label"></ic-switch>
    <ic-switch label="Label"></ic-switch>
    <ic-switch size="large" label="Label"></ic-switch>
  \`,
  name: "Sizes"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-switch disabled="true" label="Label"></ic-switch> \`,
  name: "Disabled"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-switch disabled="true" label="Label"></ic-switch> \`,
  name: "Disabled and name"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-switch disabled="true" label="Label" checked="true"></ic-switch>
  \`,
  name: "Disabled, name and checked"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-switch label="Custom label" hide-label="true"></ic-switch>
  \`,
  name: "ARIA label"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-switch label="Label" helper-text="Helper Text"></ic-switch>
      <ic-switch label="Label">
        <ic-typography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <ic-link href="#">link</ic-link>
          </span>
        </ic-typography>
      </ic-switch>\`,
  name: "Helper text"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      options: ["small", "medium", "large"],
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Name`,`Checked`,`Sizes`,`Disabled`,`DisabledAndName`,`DisabledNameAndChecked`,`AriaLabel`,`HelperText`,`RightAdornment`,`DefaultInForm`,`Playground`]}));C();export{_ as AriaLabel,f as Checked,u as Default,b as DefaultInForm,m as Disabled,h as DisabledAndName,g as DisabledNameAndChecked,v as HelperText,d as Name,x as Playground,y as RightAdornment,p as Sizes,S as __namedExportsOrder,l as default,C as n,o as t};