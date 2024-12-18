/*! For license information please see components-ic-toast-ic-toast-stories-mdx.11b85e83.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8819],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-toast/ic-toast.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,autoDismiss:()=>autoDismiss,customNeutralIconAndDismissAriaLabel:()=>customNeutralIconAndDismissAriaLabel,default:()=>ic_toast_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,deprecatedSetVisible:()=>deprecatedSetVisible,exampleOnPage:()=>exampleOnPage,multilineMessage:()=>multilineMessage,playground:()=>playground,slottedActionElements:()=>slottedActionElements,withVariant:()=>withVariant});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-toast\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                 | Attribute                   | Description                                                                                                                                                       | Type                                                       | Default     |\n| ------------------------ | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |\n| `autoDismissTimeout`     | `auto-dismiss-timeout`      | If toast dismissMode is set to `automatic`, use this prop to define the time before the toast dismisses (in MILLISECONDS) (NOTE: Has a minimum value of `5000ms`) | `number`                                                   | `5000`      |\n| `dismissButtonAriaLabel` | `dismiss-button-aria-label` | If toast can be manually dismissed, this prop sets a custom aria-label for the ic-button component                                                                | `string`                                                   | `"dismiss"` |\n| `dismissMode`            | `dismiss-mode`              | How the toast will be dismissed. If manual will display a dismiss button.                                                                                         | `"automatic" \\| "manual"`                                  | `"manual"`  |\n| `heading` _(required)_   | `heading`                   | The title to display at the start of the toast. (NOTE: Should be no more than `70` characters)                                                                    | `string`                                                   | `undefined` |\n| `message`                | `message`                   | The main body message of the toast. (NOTE: Should be no more than `140` characters)                                                                               | `string`                                                   | `undefined` |\n| `neutralIconAriaLabel`   | `neutral-icon-aria-label`   | Provides a custom alt-text to be announced to screen readers, if slotting a custom neutral icon                                                                   | `string`                                                   | `undefined` |\n| `variant`                | `variant`                   | The variant of the toast being rendered                                                                                                                           | `"error" \\| "info" \\| "neutral" \\| "success" \\| "warning"` | `undefined` |\n\n\n## Events\n\n| Event       | Description                                  | Type                |\n| ----------- | -------------------------------------------- | ------------------- |\n| `icDismiss` | Is emitted when the user dismisses the toast | `CustomEvent<void>` |\n\n\n## Slots\n\n| Slot             | Description                                                                                                         |\n| ---------------- | ------------------------------------------------------------------------------------------------------------------- |\n| `"action"`       | IcButton or IcLink is placed below header and message. If used will default toast to manual `dismiss` type.         |\n| `"neutral-icon"` | A custom neutral icon is placed on the left side of the component. If used will default toast to `neutral` variant. |\n\n\n## CSS Custom Properties\n\n| Name                 | Description      |\n| -------------------- | ---------------- |\n| `--ic-z-index-toast` | z-index of toast |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-loading-indicator](../ic-loading-indicator)\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-toast --\x3e ic-typography\n  ic-toast --\x3e ic-loading-indicator\n  ic-toast --\x3e ic-button\n  ic-loading-indicator --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-tooltip --\x3e ic-typography\n  style ic-toast fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={autoDismissTimeout:5e3,dismissButtonAriaLabel:"dismiss",dismissMode:"manual",heading:"This is the heading",message:"This is the message",neutralIconAriaLabel:"",variant:"neutral",actionSlot:"action",neutralIconSlot:"neutral-icon"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Toast",component:"ic-toast"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      </script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-variant",children:"With variant"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With variant",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<button onclick="func()">Display toast</button>
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
      </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multiline-message",children:"Multiline message"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Multiline message",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<button onclick="func()">Display toast</button>
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
        </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-action-elements",children:"Slotted action elements"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted action elements",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<button onclick="func()">Display toast 1</button>
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
            <ic-link href="/" slot="action" appearance="light"
              >Click me</ic-link
            >
          </ic-toast>
        </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"auto-dismiss",children:"Auto dismiss"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Auto dismiss",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<button onclick="func()">Display toast 1</button>
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
            message="Please dismiss and collect"
            dismiss-mode="automatic"
            auto-dismiss-timeout="10000"
          ></ic-toast>
          <ic-toast
            id="toast2"
            heading="Your coffee was lost"
            message="Please dismiss and try again"
            variant="error"
            dismiss-mode="automatic"
            auto-dismiss-timeout="10000"
          ></ic-toast>
        </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-neutral-icon-and-dismiss-aria-label",children:"Custom neutral icon and dismiss aria-label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Custom neutral icon and dismiss aria-label",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<button onclick="func()">Display toast</button>
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
      </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"example-on-page",children:"Example on page"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Example on page",parameters:{loki:{skip:!0}},children:args=>lit_html.qy` <script>
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
      <br />`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---setvisible",children:"Deprecated - setVisible"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Deprecated - setVisible",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.setVisible(x);
        }
      </script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{dismissMode:{options:["manual","automatic"],control:{type:"inline-radio"}},variant:{options:["neutral","info","warning","error","success",""],control:{type:"select"}},actionSlot:{options:["action",""],control:{type:"select"}},neutralIconSlot:{options:["neutral-icon",""],control:{type:"select"}}},name:"Playground",children:args=>lit_html.qy`<button onclick="func()">Display toast</button>
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
        </ic-toast-region>`})})]})}const defaultStory=args=>lit_html.qy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      </script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>\n      </ic-toast-region>`'},loki:{skip:!0}};const withVariant=args=>lit_html.qy`<button onclick="func()">Display toast</button>
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
      </ic-toast-region>`;withVariant.storyName="With variant",withVariant.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast\n          id="toast1"\n          heading="Your coffee is ready"\n          message="Please dismiss and collect"\n          variant="success"\n        ></ic-toast>\n      </ic-toast-region>`'},loki:{skip:!0}};const multilineMessage=args=>lit_html.qy`<button onclick="func()">Display toast</button>
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
        </ic-toast-region>`;multilineMessage.storyName="Multiline message",multilineMessage.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast</button>\n        <script>\n          var toastRegion = document.querySelector("ic-toast-region");\n          function func() {\n            var x = document.getElementById("toast1");\n            toastRegion.openToast = x;\n          }\n        <\/script>\n        <ic-toast-region>\n          <ic-toast\n            id="toast1"\n            heading="Your coffee is ready"\n            message="Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Don\'t delay! We wouldn\'t want you to lose out on your fantastic coffee now would we?"\n          ></ic-toast>\n        </ic-toast-region>`'},loki:{skip:!0}};const slottedActionElements=args=>lit_html.qy`<button onclick="func()">Display toast 1</button>
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
            <ic-link href="/" slot="action" appearance="light"
              >Click me</ic-link
            >
          </ic-toast>
        </ic-toast-region>`;slottedActionElements.storyName="Slotted action elements",slottedActionElements.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast 1</button>\n        <button onclick="func2()">Display toast 2</button>\n        <script>\n          var toastRegion = document.querySelector("ic-toast-region");\n          function func() {\n            var x = document.getElementById("toast1");\n            toastRegion.openToast = x;\n          }\n          function func2() {\n            var x = document.getElementById("toast2");\n            toastRegion.openToast = x;\n          }\n        <\/script>\n        <ic-toast-region>\n          <ic-toast\n            id="toast1"\n            heading="Your coffee had issues"\n            message="Please dismiss and try again"\n            variant="warning"\n          >\n            <ic-button slot="action" appearance="light">Click me</ic-button>\n          </ic-toast>\n          <ic-toast\n            id="toast2"\n            heading="Your coffee was lost"\n            message="Please dismiss and try again"\n            variant="error"\n          >\n            <ic-link href="/" slot="action" appearance="light"\n              >Click me</ic-link\n            >\n          </ic-toast>\n        </ic-toast-region>`'},loki:{skip:!0}};const autoDismiss=args=>lit_html.qy`<button onclick="func()">Display toast 1</button>
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
            message="Please dismiss and collect"
            dismiss-mode="automatic"
            auto-dismiss-timeout="10000"
          ></ic-toast>
          <ic-toast
            id="toast2"
            heading="Your coffee was lost"
            message="Please dismiss and try again"
            variant="error"
            dismiss-mode="automatic"
            auto-dismiss-timeout="10000"
          ></ic-toast>
        </ic-toast-region>`;autoDismiss.storyName="Auto dismiss",autoDismiss.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast 1</button>\n        <button onclick="func2()">Display toast 2</button>\n        <script>\n          var toastRegion = document.querySelector("ic-toast-region");\n          function func() {\n            var x = document.getElementById("toast1");\n            toastRegion.openToast = x;\n          }\n          function func2() {\n            var x = document.getElementById("toast2");\n            toastRegion.openToast = x;\n          }\n        <\/script>\n        <ic-toast-region>\n          <ic-toast\n            id="toast1"\n            variant="info"\n            heading="Your coffee is ready"\n            message="Please dismiss and collect"\n            dismiss-mode="automatic"\n            auto-dismiss-timeout="10000"\n          ></ic-toast>\n          <ic-toast\n            id="toast2"\n            heading="Your coffee was lost"\n            message="Please dismiss and try again"\n            variant="error"\n            dismiss-mode="automatic"\n            auto-dismiss-timeout="10000"\n          ></ic-toast>\n        </ic-toast-region>`'},loki:{skip:!0}};const customNeutralIconAndDismissAriaLabel=args=>lit_html.qy`<button onclick="func()">Display toast</button>
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
      </ic-toast-region>`;customNeutralIconAndDismissAriaLabel.storyName="Custom neutral icon and dismiss aria-label",customNeutralIconAndDismissAriaLabel.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast\n          id="toast1"\n          heading="Your coffee is ready"\n          variant="neutral"\n          neutral-icon-aria-label="Hello world"\n          dismiss-button-aria-label="dismiss me"\n        >\n          <svg\n            slot="neutral-icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"\n            />\n          </svg>\n        </ic-toast>\n      </ic-toast-region>`'},loki:{skip:!0}};const exampleOnPage=args=>lit_html.qy` <script>
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
      <br />`;exampleOnPage.storyName="Example on page",exampleOnPage.parameters={storySource:{source:'args => html` <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>\n      </ic-toast-region>\n      <div\n        id="header"\n        style="width:100%;height:80px;background-color:#23508e;color:var(--ic-architectural-white)"\n      >\n        <ic-typography variant="h1">Header</ic-typography>\n      </div>\n      <div id="topPageEl">\n        <ic-typography variant="h2">Top of the page</ic-typography>\n      </div>\n      <ic-typography variant="h3">Some content</ic-typography>\n      <button onclick="func()">Display toast</button>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit\n        turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis\n        in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper\n        lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula,\n        egestas quis rutrum id, vulputate eget diam. Integer mattis quis nisi id\n        blandit. Duis nisi lectus, suscipit elementum iaculis sed, porta et\n        risus.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">More content</ic-typography>\n      <p>\n        Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae.\n        Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio\n        aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu,\n        blandit at enim. Pellentesque sollicitudin pellentesque tellus vel\n        eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus\n        nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend\n        pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam\n        non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum\n        augue non urna tincidunt auctor in at libero. Sed in risus sit amet nisl\n        tempor viverra. Phasellus maximus sapien eu erat maximus iaculis.\n        Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent ut\n        neque tincidunt, porta sem id, accumsan massa.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">Some other content</ic-typography>\n      <p>\n        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi\n        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur\n        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.\n        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est\n        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,\n        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas\n        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac\n        lacus eget sapien luctus ultricies in in nibh.\n      </p>\n      <p>\n        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada\n        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,\n        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra\n        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et\n        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,\n        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse\n        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam\n        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,\n        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit\n        pulvinar varius.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">Some more</ic-typography>\n      <p>\n        Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis\n        placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus\n        ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero\n        consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis\n        quis quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet\n        consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus\n        aliquet orci pretium, nec pretium nulla faucibus\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">Nearly there</ic-typography>\n      <p>\n        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi\n        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur\n        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.\n        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est\n        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,\n        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas\n        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac\n        lacus eget sapien luctus ultricies in in nibh.\n      </p>\n      <p>\n        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada\n        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,\n        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra\n        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et\n        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,\n        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse\n        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam\n        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,\n        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit\n        pulvinar varius.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">The end</ic-typography>\n      <br />`'},loki:{skip:!0}};const deprecatedSetVisible=args=>lit_html.qy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.setVisible(x);
        }
      </script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>`;deprecatedSetVisible.storyName="Deprecated - setVisible",deprecatedSetVisible.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.setVisible(x);\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>\n      </ic-toast-region>`'},loki:{skip:!0}};const playground=args=>lit_html.qy`<button onclick="func()">Display toast</button>
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
        </ic-toast-region>`;playground.storyName="Playground",playground.argTypes={dismissMode:{options:["manual","automatic"],control:{type:"inline-radio"}},variant:{options:["neutral","info","warning","error","success",""],control:{type:"select"}},actionSlot:{options:["action",""],control:{type:"select"}},neutralIconSlot:{options:["neutral-icon",""],control:{type:"select"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast</button>\n        <script>\n          var toastRegion = document.querySelector("ic-toast-region");\n          function func() {\n            var x = document.getElementById("toast1");\n            toastRegion.openToast = x;\n          }\n        <\/script>\n        <ic-toast-region>\n          <ic-toast\n            id="toast1"\n            heading=${args.heading}\n            message=${args.message}\n            variant=${args.variant}\n            dismiss-mode=${args.dismissMode}\n            auto-dismiss-timeout=${args.autoDismissTimeout}\n            neutral-icon-aria-label=${args.neutralIconAriaLabel}\n            dismiss-button-aria-label=${args.dismissButtonAriaLabel}\n          >\n            <ic-button slot=${args.actionSlot} appearance="light"\n              >Click me</ic-button\n            >\n            <svg\n              slot=${args.neutralIconSlot}\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"\n              />\n            </svg>\n          </ic-toast>\n        </ic-toast-region>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Toast",tags:["stories-mdx"],includeStories:["defaultStory","withVariant","multilineMessage","slottedActionElements","autoDismiss","customNeutralIconAndDismissAriaLabel","exampleOnPage","deprecatedSetVisible","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_toast_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","withVariant","multilineMessage","slottedActionElements","autoDismiss","customNeutralIconAndDismissAriaLabel","exampleOnPage","deprecatedSetVisible","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-toast-ic-toast-stories-mdx.11b85e83.iframe.bundle.js.map