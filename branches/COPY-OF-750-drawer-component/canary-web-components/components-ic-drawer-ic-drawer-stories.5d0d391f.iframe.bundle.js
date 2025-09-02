/*! For license information please see components-ic-drawer-ic-drawer-stories.5d0d391f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[6355],{"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=(y(2),y(3),Symbol.for("lit-noChange")),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r.createTreeWalker(r,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=C.nextNode(),o++)}return C.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class I extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const j=t.litHtmlPolyfillSupport;j?.(N,R),(t.litHtmlVersions??=[]).push("3.2.1")},"./src/components/ic-drawer/ic-drawer.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomPosition:()=>BottomPosition,DarkTheme:()=>DarkTheme,LeftPosition:()=>LeftPosition,ManualTrigger:()=>ManualTrigger,Playground:()=>Playground,RightPosition:()=>RightPosition,SlottedContent:()=>SlottedContent,TopPosition:()=>TopPosition,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_drawer_stories});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const ic_drawer_stories={title:"Web Components/Drawer",component:"ic-drawer",parameters:{componentAPI:{data:'# ic-drawer\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                 | Attribute                   | Description                                                                                                                                                                                         | Type                                          | Default          |\n| ------------------------ | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------- |\n| `ariaLabel`              | `aria-label`                | The aria label applied to the drawer. This is required when the heading slot is used.                                                                                                               | `string`                                      | `""`             |\n| `chevronButtonAriaLabel` | `chevron-button-aria-label` | The aria label of the chevron button when trigger is set to "arrow". The default aria label is "Open drawer" / "Close drawer".                                                                      | `string \\| undefined`                         | `""`             |\n| `closeButtonAriaLabel`   | `close-button-aria-label`   | The aria label of the close button when the show-close-button attribute (web-components) / showCloseButton prop (React) is set to `true`. The default aria label is "Open drawer" / "Close drawer". | `string`                                      | `"Close drawer"` |\n| `closeOnBackdropClick`   | `close-on-backdrop-click`   | If set to `false`, the drawer will not close when the backdrop is clicked.                                                                                                                          | `boolean \\| undefined`                        | `true`           |\n| `expanded`               | `expanded`                  | If set to `true`, the drawer will display in an expanded state.                                                                                                                                     | `boolean`                                     | `false`          |\n| `heading`                | `heading`                   | The heading to render in the drawer.                                                                                                                                                                | `string \\| undefined`                         | `undefined`      |\n| `message`                | `message`                   | The main body text in the drawer.                                                                                                                                                                   | `string \\| undefined`                         | `undefined`      |\n| `position`               | `position`                  | The position of the drawer.                                                                                                                                                                         | `"bottom" \\| "left" \\| "right" \\| "top"`      | `"right"`        |\n| `showCloseButton`        | `show-close-button`         | If set to `true`, an X (close) button will be displayed in the drawer.                                                                                                                              | `boolean`                                     | `false`          |\n| `size`                   | `size`                      | The size of the expanded drawer.                                                                                                                                                                    | `"large" \\| "medium" \\| "small" \\| undefined` | `"medium"`       |\n| `theme`                  | `theme`                     | Sets the drawer to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.                                                                 | `"dark" \\| "inherit" \\| "light" \\| undefined` | `"inherit"`      |\n| `trigger`                | `trigger`                   | The method in which the drawer is expanded.                                                                                                                                                         | `"arrow" \\| "controlled"`                     | `"arrow"`        |\n| `variant`                | `variant`                   | The variant of the drawer. TODO - figure out how this works                                                                                                                                         | `"persistent" \\| "temporary"`                 | `"temporary"`    |\n\n\n## Events\n\n| Event              | Description                                        | Type                                  |\n| ------------------ | -------------------------------------------------- | ------------------------------------- |\n| `icDrawerExpanded` | Emitted when the drawer is collapsed and expanded. | `CustomEvent<IcDrawerExpandedDetail>` |\n\n\n## Slots\n\n| Slot                  | Description                                                              |\n| --------------------- | ------------------------------------------------------------------------ |\n| `"actions"`           | Content will be rendered in the action area, adjacent to the title area. |\n| `"heading"`           | Content will be rendered in the title area, in place of the heading.     |\n| `"heading-adornment"` | Content will be rendered in the title area, to the left of the heading.  |\n| `"message"`           | Content will be rendered below the title area, in place of the message.  |\n\n\n## CSS Custom Properties\n\n| Name                  | Description                                     |\n| --------------------- | ----------------------------------------------- |\n| `--ic-drawer-height`  | the width of the expanded top or bottom drawer. |\n| `--ic-drawer-width`   | the width of the expanded left or right drawer. |\n| `--ic-z-index-drawer` | z-index of drawer.                              |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-button\n- ic-section-container\n- ic-typography\n\n### Graph\n```mermaid\ngraph TD;\n  ic-drawer --\x3e ic-button\n  ic-drawer --\x3e ic-section-container\n  ic-drawer --\x3e ic-typography\n  ic-button --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-drawer fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'},layout:"fullscreen"}},RightPosition={render:()=>lit_html.qy` <ic-drawer
    heading="Menu"
    message="Lorem ipsum odor amet, consectetuer adipiscing elit. Netus condimentum posuere velit egestas senectus viverra. Nascetur diam curabitur semper sodales sapien sit mi. Ultrices potenti eget netus et cras quis; convallis phasellus. Posuere magnis sapien ipsum risus maecenas molestie dictum. Penatibus quis platea vel ipsum habitasse inceptos. Litora leo efficitur duis sociosqu litora ex. Tellus interdum neque sapien finibus felis iaculis euismod. Hendrerit dignissim diam adipiscing nam rutrum nascetur amet.

Placerat blandit nullam netus mattis vulputate torquent. Adipiscing augue sociosqu nibh parturient conubia cras ridiculus. Quis mi posuere laoreet montes sapien turpis fermentum lobortis. Adipiscing cubilia varius dictum suscipit lobortis. Metus tincidunt quis orci suspendisse scelerisque magna turpis. Pellentesque finibus dis pretium; nisl tincidunt ante et. Nibh curae turpis; duis torquent ornare ante morbi magna gravida? Ut est primis purus tincidunt cubilia interdum; natoque adipiscing. Semper adipiscing cubilia donec velit donec phasellus phasellus vivamus.

Vehicula ligula felis libero dui eu pharetra erat aptent sociosqu. Fermentum taciti sed ultrices nisl leo. Mus praesent luctus auctor tristique orci neque rutrum massa volutpat. Ullamcorper fames dignissim aliquet proin sapien feugiat? Vitae facilisis lacinia lacus ut phasellus class netus. Per blandit rhoncus fermentum turpis bibendum class nullam id. Ultricies imperdiet sem est pretium ante fermentum conubia maximus. Per inceptos pretium aliquet mus laoreet blandit ultrices nisl. Odio suspendisse hendrerit luctus lorem dictum lacus phasellus mattis. Lobortis eleifend blandit augue fusce ullamcorper ultricies himenaeos.

Vivamus varius vivamus montes morbi enim montes natoque litora. Habitasse porta tincidunt senectus nibh sollicitudin pretium rhoncus quis. Ipsum taciti bibendum natoque tristique vulputate litora. Arcu lectus dignissim risus sed litora; nulla sem iaculis. Vel habitant blandit quis ultricies varius sem nibh ut maximus. Gravida libero donec rutrum neque erat aliquam lacus condimentum laoreet. Porta mi amet penatibus at tempus himenaeos. Tristique himenaeos pulvinar lacus accumsan iaculis facilisis. Hac orci fames quis maximus quis dignissim hendrerit id.

Cubilia ipsum scelerisque lacus; mauris efficitur porta ridiculus suscipit? Pharetra nascetur ultrices maximus cursus imperdiet eleifend. Elit sodales tincidunt nisi ligula ac. Tellus lacus convallis viverra ornare nec eleifend maximus inceptos. Non nullam porttitor non sed nulla dolor. Ex ridiculus mattis lacus lobortis fusce? Curae facilisis interdum curae vehicula facilisi ligula. Efficitur sollicitudin tempus viverra porta habitant. Ac ad lorem lobortis erat est sed. Efficitur pellentesque mi ex magna vehicula at."
  ></ic-drawer>`,name:"Right position"},LeftPosition={render:()=>lit_html.qy`<ic-drawer heading="Menu" message="test" position="left"></ic-drawer>`,name:"Left position"},TopPosition={render:()=>lit_html.qy`<ic-drawer heading="Menu" message="test" position="top"></ic-drawer>`,name:"Top position"},BottomPosition={render:()=>lit_html.qy`<ic-drawer
      heading="Menu"
      message="test"
      position="bottom"
    ></ic-drawer>`,name:"Bottom position"},DarkTheme={render:()=>lit_html.qy`<ic-theme theme="dark"
    <div>
      <div style="display: flex; flex-direction: column; min-height: 100vh;">
        <ic-top-navigation
          app-title="Déja-brew"
          status="alpha"
          version="v0.0.7"
          content-aligned="center"
        >
          <svg
            slot="app-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
            />
          </svg>
          <ic-search-bar
            slot="search"
            placeholder="Search"
            label="Search"
          ></ic-search-bar>
          <ic-navigation-button
            label="button1"
            slot="buttons"
            onclick="alert('test')"
          >
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
              />
            </svg>
          </ic-navigation-button>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-group
            slot="navigation"
            label="Navigation group"
            expandable="true"
          >
            <ic-navigation-item label="Navigation" href="/"></ic-navigation-item>
            <ic-navigation-item label="Navigation" href="/"></ic-navigation-item>
          </ic-navigation-group>
        </ic-top-navigation>
        <main style="height: 100vh; background-color: var(--ic-color-background-primary-dark)">
          <ic-section-container aligned="center">
            <ic-typography
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum
              molestie enim at sollicitudin pellentesque. Proin sit amet augue sit
              amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse
              mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique
              odio finibus a. In rutrum convallis purus, vitae tristique tortor
              sagittis vel. Donec dictum nunc a elit tristique, et facilisis est
              condimentum. Pellentesque maximus nulla libero, nec auctor urna
              consequat nec. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. In maximus velit a erat
              volutpat, sit amet consequat velit rhoncus. Mauris pretium neque
              eget ante consectetur consectetur. Morbi a consequat lectus. Donec
              venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id
              pretium id, efficitur nec leo.</ic-typography
            >
          </ic-section-container>
        </main>
      </div>
      <ic-drawer
        theme="dark"
        heading="Roasted coffee"
        message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
        position="right"
      >
        <svg
          style="width: var(--ic-space-lg); height: var(--ic-space-lg);"
          slot="heading-adornment"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
          />
        </svg>
        <ic-button slot="actions">Add to order</ic-button>
      </ic-drawer>
      <ic-footer
        aligned="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
            please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      ></ic-footer>
    </div>
  </ic-theme>`,name:"Dark theme"},SlottedContent={render:()=>lit_html.qy`<div>
    <div style="display: flex; flex-direction: column; min-height: 100vh;">
      <ic-top-navigation
        app-title="Déja-brew"
        status="alpha"
        version="v0.0.7"
        content-aligned="center"
      >
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
        <ic-search-bar
          slot="search"
          placeholder="Search"
          label="Search"
        ></ic-search-bar>
        <ic-navigation-button
          label="button1"
          slot="buttons"
          onclick="alert('test')"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
            />
          </svg>
        </ic-navigation-button>
        <ic-navigation-item
          slot="navigation"
          label="Navigation"
          href="/"
        ></ic-navigation-item>
        <ic-navigation-group
          slot="navigation"
          label="Navigation group"
          expandable="true"
        >
          <ic-navigation-item label="Navigation" href="/"></ic-navigation-item>
          <ic-navigation-item label="Navigation" href="/"></ic-navigation-item>
        </ic-navigation-group>
      </ic-top-navigation>
      <main style="height: 100%">
        <ic-section-container aligned="center">
          <ic-typography
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum
            molestie enim at sollicitudin pellentesque. Proin sit amet augue sit
            amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse
            mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique
            odio finibus a. In rutrum convallis purus, vitae tristique tortor
            sagittis vel. Donec dictum nunc a elit tristique, et facilisis est
            condimentum. Pellentesque maximus nulla libero, nec auctor urna
            consequat nec. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. In maximus velit a erat
            volutpat, sit amet consequat velit rhoncus. Mauris pretium neque
            eget ante consectetur consectetur. Morbi a consequat lectus. Donec
            venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id
            pretium id, efficitur nec leo.</ic-typography
          >
        </ic-section-container>
      </main>
    </div>
    <ic-drawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="right"
    >
      <svg
        style="width: var(--ic-space-lg); height: var(--ic-space-lg);"
        slot="heading-adornment"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
        />
      </svg>
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>
    <ic-footer
      aligned="full-width"
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    ></ic-footer>
  </div>`,name:"Slotted content"},ManualTrigger={render:()=>lit_html.qy`<div>
      <div style="display: flex; flex-direction: column; min-height: 100vh;">
        <ic-top-navigation
          app-title="Déja-brew"
          status="alpha"
          version="v0.0.7"
          content-aligned="center"
        >
          <svg
            slot="app-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
            />
          </svg>
          <ic-search-bar
            slot="search"
            placeholder="Search"
            label="Search"
          ></ic-search-bar>
          <ic-navigation-button
            label="button1"
            slot="buttons"
            onclick="alert('test')"
          >
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
              />
            </svg>
          </ic-navigation-button>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-group
            slot="navigation"
            label="Navigation group"
            expandable="true"
          >
            <ic-navigation-item
              label="Navigation"
              href="/"
            ></ic-navigation-item>
            <ic-navigation-item
              label="Navigation"
              href="/"
            ></ic-navigation-item>
          </ic-navigation-group>
        </ic-top-navigation>
        <main style="height: 100%">
          <ic-section-container aligned="center">
            <ic-button id="button-1" onclick="expandDrawer()"
              >Open drawer</ic-button
            >
            <ic-drawer
              id="drawer-1"
              show-close-button="true"
              trigger="controlled"
              heading="Roasted coffee"
              message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
            >
              <ic-button variant="secondary" slot="actions"
                >Secondary action</ic-button
              >
              <ic-button slot="actions">Primary action</ic-button>
            </ic-drawer>
            <ic-typography
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus
              ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin
              sit amet augue sit amet dui suscipit lobortis. Nullam at
              consectetur ante. Suspendisse mollis ultricies porttitor. Nunc
              laoreet leo tortor, ut tristique odio finibus a. In rutrum
              convallis purus, vitae tristique tortor sagittis vel. Donec dictum
              nunc a elit tristique, et facilisis est condimentum. Pellentesque
              maximus nulla libero, nec auctor urna consequat nec. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. In maximus velit a erat volutpat, sit amet
              consequat velit rhoncus. Mauris pretium neque eget ante
              consectetur consectetur. Morbi a consequat lectus. Donec venenatis
              ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium
              id, efficitur nec leo.</ic-typography
            >
          </ic-section-container>
        </main>
      </div>
      <ic-footer
        aligned="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
    please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      ></ic-footer>
    </div>
    <script>
      let icDrawer = document.querySelector("ic-drawer#drawer-1");
      function expandDrawer() {
        icDrawer.expanded = !icDrawer.expanded;
      }
    </script>`,name:"Manual trigger"},Playground={render:args=>lit_html.qy`<div style="display:flex;">
      <ic-side-navigation app-title="Déja-brew" version="v0.0.7" status="BETA">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
        <ic-navigation-item slot="primary-navigation" href="/" label="Home">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            />
          </svg>
        </ic-navigation-item>
        <ic-navigation-item
          slot="primary-navigation"
          href="/"
          label="Search"
          selected="true"
        >
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            />
          </svg>
        </ic-navigation-item>
        <ic-divider slot="primary-navigation"></ic-divider>
        <ic-navigation-item slot="primary-navigation" href="/" label="Trends">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            />
          </svg>
        </ic-navigation-item>
        <ic-navigation-group
          slot="primary-navigation"
          label="Second navigation group"
          expandable="true"
        >
          <ic-navigation-item label="Different navigation" href="/">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
          <ic-navigation-item label="Navigation" href="/">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"
                fill="currentColor"
              />
            </svg>
          </ic-navigation-item>
        </ic-navigation-group>
        <ic-navigation-item
          slot="primary-navigation"
          href="/"
          label="This is a very very very long label for the navigation item"
        >
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            />
          </svg>
        </ic-navigation-item>
        <ic-navigation-item
          slot="secondary-navigation"
          href="/"
          label="Settings"
        >
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            />
          </svg>
        </ic-navigation-item>
      </ic-side-navigation>
      <div
        class="content-wrapper"
        style="display:flex; flex-direction: column; flex-grow: 1;"
      >
        <main id="main">
          <ic-page-header
            heading="Page header"
            subheading="This is a page header component with additional functionality and this is the text."
            aligned="full-width"
            sticky
          >
            <ic-status-tag
              slot="heading-adornment"
              label="Beta"
            ></ic-status-tag>
            <ic-search-bar
              hide-label="true"
              id="page-header-search-bar"
              characters-until-suggestion="1"
              slot="input"
              label="What is your favourite coffee?"
            ></ic-search-bar>
          </ic-page-header>
          <ic-section-container id="top-target">
            ${"controlled"===args.trigger?lit_html.qy`<ic-card-horizontal heading="Roasted coffee" size="large">
                  <svg
                    slot="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                    />
                  </svg>
                  <svg
                    slot="image"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1600 900"
                  >
                    <rect fill="#ff7700" width="1600" height="1600" y="-350" />
                    <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
                    <polygon
                      fill="#aa0000"
                      points="957 450 872.9 900 1396 900"
                    />
                    <polygon fill="#c50022" points="-60 900 398 662 816 900" />
                    <polygon fill="#a3001b" points="337 900 398 662 816 900" />
                    <polygon
                      fill="#be0044"
                      points="1203 546 1552 900 876 900"
                    />
                    <polygon
                      fill="#9c0036"
                      points="1203 546 1552 900 1162 900"
                    />
                    <polygon fill="#b80066" points="641 695 886 900 367 900" />
                    <polygon fill="#960052" points="587 900 641 695 886 900" />
                    <polygon
                      fill="#b10088"
                      points="1710 900 1401 632 1096 900"
                    />
                    <polygon
                      fill="#8f006d"
                      points="1710 900 1401 632 1365 900"
                    />
                    <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
                    <polygon fill="#880088" points="943 900 1210 900 971 687" />
                  </svg>
                  <div
                    style="display: flex; gap: var(--ic-space-xs); padding: var(--ic-space-xs)"
                    slot="message"
                  >
                    <ic-button variant="secondary" onclick="expandDrawer()"
                      >Learn more</ic-button
                    ><ic-button>Add to order</ic-button>
                  </div>
                </ic-card-horizontal>`:""}
            <ic-typography
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum venenatis facilisis. Nam tortor felis, auctor vel ante
              quis, tempor interdum libero. In dictum sodales velit, eu egestas
              arcu dignissim ac. Aliquam facilisis eros dolor, id laoreet orci
              sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna
              interdum risus, vel fringilla libero ex eu dui. Suspendisse
              ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae
              congue ligula rutrum id. <br /><br />
              Etiam in suscipit metus. Duis semper, sapien a molestie semper, ex
              nibh porttitor tellus, vel molestie justo odio vel purus.
              Curabitur porttitor, tortor sed semper sollicitudin, odio odio
              congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
              commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
              ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
              Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
              lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris. Nam
              non lorem ante.<br /><br />
              Donec aliquam eget mauris condimentum cursus. Nullam tempus a urna
              in commodo. Proin mauris augue, viverra id finibus id, vulputate
              in ante. Aliquam volutpat hendrerit tellus vitae tristique. Donec
              pellentesque enim arcu, at feugiat mauris venenatis vitae. Sed
              iaculis ut elit et ultrices. Donec diam eros, iaculis ac est nec,
              tempus feugiat nisl. Suspendisse eget interdum lorem. Phasellus
              pretium urna id elit pharetra hendrerit.</ic-typography
            >
            <ic-typography
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget orci condimentum, tempus tortor posuere, lacinia ex.
              Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet orci a
              risus facilisis porta. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Curabitur a porttitor
              neque, ac dignissim velit. Morbi quis malesuada massa, vitae
              sodales tellus. Aenean laoreet mattis lobortis. In mauris erat,
              tincidunt in placerat sed, pretium ac tortor. Morbi blandit lacus
              a leo vehicula aliquet.</ic-typography
            >
            <ic-typography
              >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
              pretium. Etiam nec velit at orci varius porttitor. Aliquam
              facilisis, elit non cursus fringilla, metus metus malesuada lacus,
              at blandit nibh augue aliquet orci. Duis aliquam, est eget sodales
              ullamcorper, eros turpis euismod nulla, sed sollicitudin diam
              massa semper purus. Vivamus vel turpis ipsum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Morbi euismod
              turpis dapibus quam fermentum condimentum. Mauris ex orci,
              consequat quis tempor eu, finibus vitae eros. Ut eu erat eu ipsum
              pulvinar cursus vel at dui. Etiam tincidunt quam porta nulla
              suscipit vestibulum. Sed iaculis enim leo, et aliquam justo
              feugiat in. Vivamus in ornare nulla, at tempor massa. Sed et
              aliquam nisi.</ic-typography
            >
            <ic-typography
              >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
              orci. Suspendisse molestie posuere leo vitae posuere. Cras lacinia
              urna non erat gravida sagittis. Quisque dapibus arcu nec sem
              pharetra convallis. Nullam sed arcu mollis, posuere elit at,
              condimentum ligula. Nullam maximus nulla quam, ut euismod est
              feugiat at. Quisque ut venenatis ex, in facilisis sapien.
              Pellentesque in orci vitae metus iaculis venenatis. Nunc porttitor
              tellus arcu, in posuere quam vulputate nec. Aenean in venenatis
              ligula, non mollis quam. Suspendisse nec enim vel massa finibus
              pretium et a urna. Etiam suscipit semper est, id efficitur diam
              sollicitudin nec. Nullam nibh sapien, condimentum ut laoreet et,
              euismod ac mi. Vestibulum tristique odio non risus ullamcorper, et
              aliquam turpis varius. Nunc metus ex, tempus a augue sit amet,
              interdum vulputate libero.</ic-typography
            >
            <ic-typography
              >Aenean convallis libero id magna congue pellentesque. Nulla
              iaculis interdum porta. Aenean laoreet scelerisque nulla vel
              molestie. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Integer sollicitudin in
              felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan
              risus. Donec nec augue justo. Aenean sagittis luctus leo egestas
              consectetur. Sed sit amet nisl quis felis volutpat facilisis ac
              vitae tellus. Curabitur pharetra commodo consequat. Aliquam
              consequat ipsum lacus, sed faucibus sapien mollis
              vel.</ic-typography
            >
          </ic-section-container>
          <ic-drawer
            id="playground-example"
            chevron-button-aria-label=${args.chevronButtonAriaLabel}
            close-button-aria-label=${args.closeButtonAriaLabel}
            close-on-backdrop-click=${args.closeOnBackdropClick}
            expanded=${args.expanded}
            heading=${args.heading}
            message=${args.message}
            position=${args.position}
            size=${args.size}
            show-close-button=${args.showCloseButton}
            trigger=${args.trigger}
          >
            <ic-button variant="secondary" slot=${args.actionsSlot}
              >Secondary action</ic-button
            >
            <ic-button slot=${args.actionsSlot}>Primary action</ic-button>
          </ic-drawer>
        </main>
        <ic-back-to-top target="main"></ic-back-to-top>
        <ic-footer
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
        please get in touch."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        >
          <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
          <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
          <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
          <ic-footer-link slot="link" href="/">Components</ic-footer-link>
          <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
          <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
          <div
            slot="logo"
            style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
        background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
          >
            Logo
          </div>
        </ic-footer>
      </div>
    </div>
    <ic-classification-banner
      classification="official"
    ></ic-classification-banner>
    <script>
      const options = [
        { label: "Espresso", value: "espresso" },
        { label: "Double Espresso", value: "doubleespresso" },
        { label: "Flat White", value: "flatwhite" },
        { label: "Cappuccino", value: "cappuccino" },
        { label: "Americano", value: "americano" },
        { label: "Ameno", value: "ameno" },
        { label: "Aicano", value: "acano" },
        { label: "Mocha", value: "mocha" },
      ];
      document.querySelector("#page-header-search-bar").options = options;
      let drawer = document.querySelector("ic-drawer#playground-example");
      function expandDrawer() {
        drawer.expanded = true;
      }
    </script>`,name:"Playground",args:{actionsSlot:!0,chevronButtonAriaLabel:"",closeButtonAriaLabel:"Close drawer",closeOnBackdropClick:!0,expanded:!1,heading:"Heading",message:"Lorem ipsum odor amet, consectetuer adipiscing elit. Netus condimentum posuere velit egestas senectus viverra. Nascetur diam curabitur semper sodales sapien sit mi. Ultrices potenti eget netus et cras quis; convallis phasellus. Posuere magnis sapien ipsum risus maecenas molestie dictum. Penatibus quis platea vel ipsum habitasse inceptos. Litora leo efficitur duis sociosqu litora ex. Tellus interdum neque sapien finibus felis iaculis euismod. Hendrerit dignissim diam adipiscing nam rutrum nascetur amet.\n\nPlacerat blandit nullam netus mattis vulputate torquent. Adipiscing augue sociosqu nibh parturient conubia cras ridiculus. Quis mi posuere laoreet montes sapien turpis fermentum lobortis. Adipiscing cubilia varius dictum suscipit lobortis. Metus tincidunt quis orci suspendisse scelerisque magna turpis. Pellentesque finibus dis pretium; nisl tincidunt ante et. Nibh curae turpis; duis torquent ornare ante morbi magna gravida? Ut est primis purus tincidunt cubilia interdum; natoque adipiscing. Semper adipiscing cubilia donec velit donec phasellus phasellus vivamus.\n\nVehicula ligula felis libero dui eu pharetra erat aptent sociosqu. Fermentum taciti sed ultrices nisl leo. Mus praesent luctus auctor tristique orci neque rutrum massa volutpat. Ullamcorper fames dignissim aliquet proin sapien feugiat? Vitae facilisis lacinia lacus ut phasellus class netus. Per blandit rhoncus fermentum turpis bibendum class nullam id. Ultricies imperdiet sem est pretium ante fermentum conubia maximus. Per inceptos pretium aliquet mus laoreet blandit ultrices nisl. Odio suspendisse hendrerit luctus lorem dictum lacus phasellus mattis. Lobortis eleifend blandit augue fusce ullamcorper ultricies himenaeos.\n\nVivamus varius vivamus montes morbi enim montes natoque litora. Habitasse porta tincidunt senectus nibh sollicitudin pretium rhoncus quis. Ipsum taciti bibendum natoque tristique vulputate litora. Arcu lectus dignissim risus sed litora; nulla sem iaculis. Vel habitant blandit quis ultricies varius sem nibh ut maximus. Gravida libero donec rutrum neque erat aliquam lacus condimentum laoreet. Porta mi amet penatibus at tempus himenaeos. Tristique himenaeos pulvinar lacus accumsan iaculis facilisis. Hac orci fames quis maximus quis dignissim hendrerit id.\n\nCubilia ipsum scelerisque lacus; mauris efficitur porta ridiculus suscipit? Pharetra nascetur ultrices maximus cursus imperdiet eleifend. Elit sodales tincidunt nisi ligula ac. Tellus lacus convallis viverra ornare nec eleifend maximus inceptos. Non nullam porttitor non sed nulla dolor. Ex ridiculus mattis lacus lobortis fusce? Curae facilisis interdum curae vehicula facilisi ligula. Efficitur sollicitudin tempus viverra porta habitant. Ac ad lorem lobortis erat est sed. Efficitur pellentesque mi ex magna vehicula at.",position:"right",showCloseButton:!0,size:"medium",trigger:"arrow"},argTypes:{actionsSlot:{mapping:{true:"actions",false:""}},size:{options:["small","medium","large"],control:{type:"radio"}},position:{options:["top","bottom","left","right"],control:{type:"radio"}},trigger:{options:["arrow","controlled"],control:{type:"inline-radio"}}}},__namedExportsOrder=["RightPosition","LeftPosition","TopPosition","BottomPosition","DarkTheme","SlottedContent","ManualTrigger","Playground"];RightPosition.parameters={...RightPosition.parameters,docs:{...RightPosition.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-drawer\n    heading="Menu"\n    message="Lorem ipsum odor amet, consectetuer adipiscing elit. Netus condimentum posuere velit egestas senectus viverra. Nascetur diam curabitur semper sodales sapien sit mi. Ultrices potenti eget netus et cras quis; convallis phasellus. Posuere magnis sapien ipsum risus maecenas molestie dictum. Penatibus quis platea vel ipsum habitasse inceptos. Litora leo efficitur duis sociosqu litora ex. Tellus interdum neque sapien finibus felis iaculis euismod. Hendrerit dignissim diam adipiscing nam rutrum nascetur amet.\n\nPlacerat blandit nullam netus mattis vulputate torquent. Adipiscing augue sociosqu nibh parturient conubia cras ridiculus. Quis mi posuere laoreet montes sapien turpis fermentum lobortis. Adipiscing cubilia varius dictum suscipit lobortis. Metus tincidunt quis orci suspendisse scelerisque magna turpis. Pellentesque finibus dis pretium; nisl tincidunt ante et. Nibh curae turpis; duis torquent ornare ante morbi magna gravida? Ut est primis purus tincidunt cubilia interdum; natoque adipiscing. Semper adipiscing cubilia donec velit donec phasellus phasellus vivamus.\n\nVehicula ligula felis libero dui eu pharetra erat aptent sociosqu. Fermentum taciti sed ultrices nisl leo. Mus praesent luctus auctor tristique orci neque rutrum massa volutpat. Ullamcorper fames dignissim aliquet proin sapien feugiat? Vitae facilisis lacinia lacus ut phasellus class netus. Per blandit rhoncus fermentum turpis bibendum class nullam id. Ultricies imperdiet sem est pretium ante fermentum conubia maximus. Per inceptos pretium aliquet mus laoreet blandit ultrices nisl. Odio suspendisse hendrerit luctus lorem dictum lacus phasellus mattis. Lobortis eleifend blandit augue fusce ullamcorper ultricies himenaeos.\n\nVivamus varius vivamus montes morbi enim montes natoque litora. Habitasse porta tincidunt senectus nibh sollicitudin pretium rhoncus quis. Ipsum taciti bibendum natoque tristique vulputate litora. Arcu lectus dignissim risus sed litora; nulla sem iaculis. Vel habitant blandit quis ultricies varius sem nibh ut maximus. Gravida libero donec rutrum neque erat aliquam lacus condimentum laoreet. Porta mi amet penatibus at tempus himenaeos. Tristique himenaeos pulvinar lacus accumsan iaculis facilisis. Hac orci fames quis maximus quis dignissim hendrerit id.\n\nCubilia ipsum scelerisque lacus; mauris efficitur porta ridiculus suscipit? Pharetra nascetur ultrices maximus cursus imperdiet eleifend. Elit sodales tincidunt nisi ligula ac. Tellus lacus convallis viverra ornare nec eleifend maximus inceptos. Non nullam porttitor non sed nulla dolor. Ex ridiculus mattis lacus lobortis fusce? Curae facilisis interdum curae vehicula facilisi ligula. Efficitur sollicitudin tempus viverra porta habitant. Ac ad lorem lobortis erat est sed. Efficitur pellentesque mi ex magna vehicula at."\n  ></ic-drawer>`,\n  name: "Right position"\n}',...RightPosition.parameters?.docs?.source},description:{story:"Use the drawer component...\n\nClick the 'Component API' tab to view all the available attributes, events and slots for drawer.\n\nTo use the drawer component, import `@ukic/canary-web-components` into your application.",...RightPosition.parameters?.docs?.description}}},LeftPosition.parameters={...LeftPosition.parameters,docs:{...LeftPosition.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-drawer heading="Menu" message="test" position="left"></ic-drawer>`,\n  name: "Left position"\n}',...LeftPosition.parameters?.docs?.source},description:{story:"A basic example of drawer anchored to the right of the viewport.",...LeftPosition.parameters?.docs?.description}}},TopPosition.parameters={...TopPosition.parameters,docs:{...TopPosition.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-drawer heading="Menu" message="test" position="top"></ic-drawer>`,\n  name: "Top position"\n}',...TopPosition.parameters?.docs?.source},description:{story:"A basic example of drawer anchored to the left of the viewport.",...TopPosition.parameters?.docs?.description}}},BottomPosition.parameters={...BottomPosition.parameters,docs:{...BottomPosition.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-drawer\n      heading="Menu"\n      message="test"\n      position="bottom"\n    ></ic-drawer>`,\n  name: "Bottom position"\n}',...BottomPosition.parameters?.docs?.source},description:{story:"A basic example of drawer anchored to the top of the viewport.",...BottomPosition.parameters?.docs?.description}}},DarkTheme.parameters={...DarkTheme.parameters,docs:{...DarkTheme.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-theme theme="dark"\n    <div>\n      <div style="display: flex; flex-direction: column; min-height: 100vh;">\n        <ic-top-navigation\n          app-title="Déja-brew"\n          status="alpha"\n          version="v0.0.7"\n          content-aligned="center"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-search-bar\n            slot="search"\n            placeholder="Search"\n            label="Search"\n          ></ic-search-bar>\n          <ic-navigation-button\n            label="button1"\n            slot="buttons"\n            onclick="alert(\'test\')"\n          >\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n              />\n            </svg>\n          </ic-navigation-button>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-group\n            slot="navigation"\n            label="Navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item label="Navigation" href="/"></ic-navigation-item>\n            <ic-navigation-item label="Navigation" href="/"></ic-navigation-item>\n          </ic-navigation-group>\n        </ic-top-navigation>\n        <main style="height: 100vh; background-color: var(--ic-color-background-primary-dark)">\n          <ic-section-container aligned="center">\n            <ic-typography\n              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum\n              pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum\n              molestie enim at sollicitudin pellentesque. Proin sit amet augue sit\n              amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse\n              mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique\n              odio finibus a. In rutrum convallis purus, vitae tristique tortor\n              sagittis vel. Donec dictum nunc a elit tristique, et facilisis est\n              condimentum. Pellentesque maximus nulla libero, nec auctor urna\n              consequat nec. Class aptent taciti sociosqu ad litora torquent per\n              conubia nostra, per inceptos himenaeos. In maximus velit a erat\n              volutpat, sit amet consequat velit rhoncus. Mauris pretium neque\n              eget ante consectetur consectetur. Morbi a consequat lectus. Donec\n              venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id\n              pretium id, efficitur nec leo.</ic-typography\n            >\n          </ic-section-container>\n        </main>\n      </div>\n      <ic-drawer\n        theme="dark"\n        heading="Roasted coffee"\n        message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."\n        position="right"\n      >\n        <svg\n          style="width: var(--ic-space-lg); height: var(--ic-space-lg);"\n          slot="heading-adornment"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 24 24"\n        >\n          <path\n            d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"\n          />\n        </svg>\n        <ic-button slot="actions">Add to order</ic-button>\n      </ic-drawer>\n      <ic-footer\n        aligned="full-width"\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n            please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      ></ic-footer>\n    </div>\n  </ic-theme>`,\n  name: "Dark theme"\n}',...DarkTheme.parameters?.docs?.source},description:{story:"A basic example of drawer anchored to the bottom of the viewport.",...DarkTheme.parameters?.docs?.description}}},SlottedContent.parameters={...SlottedContent.parameters,docs:{...SlottedContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div>\n    <div style="display: flex; flex-direction: column; min-height: 100vh;">\n      <ic-top-navigation\n        app-title="Déja-brew"\n        status="alpha"\n        version="v0.0.7"\n        content-aligned="center"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-search-bar\n          slot="search"\n          placeholder="Search"\n          label="Search"\n        ></ic-search-bar>\n        <ic-navigation-button\n          label="button1"\n          slot="buttons"\n          onclick="alert(\'test\')"\n        >\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n        </ic-navigation-button>\n        <ic-navigation-item\n          slot="navigation"\n          label="Navigation"\n          href="/"\n        ></ic-navigation-item>\n        <ic-navigation-group\n          slot="navigation"\n          label="Navigation group"\n          expandable="true"\n        >\n          <ic-navigation-item label="Navigation" href="/"></ic-navigation-item>\n          <ic-navigation-item label="Navigation" href="/"></ic-navigation-item>\n        </ic-navigation-group>\n      </ic-top-navigation>\n      <main style="height: 100%">\n        <ic-section-container aligned="center">\n          <ic-typography\n            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum\n            pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum\n            molestie enim at sollicitudin pellentesque. Proin sit amet augue sit\n            amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse\n            mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique\n            odio finibus a. In rutrum convallis purus, vitae tristique tortor\n            sagittis vel. Donec dictum nunc a elit tristique, et facilisis est\n            condimentum. Pellentesque maximus nulla libero, nec auctor urna\n            consequat nec. Class aptent taciti sociosqu ad litora torquent per\n            conubia nostra, per inceptos himenaeos. In maximus velit a erat\n            volutpat, sit amet consequat velit rhoncus. Mauris pretium neque\n            eget ante consectetur consectetur. Morbi a consequat lectus. Donec\n            venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id\n            pretium id, efficitur nec leo.</ic-typography\n          >\n        </ic-section-container>\n      </main>\n    </div>\n    <ic-drawer\n      heading="Roasted coffee"\n      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."\n      position="right"\n    >\n      <svg\n        style="width: var(--ic-space-lg); height: var(--ic-space-lg);"\n        slot="heading-adornment"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n      >\n        <path\n          d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"\n        />\n      </svg>\n      <ic-button slot="actions">Add to order</ic-button>\n    </ic-drawer>\n    <ic-footer\n      aligned="full-width"\n      description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n          please get in touch."\n      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n    ></ic-footer>\n  </div>`,\n  name: "Slotted content"\n}',...SlottedContent.parameters?.docs?.source}}},ManualTrigger.parameters={...ManualTrigger.parameters,docs:{...ManualTrigger.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div>\n      <div style="display: flex; flex-direction: column; min-height: 100vh;">\n        <ic-top-navigation\n          app-title="Déja-brew"\n          status="alpha"\n          version="v0.0.7"\n          content-aligned="center"\n        >\n          <svg\n            slot="app-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n            />\n          </svg>\n          <ic-search-bar\n            slot="search"\n            placeholder="Search"\n            label="Search"\n          ></ic-search-bar>\n          <ic-navigation-button\n            label="button1"\n            slot="buttons"\n            onclick="alert(\'test\')"\n          >\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n              />\n            </svg>\n          </ic-navigation-button>\n          <ic-navigation-item\n            slot="navigation"\n            label="Navigation"\n            href="/"\n          ></ic-navigation-item>\n          <ic-navigation-group\n            slot="navigation"\n            label="Navigation group"\n            expandable="true"\n          >\n            <ic-navigation-item\n              label="Navigation"\n              href="/"\n            ></ic-navigation-item>\n            <ic-navigation-item\n              label="Navigation"\n              href="/"\n            ></ic-navigation-item>\n          </ic-navigation-group>\n        </ic-top-navigation>\n        <main style="height: 100%">\n          <ic-section-container aligned="center">\n            <ic-button id="button-1" onclick="expandDrawer()"\n              >Open drawer</ic-button\n            >\n            <ic-drawer\n              id="drawer-1"\n              show-close-button="true"\n              trigger="controlled"\n              heading="Roasted coffee"\n              message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."\n            >\n              <ic-button variant="secondary" slot="actions"\n                >Secondary action</ic-button\n              >\n              <ic-button slot="actions">Primary action</ic-button>\n            </ic-drawer>\n            <ic-typography\n              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus\n              ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin\n              sit amet augue sit amet dui suscipit lobortis. Nullam at\n              consectetur ante. Suspendisse mollis ultricies porttitor. Nunc\n              laoreet leo tortor, ut tristique odio finibus a. In rutrum\n              convallis purus, vitae tristique tortor sagittis vel. Donec dictum\n              nunc a elit tristique, et facilisis est condimentum. Pellentesque\n              maximus nulla libero, nec auctor urna consequat nec. Class aptent\n              taciti sociosqu ad litora torquent per conubia nostra, per\n              inceptos himenaeos. In maximus velit a erat volutpat, sit amet\n              consequat velit rhoncus. Mauris pretium neque eget ante\n              consectetur consectetur. Morbi a consequat lectus. Donec venenatis\n              ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium\n              id, efficitur nec leo.</ic-typography\n            >\n          </ic-section-container>\n        </main>\n      </div>\n      <ic-footer\n        aligned="full-width"\n        description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n    please get in touch."\n        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n      ></ic-footer>\n    </div>\n    <script>\n      let icDrawer = document.querySelector("ic-drawer#drawer-1");\n      function expandDrawer() {\n        icDrawer.expanded = !icDrawer.expanded;\n      }\n    <\/script>`,\n  name: "Manual trigger"\n}',...ManualTrigger.parameters?.docs?.source},description:{story:"A basic example of drawer with slotted content.",...ManualTrigger.parameters?.docs?.description}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<div style="display:flex;">\n      <ic-side-navigation app-title="Déja-brew" version="v0.0.7" status="BETA">\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-navigation-item slot="primary-navigation" href="/" label="Home">\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-navigation-item>\n        <ic-navigation-item\n          slot="primary-navigation"\n          href="/"\n          label="Search"\n          selected="true"\n        >\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-navigation-item>\n        <ic-divider slot="primary-navigation"></ic-divider>\n        <ic-navigation-item slot="primary-navigation" href="/" label="Trends">\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-navigation-item>\n        <ic-navigation-group\n          slot="primary-navigation"\n          label="Second navigation group"\n          expandable="true"\n        >\n          <ic-navigation-item label="Different navigation" href="/">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item label="Navigation" href="/">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n        </ic-navigation-group>\n        <ic-navigation-item\n          slot="primary-navigation"\n          href="/"\n          label="This is a very very very long label for the navigation item"\n        >\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-navigation-item>\n        <ic-navigation-item\n          slot="secondary-navigation"\n          href="/"\n          label="Settings"\n        >\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-navigation-item>\n      </ic-side-navigation>\n      <div\n        class="content-wrapper"\n        style="display:flex; flex-direction: column; flex-grow: 1;"\n      >\n        <main id="main">\n          <ic-page-header\n            heading="Page header"\n            subheading="This is a page header component with additional functionality and this is the text."\n            aligned="full-width"\n            sticky\n          >\n            <ic-status-tag\n              slot="heading-adornment"\n              label="Beta"\n            ></ic-status-tag>\n            <ic-search-bar\n              hide-label="true"\n              id="page-header-search-bar"\n              characters-until-suggestion="1"\n              slot="input"\n              label="What is your favourite coffee?"\n            ></ic-search-bar>\n          </ic-page-header>\n          <ic-section-container id="top-target">\n            ${args.trigger === "controlled" ? html`<ic-card-horizontal heading="Roasted coffee" size="large">\n                  <svg\n                    slot="icon"\n                    xmlns="http://www.w3.org/2000/svg"\n                    height="24px"\n                    viewBox="0 0 24 24"\n                    width="24px"\n                    fill="#000000"\n                  >\n                    <path d="M0 0h24v24H0V0z" fill="none" />\n                    <path\n                      d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                    />\n                  </svg>\n                  <svg\n                    slot="image"\n                    xmlns="http://www.w3.org/2000/svg"\n                    viewBox="0 0 1600 900"\n                  >\n                    <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n                    <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n                    <polygon\n                      fill="#aa0000"\n                      points="957 450 872.9 900 1396 900"\n                    />\n                    <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n                    <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n                    <polygon\n                      fill="#be0044"\n                      points="1203 546 1552 900 876 900"\n                    />\n                    <polygon\n                      fill="#9c0036"\n                      points="1203 546 1552 900 1162 900"\n                    />\n                    <polygon fill="#b80066" points="641 695 886 900 367 900" />\n                    <polygon fill="#960052" points="587 900 641 695 886 900" />\n                    <polygon\n                      fill="#b10088"\n                      points="1710 900 1401 632 1096 900"\n                    />\n                    <polygon\n                      fill="#8f006d"\n                      points="1710 900 1401 632 1365 900"\n                    />\n                    <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n                    <polygon fill="#880088" points="943 900 1210 900 971 687" />\n                  </svg>\n                  <div\n                    style="display: flex; gap: var(--ic-space-xs); padding: var(--ic-space-xs)"\n                    slot="message"\n                  >\n                    <ic-button variant="secondary" onclick="expandDrawer()"\n                      >Learn more</ic-button\n                    ><ic-button>Add to order</ic-button>\n                  </div>\n                </ic-card-horizontal>` : ""}\n            <ic-typography\n              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n              vestibulum venenatis facilisis. Nam tortor felis, auctor vel ante\n              quis, tempor interdum libero. In dictum sodales velit, eu egestas\n              arcu dignissim ac. Aliquam facilisis eros dolor, id laoreet orci\n              sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna\n              interdum risus, vel fringilla libero ex eu dui. Suspendisse\n              ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae\n              congue ligula rutrum id. <br /><br />\n              Etiam in suscipit metus. Duis semper, sapien a molestie semper, ex\n              nibh porttitor tellus, vel molestie justo odio vel purus.\n              Curabitur porttitor, tortor sed semper sollicitudin, odio odio\n              congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies\n              commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt\n              ullamcorper sit amet in metus. Aenean facilisis placerat dictum.\n              Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor\n              lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris. Nam\n              non lorem ante.<br /><br />\n              Donec aliquam eget mauris condimentum cursus. Nullam tempus a urna\n              in commodo. Proin mauris augue, viverra id finibus id, vulputate\n              in ante. Aliquam volutpat hendrerit tellus vitae tristique. Donec\n              pellentesque enim arcu, at feugiat mauris venenatis vitae. Sed\n              iaculis ut elit et ultrices. Donec diam eros, iaculis ac est nec,\n              tempus feugiat nisl. Suspendisse eget interdum lorem. Phasellus\n              pretium urna id elit pharetra hendrerit.</ic-typography\n            >\n            <ic-typography\n              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent\n              eget orci condimentum, tempus tortor posuere, lacinia ex.\n              Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet orci a\n              risus facilisis porta. Orci varius natoque penatibus et magnis dis\n              parturient montes, nascetur ridiculus mus. Curabitur a porttitor\n              neque, ac dignissim velit. Morbi quis malesuada massa, vitae\n              sodales tellus. Aenean laoreet mattis lobortis. In mauris erat,\n              tincidunt in placerat sed, pretium ac tortor. Morbi blandit lacus\n              a leo vehicula aliquet.</ic-typography\n            >\n            <ic-typography\n              >Pellentesque aliquam risus vel eros maximus, at pellentesque mi\n              pretium. Etiam nec velit at orci varius porttitor. Aliquam\n              facilisis, elit non cursus fringilla, metus metus malesuada lacus,\n              at blandit nibh augue aliquet orci. Duis aliquam, est eget sodales\n              ullamcorper, eros turpis euismod nulla, sed sollicitudin diam\n              massa semper purus. Vivamus vel turpis ipsum. Interdum et\n              malesuada fames ac ante ipsum primis in faucibus. Morbi euismod\n              turpis dapibus quam fermentum condimentum. Mauris ex orci,\n              consequat quis tempor eu, finibus vitae eros. Ut eu erat eu ipsum\n              pulvinar cursus vel at dui. Etiam tincidunt quam porta nulla\n              suscipit vestibulum. Sed iaculis enim leo, et aliquam justo\n              feugiat in. Vivamus in ornare nulla, at tempor massa. Sed et\n              aliquam nisi.</ic-typography\n            >\n            <ic-typography\n              >Mauris tempus accumsan libero non tincidunt. Curabitur et leo\n              orci. Suspendisse molestie posuere leo vitae posuere. Cras lacinia\n              urna non erat gravida sagittis. Quisque dapibus arcu nec sem\n              pharetra convallis. Nullam sed arcu mollis, posuere elit at,\n              condimentum ligula. Nullam maximus nulla quam, ut euismod est\n              feugiat at. Quisque ut venenatis ex, in facilisis sapien.\n              Pellentesque in orci vitae metus iaculis venenatis. Nunc porttitor\n              tellus arcu, in posuere quam vulputate nec. Aenean in venenatis\n              ligula, non mollis quam. Suspendisse nec enim vel massa finibus\n              pretium et a urna. Etiam suscipit semper est, id efficitur diam\n              sollicitudin nec. Nullam nibh sapien, condimentum ut laoreet et,\n              euismod ac mi. Vestibulum tristique odio non risus ullamcorper, et\n              aliquam turpis varius. Nunc metus ex, tempus a augue sit amet,\n              interdum vulputate libero.</ic-typography\n            >\n            <ic-typography\n              >Aenean convallis libero id magna congue pellentesque. Nulla\n              iaculis interdum porta. Aenean laoreet scelerisque nulla vel\n              molestie. Class aptent taciti sociosqu ad litora torquent per\n              conubia nostra, per inceptos himenaeos. Integer sollicitudin in\n              felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan\n              risus. Donec nec augue justo. Aenean sagittis luctus leo egestas\n              consectetur. Sed sit amet nisl quis felis volutpat facilisis ac\n              vitae tellus. Curabitur pharetra commodo consequat. Aliquam\n              consequat ipsum lacus, sed faucibus sapien mollis\n              vel.</ic-typography\n            >\n          </ic-section-container>\n          <ic-drawer\n            id="playground-example"\n            chevron-button-aria-label=${args.chevronButtonAriaLabel}\n            close-button-aria-label=${args.closeButtonAriaLabel}\n            close-on-backdrop-click=${args.closeOnBackdropClick}\n            expanded=${args.expanded}\n            heading=${args.heading}\n            message=${args.message}\n            position=${args.position}\n            size=${args.size}\n            show-close-button=${args.showCloseButton}\n            trigger=${args.trigger}\n          >\n            <ic-button variant="secondary" slot=${args.actionsSlot}\n              >Secondary action</ic-button\n            >\n            <ic-button slot=${args.actionsSlot}>Primary action</ic-button>\n          </ic-drawer>\n        </main>\n        <ic-back-to-top target="main"></ic-back-to-top>\n        <ic-footer\n          description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n        please get in touch."\n          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        >\n          <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n          <div\n            slot="logo"\n            style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n        background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"\n          >\n            Logo\n          </div>\n        </ic-footer>\n      </div>\n    </div>\n    <ic-classification-banner\n      classification="official"\n    ></ic-classification-banner>\n    <script>\n      const options = [\n        { label: "Espresso", value: "espresso" },\n        { label: "Double Espresso", value: "doubleespresso" },\n        { label: "Flat White", value: "flatwhite" },\n        { label: "Cappuccino", value: "cappuccino" },\n        { label: "Americano", value: "americano" },\n        { label: "Ameno", value: "ameno" },\n        { label: "Aicano", value: "acano" },\n        { label: "Mocha", value: "mocha" },\n      ];\n      document.querySelector("#page-header-search-bar").options = options;\n      let drawer = document.querySelector("ic-drawer#playground-example");\n      function expandDrawer() {\n        drawer.expanded = true;\n      }\n    <\/script>`,\n  name: "Playground",\n  args: defaultArgs,\n  argTypes: {\n    actionsSlot: {\n      mapping: {\n        true: "actions",\n        false: ""\n      }\n    },\n    size: {\n      options: ["small", "medium", "large"],\n      control: {\n        type: "radio"\n      }\n    },\n    position: {\n      options: ["top", "bottom", "left", "right"],\n      control: {\n        type: "radio"\n      }\n    },\n    trigger: {\n      options: ["arrow", "controlled"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  }\n}',...Playground.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-ic-drawer-ic-drawer-stories.5d0d391f.iframe.bundle.js.map