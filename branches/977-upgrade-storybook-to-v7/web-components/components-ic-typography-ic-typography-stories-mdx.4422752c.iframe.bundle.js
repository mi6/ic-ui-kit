/*! For license information please see components-ic-typography-ic-typography-stories-mdx.4422752c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[7894],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-typography/ic-typography.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,allPropTextStyles:()=>allPropTextStyles,bold:()=>bold,componentOverride:()=>componentOverride,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,italic:()=>italic,playground:()=>playground,strikethrough:()=>strikethrough,truncation:()=>truncation,underline:()=>underline,variants:()=>variants,verticalMargins:()=>verticalMargins});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit-html/lit-html.js"),_readme_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ic-typography/readme.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={applyVerticalMargins:!1,bold:!1,italic:!1,strikethrough:!1,underline:!1};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Web Components/Typography",component:"ic-typography"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.dk,{markdown:_readme_md__WEBPACK_IMPORTED_MODULE_3__}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-typography>I am typography</ic-typography>`})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Variants",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography variant="h1">Extra large title</ic-typography>
      <ic-typography variant="h2">Large title</ic-typography>
      <ic-typography variant="h3">Medium title</ic-typography>
      <ic-typography variant="h4">Small title</ic-typography>
      <ic-typography variant="subtitle-large">Subtitle 1</ic-typography>
      <ic-typography variant="subtitle-small">Subtitle 2</ic-typography>
      <ic-typography variant="body">Body text</ic-typography>
      <ic-typography variant="label">Label</ic-typography>
      <ic-typography variant="caption">Caption text</ic-typography>
      <ic-typography variant="caption-uppercase"
        >Caption uppercase</ic-typography
      >
      <ic-typography variant="label-uppercase">Label uppercase</ic-typography>
      <ic-typography variant="code-large">Code large</ic-typography>
      <ic-typography variant="code-small">Code small</ic-typography>
      <ic-typography variant="code-extra-small">Code extra small</ic-typography>
      <ic-typography variant="badge">Badge</ic-typography>
      <ic-typography variant="badge-small">Badge small</ic-typography>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"overriding-component",children:"Overriding component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Component override",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
    <ic-typography variant="h1"><h3>H1 rendered as H3</h3></ic-typography>
  `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"vertical-margins",children:"Vertical margins"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Vertical margins",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography apply-vertical-margins variant="h1"
        >Extra large title</ic-typography
      >
      <ic-typography apply-vertical-margins variant="h2"
        >Large title</ic-typography
      >
      <ic-typography apply-vertical-margins variant="h3"
        >Medium title</ic-typography
      >
      <ic-typography apply-vertical-margins variant="h4"
        >Small title</ic-typography
      >
      <ic-typography apply-vertical-margins variant="subtitle-large"
        >Subtitle 1</ic-typography
      >
      <ic-typography apply-vertical-margins variant="subtitle-small"
        >Subtitle 2</ic-typography
      >
      <ic-typography apply-vertical-margins variant="body"
        >Body text</ic-typography
      >
      <ic-typography apply-vertical-margins variant="caption"
        >Caption text</ic-typography
      >
      <ic-typography apply-vertical-margins variant="caption-uppercase"
        >Caption uppercase</ic-typography
      >
      <ic-typography apply-vertical-margins variant="code-large"
        >Code large</ic-typography
      >
      <ic-typography apply-vertical-margins variant="code-small"
        >Code small</ic-typography
      >
      <ic-typography apply-vertical-margins variant="code-extra-small"
        >Code extra small</ic-typography
      >
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"truncation",children:"Truncation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Truncation",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography max-lines="3" variant="body">
        Body of text that is truncated to three lines. Click the 'See more' link
        to expand the text, then click 'See less' to truncate the text once
        more!
        <br />
        Dripper caramelization java saucer grounds galão, mocha, and robusta
        kopi-luwak, percolator, instant, qui saucer latte in brewed café au
        lait. Con panna, cup, cream, body americano affogato cup espresso, rich
        milk seasonal saucer grinder spoon that cultivar strong redeye
        frappuccino barista extraction redeye mazagran. Grounds, french press
        dripper organic and foam id saucer, crema, black rich dark, grounds
        breve coffee steamed caramelization percolator.
      </ic-typography>
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"bold",children:"Bold"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Bold",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography variant="h1" bold="true">Extra large title</ic-typography>
      <ic-typography variant="h2" bold="true">Large title</ic-typography>
      <ic-typography variant="h3" bold="true">Medium title</ic-typography>
      <ic-typography variant="h4" bold="true">Small title</ic-typography>
      <ic-typography variant="subtitle-large" bold="true"
        >Subtitle 1</ic-typography
      >
      <ic-typography variant="subtitle-small" bold="true"
        >Subtitle 2</ic-typography
      >
      <ic-typography variant="body" bold="true">Body text</ic-typography>
      <ic-typography variant="label" bold="true">Label</ic-typography>
      <ic-typography variant="caption" bold="true">Caption text</ic-typography>
      <ic-typography variant="caption-uppercase" bold="true"
        >Caption uppercase</ic-typography
      >
      <ic-typography variant="label-uppercase" bold="true"
        >Label uppercase</ic-typography
      >
      <ic-typography variant="code-large" bold="true">Code large</ic-typography>
      <ic-typography variant="code-small" bold="true">Code small</ic-typography>
      <ic-typography variant="code-extra-small" bold="true"
        >Code extra small</ic-typography
      >
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"italic",children:"Italic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Italic",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography variant="h1" italic="true"
        >Extra large title</ic-typography
      >
      <ic-typography variant="h2" italic="true">Large title</ic-typography>
      <ic-typography variant="h3" italic="true">Medium title</ic-typography>
      <ic-typography variant="h4" italic="true">Small title</ic-typography>
      <ic-typography variant="subtitle-large" italic="true"
        >Subtitle 1</ic-typography
      >
      <ic-typography variant="subtitle-small" italic="true"
        >Subtitle 2</ic-typography
      >
      <ic-typography variant="body" italic="true">Body text</ic-typography>
      <ic-typography variant="label" italic="true">Label</ic-typography>
      <ic-typography variant="caption" italic="true"
        >Caption text</ic-typography
      >
      <ic-typography variant="caption-uppercase" italic="true"
        >Caption uppercase</ic-typography
      >
      <ic-typography variant="label-uppercase" italic="true"
        >Label uppercase</ic-typography
      >
      <ic-typography variant="code-large" italic="true"
        >Code large</ic-typography
      >
      <ic-typography variant="code-small" italic="true"
        >Code small</ic-typography
      >
      <ic-typography variant="code-extra-small" italic="true"
        >Code extra small</ic-typography
      >
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"strikethrough",children:"Strikethrough"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Strikethrough",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography variant="h1" strikethrough="true"
        >Extra large title</ic-typography
      >
      <ic-typography variant="h2" strikethrough="true"
        >Large title</ic-typography
      >
      <ic-typography variant="h3" strikethrough="true"
        >Medium title</ic-typography
      >
      <ic-typography variant="h4" strikethrough="true"
        >Small title</ic-typography
      >
      <ic-typography variant="subtitle-large" strikethrough="true"
        >Subtitle 1</ic-typography
      >
      <ic-typography variant="subtitle-small" strikethrough="true"
        >Subtitle 2</ic-typography
      >
      <ic-typography variant="body" strikethrough="true"
        >Body text</ic-typography
      >
      <ic-typography variant="label" strikethrough="true">Label</ic-typography>
      <ic-typography variant="caption" strikethrough="true"
        >Caption text</ic-typography
      >
      <ic-typography variant="caption-uppercase" strikethrough="true"
        >Caption uppercase</ic-typography
      >
      <ic-typography variant="label-uppercase" strikethrough="true"
        >Label uppercase</ic-typography
      >
      <ic-typography variant="code-large" strikethrough="true"
        >Code large</ic-typography
      >
      <ic-typography variant="code-small" strikethrough="true"
        >Code small</ic-typography
      >
      <ic-typography variant="code-extra-small" strikethrough="true"
        >Code extra small</ic-typography
      >
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"underline",children:"Underline"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Underline",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography variant="h1" underline="true"
        >Extra large title</ic-typography
      >
      <ic-typography variant="h2" underline="true">Large title</ic-typography>
      <ic-typography variant="h3" underline="true">Medium title</ic-typography>
      <ic-typography variant="h4" underline="true">Small title</ic-typography>
      <ic-typography variant="subtitle-large" underline="true"
        >Subtitle 1</ic-typography
      >
      <ic-typography variant="subtitle-small" underline="true"
        >Subtitle 2</ic-typography
      >
      <ic-typography variant="body" underline="true">Body text</ic-typography>
      <ic-typography variant="label" underline="true">Label</ic-typography>
      <ic-typography variant="caption" underline="true"
        >Caption text</ic-typography
      >
      <ic-typography variant="caption-uppercase" underline="true"
        >Caption uppercase</ic-typography
      >
      <ic-typography variant="label-uppercase" underline="true"
        >Label uppercase</ic-typography
      >
      <ic-typography variant="code-large" underline="true"
        >Code large</ic-typography
      >
      <ic-typography variant="code-small" underline="true"
        >Code small</ic-typography
      >
      <ic-typography variant="code-extra-small" underline="true"
        >Code extra small</ic-typography
      >
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"all-prop-text-styles",children:"All prop text styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"All prop text styles",children:lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography
        variant="h1"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Extra large title</ic-typography
      >
      <ic-typography
        variant="h2"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Large title</ic-typography
      >
      <ic-typography
        variant="h3"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Medium title</ic-typography
      >
      <ic-typography
        variant="h4"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Small title</ic-typography
      >
      <ic-typography
        variant="subtitle-large"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Subtitle 1</ic-typography
      >
      <ic-typography
        variant="subtitle-small"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Subtitle 2</ic-typography
      >
      <ic-typography
        variant="body"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Body text</ic-typography
      >
      <ic-typography
        variant="label"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Label</ic-typography
      >
      <ic-typography
        variant="caption"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Caption text</ic-typography
      >
      <ic-typography
        variant="caption-uppercase"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Caption uppercase</ic-typography
      >
      <ic-typography
        variant="label-uppercase"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Label uppercase</ic-typography
      >
      <ic-typography
        variant="code-large"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Code large</ic-typography
      >
      <ic-typography
        variant="code-small"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Code small</ic-typography
      >
      <ic-typography
        variant="code-extra-small"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Code extra small</ic-typography
      >
    `})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{args:defaultArgs,argTypes:{variant:{defaultValue:"body",options:["body","caption","h1","h2","h3","h4","label","subtitle-large","subtitle-small","label-uppercase","caption-uppercase","code-large","code-small","code-extra-small"],control:{type:"select"}}},name:"Playground",children:args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-typography
        apply-vertical-margins=${args.applyVerticalMargins}
        variant=${args.variant}
        bold=${args.bold}
        italic=${args.italic}
        strikethrough=${args.strikethrough}
        underline=${args.underline}
        >Typography to test</ic-typography
      >`})})]})}const defaultStory=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-typography>I am typography</ic-typography>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:"args => html`<ic-typography>I am typography</ic-typography>`"}};const variants=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography variant="h1">Extra large title</ic-typography>
      <ic-typography variant="h2">Large title</ic-typography>
      <ic-typography variant="h3">Medium title</ic-typography>
      <ic-typography variant="h4">Small title</ic-typography>
      <ic-typography variant="subtitle-large">Subtitle 1</ic-typography>
      <ic-typography variant="subtitle-small">Subtitle 2</ic-typography>
      <ic-typography variant="body">Body text</ic-typography>
      <ic-typography variant="label">Label</ic-typography>
      <ic-typography variant="caption">Caption text</ic-typography>
      <ic-typography variant="caption-uppercase"
        >Caption uppercase</ic-typography
      >
      <ic-typography variant="label-uppercase">Label uppercase</ic-typography>
      <ic-typography variant="code-large">Code large</ic-typography>
      <ic-typography variant="code-small">Code small</ic-typography>
      <ic-typography variant="code-extra-small">Code extra small</ic-typography>
      <ic-typography variant="badge">Badge</ic-typography>
      <ic-typography variant="badge-small">Badge small</ic-typography>
    `;variants.storyName="Variants",variants.parameters={storySource:{source:'html`\n      <ic-typography variant="h1">Extra large title</ic-typography>\n      <ic-typography variant="h2">Large title</ic-typography>\n      <ic-typography variant="h3">Medium title</ic-typography>\n      <ic-typography variant="h4">Small title</ic-typography>\n      <ic-typography variant="subtitle-large">Subtitle 1</ic-typography>\n      <ic-typography variant="subtitle-small">Subtitle 2</ic-typography>\n      <ic-typography variant="body">Body text</ic-typography>\n      <ic-typography variant="label">Label</ic-typography>\n      <ic-typography variant="caption">Caption text</ic-typography>\n      <ic-typography variant="caption-uppercase"\n        >Caption uppercase</ic-typography\n      >\n      <ic-typography variant="label-uppercase">Label uppercase</ic-typography>\n      <ic-typography variant="code-large">Code large</ic-typography>\n      <ic-typography variant="code-small">Code small</ic-typography>\n      <ic-typography variant="code-extra-small">Code extra small</ic-typography>\n      <ic-typography variant="badge">Badge</ic-typography>\n      <ic-typography variant="badge-small">Badge small</ic-typography>\n    `'}};const componentOverride=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
    <ic-typography variant="h1"><h3>H1 rendered as H3</h3></ic-typography>
  `;componentOverride.storyName="Component override",componentOverride.parameters={storySource:{source:'html`\n    <ic-typography variant="h1"><h3>H1 rendered as H3</h3></ic-typography>\n  `'}};const verticalMargins=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography apply-vertical-margins variant="h1"
        >Extra large title</ic-typography
      >
      <ic-typography apply-vertical-margins variant="h2"
        >Large title</ic-typography
      >
      <ic-typography apply-vertical-margins variant="h3"
        >Medium title</ic-typography
      >
      <ic-typography apply-vertical-margins variant="h4"
        >Small title</ic-typography
      >
      <ic-typography apply-vertical-margins variant="subtitle-large"
        >Subtitle 1</ic-typography
      >
      <ic-typography apply-vertical-margins variant="subtitle-small"
        >Subtitle 2</ic-typography
      >
      <ic-typography apply-vertical-margins variant="body"
        >Body text</ic-typography
      >
      <ic-typography apply-vertical-margins variant="caption"
        >Caption text</ic-typography
      >
      <ic-typography apply-vertical-margins variant="caption-uppercase"
        >Caption uppercase</ic-typography
      >
      <ic-typography apply-vertical-margins variant="code-large"
        >Code large</ic-typography
      >
      <ic-typography apply-vertical-margins variant="code-small"
        >Code small</ic-typography
      >
      <ic-typography apply-vertical-margins variant="code-extra-small"
        >Code extra small</ic-typography
      >
    `;verticalMargins.storyName="Vertical margins",verticalMargins.parameters={storySource:{source:'html`\n      <ic-typography apply-vertical-margins variant="h1"\n        >Extra large title</ic-typography\n      >\n      <ic-typography apply-vertical-margins variant="h2"\n        >Large title</ic-typography\n      >\n      <ic-typography apply-vertical-margins variant="h3"\n        >Medium title</ic-typography\n      >\n      <ic-typography apply-vertical-margins variant="h4"\n        >Small title</ic-typography\n      >\n      <ic-typography apply-vertical-margins variant="subtitle-large"\n        >Subtitle 1</ic-typography\n      >\n      <ic-typography apply-vertical-margins variant="subtitle-small"\n        >Subtitle 2</ic-typography\n      >\n      <ic-typography apply-vertical-margins variant="body"\n        >Body text</ic-typography\n      >\n      <ic-typography apply-vertical-margins variant="caption"\n        >Caption text</ic-typography\n      >\n      <ic-typography apply-vertical-margins variant="caption-uppercase"\n        >Caption uppercase</ic-typography\n      >\n      <ic-typography apply-vertical-margins variant="code-large"\n        >Code large</ic-typography\n      >\n      <ic-typography apply-vertical-margins variant="code-small"\n        >Code small</ic-typography\n      >\n      <ic-typography apply-vertical-margins variant="code-extra-small"\n        >Code extra small</ic-typography\n      >\n    `'}};const truncation=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography max-lines="3" variant="body">
        Body of text that is truncated to three lines. Click the 'See more' link
        to expand the text, then click 'See less' to truncate the text once
        more!
        <br />
        Dripper caramelization java saucer grounds galão, mocha, and robusta
        kopi-luwak, percolator, instant, qui saucer latte in brewed café au
        lait. Con panna, cup, cream, body americano affogato cup espresso, rich
        milk seasonal saucer grinder spoon that cultivar strong redeye
        frappuccino barista extraction redeye mazagran. Grounds, french press
        dripper organic and foam id saucer, crema, black rich dark, grounds
        breve coffee steamed caramelization percolator.
      </ic-typography>
    `;truncation.storyName="Truncation",truncation.parameters={storySource:{source:"html`\n      <ic-typography max-lines=\"3\" variant=\"body\">\n        Body of text that is truncated to three lines. Click the 'See more' link\n        to expand the text, then click 'See less' to truncate the text once\n        more!\n        <br />\n        Dripper caramelization java saucer grounds galão, mocha, and robusta\n        kopi-luwak, percolator, instant, qui saucer latte in brewed café au\n        lait. Con panna, cup, cream, body americano affogato cup espresso, rich\n        milk seasonal saucer grinder spoon that cultivar strong redeye\n        frappuccino barista extraction redeye mazagran. Grounds, french press\n        dripper organic and foam id saucer, crema, black rich dark, grounds\n        breve coffee steamed caramelization percolator.\n      </ic-typography>\n    `"}};const bold=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography variant="h1" bold="true">Extra large title</ic-typography>
      <ic-typography variant="h2" bold="true">Large title</ic-typography>
      <ic-typography variant="h3" bold="true">Medium title</ic-typography>
      <ic-typography variant="h4" bold="true">Small title</ic-typography>
      <ic-typography variant="subtitle-large" bold="true"
        >Subtitle 1</ic-typography
      >
      <ic-typography variant="subtitle-small" bold="true"
        >Subtitle 2</ic-typography
      >
      <ic-typography variant="body" bold="true">Body text</ic-typography>
      <ic-typography variant="label" bold="true">Label</ic-typography>
      <ic-typography variant="caption" bold="true">Caption text</ic-typography>
      <ic-typography variant="caption-uppercase" bold="true"
        >Caption uppercase</ic-typography
      >
      <ic-typography variant="label-uppercase" bold="true"
        >Label uppercase</ic-typography
      >
      <ic-typography variant="code-large" bold="true">Code large</ic-typography>
      <ic-typography variant="code-small" bold="true">Code small</ic-typography>
      <ic-typography variant="code-extra-small" bold="true"
        >Code extra small</ic-typography
      >
    `;bold.storyName="Bold",bold.parameters={storySource:{source:'html`\n      <ic-typography variant="h1" bold="true">Extra large title</ic-typography>\n      <ic-typography variant="h2" bold="true">Large title</ic-typography>\n      <ic-typography variant="h3" bold="true">Medium title</ic-typography>\n      <ic-typography variant="h4" bold="true">Small title</ic-typography>\n      <ic-typography variant="subtitle-large" bold="true"\n        >Subtitle 1</ic-typography\n      >\n      <ic-typography variant="subtitle-small" bold="true"\n        >Subtitle 2</ic-typography\n      >\n      <ic-typography variant="body" bold="true">Body text</ic-typography>\n      <ic-typography variant="label" bold="true">Label</ic-typography>\n      <ic-typography variant="caption" bold="true">Caption text</ic-typography>\n      <ic-typography variant="caption-uppercase" bold="true"\n        >Caption uppercase</ic-typography\n      >\n      <ic-typography variant="label-uppercase" bold="true"\n        >Label uppercase</ic-typography\n      >\n      <ic-typography variant="code-large" bold="true">Code large</ic-typography>\n      <ic-typography variant="code-small" bold="true">Code small</ic-typography>\n      <ic-typography variant="code-extra-small" bold="true"\n        >Code extra small</ic-typography\n      >\n    `'}};const italic=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography variant="h1" italic="true"
        >Extra large title</ic-typography
      >
      <ic-typography variant="h2" italic="true">Large title</ic-typography>
      <ic-typography variant="h3" italic="true">Medium title</ic-typography>
      <ic-typography variant="h4" italic="true">Small title</ic-typography>
      <ic-typography variant="subtitle-large" italic="true"
        >Subtitle 1</ic-typography
      >
      <ic-typography variant="subtitle-small" italic="true"
        >Subtitle 2</ic-typography
      >
      <ic-typography variant="body" italic="true">Body text</ic-typography>
      <ic-typography variant="label" italic="true">Label</ic-typography>
      <ic-typography variant="caption" italic="true"
        >Caption text</ic-typography
      >
      <ic-typography variant="caption-uppercase" italic="true"
        >Caption uppercase</ic-typography
      >
      <ic-typography variant="label-uppercase" italic="true"
        >Label uppercase</ic-typography
      >
      <ic-typography variant="code-large" italic="true"
        >Code large</ic-typography
      >
      <ic-typography variant="code-small" italic="true"
        >Code small</ic-typography
      >
      <ic-typography variant="code-extra-small" italic="true"
        >Code extra small</ic-typography
      >
    `;italic.storyName="Italic",italic.parameters={storySource:{source:'html`\n      <ic-typography variant="h1" italic="true"\n        >Extra large title</ic-typography\n      >\n      <ic-typography variant="h2" italic="true">Large title</ic-typography>\n      <ic-typography variant="h3" italic="true">Medium title</ic-typography>\n      <ic-typography variant="h4" italic="true">Small title</ic-typography>\n      <ic-typography variant="subtitle-large" italic="true"\n        >Subtitle 1</ic-typography\n      >\n      <ic-typography variant="subtitle-small" italic="true"\n        >Subtitle 2</ic-typography\n      >\n      <ic-typography variant="body" italic="true">Body text</ic-typography>\n      <ic-typography variant="label" italic="true">Label</ic-typography>\n      <ic-typography variant="caption" italic="true"\n        >Caption text</ic-typography\n      >\n      <ic-typography variant="caption-uppercase" italic="true"\n        >Caption uppercase</ic-typography\n      >\n      <ic-typography variant="label-uppercase" italic="true"\n        >Label uppercase</ic-typography\n      >\n      <ic-typography variant="code-large" italic="true"\n        >Code large</ic-typography\n      >\n      <ic-typography variant="code-small" italic="true"\n        >Code small</ic-typography\n      >\n      <ic-typography variant="code-extra-small" italic="true"\n        >Code extra small</ic-typography\n      >\n    `'}};const strikethrough=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography variant="h1" strikethrough="true"
        >Extra large title</ic-typography
      >
      <ic-typography variant="h2" strikethrough="true"
        >Large title</ic-typography
      >
      <ic-typography variant="h3" strikethrough="true"
        >Medium title</ic-typography
      >
      <ic-typography variant="h4" strikethrough="true"
        >Small title</ic-typography
      >
      <ic-typography variant="subtitle-large" strikethrough="true"
        >Subtitle 1</ic-typography
      >
      <ic-typography variant="subtitle-small" strikethrough="true"
        >Subtitle 2</ic-typography
      >
      <ic-typography variant="body" strikethrough="true"
        >Body text</ic-typography
      >
      <ic-typography variant="label" strikethrough="true">Label</ic-typography>
      <ic-typography variant="caption" strikethrough="true"
        >Caption text</ic-typography
      >
      <ic-typography variant="caption-uppercase" strikethrough="true"
        >Caption uppercase</ic-typography
      >
      <ic-typography variant="label-uppercase" strikethrough="true"
        >Label uppercase</ic-typography
      >
      <ic-typography variant="code-large" strikethrough="true"
        >Code large</ic-typography
      >
      <ic-typography variant="code-small" strikethrough="true"
        >Code small</ic-typography
      >
      <ic-typography variant="code-extra-small" strikethrough="true"
        >Code extra small</ic-typography
      >
    `;strikethrough.storyName="Strikethrough",strikethrough.parameters={storySource:{source:'html`\n      <ic-typography variant="h1" strikethrough="true"\n        >Extra large title</ic-typography\n      >\n      <ic-typography variant="h2" strikethrough="true"\n        >Large title</ic-typography\n      >\n      <ic-typography variant="h3" strikethrough="true"\n        >Medium title</ic-typography\n      >\n      <ic-typography variant="h4" strikethrough="true"\n        >Small title</ic-typography\n      >\n      <ic-typography variant="subtitle-large" strikethrough="true"\n        >Subtitle 1</ic-typography\n      >\n      <ic-typography variant="subtitle-small" strikethrough="true"\n        >Subtitle 2</ic-typography\n      >\n      <ic-typography variant="body" strikethrough="true"\n        >Body text</ic-typography\n      >\n      <ic-typography variant="label" strikethrough="true">Label</ic-typography>\n      <ic-typography variant="caption" strikethrough="true"\n        >Caption text</ic-typography\n      >\n      <ic-typography variant="caption-uppercase" strikethrough="true"\n        >Caption uppercase</ic-typography\n      >\n      <ic-typography variant="label-uppercase" strikethrough="true"\n        >Label uppercase</ic-typography\n      >\n      <ic-typography variant="code-large" strikethrough="true"\n        >Code large</ic-typography\n      >\n      <ic-typography variant="code-small" strikethrough="true"\n        >Code small</ic-typography\n      >\n      <ic-typography variant="code-extra-small" strikethrough="true"\n        >Code extra small</ic-typography\n      >\n    `'}};const underline=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography variant="h1" underline="true"
        >Extra large title</ic-typography
      >
      <ic-typography variant="h2" underline="true">Large title</ic-typography>
      <ic-typography variant="h3" underline="true">Medium title</ic-typography>
      <ic-typography variant="h4" underline="true">Small title</ic-typography>
      <ic-typography variant="subtitle-large" underline="true"
        >Subtitle 1</ic-typography
      >
      <ic-typography variant="subtitle-small" underline="true"
        >Subtitle 2</ic-typography
      >
      <ic-typography variant="body" underline="true">Body text</ic-typography>
      <ic-typography variant="label" underline="true">Label</ic-typography>
      <ic-typography variant="caption" underline="true"
        >Caption text</ic-typography
      >
      <ic-typography variant="caption-uppercase" underline="true"
        >Caption uppercase</ic-typography
      >
      <ic-typography variant="label-uppercase" underline="true"
        >Label uppercase</ic-typography
      >
      <ic-typography variant="code-large" underline="true"
        >Code large</ic-typography
      >
      <ic-typography variant="code-small" underline="true"
        >Code small</ic-typography
      >
      <ic-typography variant="code-extra-small" underline="true"
        >Code extra small</ic-typography
      >
    `;underline.storyName="Underline",underline.parameters={storySource:{source:'html`\n      <ic-typography variant="h1" underline="true"\n        >Extra large title</ic-typography\n      >\n      <ic-typography variant="h2" underline="true">Large title</ic-typography>\n      <ic-typography variant="h3" underline="true">Medium title</ic-typography>\n      <ic-typography variant="h4" underline="true">Small title</ic-typography>\n      <ic-typography variant="subtitle-large" underline="true"\n        >Subtitle 1</ic-typography\n      >\n      <ic-typography variant="subtitle-small" underline="true"\n        >Subtitle 2</ic-typography\n      >\n      <ic-typography variant="body" underline="true">Body text</ic-typography>\n      <ic-typography variant="label" underline="true">Label</ic-typography>\n      <ic-typography variant="caption" underline="true"\n        >Caption text</ic-typography\n      >\n      <ic-typography variant="caption-uppercase" underline="true"\n        >Caption uppercase</ic-typography\n      >\n      <ic-typography variant="label-uppercase" underline="true"\n        >Label uppercase</ic-typography\n      >\n      <ic-typography variant="code-large" underline="true"\n        >Code large</ic-typography\n      >\n      <ic-typography variant="code-small" underline="true"\n        >Code small</ic-typography\n      >\n      <ic-typography variant="code-extra-small" underline="true"\n        >Code extra small</ic-typography\n      >\n    `'}};const allPropTextStyles=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`
      <ic-typography
        variant="h1"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Extra large title</ic-typography
      >
      <ic-typography
        variant="h2"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Large title</ic-typography
      >
      <ic-typography
        variant="h3"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Medium title</ic-typography
      >
      <ic-typography
        variant="h4"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Small title</ic-typography
      >
      <ic-typography
        variant="subtitle-large"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Subtitle 1</ic-typography
      >
      <ic-typography
        variant="subtitle-small"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Subtitle 2</ic-typography
      >
      <ic-typography
        variant="body"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Body text</ic-typography
      >
      <ic-typography
        variant="label"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Label</ic-typography
      >
      <ic-typography
        variant="caption"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Caption text</ic-typography
      >
      <ic-typography
        variant="caption-uppercase"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Caption uppercase</ic-typography
      >
      <ic-typography
        variant="label-uppercase"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Label uppercase</ic-typography
      >
      <ic-typography
        variant="code-large"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Code large</ic-typography
      >
      <ic-typography
        variant="code-small"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Code small</ic-typography
      >
      <ic-typography
        variant="code-extra-small"
        strikethrough="true"
        italic="true"
        bold="true"
        underline="true"
        >Code extra small</ic-typography
      >
    `;allPropTextStyles.storyName="All prop text styles",allPropTextStyles.parameters={storySource:{source:'html`\n      <ic-typography\n        variant="h1"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Extra large title</ic-typography\n      >\n      <ic-typography\n        variant="h2"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Large title</ic-typography\n      >\n      <ic-typography\n        variant="h3"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Medium title</ic-typography\n      >\n      <ic-typography\n        variant="h4"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Small title</ic-typography\n      >\n      <ic-typography\n        variant="subtitle-large"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Subtitle 1</ic-typography\n      >\n      <ic-typography\n        variant="subtitle-small"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Subtitle 2</ic-typography\n      >\n      <ic-typography\n        variant="body"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Body text</ic-typography\n      >\n      <ic-typography\n        variant="label"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Label</ic-typography\n      >\n      <ic-typography\n        variant="caption"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Caption text</ic-typography\n      >\n      <ic-typography\n        variant="caption-uppercase"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Caption uppercase</ic-typography\n      >\n      <ic-typography\n        variant="label-uppercase"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Label uppercase</ic-typography\n      >\n      <ic-typography\n        variant="code-large"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Code large</ic-typography\n      >\n      <ic-typography\n        variant="code-small"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Code small</ic-typography\n      >\n      <ic-typography\n        variant="code-extra-small"\n        strikethrough="true"\n        italic="true"\n        bold="true"\n        underline="true"\n        >Code extra small</ic-typography\n      >\n    `'}};const playground=args=>lit_html__WEBPACK_IMPORTED_MODULE_2__.dy`<ic-typography
        apply-vertical-margins=${args.applyVerticalMargins}
        variant=${args.variant}
        bold=${args.bold}
        italic=${args.italic}
        strikethrough=${args.strikethrough}
        underline=${args.underline}
        >Typography to test</ic-typography
      >`;playground.storyName="Playground",playground.argTypes={variant:{defaultValue:"body",options:["body","caption","h1","h2","h3","h4","label","subtitle-large","subtitle-small","label-uppercase","caption-uppercase","code-large","code-small","code-extra-small"],control:{type:"select"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:"args => html`<ic-typography\n        apply-vertical-margins=${args.applyVerticalMargins}\n        variant=${args.variant}\n        bold=${args.bold}\n        italic=${args.italic}\n        strikethrough=${args.strikethrough}\n        underline=${args.underline}\n        >Typography to test</ic-typography\n      >`"}};const componentMeta={title:"Web Components/Typography",tags:["stories-mdx"],includeStories:["defaultStory","variants","componentOverride","verticalMargins","truncation","bold","italic","strikethrough","underline","allPropTextStyles","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","variants","componentOverride","verticalMargins","truncation","bold","italic","strikethrough","underline","allPropTextStyles","playground"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/ic-typography/readme.md":module=>{"use strict";module.exports='# ic-typography\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property               | Attribute                | Description                                                                                                                                                                           | Type                                                                                                                                                                                                                                   | Default     |\n| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `applyVerticalMargins` | `apply-vertical-margins` | If `true`, appropriate top and bottom margins will be applied to the typography.                                                                                                      | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `bold`                 | `bold`                   | If `true`, the typography will have a bold font weight. Note: This will have no impact on variants that already use an equivalent or higher font weight (h1, h2, and subtitle-large). | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `italic`               | `italic`                 | If `true`, the typography will have an italic font style.                                                                                                                             | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `maxLines`             | `max-lines`              | The number of lines to display before truncating the text, only used for the \'body\' variant.                                                                                          | `number`                                                                                                                                                                                                                               | `undefined` |\n| `strikethrough`        | `strikethrough`          | If `true`, the typography will have a line through it.                                                                                                                                | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `underline`            | `underline`              | If `true`, the typography will have a line under it.                                                                                                                                  | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `variant`              | `variant`                | The ICDS typography style to use.                                                                                                                                                     | `"badge" \\| "badge-small" \\| "body" \\| "caption" \\| "caption-uppercase" \\| "code-extra-small" \\| "code-large" \\| "code-small" \\| "h1" \\| "h2" \\| "h3" \\| "h4" \\| "label" \\| "label-uppercase" \\| "subtitle-large" \\| "subtitle-small"` | `"body"`    |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-accordion](../ic-accordion)\n - [ic-accordion-group](../ic-accordion-group)\n - [ic-alert](../ic-alert)\n - [ic-back-to-top](../ic-back-to-top)\n - [ic-badge](../ic-badge)\n - [ic-card](../ic-card)\n - [ic-checkbox](../ic-checkbox)\n - [ic-chip](../ic-chip)\n - [ic-classification-banner](../ic-classification-banner)\n - [ic-data-entity](../ic-data-entity)\n - [ic-data-row](../ic-data-row)\n - [ic-dialog](../ic-dialog)\n - [ic-empty-state](../ic-empty-state)\n - [ic-footer](../ic-footer)\n - [ic-footer-link-group](../ic-footer-link-group)\n - [ic-hero](../ic-hero)\n - [ic-input-label](../ic-input-label)\n - [ic-input-validation](../ic-input-validation)\n - [ic-loading-indicator](../ic-loading-indicator)\n - [ic-menu](../ic-menu)\n - [ic-menu-group](../ic-menu-group)\n - [ic-menu-item](../ic-menu-item)\n - [ic-navigation-group](../ic-navigation-group)\n - [ic-navigation-item](../ic-navigation-item)\n - [ic-navigation-menu](../ic-navigation-menu)\n - [ic-page-header](../ic-page-header)\n - [ic-pagination-item](../ic-pagination-item)\n - [ic-popover-menu](../ic-popover-menu)\n - [ic-radio-option](../ic-radio-option)\n - [ic-select](../ic-select)\n - [ic-side-navigation](../ic-side-navigation)\n - [ic-status-tag](../ic-status-tag)\n - [ic-step](../ic-step)\n - [ic-switch](../ic-switch)\n - [ic-tab](../ic-tab)\n - [ic-text-field](../ic-text-field)\n - [ic-toast](../ic-toast)\n - [ic-tooltip](../ic-tooltip)\n - [ic-top-navigation](../ic-top-navigation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-accordion --\x3e ic-typography\n  ic-accordion-group --\x3e ic-typography\n  ic-alert --\x3e ic-typography\n  ic-back-to-top --\x3e ic-typography\n  ic-badge --\x3e ic-typography\n  ic-card --\x3e ic-typography\n  ic-checkbox --\x3e ic-typography\n  ic-chip --\x3e ic-typography\n  ic-classification-banner --\x3e ic-typography\n  ic-data-entity --\x3e ic-typography\n  ic-data-row --\x3e ic-typography\n  ic-dialog --\x3e ic-typography\n  ic-empty-state --\x3e ic-typography\n  ic-footer --\x3e ic-typography\n  ic-footer-link-group --\x3e ic-typography\n  ic-hero --\x3e ic-typography\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  ic-loading-indicator --\x3e ic-typography\n  ic-menu --\x3e ic-typography\n  ic-menu-group --\x3e ic-typography\n  ic-menu-item --\x3e ic-typography\n  ic-navigation-group --\x3e ic-typography\n  ic-navigation-item --\x3e ic-typography\n  ic-navigation-menu --\x3e ic-typography\n  ic-page-header --\x3e ic-typography\n  ic-pagination-item --\x3e ic-typography\n  ic-popover-menu --\x3e ic-typography\n  ic-radio-option --\x3e ic-typography\n  ic-select --\x3e ic-typography\n  ic-side-navigation --\x3e ic-typography\n  ic-status-tag --\x3e ic-typography\n  ic-step --\x3e ic-typography\n  ic-switch --\x3e ic-typography\n  ic-tab --\x3e ic-typography\n  ic-text-field --\x3e ic-typography\n  ic-toast --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-top-navigation --\x3e ic-typography\n  style ic-typography fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}]);
//# sourceMappingURL=components-ic-typography-ic-typography-stories-mdx.4422752c.iframe.bundle.js.map