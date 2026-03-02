import{j as e,M as r}from"./blocks-CebLkIA_.js";import{useMDXComponents as s}from"./index-5wB1wX_s.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BV49Wqli.js";import"./index-C6oD-3TZ.js";function o(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Getting started"}),`
`,e.jsx(n.h2,{id:"installing",children:"Installing"}),`
`,e.jsx(n.p,{children:"To install the components:"}),`
`,e.jsx(n.h3,{id:"step-one",children:"Step one"}),`
`,e.jsx(n.p,{children:"In the root of your project:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`// using npm
npm install @ukic/canary-react @ukic/fonts

// using yarn
rm package-lock.json
yarn add @ukic/canary-react @ukic/fonts
`})}),`
`,e.jsx(n.h3,{id:"step-two",children:"Step two"}),`
`,e.jsx(n.p,{children:"To get the correct styling with the ICDS components, import the core CSS file."}),`
`,e.jsx(n.p,{children:"Add the following into the top level CSS file for your project."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import "@ukic/fonts/dist/fonts.css";
@import "@ukic/canary-react/dist/core/core.css";
`})}),`
`,e.jsxs(n.p,{children:["In order to be rendered consistently across browsers and in line with modern standards, each of the ICDS components uses styles from a global CSS file based on ",e.jsx(n.a,{href:"https://necolas.github.io/normalize.css/",rel:"nofollow",children:"Normalize.css"}),"."]}),`
`,e.jsx(n.p,{children:"If you would like to import these styles to apply them to the rest of your project and slotted elements used within any of the ICDS components, add the following into the top level CSS file as well."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import "@ukic/canary-react/dist/core/normalize.css";
`})}),`
`,e.jsx(n.h3,{id:"step-three",children:"Step three"}),`
`,e.jsx(n.p,{children:"Import the component(s) in your React files."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { IcComponent } from "@ukic/canary-react";
`})}),`
`,e.jsx(n.h3,{id:"step-four",children:"Step four"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@ukic/canary-react"})," package will need to be transformed before you can use these components in Jest tests."]}),`
`,e.jsxs(n.p,{children:["Add a ",e.jsx(n.code,{children:"transformIgnorePatterns"})," field with the value ",e.jsx(n.code,{children:'["/node_modules/(?!@ukic/canary-react)"]'})," to your Jest config."]})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{h as default};
