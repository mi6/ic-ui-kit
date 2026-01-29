import{j as e,M as c}from"./blocks-rvr2gPuo.js";import{useMDXComponents as o}from"./index-DSFBiHr8.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-RlNo5Yc_.js";function s(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Usage with Vanilla JS"}),`
`,e.jsx(n.h2,{id:"installing",children:"Installing"}),`
`,e.jsx(n.h3,{id:"step-one",children:"Step one"}),`
`,e.jsxs(n.p,{children:["Install the packages with ",e.jsx(n.code,{children:"npm"})," or ",e.jsx(n.code,{children:"yarn"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`npm install @ukic/canary-web-components @ukic/fonts

yarn add @ukic/canary-web-components @ukic/fonts
`})}),`
`,e.jsx(n.h3,{id:"step-two",children:"Step two"}),`
`,e.jsxs(n.p,{children:["Import ",e.jsx(n.code,{children:"defineCustomElements"})," in your top level JS file and call it at the bottom of the file:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { defineCustomElements } from "@ukic/canary-web-components/loader";

// ...

defineCustomElements();
`})}),`
`,e.jsx(n.h3,{id:"step-three",children:"Step three"}),`
`,e.jsx(n.p,{children:"Import the ICDS CSS files into your app's top level CSS file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* In your top level CSS file */
/* Depending on your setup, a path to node_modules may be needed instead */
@import "@ukic/fonts/dist/fonts.css";
@import "@ukic/canary-web-components/dist/core/core.css";
`})}),`
`,e.jsx(n.p,{children:"Import the normalised styles that are used within the ICDS components if you would like to apply them to the rest of your project and any slotted elements:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import "@ukic/canary-web-components/dist/core/normalize.css";
`})}),`
`,e.jsx(n.h3,{id:"step-four",children:"Step four"}),`
`,e.jsx(n.p,{children:"Declare and use components in your file, e.g.:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ic-data-table ...></ic-data-table>
<!-- It is possible to use components from @ukic/web-components as these are brought through from @ukic/canary-web-components -->
<ic-button>...</ic-button>
`})})]})}function p(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
