/*! For license information please see components-ic-toast-ic-toast-stories-mdx.98ba530d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8088],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-toast/ic-toast.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,autoDismiss:()=>autoDismiss,customNeutralIconAndDismissAriaLabel:()=>customNeutralIconAndDismissAriaLabel,default:()=>ic_toast_stories,defaultStory:()=>defaultStory,deprecatedSetVisible:()=>deprecatedSetVisible,exampleOnPage:()=>exampleOnPage,multilineMessage:()=>multilineMessage,slottedActionElements:()=>slottedActionElements,withVariant:()=>withVariant});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-toast\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                 | Attribute                   | Description                                                                                                                                                       | Type                                                       | Default     |\n| ------------------------ | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |\n| `autoDismissTimeout`     | `auto-dismiss-timeout`      | If toast dismissMode is set to `automatic`, use this prop to define the time before the toast dismisses (in MILLISECONDS) (NOTE: Has a minimum value of `5000ms`) | `number`                                                   | `5000`      |\n| `dismissButtonAriaLabel` | `dismiss-button-aria-label` | If toast can be manually dismissed, this prop sets a custom aria-label for the ic-button component                                                                | `string`                                                   | `"dismiss"` |\n| `dismissMode`            | `dismiss-mode`              | How the toast will be dismissed. If manual will display a dismiss button.                                                                                         | `"automatic" \\| "manual"`                                  | `"manual"`  |\n| `heading` _(required)_   | `heading`                   | The title to display at the start of the toast. (NOTE: Should be no more than `70` characters)                                                                    | `string`                                                   | `undefined` |\n| `message`                | `message`                   | The main body message of the toast. (NOTE: Should be no more than `140` characters)                                                                               | `string`                                                   | `undefined` |\n| `neutralIconAriaLabel`   | `neutral-icon-aria-label`   | Provides a custom alt-text to be announced to screen readers, if slotting a custom neutral icon                                                                   | `string`                                                   | `undefined` |\n| `variant`                | `variant`                   | The variant of the toast being rendered                                                                                                                           | `"error" \\| "info" \\| "neutral" \\| "success" \\| "warning"` | `undefined` |\n\n\n## Events\n\n| Event       | Description                                  | Type                |\n| ----------- | -------------------------------------------- | ------------------- |\n| `icDismiss` | Is emitted when the user dismisses the toast | `CustomEvent<void>` |\n\n\n## Slots\n\n| Slot             | Description                                                                                                         |\n| ---------------- | ------------------------------------------------------------------------------------------------------------------- |\n| `"action"`       | IcButton or IcLink is placed below header and message. If used will default toast to manual `dismiss` type.         |\n| `"neutral-icon"` | A custom neutral icon is placed on the left side of the component. If used will default toast to `neutral` variant. |\n\n\n## CSS Custom Properties\n\n| Name                 | Description      |\n| -------------------- | ---------------- |\n| `--ic-z-index-toast` | z-index of toast |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-loading-indicator](../ic-loading-indicator)\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-toast --\x3e ic-typography\n  ic-toast --\x3e ic-loading-indicator\n  ic-toast --\x3e ic-button\n  ic-loading-indicator --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-tooltip --\x3e ic-typography\n  style ic-toast fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Toast",component:"ic-toast"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      </script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-variant",children:"With variant"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With variant",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<button onclick="func()">Display toast</button>
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
      </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multiline-message",children:"Multiline message"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Multiline message",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<button onclick="func()">Display toast</button>
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
            message="Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Dont delay! We wouldn't want you to lose out on your fantastic coffee now would we?"
          ></ic-toast>
        </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-action-elements",children:"Slotted action elements"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Slotted action elements",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<button onclick="func()">Display toast 1</button>
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
        </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"auto-dismiss",children:"Auto dismiss"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Auto dismiss",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<button onclick="func()">Display toast 1</button>
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
        </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-neutral-icon-and-dismiss-aria-label",children:"Custom neutral icon and dismiss aria-label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom neutral icon and dismiss aria-label",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<button onclick="func()">Display toast</button>
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
      </ic-toast-region>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"example-on-page",children:"Example on page"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Example on page",parameters:{loki:{skip:!0}},children:args=>lit_html.dy` <script>
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
      <br />`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---setvisible",children:"Deprecated - setVisible"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Deprecated - setVisible",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.setVisible(x);
        }
      </script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>`})})]})}const defaultStory=args=>lit_html.dy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.openToast = x;
        }
      </script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>\n      </ic-toast-region>`'},loki:{skip:!0}};const withVariant=args=>lit_html.dy`<button onclick="func()">Display toast</button>
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
      </ic-toast-region>`;withVariant.storyName="With variant",withVariant.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast\n          id="toast1"\n          heading="Your coffee is ready"\n          message="Please dismiss and collect"\n          variant="success"\n        ></ic-toast>\n      </ic-toast-region>`'},loki:{skip:!0}};const multilineMessage=args=>lit_html.dy`<button onclick="func()">Display toast</button>
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
            message="Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Dont delay! We wouldn't want you to lose out on your fantastic coffee now would we?"
          ></ic-toast>
        </ic-toast-region>`;multilineMessage.storyName="Multiline message",multilineMessage.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast</button>\n        <script>\n          var toastRegion = document.querySelector("ic-toast-region");\n          function func() {\n            var x = document.getElementById("toast1");\n            toastRegion.openToast = x;\n          }\n        <\/script>\n        <ic-toast-region>\n          <ic-toast\n            id="toast1"\n            heading="Your coffee is ready"\n            message="Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Dont delay! We wouldn\'t want you to lose out on your fantastic coffee now would we?"\n          ></ic-toast>\n        </ic-toast-region>`'},loki:{skip:!0}};const slottedActionElements=args=>lit_html.dy`<button onclick="func()">Display toast 1</button>
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
        </ic-toast-region>`;slottedActionElements.storyName="Slotted action elements",slottedActionElements.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast 1</button>\n        <button onclick="func2()">Display toast 2</button>\n        <script>\n          var toastRegion = document.querySelector("ic-toast-region");\n          function func() {\n            var x = document.getElementById("toast1");\n            toastRegion.openToast = x;\n          }\n          function func2() {\n            var x = document.getElementById("toast2");\n            toastRegion.openToast = x;\n          }\n        <\/script>\n        <ic-toast-region>\n          <ic-toast\n            id="toast1"\n            heading="Your coffee had issues"\n            message="Please dismiss and try again"\n            variant="warning"\n          >\n            <ic-button slot="action" appearance="light">Click me</ic-button>\n          </ic-toast>\n          <ic-toast\n            id="toast2"\n            heading="Your coffee was lost"\n            message="Please dismiss and try again"\n            variant="error"\n          >\n            <ic-link href="/" slot="action" appearance="light"\n              >Click me</ic-link\n            >\n          </ic-toast>\n        </ic-toast-region>`'},loki:{skip:!0}};const autoDismiss=args=>lit_html.dy`<button onclick="func()">Display toast 1</button>
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
        </ic-toast-region>`;autoDismiss.storyName="Auto dismiss",autoDismiss.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast 1</button>\n        <button onclick="func2()">Display toast 2</button>\n        <script>\n          var toastRegion = document.querySelector("ic-toast-region");\n          function func() {\n            var x = document.getElementById("toast1");\n            toastRegion.openToast = x;\n          }\n          function func2() {\n            var x = document.getElementById("toast2");\n            toastRegion.openToast = x;\n          }\n        <\/script>\n        <ic-toast-region>\n          <ic-toast\n            id="toast1"\n            variant="info"\n            heading="Your coffee is ready"\n            message="Please dismiss and collect"\n            dismiss-mode="automatic"\n            auto-dismiss-timeout="10000"\n          ></ic-toast>\n          <ic-toast\n            id="toast2"\n            heading="Your coffee was lost"\n            message="Please dismiss and try again"\n            variant="error"\n            dismiss-mode="automatic"\n            auto-dismiss-timeout="10000"\n          ></ic-toast>\n        </ic-toast-region>`'},loki:{skip:!0}};const customNeutralIconAndDismissAriaLabel=args=>lit_html.dy`<button onclick="func()">Display toast</button>
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
      </ic-toast-region>`;customNeutralIconAndDismissAriaLabel.storyName="Custom neutral icon and dismiss aria-label",customNeutralIconAndDismissAriaLabel.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast\n          id="toast1"\n          heading="Your coffee is ready"\n          variant="neutral"\n          neutral-icon-aria-label="Hello world"\n          dismiss-button-aria-label="dismiss me"\n        >\n          <svg\n            slot="neutral-icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z"\n            />\n          </svg>\n        </ic-toast>\n      </ic-toast-region>`'},loki:{skip:!0}};const exampleOnPage=args=>lit_html.dy` <script>
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
      <br />`;exampleOnPage.storyName="Example on page",exampleOnPage.parameters={storySource:{source:'args => html` <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.openToast = x;\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>\n      </ic-toast-region>\n      <div\n        id="header"\n        style="width:100%;height:80px;background-color:#23508e;color:var(--ic-architectural-white)"\n      >\n        <ic-typography variant="h1">Header</ic-typography>\n      </div>\n      <div id="topPageEl">\n        <ic-typography variant="h2">Top of the page</ic-typography>\n      </div>\n      <ic-typography variant="h3">Some content</ic-typography>\n      <button onclick="func()">Display toast</button>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit\n        turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis\n        in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper\n        lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula,\n        egestas quis rutrum id, vulputate eget diam. Integer mattis quis nisi id\n        blandit. Duis nisi lectus, suscipit elementum iaculis sed, porta et\n        risus.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">More content</ic-typography>\n      <p>\n        Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae.\n        Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio\n        aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu,\n        blandit at enim. Pellentesque sollicitudin pellentesque tellus vel\n        eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus\n        nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend\n        pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam\n        non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum\n        augue non urna tincidunt auctor in at libero. Sed in risus sit amet nisl\n        tempor viverra. Phasellus maximus sapien eu erat maximus iaculis.\n        Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent ut\n        neque tincidunt, porta sem id, accumsan massa.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">Some other content</ic-typography>\n      <p>\n        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi\n        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur\n        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.\n        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est\n        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,\n        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas\n        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac\n        lacus eget sapien luctus ultricies in in nibh.\n      </p>\n      <p>\n        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada\n        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,\n        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra\n        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et\n        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,\n        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse\n        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam\n        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,\n        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit\n        pulvinar varius.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">Some more</ic-typography>\n      <p>\n        Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis\n        placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus\n        ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero\n        consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis\n        quis quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet\n        consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus\n        aliquet orci pretium, nec pretium nulla faucibus\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">Nearly there</ic-typography>\n      <p>\n        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi\n        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur\n        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.\n        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est\n        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,\n        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas\n        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac\n        lacus eget sapien luctus ultricies in in nibh.\n      </p>\n      <p>\n        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada\n        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,\n        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra\n        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et\n        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,\n        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse\n        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam\n        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,\n        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit\n        pulvinar varius.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">The end</ic-typography>\n      <br />`'},loki:{skip:!0}};const deprecatedSetVisible=args=>lit_html.dy`<button onclick="func()">Display toast</button>
      <script>
        var toastRegion = document.querySelector("ic-toast-region");
        function func() {
          var x = document.getElementById("toast1");
          toastRegion.setVisible(x);
        }
      </script>
      <ic-toast-region>
        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
      </ic-toast-region>`;deprecatedSetVisible.storyName="Deprecated - setVisible",deprecatedSetVisible.parameters={storySource:{source:'args => html`<button onclick="func()">Display toast</button>\n      <script>\n        var toastRegion = document.querySelector("ic-toast-region");\n        function func() {\n          var x = document.getElementById("toast1");\n          toastRegion.setVisible(x);\n        }\n      <\/script>\n      <ic-toast-region>\n        <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>\n      </ic-toast-region>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Toast",tags:["stories-mdx"],includeStories:["defaultStory","withVariant","multilineMessage","slottedActionElements","autoDismiss","customNeutralIconAndDismissAriaLabel","exampleOnPage","deprecatedSetVisible"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_toast_stories=componentMeta,__namedExportsOrder=["defaultStory","withVariant","multilineMessage","slottedActionElements","autoDismiss","customNeutralIconAndDismissAriaLabel","exampleOnPage","deprecatedSetVisible"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-toast-ic-toast-stories-mdx.98ba530d.iframe.bundle.js.map