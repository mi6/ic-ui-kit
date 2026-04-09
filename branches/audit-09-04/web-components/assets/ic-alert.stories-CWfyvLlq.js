var f=Object.freeze,w=Object.defineProperty;var b=(s,y)=>f(w(s,"raw",{value:f(y||s.slice())}));import{x as e}from"./lit-html-CWQq0DyO.js";const T={dismissible:!1,dismissLabel:"Dismiss",heading:"Heading",message:"Message",titleAbove:!1,variant:"neutral",showAction:!1,showDefaultIcon:!0,showSlottedIcon:!1,theme:"inherit"},A={title:"Web Components/Alert",component:"ic-alert"},a={render:()=>e`<ic-alert
        heading="Neutral"
        message="This alert is for displaying miscellaneous messages"
      ></ic-alert>
      <ic-alert
        variant="info"
        heading="Info"
        message="This alert is for displaying information"
      ></ic-alert>
      <ic-alert
        variant="error"
        heading="Error"
        message="This alert is for displaying errors"
      ></ic-alert>
      <ic-alert
        variant="warning"
        heading="Warning"
        message="This alert is for displaying warnings"
      ></ic-alert>
      <ic-alert
        variant="success"
        heading="Success"
        message="This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple
        lines so the alert should expand as well to make sure it doesn't overflow"
      ></ic-alert>
      <ic-alert
        variant="ai"
        heading="Artificial Intelligence (AI)"
        message="This alert is for displaying AI-related messages"
      ></ic-alert>`,name:"Variants"},n={render:()=>e`<ic-alert
      message="This alert is for displaying miscellaneous messages"
    ></ic-alert>`,name:"Message only"},t={render:()=>e`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
    ></ic-alert>`,name:"Dismissible"},i={render:()=>e`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      ><ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      ></ic-alert
    >`,name:"With action"},r={render:()=>e`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
      ><ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      ></ic-alert
    >`,name:"Dismissible with action"},o={render:()=>e`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      title-above="true"
    ></ic-alert>`,name:"Title above"},l={render:()=>e`<ic-alert
        heading="This title is very long so should force the alert to add 'title-above'"
        message="This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"
      ></ic-alert>
      <ic-alert
        variant="success"
        heading="Shorter title"
        message="Neither of these has 'title-above' set to true"
      ></ic-alert>`,name:"Responsive title"},c={render:()=>e`<ic-alert heading="This alert uses a custom message slot">
      <ic-typography slot="message">
        This is some text and
        <ic-link href="/" inline>this is an inline link</ic-link> within the
        text.
      </ic-typography>
    </ic-alert>`,name:"Custom message"},m={render:()=>e`<ic-alert
    heading="Want to know more about our coffee?"
    title-above="true"
  >
    <ic-typography slot="message">
      Go to our <ic-link href="/">coffee page</ic-link> to learn more.
    </ic-typography>
  </ic-alert>`,name:"Custom message and title above"},d={render:()=>e`
    <ic-alert
      heading="Neutral"
      message="This is dismissible"
      dismissible="true"
      dismiss-label="Custom dismiss label"
    ></ic-alert>
  `,name:"Custom dismiss label"};var v;const g={render:()=>e(v||(v=b([`
    <ic-alert
      id="alert"
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      announced="false"
    ></ic-alert>
    <br />
    <br />
    <ic-button variant="primary" size="small" onClick="onClick()" id="btn"
      >Toggle announced prop</ic-button
    >
    <script>
      const alert = document.getElementById("alert");
      const btn = document.getElementById("btn");
      btn.addEventListener("click", onClick);
      function onClick(e) {
        e.preventDefault();
        alert.announced
          ? (alert.announced = "false")
          : (alert.announced = "true");
      }
    <\/script>
  `]))),name:"Announced"},h={render:()=>e`
    <ic-alert
      id="alert"
      heading="Neutral"
      message="This alert contains a slotted icon"
      show-default-icon="false"
    >
      <svg
        slot="neutral-icon"
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
    </ic-alert>
  `,name:"Slotted icon"},u={render:()=>e`
    <ic-alert
      id="alert"
      heading="Neutral"
      message="This alert has no icon"
      show-default-icon="false"
    ></ic-alert>
  `,name:"No icon"},p={render:s=>e`<ic-alert
      dismissible=${s.dismissible}
      dismiss-label=${s.dismissLabel}
      variant=${s.variant}
      heading=${s.heading}
      message=${s.message}
      title-above=${s.titleAbove}
      show-default-icon=${s.showDefaultIcon}
      theme=${s.theme}
    >
      ${s.showAction&&e`<ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      >`}
      ${s.showSlottedIcon&&e`<svg
        slot="neutral-icon"
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
      </svg>`}
    </ic-alert>`,args:T,argTypes:{variant:{options:["neutral","info","warning","error","success","ai"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
        heading="Neutral"
        message="This alert is for displaying miscellaneous messages"
      ></ic-alert>
      <ic-alert
        variant="info"
        heading="Info"
        message="This alert is for displaying information"
      ></ic-alert>
      <ic-alert
        variant="error"
        heading="Error"
        message="This alert is for displaying errors"
      ></ic-alert>
      <ic-alert
        variant="warning"
        heading="Warning"
        message="This alert is for displaying warnings"
      ></ic-alert>
      <ic-alert
        variant="success"
        heading="Success"
        message="This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple
        lines so the alert should expand as well to make sure it doesn't overflow"
      ></ic-alert>
      <ic-alert
        variant="ai"
        heading="Artificial Intelligence (AI)"
        message="This alert is for displaying AI-related messages"
      ></ic-alert>\`,
  name: "Variants"
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
      message="This alert is for displaying miscellaneous messages"
    ></ic-alert>\`,
  name: "Message only"
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
    ></ic-alert>\`,
  name: "Dismissible"
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      ><ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      ></ic-alert
    >\`,
  name: "With action"
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
      ><ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      ></ic-alert
    >\`,
  name: "Dismissible with action"
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      title-above="true"
    ></ic-alert>\`,
  name: "Title above"
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
        heading="This title is very long so should force the alert to add 'title-above'"
        message="This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"
      ></ic-alert>
      <ic-alert
        variant="success"
        heading="Shorter title"
        message="Neither of these has 'title-above' set to true"
      ></ic-alert>\`,
  name: "Responsive title"
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert heading="This alert uses a custom message slot">
      <ic-typography slot="message">
        This is some text and
        <ic-link href="/" inline>this is an inline link</ic-link> within the
        text.
      </ic-typography>
    </ic-alert>\`,
  name: "Custom message"
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
    heading="Want to know more about our coffee?"
    title-above="true"
  >
    <ic-typography slot="message">
      Go to our <ic-link href="/">coffee page</ic-link> to learn more.
    </ic-typography>
  </ic-alert>\`,
  name: "Custom message and title above"
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-alert
      heading="Neutral"
      message="This is dismissible"
      dismissible="true"
      dismiss-label="Custom dismiss label"
    ></ic-alert>
  \`,
  name: "Custom dismiss label"
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-alert
      id="alert"
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      announced="false"
    ></ic-alert>
    <br />
    <br />
    <ic-button variant="primary" size="small" onClick="onClick()" id="btn"
      >Toggle announced prop</ic-button
    >
    <script>
      const alert = document.getElementById("alert");
      const btn = document.getElementById("btn");
      btn.addEventListener("click", onClick);
      function onClick(e) {
        e.preventDefault();
        alert.announced
          ? (alert.announced = "false")
          : (alert.announced = "true");
      }
    <\/script>
  \`,
  name: "Announced"
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-alert
      id="alert"
      heading="Neutral"
      message="This alert contains a slotted icon"
      show-default-icon="false"
    >
      <svg
        slot="neutral-icon"
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
    </ic-alert>
  \`,
  name: "Slotted icon"
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-alert
      id="alert"
      heading="Neutral"
      message="This alert has no icon"
      show-default-icon="false"
    ></ic-alert>
  \`,
  name: "No icon"
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-alert
      dismissible=\${args.dismissible}
      dismiss-label=\${args.dismissLabel}
      variant=\${args.variant}
      heading=\${args.heading}
      message=\${args.message}
      title-above=\${args.titleAbove}
      show-default-icon=\${args.showDefaultIcon}
      theme=\${args.theme}
    >
      \${args.showAction && html\`<ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      >\`}
      \${args.showSlottedIcon && html\`<svg
        slot="neutral-icon"
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
      </svg>\`}
    </ic-alert>\`,
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
}`,...p.parameters?.docs?.source}}};const S=["Variants","MessageOnly","Dismissible","WithAction","DismissibleWithAction","TitleAbove","ResponsiveTitle","CustomMessage","CustomMessageAndTitleAbove","CustomDismissLabel","Announced","SlottedIcon","NoIcon","Playground"],k=Object.freeze(Object.defineProperty({__proto__:null,Announced:g,CustomDismissLabel:d,CustomMessage:c,CustomMessageAndTitleAbove:m,Dismissible:t,DismissibleWithAction:r,MessageOnly:n,NoIcon:u,Playground:p,ResponsiveTitle:l,SlottedIcon:h,TitleAbove:o,Variants:a,WithAction:i,__namedExportsOrder:S,default:A},Symbol.toStringTag,{value:"Module"}));export{k as I};
