import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-Bx8C_hwt.js";import{a as n,s as r,y as i}from"./blocks-DqwuMwX_.js";import{t as a}from"./mdx-react-shim-Bb92RZvD.js";function o(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Getting started`}),`
`,(0,c.jsx)(t.h2,{id:`installing`,children:`Installing`}),`
`,(0,c.jsx)(t.p,{children:`To install the components:`}),`
`,(0,c.jsx)(t.h3,{id:`step-one`,children:`Step one`}),`
`,(0,c.jsx)(t.p,{children:`In the root of your project:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-shell`,children:`// using npm
npm install @ukic/canary-react @ukic/fonts

// using yarn
rm package-lock.json
yarn add @ukic/canary-react @ukic/fonts
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-two`,children:`Step two`}),`
`,(0,c.jsx)(t.p,{children:`To get the correct styling with the ICDS components, import the core CSS file.`}),`
`,(0,c.jsx)(t.p,{children:`Add the following into the top level CSS file for your project.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`@import "@ukic/fonts/dist/fonts.css";
@import "@ukic/canary-react/dist/core/core.css";
`})}),`
`,(0,c.jsxs)(t.p,{children:[`In order to be rendered consistently across browsers and in line with modern standards, each of the ICDS components uses styles from a global CSS file based on `,(0,c.jsx)(t.a,{href:`https://necolas.github.io/normalize.css/`,rel:`nofollow`,children:`Normalize.css`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`If you would like to import these styles to apply them to the rest of your project and slotted elements used within any of the ICDS components, add the following into the top level CSS file as well.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`@import "@ukic/canary-react/dist/core/normalize.css";
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-three`,children:`Step three`}),`
`,(0,c.jsx)(t.p,{children:`Import the component(s) in your React files.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-jsx`,children:`import { IcComponent } from "@ukic/canary-react";
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-four`,children:`Step four`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@ukic/canary-react`}),` package will need to be transformed before you can use these components in Jest tests.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Add a `,(0,c.jsx)(t.code,{children:`transformIgnorePatterns`}),` field with the value `,(0,c.jsx)(t.code,{children:`["/node_modules/(?!@ukic/canary-react)"]`}),` to your Jest config.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};