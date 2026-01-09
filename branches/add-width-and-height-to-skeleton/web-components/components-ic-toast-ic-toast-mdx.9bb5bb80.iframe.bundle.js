/*! For license information please see components-ic-toast-ic-toast-mdx.9bb5bb80.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1647,582,6199,6763,8553],{"./src/components/ic-toast/ic-toast.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-toast\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                 | Attribute                   | Description                                                                                                                                                       | Type                                                                            | Default     |\n| ------------------------ | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------- |\n| `autoDismissTimeout`     | `auto-dismiss-timeout`      | If toast dismissMode is set to `automatic`, use this prop to define the time before the toast dismisses (in MILLISECONDS) (NOTE: Has a minimum value of `5000ms`) | `number \\| undefined`                                                           | `5000`      |\n| `dismissButtonAriaLabel` | `dismiss-button-aria-label` | If toast can be manually dismissed, this prop sets a custom aria-label for the ic-button component                                                                | `string \\| undefined`                                                           | `"dismiss"` |\n| `dismissMode`            | `dismiss-mode`              | How the toast will be dismissed. If manual will display a dismiss button.                                                                                         | `"automatic" \\| "manual" \\| undefined`                                          | `"manual"`  |\n| `heading` _(required)_   | `heading`                   | The title to display at the start of the toast. (NOTE: Should be no more than `70` characters)                                                                    | `string`                                                                        | `undefined` |\n| `message`                | `message`                   | The main body message of the toast. (NOTE: Should be no more than `140` characters)                                                                               | `string \\| undefined`                                                           | `undefined` |\n| `neutralIconAriaLabel`   | `neutral-icon-aria-label`   | Provides a custom alt-text to be announced to screen readers, if slotting a custom neutral icon                                                                   | `string \\| undefined`                                                           | `undefined` |\n| `theme`                  | `theme`                     | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                           | `"dark" \\| "inherit" \\| "light"`                                                | `"inherit"` |\n| `variant`                | `variant`                   | The variant of the toast being rendered                                                                                                                           | `"ai" \\| "error" \\| "info" \\| "neutral" \\| "success" \\| "warning" \\| undefined` | `undefined` |\n\n\n## Events\n\n| Event       | Description                                  | Type                |\n| ----------- | -------------------------------------------- | ------------------- |\n| `icDismiss` | Is emitted when the user dismisses the toast | `CustomEvent<void>` |\n\n\n## Slots\n\n| Slot             | Description                                                                                                         |\n| ---------------- | ------------------------------------------------------------------------------------------------------------------- |\n| `"action"`       | IcButton or IcLink is placed below header and message. If used will default toast to manual `dismiss` type.         |\n| `"neutral-icon"` | A custom neutral icon is placed on the left side of the component. If used will default toast to `neutral` variant. |\n\n\n## CSS Custom Properties\n\n| Name                 | Description      |\n| -------------------- | ---------------- |\n| `--ic-z-index-toast` | z-index of toast |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-loading-indicator](../ic-loading-indicator)\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-toast --\x3e ic-typography\n  ic-toast --\x3e ic-loading-indicator\n  ic-toast --\x3e ic-button\n  ic-loading-indicator --\x3e ic-typography\n  ic-button --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-tooltip --\x3e ic-typography\n  style ic-toast fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_toast_region_readme_namespaceObject="# ic-toast-region\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property    | Attribute | Description                        | Type                              | Default     |\n| ----------- | --------- | ---------------------------------- | --------------------------------- | ----------- |\n| `openToast` | --        | The toast element to be displayed. | `HTMLIcToastElement \\| undefined` | `undefined` |\n\n\n----------------------------------------------\n\n\n";var ic_toast_stories=__webpack_require__("./src/components/ic-toast/ic-toast.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_toast_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject+ic_toast_region_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-toast/ic-toast.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoDismiss:()=>AutoDismiss,CustomNeutralIconAndDismissAriaLabel:()=>CustomNeutralIconAndDismissAriaLabel,Default:()=>Default,ExampleOnPage:()=>ExampleOnPage,MultilineMessage:()=>MultilineMessage,Playground:()=>Playground,SlottedActionElements:()=>SlottedActionElements,WithVariant:()=>WithVariant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Toast",component:"ic-toast"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      </script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>`,name:"Default"},WithVariant={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      </script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading="Your coffee is ready"
          message="Please dismiss and collect"
          variant="success"
        ></ic-toast>
      </ic-toast-region>`,name:"With variant"},MultilineMessage={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      </script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading="Your coffee is ready"
          message="Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Don't delay! We wouldn't want you to lose out on your fantastic coffee now would we?"
        ></ic-toast>
      </ic-toast-region>`,name:"Multiline message"},SlottedActionElements={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<button onclick="func()">Display toast 1</button>
      <button onclick="func2()">Display toast 2</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
        function func2() {
          var x = document.getElementById("toast2");
          toastRegion.openToast = x;
        }
      </script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading="Your coffee had issues"
          message="Please dismiss and try again"
          variant="warning"
        >
          <ic-button slot="action" appearance="light">Click me</ic-button>
        </ic-toast>
        <ic-toast
          id="toast2"
          heading="Your coffee was lost"
          message="Please dismiss and try again"
          variant="error"
        >
          <ic-link href="/" slot="action" theme="dark">Click me</ic-link>
        </ic-toast>
      </ic-toast-region>`,name:"Slotted action elements"},AutoDismiss={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<button onclick="func()">Display toast 1</button>
      <button onclick="func2()">Display toast 2</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
        function func2() {
          var x = document.getElementById("toast2");
          toastRegion.openToast = x;
        }
      </script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          variant="info"
          heading="Your coffee is ready"
          message="This alert will dismiss itself, please collect your java"
          dismiss-mode="automatic"
          auto-dismiss-timeout="10000"
        ></ic-toast>
        <ic-toast
          id="toast2"
          heading="Your coffee was lost"
          message="This alert will dismiss itself, sorry about the coffee"
          variant="error"
          dismiss-mode="automatic"
          auto-dismiss-timeout="10000"
        ></ic-toast>
      </ic-toast-region>`,name:"Auto dismiss"},CustomNeutralIconAndDismissAriaLabel={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      </script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading="Your coffee is ready"
          variant="neutral"
          neutral-icon-aria-label="Hello world"
          dismiss-button-aria-label="dismiss me"
        >
          <svg
            slot="neutral-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"
            />
          </svg>
        </ic-toast>
      </ic-toast-region>`,name:"Custom neutral icon and dismiss aria-label"},ExampleOnPage={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      </script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>
      <div
        id="header"
        style="width:100%;height:80px;background-color:#23508e;color:var(--ic-architectural-white)"
      >
        <ic-typography variant="h1">Header</ic-typography>
      </div>
      <div id="topPageEl">
        <ic-typography variant="h2">Top of the page</ic-typography>
      </div>
      <ic-typography variant="h3">Some content</ic-typography>
      <button onclick="func()">Display toast</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit
        turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis
        in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper
        lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula,
        egestas quis rutrum id, vulputate eget diam. Integer mattis quis nisi id
        blandit. Duis nisi lectus, suscipit elementum iaculis sed, porta et
        risus.
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">More content</ic-typography>
      <p>
        Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae.
        Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio
        aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu,
        blandit at enim. Pellentesque sollicitudin pellentesque tellus vel
        eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus
        nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend
        pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam
        non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum
        augue non urna tincidunt auctor in at libero. Sed in risus sit amet nisl
        tempor viverra. Phasellus maximus sapien eu erat maximus iaculis.
        Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent ut
        neque tincidunt, porta sem id, accumsan massa.
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">Some other content</ic-typography>
      <p>
        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa
        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at
        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi
        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur
        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.
        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est
        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,
        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas
        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac
        lacus eget sapien luctus ultricies in in nibh.
      </p>
      <p>
        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada
        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,
        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra
        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et
        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,
        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse
        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam
        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,
        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit
        pulvinar varius.
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">Some more</ic-typography>
      <p>
        Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis
        placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus
        ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero
        consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis
        quis quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet
        consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus
        aliquet orci pretium, nec pretium nulla faucibus
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">Nearly there</ic-typography>
      <p>
        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa
        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at
        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi
        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur
        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.
        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est
        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,
        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas
        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac
        lacus eget sapien luctus ultricies in in nibh.
      </p>
      <p>
        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada
        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,
        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra
        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et
        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,
        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse
        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam
        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,
        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit
        pulvinar varius.
      </p>
      <br />
      <br />
      <br />
      <ic-typography variant="h3">The end</ic-typography>
      <br />`,name:"Example on page"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      </script>
      <ic-toast-region>
        <ic-toast
          id="toast1"
          heading=${args.heading}
          message=${args.message}
          variant=${args.variant}
          dismiss-mode=${args.dismissMode}
          auto-dismiss-timeout=${args.autoDismissTimeout}
          neutral-icon-aria-label=${args.neutralIconAriaLabel}
          dismiss-button-aria-label=${args.dismissButtonAriaLabel}
          theme=${args.theme}
        >
          <ic-button slot=${args.actionSlot} appearance="light"
            >Click me</ic-button
          >
          <svg
            slot=${args.neutralIconSlot}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"
            />
          </svg>
        </ic-toast>
      </ic-toast-region>`,args:{autoDismissTimeout:5e3,dismissButtonAriaLabel:"dismiss",dismissMode:"manual",heading:"This is the heading",message:"This is the message",neutralIconAriaLabel:"",variant:"neutral",actionSlot:"action",neutralIconSlot:"neutral-icon",theme:"inherit"},argTypes:{dismissMode:{options:["manual","automatic"],control:{type:"inline-radio"}},variant:{options:["neutral","info","warning","error","success","ai",""],control:{type:"inline-radio"}},actionSlot:{options:["action",""],control:{type:"select"}},neutralIconSlot:{options:["neutral-icon",""],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","WithVariant","MultilineMessage","SlottedActionElements","AutoDismiss","CustomNeutralIconAndDismissAriaLabel","ExampleOnPage","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>\n      </ic-toast-region>`,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},WithVariant.parameters={...WithVariant.parameters,docs:{...WithVariant.parameters?.docs,source:{originalSource:'{\n  render: () => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast\n          id="toast1"\n          heading="Your coffee is ready"\n          message="Please dismiss and collect"\n          variant="success"\n        ></ic-toast>\n      </ic-toast-region>`,\n  name: "With variant"\n}',...WithVariant.parameters?.docs?.source}}},MultilineMessage.parameters={...MultilineMessage.parameters,docs:{...MultilineMessage.parameters?.docs,source:{originalSource:'{\n  render: () => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast\n          id="toast1"\n          heading="Your coffee is ready"\n          message="Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Don\'t delay! We wouldn\'t want you to lose out on your fantastic coffee now would we?"\n        ></ic-toast>\n      </ic-toast-region>`,\n  name: "Multiline message"\n}',...MultilineMessage.parameters?.docs?.source}}},SlottedActionElements.parameters={...SlottedActionElements.parameters,docs:{...SlottedActionElements.parameters?.docs,source:{originalSource:'{\n  render: () => html`<button onclick="func()">Display toast 1</button>\n      <button onclick="func2()">Display toast 2</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n        function func2() {\n          var x = document.getElementById("toast2");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast\n          id="toast1"\n          heading="Your coffee had issues"\n          message="Please dismiss and try again"\n          variant="warning"\n        >\n          <ic-button slot="action" appearance="light">Click me</ic-button>\n        </ic-toast>\n        <ic-toast\n          id="toast2"\n          heading="Your coffee was lost"\n          message="Please dismiss and try again"\n          variant="error"\n        >\n          <ic-link href="/" slot="action" theme="dark">Click me</ic-link>\n        </ic-toast>\n      </ic-toast-region>`,\n  name: "Slotted action elements"\n}',...SlottedActionElements.parameters?.docs?.source}}},AutoDismiss.parameters={...AutoDismiss.parameters,docs:{...AutoDismiss.parameters?.docs,source:{originalSource:'{\n  render: () => html`<button onclick="func()">Display toast 1</button>\n      <button onclick="func2()">Display toast 2</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n        function func2() {\n          var x = document.getElementById("toast2");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast\n          id="toast1"\n          variant="info"\n          heading="Your coffee is ready"\n          message="This alert will dismiss itself, please collect your java"\n          dismiss-mode="automatic"\n          auto-dismiss-timeout="10000"\n        ></ic-toast>\n        <ic-toast\n          id="toast2"\n          heading="Your coffee was lost"\n          message="This alert will dismiss itself, sorry about the coffee"\n          variant="error"\n          dismiss-mode="automatic"\n          auto-dismiss-timeout="10000"\n        ></ic-toast>\n      </ic-toast-region>`,\n  name: "Auto dismiss"\n}',...AutoDismiss.parameters?.docs?.source}}},CustomNeutralIconAndDismissAriaLabel.parameters={...CustomNeutralIconAndDismissAriaLabel.parameters,docs:{...CustomNeutralIconAndDismissAriaLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast\n          id="toast1"\n          heading="Your coffee is ready"\n          variant="neutral"\n          neutral-icon-aria-label="Hello world"\n          dismiss-button-aria-label="dismiss me"\n        >\n          <svg\n            slot="neutral-icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"\n            />\n          </svg>\n        </ic-toast>\n      </ic-toast-region>`,\n  name: "Custom neutral icon and dismiss aria-label"\n}',...CustomNeutralIconAndDismissAriaLabel.parameters?.docs?.source}}},ExampleOnPage.parameters={...ExampleOnPage.parameters,docs:{...ExampleOnPage.parameters?.docs,source:{originalSource:'{\n  render: () => html` <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>\n      </ic-toast-region>\n      <div\n        id="header"\n        style="width:100%;height:80px;background-color:#23508e;color:var(--ic-architectural-white)"\n      >\n        <ic-typography variant="h1">Header</ic-typography>\n      </div>\n      <div id="topPageEl">\n        <ic-typography variant="h2">Top of the page</ic-typography>\n      </div>\n      <ic-typography variant="h3">Some content</ic-typography>\n      <button onclick="func()">Display toast</button>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit\n        turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis\n        in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper\n        lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula,\n        egestas quis rutrum id, vulputate eget diam. Integer mattis quis nisi id\n        blandit. Duis nisi lectus, suscipit elementum iaculis sed, porta et\n        risus.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">More content</ic-typography>\n      <p>\n        Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae.\n        Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio\n        aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu,\n        blandit at enim. Pellentesque sollicitudin pellentesque tellus vel\n        eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus\n        nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend\n        pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam\n        non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum\n        augue non urna tincidunt auctor in at libero. Sed in risus sit amet nisl\n        tempor viverra. Phasellus maximus sapien eu erat maximus iaculis.\n        Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent ut\n        neque tincidunt, porta sem id, accumsan massa.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">Some other content</ic-typography>\n      <p>\n        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi\n        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur\n        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.\n        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est\n        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,\n        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas\n        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac\n        lacus eget sapien luctus ultricies in in nibh.\n      </p>\n      <p>\n        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada\n        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,\n        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra\n        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et\n        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,\n        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse\n        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam\n        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,\n        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit\n        pulvinar varius.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">Some more</ic-typography>\n      <p>\n        Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis\n        placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus\n        ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero\n        consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis\n        quis quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet\n        consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus\n        aliquet orci pretium, nec pretium nulla faucibus\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">Nearly there</ic-typography>\n      <p>\n        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi\n        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur\n        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.\n        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est\n        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,\n        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas\n        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac\n        lacus eget sapien luctus ultricies in in nibh.\n      </p>\n      <p>\n        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada\n        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,\n        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra\n        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et\n        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,\n        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse\n        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam\n        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,\n        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit\n        pulvinar varius.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">The end</ic-typography>\n      <br />`,\n  name: "Example on page"\n}',...ExampleOnPage.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast\n          id="toast1"\n          heading=${args.heading}\n          message=${args.message}\n          variant=${args.variant}\n          dismiss-mode=${args.dismissMode}\n          auto-dismiss-timeout=${args.autoDismissTimeout}\n          neutral-icon-aria-label=${args.neutralIconAriaLabel}\n          dismiss-button-aria-label=${args.dismissButtonAriaLabel}\n          theme=${args.theme}\n        >\n          <ic-button slot=${args.actionSlot} appearance="light"\n            >Click me</ic-button\n          >\n          <svg\n            slot=${args.neutralIconSlot}\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"\n            />\n          </svg>\n        </ic-toast>\n      </ic-toast-region>`,\n  args: defaultArgs,\n  argTypes: {\n    dismissMode: {\n      options: ["manual", "automatic"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    variant: {\n      options: ["neutral", "info", "warning", "error", "success", "ai", ""],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    actionSlot: {\n      options: ["action", ""],\n      control: {\n        type: "select"\n      }\n    },\n    neutralIconSlot: {\n      options: ["neutral-icon", ""],\n      control: {\n        type: "select"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-toast-ic-toast-mdx.9bb5bb80.iframe.bundle.js.map