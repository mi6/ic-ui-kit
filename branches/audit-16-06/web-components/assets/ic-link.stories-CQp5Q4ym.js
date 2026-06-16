import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";import{n as i,t as a}from"./taggedTemplateLiteral-pWa2IaV6.js";var o=e({Default:()=>u,DownloadLink:()=>f,Playground:()=>p,WithIcon:()=>d,__namedExportsOrder:()=>m,default:()=>l}),s,c,l,u,d,f,p,m,h=t((()=>{n(),i(),c={href:`/`,target:``,monochrome:!1,theme:`inherit`},l={title:`Web Components/Link`,component:`ic-link`},u={render:()=>r`<div>
      <ic-link href="/">This is a link</ic-link>
      <br />
      <br />
      <div style="width: 100px">
        <ic-link href="/"
          >This is a very very long link that goes multi-line</ic-link
        >
      </div>
    </div>`,name:`Default`,parameters:{layout:`fullscreen`}},d={render:()=>r`<ic-link href="/" target="_blank">This is a link</ic-link>`,name:`With icon`,parameters:{layout:`fullscreen`}},f={render:()=>r(s||=a([`<div>
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
      <\/script>`])),name:`Download link`},p={render:e=>r` <ic-link
      href=${e.href}
      target=${e.target}
      monochrome=${e.monochrome}
      theme=${e.theme}
      >This is a link</ic-link
    >`,args:c,argTypes:{target:{options:[`_blank`,`_self`,`_parent`,`_top`,``],control:{type:`radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-link href="/" target="_blank">This is a link</ic-link>\`,
  name: "With icon",
  parameters: {
    layout: "fullscreen"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithIcon`,`DownloadLink`,`Playground`]}));h();export{u as Default,f as DownloadLink,p as Playground,d as WithIcon,m as __namedExportsOrder,l as default,h as n,o as t};