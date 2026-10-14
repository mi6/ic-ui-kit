import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";import{n as i,t as a}from"./taggedTemplateLiteral-2dP4OITE.js";var o=e({Announced:()=>b,CustomDismissLabel:()=>y,CustomMessage:()=>_,CustomMessageAndTitleAbove:()=>v,Dismissible:()=>f,DismissibleWithAction:()=>m,MessageOnly:()=>d,NoIcon:()=>S,Playground:()=>C,ResponsiveTitle:()=>g,SlottedIcon:()=>x,TitleAbove:()=>h,Variants:()=>u,WithAction:()=>p,__namedExportsOrder:()=>w,default:()=>l}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=t((()=>{n(),i(),c={dismissible:!1,dismissLabel:`Dismiss`,heading:`Heading`,message:`Message`,titleAbove:!1,variant:`neutral`,showAction:!1,showDefaultIcon:!0,showSlottedIcon:!1,theme:`inherit`},l={title:`Web Components/Alert`,component:`ic-alert`},u={render:()=>r`<ic-alert
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
      ></ic-alert>`,name:`Variants`},d={render:()=>r`<ic-alert
      message="This alert is for displaying miscellaneous messages"
    ></ic-alert>`,name:`Message only`},f={render:()=>r`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
    ></ic-alert>`,name:`Dismissible`},p={render:()=>r`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      ><ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      ></ic-alert
    >`,name:`With action`},m={render:()=>r`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
      ><ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      ></ic-alert
    >`,name:`Dismissible with action`},h={render:()=>r`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      title-above="true"
    ></ic-alert>`,name:`Title above`},g={render:()=>r`<ic-alert
        heading="This title is very long so should force the alert to add 'title-above'"
        message="This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"
      ></ic-alert>
      <ic-alert
        variant="success"
        heading="Shorter title"
        message="Neither of these has 'title-above' set to true"
      ></ic-alert>`,name:`Responsive title`},_={render:()=>r`<ic-alert heading="This alert uses a custom message slot">
      <ic-typography slot="message">
        This is some text and
        <ic-link href="/" inline>this is an inline link</ic-link> within the
        text.
      </ic-typography>
    </ic-alert>`,name:`Custom message`},v={render:()=>r`<ic-alert
    heading="Want to know more about our coffee?"
    title-above="true"
  >
    <ic-typography slot="message">
      Go to our <ic-link href="/">coffee page</ic-link> to learn more.
    </ic-typography>
  </ic-alert>`,name:`Custom message and title above`},y={render:()=>r`
    <ic-alert
      heading="Neutral"
      message="This is dismissible"
      dismissible="true"
      dismiss-label="Custom dismiss label"
    ></ic-alert>
  `,name:`Custom dismiss label`},b={render:()=>r(s||=a([`
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
  `])),name:`Announced`},x={render:()=>r`
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
  `,name:`Slotted icon`},S={render:()=>r`
    <ic-alert
      id="alert"
      heading="Neutral"
      message="This alert has no icon"
      show-default-icon="false"
    ></ic-alert>
  `,name:`No icon`},C={render:e=>r`<ic-alert
      dismissible=${e.dismissible}
      dismiss-label=${e.dismissLabel}
      variant=${e.variant}
      heading=${e.heading}
      message=${e.message}
      title-above=${e.titleAbove}
      show-default-icon=${e.showDefaultIcon}
      theme=${e.theme}
    >
      ${e.showAction&&r`<ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      >`}
      ${e.showSlottedIcon&&r`<svg
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
    </ic-alert>`,args:c,argTypes:{variant:{options:[`neutral`,`info`,`warning`,`error`,`success`,`ai`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
      message="This alert is for displaying miscellaneous messages"
    ></ic-alert>\`,
  name: "Message only"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
    ></ic-alert>\`,
  name: "Dismissible"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      ><ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      ></ic-alert
    >\`,
  name: "With action"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
      ><ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      ></ic-alert
    >\`,
  name: "Dismissible with action"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      title-above="true"
    ></ic-alert>\`,
  name: "Title above"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert heading="This alert uses a custom message slot">
      <ic-typography slot="message">
        This is some text and
        <ic-link href="/" inline>this is an inline link</ic-link> within the
        text.
      </ic-typography>
    </ic-alert>\`,
  name: "Custom message"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-alert
    heading="Want to know more about our coffee?"
    title-above="true"
  >
    <ic-typography slot="message">
      Go to our <ic-link href="/">coffee page</ic-link> to learn more.
    </ic-typography>
  </ic-alert>\`,
  name: "Custom message and title above"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-alert
      heading="Neutral"
      message="This is dismissible"
      dismissible="true"
      dismiss-label="Custom dismiss label"
    ></ic-alert>
  \`,
  name: "Custom dismiss label"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-alert
      id="alert"
      heading="Neutral"
      message="This alert has no icon"
      show-default-icon="false"
    ></ic-alert>
  \`,
  name: "No icon"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Variants`,`MessageOnly`,`Dismissible`,`WithAction`,`DismissibleWithAction`,`TitleAbove`,`ResponsiveTitle`,`CustomMessage`,`CustomMessageAndTitleAbove`,`CustomDismissLabel`,`Announced`,`SlottedIcon`,`NoIcon`,`Playground`]}));T();export{b as Announced,y as CustomDismissLabel,_ as CustomMessage,v as CustomMessageAndTitleAbove,f as Dismissible,m as DismissibleWithAction,d as MessageOnly,S as NoIcon,C as Playground,g as ResponsiveTitle,x as SlottedIcon,h as TitleAbove,u as Variants,p as WithAction,w as __namedExportsOrder,l as default,T as n,o as t};