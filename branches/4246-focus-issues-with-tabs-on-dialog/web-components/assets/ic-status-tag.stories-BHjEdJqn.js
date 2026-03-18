var g=Object.freeze,b=Object.defineProperty;var d=(t,p)=>g(b(t,"raw",{value:g(p||t.slice())}));import{x as a}from"./lit-html-CWQq0DyO.js";const S={announced:!1,label:"Status tag label",size:"medium",status:"neutral",variant:"filled",theme:"inherit",uppercase:!0},v={title:"Web Components/Status tag",component:"ic-status-tag"},e={render:()=>a`
    <ic-status-tag label="Neutral"></ic-status-tag>
    <ic-status-tag label="Neutral" variant="outlined"></ic-status-tag>
  `,name:"Neutral"},s={render:()=>a`
    <ic-status-tag label="Success" status="success"></ic-status-tag>
    <ic-status-tag
      label="Success"
      status="success"
      variant="outlined"
    ></ic-status-tag>
  `,name:"Success"},n={render:()=>a`
    <ic-status-tag label="Warning" status="warning"></ic-status-tag>
    <ic-status-tag
      label="Warning"
      status="warning"
      variant="outlined"
    ></ic-status-tag>
  `,name:"Warning"},r={render:()=>a`
    <ic-status-tag label="Danger" status="danger"></ic-status-tag>
    <ic-status-tag
      label="Danger"
      status="danger"
      variant="outlined"
    ></ic-status-tag>
  `,name:"Danger"},c={render:()=>a`
    <ic-status-tag label="Uppercase status tag"></ic-status-tag>
    <ic-status-tag
      label="Uppercase status tag"
      variant="outlined"
    ></ic-status-tag>
    <ic-status-tag
      label="Sentence case status tag"
      uppercase="false"
    ></ic-status-tag>
    <ic-status-tag
      label="Sentence case status tag"
      variant="outlined"
      uppercase="false"
    ></ic-status-tag>
  `,name:"Letter case"},i={render:()=>a`
    <ic-status-tag label="Small" size="small"></ic-status-tag>
    <ic-status-tag
      label="Small"
      variant="outlined"
      size="small"
    ></ic-status-tag>
    <ic-status-tag label="Default" size="medium"></ic-status-tag>
    <ic-status-tag
      label="Default"
      variant="outlined"
      size="medium"
    ></ic-status-tag>
    <ic-status-tag label="Large" size="large"></ic-status-tag>
    <ic-status-tag
      label="Large"
      variant="outlined"
      size="large"
    ></ic-status-tag>
  `,name:"Size"};var m;const u={render:()=>a(m||(m=d([`
    <ic-status-tag
      label="Warning"
      status="warning"
      id="tag"
      announced="false"
    ></ic-status-tag>
    <br />
    <br />
    <ic-button variant="primary" size="small" onClick="onClick()" id="btn"
      >Toggle announced prop</ic-button
    >
    <script>
      const tag = document.getElementById("tag");
      const btn = document.getElementById("btn");
      btn.addEventListener("click", onClick);
      function onClick(e) {
        e.preventDefault();
        tag.announced
          ? ((tag.announced = "false"),
            (tag.status = "warning"),
            (tag.label = "Warning"))
          : ((tag.announced = "true"),
            (tag.status = "success"),
            (tag.label = "Success"));
      }
    <\/script>
  `]))),name:"Announced"},o="inline-radio",l={render:t=>a`<ic-status-tag
      label=${t.label}
      size=${t.size}
      status=${t.status}
      variant=${t.variant}
      announced=${t.announced}
      theme=${t.theme}
      uppercase=${t.uppercase}
    ></ic-status-tag>`,args:S,argTypes:{size:{options:["medium","small","large"],control:{type:o}},status:{options:["neutral","success","warning","danger"],control:{type:"select"}},variant:{options:["filled","outlined"],control:{type:o}},theme:{options:["inherit","light","dark"],control:{type:o}}},name:"Playground"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-status-tag label="Neutral"></ic-status-tag>
    <ic-status-tag label="Neutral" variant="outlined"></ic-status-tag>
  \`,
  name: "Neutral"
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-status-tag label="Success" status="success"></ic-status-tag>
    <ic-status-tag
      label="Success"
      status="success"
      variant="outlined"
    ></ic-status-tag>
  \`,
  name: "Success"
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-status-tag label="Warning" status="warning"></ic-status-tag>
    <ic-status-tag
      label="Warning"
      status="warning"
      variant="outlined"
    ></ic-status-tag>
  \`,
  name: "Warning"
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-status-tag label="Danger" status="danger"></ic-status-tag>
    <ic-status-tag
      label="Danger"
      status="danger"
      variant="outlined"
    ></ic-status-tag>
  \`,
  name: "Danger"
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-status-tag label="Uppercase status tag"></ic-status-tag>
    <ic-status-tag
      label="Uppercase status tag"
      variant="outlined"
    ></ic-status-tag>
    <ic-status-tag
      label="Sentence case status tag"
      uppercase="false"
    ></ic-status-tag>
    <ic-status-tag
      label="Sentence case status tag"
      variant="outlined"
      uppercase="false"
    ></ic-status-tag>
  \`,
  name: "Letter case"
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-status-tag label="Small" size="small"></ic-status-tag>
    <ic-status-tag
      label="Small"
      variant="outlined"
      size="small"
    ></ic-status-tag>
    <ic-status-tag label="Default" size="medium"></ic-status-tag>
    <ic-status-tag
      label="Default"
      variant="outlined"
      size="medium"
    ></ic-status-tag>
    <ic-status-tag label="Large" size="large"></ic-status-tag>
    <ic-status-tag
      label="Large"
      variant="outlined"
      size="large"
    ></ic-status-tag>
  \`,
  name: "Size"
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-status-tag
      label="Warning"
      status="warning"
      id="tag"
      announced="false"
    ></ic-status-tag>
    <br />
    <br />
    <ic-button variant="primary" size="small" onClick="onClick()" id="btn"
      >Toggle announced prop</ic-button
    >
    <script>
      const tag = document.getElementById("tag");
      const btn = document.getElementById("btn");
      btn.addEventListener("click", onClick);
      function onClick(e) {
        e.preventDefault();
        tag.announced
          ? ((tag.announced = "false"),
            (tag.status = "warning"),
            (tag.label = "Warning"))
          : ((tag.announced = "true"),
            (tag.status = "success"),
            (tag.label = "Success"));
      }
    <\/script>
  \`,
  name: "Announced"
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-status-tag
      label=\${args.label}
      size=\${args.size}
      status=\${args.status}
      variant=\${args.variant}
      announced=\${args.announced}
      theme=\${args.theme}
      uppercase=\${args.uppercase}
    ></ic-status-tag>\`,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["medium", "small", "large"],
      control: {
        type: inlineRadioSelector
      }
    },
    status: {
      options: ["neutral", "success", "warning", "danger"],
      control: {
        type: "select"
      }
    },
    variant: {
      options: ["filled", "outlined"],
      control: {
        type: inlineRadioSelector
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: inlineRadioSelector
      }
    }
  },
  name: "Playground"
}`,...l.parameters?.docs?.source}}};const f=["Neutral","Success","Warning","Danger","LetterCase","Size","Announced","Playground"],h=Object.freeze(Object.defineProperty({__proto__:null,Announced:u,Danger:r,LetterCase:c,Neutral:e,Playground:l,Size:i,Success:s,Warning:n,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{h as I};
