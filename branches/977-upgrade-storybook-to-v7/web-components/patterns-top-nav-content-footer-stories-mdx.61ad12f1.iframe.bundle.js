/*! For license information please see patterns-top-nav-content-footer-stories-mdx.61ad12f1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5192],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/patterns/top-nav-content-footer.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,singleColumnWithTopNavigationAndFooter:()=>singleColumnWithTopNavigationAndFooter});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit-html/lit-html.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Patterns/Single Column"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Single Column with Top Navigation and Footer",parameters:{loki:{skip:!0},layout:"fullscreen"},children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<div>
        <div style="display: flex; flex-direction: column; min-height: 100vh;">
          <ic-top-navigation
            app-title="Application Name"
            status="alpha"
            version="v0.0.7"
            content-aligned="center"
          >
            <svg
              slot="app-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
              />
            </svg>
            <ic-search-bar
              slot="search"
              placeholder="Search"
              label="Search"
            ></ic-search-bar>
            <ic-navigation-button
              label="button1"
              slot="buttons"
              onclick="alert('test')"
            >
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
                />
              </svg>
            </ic-navigation-button>
            <ic-navigation-item
              slot="navigation"
              label="Navigation"
              href="/"
            ></ic-navigation-item>
            <ic-navigation-group
              slot="navigation"
              label="Navigation group"
              expandable="true"
            >
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
            </ic-navigation-group>
          </ic-top-navigation>
          <main style="height: 100%">
            <ic-section-container aligned="center">
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus
                ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin
                sit amet augue sit amet dui suscipit lobortis. Nullam at
                consectetur ante. Suspendisse mollis ultricies porttitor. Nunc
                laoreet leo tortor, ut tristique odio finibus a. In rutrum
                convallis purus, vitae tristique tortor sagittis vel. Donec
                dictum nunc a elit tristique, et facilisis est condimentum.
                Pellentesque maximus nulla libero, nec auctor urna consequat
                nec. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. In maximus velit a erat
                volutpat, sit amet consequat velit rhoncus. Mauris pretium neque
                eget ante consectetur consectetur. Morbi a consequat lectus.
                Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue,
                laoreet id pretium id, efficitur nec leo.</ic-typography
              >
            </ic-section-container>
          </main>
        </div>
        <ic-footer
          aligned="full-width"
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
          please get in touch."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        ></ic-footer>
      </div>`})})]})}const singleColumnWithTopNavigationAndFooter=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<div>
        <div style="display: flex; flex-direction: column; min-height: 100vh;">
          <ic-top-navigation
            app-title="Application Name"
            status="alpha"
            version="v0.0.7"
            content-aligned="center"
          >
            <svg
              slot="app-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
              />
            </svg>
            <ic-search-bar
              slot="search"
              placeholder="Search"
              label="Search"
            ></ic-search-bar>
            <ic-navigation-button
              label="button1"
              slot="buttons"
              onclick="alert('test')"
            >
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
                />
              </svg>
            </ic-navigation-button>
            <ic-navigation-item
              slot="navigation"
              label="Navigation"
              href="/"
            ></ic-navigation-item>
            <ic-navigation-group
              slot="navigation"
              label="Navigation group"
              expandable="true"
            >
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
            </ic-navigation-group>
          </ic-top-navigation>
          <main style="height: 100%">
            <ic-section-container aligned="center">
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus
                ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin
                sit amet augue sit amet dui suscipit lobortis. Nullam at
                consectetur ante. Suspendisse mollis ultricies porttitor. Nunc
                laoreet leo tortor, ut tristique odio finibus a. In rutrum
                convallis purus, vitae tristique tortor sagittis vel. Donec
                dictum nunc a elit tristique, et facilisis est condimentum.
                Pellentesque maximus nulla libero, nec auctor urna consequat
                nec. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. In maximus velit a erat
                volutpat, sit amet consequat velit rhoncus. Mauris pretium neque
                eget ante consectetur consectetur. Morbi a consequat lectus.
                Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue,
                laoreet id pretium id, efficitur nec leo.</ic-typography
              >
            </ic-section-container>
          </main>
        </div>
        <ic-footer
          aligned="full-width"
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
          please get in touch."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        ></ic-footer>
      </div>`;singleColumnWithTopNavigationAndFooter.storyName="Single Column with Top Navigation and Footer",singleColumnWithTopNavigationAndFooter.parameters={storySource:{source:'args => html`<div>\n        <div style="display: flex; flex-direction: column; min-height: 100vh;">\n          <ic-top-navigation\n            app-title="Application Name"\n            status="alpha"\n            version="v0.0.7"\n            content-aligned="center"\n          >\n            <svg\n              slot="app-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n              />\n            </svg>\n            <ic-search-bar\n              slot="search"\n              placeholder="Search"\n              label="Search"\n            ></ic-search-bar>\n            <ic-navigation-button\n              label="button1"\n              slot="buttons"\n              onclick="alert(\'test\')"\n            >\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n                fill="#000000"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n                />\n              </svg>\n            </ic-navigation-button>\n            <ic-navigation-item\n              slot="navigation"\n              label="Navigation"\n              href="/"\n            ></ic-navigation-item>\n            <ic-navigation-group\n              slot="navigation"\n              label="Navigation group"\n              expandable="true"\n            >\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n            </ic-navigation-group>\n          </ic-top-navigation>\n          <main style="height: 100%">\n            <ic-section-container aligned="center">\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus\n                ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin\n                sit amet augue sit amet dui suscipit lobortis. Nullam at\n                consectetur ante. Suspendisse mollis ultricies porttitor. Nunc\n                laoreet leo tortor, ut tristique odio finibus a. In rutrum\n                convallis purus, vitae tristique tortor sagittis vel. Donec\n                dictum nunc a elit tristique, et facilisis est condimentum.\n                Pellentesque maximus nulla libero, nec auctor urna consequat\n                nec. Class aptent taciti sociosqu ad litora torquent per conubia\n                nostra, per inceptos himenaeos. In maximus velit a erat\n                volutpat, sit amet consequat velit rhoncus. Mauris pretium neque\n                eget ante consectetur consectetur. Morbi a consequat lectus.\n                Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue,\n                laoreet id pretium id, efficitur nec leo.</ic-typography\n              >\n            </ic-section-container>\n          </main>\n        </div>\n        <ic-footer\n          aligned="full-width"\n          description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n          please get in touch."\n          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        ></ic-footer>\n      </div>`'},loki:{skip:!0},layout:"fullscreen"};const componentMeta={title:"Patterns/Single Column",tags:["stories-mdx"],includeStories:["singleColumnWithTopNavigationAndFooter"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["singleColumnWithTopNavigationAndFooter"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=patterns-top-nav-content-footer-stories-mdx.61ad12f1.iframe.bundle.js.map