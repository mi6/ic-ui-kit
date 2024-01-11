/*! For license information please see components-ic-back-to-top-ic-back-to-top-stories-mdx.65ea3b31.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[7840],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-back-to-top/ic-back-to-top.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_back_to_top_stories,defaultStory:()=>defaultStory,pageExample:()=>pageExample});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject="# ic-back-to-top\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property              | Attribute | Description                                                     | Type     | Default     |\n| --------------------- | --------- | --------------------------------------------------------------- | -------- | ----------- |\n| `target` _(required)_ | `target`  | The ID of the element to jump back to when the link is clicked. | `string` | `undefined` |\n\n\n## CSS Custom Properties\n\n| Name                       | Description            |\n| -------------------------- | ---------------------- |\n| `--ic-z-index-back-to-top` | z-index of back to top |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-back-to-top --\x3e ic-typography\n  style ic-back-to-top fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Back to top",component:"ic-back-to-top"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Please switch to the Canvas and then choose to open the canvas in a new tab to see the best working illustration of this example."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:lit_html.dy`
      <div id="topEl" style="margin-top:-20px;">
        <ic-typography variant="h2">Top of the page</ic-typography>
      </div>
      <div style="height:1200px;"></div>
      <ic-back-to-top target="topEl"></ic-back-to-top>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"page-example",children:"Page example"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Please switch to the Canvas and then choose to open the canvas in a new tab to see the best working illustration of this example."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Page example",parameters:{loki:{skip:!0}},children:lit_html.dy`
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
      <br />
      <ic-back-to-top target="topPageEl"></ic-back-to-top>
      <footer>
        <div
          id="footer"
          style="width:100%;height:200px;background-color:#23508e;color:var(--ic-architectural-white)"
        >
          <ic-typography variant="h3">Footer</ic-typography>
        </div>
      </footer>
      <ic-classification-banner
        classification="official"
      ></ic-classification-banner>
    `})})]})}const defaultStory=()=>lit_html.dy`
      <div id="topEl" style="margin-top:-20px;">
        <ic-typography variant="h2">Top of the page</ic-typography>
      </div>
      <div style="height:1200px;"></div>
      <ic-back-to-top target="topEl"></ic-back-to-top>
    `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'html`\n      <div id="topEl" style="margin-top:-20px;">\n        <ic-typography variant="h2">Top of the page</ic-typography>\n      </div>\n      <div style="height:1200px;"></div>\n      <ic-back-to-top target="topEl"></ic-back-to-top>\n    `'}};const pageExample=()=>lit_html.dy`
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
      <br />
      <ic-back-to-top target="topPageEl"></ic-back-to-top>
      <footer>
        <div
          id="footer"
          style="width:100%;height:200px;background-color:#23508e;color:var(--ic-architectural-white)"
        >
          <ic-typography variant="h3">Footer</ic-typography>
        </div>
      </footer>
      <ic-classification-banner
        classification="official"
      ></ic-classification-banner>
    `;pageExample.storyName="Page example",pageExample.parameters={storySource:{source:'html`\n      <div\n        id="header"\n        style="width:100%;height:80px;background-color:#23508e;color:var(--ic-architectural-white)"\n      >\n        <ic-typography variant="h1">Header</ic-typography>\n      </div>\n      <div id="topPageEl">\n        <ic-typography variant="h2">Top of the page</ic-typography>\n      </div>\n      <ic-typography variant="h3">Some content</ic-typography>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit\n        turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis\n        in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper\n        lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula,\n        egestas quis rutrum id, vulputate eget diam. Integer mattis quis nisi id\n        blandit. Duis nisi lectus, suscipit elementum iaculis sed, porta et\n        risus.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">More content</ic-typography>\n      <p>\n        Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae.\n        Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio\n        aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu,\n        blandit at enim. Pellentesque sollicitudin pellentesque tellus vel\n        eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus\n        nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend\n        pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam\n        non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum\n        augue non urna tincidunt auctor in at libero. Sed in risus sit amet nisl\n        tempor viverra. Phasellus maximus sapien eu erat maximus iaculis.\n        Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent ut\n        neque tincidunt, porta sem id, accumsan massa.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">Some other content</ic-typography>\n      <p>\n        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi\n        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur\n        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.\n        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est\n        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,\n        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas\n        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac\n        lacus eget sapien luctus ultricies in in nibh.\n      </p>\n      <p>\n        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada\n        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,\n        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra\n        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et\n        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,\n        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse\n        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam\n        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,\n        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit\n        pulvinar varius.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">Some more</ic-typography>\n      <p>\n        Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis\n        placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus\n        ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero\n        consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis\n        quis quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet\n        consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus\n        aliquet orci pretium, nec pretium nulla faucibus\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">Nearly there</ic-typography>\n      <p>\n        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi\n        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur\n        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.\n        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est\n        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,\n        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas\n        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac\n        lacus eget sapien luctus ultricies in in nibh.\n      </p>\n      <p>\n        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada\n        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,\n        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra\n        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et\n        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,\n        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse\n        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam\n        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,\n        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit\n        pulvinar varius.\n      </p>\n      <br />\n      <br />\n      <br />\n      <ic-typography variant="h3">The end</ic-typography>\n      <br />\n      <ic-back-to-top target="topPageEl"></ic-back-to-top>\n      <footer>\n        <div\n          id="footer"\n          style="width:100%;height:200px;background-color:#23508e;color:var(--ic-architectural-white)"\n        >\n          <ic-typography variant="h3">Footer</ic-typography>\n        </div>\n      </footer>\n      <ic-classification-banner\n        classification="official"\n      ></ic-classification-banner>\n    `'},loki:{skip:!0}};const componentMeta={title:"Web Components/Back to top",tags:["stories-mdx"],includeStories:["defaultStory","pageExample"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_back_to_top_stories=componentMeta,__namedExportsOrder=["defaultStory","pageExample"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-back-to-top-ic-back-to-top-stories-mdx.65ea3b31.iframe.bundle.js.map