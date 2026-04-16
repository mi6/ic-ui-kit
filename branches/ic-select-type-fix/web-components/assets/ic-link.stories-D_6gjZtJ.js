var a=Object.freeze,d=Object.defineProperty;var l=(n,s)=>a(d(n,"raw",{value:a(s||n.slice())}));import{x as o}from"./lit-html-CWQq0DyO.js";const m={href:"/",target:"",monochrome:!1,theme:"inherit"},u={title:"Web Components/Link",component:"ic-link"},e={render:()=>o`<div>
      <ic-link href="/">This is a link</ic-link>
      <br />
      <br />
      <div style="width: 100px">
        <ic-link href="/"
          >This is a very very long link that goes multi-line</ic-link
        >
      </div>
    </div>`,name:"Default",parameters:{layout:"fullscreen"}},r={render:()=>o`<ic-link href="/" target="_blank">This is a link</ic-link>`,name:"With icon",parameters:{layout:"fullscreen"}};var c;const i={render:()=>o(c||(c=l([`<div>
        <ic-link href="/" download="downloaded-file">Download File</ic-link>
        <br />
        <br />
        <ic-button variant="primary" onclick="handleTrue()"
          >Set to true</ic-button
        >
        <ic-button variant="primary" onclick="handleFalse()"
          >Set to false</ic-button
        >
        <ic-button variant="primary" onclick="handleReset()"
          >Set to normal</ic-button
        >
      </div>
      <script>
        var link = document.querySelector("ic-link");
        function handleTrue() {
          link.download = true;
        }
        function handleFalse() {
          link.download = false;
        }
        function handleReset() {
          link.download = "downloaded-file";
        }
      <\/script>`]))),name:"Download link"},t={render:n=>o` <ic-link
      href=${n.href}
      target=${n.target}
      monochrome=${n.monochrome}
      theme=${n.theme}
      >This is a link</ic-link
    >`,args:m,argTypes:{target:{options:["_blank","_self","_parent","_top",""],control:{type:"radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div>
      <ic-link href="/">This is a link</ic-link>
      <br />
      <br />
      <div style="width: 100px">
        <ic-link href="/"
          >This is a very very long link that goes multi-line</ic-link
        >
      </div>
    </div>\`,
  name: "Default",
  parameters: {
    layout: "fullscreen"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-link href="/" target="_blank">This is a link</ic-link>\`,
  name: "With icon",
  parameters: {
    layout: "fullscreen"
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div>
        <ic-link href="/" download="downloaded-file">Download File</ic-link>
        <br />
        <br />
        <ic-button variant="primary" onclick="handleTrue()"
          >Set to true</ic-button
        >
        <ic-button variant="primary" onclick="handleFalse()"
          >Set to false</ic-button
        >
        <ic-button variant="primary" onclick="handleReset()"
          >Set to normal</ic-button
        >
      </div>
      <script>
        var link = document.querySelector("ic-link");
        function handleTrue() {
          link.download = true;
        }
        function handleFalse() {
          link.download = false;
        }
        function handleReset() {
          link.download = "downloaded-file";
        }
      <\/script>\`,
  name: "Download link"
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => html\` <ic-link
      href=\${args.href}
      target=\${args.target}
      monochrome=\${args.monochrome}
      theme=\${args.theme}
      >This is a link</ic-link
    >\`,
  args: defaultArgs,
  argTypes: {
    target: {
      options: ["_blank", "_self", "_parent", "_top", ""],
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
}`,...t.parameters?.docs?.source}}};const h=["Default","WithIcon","DownloadLink","Playground"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:e,DownloadLink:i,Playground:t,WithIcon:r,__namedExportsOrder:h,default:u},Symbol.toStringTag,{value:"Module"}));export{f as I};
