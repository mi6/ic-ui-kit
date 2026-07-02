import{i as e}from"./preload-helper-CT_b8DTk.js";import{a as t,d as n,s as r}from"./blocks-DuC58PoY.js";import{s as i}from"./chunk-LITCR56V-B6FsH57I.js";import{t as a}from"./mdx-react-shim-D93MKip5.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Usage with Vue`}),`
`,(0,c.jsx)(r.h1,{id:`installing-in-vue-projects`,children:`Installing in Vue projects`}),`
`,(0,c.jsx)(r.p,{children:`These instructions were used with Vue version 3.2.31.`}),`
`,(0,c.jsx)(r.h2,{id:`installing`,children:`Installing`}),`
`,(0,c.jsx)(r.h3,{id:`step-one`,children:`Step one`}),`
`,(0,c.jsxs)(r.p,{children:[`Install the packages with `,(0,c.jsx)(r.code,{children:`npm`}),` or `,(0,c.jsx)(r.code,{children:`yarn`}),`.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-shell`,children:`npm install @ukic/canary-web-components @ukic/fonts

yarn add @ukic/canary-web-components @ukic/fonts
`})}),`
`,(0,c.jsx)(r.p,{children:`Add options into your relevant config`}),`
`,(0,c.jsx)(r.h3,{id:`-step-two`,children:`### Step two`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-js`,children:`// Only works if using in-browser compilation.
app.config.compilerOptions.isCustomElement = (tag) => tag.includes("-");
`})}),`
`,(0,c.jsx)(r.h3,{id:`vite-config`,children:`Vite config`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-js`,children:`// vite.config.js
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
`,(0,c.jsx)(r.h3,{id:`vue-cli-config`,children:`Vue CLI config`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-js`,children:`// vue.config.js
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
`,(0,c.jsxs)(r.p,{children:[`Import `,(0,c.jsx)(r.code,{children:`defineCustomElements`}),` in your `,(0,c.jsx)(r.code,{children:`main.js`}),` file and call it at the bottom of the file:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-js`,children:`// main.js
import { defineCustomElements } from "@ukic/canary-web-components/loader";

// ...

defineCustomElements();
`})}),`
`,(0,c.jsx)(r.p,{children:`Declare and use components in your file, e.g.:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<ic-data-table ...></ic-data-table>
`})}),`
`,(0,c.jsx)(r.h2,{id:`importing-css-styles-and-fonts`,children:`Importing CSS styles and fonts`}),`
`,(0,c.jsx)(r.p,{children:`Import the ICDS CSS files into your app's top level CSS file:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* In your top level CSS file */
/* Depending on your setup, a path to node_modules may be needed instead */
@import "@ukic/fonts/dist/fonts.css";
@import "@ukic/canary-web-components/dist/core/core.css";
`})}),`
`,(0,c.jsx)(r.p,{children:`Import the normalised styles that are used within the ICDS components if you would like to apply them to the rest of your project and any slotted elements:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`@import "@ukic/canary-web-components/dist/core/normalize.css";
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};