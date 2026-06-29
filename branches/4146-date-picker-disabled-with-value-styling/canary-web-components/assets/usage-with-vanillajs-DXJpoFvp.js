import{i as e}from"./preload-helper-xPQekRTU.js";import{a as t,d as n,s as r}from"./blocks-D5Ou0ERt.js";import{s as i}from"./chunk-LITCR56V-9aKd6Ajg.js";import{t as a}from"./mdx-react-shim-BnqnkAE_.js";function o(e){let r={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Usage with Vanilla JS`}),`
`,(0,c.jsx)(r.h2,{id:`installing`,children:`Installing`}),`
`,(0,c.jsx)(r.h3,{id:`step-one`,children:`Step one`}),`
`,(0,c.jsxs)(r.p,{children:[`Install the packages with `,(0,c.jsx)(r.code,{children:`npm`}),` or `,(0,c.jsx)(r.code,{children:`yarn`}),`.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-shell`,children:`npm install @ukic/canary-web-components @ukic/fonts

yarn add @ukic/canary-web-components @ukic/fonts
`})}),`
`,(0,c.jsx)(r.h3,{id:`step-two`,children:`Step two`}),`
`,(0,c.jsxs)(r.p,{children:[`Import `,(0,c.jsx)(r.code,{children:`defineCustomElements`}),` in your top level JS file and call it at the bottom of the file:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-js`,children:`import { defineCustomElements } from "@ukic/canary-web-components/loader";

// ...

defineCustomElements();
`})}),`
`,(0,c.jsx)(r.h3,{id:`step-three`,children:`Step three`}),`
`,(0,c.jsx)(r.p,{children:`Import the ICDS CSS files into your app's top level CSS file:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* In your top level CSS file */
/* Depending on your setup, a path to node_modules may be needed instead */
@import "@ukic/fonts/dist/fonts.css";
@import "@ukic/canary-web-components/dist/core/core.css";
`})}),`
`,(0,c.jsx)(r.p,{children:`Import the normalised styles that are used within the ICDS components if you would like to apply them to the rest of your project and any slotted elements:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`@import "@ukic/canary-web-components/dist/core/normalize.css";
`})}),`
`,(0,c.jsx)(r.h3,{id:`step-four`,children:`Step four`}),`
`,(0,c.jsx)(r.p,{children:`Declare and use components in your file, e.g.:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<ic-data-table ...></ic-data-table>
<!-- It is possible to use components from @ukic/web-components as these are brought through from @ukic/canary-web-components -->
<ic-button>...</ic-button>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};