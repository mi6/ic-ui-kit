"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8357],{"./src/components/ic-alert/ic-alert.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent,defaultArgs:()=>defaultArgs});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-alert\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property          | Attribute           | Description                                                                                                                             | Type                                                       | Default     |\n| ----------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |\n| `announced`       | `announced`         | If `true`, the alert will have the \'alert\' ARIA role and will be announced to screen readers.                                           | `boolean`                                                  | `true`      |\n| `dismissible`     | `dismissible`       | If `true`, the alert will have a close icon at the end to dismiss it.                                                                   | `boolean`                                                  | `false`     |\n| `heading`         | `heading`           | The optional title to display at the start of the alert.                                                                                | `string`                                                   | `""`        |\n| `message`         | `message`           | The main body message of the alert.                                                                                                     | `string`                                                   | `undefined` |\n| `showDefaultIcon` | `show-default-icon` | If `true`, the default icon for the neutral variant will appear on the left of the alert.                                               | `boolean`                                                  | `true`      |\n| `theme`           | `theme`             | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"`                           | `"inherit"` |\n| `titleAbove`      | `title-above`       | If `true`, the title and message will appear above and below instead of inline.                                                         | `boolean`                                                  | `false`     |\n| `variant`         | `variant`           | The variant of the alert which will be rendered.                                                                                        | `"error" \\| "info" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n\n\n## Events\n\n| Event       | Description                                   | Type                |\n| ----------- | --------------------------------------------- | ------------------- |\n| `icDismiss` | Is emitted when the user dismisses the alert. | `CustomEvent<void>` |\n\n\n## Slots\n\n| Slot             | Description                                                                                            |\n| ---------------- | ------------------------------------------------------------------------------------------------------ |\n| `"action"`       | Content is placed to the right of the message.                                                         |\n| `"message"`      | Content is placed to the right of the title.                                                           |\n| `"neutral-icon"` | A custom neutral icon is placed to the left of the title. This will override the default icon if used. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-alert --\x3e ic-typography\n  ic-alert --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-alert fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';__webpack_require__("./src/components/ic-link/readme.md"),__webpack_require__("./src/components/ic-button/readme.md");var ic_alert_stories=__webpack_require__("./src/components/ic-alert/ic-alert.stories.js");const defaultArgs={dismissible:!1,heading:"Heading",message:"Message",titleAbove:!1,variant:"neutral",showAction:!1,showDefaultIcon:!0,showSlottedIcon:!1,theme:"inherit"};function _createMdxContent(props){const _components={h3:"h3",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_alert_stories}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.Variants})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"message-only",children:"Message only"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.MessageOnly})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dismissible",children:"Dismissible"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.Dismissible})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-action",children:"With action"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.WithAction})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dismissible-with-action",children:"Dismissible with action"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.DismissibleWithAction})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"title-above",children:"Title above"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.TitleAbove})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"responsive-title",children:"Responsive title"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.ResponsiveTitle})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-message",children:"Custom message"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.CustomMessage})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-message-and-title-above",children:"Custom message and title above"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.CustomMessageAndTitleAbove})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"announced",children:"Announced"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.Announced})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-icon",children:"Slotted icon"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.SlottedIcon})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"no-icon",children:"No icon"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.NoIcon})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_alert_stories.Playground})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ic-alert/ic-alert.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Announced:()=>Announced,CustomMessage:()=>CustomMessage,CustomMessageAndTitleAbove:()=>CustomMessageAndTitleAbove,Dismissible:()=>Dismissible,DismissibleWithAction:()=>DismissibleWithAction,MessageOnly:()=>MessageOnly,NoIcon:()=>NoIcon,Playground:()=>Playground,ResponsiveTitle:()=>ResponsiveTitle,SlottedIcon:()=>SlottedIcon,TitleAbove:()=>TitleAbove,Variants:()=>Variants,WithAction:()=>WithAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Alert",component:"ic-alert"},Variants={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-alert
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
      ></ic-alert>`,name:"Variants"},MessageOnly={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-alert
      message="This alert is for displaying miscellaneous messages"
    ></ic-alert>`,name:"Message only"},Dismissible={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
    ></ic-alert>`,name:"Dismissible"},WithAction={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      ><ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      ></ic-alert
    >`,name:"With action"},DismissibleWithAction={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
      ><ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      ></ic-alert
    >`,name:"Dismissible with action"},TitleAbove={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      title-above="true"
    ></ic-alert>`,name:"Title above"},ResponsiveTitle={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-alert
        heading="This title is very long so should force the alert to add 'title-above'"
        message="This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"
      ></ic-alert>
      <ic-alert
        variant="success"
        heading="Shorter title"
        message="Neither of these has 'title-above' set to true"
      ></ic-alert>`,name:"Responsive title"},CustomMessage={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-alert heading="This alert uses a custom message slot">
      <ic-typography variant="body" slot="message">
        <p>
          This is some text and
          <ic-link href="/" inline>this is an inline link</ic-link> within the
          text.
        </p>
      </ic-typography>
    </ic-alert>`,name:"Custom message"},CustomMessageAndTitleAbove={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-alert
      heading="Want to know more about our coffee?"
      title-above="true"
    >
      <span slot="message" style="font:var(--ic-font-body)">
        Go to our <ic-link href="/">coffee page</ic-link> to learn more.
      </ic-typography>
    </ic-alert>`,name:"Custom message and title above"},Announced={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
    </script>
  `,name:"Announced"},SlottedIcon={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
  `,name:"Slotted icon"},NoIcon={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-alert
      id="alert"
      heading="Neutral"
      message="This alert has no icon"
      show-default-icon="false"
    ></ic-alert>
  `,name:"No icon"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-alert
      dismissible=${args.dismissible}
      variant=${args.variant}
      heading=${args.heading}
      message=${args.message}
      title-above=${args.titleAbove}
      show-default-icon=${args.showDefaultIcon}
      theme=${args.theme}
    >
      ${args.showAction&&lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      >`}
      ${args.showSlottedIcon&&lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<svg
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
    </ic-alert>`,args:{dismissible:!1,heading:"Heading",message:"Message",titleAbove:!1,variant:"neutral",showAction:!1,showDefaultIcon:!0,showSlottedIcon:!1,theme:"inherit"},argTypes:{variant:{options:["neutral","info","warning","error","success"],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Variants","MessageOnly","Dismissible","WithAction","DismissibleWithAction","TitleAbove","ResponsiveTitle","CustomMessage","CustomMessageAndTitleAbove","Announced","SlottedIcon","NoIcon","Playground"];Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-alert\n        heading="Neutral"\n        message="This alert is for displaying miscellaneous messages"\n      ></ic-alert>\n      <ic-alert\n        variant="info"\n        heading="Info"\n        message="This alert is for displaying information"\n      ></ic-alert>\n      <ic-alert\n        variant="error"\n        heading="Error"\n        message="This alert is for displaying errors"\n      ></ic-alert>\n      <ic-alert\n        variant="warning"\n        heading="Warning"\n        message="This alert is for displaying warnings"\n      ></ic-alert>\n      <ic-alert\n        variant="success"\n        heading="Success"\n        message="This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple\n        lines so the alert should expand as well to make sure it doesn\'t overflow"\n      ></ic-alert>`,\n  name: "Variants"\n}',...Variants.parameters?.docs?.source}}},MessageOnly.parameters={...MessageOnly.parameters,docs:{...MessageOnly.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-alert\n      message="This alert is for displaying miscellaneous messages"\n    ></ic-alert>`,\n  name: "Message only"\n}',...MessageOnly.parameters?.docs?.source}}},Dismissible.parameters={...Dismissible.parameters,docs:{...Dismissible.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-alert\n      heading="Neutral"\n      message="This alert is for displaying miscellaneous messages"\n      dismissible="true"\n    ></ic-alert>`,\n  name: "Dismissible"\n}',...Dismissible.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-alert\n      heading="Neutral"\n      message="This alert is for displaying miscellaneous messages"\n      ><ic-button slot="action" variant="secondary" monochrome="true"\n        >Button</ic-button\n      ></ic-alert\n    >`,\n  name: "With action"\n}',...WithAction.parameters?.docs?.source}}},DismissibleWithAction.parameters={...DismissibleWithAction.parameters,docs:{...DismissibleWithAction.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-alert\n      heading="Neutral"\n      message="This alert is for displaying miscellaneous messages"\n      dismissible="true"\n      ><ic-button slot="action" variant="secondary" monochrome="true"\n        >Button</ic-button\n      ></ic-alert\n    >`,\n  name: "Dismissible with action"\n}',...DismissibleWithAction.parameters?.docs?.source}}},TitleAbove.parameters={...TitleAbove.parameters,docs:{...TitleAbove.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-alert\n      heading="Neutral"\n      message="This alert is for displaying miscellaneous messages"\n      title-above="true"\n    ></ic-alert>`,\n  name: "Title above"\n}',...TitleAbove.parameters?.docs?.source}}},ResponsiveTitle.parameters={...ResponsiveTitle.parameters,docs:{...ResponsiveTitle.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-alert\n        heading="This title is very long so should force the alert to add \'title-above\'"\n        message="This alert does not have \'title-above\' added as a prop but it is forced to add it due to the length of the title"\n      ></ic-alert>\n      <ic-alert\n        variant="success"\n        heading="Shorter title"\n        message="Neither of these has \'title-above\' set to true"\n      ></ic-alert>`,\n  name: "Responsive title"\n}',...ResponsiveTitle.parameters?.docs?.source}}},CustomMessage.parameters={...CustomMessage.parameters,docs:{...CustomMessage.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-alert heading="This alert uses a custom message slot">\n      <ic-typography variant="body" slot="message">\n        <p>\n          This is some text and\n          <ic-link href="/" inline>this is an inline link</ic-link> within the\n          text.\n        </p>\n      </ic-typography>\n    </ic-alert>`,\n  name: "Custom message"\n}',...CustomMessage.parameters?.docs?.source}}},CustomMessageAndTitleAbove.parameters={...CustomMessageAndTitleAbove.parameters,docs:{...CustomMessageAndTitleAbove.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-alert\n      heading="Want to know more about our coffee?"\n      title-above="true"\n    >\n      <span slot="message" style="font:var(--ic-font-body)">\n        Go to our <ic-link href="/">coffee page</ic-link> to learn more.\n      </ic-typography>\n    </ic-alert>`,\n  name: "Custom message and title above"\n}',...CustomMessageAndTitleAbove.parameters?.docs?.source}}},Announced.parameters={...Announced.parameters,docs:{...Announced.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-alert\n      id="alert"\n      heading="Neutral"\n      message="This alert is for displaying miscellaneous messages"\n      announced="false"\n    ></ic-alert>\n    <br />\n    <br />\n    <ic-button variant="primary" size="small" onClick="onClick()" id="btn"\n      >Toggle announced prop</ic-button\n    >\n    <script>\n      const alert = document.getElementById("alert");\n      const btn = document.getElementById("btn");\n      btn.addEventListener("click", onClick);\n      function onClick(e) {\n        e.preventDefault();\n        alert.announced\n          ? (alert.announced = "false")\n          : (alert.announced = "true");\n      }\n    <\/script>\n  `,\n  name: "Announced"\n}',...Announced.parameters?.docs?.source}}},SlottedIcon.parameters={...SlottedIcon.parameters,docs:{...SlottedIcon.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-alert\n      id="alert"\n      heading="Neutral"\n      message="This alert contains a slotted icon"\n      show-default-icon="false"\n    >\n      <svg\n        slot="neutral-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-alert>\n  `,\n  name: "Slotted icon"\n}',...SlottedIcon.parameters?.docs?.source}}},NoIcon.parameters={...NoIcon.parameters,docs:{...NoIcon.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-alert\n      id="alert"\n      heading="Neutral"\n      message="This alert has no icon"\n      show-default-icon="false"\n    ></ic-alert>\n  `,\n  name: "No icon"\n}',...NoIcon.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-alert\n      dismissible=${args.dismissible}\n      variant=${args.variant}\n      heading=${args.heading}\n      message=${args.message}\n      title-above=${args.titleAbove}\n      show-default-icon=${args.showDefaultIcon}\n      theme=${args.theme}\n    >\n      ${args.showAction && html`<ic-button slot="action" variant="secondary" monochrome="true"\n        >Button</ic-button\n      >`}\n      ${args.showSlottedIcon && html`<svg\n        slot="neutral-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>`}\n    </ic-alert>`,\n  args: defaultArgs,\n  argTypes: {\n    variant: {\n      options: ["neutral", "info", "warning", "error", "success"],\n      control: {\n        type: "select"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./src/components/ic-link/readme.md":module=>{module.exports='# ic-link\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                                                             | Type                                                                                                                                                                                     | Default     |\n| ---------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `download`       | `download`       | If `true`, the user can save the linked URL instead of navigating to it.                                                                | `boolean \\| string`                                                                                                                                                                      | `false`     |\n| `href`           | `href`           | The URL that the link points to.                                                                                                        | `string`                                                                                                                                                                                 | `null`      |\n| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                                                                   | `string`                                                                                                                                                                                 | `undefined` |\n| `monochrome`     | `monochrome`     | If `true`, the link will display as black in the light theme, and white in the dark theme.                                              | `boolean`                                                                                                                                                                                | `false`     |\n| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                                                               | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                                                       | `string`                                                                                                                                                                                 | `undefined` |\n| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                     | `string`                                                                                                                                                                                 | `undefined` |\n| `theme`          | `theme`          | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"`                                                                                                                                                         | `"inherit"` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the link.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot            | Description                                         |\n| --------------- | --------------------------------------------------- |\n| `"router-item"` | Handle routing by nesting your routes in this slot. |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-breadcrumb](../ic-breadcrumb)\n - [ic-footer-link](../ic-footer-link)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-breadcrumb --\x3e ic-link\n  ic-footer-link --\x3e ic-link\n  style ic-link fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}]);
//# sourceMappingURL=components-ic-alert-ic-alert-mdx.ef947934.iframe.bundle.js.map