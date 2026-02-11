import{j as e,M as i}from"./blocks-DarbS5eN.js";import{useMDXComponents as o}from"./index-DYl9UENv.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DpVjrpa9.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Usage with Angular"}),`
`,e.jsx(n.h1,{id:"installing-in-an-angular-project",children:"Installing in an Angular project"}),`
`,e.jsx(n.p,{children:"These instructions were used with Angular version 13.2.5."}),`
`,e.jsx(n.h2,{id:"installing",children:"Installing"}),`
`,e.jsx(n.h3,{id:"step-one",children:"Step one"}),`
`,e.jsxs(n.p,{children:["Install the packages with ",e.jsx(n.code,{children:"npm"})," or ",e.jsx(n.code,{children:"yarn"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`npm install @ukic/canary-web-components @ukic/fonts

yarn add @ukic/canary-web-components @ukic/fonts
`})}),`
`,e.jsx(n.h3,{id:"step-two",children:"Step two"}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.code,{children:"app.modules.ts"})," file, import the ",e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," and include it in the ",e.jsx(n.code,{children:"@NgModule"})," decorator object:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// app.modules.ts
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
`,e.jsx(n.h3,{id:"step-three",children:"Step three"}),`
`,e.jsxs(n.p,{children:["Import ",e.jsx(n.code,{children:"defineCustomElements"})," in your ",e.jsx(n.code,{children:"main.js"})," file and call it at the bottom of the file:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// main.ts
import { defineCustomElements } from "@ukic/canary-web-components/loader";

// ...

defineCustomElements();
`})}),`
`,e.jsx(n.h3,{id:"step-four",children:"Step four"}),`
`,e.jsx(n.p,{children:"Import the ICDS CSS files into your app's top level CSS file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* usually src/styles.css */
/* Depending on your setup, a path to node_modules may be needed instead */
@import "@ukic/fonts/dist/fonts.css";
@import "@ukic/canary-web-components/dist/core/core.css";
`})}),`
`,e.jsxs(n.p,{children:["The fonts package can also be imported inside an Angular HTML file by adding the import statement within the ",e.jsx(n.code,{children:"<styles>"})," tag."]}),`
`,e.jsx(n.p,{children:"Import the normalised styles that are used within the ICDS components if you would like to apply them to the rest of your project and any slotted elements:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import "@ukic/canary-web-components/dist/core/normalize.css";
`})}),`
`,e.jsx(n.h3,{id:"step-five",children:"Step five"}),`
`,e.jsxs(n.p,{children:["Declare the component in your ",e.jsx(n.code,{children:"app.component.html"})," file, e.g.:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- app.component.html -->
<ic-data-table ...></ic-data-table>
`})})]})}function p(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{p as default};
