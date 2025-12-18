/*! For license information please see components-ic-tree-view-ic-tree-view-stories.f5a13406.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[3231],{"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=(y(2),y(3),Symbol.for("lit-noChange")),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r.createTreeWalker(r,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=C.nextNode(),o++)}return C.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class I extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const j=t.litHtmlPolyfillSupport;j?.(N,R),(t.litHtmlVersions??=[]).push("3.2.1")},"./src/components/ic-tree-view/ic-tree-view.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,BasicSlotted:()=>BasicSlotted,CustomIDs:()=>CustomIDs,DisabledTreeItems:()=>DisabledTreeItems,DisabledTreeItemsSlotted:()=>DisabledTreeItemsSlotted,Expanded:()=>Expanded,ExpandedSlotted:()=>ExpandedSlotted,Large:()=>Large,LargeSlotted:()=>LargeSlotted,Link:()=>Link,LinkSlotted:()=>LinkSlotted,MaxContent:()=>MaxContent,MaxContentSlotted:()=>MaxContentSlotted,Nested:()=>Nested,NestedSlotted:()=>NestedSlotted,RouterItem:()=>RouterItem,SelectedTreeItem:()=>SelectedTreeItem,SelectedTreeItemSlotted:()=>SelectedTreeItemSlotted,SlottedContent:()=>SlottedContent,SlottedCustomIds:()=>SlottedCustomIds,Small:()=>Small,SmallSlotted:()=>SmallSlotted,TruncationBehaviour:()=>TruncationBehaviour,TruncationBehaviourSlotted:()=>TruncationBehaviourSlotted,WithIcons:()=>WithIcons,WithIconsSlotted:()=>WithIconsSlotted,WithNestedSkipLink:()=>WithNestedSkipLink,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_tree_view_stories});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const ic_tree_view_stories={title:"Web Components/Tree view",component:"ic-tree-view",parameters:{componentAPI:{data:'# ic-tree-view\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property            | Attribute             | Description                                                                                                                                                                         | Type                                          | Default     |\n| ------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |\n| `heading`           | `heading`             | The heading of the tree view.                                                                                                                                                       | `string`                                      | `""`        |\n| `size`              | `size`                | The size of the tree view.                                                                                                                                                          | `"large" \\| "medium" \\| "small" \\| undefined` | `"medium"`  |\n| `theme`             | `theme`               | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                             | `"dark" \\| "inherit" \\| "light" \\| undefined` | `"inherit"` |\n| `treeItemData`      | --                    | The content within the tree view tree items. This will take precedence over slotted content.                                                                                        | `IcTreeItemOptions[]`                         | `[]`        |\n| `truncateHeading`   | `truncate-heading`    | If `true`, the tree view heading will be truncated instead of text wrapping. When used on small devices, this prop will be overridden and headings will be set to text-wrap.        | `boolean`                                     | `false`     |\n| `truncateTreeItems` | `truncate-tree-items` | If `true`, tree items will be truncated, unless they are individually overridden. When used on small devices, this prop will be overridden and tree-items will be set to text-wrap. | `boolean`                                     | `false`     |\n\n\n## Slots\n\n| Slot        | Description                                   |\n| ----------- | --------------------------------------------- |\n| `"heading"` | Content is set as the tree view heading.      |\n| `"icon"`    | Content is placed to the left of the heading. |\n\n\n## CSS Custom Properties\n\n| Name                | Description            |\n| ------------------- | ---------------------- |\n| `--tree-view-width` | Width of the tree view |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-tooltip\n- ic-typography\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tree-view --\x3e ic-tooltip\n  ic-tree-view --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-tree-view fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n# ic-tree-item\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property           | Attribute            | Description                                                                                                                             | Type                                                                                                                                                                                                  | Default     |\n| ------------------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `disabled`         | `disabled`           | If `true`, the tree item appears in the disabled state.                                                                                 | `boolean`                                                                                                                                                                                             | `false`     |\n| `expanded`         | `expanded`           | If `true`, the tree item appears in the expanded state.                                                                                 | `boolean`                                                                                                                                                                                             | `false`     |\n| `href`             | `href`               | The URL that the tree item link points to. If set, the tree item will render as an "a" tag, otherwise it will render as a div.          | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `hreflang`         | `hreflang`           | The human language of the linked URL.                                                                                                   | `string \\| undefined`                                                                                                                                                                                 | `""`        |\n| `label`            | `label`              | The label of the tree item.                                                                                                             | `string`                                                                                                                                                                                              | `""`        |\n| `referrerpolicy`   | `referrerpolicy`     | How much of the referrer to send when following the link.                                                                               | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url" \\| undefined` | `undefined` |\n| `rel`              | `rel`                | The relationship of the linked URL as space-separated link types.                                                                       | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `selected`         | `selected`           | If `true`, the tree item appears in the selected state.                                                                                 | `boolean`                                                                                                                                                                                             | `false`     |\n| `target`           | `target`             | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                     | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `theme`            | `theme`              | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light" \\| undefined`                                                                                                                                                         | `"inherit"` |\n| `treeItemId`       | `tree-item-id`       | Sets the tree item id. Must be unique.                                                                                                  | `string \\| undefined`                                                                                                                                                                                 | `undefined` |\n| `truncateTreeItem` | `truncate-tree-item` | If `true`, the tree item label will be truncated instead of text wrapping.                                                              | `boolean \\| undefined`                                                                                                                                                                                | `undefined` |\n\n\n## Events\n\n| Event                | Description                         | Type                                                |\n| -------------------- | ----------------------------------- | --------------------------------------------------- |\n| `icTreeItemExpanded` | Emitted when tree item is expanded. | `CustomEvent<{ isExpanded: boolean; id: string; }>` |\n| `icTreeItemSelected` | Emitted when tree item is selected. | `CustomEvent<{ id: string; }>`                      |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the native `input`.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot            | Description                                         |\n| --------------- | --------------------------------------------------- |\n| `"icon"`        | Content is placed to the left of the label.         |\n| `"label"`       | Content is set as the tree item label.              |\n| `"router-item"` | Handle routing by nesting your routes in this slot. |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-typography\n- ic-tooltip\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tree-item --\x3e ic-typography\n  ic-tree-item --\x3e ic-tooltip\n  ic-tooltip --\x3e ic-typography\n  style ic-tree-item fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}},Basic={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view id="basic-tree-view" heading="Menu"> </ic-tree-view>
    </div>
    <script>
      document.querySelector("#basic-tree-view").treeItemData = [
        { label: "Coffee" },
        { label: "Tea" },
        { label: "Hot chocolate" },
      ];
    </script>
  `,name:"Basic"},BasicSlotted={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee"></ic-tree-item>
        <ic-tree-item label="Tea"></ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Basic - slotted"},Nested={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view id="nested-tree-view" heading="Menu"> </ic-tree-view>
    </div>
    <script>
      document.querySelector("#nested-tree-view").treeItemData = [
        {
          label: "Coffee",
          children: [
            { label: "Americano", children: [{ label: "With milk" }] },
            { label: "Latte" },
            { label: "Espresso" },
          ],
        },
        {
          label: "Tea",
          children: [{ label: "Earl grey" }, { label: "Chai" }],
        },
        { label: "Hot chocolate" },
      ];
    </script>
  `,name:"Nested"},NestedSlotted={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee">
          <ic-tree-item label="Americano">
            <ic-tree-item label="With milk"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Latte"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Nested - slotted"},CustomIDs={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view id="nested-tree-view" heading="Menu"> </ic-tree-view>
    </div>
    <script>
      document.querySelector("#nested-tree-view").treeItemData = [
        { label: "Coffee", treeItemId: "coffee-1" },
        { label: "Tea", treeItemId: "tea-1" },
        { label: "Hot chocolate", treeItemId: "hot-chocolate-1" },
      ];
    </script>
  `,name:"Custom IDs with Tree Item Data"},SlottedCustomIds={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee" tree-item-id="coffee-1">
          <ic-tree-item label="Americano">
            <ic-tree-item label="With milk" tree-item-id="with-milk-1"></ic-tree-item>
          </ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea" tree-item-id="tea-1"></ic-tree-view>
    </div>
  `,name:"Custom IDs with Slotted"},WithIcons={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view id="icon-tree-view" heading="Menu">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
      </ic-tree-view>
    </div>
    <script>
      document.querySelector("#icon-tree-view").treeItemData = [
        {
          label: "Coffee",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
          children: [
            { label: "Americano" },
            {
              label: "Latte",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
            },
            { label: "Espresso" },
          ],
        },
        {
          label: "Tea",
          children: [{ label: "Earl grey" }, { label: "Chai" }],
        },
        { label: "Hot chocolate" },
      ];
    </script>
  `,name:"With icons"},WithIconsSlotted={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"With icons - slotted"},Small={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view id="small-tree-view" heading="Menu" size="small">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
      </ic-tree-view>
    </div>
    <script>
      document.querySelector("#small-tree-view").treeItemData = [
        {
          label: "Coffee",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
          children: [
            { label: "Americano" },
            {
              label: "Latte",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
            },
            { label: "Espresso" },
          ],
        },
        {
          label: "Tea",
          children: [{ label: "Earl grey" }, { label: "Chai" }],
        },
        { label: "Hot chocolate" },
      ];
    </script>
  `,name:"Small"},SmallSlotted={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu" size="small">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Small - slotted"},Large={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view id="large-tree-view" heading="Menu" size="large">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
      </ic-tree-view>
    </div>
    <script>
      document.querySelector("#large-tree-view").treeItemData = [
        {
          label: "Coffee",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
          children: [
            { label: "Americano" },
            {
              label: "Latte",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
            },
            { label: "Espresso" },
          ],
        },
        {
          label: "Tea",
          children: [{ label: "Earl grey" }, { label: "Chai" }],
        },
        { label: "Hot chocolate" },
      ];
    </script>
  `,name:"Large"},LargeSlotted={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu" size="large">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Large - slotted"},DisabledTreeItems={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view id="disabled-tree-view" heading="Menu">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
      </ic-tree-view>
    </div>
    <script>
      document.querySelector("#disabled-tree-view").treeItemData = [
        {
          label: "Coffee",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
          children: [
            { label: "Americano" },
            {
              label: "Latte",
              disabled: true,
              icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
            },
            { label: "Espresso" },
          ],
        },
        {
          label: "Tea",
          children: [{ label: "Earl grey" }, { label: "Chai", disabled: true }],
        },
        { label: "Hot chocolate", disabled: true },
      ];
    </script>
  `,name:"Disabled tree items"},DisabledTreeItemsSlotted={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte" disabled="true">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
              />
            </svg>
          </ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai" disabled="true"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Disabled tree items - slotted"},RouterItem={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu" truncate-tree-items="true">
        <ic-tree-item>
          <a slot="router-item" href="/"
            >Hot chocolate with marshmallows and whipped cream</a
          >
        </ic-tree-item>
        <ic-tree-item>
          <a slot="router-item" href="/tea">Tea</a>
        </ic-tree-item>
        <ic-tree-item label="Coffee"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Router item"},SlottedContent={render:()=>lit_html.qy`
      <div style="width:250px">
        <ic-tree-view>
          <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>
          <ic-tree-item>
            <ic-typography slot="label">Coffee<ic-typography>
          </ic-tree-item>
          <ic-tree-item label="Tea"></ic-tree-item>
          <ic-tree-item label="Hot chocolate"></ic-tree-item>
        </ic-tree-view>
      </div>
    `,name:"Slotted content"},MaxContent={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view
        id="max-content-tree-view"
        heading="Menu with nested options"
      >
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
      </ic-tree-view>
    </div>
    <script>
      document.querySelector("#max-content-tree-view").treeItemData = [
        {
          label: "Coffee",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
          children: [
            { label: "Americano" },
            { label: "Latte with extra milk and sugar" },
            { label: "Espresso" },
          ],
        },
        {
          label: "Tea",
          children: [{ label: "Earl grey" }, { label: "Chai" }],
        },
        { label: "Hot chocolate with marshmallows" },
      ];
    </script>
  `,name:"Max content"},MaxContentSlotted={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu with nested options">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Max content - slotted"},TruncationBehaviour={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view
        id="truncated-tree-view"
        heading="Menu with nested options"
        truncate-tree-items="true"
        truncate-heading="true"
      >
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
      </ic-tree-view>
    </div>
    <script>
      document.querySelector("#truncated-tree-view").treeItemData = [
        {
          label: "Coffee",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
          children: [
            { label: "Americano" },
            { label: "Latte with extra milk and sugar" },
            { label: "Espresso" },
          ],
        },
        {
          label: "Tea",
          children: [
            { label: "Earl grey" },
            {
              label: "Earl Grey with truncation false",
              truncateTreeItem: false,
            },
            { label: "Chai" },
          ],
        },
        { label: "Hot chocolate with marshmallows" },
      ];
    </script>
  `,name:"Truncation behaviour"},TruncationBehaviourSlotted={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view
        heading="Menu with nested options"
        truncate-tree-items="true"
        truncate-heading="true"
      >
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
          />
        </svg>
        <ic-tree-item label="Coffee" expanded="true">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
            />
          </svg>
          <ic-tree-item label="Americano"></ic-tree-item>
          <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea" expanded="true">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item
            label="Earl Grey with truncation false"
            truncate-tree-item="false"
          ></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Truncation behaviour - slotted"},SelectedTreeItem={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view id="selected-tree-view" heading="Menu"> </ic-tree-view>
    </div>
    <script>
      document.querySelector("#selected-tree-view").treeItemData = [
        { label: "Coffee" },
        { label: "Tea" },
        { label: "Hot chocolate", selected: true },
      ];
    </script>
  `,name:"Selected tree item"},SelectedTreeItemSlotted={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee"></ic-tree-item>
        <ic-tree-item label="Tea"></ic-tree-item>
        <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Selected tree item - slotted"},Link={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view id="link-tree-view" heading="Menu"> </ic-tree-view>
    </div>
    <script>
      document.querySelector("#link-tree-view").treeItemData = [
        { label: "Coffee", href: "#" },
        { label: "Tea", href: "#", selected: true },
        { label: "Hot chocolate", disabled: true, href: "#" },
      ];
    </script>
  `,name:"Link"},LinkSlotted={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee" href="#"></ic-tree-item>
        <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>
        <ic-tree-item
          label="Hot chocolate"
          disabled="true"
          href="#"
        ></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Link - slotted"},Expanded={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view id="expanded-tree-view" heading="Menu"> </ic-tree-view>
    </div>
    <script>
      document.querySelector("#expanded-tree-view").treeItemData = [
        {
          label: "Coffee",
          expanded: true,
          children: [
            {
              label: "Americano",
              expanded: true,
              children: [{ label: "With milk" }],
            },
            { label: "Latte" },
            { label: "Espresso" },
          ],
        },
        {
          label: "Tea",
          children: [{ label: "Earl grey" }, { label: "Chai" }],
        },
        { label: "Hot chocolate" },
      ];
      const expandElement = document.querySelector("#expanded-tree-view");
      expandElement.addEventListener("icTreeItemExpanded", function (event) {
        console.log("icTreeItemExpanded", event.detail);
      });
    </script>
  `,name:"Expanded"},ExpandedSlotted={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-tree-view heading="Menu" id="expanded-slotted-tree-view">
        <ic-tree-item label="Coffee" expanded="true">
          <ic-tree-item label="Americano" expanded="true">
            <ic-tree-item label="With milk"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Latte"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
      <script>
        const expandElement = document.querySelector(
          "#expanded-slotted-tree-view"
        );
        expandElement.addEventListener("icTreeItemExpanded", function (event) {
          console.log("icTreeItemExpanded - Slotted", event.detail);
        });
      </script>
    </div>
  `,name:"Expanded - slotted"},WithNestedSkipLink={render:()=>lit_html.qy`
    <div style="width:250px">
      <ic-skip-link target="next-content" inline="true"></ic-skip-link>
      <ic-tree-view heading="Menu">
        <ic-tree-item label="Coffee">
          <ic-tree-item label="Americano">
            <ic-tree-item label="With milk"></ic-tree-item>
          </ic-tree-item>
          <ic-tree-item label="Latte"></ic-tree-item>
          <ic-tree-item label="Espresso"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Tea">
          <ic-tree-item label="Earl Grey"></ic-tree-item>
          <ic-tree-item label="Chai"></ic-tree-item>
        </ic-tree-item>
        <ic-tree-item label="Hot chocolate"></ic-tree-item>
      </ic-tree-view>
    </div>
  `,name:"Nested skip link"},__namedExportsOrder=["Basic","BasicSlotted","Nested","NestedSlotted","CustomIDs","SlottedCustomIds","WithIcons","WithIconsSlotted","Small","SmallSlotted","Large","LargeSlotted","DisabledTreeItems","DisabledTreeItemsSlotted","RouterItem","SlottedContent","MaxContent","MaxContentSlotted","TruncationBehaviour","TruncationBehaviourSlotted","SelectedTreeItem","SelectedTreeItemSlotted","Link","LinkSlotted","Expanded","ExpandedSlotted","WithNestedSkipLink"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view id="basic-tree-view" heading="Menu"> </ic-tree-view>\n    </div>\n    <script>\n      document.querySelector("#basic-tree-view").treeItemData = [\n        { label: "Coffee" },\n        { label: "Tea" },\n        { label: "Hot chocolate" },\n      ];\n    <\/script>\n  `,\n  name: "Basic"\n}',...Basic.parameters?.docs?.source},description:{story:"Use the tree view component to display hierarchical data in a tree structure. The tree view component is useful for displaying nested data, such as a file system or a category hierarchy.\n\nClick the 'Component API' tab to view all the available attributes, events and slots for tree view.\n\nTo use the tree view component, import `@ukic/canary-web-components` into your application.",...Basic.parameters?.docs?.description}}},BasicSlotted.parameters={...BasicSlotted.parameters,docs:{...BasicSlotted.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <ic-tree-item label="Coffee"></ic-tree-item>\n        <ic-tree-item label="Tea"></ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Basic - slotted"\n}',...BasicSlotted.parameters?.docs?.source}}},Nested.parameters={...Nested.parameters,docs:{...Nested.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view id="nested-tree-view" heading="Menu"> </ic-tree-view>\n    </div>\n    <script>\n      document.querySelector("#nested-tree-view").treeItemData = [\n        {\n          label: "Coffee",\n          children: [\n            { label: "Americano", children: [{ label: "With milk" }] },\n            { label: "Latte" },\n            { label: "Espresso" },\n          ],\n        },\n        {\n          label: "Tea",\n          children: [{ label: "Earl grey" }, { label: "Chai" }],\n        },\n        { label: "Hot chocolate" },\n      ];\n    <\/script>\n  `,\n  name: "Nested"\n}',...Nested.parameters?.docs?.source}}},NestedSlotted.parameters={...NestedSlotted.parameters,docs:{...NestedSlotted.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <ic-tree-item label="Coffee">\n          <ic-tree-item label="Americano">\n            <ic-tree-item label="With milk"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Latte"></ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Nested - slotted"\n}',...NestedSlotted.parameters?.docs?.source}}},CustomIDs.parameters={...CustomIDs.parameters,docs:{...CustomIDs.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view id="nested-tree-view" heading="Menu"> </ic-tree-view>\n    </div>\n    <script>\n      document.querySelector("#nested-tree-view").treeItemData = [\n        { label: "Coffee", treeItemId: "coffee-1" },\n        { label: "Tea", treeItemId: "tea-1" },\n        { label: "Hot chocolate", treeItemId: "hot-chocolate-1" },\n      ];\n    <\/script>\n  `,\n  name: "Custom IDs with Tree Item Data"\n}',...CustomIDs.parameters?.docs?.source}}},SlottedCustomIds.parameters={...SlottedCustomIds.parameters,docs:{...SlottedCustomIds.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <ic-tree-item label="Coffee" tree-item-id="coffee-1">\n          <ic-tree-item label="Americano">\n            <ic-tree-item label="With milk" tree-item-id="with-milk-1"></ic-tree-item>\n          </ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea" tree-item-id="tea-1"></ic-tree-view>\n    </div>\n  `,\n  name: "Custom IDs with Slotted"\n}',...SlottedCustomIds.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view id="icon-tree-view" heading="Menu">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n      </ic-tree-view>\n    </div>\n    <script>\n      document.querySelector("#icon-tree-view").treeItemData = [\n        {\n          label: "Coffee",\n          icon: \'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>\',\n          children: [\n            { label: "Americano" },\n            {\n              label: "Latte",\n              icon: \'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>\',\n            },\n            { label: "Espresso" },\n          ],\n        },\n        {\n          label: "Tea",\n          children: [{ label: "Earl grey" }, { label: "Chai" }],\n        },\n        { label: "Hot chocolate" },\n      ];\n    <\/script>\n  `,\n  name: "With icons"\n}',...WithIcons.parameters?.docs?.source}}},WithIconsSlotted.parameters={...WithIconsSlotted.parameters,docs:{...WithIconsSlotted.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n          </ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "With icons - slotted"\n}',...WithIconsSlotted.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view id="small-tree-view" heading="Menu" size="small">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n      </ic-tree-view>\n    </div>\n    <script>\n      document.querySelector("#small-tree-view").treeItemData = [\n        {\n          label: "Coffee",\n          icon: \'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>\',\n          children: [\n            { label: "Americano" },\n            {\n              label: "Latte",\n              icon: \'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>\',\n            },\n            { label: "Espresso" },\n          ],\n        },\n        {\n          label: "Tea",\n          children: [{ label: "Earl grey" }, { label: "Chai" }],\n        },\n        { label: "Hot chocolate" },\n      ];\n    <\/script>\n  `,\n  name: "Small"\n}',...Small.parameters?.docs?.source},description:{story:"Small and large styling will be passed down from tree view to tree items and nested tree items.",...Small.parameters?.docs?.description}}},SmallSlotted.parameters={...SmallSlotted.parameters,docs:{...SmallSlotted.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu" size="small">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n          </ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Small - slotted"\n}',...SmallSlotted.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view id="large-tree-view" heading="Menu" size="large">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n      </ic-tree-view>\n    </div>\n    <script>\n      document.querySelector("#large-tree-view").treeItemData = [\n        {\n          label: "Coffee",\n          icon: \'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>\',\n          children: [\n            { label: "Americano" },\n            {\n              label: "Latte",\n              icon: \'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>\',\n            },\n            { label: "Espresso" },\n          ],\n        },\n        {\n          label: "Tea",\n          children: [{ label: "Earl grey" }, { label: "Chai" }],\n        },\n        { label: "Hot chocolate" },\n      ];\n    <\/script>\n  `,\n  name: "Large"\n}',...Large.parameters?.docs?.source}}},LargeSlotted.parameters={...LargeSlotted.parameters,docs:{...LargeSlotted.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu" size="large">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n          </ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Large - slotted"\n}',...LargeSlotted.parameters?.docs?.source}}},DisabledTreeItems.parameters={...DisabledTreeItems.parameters,docs:{...DisabledTreeItems.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view id="disabled-tree-view" heading="Menu">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n      </ic-tree-view>\n    </div>\n    <script>\n      document.querySelector("#disabled-tree-view").treeItemData = [\n        {\n          label: "Coffee",\n          icon: \'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>\',\n          children: [\n            { label: "Americano" },\n            {\n              label: "Latte",\n              disabled: true,\n              icon: \'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>\',\n            },\n            { label: "Espresso" },\n          ],\n        },\n        {\n          label: "Tea",\n          children: [{ label: "Earl grey" }, { label: "Chai", disabled: true }],\n        },\n        { label: "Hot chocolate", disabled: true },\n      ];\n    <\/script>\n  `,\n  name: "Disabled tree items"\n}',...DisabledTreeItems.parameters?.docs?.source},description:{story:"Individual tree-items can be disabled using the `disabled` prop.",...DisabledTreeItems.parameters?.docs?.description}}},DisabledTreeItemsSlotted.parameters={...DisabledTreeItemsSlotted.parameters,docs:{...DisabledTreeItemsSlotted.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte" disabled="true">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n              />\n            </svg>\n          </ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai" disabled="true"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate" disabled="true"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Disabled tree items - slotted"\n}',...DisabledTreeItemsSlotted.parameters?.docs?.source}}},RouterItem.parameters={...RouterItem.parameters,docs:{...RouterItem.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu" truncate-tree-items="true">\n        <ic-tree-item>\n          <a slot="router-item" href="/"\n            >Hot chocolate with marshmallows and whipped cream</a\n          >\n        </ic-tree-item>\n        <ic-tree-item>\n          <a slot="router-item" href="/tea">Tea</a>\n        </ic-tree-item>\n        <ic-tree-item label="Coffee"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Router item"\n}',...RouterItem.parameters?.docs?.source},description:{story:"Custom links and router-items can be passed in using the `router-item` slot.",...RouterItem.parameters?.docs?.description}}},SlottedContent.parameters={...SlottedContent.parameters,docs:{...SlottedContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n      <div style="width:250px">\n        <ic-tree-view>\n          <ic-typography variant="subtitle-large" slot="heading">Menu</ic-typography>\n          <ic-tree-item>\n            <ic-typography slot="label">Coffee<ic-typography>\n          </ic-tree-item>\n          <ic-tree-item label="Tea"></ic-tree-item>\n          <ic-tree-item label="Hot chocolate"></ic-tree-item>\n        </ic-tree-view>\n      </div>\n    `,\n  name: "Slotted content"\n}',...SlottedContent.parameters?.docs?.source},description:{story:"Custom content can be passed to both the tree view (using the `heading` slot) and the tree-item (using the `label` slot).",...SlottedContent.parameters?.docs?.description}}},MaxContent.parameters={...MaxContent.parameters,docs:{...MaxContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view\n        id="max-content-tree-view"\n        heading="Menu with nested options"\n      >\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n      </ic-tree-view>\n    </div>\n    <script>\n      document.querySelector("#max-content-tree-view").treeItemData = [\n        {\n          label: "Coffee",\n          icon: \'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>\',\n          children: [\n            { label: "Americano" },\n            { label: "Latte with extra milk and sugar" },\n            { label: "Espresso" },\n          ],\n        },\n        {\n          label: "Tea",\n          children: [{ label: "Earl grey" }, { label: "Chai" }],\n        },\n        { label: "Hot chocolate with marshmallows" },\n      ];\n    <\/script>\n  `,\n  name: "Max content"\n}',...MaxContent.parameters?.docs?.source},description:{story:"When the heading/label exceeds the width of the container, the text will wrap unless `truncate-tree-item` is set to `true`.",...MaxContent.parameters?.docs?.description}}},MaxContentSlotted.parameters={...MaxContentSlotted.parameters,docs:{...MaxContentSlotted.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu with nested options">\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Max content - slotted"\n}',...MaxContentSlotted.parameters?.docs?.source}}},TruncationBehaviour.parameters={...TruncationBehaviour.parameters,docs:{...TruncationBehaviour.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view\n        id="truncated-tree-view"\n        heading="Menu with nested options"\n        truncate-tree-items="true"\n        truncate-heading="true"\n      >\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n      </ic-tree-view>\n    </div>\n    <script>\n      document.querySelector("#truncated-tree-view").treeItemData = [\n        {\n          label: "Coffee",\n          icon: \'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>\',\n          children: [\n            { label: "Americano" },\n            { label: "Latte with extra milk and sugar" },\n            { label: "Espresso" },\n          ],\n        },\n        {\n          label: "Tea",\n          children: [\n            { label: "Earl grey" },\n            {\n              label: "Earl Grey with truncation false",\n              truncateTreeItem: false,\n            },\n            { label: "Chai" },\n          ],\n        },\n        { label: "Hot chocolate with marshmallows" },\n      ];\n    <\/script>\n  `,\n  name: "Truncation behaviour"\n}',...TruncationBehaviour.parameters?.docs?.source},description:{story:"When `truncate-tree-items` or `truncate-heading` are set to `true`, and the heading/label exceeds the width of the container, they will be truncated with an ellipsis.",...TruncationBehaviour.parameters?.docs?.description}}},TruncationBehaviourSlotted.parameters={...TruncationBehaviourSlotted.parameters,docs:{...TruncationBehaviourSlotted.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view\n        heading="Menu with nested options"\n        truncate-tree-items="true"\n        truncate-heading="true"\n      >\n        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <path\n            d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"\n          />\n        </svg>\n        <ic-tree-item label="Coffee" expanded="true">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"\n            />\n          </svg>\n          <ic-tree-item label="Americano"></ic-tree-item>\n          <ic-tree-item label="Latte with extra milk and sugar"></ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea" expanded="true">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item\n            label="Earl Grey with truncation false"\n            truncate-tree-item="false"\n          ></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate with marshmallows"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Truncation behaviour - slotted"\n}',...TruncationBehaviourSlotted.parameters?.docs?.source}}},SelectedTreeItem.parameters={...SelectedTreeItem.parameters,docs:{...SelectedTreeItem.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view id="selected-tree-view" heading="Menu"> </ic-tree-view>\n    </div>\n    <script>\n      document.querySelector("#selected-tree-view").treeItemData = [\n        { label: "Coffee" },\n        { label: "Tea" },\n        { label: "Hot chocolate", selected: true },\n      ];\n    <\/script>\n  `,\n  name: "Selected tree item"\n}',...SelectedTreeItem.parameters?.docs?.source},description:{story:"Utilising the `selected` attribute on `ic-tree-item` will turn it into a controlled component, displaying the selected state when set to `true`.",...SelectedTreeItem.parameters?.docs?.description}}},SelectedTreeItemSlotted.parameters={...SelectedTreeItemSlotted.parameters,docs:{...SelectedTreeItemSlotted.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <ic-tree-item label="Coffee"></ic-tree-item>\n        <ic-tree-item label="Tea"></ic-tree-item>\n        <ic-tree-item label="Hot chocolate" selected="true"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Selected tree item - slotted"\n}',...SelectedTreeItemSlotted.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view id="link-tree-view" heading="Menu"> </ic-tree-view>\n    </div>\n    <script>\n      document.querySelector("#link-tree-view").treeItemData = [\n        { label: "Coffee", href: "#" },\n        { label: "Tea", href: "#", selected: true },\n        { label: "Hot chocolate", disabled: true, href: "#" },\n      ];\n    <\/script>\n  `,\n  name: "Link"\n}',...Link.parameters?.docs?.source},description:{story:"When setting the `href` attribute, the tree-item will function as a link.",...Link.parameters?.docs?.description}}},LinkSlotted.parameters={...LinkSlotted.parameters,docs:{...LinkSlotted.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu">\n        <ic-tree-item label="Coffee" href="#"></ic-tree-item>\n        <ic-tree-item label="Tea" selected="true" href="#"></ic-tree-item>\n        <ic-tree-item\n          label="Hot chocolate"\n          disabled="true"\n          href="#"\n        ></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Link - slotted"\n}',...LinkSlotted.parameters?.docs?.source}}},Expanded.parameters={...Expanded.parameters,docs:{...Expanded.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view id="expanded-tree-view" heading="Menu"> </ic-tree-view>\n    </div>\n    <script>\n      document.querySelector("#expanded-tree-view").treeItemData = [\n        {\n          label: "Coffee",\n          expanded: true,\n          children: [\n            {\n              label: "Americano",\n              expanded: true,\n              children: [{ label: "With milk" }],\n            },\n            { label: "Latte" },\n            { label: "Espresso" },\n          ],\n        },\n        {\n          label: "Tea",\n          children: [{ label: "Earl grey" }, { label: "Chai" }],\n        },\n        { label: "Hot chocolate" },\n      ];\n      const expandElement = document.querySelector("#expanded-tree-view");\n      expandElement.addEventListener("icTreeItemExpanded", function (event) {\n        console.log("icTreeItemExpanded", event.detail);\n      });\n    <\/script>\n  `,\n  name: "Expanded"\n}',...Expanded.parameters?.docs?.source},description:{story:"An example with the `expanded` prop set to `true` on a parent tree item.",...Expanded.parameters?.docs?.description}}},ExpandedSlotted.parameters={...ExpandedSlotted.parameters,docs:{...ExpandedSlotted.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-tree-view heading="Menu" id="expanded-slotted-tree-view">\n        <ic-tree-item label="Coffee" expanded="true">\n          <ic-tree-item label="Americano" expanded="true">\n            <ic-tree-item label="With milk"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Latte"></ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n      <script>\n        const expandElement = document.querySelector(\n          "#expanded-slotted-tree-view"\n        );\n        expandElement.addEventListener("icTreeItemExpanded", function (event) {\n          console.log("icTreeItemExpanded - Slotted", event.detail);\n        });\n      <\/script>\n    </div>\n  `,\n  name: "Expanded - slotted"\n}',...ExpandedSlotted.parameters?.docs?.source}}},WithNestedSkipLink.parameters={...WithNestedSkipLink.parameters,docs:{...WithNestedSkipLink.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="width:250px">\n      <ic-skip-link target="next-content" inline="true"></ic-skip-link>\n      <ic-tree-view heading="Menu">\n        <ic-tree-item label="Coffee">\n          <ic-tree-item label="Americano">\n            <ic-tree-item label="With milk"></ic-tree-item>\n          </ic-tree-item>\n          <ic-tree-item label="Latte"></ic-tree-item>\n          <ic-tree-item label="Espresso"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Tea">\n          <ic-tree-item label="Earl Grey"></ic-tree-item>\n          <ic-tree-item label="Chai"></ic-tree-item>\n        </ic-tree-item>\n        <ic-tree-item label="Hot chocolate"></ic-tree-item>\n      </ic-tree-view>\n    </div>\n  `,\n  name: "Nested skip link"\n}',...WithNestedSkipLink.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-ic-tree-view-ic-tree-view-stories.f5a13406.iframe.bundle.js.map