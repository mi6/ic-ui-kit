import{n as s,R as e,a as v,o as I,f}from"./iframe-BGfc9DWB.js";import{S as b}from"./slottedSVG-DP6mVlCh.js";const A={dismissible:!1,dismissLabel:"Dismiss",heading:"Heading",message:"Message",titleAbove:!1,variant:"neutral",showAction:!1,showDefaultIcon:!0,showSlottedIcon:!1,theme:"inherit"},w={title:"Alert",component:s},t={render:()=>e.createElement(e.Fragment,null,e.createElement(s,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages"}),e.createElement(s,{variant:"info",heading:"Info",message:"This alert is for displaying information"}),e.createElement(s,{variant:"error",heading:"Error",message:"This alert is for displaying errors"}),e.createElement(s,{variant:"warning",heading:"Warning",message:"This alert is for displaying warnings"}),e.createElement(s,{variant:"success",heading:"Success",message:"This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple lines so the alert should expand as well to make sure it doesn't overflow"}),e.createElement(s,{variant:"ai",heading:"Artificial Intelligence (AI)",message:"This alert is for displaying AI-related messages"})),name:"Variants"},r={render:()=>e.createElement(s,{message:"This alert is for displaying miscellaneous messages"}),name:"Message only"},n={render:()=>e.createElement(s,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",dismissible:!0}),name:"Dismissible"},i={render:()=>e.createElement(s,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages"},e.createElement(f,{slot:"action",variant:"secondary",monochrome:"true"},"Button")),name:"With action"},o={render:()=>e.createElement(s,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",dismissible:!0},e.createElement(f,{slot:"action",variant:"secondary",monochrome:"true"},"Button")),name:"Dismissible with action"},l={render:()=>e.createElement(s,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",titleAbove:!0}),name:"Title above"},c={render:()=>e.createElement(e.Fragment,null,e.createElement(s,{heading:"This title is very long so should force the alert to add 'title-above'",message:"This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"}),e.createElement(s,{variant:"success",heading:"Shorter title",message:"Neither of these has 'title-above' set to true"})),name:"Responsive title"},m={render:()=>e.createElement(s,{heading:"This alert uses a custom message slot"},e.createElement(v,{slot:"message"},"This is some text and "," ",e.createElement(I,{href:"/",inline:!0},"this is an inline link")," ","within the text.")),name:"Custom message"},d={render:()=>e.createElement(s,{heading:"Neutral",message:"This is dismissible",dismissible:"true",dismissLabel:"Custom dismiss label"}),name:"Custom dismiss label"},g={render:()=>e.createElement(s,{heading:"Want to know more about our coffee?",titleAbove:!0},e.createElement(v,{slot:"message"},"Go to our ",e.createElement(I,{href:"/"},"coffee page")," to learn more.")),name:"Custom message and title above"},h={render:()=>e.createElement(s,{id:"alert",heading:"Neutral",message:"This alert contains a slotted icon",showDefaultIcon:"false"},e.createElement(b,{slot:"neutral-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}))),name:"Slotted icon"},u={render:()=>e.createElement(s,{id:"alert",heading:"Neutral",message:"This alert has no icon",showDefaultIcon:"false"}),name:"No icon"},p={render:a=>e.createElement(s,{dismissible:a.dismissible,dismissLabel:a.dismissLabel,variant:a.variant,heading:a.heading,message:a.message,titleAbove:a.titleAbove,showDefaultIcon:a.showDefaultIcon,theme:a.theme},a.showAction&&e.createElement(f,{slot:"action",variant:"secondary",monochrome:"true"},"Button"),a.showSlottedIcon&&e.createElement(b,{slot:"neutral-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}))),args:A,argTypes:{variant:{options:["neutral","info","warning","error","success","ai"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" />
    <IcAlert variant="info" heading="Info" message="This alert is for displaying information" />
    <IcAlert variant="error" heading="Error" message="This alert is for displaying errors" />
    <IcAlert variant="warning" heading="Warning" message="This alert is for displaying warnings" />
    <IcAlert variant="success" heading="Success" message="This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple lines so the alert should expand as well to make sure it doesn't overflow" />
    <IcAlert variant="ai" heading="Artificial Intelligence (AI)" message="This alert is for displaying AI-related messages" />
    </>,
  name: "Variants"
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <IcAlert message="This alert is for displaying miscellaneous messages" />,
  name: "Message only"
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" dismissible />,
  name: "Dismissible"
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages">
      <IcButton slot="action" variant="secondary" monochrome="true">
        Button
      </IcButton>
    </IcAlert>,
  name: "With action"
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" dismissible>
      <IcButton slot="action" variant="secondary" monochrome="true">
        Button
      </IcButton>
    </IcAlert>,
  name: "Dismissible with action"
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" titleAbove />,
  name: "Title above"
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcAlert heading="This title is very long so should force the alert to add 'title-above'" message="This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title" />
    <IcAlert variant="success" heading="Shorter title" message="Neither of these has 'title-above' set to true" />
    </>,
  name: "Responsive title"
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IcAlert heading="This alert uses a custom message slot">
      <IcTypography slot="message">
        This is some text and {" "}
        <IcLink href="/" inline>
          this is an inline link
        </IcLink>
        {" "}within the text.
      </IcTypography>
    </IcAlert>,
  name: "Custom message"
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <IcAlert heading="Neutral" message="This is dismissible" dismissible="true" dismissLabel="Custom dismiss label"></IcAlert>,
  name: "Custom dismiss label"
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <IcAlert heading="Want to know more about our coffee?" titleAbove>
      <IcTypography slot="message">
        Go to our <IcLink href="/">coffee page</IcLink> to learn more.
      </IcTypography>
    </IcAlert>,
  name: "Custom message and title above"
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <IcAlert id="alert" heading="Neutral" message="This alert contains a slotted icon" showDefaultIcon="false">
      <SlottedSVG slot="neutral-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </SlottedSVG>
    </IcAlert>,
  name: "Slotted icon"
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <IcAlert id="alert" heading="Neutral" message="This alert has no icon" showDefaultIcon="false" />,
  name: "No icon"
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <IcAlert dismissible={args.dismissible} dismissLabel={args.dismissLabel} variant={args.variant} heading={args.heading} message={args.message} titleAbove={args.titleAbove} showDefaultIcon={args.showDefaultIcon} theme={args.theme}>
      {args.showAction && <IcButton slot="action" variant="secondary" monochrome="true">
          Button
        </IcButton>}
      {args.showSlottedIcon && <SlottedSVG slot="neutral-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </SlottedSVG>}
    </IcAlert>,
  args: defaultArgs,
  argTypes: {
    variant: {
      options: ["neutral", "info", "warning", "error", "success", "ai"],
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
}`,...p.parameters?.docs?.source}}};const y=["Variants","MessageOnly","Dismissible","WithAction","DismissibleWithAction","TitleAbove","ResponsiveTitle","CustomMessage","CustomDismissLabel","CustomMessageAndTitleAbove","SlottedIcon","NoIcon","Playground"],E=Object.freeze(Object.defineProperty({__proto__:null,CustomDismissLabel:d,CustomMessage:m,CustomMessageAndTitleAbove:g,Dismissible:n,DismissibleWithAction:o,MessageOnly:r,NoIcon:u,Playground:p,ResponsiveTitle:c,SlottedIcon:h,TitleAbove:l,Variants:t,WithAction:i,__namedExportsOrder:y,default:w},Symbol.toStringTag,{value:"Module"}));export{E as I};
