/*! For license information please see components-ic-table-of-contents-ic-table-of-contents-stories.3763d36d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[5917],{"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=(y(2),y(3),Symbol.for("lit-noChange")),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r.createTreeWalker(r,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=C.nextNode(),o++)}return C.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class I extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const j=t.litHtmlPolyfillSupport;j?.(N,R),(t.litHtmlVersions??=[]).push("3.2.1")},"./src/components/ic-table-of-contents/ic-table-of-contents.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComplexPageHeadings:()=>ComplexPageHeadings,DarkTheme:()=>DarkTheme,Default:()=>Default,DefaultTop:()=>DefaultTop,Nested:()=>Nested,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_table_of_contents_stories,monochrome:()=>monochrome});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const ic_table_of_contents_stories={title:"Web Components/Table of Contents",component:"Table of Contents",parameters:{componentAPI:{data:'# ic-table-of-contents\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property              | Attribute               | Description                                                                                                                                                  | Type                                          | Default      |\n| --------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- | ------------ |\n| `heading`             | `heading`               | Heading text of the table of contents.                                                                                                                       | `string`                                      | `"Contents"` |\n| `maximumHeadingLevel` | `maximum-heading-level` | Maximum heading level of child content that will generate an item in the table of contents. E.g. when set to \'3\', headings of <h4> and <h5> will not appear. | `number`                                      | `3`          |\n| `monochrome`          | `monochrome`            | If `true`, the table of contents will display as black in the light theme, and white in dark theme.                                                          | `boolean \\| undefined`                        | `false`      |\n| `position`            | `position`              | Whether the table of contents will appear on the right of or above child content on large viewport widths.                                                   | `"right" \\| "top"`                            | `"right"`    |\n| `setScrollHeight`     | `set-scroll-height`     | Vertical offset to page scroll (in percent) when table of contents item is selected, to account for other page components like headers.                      | `number`                                      | `50`         |\n| `size`                | `size`                  | The size of the table of contents items.                                                                                                                     | `"large" \\| "medium" \\| "small"`              | `"medium"`   |\n| `theme`               | `theme`                 | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                      | `"dark" \\| "inherit" \\| "light" \\| undefined` | `"inherit"`  |\n| `truncate`            | `truncate`              | If `true`, the table of contents item label will be truncated.                                                                                               | `boolean`                                     | `true`       |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-tooltip\n- ic-section-container\n- ic-typography\n\n### Graph\n```mermaid\ngraph TD;\n  ic-table-of-contents --\x3e ic-tooltip\n  ic-table-of-contents --\x3e ic-section-container\n  ic-table-of-contents --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-table-of-contents fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}},Default={render:()=>lit_html.qy`
    <div>
      <ic-top-navigation app-title="ICDS" status="Coffee">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
        <ic-navigation-item
          slot="navigation"
          label="Latte recipe"
          href="#"
        ></ic-navigation-item>
      </ic-top-navigation>

      <div style="display:flex; flex-direction:column; height:100%;">
        <ic-page-header
          heading="Latte recipe"
          subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
          reverse-order="true"
          sticky="true"
        ></ic-page-header>
        <ic-table-of-contents position="right" set-scroll-height="100">
          <div id="content" style="width:100%;">
            <div style="height:100vh; background:gray">
              <h2>What is a Latte</h2>
              <p>Lorum ipsum etcetera</p>
            </div>
            <div style="height:100vh; background:darkgray">
              <h2>Choosing the right milk</h2>
              <p>
                There is an interactive element here to test focus shifting with
              </p>
              <ic-button>Test Button</ic-button>
            </div>
            <div style="height:100vh; background:gray">
              <h3>How to correctly steam milk</h3>
            </div>
            <div style="height:100vh; background:lightgray">
              <h2>Coffee art</h2>
              <p>Another interactive element shows up.</p>
              <ic-button>Second Button</ic-button>
            </div>
            <div style="height:100vh; background:lightgray">
              <h2>Putting it all together</h2>
            </div>
          </div>
        </ic-table-of-contents>
      </div>
    </div>
  `,name:"Default"},Nested={render:()=>lit_html.qy`
    <div>
      <ic-table-of-contents position="right" maximum-heading-level="5">
        <div id="content" style="width:100%;">
          <div style="height:50vh; background:gray">
            <ic-typography variant="h2" color="primary">
              <h2>A Latte</h2>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray">
            <ic-typography variant="h3" color="primary">
              <h3>The Espresso</h3>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray">
            <ic-typography variant="h3" color="primary">
              <h4>Flat White</h4>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray">
            <ic-typography variant="h3" color="primary">
              <h5>Latte</h5>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray">
            <ic-typography variant="h3" color="primary">
              <h5>Faux Latte</h5>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray">
            <ic-typography variant="h3" color="primary">
              <h3>The Big One</h3>
            </ic-typography>
          </div>
        </div>
      </ic-table-of-contents>
    </div>
  `,name:"Nested Table of Contents"},monochrome={render:()=>lit_html.qy`
    <div>
      <ic-table-of-contents monochrome>
        <div style="width:fit-content; display:flex; flex-direction:column;">
          <div
            style="height:100vh; max-width:1200px; min-width:600px; background:gray"
          >
            <h2>Latte</h2>
          </div>
          <div style="height:100vh; background:darkgray">
            <h2>Americano</h2>
          </div>
        </div>
      </ic-table-of-contents>
    </div>
  `,name:"Monochrome"},DefaultTop={render:()=>lit_html.qy`
    <ic-table-of-contents position="top">
      <div id="content" style="width:100%;">
        <div style="height:100vh; background:gray">
          <h2>How to make coffee</h2>
        </div>
        <div style="height:100vh; background:darkgray">
          <h3>Why you make coffee</h3>
        </div>
        <div style="height:100vh; background:lightgray">
          <h2>The dark truth of coffee</h2>
        </div>
      </div>
    </ic-table-of-contents>
  `,name:"Default Top"},ComplexPageHeadings={render:()=>lit_html.qy`
    <ic-table-of-contents>
      <div id="content" style="width:100%;">
        <div style="height:100vh; background:gray">
          <ic-typography variant="h2">
            <h3>How to make coffee</h3>
          </ic-typography>
          <p>This heading is inside an Ic-Typography element</p>
        </div>
        <div style="height:100vh; background:darkgray">
          <ic-typography variant="h2">
            <h3>
              Why you might make coffee
              <ic-link href="www.example.com">More info</ic-link>
            </h3>
          </ic-typography>
          <p>
            This heading has a link element nested inside it. The table of
            contents will only scrape the start of the textContent of the
            heading element and will exclude the link text.
          </p>
        </div>
        <div style="height:100vh;">
          <h2 id="coffee-dark">The dark truth of coffee</h2>
          <p>
            This heading is level 2, after the others being level 3 - which
            means the page has an incorrect heading hierarchy. This is bad
            practice but Table of Contents still renders.
          </p>
        </div>
      </div>
    </ic-table-of-contents>
  `,name:"Complex Page Headings"},DarkTheme={render:()=>lit_html.qy`
    <ic-theme theme="dark">
      <div
        style="position:fixed; height:100vh; width:100vw; background-color:#17191C; z-index:-1; top:0; left:0;"
      ></div>
      <ic-table-of-contents>
        <div id="content" style="width:100%;">
          <div id="red" style="height:100vh">
            <h2>Test something</h2>
          </div>
          <div id="blue" style="height:100vh">
            <h2>another test with long label that should truncate</h2>
            <div style="height:500px;"></div>
            <div><h3>another heading sub</h3></div>
          </div>
          <div id="green" style="height:100vh">
            <h2>test</h2>
          </div>
        </div>
      </ic-table-of-contents>
    </ic-theme>
  `,name:"Dark theme"},Playground={render:args=>lit_html.qy`
    <div style="display:flex; flex-direction:column; height:100%;">
      <ic-table-of-contents
        monochrome=${args.monochrome}
        theme=${args.theme}
        truncate=${args.truncate}
        size=${args.size}
        position=${args.position}
        heading=${args.heading}
        set-scroll-height=${args.setScrollHeight}
        maximum-heading-level=${args.maximumHeadingLevel}
      >
        <div id="content" style="width:100%">
          <div style="height:50vh; background:gray;">
            <ic-typography variant="h2" color="primary">
              <h2>
                H2: A Latte and a really long heading label that should truncate
              </h2>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray;">
            <ic-typography variant="h3" color="primary">
              <h3>H3: The Espresso</h3>
            </ic-typography>
          </div>
          <div style="height:50vh; background:gray;">
            <ic-typography variant="h3" color="primary">
              <h4>H4: Flat White</h4>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray;">
            <ic-typography variant="h3" color="primary">
              <h5>H5: Latte</h5>
            </ic-typography>
          </div>
          <div style="height:50vh; background:gray;">
            <ic-typography variant="h2" color="primary">
              <h2>H2: Other drinks</h2>
            </ic-typography>
          </div>
          <div style="height:50vh; background:darkgray;">
            <ic-typography variant="h3" color="primary">
              <h3>H3: Just Tea</h3>
            </ic-typography>
          </div>
        </div>
      </ic-table-of-contents>
    </div>
  `,args:{monochrome:!1,theme:"inherit",truncate:!0,size:"medium",position:"right",heading:"Contents",setScrollHeight:50,maximumHeadingLevel:3},argTypes:{size:{options:["medium","large"],control:{type:"inline-radio"}},position:{options:["right","top"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","Nested","monochrome","DefaultTop","ComplexPageHeadings","DarkTheme","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div>\n      <ic-top-navigation app-title="ICDS" status="Coffee">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24"\n          viewBox="0 0 24 24"\n          width="24"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-navigation-item\n          slot="navigation"\n          label="Latte recipe"\n          href="#"\n        ></ic-navigation-item>\n      </ic-top-navigation>\n\n      <div style="display:flex; flex-direction:column; height:100%;">\n        <ic-page-header\n          heading="Latte recipe"\n          subheading="A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."\n          reverse-order="true"\n          sticky="true"\n        ></ic-page-header>\n        <ic-table-of-contents position="right" set-scroll-height="100">\n          <div id="content" style="width:100%;">\n            <div style="height:100vh; background:gray">\n              <h2>What is a Latte</h2>\n              <p>Lorum ipsum etcetera</p>\n            </div>\n            <div style="height:100vh; background:darkgray">\n              <h2>Choosing the right milk</h2>\n              <p>\n                There is an interactive element here to test focus shifting with\n              </p>\n              <ic-button>Test Button</ic-button>\n            </div>\n            <div style="height:100vh; background:gray">\n              <h3>How to correctly steam milk</h3>\n            </div>\n            <div style="height:100vh; background:lightgray">\n              <h2>Coffee art</h2>\n              <p>Another interactive element shows up.</p>\n              <ic-button>Second Button</ic-button>\n            </div>\n            <div style="height:100vh; background:lightgray">\n              <h2>Putting it all together</h2>\n            </div>\n          </div>\n        </ic-table-of-contents>\n      </div>\n    </div>\n  `,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Nested.parameters={...Nested.parameters,docs:{...Nested.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div>\n      <ic-table-of-contents position="right" maximum-heading-level="5">\n        <div id="content" style="width:100%;">\n          <div style="height:50vh; background:gray">\n            <ic-typography variant="h2" color="primary">\n              <h2>A Latte</h2>\n            </ic-typography>\n          </div>\n          <div style="height:50vh; background:darkgray">\n            <ic-typography variant="h3" color="primary">\n              <h3>The Espresso</h3>\n            </ic-typography>\n          </div>\n          <div style="height:50vh; background:darkgray">\n            <ic-typography variant="h3" color="primary">\n              <h4>Flat White</h4>\n            </ic-typography>\n          </div>\n          <div style="height:50vh; background:darkgray">\n            <ic-typography variant="h3" color="primary">\n              <h5>Latte</h5>\n            </ic-typography>\n          </div>\n          <div style="height:50vh; background:darkgray">\n            <ic-typography variant="h3" color="primary">\n              <h5>Faux Latte</h5>\n            </ic-typography>\n          </div>\n          <div style="height:50vh; background:darkgray">\n            <ic-typography variant="h3" color="primary">\n              <h3>The Big One</h3>\n            </ic-typography>\n          </div>\n        </div>\n      </ic-table-of-contents>\n    </div>\n  `,\n  name: "Nested Table of Contents"\n}',...Nested.parameters?.docs?.source}}},monochrome.parameters={...monochrome.parameters,docs:{...monochrome.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div>\n      <ic-table-of-contents monochrome>\n        <div style="width:fit-content; display:flex; flex-direction:column;">\n          <div\n            style="height:100vh; max-width:1200px; min-width:600px; background:gray"\n          >\n            <h2>Latte</h2>\n          </div>\n          <div style="height:100vh; background:darkgray">\n            <h2>Americano</h2>\n          </div>\n        </div>\n      </ic-table-of-contents>\n    </div>\n  `,\n  name: "Monochrome"\n}',...monochrome.parameters?.docs?.source}}},DefaultTop.parameters={...DefaultTop.parameters,docs:{...DefaultTop.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-table-of-contents position="top">\n      <div id="content" style="width:100%;">\n        <div style="height:100vh; background:gray">\n          <h2>How to make coffee</h2>\n        </div>\n        <div style="height:100vh; background:darkgray">\n          <h3>Why you make coffee</h3>\n        </div>\n        <div style="height:100vh; background:lightgray">\n          <h2>The dark truth of coffee</h2>\n        </div>\n      </div>\n    </ic-table-of-contents>\n  `,\n  name: "Default Top"\n}',...DefaultTop.parameters?.docs?.source}}},ComplexPageHeadings.parameters={...ComplexPageHeadings.parameters,docs:{...ComplexPageHeadings.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-table-of-contents>\n      <div id="content" style="width:100%;">\n        <div style="height:100vh; background:gray">\n          <ic-typography variant="h2">\n            <h3>How to make coffee</h3>\n          </ic-typography>\n          <p>This heading is inside an Ic-Typography element</p>\n        </div>\n        <div style="height:100vh; background:darkgray">\n          <ic-typography variant="h2">\n            <h3>\n              Why you might make coffee\n              <ic-link href="www.example.com">More info</ic-link>\n            </h3>\n          </ic-typography>\n          <p>\n            This heading has a link element nested inside it. The table of\n            contents will only scrape the start of the textContent of the\n            heading element and will exclude the link text.\n          </p>\n        </div>\n        <div style="height:100vh;">\n          <h2 id="coffee-dark">The dark truth of coffee</h2>\n          <p>\n            This heading is level 2, after the others being level 3 - which\n            means the page has an incorrect heading hierarchy. This is bad\n            practice but Table of Contents still renders.\n          </p>\n        </div>\n      </div>\n    </ic-table-of-contents>\n  `,\n  name: "Complex Page Headings"\n}',...ComplexPageHeadings.parameters?.docs?.source}}},DarkTheme.parameters={...DarkTheme.parameters,docs:{...DarkTheme.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-theme theme="dark">\n      <div\n        style="position:fixed; height:100vh; width:100vw; background-color:#17191C; z-index:-1; top:0; left:0;"\n      ></div>\n      <ic-table-of-contents>\n        <div id="content" style="width:100%;">\n          <div id="red" style="height:100vh">\n            <h2>Test something</h2>\n          </div>\n          <div id="blue" style="height:100vh">\n            <h2>another test with long label that should truncate</h2>\n            <div style="height:500px;"></div>\n            <div><h3>another heading sub</h3></div>\n          </div>\n          <div id="green" style="height:100vh">\n            <h2>test</h2>\n          </div>\n        </div>\n      </ic-table-of-contents>\n    </ic-theme>\n  `,\n  name: "Dark theme"\n}',...DarkTheme.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <div style="display:flex; flex-direction:column; height:100%;">\n      <ic-table-of-contents\n        monochrome=${args.monochrome}\n        theme=${args.theme}\n        truncate=${args.truncate}\n        size=${args.size}\n        position=${args.position}\n        heading=${args.heading}\n        set-scroll-height=${args.setScrollHeight}\n        maximum-heading-level=${args.maximumHeadingLevel}\n      >\n        <div id="content" style="width:100%">\n          <div style="height:50vh; background:gray;">\n            <ic-typography variant="h2" color="primary">\n              <h2>\n                H2: A Latte and a really long heading label that should truncate\n              </h2>\n            </ic-typography>\n          </div>\n          <div style="height:50vh; background:darkgray;">\n            <ic-typography variant="h3" color="primary">\n              <h3>H3: The Espresso</h3>\n            </ic-typography>\n          </div>\n          <div style="height:50vh; background:gray;">\n            <ic-typography variant="h3" color="primary">\n              <h4>H4: Flat White</h4>\n            </ic-typography>\n          </div>\n          <div style="height:50vh; background:darkgray;">\n            <ic-typography variant="h3" color="primary">\n              <h5>H5: Latte</h5>\n            </ic-typography>\n          </div>\n          <div style="height:50vh; background:gray;">\n            <ic-typography variant="h2" color="primary">\n              <h2>H2: Other drinks</h2>\n            </ic-typography>\n          </div>\n          <div style="height:50vh; background:darkgray;">\n            <ic-typography variant="h3" color="primary">\n              <h3>H3: Just Tea</h3>\n            </ic-typography>\n          </div>\n        </div>\n      </ic-table-of-contents>\n    </div>\n  `,\n  args: defaultArgs,\n  argTypes: {\n    size: {\n      options: ["medium", "large"],\n      control: {\n        type: INLINE_RADIO\n      }\n    },\n    position: {\n      options: ["right", "top"],\n      control: {\n        type: INLINE_RADIO\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: INLINE_RADIO\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-ic-table-of-contents-ic-table-of-contents-stories.3763d36d.iframe.bundle.js.map