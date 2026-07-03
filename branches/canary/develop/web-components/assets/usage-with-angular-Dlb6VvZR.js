import{i as e}from"./preload-helper-CT_b8DTk.js";import{a as t,d as n,s as r}from"./blocks-Daas9J1T.js";import{s as i}from"./chunk-LITCR56V-Dp62U_Qf.js";import{t as a}from"./mdx-react-shim-kVQIGYJx.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Usage with Angular`}),`
`,(0,c.jsx)(r.h1,{id:`installing-in-an-angular-project`,children:`Installing in an Angular project`}),`
`,(0,c.jsx)(r.p,{children:`These instructions were used with Angular version 13.2.5.`}),`
`,(0,c.jsx)(r.h2,{id:`installing`,children:`Installing`}),`
`,(0,c.jsx)(r.h3,{id:`step-one`,children:`Step one`}),`
`,(0,c.jsxs)(r.p,{children:[`Install the packages with `,(0,c.jsx)(r.code,{children:`npm`}),` or `,(0,c.jsx)(r.code,{children:`yarn`}),`.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-shell`,children:`npm install @ukic/canary-web-components @ukic/fonts

yarn add @ukic/canary-web-components @ukic/fonts
`})}),`
`,(0,c.jsx)(r.h3,{id:`step-two`,children:`Step two`}),`
`,(0,c.jsxs)(r.p,{children:[`In the `,(0,c.jsx)(r.code,{children:`app.modules.ts`}),` file, import the `,(0,c.jsx)(r.code,{children:`CUSTOM_ELEMENTS_SCHEMA`}),` and include it in the `,(0,c.jsx)(r.code,{children:`@NgModule`}),` decorator object:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-js`,children:`// app.modules.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

//...

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
});
`})}),`
`,(0,c.jsx)(r.h3,{id:`step-three`,children:`Step three`}),`
`,(0,c.jsxs)(r.p,{children:[`Import `,(0,c.jsx)(r.code,{children:`defineCustomElements`}),` in your `,(0,c.jsx)(r.code,{children:`main.js`}),` file and call it at the bottom of the file:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-js`,children:`// main.ts
import { defineCustomElements } from "@ukic/canary-web-components/loader";

// ...

defineCustomElements();
`})}),`
`,(0,c.jsx)(r.h3,{id:`step-four`,children:`Step four`}),`
`,(0,c.jsx)(r.p,{children:`Import the ICDS CSS files into your app's top level CSS file:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* usually src/styles.css */
/* Depending on your setup, a path to node_modules may be needed instead */
@import "@ukic/fonts/dist/fonts.css";
@import "@ukic/canary-web-components/dist/core/core.css";
`})}),`
`,(0,c.jsxs)(r.p,{children:[`The fonts package can also be imported inside an Angular HTML file by adding the import statement within the `,(0,c.jsx)(r.code,{children:`<styles>`}),` tag.`]}),`
`,(0,c.jsx)(r.p,{children:`Import the normalised styles that are used within the ICDS components if you would like to apply them to the rest of your project and any slotted elements:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`@import "@ukic/canary-web-components/dist/core/normalize.css";
`})}),`
`,(0,c.jsx)(r.h3,{id:`step-five`,children:`Step five`}),`
`,(0,c.jsxs)(r.p,{children:[`Declare the component in your `,(0,c.jsx)(r.code,{children:`app.component.html`}),` file, e.g.:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<!-- app.component.html -->
<ic-data-table ...></ic-data-table>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};