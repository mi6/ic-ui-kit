import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";import{n as i,t as a}from"./taggedTemplateLiteral-2dP4OITE.js";var o=e({Announced:()=>g,Danger:()=>p,LetterCase:()=>m,Neutral:()=>u,Playground:()=>v,Size:()=>h,Success:()=>d,Warning:()=>f,__namedExportsOrder:()=>y,default:()=>l}),s,c,l,u,d,f,p,m,h,g,_,v,y,b=t((()=>{n(),i(),c={announced:!1,label:`Status tag label`,size:`medium`,status:`neutral`,variant:`filled`,theme:`inherit`,uppercase:!0},l={title:`Web Components/Status tag`,component:`ic-status-tag`},u={render:()=>r`
    <ic-status-tag label="Neutral"></ic-status-tag>
    <ic-status-tag label="Neutral" variant="outlined"></ic-status-tag>
  `,name:`Neutral`},d={render:()=>r`
    <ic-status-tag label="Success" status="success"></ic-status-tag>
    <ic-status-tag
      label="Success"
      status="success"
      variant="outlined"
    ></ic-status-tag>
  `,name:`Success`},f={render:()=>r`
    <ic-status-tag label="Warning" status="warning"></ic-status-tag>
    <ic-status-tag
      label="Warning"
      status="warning"
      variant="outlined"
    ></ic-status-tag>
  `,name:`Warning`},p={render:()=>r`
    <ic-status-tag label="Danger" status="danger"></ic-status-tag>
    <ic-status-tag
      label="Danger"
      status="danger"
      variant="outlined"
    ></ic-status-tag>
  `,name:`Danger`},m={render:()=>r`
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
  `,name:`Letter case`},h={render:()=>r`
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
  `,name:`Size`},g={render:()=>r(s||=a([`
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
  `])),name:`Announced`},_=`inline-radio`,v={render:e=>r`<ic-status-tag
      label=${e.label}
      size=${e.size}
      status=${e.status}
      variant=${e.variant}
      announced=${e.announced}
      theme=${e.theme}
      uppercase=${e.uppercase}
    ></ic-status-tag>`,args:c,argTypes:{size:{options:[`medium`,`small`,`large`],control:{type:_}},status:{options:[`neutral`,`success`,`warning`,`danger`],control:{type:`select`}},variant:{options:[`filled`,`outlined`],control:{type:_}},theme:{options:[`inherit`,`light`,`dark`],control:{type:_}}},name:`Playground`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-status-tag label="Neutral"></ic-status-tag>
    <ic-status-tag label="Neutral" variant="outlined"></ic-status-tag>
  \`,
  name: "Neutral"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-status-tag label="Success" status="success"></ic-status-tag>
    <ic-status-tag
      label="Success"
      status="success"
      variant="outlined"
    ></ic-status-tag>
  \`,
  name: "Success"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-status-tag label="Warning" status="warning"></ic-status-tag>
    <ic-status-tag
      label="Warning"
      status="warning"
      variant="outlined"
    ></ic-status-tag>
  \`,
  name: "Warning"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-status-tag label="Danger" status="danger"></ic-status-tag>
    <ic-status-tag
      label="Danger"
      status="danger"
      variant="outlined"
    ></ic-status-tag>
  \`,
  name: "Danger"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Neutral`,`Success`,`Warning`,`Danger`,`LetterCase`,`Size`,`Announced`,`Playground`]}));b();export{g as Announced,p as Danger,m as LetterCase,u as Neutral,v as Playground,h as Size,d as Success,f as Warning,y as __namedExportsOrder,l as default,b as n,o as t};