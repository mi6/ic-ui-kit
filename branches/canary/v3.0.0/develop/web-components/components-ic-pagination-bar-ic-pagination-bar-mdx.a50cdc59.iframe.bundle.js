/*! For license information please see components-ic-pagination-bar-ic-pagination-bar-mdx.a50cdc59.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[149,6047],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=(y(2),y(3),Symbol.for("lit-noChange")),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r.createTreeWalker(r,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=C.nextNode(),o++)}return C.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class I extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const j=t.litHtmlPolyfillSupport;j?.(N,R),(t.litHtmlVersions??=[]).push("3.2.1")},"./src/components/ic-pagination-bar/ic-pagination-bar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_canary_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ic-pagination-bar/ic-pagination-bar.stories.js");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_ic_pagination_bar_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_canary_web_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./src/components/ic-pagination-bar/ic-pagination-bar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlignmentLeft:()=>AlignmentLeft,AlignmentSpaceBetween:()=>AlignmentSpaceBetween,Basic:()=>Basic,GoToPageControl:()=>GoToPageControl,HideAllFromItemsPerPage:()=>HideAllFromItemsPerPage,HideRangeLabel:()=>HideRangeLabel,ItemsPerPageControl:()=>ItemsPerPageControl,PaginationItemLabel:()=>PaginationItemLabel,PaginationRangeLabelType:()=>PaginationRangeLabelType,PaginationType:()=>PaginationType,SelectedItemsPerPage:()=>SelectedItemsPerPage,SelectedItemsPerPageToInvalidValue:()=>SelectedItemsPerPageToInvalidValue,SetCurrentPage:()=>SetCurrentPage,SetCurrentPageToInvalidValue:()=>SetCurrentPageToInvalidValue,SetToFirstPage:()=>SetToFirstPage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_pagination_bar_stories});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const ic_pagination_bar_stories={title:"Web Components/Pagination bar",component:"ic-pagination-bar",parameters:{componentAPI:{data:'# ic-pagination-bar\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                           | Attribute                                | Description                                                                                                                             | Type                                   | Default     |\n| ---------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |\n| `alignment`                        | `alignment`                              | Sets the alignment of the items in the pagination bar.                                                                                  | `"left" \\| "right" \\| "space-between"` | `"right"`   |\n| `currentPage`                      | `current-page`                           | The current page number to be displayed on the pagination bar.                                                                          | `number`                               | `1`         |\n| `hideAllFromItemsPerPage`          | `hide-all-from-items-per-page`           | If `true`, the \'All\' option will be hidden from the \'items per page\' select input.                                                      | `boolean`                              | `false`     |\n| `hideRangeLabel`                   | `hide-range-label`                       | If `true`, the number of total items and current item range or number of total pages and current page will be hidden.                   | `boolean`                              | `false`     |\n| `itemLabel`                        | `item-label`                             | The text which will be used in place of \'Item\' on the pagination bar.                                                                   | `string`                               | `"Item"`    |\n| `itemsPerPageOptions`              | --                                       | The options which will be displayed for \'items per page\' select input.                                                                  | `{ label: string; value: string; }[]`  | `undefined` |\n| `monochrome`                       | `monochrome`                             | If `true`, the pagination bar will display as black in the light theme, and white in dark theme.                                        | `boolean`                              | `false`     |\n| `pageLabel`                        | `page-label`                             | The text which will be used in place of \'Page\' on the pagination bar.                                                                   | `string`                               | `"Page"`    |\n| `rangeLabelType`                   | `range-label-type`                       | Whether total number of items and current item range or total number of pages and current page is displayed.                            | `"data" \\| "page"`                     | `"page"`    |\n| `selectedItemsPerPage`             | `selected-items-per-page`                | The items per page option to be selected.                                                                                               | `number`                               | `undefined` |\n| `setToFirstPageOnPaginationChange` | `set-to-first-page-on-pagination-change` | If `true`, the pagination bar is set to the first page when the \'items per page\' changes                                                | `boolean`                              | `false`     |\n| `showGoToPageControl`              | `show-go-to-page-control`                | If `true`, the \'go to page\' control should be displayed.                                                                                | `boolean`                              | `false`     |\n| `showItemsPerPageControl`          | `show-items-per-page-control`            | If `true`, the select input to control \'items per page\' should be displayed.                                                            | `boolean`                              | `false`     |\n| `theme`                            | `theme`                                  | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"`       | `"inherit"` |\n| `totalItems` _(required)_          | `total-items`                            | Total number of items to be displayed across all pages.                                                                                 | `number`                               | `undefined` |\n| `type`                             | `type`                                   | Whether the displayed pagination is simple or complex.                                                                                  | `"complex" \\| "simple"`                | `"simple"`  |\n\n\n## Events\n\n| Event                  | Description                                                                                                                                                                                                                                       | Type                                   |\n| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |\n| `icItemsPerPageChange` | Emitted when the items per page option is changed.                                                                                                                                                                                                | `CustomEvent<{ value: number; }>`      |\n| `icPageChange`         | Emitted when a page is navigated to via the \'go to\' input. The `detail` property contains `value` (i.e. the page number) and a `fromItemsPerPage` flag to indicate if the event was triggered by the `icItemsPerPageChange` event also occurring. | `CustomEvent<IcPageChangeEventDetail>` |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-data-table](../ic-data-table)\n\n### Depends on\n\n- ic-typography\n- ic-select\n- ic-pagination\n- ic-tooltip\n- ic-text-field\n- ic-button\n\n### Graph\n```mermaid\ngraph TD;\n  ic-pagination-bar --\x3e ic-typography\n  ic-pagination-bar --\x3e ic-select\n  ic-pagination-bar --\x3e ic-pagination\n  ic-pagination-bar --\x3e ic-tooltip\n  ic-pagination-bar --\x3e ic-text-field\n  ic-pagination-bar --\x3e ic-button\n  ic-select --\x3e ic-input-container\n  ic-select --\x3e ic-input-label\n  ic-select --\x3e ic-input-component-container\n  ic-select --\x3e ic-typography\n  ic-select --\x3e ic-button\n  ic-select --\x3e ic-menu\n  ic-select --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-menu --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-typography\n  ic-menu --\x3e ic-button\n  ic-input-validation --\x3e ic-typography\n  ic-pagination --\x3e ic-button\n  ic-pagination --\x3e ic-pagination-item\n  ic-pagination-item --\x3e ic-typography\n  ic-text-field --\x3e ic-input-container\n  ic-text-field --\x3e ic-input-label\n  ic-text-field --\x3e ic-input-component-container\n  ic-text-field --\x3e ic-input-validation\n  ic-text-field --\x3e ic-typography\n  ic-data-table --\x3e ic-pagination-bar\n  style ic-pagination-bar fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}},Basic={render:()=>lit_html.qy`<ic-pagination-bar total-items="100"></ic-pagination-bar>`,name:"Basic"},ItemsPerPageControl={render:()=>lit_html.qy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
      ></ic-pagination-bar>
    </div>
    <script>
      const paginationBar = document.querySelector("ic-pagination-bar");
      paginationBar.itemsPerPageOptions = [
        { label: "50", value: "50" },
        { label: "100", value: "100" },
        { label: "250", value: "250" },
      ];
    </script>`,name:"Items per page control"},GoToPageControl={render:()=>lit_html.qy`<div style="height: 120px;">
    <ic-pagination-bar
      total-items="100"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:"Go to page control"},PaginationRangeLabelType={render:()=>lit_html.qy`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      range-label-type="data"
    ></ic-pagination-bar>
  </div>`,name:"Pagination range label type"},PaginationItemLabel={render:()=>lit_html.qy`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      range-label-type="data"
      item-label="Image"
    ></ic-pagination-bar>
  </div>`,name:"Pagination item label"},PaginationType={render:()=>lit_html.qy`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      type="complex"
    ></ic-pagination-bar>
  </div>`,name:"Pagination type"},AlignmentLeft={render:()=>lit_html.qy`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="left"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:"Alignment left"},AlignmentSpaceBetween={render:()=>lit_html.qy`<div style="height: 150px;">
    <ic-pagination-bar
      total-items="100"
      alignment="space-between"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:"Alignment space-between"},HideRangeLabel={render:()=>lit_html.qy`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      hide-range-label="true"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
    ></ic-pagination-bar>
  </div>`,name:"Hide range label"},HideAllFromItemsPerPage={render:()=>lit_html.qy`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-all-from-items-per-page="true"
    ></ic-pagination-bar>
  </div>`,name:"Hide 'All' from items per page"},SetToFirstPage={render:()=>lit_html.qy`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      hide-all-from-items-per-page="true"
      set-to-first-page-on-pagination-change="true"
    ></ic-pagination-bar>
  </div>`,name:"Set to first page when items per page changes"},SelectedItemsPerPage={render:()=>lit_html.qy`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>`,name:"Set the selected items per page"},SelectedItemsPerPageToInvalidValue={render:()=>lit_html.qy`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      selected-items-per-page="25"
    ></ic-pagination-bar>
  </div>`,name:"Set the selected items per page to an invalid value"},SetCurrentPage={render:()=>lit_html.qy`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="3"
    ></ic-pagination-bar>
  </div>`,name:"Set the current page"},SetCurrentPageToInvalidValue={render:()=>lit_html.qy`<div style="height:150px">
    <ic-pagination-bar
      total-items="100"
      show-items-per-page-control="true"
      show-go-to-page-control="true"
      current-page="-1"
    ></ic-pagination-bar>
  </div>`,name:"Set the current page to an invalid value"},__namedExportsOrder=["Basic","ItemsPerPageControl","GoToPageControl","PaginationRangeLabelType","PaginationItemLabel","PaginationType","AlignmentLeft","AlignmentSpaceBetween","HideRangeLabel","HideAllFromItemsPerPage","SetToFirstPage","SelectedItemsPerPage","SelectedItemsPerPageToInvalidValue","SetCurrentPage","SetCurrentPageToInvalidValue"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-pagination-bar total-items="100"></ic-pagination-bar>`,\n  name: "Basic"\n}',...Basic.parameters?.docs?.source},description:{story:"Use the pagination bar when large amounts of content are split across multiple pages and various pagination options are required.\n\nThere is one required attribute for the pagination bar:\n- total-items: `number`\n\nClick the 'Component API' tab to view all the available attributes, events and slots for pagination bar.\n\nTo use the pagination bar component, import `@ukic/canary-web-components` into your application.",...Basic.parameters?.docs?.description}}},ItemsPerPageControl.parameters={...ItemsPerPageControl.parameters,docs:{...ItemsPerPageControl.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        show-items-per-page-control="true"\n      ></ic-pagination-bar>\n    </div>\n    <script>\n      const paginationBar = document.querySelector("ic-pagination-bar");\n      paginationBar.itemsPerPageOptions = [\n        { label: "50", value: "50" },\n        { label: "100", value: "100" },\n        { label: "250", value: "250" },\n      ];\n    <\/script>`,\n  name: "Items per page control"\n}',...ItemsPerPageControl.parameters?.docs?.source},description:{story:"Pagination bar will display the number of pages out of the total number of pages as well as the `simple` pagination type.\n\nBy default, the items per page is set to 10. If the total items is greater than 100, the default items per page is set to 25.\n\nTo display the items per page control, set the `show-items-per-page-control` attribute to `true`.\n\nThe items per page control will display a dropdown with options to select the number of items to display per page. Customize the options by setting the `itemsPerPageOptions` property.\n`itemsPerPageOptions` is an array of objects with `label` and `value` properties. If more than three options are provided, the dropdown will display the first three options and an 'All' option.",...ItemsPerPageControl.parameters?.docs?.description}}},GoToPageControl.parameters={...GoToPageControl.parameters,docs:{...GoToPageControl.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 120px;">\n    <ic-pagination-bar\n      total-items="100"\n      show-go-to-page-control="true"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Go to page control"\n}',...GoToPageControl.parameters?.docs?.source},description:{story:"To display the go to page control, set the `show-go-to-page-control` attribute to `true`. 'Go to page' allows the user to jump to a specific page. If the page number is invalid, the input will be styled in the `ic-status-error` colour with a tooltip detailing the error.",...GoToPageControl.parameters?.docs?.description}}},PaginationRangeLabelType.parameters={...PaginationRangeLabelType.parameters,docs:{...PaginationRangeLabelType.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 150px;">\n    <ic-pagination-bar\n      total-items="100"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n      range-label-type="data"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Pagination range label type"\n}',...PaginationRangeLabelType.parameters?.docs?.source},description:{story:"The pagination range label type can be set to two types:\n- `simple`: [default]: Display the total number of pages and the current page number.\n- `data`: Displays the total number of items and the items range.\n\nThe example below uses the `data` pagination range label type. The range is updated when the page is changed.",...PaginationRangeLabelType.parameters?.docs?.description}}},PaginationItemLabel.parameters={...PaginationItemLabel.parameters,docs:{...PaginationItemLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 150px;">\n    <ic-pagination-bar\n      total-items="100"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n      range-label-type="data"\n      item-label="Image"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Pagination item label"\n}',...PaginationItemLabel.parameters?.docs?.source},description:{story:"'Item' can be changed to a custom label by setting the `item-label` attribute. Any occurrences of 'Item' in the pagination bar will be replaced with the custom label.",...PaginationItemLabel.parameters?.docs?.description}}},PaginationType.parameters={...PaginationType.parameters,docs:{...PaginationType.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 150px;">\n    <ic-pagination-bar\n      total-items="100"\n      show-items-per-page-control="true"\n      type="complex"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Pagination type"\n}',...PaginationType.parameters?.docs?.source},description:{story:"The pagination type can be set to two types:\n- `simple`: [default]: Display the current page as a label with back and next buttons.\n- `complex`: Displays all the page numbers as buttons with back and next buttons.\n\nThe `complex` pagination type is useful when there are many pages to navigate through.",...PaginationType.parameters?.docs?.description}}},AlignmentLeft.parameters={...AlignmentLeft.parameters,docs:{...AlignmentLeft.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 150px;">\n    <ic-pagination-bar\n      total-items="100"\n      alignment="left"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Alignment left"\n}',...AlignmentLeft.parameters?.docs?.source},description:{story:"The pagination elements can be aligned to the `right` (default), `left` or `space-between`. The default alignment is right.",...AlignmentLeft.parameters?.docs?.description}}},AlignmentSpaceBetween.parameters={...AlignmentSpaceBetween.parameters,docs:{...AlignmentSpaceBetween.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height: 150px;">\n    <ic-pagination-bar\n      total-items="100"\n      alignment="space-between"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Alignment space-between"\n}',...AlignmentSpaceBetween.parameters?.docs?.source}}},HideRangeLabel.parameters={...HideRangeLabel.parameters,docs:{...HideRangeLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n    <ic-pagination-bar\n      total-items="100"\n      hide-range-label="true"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Hide range label"\n}',...HideRangeLabel.parameters?.docs?.source},description:{story:"If the pagination bar becomes cluttered due to the number of pagination elements displayed, the range label can be hidden by setting the `hide-range-label` attribute to `true`.",...HideRangeLabel.parameters?.docs?.description}}},HideAllFromItemsPerPage.parameters={...HideAllFromItemsPerPage.parameters,docs:{...HideAllFromItemsPerPage.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n    <ic-pagination-bar\n      total-items="100"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n      hide-all-from-items-per-page="true"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Hide \'All\' from items per page"\n}',...HideAllFromItemsPerPage.parameters?.docs?.source},description:{story:"If you have a predefined list of items you want in the itemsPerPage select, the 'All' option can be hidden by setting `hide-all-from-items-per-page` to `true`.",...HideAllFromItemsPerPage.parameters?.docs?.description}}},SetToFirstPage.parameters={...SetToFirstPage.parameters,docs:{...SetToFirstPage.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n    <ic-pagination-bar\n      total-items="100"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n      hide-all-from-items-per-page="true"\n      set-to-first-page-on-pagination-change="true"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Set to first page when items per page changes"\n}',...SetToFirstPage.parameters?.docs?.source},description:{story:"When the 'items per page' value changes, setting `set-to-first-page-on-pagination-change` to `true` will set the pagination to the first page.",...SetToFirstPage.parameters?.docs?.description}}},SelectedItemsPerPage.parameters={...SelectedItemsPerPage.parameters,docs:{...SelectedItemsPerPage.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n    <ic-pagination-bar\n      total-items="100"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n      selected-items-per-page="25"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Set the selected items per page"\n}',...SelectedItemsPerPage.parameters?.docs?.source},description:{story:"The `selected-items-per-page` prop can be used to programmatically set the items per page dropdown option.",...SelectedItemsPerPage.parameters?.docs?.description}}},SelectedItemsPerPageToInvalidValue.parameters={...SelectedItemsPerPageToInvalidValue.parameters,docs:{...SelectedItemsPerPageToInvalidValue.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n    <ic-pagination-bar\n      total-items="100"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n      selected-items-per-page="25"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Set the selected items per page to an invalid value"\n}',...SelectedItemsPerPageToInvalidValue.parameters?.docs?.source},description:{story:"The `selected-items-per-page` prop can be used to programmatically set the items per page dropdown option. If provided, this prop must match one of the items per page dropdown options, otherwise an error appears on the console and the prop is ignored.",...SelectedItemsPerPageToInvalidValue.parameters?.docs?.description}}},SetCurrentPage.parameters={...SetCurrentPage.parameters,docs:{...SetCurrentPage.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n    <ic-pagination-bar\n      total-items="100"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n      current-page="3"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Set the current page"\n}',...SetCurrentPage.parameters?.docs?.source},description:{story:"The `current-page` prop can be used to programmatically set the current page.",...SetCurrentPage.parameters?.docs?.description}}},SetCurrentPageToInvalidValue.parameters={...SetCurrentPageToInvalidValue.parameters,docs:{...SetCurrentPageToInvalidValue.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="height:150px">\n    <ic-pagination-bar\n      total-items="100"\n      show-items-per-page-control="true"\n      show-go-to-page-control="true"\n      current-page="-1"\n    ></ic-pagination-bar>\n  </div>`,\n  name: "Set the current page to an invalid value"\n}',...SetCurrentPageToInvalidValue.parameters?.docs?.source},description:{story:"The `current-page` prop can be used to programmatically set the current page. If provided, this prop must be greater than 0 and less than or equal to the total number of pages, otherwise an error appears on the console and the prop is ignored.",...SetCurrentPageToInvalidValue.parameters?.docs?.description}}}}}]);
//# sourceMappingURL=components-ic-pagination-bar-ic-pagination-bar-mdx.a50cdc59.iframe.bundle.js.map