import{j as n,M as o}from"./blocks-CU7stiHj.js";import{useMDXComponents as i}from"./index-wqCn4KX9.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dn5hLHgB.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Usage with Vue"}),`
`,n.jsx(e.h1,{id:"installing-in-vue-projects",children:"Installing in Vue projects"}),`
`,n.jsx(e.p,{children:"These instructions were used with Vue version 3.2.31."}),`
`,n.jsx(e.h2,{id:"installing",children:"Installing"}),`
`,n.jsx(e.h3,{id:"step-one",children:"Step one"}),`
`,n.jsxs(e.p,{children:["Install the packages with ",n.jsx(e.code,{children:"npm"})," or ",n.jsx(e.code,{children:"yarn"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`npm install @ukic/canary-web-components @ukic/fonts

yarn add @ukic/canary-web-components @ukic/fonts
`})}),`
`,n.jsx(e.p,{children:"Add options into your relevant config"}),`
`,n.jsx(e.h3,{id:"-step-two",children:"### Step two"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// Only works if using in-browser compilation.
app.config.compilerOptions.isCustomElement = (tag) => tag.includes("-");
`})}),`
`,n.jsx(e.h3,{id:"vite-config",children:"Vite config"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// vite.config.js
import vue from "@vitejs/plugin-vue";

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
  ],
};
`})}),`
`,n.jsx(e.h3,{id:"vue-cli-config",children:"Vue CLI config"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ic- as custom elements
          isCustomElement: (tag) => tag.startsWith("ic-"),
        },
      }));
  },
};
`})}),`
`,n.jsxs(e.p,{children:["Import ",n.jsx(e.code,{children:"defineCustomElements"})," in your ",n.jsx(e.code,{children:"main.js"})," file and call it at the bottom of the file:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// main.js
import { defineCustomElements } from "@ukic/canary-web-components/loader";

// ...

defineCustomElements();
`})}),`
`,n.jsx(e.p,{children:"Declare and use components in your file, e.g.:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<ic-data-table ...></ic-data-table>
`})}),`
`,n.jsx(e.h2,{id:"importing-css-styles-and-fonts",children:"Importing CSS styles and fonts"}),`
`,n.jsx(e.p,{children:"Import the ICDS CSS files into your app's top level CSS file:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* In your top level CSS file */
/* Depending on your setup, a path to node_modules may be needed instead */
@import "@ukic/fonts/dist/fonts.css";
@import "@ukic/canary-web-components/dist/core/core.css";
`})}),`
`,n.jsx(e.p,{children:"Import the normalised styles that are used within the ICDS components if you would like to apply them to the rest of your project and any slotted elements:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@import "@ukic/canary-web-components/dist/core/normalize.css";
`})})]})}function p(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{p as default};
