/*! For license information please see components-ic-side-navigation-ic-side-navigation-stories-mdx.c4bc9c14.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[689],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-side-navigation/ic-side-navigation.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,collapsedIconsWithLabels:()=>collapsedIconsWithLabels,default:()=>ic_side_navigation_stories,defaultStory:()=>defaultStory,disableAutoParentStyling:()=>disableAutoParentStyling,disableTopBarBehaviour:()=>disableTopBarBehaviour,expanded:()=>expanded,longAppVersionAndAppStatus:()=>longAppVersionAndAppStatus,shortTitle:()=>shortTitle,sideNavExpandedEvent:()=>sideNavExpandedEvent,slots:()=>slots,slotsUsingAppTitle:()=>slotsUsingAppTitle,slotsUsingAppTitleExpanded:()=>slotsUsingAppTitleExpanded,staticStory:()=>staticStory,usingUnnamedSlots:()=>usingUnnamedSlots});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-side-navigation\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                   | Attribute                     | Description                                                                                                         | Type      | Default     |\n| -------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |\n| `appTitle`                 | `app-title`                   | The app title to be displayed. This is required, unless a slotted app title link is used.                           | `string`  | `undefined` |\n| `collapsedIconLabels`      | `collapsed-icon-labels`       | If `true`, the icon and label will appear when side navigation is collapsed.                                        | `boolean` | `false`     |\n| `disableAutoParentStyling` | `disable-auto-parent-styling` | If `true`, automatic parent wrapper styling will be disabled.                                                       | `boolean` | `false`     |\n| `disableTopBarBehaviour`   | `disable-top-bar-behaviour`   | If `true`, the side navigation will not display as a top bar on small devices.                                      | `boolean` | `false`     |\n| `expanded`                 | `expanded`                    | If `true`, the side navigation will display in an expanded state.                                                   | `boolean` | `false`     |\n| `href`                     | `href`                        | The URL that the app title link points to.                                                                          | `string`  | `"/"`       |\n| `shortAppTitle`            | `short-app-title`             | The short title of the app to be displayed at small screen sizes in place of the app title.                         | `string`  | `""`        |\n| `static`                   | `static`                      | If `true`, the menu expand button will be removed (PLEASE NOTE: This takes effect on screen sizes 992px and above). | `boolean` | `false`     |\n| `status`                   | `status`                      | The status of the app to be displayed.                                                                              | `string`  | `undefined` |\n| `version`                  | `version`                     | The version of the app to be displayed.                                                                             | `string`  | `undefined` |\n\n\n## Events\n\n| Event             | Description                                                 | Type                            |\n| ----------------- | ----------------------------------------------------------- | ------------------------------- |\n| `sideNavExpanded` | Emitted when the side navigation is collapsed and expanded. | `CustomEvent<IcExpandedDetail>` |\n\n\n## Slots\n\n| Slot                     | Description                                                                                |\n| ------------------------ | ------------------------------------------------------------------------------------------ |\n| `"app-icon"`             | Content will be rendered adjacent to the app title at the very top of the side navigation. |\n| `"app-title"`            | Handle routing by nesting a route in the app title.                                        |\n| `"primary-navigation"`   | Content will be rendered at the top of the side navigation.                                |\n| `"secondary-navigation"` | Content will be rendered at the bottom of the side navigation.                             |\n\n\n## CSS Custom Properties\n\n| Name                           | Description                      |\n| ------------------------------ | -------------------------------- |\n| `--ic-z-index-side-navigation` | z-index of side navigation panel |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n- [ic-divider](../ic-divider)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-side-navigation --\x3e ic-typography\n  ic-side-navigation --\x3e ic-button\n  ic-side-navigation --\x3e ic-divider\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-side-navigation fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3",h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Side navigation",component:"ic-side-navigation"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
          href="https://www.google.com/"
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
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Search"
            selected="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <ic-badge
                text-label="1"
                slot="badge"
                variant="light"
                position="far"
              ></ic-badge>
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/">
              <ic-badge
                slot="badge"
                variant="light"
                position="far"
                type="dot"
              ></ic-badge>
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="Settings"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
              >
              <ic-typography
                >Aenean convallis libero id magna congue pellentesque. Nulla
                iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                molestie. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Integer sollicitudin in
                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
                vitae tellus. Curabitur pharetra commodo consequat. Aliquam
                consequat ipsum lacus, sed faucibus sapien mollis
                vel.</ic-typography
              >
            </ic-section-container>
          </main>
          <ic-footer
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
            <ic-footer-link slot="link" href="/">Components</ic-footer-link>
            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
            <div
              slot="logo"
              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
            >
              Logo
            </div>
          </ic-footer>
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"expanded",children:"Expanded"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Expanded",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation
          app-title="Application Title"
          version="v0.20.10-alpha"
          status="IN DEVELOPMENT"
          expanded="true"
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
          <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item slot="primary-navigation" href="/" label="Trends">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="END"
            expandable="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column;"
        >
          <main>
            <ic-button onclick="expandedClickHandler()">Expand</ic-button>
            <ic-button onclick="collapsedClickHandler()">Collapse</ic-button>
          </main>
          <footer>Footer</footer>
        </div>
      </div>
      <script>
        var icSideNav = document.querySelector("ic-side-navigation");
        function expandedClickHandler() {
          icSideNav.expanded = true;
        }
        function collapsedClickHandler() {
          icSideNav.expanded = false;
        }
      </script>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"long-app-version-and-app-status",children:"Long app version and app status"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Long app version and app status",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="This is a very very very very very very long app title"
          version="v0.0.0-alpha-beta-gamma-delta-release.01"
          status="Alpha-BETA-GAMMA-DELTA"
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
          <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Search"
            selected="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-item slot="primary-navigation" href="/" label="Trends">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="Settings"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
              >
              <ic-typography
                >Aenean convallis libero id magna congue pellentesque. Nulla
                iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                molestie. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Integer sollicitudin in
                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
                vitae tellus. Curabitur pharetra commodo consequat. Aliquam
                consequat ipsum lacus, sed faucibus sapien mollis
                vel.</ic-typography
              >
            </ic-section-container>
          </main>
          <ic-footer
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
            <ic-footer-link slot="link" href="/">Components</ic-footer-link>
            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
            <div
              slot="logo"
              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
            >
              Logo
            </div>
          </ic-footer>
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"short-title",children:"Short title"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Short title",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="Application Name"
          short-app-title="App Name"
          version="v0.0.0"
          status="BETA"
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
          <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Search"
            selected="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-item slot="primary-navigation" href="/" label="Trends">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="Settings"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
              >
              <ic-typography
                >Aenean convallis libero id magna congue pellentesque. Nulla
                iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                molestie. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Integer sollicitudin in
                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
                vitae tellus. Curabitur pharetra commodo consequat. Aliquam
                consequat ipsum lacus, sed faucibus sapien mollis
                vel.</ic-typography
              >
            </ic-section-container>
          </main>
          <ic-footer
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
            <ic-footer-link slot="link" href="/">Components</ic-footer-link>
            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
            <div
              slot="logo"
              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
            >
              Logo
            </div>
          </ic-footer>
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"static",children:"Static"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Static",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
          expanded="true"
          static="true"
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
          <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item slot="primary-navigation" href="/" label="Trends">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item slot="secondary-navigation" href="/" label="END">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column;"
        >
          <main>This is the content</main>
          <footer>Footer</footer>
        </div>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"collapsed-with-labels",children:"Collapsed with labels"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Collapsed icons with labels",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
          collapsed-icon-labels="true"
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
          <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item slot="secondary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>This is the content</main>
          <footer>Footer</footer>
        </div>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slots",children:"Slots"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slots",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation
          version="v0.0.0"
          status="BETA"
          app-title="Application Name"
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
          <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              class="active"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item>
              <a
                slot="navigation-item"
                href="/child-item-2"
                aria-label="Daily Tippers"
              >
                <svg
                  slot="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Daily Tippers
              </a>
            </ic-navigation-item>
          </ic-navigation-group>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>This is the content</main>
          <footer>Footer</footer>
        </div>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"using-unnamed-slots",children:"Using unnamed slots"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Using unnamed slots",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
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
          <ic-navigation-item slot="primary-navigation">
            <a class="active" href="/child-item-2" aria-label="Daily Tippers">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item>
              <a href="/child-item-2" aria-label="Daily Tippers">
                <svg
                  slot="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Daily Tippers
              </a>
            </ic-navigation-item>
          </ic-navigation-group>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>This is the content</main>
          <footer>Footer</footer>
        </div>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slots-using-app-title",children:"Slots using app-title"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slots using app-title",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation version="v0.0.0" status="BETA">
          <a href="/" slot="app-title">Application Name</a>
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
          <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              class="active"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Home
            </a>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item>
              <a
                slot="navigation-item"
                href="/child-item-2"
                aria-label="Daily Tippers"
              >
                <svg
                  slot="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed
                tempus, lacus in pretium molestie, lectus magna interdum risus,
                vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula
                lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum
                id.
              </a>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>This is the content</main>
          <footer>Footer</footer>
        </div>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slots-using-app-title-expanded",children:"Slots using app-title expanded"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slots using app-title expanded",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation version="v0.0.0" status="BETA" expanded="true">
          <a href="/" slot="app-title">Application Name</a>
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
          <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              class="active"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item>
              <a
                slot="navigation-item"
                href="/child-item-2"
                aria-label="Daily Tippers"
              >
                <svg
                  slot="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed
                tempus, lacus in pretium molestie, lectus magna interdum risus,
                vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula
                lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum
                id.
              </a>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>This is the content</main>
          <footer>Footer</footer>
        </div>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disable-top-bar-behaviour",children:"Disable top bar behaviour"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disable top bar behaviour",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
          disable-top-bar-behaviour="true"
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
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Search"
            selected="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/">
              <ic-badge
                text-label="1"
                slot="badge"
                variant="light"
                position="far"
              ></ic-badge>
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="Settings"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
              >
              <ic-typography
                >Aenean convallis libero id magna congue pellentesque. Nulla
                iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                molestie. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Integer sollicitudin in
                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
                vitae tellus. Curabitur pharetra commodo consequat. Aliquam
                consequat ipsum lacus, sed faucibus sapien mollis
                vel.</ic-typography
              >
            </ic-section-container>
          </main>
          <ic-footer
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
            <ic-footer-link slot="link" href="/">Components</ic-footer-link>
            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
            <div
              slot="logo"
              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
            >
              Logo
            </div>
          </ic-footer>
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disable-auto-parent-styling",children:"Disable auto parent styling"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disable auto parent styling",parameters:{layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
          disable-auto-parent-styling="true"
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
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Search"
            selected="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/">
              <ic-badge
                text-label="1"
                slot="badge"
                variant="light"
                position="far"
              ></ic-badge>
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="Settings"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
              >
              <ic-typography
                >Aenean convallis libero id magna congue pellentesque. Nulla
                iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                molestie. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Integer sollicitudin in
                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
                vitae tellus. Curabitur pharetra commodo consequat. Aliquam
                consequat ipsum lacus, sed faucibus sapien mollis
                vel.</ic-typography
              >
            </ic-section-container>
          </main>
          <ic-footer
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
            <ic-footer-link slot="link" href="/">Components</ic-footer-link>
            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
            <div
              slot="logo"
              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
            >
              Logo
            </div>
          </ic-footer>
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"side-nav-expanded-event",children:"Side nav expanded event"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Side nav expanded event",parameters:{loki:{skip:!0},layout:"fullscreen",loki:{skip:!0}},children:lit_html.qy`<script>
        var sideNav = document.querySelector("ic-side-navigation");
        sideNav.addEventListener("sideNavExpanded", function (event) {
          console.log(event.detail.sideNavExpanded);
        });
      </script>
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
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
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Search"
            selected="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/">
              <ic-badge
                text-label="1"
                slot="badge"
                variant="light"
                position="far"
              ></ic-badge>
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="Settings"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
              >
              <ic-typography
                >Aenean convallis libero id magna congue pellentesque. Nulla
                iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                molestie. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Integer sollicitudin in
                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
                vitae tellus. Curabitur pharetra commodo consequat. Aliquam
                consequat ipsum lacus, sed faucibus sapien mollis
                vel.</ic-typography
              >
            </ic-section-container>
          </main>
          <ic-footer
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
            <ic-footer-link slot="link" href="/">Components</ic-footer-link>
            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
            <div
              slot="logo"
              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
            >
              Logo
            </div>
          </ic-footer>
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div> `})})]})}const defaultStory=()=>lit_html.qy`
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
          href="https://www.google.com/"
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
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Search"
            selected="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <ic-badge
                text-label="1"
                slot="badge"
                variant="light"
                position="far"
              ></ic-badge>
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/">
              <ic-badge
                slot="badge"
                variant="light"
                position="far"
                type="dot"
              ></ic-badge>
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="Settings"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
              >
              <ic-typography
                >Aenean convallis libero id magna congue pellentesque. Nulla
                iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                molestie. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Integer sollicitudin in
                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
                vitae tellus. Curabitur pharetra commodo consequat. Aliquam
                consequat ipsum lacus, sed faucibus sapien mollis
                vel.</ic-typography
              >
            </ic-section-container>
          </main>
          <ic-footer
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
            <ic-footer-link slot="link" href="/">Components</ic-footer-link>
            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
            <div
              slot="logo"
              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
            >
              Logo
            </div>
          </ic-footer>
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div>
    `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'html`\n      <div style="display:flex; height:100%;">\n        <ic-side-navigation\n          app-title="Application Name"\n          version="v0.0.0"\n          status="BETA"\n          href="https://www.google.com/"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Search"\n            selected="true"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-divider slot="primary-navigation"></ic-divider>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item label="Different navigation" href="/">\n              <ic-badge\n                text-label="1"\n                slot="badge"\n                variant="light"\n                position="far"\n              ></ic-badge>\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n            <ic-navigation-item label="Navigation" href="/">\n              <ic-badge\n                slot="badge"\n                variant="light"\n                position="far"\n                type="dot"\n              ></ic-badge>\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n          </ic-navigation-group>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="This is a very very very long label for the navigation item"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="secondary-navigation"\n            href="/"\n            label="Settings"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column; flex-grow: 1;"\n        >\n          <main>\n            <ic-section-container>\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n                vestibulum venenatis facilisis. Nam tortor felis, auctor vel\n                ante quis, tempor interdum libero. In dictum sodales velit, eu\n                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id\n                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,\n                lectus magna interdum risus, vel fringilla libero ex eu dui.\n                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit\n                nisl, vitae congue ligula rutrum id.</ic-typography\n              >\n              <ic-typography\n                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,\n                ex nibh porttitor tellus, vel molestie justo odio vel purus.\n                Curabitur porttitor, tortor sed semper sollicitudin, odio odio\n                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies\n                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt\n                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.\n                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor\n                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.\n                Nam non lorem ante.</ic-typography\n              >\n              <ic-typography\n                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a\n                urna in commodo. Proin mauris augue, viverra id finibus id,\n                vulputate in ante. Aliquam volutpat hendrerit tellus vitae\n                tristique. Donec pellentesque enim arcu, at feugiat mauris\n                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam\n                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget\n                interdum lorem. Phasellus pretium urna id elit pharetra\n                hendrerit.</ic-typography\n              >\n              <ic-typography\n                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,\n                quis pretium velit ante nec felis. Vivamus efficitur scelerisque\n                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue\n                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,\n                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae\n                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet\n                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,\n                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras\n                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus\n                lobortis scelerisque libero vel scelerisque.</ic-typography\n              >\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Praesent eget orci condimentum, tempus tortor posuere, lacinia\n                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet\n                orci a risus facilisis porta. Orci varius natoque penatibus et\n                magnis dis parturient montes, nascetur ridiculus mus. Curabitur\n                a porttitor neque, ac dignissim velit. Morbi quis malesuada\n                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In\n                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi\n                blandit lacus a leo vehicula aliquet.</ic-typography\n              >\n              <ic-typography\n                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi\n                pretium. Etiam nec velit at orci varius porttitor. Aliquam\n                facilisis, elit non cursus fringilla, metus metus malesuada\n                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est\n                eget sodales ullamcorper, eros turpis euismod nulla, sed\n                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.\n                Interdum et malesuada fames ac ante ipsum primis in faucibus.\n                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris\n                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu\n                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam\n                porta nulla suscipit vestibulum. Sed iaculis enim leo, et\n                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor\n                massa. Sed et aliquam nisi.</ic-typography\n              >\n              <ic-typography\n                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo\n                orci. Suspendisse molestie posuere leo vitae posuere. Cras\n                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec\n                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,\n                condimentum ligula. Nullam maximus nulla quam, ut euismod est\n                feugiat at. Quisque ut venenatis ex, in facilisis sapien.\n                Pellentesque in orci vitae metus iaculis venenatis. Nunc\n                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in\n                venenatis ligula, non mollis quam. Suspendisse nec enim vel\n                massa finibus pretium et a urna. Etiam suscipit semper est, id\n                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum\n                ut laoreet et, euismod ac mi. Vestibulum tristique odio non\n                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,\n                tempus a augue sit amet, interdum vulputate\n                libero.</ic-typography\n              >\n              <ic-typography\n                >Aenean convallis libero id magna congue pellentesque. Nulla\n                iaculis interdum porta. Aenean laoreet scelerisque nulla vel\n                molestie. Class aptent taciti sociosqu ad litora torquent per\n                conubia nostra, per inceptos himenaeos. Integer sollicitudin in\n                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan\n                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas\n                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac\n                vitae tellus. Curabitur pharetra commodo consequat. Aliquam\n                consequat ipsum lacus, sed faucibus sapien mollis\n                vel.</ic-typography\n              >\n            </ic-section-container>\n          </main>\n          <ic-footer\n            description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n              please get in touch."\n            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n          >\n            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n            <div\n              slot="logo"\n              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n            >\n              Logo\n            </div>\n          </ic-footer>\n          <ic-classification-banner\n            classification="official"\n          ></ic-classification-banner>\n        </div>\n      </div>\n    `'},layout:"fullscreen",loki:{skip:!0}};const expanded=()=>lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation
          app-title="Application Title"
          version="v0.20.10-alpha"
          status="IN DEVELOPMENT"
          expanded="true"
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
          <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item slot="primary-navigation" href="/" label="Trends">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="END"
            expandable="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column;"
        >
          <main>
            <ic-button onclick="expandedClickHandler()">Expand</ic-button>
            <ic-button onclick="collapsedClickHandler()">Collapse</ic-button>
          </main>
          <footer>Footer</footer>
        </div>
      </div>
      <script>
        var icSideNav = document.querySelector("ic-side-navigation");
        function expandedClickHandler() {
          icSideNav.expanded = true;
        }
        function collapsedClickHandler() {
          icSideNav.expanded = false;
        }
      </script>
    `;expanded.storyName="Expanded",expanded.parameters={storySource:{source:'html`\n      <div style="display:flex; height: 100%;">\n        <ic-side-navigation\n          app-title="Application Title"\n          version="v0.20.10-alpha"\n          status="IN DEVELOPMENT"\n          expanded="true"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item slot="primary-navigation" href="/" label="Home">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item slot="primary-navigation" href="/" label="Trends">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-divider slot="primary-navigation"></ic-divider>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item label="Different navigation" href="/">\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n          </ic-navigation-group>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="This is a very very very long label for the navigation item"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="secondary-navigation"\n            href="/"\n            label="END"\n            expandable="true"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column;"\n        >\n          <main>\n            <ic-button onclick="expandedClickHandler()">Expand</ic-button>\n            <ic-button onclick="collapsedClickHandler()">Collapse</ic-button>\n          </main>\n          <footer>Footer</footer>\n        </div>\n      </div>\n      <script>\n        var icSideNav = document.querySelector("ic-side-navigation");\n        function expandedClickHandler() {\n          icSideNav.expanded = true;\n        }\n        function collapsedClickHandler() {\n          icSideNav.expanded = false;\n        }\n      <\/script>\n    `'},layout:"fullscreen",loki:{skip:!0}};const longAppVersionAndAppStatus=()=>lit_html.qy`
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="This is a very very very very very very long app title"
          version="v0.0.0-alpha-beta-gamma-delta-release.01"
          status="Alpha-BETA-GAMMA-DELTA"
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
          <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Search"
            selected="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-item slot="primary-navigation" href="/" label="Trends">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="Settings"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
              >
              <ic-typography
                >Aenean convallis libero id magna congue pellentesque. Nulla
                iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                molestie. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Integer sollicitudin in
                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
                vitae tellus. Curabitur pharetra commodo consequat. Aliquam
                consequat ipsum lacus, sed faucibus sapien mollis
                vel.</ic-typography
              >
            </ic-section-container>
          </main>
          <ic-footer
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
            <ic-footer-link slot="link" href="/">Components</ic-footer-link>
            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
            <div
              slot="logo"
              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
            >
              Logo
            </div>
          </ic-footer>
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div>
    `;longAppVersionAndAppStatus.storyName="Long app version and app status",longAppVersionAndAppStatus.parameters={storySource:{source:'html`\n      <div style="display:flex; height:100%;">\n        <ic-side-navigation\n          app-title="This is a very very very very very very long app title"\n          version="v0.0.0-alpha-beta-gamma-delta-release.01"\n          status="Alpha-BETA-GAMMA-DELTA"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item slot="primary-navigation" href="/" label="Home">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Search"\n            selected="true"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-divider slot="primary-navigation"></ic-divider>\n          <ic-navigation-item slot="primary-navigation" href="/" label="Trends">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item label="Different navigation" href="/">\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n            <ic-navigation-item label="Navigation" href="/">\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n          </ic-navigation-group>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="This is a very very very long label for the navigation item"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="secondary-navigation"\n            href="/"\n            label="Settings"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column; flex-grow: 1;"\n        >\n          <main>\n            <ic-section-container>\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n                vestibulum venenatis facilisis. Nam tortor felis, auctor vel\n                ante quis, tempor interdum libero. In dictum sodales velit, eu\n                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id\n                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,\n                lectus magna interdum risus, vel fringilla libero ex eu dui.\n                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit\n                nisl, vitae congue ligula rutrum id.</ic-typography\n              >\n              <ic-typography\n                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,\n                ex nibh porttitor tellus, vel molestie justo odio vel purus.\n                Curabitur porttitor, tortor sed semper sollicitudin, odio odio\n                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies\n                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt\n                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.\n                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor\n                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.\n                Nam non lorem ante.</ic-typography\n              >\n              <ic-typography\n                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a\n                urna in commodo. Proin mauris augue, viverra id finibus id,\n                vulputate in ante. Aliquam volutpat hendrerit tellus vitae\n                tristique. Donec pellentesque enim arcu, at feugiat mauris\n                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam\n                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget\n                interdum lorem. Phasellus pretium urna id elit pharetra\n                hendrerit.</ic-typography\n              >\n              <ic-typography\n                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,\n                quis pretium velit ante nec felis. Vivamus efficitur scelerisque\n                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue\n                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,\n                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae\n                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet\n                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,\n                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras\n                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus\n                lobortis scelerisque libero vel scelerisque.</ic-typography\n              >\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Praesent eget orci condimentum, tempus tortor posuere, lacinia\n                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet\n                orci a risus facilisis porta. Orci varius natoque penatibus et\n                magnis dis parturient montes, nascetur ridiculus mus. Curabitur\n                a porttitor neque, ac dignissim velit. Morbi quis malesuada\n                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In\n                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi\n                blandit lacus a leo vehicula aliquet.</ic-typography\n              >\n              <ic-typography\n                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi\n                pretium. Etiam nec velit at orci varius porttitor. Aliquam\n                facilisis, elit non cursus fringilla, metus metus malesuada\n                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est\n                eget sodales ullamcorper, eros turpis euismod nulla, sed\n                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.\n                Interdum et malesuada fames ac ante ipsum primis in faucibus.\n                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris\n                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu\n                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam\n                porta nulla suscipit vestibulum. Sed iaculis enim leo, et\n                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor\n                massa. Sed et aliquam nisi.</ic-typography\n              >\n              <ic-typography\n                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo\n                orci. Suspendisse molestie posuere leo vitae posuere. Cras\n                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec\n                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,\n                condimentum ligula. Nullam maximus nulla quam, ut euismod est\n                feugiat at. Quisque ut venenatis ex, in facilisis sapien.\n                Pellentesque in orci vitae metus iaculis venenatis. Nunc\n                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in\n                venenatis ligula, non mollis quam. Suspendisse nec enim vel\n                massa finibus pretium et a urna. Etiam suscipit semper est, id\n                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum\n                ut laoreet et, euismod ac mi. Vestibulum tristique odio non\n                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,\n                tempus a augue sit amet, interdum vulputate\n                libero.</ic-typography\n              >\n              <ic-typography\n                >Aenean convallis libero id magna congue pellentesque. Nulla\n                iaculis interdum porta. Aenean laoreet scelerisque nulla vel\n                molestie. Class aptent taciti sociosqu ad litora torquent per\n                conubia nostra, per inceptos himenaeos. Integer sollicitudin in\n                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan\n                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas\n                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac\n                vitae tellus. Curabitur pharetra commodo consequat. Aliquam\n                consequat ipsum lacus, sed faucibus sapien mollis\n                vel.</ic-typography\n              >\n            </ic-section-container>\n          </main>\n          <ic-footer\n            description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n              please get in touch."\n            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n          >\n            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n            <div\n              slot="logo"\n              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n            >\n              Logo\n            </div>\n          </ic-footer>\n          <ic-classification-banner\n            classification="official"\n          ></ic-classification-banner>\n        </div>\n      </div>\n    `'},layout:"fullscreen",loki:{skip:!0}};const shortTitle=()=>lit_html.qy`
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="Application Name"
          short-app-title="App Name"
          version="v0.0.0"
          status="BETA"
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
          <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Search"
            selected="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-item slot="primary-navigation" href="/" label="Trends">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="Settings"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
              >
              <ic-typography
                >Aenean convallis libero id magna congue pellentesque. Nulla
                iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                molestie. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Integer sollicitudin in
                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
                vitae tellus. Curabitur pharetra commodo consequat. Aliquam
                consequat ipsum lacus, sed faucibus sapien mollis
                vel.</ic-typography
              >
            </ic-section-container>
          </main>
          <ic-footer
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
            <ic-footer-link slot="link" href="/">Components</ic-footer-link>
            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
            <div
              slot="logo"
              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
            >
              Logo
            </div>
          </ic-footer>
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div>
    `;shortTitle.storyName="Short title",shortTitle.parameters={storySource:{source:'html`\n      <div style="display:flex; height:100%;">\n        <ic-side-navigation\n          app-title="Application Name"\n          short-app-title="App Name"\n          version="v0.0.0"\n          status="BETA"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item slot="primary-navigation" href="/" label="Home">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Search"\n            selected="true"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-divider slot="primary-navigation"></ic-divider>\n          <ic-navigation-item slot="primary-navigation" href="/" label="Trends">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item label="Different navigation" href="/">\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n            <ic-navigation-item label="Navigation" href="/">\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n          </ic-navigation-group>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="This is a very very very long label for the navigation item"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="secondary-navigation"\n            href="/"\n            label="Settings"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column; flex-grow: 1;"\n        >\n          <main>\n            <ic-section-container>\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n                vestibulum venenatis facilisis. Nam tortor felis, auctor vel\n                ante quis, tempor interdum libero. In dictum sodales velit, eu\n                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id\n                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,\n                lectus magna interdum risus, vel fringilla libero ex eu dui.\n                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit\n                nisl, vitae congue ligula rutrum id.</ic-typography\n              >\n              <ic-typography\n                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,\n                ex nibh porttitor tellus, vel molestie justo odio vel purus.\n                Curabitur porttitor, tortor sed semper sollicitudin, odio odio\n                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies\n                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt\n                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.\n                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor\n                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.\n                Nam non lorem ante.</ic-typography\n              >\n              <ic-typography\n                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a\n                urna in commodo. Proin mauris augue, viverra id finibus id,\n                vulputate in ante. Aliquam volutpat hendrerit tellus vitae\n                tristique. Donec pellentesque enim arcu, at feugiat mauris\n                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam\n                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget\n                interdum lorem. Phasellus pretium urna id elit pharetra\n                hendrerit.</ic-typography\n              >\n              <ic-typography\n                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,\n                quis pretium velit ante nec felis. Vivamus efficitur scelerisque\n                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue\n                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,\n                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae\n                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet\n                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,\n                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras\n                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus\n                lobortis scelerisque libero vel scelerisque.</ic-typography\n              >\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Praesent eget orci condimentum, tempus tortor posuere, lacinia\n                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet\n                orci a risus facilisis porta. Orci varius natoque penatibus et\n                magnis dis parturient montes, nascetur ridiculus mus. Curabitur\n                a porttitor neque, ac dignissim velit. Morbi quis malesuada\n                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In\n                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi\n                blandit lacus a leo vehicula aliquet.</ic-typography\n              >\n              <ic-typography\n                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi\n                pretium. Etiam nec velit at orci varius porttitor. Aliquam\n                facilisis, elit non cursus fringilla, metus metus malesuada\n                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est\n                eget sodales ullamcorper, eros turpis euismod nulla, sed\n                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.\n                Interdum et malesuada fames ac ante ipsum primis in faucibus.\n                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris\n                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu\n                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam\n                porta nulla suscipit vestibulum. Sed iaculis enim leo, et\n                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor\n                massa. Sed et aliquam nisi.</ic-typography\n              >\n              <ic-typography\n                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo\n                orci. Suspendisse molestie posuere leo vitae posuere. Cras\n                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec\n                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,\n                condimentum ligula. Nullam maximus nulla quam, ut euismod est\n                feugiat at. Quisque ut venenatis ex, in facilisis sapien.\n                Pellentesque in orci vitae metus iaculis venenatis. Nunc\n                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in\n                venenatis ligula, non mollis quam. Suspendisse nec enim vel\n                massa finibus pretium et a urna. Etiam suscipit semper est, id\n                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum\n                ut laoreet et, euismod ac mi. Vestibulum tristique odio non\n                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,\n                tempus a augue sit amet, interdum vulputate\n                libero.</ic-typography\n              >\n              <ic-typography\n                >Aenean convallis libero id magna congue pellentesque. Nulla\n                iaculis interdum porta. Aenean laoreet scelerisque nulla vel\n                molestie. Class aptent taciti sociosqu ad litora torquent per\n                conubia nostra, per inceptos himenaeos. Integer sollicitudin in\n                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan\n                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas\n                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac\n                vitae tellus. Curabitur pharetra commodo consequat. Aliquam\n                consequat ipsum lacus, sed faucibus sapien mollis\n                vel.</ic-typography\n              >\n            </ic-section-container>\n          </main>\n          <ic-footer\n            description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n              please get in touch."\n            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n          >\n            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n            <div\n              slot="logo"\n              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n            >\n              Logo\n            </div>\n          </ic-footer>\n          <ic-classification-banner\n            classification="official"\n          ></ic-classification-banner>\n        </div>\n      </div>\n    `'},layout:"fullscreen",loki:{skip:!0}};const staticStory=()=>lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
          expanded="true"
          static="true"
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
          <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item slot="primary-navigation" href="/" label="Trends">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item slot="secondary-navigation" href="/" label="END">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column;"
        >
          <main>This is the content</main>
          <footer>Footer</footer>
        </div>
      </div>
    `;staticStory.storyName="Static",staticStory.parameters={storySource:{source:'html`\n      <div style="display:flex; height: 100%;">\n        <ic-side-navigation\n          app-title="Application Name"\n          version="v0.0.0"\n          status="BETA"\n          expanded="true"\n          static="true"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item slot="primary-navigation" href="/" label="Home">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item slot="primary-navigation" href="/" label="Trends">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item label="Different navigation" href="/">\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n          </ic-navigation-group>\n          <ic-navigation-item slot="secondary-navigation" href="/" label="END">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column;"\n        >\n          <main>This is the content</main>\n          <footer>Footer</footer>\n        </div>\n      </div>\n    `'},layout:"fullscreen",loki:{skip:!0}};const collapsedIconsWithLabels=()=>lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
          collapsed-icon-labels="true"
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
          <ic-navigation-item slot="primary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item slot="secondary-navigation" href="/" label="Home">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>This is the content</main>
          <footer>Footer</footer>
        </div>
      </div>
    `;collapsedIconsWithLabels.storyName="Collapsed icons with labels",collapsedIconsWithLabels.parameters={storySource:{source:'html`\n      <div style="display:flex; height: 100%;">\n        <ic-side-navigation\n          app-title="Application Name"\n          version="v0.0.0"\n          status="BETA"\n          collapsed-icon-labels="true"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item slot="primary-navigation" href="/" label="Home">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item label="Different navigation" href="/">\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n          </ic-navigation-group>\n          <ic-navigation-item slot="secondary-navigation" href="/" label="Home">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column; flex-grow: 1;"\n        >\n          <main>This is the content</main>\n          <footer>Footer</footer>\n        </div>\n      </div>\n    `'},layout:"fullscreen",loki:{skip:!0}};const slots=()=>lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation
          version="v0.0.0"
          status="BETA"
          app-title="Application Name"
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
          <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              class="active"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item>
              <a
                slot="navigation-item"
                href="/child-item-2"
                aria-label="Daily Tippers"
              >
                <svg
                  slot="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Daily Tippers
              </a>
            </ic-navigation-item>
          </ic-navigation-group>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>This is the content</main>
          <footer>Footer</footer>
        </div>
      </div>
    `;slots.storyName="Slots",slots.parameters={storySource:{source:'html`\n      <div style="display:flex; height: 100%;">\n        <ic-side-navigation\n          version="v0.0.0"\n          status="BETA"\n          app-title="Application Name"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item slot="primary-navigation">\n            <a\n              slot="navigation-item"\n              class="active"\n              href="/child-item-2"\n              aria-label="Daily Tippers"\n            >\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                  fill="currentColor"\n                ></path>\n              </svg>\n              Daily Tippers\n            </a>\n          </ic-navigation-item>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item>\n              <a\n                slot="navigation-item"\n                href="/child-item-2"\n                aria-label="Daily Tippers"\n              >\n                <svg\n                  slot="icon"\n                  width="24"\n                  height="24"\n                  viewBox="0 0 24 24"\n                  fill="none"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                    fill="currentColor"\n                  ></path>\n                </svg>\n                Daily Tippers\n              </a>\n            </ic-navigation-item>\n          </ic-navigation-group>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column; flex-grow: 1;"\n        >\n          <main>This is the content</main>\n          <footer>Footer</footer>\n        </div>\n      </div>\n    `'},layout:"fullscreen",loki:{skip:!0}};const usingUnnamedSlots=()=>lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
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
          <ic-navigation-item slot="primary-navigation">
            <a class="active" href="/child-item-2" aria-label="Daily Tippers">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item>
              <a href="/child-item-2" aria-label="Daily Tippers">
                <svg
                  slot="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Daily Tippers
              </a>
            </ic-navigation-item>
          </ic-navigation-group>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>This is the content</main>
          <footer>Footer</footer>
        </div>
      </div>
    `;usingUnnamedSlots.storyName="Using unnamed slots",usingUnnamedSlots.parameters={storySource:{source:'html`\n      <div style="display:flex; height: 100%;">\n        <ic-side-navigation\n          app-title="Application Name"\n          version="v0.0.0"\n          status="BETA"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item slot="primary-navigation">\n            <a class="active" href="/child-item-2" aria-label="Daily Tippers">\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                  fill="currentColor"\n                ></path>\n              </svg>\n              Daily Tippers\n            </a>\n          </ic-navigation-item>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item>\n              <a href="/child-item-2" aria-label="Daily Tippers">\n                <svg\n                  slot="icon"\n                  width="24"\n                  height="24"\n                  viewBox="0 0 24 24"\n                  fill="none"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                    fill="currentColor"\n                  ></path>\n                </svg>\n                Daily Tippers\n              </a>\n            </ic-navigation-item>\n          </ic-navigation-group>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column; flex-grow: 1;"\n        >\n          <main>This is the content</main>\n          <footer>Footer</footer>\n        </div>\n      </div>\n    `'},layout:"fullscreen",loki:{skip:!0}};const slotsUsingAppTitle=()=>lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation version="v0.0.0" status="BETA">
          <a href="/" slot="app-title">Application Name</a>
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
          <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              class="active"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Home
            </a>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item>
              <a
                slot="navigation-item"
                href="/child-item-2"
                aria-label="Daily Tippers"
              >
                <svg
                  slot="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed
                tempus, lacus in pretium molestie, lectus magna interdum risus,
                vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula
                lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum
                id.
              </a>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>This is the content</main>
          <footer>Footer</footer>
        </div>
      </div>
    `;slotsUsingAppTitle.storyName="Slots using app-title",slotsUsingAppTitle.parameters={storySource:{source:'html`\n      <div style="display:flex; height: 100%;">\n        <ic-side-navigation version="v0.0.0" status="BETA">\n          <a href="/" slot="app-title">Application Name</a>\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item slot="primary-navigation">\n            <a\n              slot="navigation-item"\n              class="active"\n              href="/child-item-2"\n              aria-label="Daily Tippers"\n            >\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                  fill="currentColor"\n                ></path>\n              </svg>\n              Home\n            </a>\n          </ic-navigation-item>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item>\n              <a\n                slot="navigation-item"\n                href="/child-item-2"\n                aria-label="Daily Tippers"\n              >\n                <svg\n                  slot="icon"\n                  width="24"\n                  height="24"\n                  viewBox="0 0 24 24"\n                  fill="none"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                    fill="currentColor"\n                  ></path>\n                </svg>\n                Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed\n                tempus, lacus in pretium molestie, lectus magna interdum risus,\n                vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula\n                lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum\n                id.\n              </a>\n            </ic-navigation-item>\n          </ic-navigation-group>\n          <ic-navigation-item slot="primary-navigation">\n            <a\n              slot="navigation-item"\n              href="/child-item-2"\n              aria-label="Daily Tippers"\n            >\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                  fill="currentColor"\n                ></path>\n              </svg>\n              Daily Tippers\n            </a>\n          </ic-navigation-item>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column; flex-grow: 1;"\n        >\n          <main>This is the content</main>\n          <footer>Footer</footer>\n        </div>\n      </div>\n    `'},layout:"fullscreen",loki:{skip:!0}};const slotsUsingAppTitleExpanded=()=>lit_html.qy`
      <div style="display:flex; height: 100%;">
        <ic-side-navigation version="v0.0.0" status="BETA" expanded="true">
          <a href="/" slot="app-title">Application Name</a>
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
          <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              class="active"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item>
              <a
                slot="navigation-item"
                href="/child-item-2"
                aria-label="Daily Tippers"
              >
                <svg
                  slot="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed
                tempus, lacus in pretium molestie, lectus magna interdum risus,
                vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula
                lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum
                id.
              </a>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item slot="primary-navigation">
            <a
              slot="navigation-item"
              href="/child-item-2"
              aria-label="Daily Tippers"
            >
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>This is the content</main>
          <footer>Footer</footer>
        </div>
      </div>
    `;slotsUsingAppTitleExpanded.storyName="Slots using app-title expanded",slotsUsingAppTitleExpanded.parameters={storySource:{source:'html`\n      <div style="display:flex; height: 100%;">\n        <ic-side-navigation version="v0.0.0" status="BETA" expanded="true">\n          <a href="/" slot="app-title">Application Name</a>\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item slot="primary-navigation">\n            <a\n              slot="navigation-item"\n              class="active"\n              href="/child-item-2"\n              aria-label="Daily Tippers"\n            >\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                  fill="currentColor"\n                ></path>\n              </svg>\n              Daily Tippers\n            </a>\n          </ic-navigation-item>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item>\n              <a\n                slot="navigation-item"\n                href="/child-item-2"\n                aria-label="Daily Tippers"\n              >\n                <svg\n                  slot="icon"\n                  width="24"\n                  height="24"\n                  viewBox="0 0 24 24"\n                  fill="none"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                    fill="currentColor"\n                  ></path>\n                </svg>\n                Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed\n                tempus, lacus in pretium molestie, lectus magna interdum risus,\n                vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula\n                lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum\n                id.\n              </a>\n            </ic-navigation-item>\n          </ic-navigation-group>\n          <ic-navigation-item slot="primary-navigation">\n            <a\n              slot="navigation-item"\n              href="/child-item-2"\n              aria-label="Daily Tippers"\n            >\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                  fill="currentColor"\n                ></path>\n              </svg>\n              Daily Tippers\n            </a>\n          </ic-navigation-item>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column; flex-grow: 1;"\n        >\n          <main>This is the content</main>\n          <footer>Footer</footer>\n        </div>\n      </div>\n    `'},layout:"fullscreen",loki:{skip:!0}};const disableTopBarBehaviour=()=>lit_html.qy`
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
          disable-top-bar-behaviour="true"
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
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Search"
            selected="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/">
              <ic-badge
                text-label="1"
                slot="badge"
                variant="light"
                position="far"
              ></ic-badge>
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="Settings"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
              >
              <ic-typography
                >Aenean convallis libero id magna congue pellentesque. Nulla
                iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                molestie. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Integer sollicitudin in
                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
                vitae tellus. Curabitur pharetra commodo consequat. Aliquam
                consequat ipsum lacus, sed faucibus sapien mollis
                vel.</ic-typography
              >
            </ic-section-container>
          </main>
          <ic-footer
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
            <ic-footer-link slot="link" href="/">Components</ic-footer-link>
            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
            <div
              slot="logo"
              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
            >
              Logo
            </div>
          </ic-footer>
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div>
    `;disableTopBarBehaviour.storyName="Disable top bar behaviour",disableTopBarBehaviour.parameters={storySource:{source:'html`\n      <div style="display:flex; height:100%;">\n        <ic-side-navigation\n          app-title="Application Name"\n          version="v0.0.0"\n          status="BETA"\n          disable-top-bar-behaviour="true"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Search"\n            selected="true"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-divider slot="primary-navigation"></ic-divider>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item label="Different navigation" href="/">\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n            <ic-navigation-item label="Navigation" href="/">\n              <ic-badge\n                text-label="1"\n                slot="badge"\n                variant="light"\n                position="far"\n              ></ic-badge>\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n          </ic-navigation-group>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="This is a very very very long label for the navigation item"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="secondary-navigation"\n            href="/"\n            label="Settings"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column; flex-grow: 1;"\n        >\n          <main>\n            <ic-section-container>\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n                vestibulum venenatis facilisis. Nam tortor felis, auctor vel\n                ante quis, tempor interdum libero. In dictum sodales velit, eu\n                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id\n                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,\n                lectus magna interdum risus, vel fringilla libero ex eu dui.\n                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit\n                nisl, vitae congue ligula rutrum id.</ic-typography\n              >\n              <ic-typography\n                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,\n                ex nibh porttitor tellus, vel molestie justo odio vel purus.\n                Curabitur porttitor, tortor sed semper sollicitudin, odio odio\n                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies\n                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt\n                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.\n                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor\n                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.\n                Nam non lorem ante.</ic-typography\n              >\n              <ic-typography\n                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a\n                urna in commodo. Proin mauris augue, viverra id finibus id,\n                vulputate in ante. Aliquam volutpat hendrerit tellus vitae\n                tristique. Donec pellentesque enim arcu, at feugiat mauris\n                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam\n                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget\n                interdum lorem. Phasellus pretium urna id elit pharetra\n                hendrerit.</ic-typography\n              >\n              <ic-typography\n                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,\n                quis pretium velit ante nec felis. Vivamus efficitur scelerisque\n                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue\n                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,\n                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae\n                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet\n                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,\n                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras\n                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus\n                lobortis scelerisque libero vel scelerisque.</ic-typography\n              >\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Praesent eget orci condimentum, tempus tortor posuere, lacinia\n                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet\n                orci a risus facilisis porta. Orci varius natoque penatibus et\n                magnis dis parturient montes, nascetur ridiculus mus. Curabitur\n                a porttitor neque, ac dignissim velit. Morbi quis malesuada\n                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In\n                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi\n                blandit lacus a leo vehicula aliquet.</ic-typography\n              >\n              <ic-typography\n                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi\n                pretium. Etiam nec velit at orci varius porttitor. Aliquam\n                facilisis, elit non cursus fringilla, metus metus malesuada\n                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est\n                eget sodales ullamcorper, eros turpis euismod nulla, sed\n                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.\n                Interdum et malesuada fames ac ante ipsum primis in faucibus.\n                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris\n                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu\n                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam\n                porta nulla suscipit vestibulum. Sed iaculis enim leo, et\n                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor\n                massa. Sed et aliquam nisi.</ic-typography\n              >\n              <ic-typography\n                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo\n                orci. Suspendisse molestie posuere leo vitae posuere. Cras\n                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec\n                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,\n                condimentum ligula. Nullam maximus nulla quam, ut euismod est\n                feugiat at. Quisque ut venenatis ex, in facilisis sapien.\n                Pellentesque in orci vitae metus iaculis venenatis. Nunc\n                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in\n                venenatis ligula, non mollis quam. Suspendisse nec enim vel\n                massa finibus pretium et a urna. Etiam suscipit semper est, id\n                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum\n                ut laoreet et, euismod ac mi. Vestibulum tristique odio non\n                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,\n                tempus a augue sit amet, interdum vulputate\n                libero.</ic-typography\n              >\n              <ic-typography\n                >Aenean convallis libero id magna congue pellentesque. Nulla\n                iaculis interdum porta. Aenean laoreet scelerisque nulla vel\n                molestie. Class aptent taciti sociosqu ad litora torquent per\n                conubia nostra, per inceptos himenaeos. Integer sollicitudin in\n                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan\n                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas\n                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac\n                vitae tellus. Curabitur pharetra commodo consequat. Aliquam\n                consequat ipsum lacus, sed faucibus sapien mollis\n                vel.</ic-typography\n              >\n            </ic-section-container>\n          </main>\n          <ic-footer\n            description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n              please get in touch."\n            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n          >\n            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n            <div\n              slot="logo"\n              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n            >\n              Logo\n            </div>\n          </ic-footer>\n          <ic-classification-banner\n            classification="official"\n          ></ic-classification-banner>\n        </div>\n      </div>\n    `'},layout:"fullscreen",loki:{skip:!0}};const disableAutoParentStyling=()=>lit_html.qy`
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
          disable-auto-parent-styling="true"
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
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Search"
            selected="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/">
              <ic-badge
                text-label="1"
                slot="badge"
                variant="light"
                position="far"
              ></ic-badge>
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="Settings"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
              >
              <ic-typography
                >Aenean convallis libero id magna congue pellentesque. Nulla
                iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                molestie. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Integer sollicitudin in
                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
                vitae tellus. Curabitur pharetra commodo consequat. Aliquam
                consequat ipsum lacus, sed faucibus sapien mollis
                vel.</ic-typography
              >
            </ic-section-container>
          </main>
          <ic-footer
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
            <ic-footer-link slot="link" href="/">Components</ic-footer-link>
            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
            <div
              slot="logo"
              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
            >
              Logo
            </div>
          </ic-footer>
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div>
    `;disableAutoParentStyling.storyName="Disable auto parent styling",disableAutoParentStyling.parameters={storySource:{source:'html`\n      <div style="display:flex; height:100%;">\n        <ic-side-navigation\n          app-title="Application Name"\n          version="v0.0.0"\n          status="BETA"\n          disable-auto-parent-styling="true"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Search"\n            selected="true"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-divider slot="primary-navigation"></ic-divider>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item label="Different navigation" href="/">\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n            <ic-navigation-item label="Navigation" href="/">\n              <ic-badge\n                text-label="1"\n                slot="badge"\n                variant="light"\n                position="far"\n              ></ic-badge>\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n          </ic-navigation-group>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="This is a very very very long label for the navigation item"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="secondary-navigation"\n            href="/"\n            label="Settings"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column; flex-grow: 1;"\n        >\n          <main>\n            <ic-section-container>\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n                vestibulum venenatis facilisis. Nam tortor felis, auctor vel\n                ante quis, tempor interdum libero. In dictum sodales velit, eu\n                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id\n                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,\n                lectus magna interdum risus, vel fringilla libero ex eu dui.\n                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit\n                nisl, vitae congue ligula rutrum id.</ic-typography\n              >\n              <ic-typography\n                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,\n                ex nibh porttitor tellus, vel molestie justo odio vel purus.\n                Curabitur porttitor, tortor sed semper sollicitudin, odio odio\n                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies\n                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt\n                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.\n                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor\n                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.\n                Nam non lorem ante.</ic-typography\n              >\n              <ic-typography\n                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a\n                urna in commodo. Proin mauris augue, viverra id finibus id,\n                vulputate in ante. Aliquam volutpat hendrerit tellus vitae\n                tristique. Donec pellentesque enim arcu, at feugiat mauris\n                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam\n                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget\n                interdum lorem. Phasellus pretium urna id elit pharetra\n                hendrerit.</ic-typography\n              >\n              <ic-typography\n                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,\n                quis pretium velit ante nec felis. Vivamus efficitur scelerisque\n                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue\n                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,\n                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae\n                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet\n                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,\n                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras\n                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus\n                lobortis scelerisque libero vel scelerisque.</ic-typography\n              >\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Praesent eget orci condimentum, tempus tortor posuere, lacinia\n                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet\n                orci a risus facilisis porta. Orci varius natoque penatibus et\n                magnis dis parturient montes, nascetur ridiculus mus. Curabitur\n                a porttitor neque, ac dignissim velit. Morbi quis malesuada\n                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In\n                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi\n                blandit lacus a leo vehicula aliquet.</ic-typography\n              >\n              <ic-typography\n                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi\n                pretium. Etiam nec velit at orci varius porttitor. Aliquam\n                facilisis, elit non cursus fringilla, metus metus malesuada\n                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est\n                eget sodales ullamcorper, eros turpis euismod nulla, sed\n                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.\n                Interdum et malesuada fames ac ante ipsum primis in faucibus.\n                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris\n                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu\n                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam\n                porta nulla suscipit vestibulum. Sed iaculis enim leo, et\n                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor\n                massa. Sed et aliquam nisi.</ic-typography\n              >\n              <ic-typography\n                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo\n                orci. Suspendisse molestie posuere leo vitae posuere. Cras\n                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec\n                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,\n                condimentum ligula. Nullam maximus nulla quam, ut euismod est\n                feugiat at. Quisque ut venenatis ex, in facilisis sapien.\n                Pellentesque in orci vitae metus iaculis venenatis. Nunc\n                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in\n                venenatis ligula, non mollis quam. Suspendisse nec enim vel\n                massa finibus pretium et a urna. Etiam suscipit semper est, id\n                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum\n                ut laoreet et, euismod ac mi. Vestibulum tristique odio non\n                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,\n                tempus a augue sit amet, interdum vulputate\n                libero.</ic-typography\n              >\n              <ic-typography\n                >Aenean convallis libero id magna congue pellentesque. Nulla\n                iaculis interdum porta. Aenean laoreet scelerisque nulla vel\n                molestie. Class aptent taciti sociosqu ad litora torquent per\n                conubia nostra, per inceptos himenaeos. Integer sollicitudin in\n                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan\n                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas\n                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac\n                vitae tellus. Curabitur pharetra commodo consequat. Aliquam\n                consequat ipsum lacus, sed faucibus sapien mollis\n                vel.</ic-typography\n              >\n            </ic-section-container>\n          </main>\n          <ic-footer\n            description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n              please get in touch."\n            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n          >\n            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n            <div\n              slot="logo"\n              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n            >\n              Logo\n            </div>\n          </ic-footer>\n          <ic-classification-banner\n            classification="official"\n          ></ic-classification-banner>\n        </div>\n      </div>\n    `'},layout:"fullscreen",loki:{skip:!0}};const sideNavExpandedEvent=()=>lit_html.qy`<script>
        var sideNav = document.querySelector("ic-side-navigation");
        sideNav.addEventListener("sideNavExpanded", function (event) {
          console.log(event.detail.sideNavExpanded);
        });
      </script>
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
          status="BETA"
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
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Search"
            selected="true"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-divider slot="primary-navigation"></ic-divider>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-group
            slot="primary-navigation"
            label="Second navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Different navigation" href="/">
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/">
              <ic-badge
                text-label="1"
                slot="badge"
                variant="light"
                position="far"
              ></ic-badge>
              <svg
                slot="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                  fill="currentColor"
                />
              </svg>
            </ic-navigation-item>
          </ic-navigation-group>
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="This is a very very very long label for the navigation item"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item
            slot="secondary-navigation"
            href="/"
            label="Settings"
          >
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-side-navigation>
        <div
          class="content-wrapper"
          style="display:flex; flex-direction: column; flex-grow: 1;"
        >
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
              >
              <ic-typography
                >Aenean convallis libero id magna congue pellentesque. Nulla
                iaculis interdum porta. Aenean laoreet scelerisque nulla vel
                molestie. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Integer sollicitudin in
                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
                vitae tellus. Curabitur pharetra commodo consequat. Aliquam
                consequat ipsum lacus, sed faucibus sapien mollis
                vel.</ic-typography
              >
            </ic-section-container>
          </main>
          <ic-footer
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
              please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
            <ic-footer-link slot="link" href="/">Components</ic-footer-link>
            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
            <div
              slot="logo"
              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
            >
              Logo
            </div>
          </ic-footer>
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div> `;sideNavExpandedEvent.storyName="Side nav expanded event",sideNavExpandedEvent.parameters={storySource:{source:'html`<script>\n        var sideNav = document.querySelector("ic-side-navigation");\n        sideNav.addEventListener("sideNavExpanded", function (event) {\n          console.log(event.detail.sideNavExpanded);\n        });\n      <\/script>\n      <div style="display:flex; height:100%;">\n        <ic-side-navigation\n          app-title="Application Name"\n          version="v0.0.0"\n          status="BETA"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Search"\n            selected="true"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-divider slot="primary-navigation"></ic-divider>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-group\n            slot="primary-navigation"\n            label="Second navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item label="Different navigation" href="/">\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n            <ic-navigation-item label="Navigation" href="/">\n              <ic-badge\n                text-label="1"\n                slot="badge"\n                variant="light"\n                position="far"\n              ></ic-badge>\n              <svg\n                slot="icon"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                  fill="currentColor"\n                />\n              </svg>\n            </ic-navigation-item>\n          </ic-navigation-group>\n          <ic-navigation-item\n            slot="primary-navigation"\n            href="/"\n            label="This is a very very very long label for the navigation item"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item\n            slot="secondary-navigation"\n            href="/"\n            label="Settings"\n          >\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n        </ic-side-navigation>\n        <div\n          class="content-wrapper"\n          style="display:flex; flex-direction: column; flex-grow: 1;"\n        >\n          <main>\n            <ic-section-container>\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n                vestibulum venenatis facilisis. Nam tortor felis, auctor vel\n                ante quis, tempor interdum libero. In dictum sodales velit, eu\n                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id\n                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,\n                lectus magna interdum risus, vel fringilla libero ex eu dui.\n                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit\n                nisl, vitae congue ligula rutrum id.</ic-typography\n              >\n              <ic-typography\n                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,\n                ex nibh porttitor tellus, vel molestie justo odio vel purus.\n                Curabitur porttitor, tortor sed semper sollicitudin, odio odio\n                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies\n                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt\n                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.\n                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor\n                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.\n                Nam non lorem ante.</ic-typography\n              >\n              <ic-typography\n                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a\n                urna in commodo. Proin mauris augue, viverra id finibus id,\n                vulputate in ante. Aliquam volutpat hendrerit tellus vitae\n                tristique. Donec pellentesque enim arcu, at feugiat mauris\n                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam\n                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget\n                interdum lorem. Phasellus pretium urna id elit pharetra\n                hendrerit.</ic-typography\n              >\n              <ic-typography\n                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,\n                quis pretium velit ante nec felis. Vivamus efficitur scelerisque\n                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue\n                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,\n                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae\n                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet\n                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,\n                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras\n                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus\n                lobortis scelerisque libero vel scelerisque.</ic-typography\n              >\n              <ic-typography\n                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Praesent eget orci condimentum, tempus tortor posuere, lacinia\n                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet\n                orci a risus facilisis porta. Orci varius natoque penatibus et\n                magnis dis parturient montes, nascetur ridiculus mus. Curabitur\n                a porttitor neque, ac dignissim velit. Morbi quis malesuada\n                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In\n                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi\n                blandit lacus a leo vehicula aliquet.</ic-typography\n              >\n              <ic-typography\n                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi\n                pretium. Etiam nec velit at orci varius porttitor. Aliquam\n                facilisis, elit non cursus fringilla, metus metus malesuada\n                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est\n                eget sodales ullamcorper, eros turpis euismod nulla, sed\n                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.\n                Interdum et malesuada fames ac ante ipsum primis in faucibus.\n                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris\n                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu\n                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam\n                porta nulla suscipit vestibulum. Sed iaculis enim leo, et\n                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor\n                massa. Sed et aliquam nisi.</ic-typography\n              >\n              <ic-typography\n                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo\n                orci. Suspendisse molestie posuere leo vitae posuere. Cras\n                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec\n                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,\n                condimentum ligula. Nullam maximus nulla quam, ut euismod est\n                feugiat at. Quisque ut venenatis ex, in facilisis sapien.\n                Pellentesque in orci vitae metus iaculis venenatis. Nunc\n                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in\n                venenatis ligula, non mollis quam. Suspendisse nec enim vel\n                massa finibus pretium et a urna. Etiam suscipit semper est, id\n                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum\n                ut laoreet et, euismod ac mi. Vestibulum tristique odio non\n                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,\n                tempus a augue sit amet, interdum vulputate\n                libero.</ic-typography\n              >\n              <ic-typography\n                >Aenean convallis libero id magna congue pellentesque. Nulla\n                iaculis interdum porta. Aenean laoreet scelerisque nulla vel\n                molestie. Class aptent taciti sociosqu ad litora torquent per\n                conubia nostra, per inceptos himenaeos. Integer sollicitudin in\n                felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan\n                risus. Donec nec augue justo. Aenean sagittis luctus leo egestas\n                consectetur. Sed sit amet nisl quis felis volutpat facilisis ac\n                vitae tellus. Curabitur pharetra commodo consequat. Aliquam\n                consequat ipsum lacus, sed faucibus sapien mollis\n                vel.</ic-typography\n              >\n            </ic-section-container>\n          </main>\n          <ic-footer\n            description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n              please get in touch."\n            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n          >\n            <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n            <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n            <div\n              slot="logo"\n              style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n              background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n            >\n              Logo\n            </div>\n          </ic-footer>\n          <ic-classification-banner\n            classification="official"\n          ></ic-classification-banner>\n        </div>\n      </div> `'},loki:{skip:!0},layout:"fullscreen",loki:{skip:!0}};const componentMeta={title:"Web Components/Side navigation",tags:["stories-mdx"],includeStories:["defaultStory","expanded","longAppVersionAndAppStatus","shortTitle","staticStory","collapsedIconsWithLabels","slots","usingUnnamedSlots","slotsUsingAppTitle","slotsUsingAppTitleExpanded","disableTopBarBehaviour","disableAutoParentStyling","sideNavExpandedEvent"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_side_navigation_stories=componentMeta,__namedExportsOrder=["defaultStory","expanded","longAppVersionAndAppStatus","shortTitle","staticStory","collapsedIconsWithLabels","slots","usingUnnamedSlots","slotsUsingAppTitle","slotsUsingAppTitleExpanded","disableTopBarBehaviour","disableAutoParentStyling","sideNavExpandedEvent"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-side-navigation-ic-side-navigation-stories-mdx.c4bc9c14.iframe.bundle.js.map