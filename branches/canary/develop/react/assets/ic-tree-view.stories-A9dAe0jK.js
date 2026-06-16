import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./react-dom-OL5JSpay.js";import{E as i,F as a,kt as o,n as s,r as c,s as l,t as u}from"./iframe-Bx8C_hwt.js";import{d,f,u as p}from"./components-CDP33u_Y.js";function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(null,arguments)}function ee(e){e===void 0&&(e={});let{initialEntries:t=[`/`],initialIndex:n,v5Compat:r=!1}=e,i;i=t.map((e,t)=>u(e,typeof e==`string`?null:e.state,t===0?`default`:void 0));let a=c(n??i.length-1),o=_.Pop,s=null;function c(e){return Math.min(Math.max(e,0),i.length-1)}function l(){return i[a]}function u(e,t,n){t===void 0&&(t=null);let r=re(i?l().pathname:`/`,e,t,n);return te(r.pathname.charAt(0)===`/`,`relative pathnames are not supported in memory history: `+JSON.stringify(e)),r}function d(e){return typeof e==`string`?e:ie(e)}return{get index(){return a},get action(){return o},get location(){return l()},createHref:d,createURL(e){return new URL(d(e),`http://localhost`)},encodeLocation(e){let t=typeof e==`string`?g(e):e;return{pathname:t.pathname||``,search:t.search||``,hash:t.hash||``}},push(e,t){o=_.Push;let n=u(e,t);a+=1,i.splice(a,i.length,n),r&&s&&s({action:o,location:n,delta:1})},replace(e,t){o=_.Replace;let n=u(e,t);i[a]=n,r&&s&&s({action:o,location:n,delta:0})},go(e){o=_.Pop;let t=c(a+e),n=i[t];a=t,s&&s({action:o,location:n,delta:e})},listen(e){return s=e,()=>{s=null}}}}function h(e,t){if(e===!1||e==null)throw Error(t)}function te(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ne(){return Math.random().toString(36).substr(2,8)}function re(e,t,n,r){return n===void 0&&(n=null),m({pathname:typeof e==`string`?e:e.pathname,search:``,hash:``},typeof t==`string`?g(t):t,{state:n,key:t&&t.key||r||ne()})}function ie(e){let{pathname:t=`/`,search:n=``,hash:r=``}=e;return n&&n!==`?`&&(t+=n.charAt(0)===`?`?n:`?`+n),r&&r!==`#`&&(t+=r.charAt(0)===`#`?r:`#`+r),t}function g(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ae(e,t,n){return n===void 0&&(n=`/`),oe(e,t,n,!1)}function oe(e,t,n,r){let i=ge((typeof t==`string`?g(t):t).pathname||`/`,n);if(i==null)return null;let a=se(e);le(a);let o=null,s=he(i);for(let e=0;o==null&&e<a.length;++e)o=fe(a[e],s,r);return o}function se(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=``);let i=(e,i,a)=>{let o={relativePath:a===void 0?e.path||``:a,caseSensitive:e.caseSensitive===!0,childrenIndex:i,route:e};o.relativePath.startsWith(`/`)&&(h(o.relativePath.startsWith(r),`Absolute route path "`+o.relativePath+`" nested under path `+(`"`+r+`" is not valid. An absolute child route path `)+`must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=v([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(h(e.index!==!0,`Index routes must not have child routes. Please remove `+(`all child routes from route path "`+s+`".`)),se(e.children,t,c,s)),!(e.path==null&&!e.index)&&t.push({path:s,score:ue(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(e.path===``||!((n=e.path)!=null&&n.includes(`?`)))i(e,t);else for(let n of ce(e.path))i(e,t,n)}),t}function ce(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ce(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function le(e){e.sort((e,t)=>e.score===t.score?de(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}function ue(e,t){let n=e.split(`/`),r=n.length;return n.some(je)&&(r+=Ae),t&&(r+=De),n.filter(e=>!je(e)).reduce((e,t)=>e+(Te.test(t)?Ee:t===``?Oe:ke),r)}function de(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function fe(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=pe({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=pe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:v([a,u.pathname]),pathnameBase:Fe(v([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=v([a,u.pathnameBase]))}return o}function pe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=me(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if(r===`*`){let e=s[n]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let c=s[n];return i&&!c?e[r]=void 0:e[r]=(c||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function me(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),te(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "`+e+`" will be treated as if it were `+(`"`+e.replace(/\*$/,`/*`)+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+(`please change the route path to "`+e.replace(/\*$/,`/*`)+`".`));let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`));return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function he(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return te(!1,`The URL path "`+e+`" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent `+(`encoding (`+t+`).`)),e}}function ge(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function _e(e,t){t===void 0&&(t=`/`);let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?g(e):e,a;if(n)if(Ne(n))a=n;else{if(n.includes(`//`)){let e=n;n=Pe(n),te(!1,`Pathnames cannot have embedded double slashes - normalizing `+(e+` -> `+n))}a=n.startsWith(`/`)?ve(n.substring(1),`/`):ve(n,t)}else a=t;return{pathname:a,search:Ie(r),hash:Le(i)}}function ve(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ye(e,t,n,r){return`Cannot include a '`+e+`' character in a manually specified `+("`to."+t+"` field ["+JSON.stringify(r)+`].  Please separate it out to the `)+("`to."+n+"` field. Alternatively you may provide the full path as ")+`a string in <Link to="..."> and the router will parse it for you.`}function be(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function xe(e,t){let n=be(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function Se(e,t,n,r){r===void 0&&(r=!1);let i;typeof e==`string`?i=g(e):(i=m({},e),h(!i.pathname||!i.pathname.includes(`?`),ye(`?`,`pathname`,`search`,i)),h(!i.pathname||!i.pathname.includes(`#`),ye(`#`,`pathname`,`hash`,i)),h(!i.search||!i.search.includes(`#`),ye(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=_e(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}function Ce(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}var _,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,v,Fe,Ie,Le,Re,ze,Be=t((()=>{(function(e){e.Pop=`POP`,e.Push=`PUSH`,e.Replace=`REPLACE`})(_||={}),(function(e){e.data=`data`,e.deferred=`deferred`,e.redirect=`redirect`,e.error=`error`})(we||={}),Te=/^:[\w-]+$/,Ee=3,De=2,Oe=1,ke=10,Ae=-2,je=e=>e===`*`,Me=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ne=e=>Me.test(e),Pe=e=>e.replace(/\/\/+/g,`/`),v=e=>Pe(e.join(`/`)),Fe=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Ie=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Le=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Re=[`post`,`put`,`patch`,`delete`],new Set(Re),ze=[`get`,...Re],new Set(ze)}));function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ve.apply(null,arguments)}function He(e,t){let{relative:n}=t===void 0?{}:t;!Ue()&&h(!1);let{basename:r,navigator:i}=y.useContext(b),{hash:a,pathname:o,search:s}=Je(e,{relative:n}),c=o;return r!==`/`&&(c=o===`/`?r:v([r,o])),i.createHref({pathname:c,search:s,hash:a})}function Ue(){return y.useContext(ht)!=null}function We(){return!Ue()&&h(!1),y.useContext(ht).location}function Ge(e){y.useContext(b).static||y.useLayoutEffect(e)}function Ke(){let{isDataRoute:e}=y.useContext(x);return e?at():qe()}function qe(){!Ue()&&h(!1);let e=y.useContext(pt),{basename:t,future:n,navigator:r}=y.useContext(b),{matches:i}=y.useContext(x),{pathname:a}=We(),o=JSON.stringify(xe(i,n.v7_relativeSplatPath)),s=y.useRef(!1);return Ge(()=>{s.current=!0}),y.useCallback(function(n,i){if(i===void 0&&(i={}),!s.current)return;if(typeof n==`number`){r.go(n);return}let c=Se(n,JSON.parse(o),a,i.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:v([t,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[t,r,o,a,e])}function Je(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(b),{matches:i}=y.useContext(x),{pathname:a}=We(),o=JSON.stringify(xe(i,r.v7_relativeSplatPath));return y.useMemo(()=>Se(e,JSON.parse(o),a,n===`path`),[e,o,a,n])}function Ye(e,t){return Xe(e,t)}function Xe(e,t,n,r){!Ue()&&h(!1);let{navigator:i}=y.useContext(b),{matches:a}=y.useContext(x),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:`/`;o&&o.route;let l=We(),u;if(t){let e=typeof t==`string`?g(t):t;!(c===`/`||e.pathname?.startsWith(c))&&h(!1),u=e}else u=l;let d=u.pathname||`/`,f=d;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);f=`/`+d.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let p=ae(e,{pathname:f}),m=$e(p&&p.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:v([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:v([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);return t&&m?y.createElement(ht.Provider,{value:{location:Ve({pathname:`/`,search:``,hash:``,state:null,key:`default`},u),navigationType:_.Pop}},m):m}function Ze(){let e=it(),t=Ce(e)?e.status+` `+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return y.createElement(y.Fragment,null,y.createElement(`h2`,null,`Unexpected Application Error!`),y.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?y.createElement(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}function Qe(e){let{routeContext:t,match:n,children:r}=e,i=y.useContext(pt);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(x.Provider,{value:t},r)}function $e(e,t,n,r){if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);!(e>=0)&&h(!1),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&e[t.route.id]===void 0&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,r,i)=>{let l,u=!1,d=null,f=null;n&&(l=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||_t,s&&(c<0&&i===0?(ot(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,f=null):c===i&&(u=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=l?d:u?f:r.route.Component?y.createElement(r.route.Component,null):r.route.element?r.route.element:e,y.createElement(Qe,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?y.createElement(vt,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}function et(e){let t=y.useContext(pt);return!t&&h(!1),t}function tt(e){let t=y.useContext(mt);return!t&&h(!1),t}function nt(e){let t=y.useContext(x);return!t&&h(!1),t}function rt(e){let t=nt(e),n=t.matches[t.matches.length-1];return!n.route.id&&h(!1),n.route.id}function it(){let e=y.useContext(gt),t=tt(bt.UseRouteError),n=rt(bt.UseRouteError);return e===void 0?t.errors?.[n]:e}function at(){let{router:e}=et(yt.UseNavigateStable),t=rt(bt.UseNavigateStable),n=y.useRef(!1);return Ge(()=>{n.current=!0}),y.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r==`number`?e.navigate(r):e.navigate(r,Ve({fromRouteId:t},i)))},[e,t])}function ot(e,t,n){!t&&!xt[e]&&(xt[e]=!0)}function st(e,t){e?.v7_startTransition===void 0&&S(`v7_startTransition`,"React Router will begin wrapping state updates in `React.startTransition` in v7",`https://reactrouter.com/v6/upgrading/future#v7_starttransition`),e?.v7_relativeSplatPath===void 0&&(!t||t.v7_relativeSplatPath===void 0)&&S(`v7_relativeSplatPath`,`Relative route resolution within Splat routes is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`),t&&(t.v7_fetcherPersist===void 0&&S(`v7_fetcherPersist`,`The persistence behavior of fetchers is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`),t.v7_normalizeFormMethod===void 0&&S(`v7_normalizeFormMethod`,"Casing of `formMethod` fields is being normalized to uppercase in v7",`https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`),t.v7_partialHydration===void 0&&S(`v7_partialHydration`,"`RouterProvider` hydration behavior is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_partialhydration`),t.v7_skipActionErrorRevalidation===void 0&&S(`v7_skipActionErrorRevalidation`,"The revalidation behavior after 4xx/5xx `action` responses is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`))}function ct(e){let{basename:t,children:n,initialEntries:r,initialIndex:i,future:a}=e,o=y.useRef();o.current??=ee({initialEntries:r,initialIndex:i,v5Compat:!0});let s=o.current,[c,l]=y.useState({action:s.action,location:s.location}),{v7_startTransition:u}=a||{},d=y.useCallback(e=>{u&&St?St(()=>l(e)):l(e)},[l,u]);return y.useLayoutEffect(()=>s.listen(d),[s,d]),y.useEffect(()=>st(a),[a]),y.createElement(ut,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,future:a})}function lt(e){h(!1)}function ut(e){let{basename:t=`/`,children:n=null,location:r,navigationType:i=_.Pop,navigator:a,static:o=!1,future:s}=e;Ue()&&h(!1);let c=t.replace(/^\/*/,`/`),l=y.useMemo(()=>({basename:c,navigator:a,static:o,future:Ve({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r==`string`&&(r=g(r));let{pathname:u=`/`,search:d=``,hash:f=``,state:p=null,key:m=`default`}=r,ee=y.useMemo(()=>{let e=ge(u,c);return e==null?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[c,u,d,f,p,m,i]);return ee==null?null:y.createElement(b.Provider,{value:l},y.createElement(ht.Provider,{children:n,value:ee}))}function dt(e){let{children:t,location:n}=e;return Ye(ft(t),n)}function ft(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(e,r)=>{if(!y.isValidElement(e))return;let i=[...t,r];if(e.type===y.Fragment){n.push.apply(n,ft(e.props.children,i));return}e.type!==lt&&h(!1),!(!e.props.index||!e.props.children)&&h(!1);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ft(e.props.children,i)),n.push(a)}),n}var y,pt,mt,b,ht,x,gt,_t,vt,yt,bt,xt,S,St,Ct,wt=t((()=>{y=n(o()),Be(),pt=y.createContext(null),mt=y.createContext(null),b=y.createContext(null),ht=y.createContext(null),x=y.createContext({outlet:null,matches:[],isDataRoute:!1}),gt=y.createContext(null),_t=y.createElement(Ze,null),vt=class extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error(`React Router caught the following error during render`,e,t)}render(){return this.state.error===void 0?this.props.children:y.createElement(x.Provider,{value:this.props.routeContext},y.createElement(gt.Provider,{value:this.state.error,children:this.props.component}))}},yt=function(e){return e.UseBlocker=`useBlocker`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e}(yt||{}),bt=function(e){return e.UseBlocker=`useBlocker`,e.UseLoaderData=`useLoaderData`,e.UseActionData=`useActionData`,e.UseRouteError=`useRouteError`,e.UseNavigation=`useNavigation`,e.UseRouteLoaderData=`useRouteLoaderData`,e.UseMatches=`useMatches`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e.UseRouteId=`useRouteId`,e}(bt||{}),xt={},S=(e,t,n)=>(``+t+("You can use the `"+e+"` future flag to opt-in early. ")+(`For more information, see `+n+`.`),void 0),St=y.startTransition,Ct=function(e){return e[e.pending=0]=`pending`,e[e.success=1]=`success`,e[e.error=2]=`error`,e}(Ct||{}),new Promise(()=>{}),y.Component}));function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt.apply(null,arguments)}function Et(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Dt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ot(e,t){return e.button===0&&(!t||t===`_self`)&&!Dt(e)}function kt(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,c=Ke(),l=We(),u=Je(e,{relative:o});return At.useCallback(t=>{Ot(t,n)&&(t.preventDefault(),c(e,{replace:r===void 0?ie(l)===ie(u):r,state:i,preventScrollReset:a,relative:o,viewTransition:s}))},[l,c,u,r,i,n,e,a,o,s])}var At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt=t((()=>{At=n(o()),r(),wt(),Be(),jt=[`onClick`,`relative`,`reloadDocument`,`replace`,`state`,`target`,`to`,`preventScrollReset`,`viewTransition`],Mt=`6`;try{window.__reactRouterVersion=Mt}catch{}Nt=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Pt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ft=At.forwardRef(function(e,t){let{onClick:n,relative:r,reloadDocument:i,replace:a,state:o,target:s,to:c,preventScrollReset:l,viewTransition:u}=e,d=Et(e,jt),{basename:f}=At.useContext(b),p,m=!1;if(typeof c==`string`&&Pt.test(c)&&(p=c,Nt))try{let e=new URL(window.location.href),t=c.startsWith(`//`)?new URL(e.protocol+c):new URL(c),n=ge(t.pathname,f);t.origin===e.origin&&n!=null?c=n+t.search+t.hash:m=!0}catch{}let ee=He(c,{relative:r}),h=kt(c,{replace:a,state:o,target:s,preventScrollReset:l,relative:r,viewTransition:u});function te(e){n&&n(e),e.defaultPrevented||h(e)}return At.createElement(`a`,Tt({},d,{href:p||ee,onClick:m||i?n:te,ref:t,target:s}))}),(function(e){e.UseScrollRestoration=`useScrollRestoration`,e.UseSubmit=`useSubmit`,e.UseSubmitFetcher=`useSubmitFetcher`,e.UseFetcher=`useFetcher`,e.useViewTransitionState=`useViewTransitionState`})(It||={}),(function(e){e.UseFetcher=`useFetcher`,e.UseFetchers=`useFetchers`,e.UseScrollRestoration=`useScrollRestoration`})(Lt||={})})),zt,Bt=t((()=>{zt=``+new URL(`readme-BX7PycqI.md`,import.meta.url).href})),Vt,Ht=t((()=>{Vt=`data:text/markdown;base64,IyBpYy10cmVlLXZpZXcKCgoKPCEtLSBBdXRvIEdlbmVyYXRlZCBCZWxvdyAtLT4KCgojIyBQcm9wZXJ0aWVzCgp8IFByb3BlcnR5ICAgICAgICAgICAgfCBBdHRyaWJ1dGUgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERlZmF1bHQgICAgIHwKfCAtLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLSB8CnwgYGhlYWRpbmdgICAgICAgICAgICB8IGBoZWFkaW5nYCAgICAgICAgICAgICB8IFRoZSBoZWFkaW5nIG9mIHRoZSB0cmVlIHZpZXcuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYHN0cmluZ2AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYCIiYCAgICAgICAgfAp8IGBzaXplYCAgICAgICAgICAgICAgfCBgc2l6ZWAgICAgICAgICAgICAgICAgfCBUaGUgc2l6ZSBvZiB0aGUgdHJlZSB2aWV3LiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGAibGFyZ2UiIFx8ICJtZWRpdW0iIFx8ICJzbWFsbCIgXHwgdW5kZWZpbmVkYCB8IGAibWVkaXVtImAgIHwKfCBgdGhlbWVgICAgICAgICAgICAgIHwgYHRoZW1lYCAgICAgICAgICAgICAgIHwgU2V0cyB0aGUgdGhlbWUgY29sb3IgdG8gdGhlIGRhcmsgb3IgbGlnaHQgdGhlbWUgY29sb3IuICJpbmhlcml0IiB3aWxsIHNldCB0aGUgY29sb3IgYmFzZWQgb24gdGhlIHN5c3RlbSBzZXR0aW5ncyBvciBpYy10aGVtZSBjb21wb25lbnQuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgImRhcmsiIFx8ICJpbmhlcml0IiBcfCAibGlnaHQiIFx8IHVuZGVmaW5lZGAgfCBgImluaGVyaXQiYCB8CnwgYHRyZWVJdGVtRGF0YWAgICAgICB8IC0tICAgICAgICAgICAgICAgICAgICB8IFRoZSBjb250ZW50IHdpdGhpbiB0aGUgdHJlZSB2aWV3IHRyZWUgaXRlbXMuIFRoaXMgd2lsbCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBzbG90dGVkIGNvbnRlbnQuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYEljVHJlZUl0ZW1PcHRpb25zW11gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYFtdYCAgICAgICAgfAp8IGB0cnVuY2F0ZUhlYWRpbmdgICAgfCBgdHJ1bmNhdGUtaGVhZGluZ2AgICAgfCBJZiBgdHJ1ZWAsIHRoZSB0cmVlIHZpZXcgaGVhZGluZyB3aWxsIGJlIHRydW5jYXRlZCBpbnN0ZWFkIG9mIHRleHQgd3JhcHBpbmcuIFdoZW4gdXNlZCBvbiBzbWFsbCBkZXZpY2VzLCB0aGlzIHByb3Agd2lsbCBiZSBvdmVycmlkZGVuIGFuZCBoZWFkaW5ncyB3aWxsIGJlIHNldCB0byB0ZXh0LXdyYXAuICAgICAgICB8IGBib29sZWFuYCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGBmYWxzZWAgICAgIHwKfCBgdHJ1bmNhdGVUcmVlSXRlbXNgIHwgYHRydW5jYXRlLXRyZWUtaXRlbXNgIHwgSWYgYHRydWVgLCB0cmVlIGl0ZW1zIHdpbGwgYmUgdHJ1bmNhdGVkLCB1bmxlc3MgdGhleSBhcmUgaW5kaXZpZHVhbGx5IG92ZXJyaWRkZW4uIFdoZW4gdXNlZCBvbiBzbWFsbCBkZXZpY2VzLCB0aGlzIHByb3Agd2lsbCBiZSBvdmVycmlkZGVuIGFuZCB0cmVlLWl0ZW1zIHdpbGwgYmUgc2V0IHRvIHRleHQtd3JhcC4gfCBgYm9vbGVhbmAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgZmFsc2VgICAgICB8CgoKIyMgU2xvdHMKCnwgU2xvdCAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAp8IC0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwKfCBgImhlYWRpbmciYCB8IENvbnRlbnQgaXMgc2V0IGFzIHRoZSB0cmVlIHZpZXcgaGVhZGluZy4gICAgICB8CnwgYCJpY29uImAgICAgfCBDb250ZW50IGlzIHBsYWNlZCB0byB0aGUgbGVmdCBvZiB0aGUgaGVhZGluZy4gfAoKCiMjIENTUyBDdXN0b20gUHJvcGVydGllcwoKfCBOYW1lICAgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICB8CnwgLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfAp8IGAtLXRyZWUtdmlldy13aWR0aGAgfCBXaWR0aCBvZiB0aGUgdHJlZSB2aWV3IHwKCgojIyBEZXBlbmRlbmNpZXMKCiMjIyBEZXBlbmRzIG9uCgotIFtpYy10b29sdGlwXSguLi8uLi8uLi8uLi93ZWItY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9pYy10b29sdGlwKQotIFtpYy10eXBvZ3JhcGh5XSguLi8uLi8uLi8uLi93ZWItY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9pYy10eXBvZ3JhcGh5KQoKIyMjIEdyYXBoCmBgYG1lcm1haWQKZ3JhcGggVEQ7CiAgaWMtdHJlZS12aWV3IC0tPiBpYy10b29sdGlwCiAgaWMtdHJlZS12aWV3IC0tPiBpYy10eXBvZ3JhcGh5CiAgaWMtdG9vbHRpcCAtLT4gaWMtdHlwb2dyYXBoeQogIHN0eWxlIGljLXRyZWUtdmlldyBmaWxsOiNmOWYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjRweApgYGAKCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCgo=`})),Ut=e({AddChildNodes:()=>Z,Basic:()=>w,BasicSlotted:()=>T,CustomID:()=>k,CustomIDs:()=>O,DisabledTreeItems:()=>I,DisabledTreeItemsSlotted:()=>L,Expanded:()=>J,ExpandedSlotted:()=>Y,Large:()=>P,LargeSlotted:()=>F,Link:()=>K,LinkSlotted:()=>q,MaxContent:()=>B,MaxContentSlotted:()=>V,Nested:()=>E,NestedSlotted:()=>D,Playground:()=>Q,PlaygroundSlotted:()=>$,ReactRouter:()=>Yt,RouterItem:()=>R,SelectedTreeItem:()=>W,SelectedTreeItemSlotted:()=>G,SlottedContent:()=>z,SlottedCustomIds:()=>Kt,Small:()=>M,SmallSlotted:()=>N,TruncationBehaviour:()=>H,TruncationBehaviourSlotted:()=>U,UpdatingOptions:()=>X,UpdatingOptionsSlotted:()=>qt,WithIcons:()=>A,WithIconsSlotted:()=>j,WithNestedSkipLink:()=>Jt,__namedExportsOrder:()=>Qt,default:()=>Gt}),Wt,C,Gt,w,T,E,D,O,Kt,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,qt,Jt,Z,Yt,Xt,Q,Zt,$,Qt,$t=t((()=>{s(),Wt=n(o()),Rt(),Bt(),Ht(),f(),C=u(),Gt={title:`React Components/Tree view`,component:d,parameters:{componentAPI:{data:Vt+zt}}},w={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsx)(d,{heading:`Menu`,treeItemData:[{label:`Coffee`},{label:`Tea`},{label:`Hot chocolate`}]})}),name:`Basic`},T={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,children:[(0,C.jsx)(p,{label:`Coffee`}),(0,C.jsx)(p,{label:`Tea`}),(0,C.jsx)(p,{label:`Hot chocolate`})]})}),name:`Basic - slotted`},E={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsx)(d,{heading:`Menu`,treeItemData:[{label:`Coffee`,children:[{label:`Americano`,children:[{label:`With milk`}]},{label:`Latte`},{label:`Espresso`}]},{label:`Tea`,children:[{label:`Earl grey`},{label:`Chai`}]},{label:`Hot chocolate`}]})}),name:`Nested`},D={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,children:[(0,C.jsxs)(p,{label:`Coffee`,children:[(0,C.jsx)(p,{label:`Americano`}),(0,C.jsx)(p,{label:`Latte`}),(0,C.jsx)(p,{label:`Espresso`})]}),(0,C.jsxs)(p,{label:`Tea`,children:[(0,C.jsx)(p,{label:`Earl Grey`}),(0,C.jsx)(p,{label:`Chai`})]}),(0,C.jsx)(p,{label:`Hot chocolate`})]})}),name:`Nested - slotted`},O={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsx)(d,{heading:`Menu`,treeItemData:[{label:`Coffee`,treeItemId:`coffee-1`},{label:`Tea`,treeItemId:`tea-1`},{label:`Hot chocolate`,treeItemId:`hot-chocolate-1`}]})}),name:`Custom IDs with Tree Item Data`},Kt={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,children:[(0,C.jsx)(p,{label:`Coffee`,treeItemId:`coffee-1`,children:(0,C.jsx)(p,{label:`Americano`,treeItemId:`americano-1`,children:(0,C.jsx)(p,{label:`With milk`,treeItemId:`with-milk-1`})})}),(0,C.jsx)(p,{label:`Tea`,treeItemId:`tea-1`})]})}),name:`Custom IDs with Slotted`},k={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,children:[(0,C.jsx)(p,{label:`Coffee`,id:`coffee-1`,onIcTreeItemSelected:e=>console.log(e.detail.id)}),(0,C.jsx)(p,{label:`Tea`,id:`tea-1`,onIcTreeItemSelected:e=>console.log(e.detail.id)}),(0,C.jsx)(p,{label:`Hot chocolate`,id:`hot-chocolate-1`,onIcTreeItemSelected:e=>console.log(e.detail.id)})]})}),name:`Custom IDs using ID`},A={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsx)(d,{heading:`Menu`,treeItemData:[{label:`Coffee`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>`,children:[{label:`Americano`},{label:`Latte`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>`},{label:`Espresso`}]},{label:`Tea`,children:[{label:`Earl grey`},{label:`Chai`}]},{label:`Hot chocolate`}],children:(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})})})}),name:`With icons`},j={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,children:[(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})}),(0,C.jsxs)(p,{label:`Coffee`,children:[(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z`})}),(0,C.jsx)(p,{label:`Americano`}),(0,C.jsx)(p,{label:`Latte`,children:(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z`})})}),(0,C.jsx)(p,{label:`Espresso`})]}),(0,C.jsxs)(p,{label:`Tea`,children:[(0,C.jsx)(p,{label:`Earl Grey`}),(0,C.jsx)(p,{label:`Chai`})]}),(0,C.jsx)(p,{label:`Hot chocolate`})]})}),name:`With icons - slotted`},M={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsx)(d,{heading:`Menu`,size:`small`,treeItemData:[{label:`Coffee`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>`,children:[{label:`Americano`},{label:`Latte`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>`},{label:`Espresso`}]},{label:`Tea`,children:[{label:`Earl grey`},{label:`Chai`}]},{label:`Hot chocolate`}],children:(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})})})}),name:`Small`},N={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,size:`small`,children:[(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})}),(0,C.jsxs)(p,{label:`Coffee`,children:[(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z`})}),(0,C.jsx)(p,{label:`Americano`}),(0,C.jsx)(p,{label:`Latte`,children:(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z`})})}),(0,C.jsx)(p,{label:`Espresso`})]}),(0,C.jsxs)(p,{label:`Tea`,children:[(0,C.jsx)(p,{label:`Earl Grey`}),(0,C.jsx)(p,{label:`Chai`})]}),(0,C.jsx)(p,{label:`Hot chocolate`})]})}),name:`Small - slotted`},P={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsx)(d,{heading:`Menu`,size:`large`,treeItemData:[{label:`Coffee`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>`,children:[{label:`Americano`},{label:`Latte`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>`},{label:`Espresso`}]},{label:`Tea`,children:[{label:`Earl grey`},{label:`Chai`}]},{label:`Hot chocolate`}],children:(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})})})}),name:`Large`},F={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,size:`large`,children:[(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})}),(0,C.jsxs)(p,{label:`Coffee`,children:[(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z`})}),(0,C.jsx)(p,{label:`Americano`}),(0,C.jsx)(p,{label:`Latte`,children:(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z`})})}),(0,C.jsx)(p,{label:`Espresso`})]}),(0,C.jsxs)(p,{label:`Tea`,children:[(0,C.jsx)(p,{label:`Earl Grey`}),(0,C.jsx)(p,{label:`Chai`})]}),(0,C.jsx)(p,{label:`Hot chocolate`})]})}),name:`Large - slotted`},I={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsx)(d,{heading:`Menu`,treeItemData:[{label:`Coffee`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>`,children:[{label:`Americano`},{label:`Latte`,disabled:!0,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>`},{label:`Espresso`}]},{label:`Tea`,children:[{label:`Earl grey`},{label:`Chai`,disabled:!0}]},{label:`Hot chocolate`,disabled:!0}],children:(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})})})}),name:`Disabled tree items`},L={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,children:[(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})}),(0,C.jsxs)(p,{label:`Coffee`,children:[(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z`})}),(0,C.jsx)(p,{label:`Americano`}),(0,C.jsx)(p,{label:`Latte`,disabled:!0,children:(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z`})})}),(0,C.jsx)(p,{label:`Espresso`})]}),(0,C.jsxs)(p,{label:`Tea`,children:[(0,C.jsx)(p,{label:`Earl Grey`}),(0,C.jsx)(p,{label:`Chai`,disabled:!0})]}),(0,C.jsx)(p,{label:`Hot chocolate`,disabled:!0})]})}),name:`Disabled tree items - slotted`},R={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,truncateTreeItems:!0,children:[(0,C.jsx)(p,{children:(0,C.jsx)(`a`,{slot:`router-item`,href:`/`,children:`Hot chocolate with marshmallows and whipped cream`})}),(0,C.jsx)(p,{children:(0,C.jsx)(`a`,{slot:`router-item`,href:`/tea`,children:`Tea`})}),(0,C.jsx)(p,{label:`Coffee`})]})}),name:`Router item`},z={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{children:[(0,C.jsx)(a,{variant:`subtitle-large`,slot:`heading`,children:`Menu`}),(0,C.jsx)(p,{children:(0,C.jsx)(a,{slot:`label`,children:`Coffee`})}),(0,C.jsx)(p,{label:`Tea`}),(0,C.jsx)(p,{label:`Hot chocolate`})]})}),name:`Slotted content`},B={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsx)(d,{heading:`Menu`,treeItemData:[{label:`Coffee`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>`,children:[{label:`Americano`},{label:`Latte with extra milk and sugar`},{label:`Espresso`}]},{label:`Tea`,children:[{label:`Earl grey`},{label:`Chai`}]},{label:`Hot chocolate with marshmallows`}],children:(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})})})}),name:`Max content`},V={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu with nested options`,children:[(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})}),(0,C.jsxs)(p,{label:`Coffee`,children:[(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z`})}),(0,C.jsx)(p,{label:`Americano`}),(0,C.jsx)(p,{label:`Latte with extra milk and sugar`}),(0,C.jsx)(p,{label:`Espresso`})]}),(0,C.jsxs)(p,{label:`Tea`,children:[(0,C.jsx)(p,{label:`Earl Grey`}),(0,C.jsx)(p,{label:`Chai`})]}),(0,C.jsx)(p,{label:`Hot chocolate with marshmallows`})]})}),name:`Max content - slotted`},H={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsx)(d,{heading:`Menu`,truncateTreeItems:!0,truncateHeading:!0,treeItemData:[{label:`Coffee`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>`,children:[{label:`Americano`},{label:`Latte with extra milk and sugar`},{label:`Espresso`}]},{label:`Tea`,children:[{label:`Earl grey`},{label:`Earl Grey with truncation false`,truncateTreeItem:!1},{label:`Chai`}]},{label:`Hot chocolate with marshmallows`}],children:(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})})})}),name:`Truncation behaviour`},U={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu with nested options`,truncateHeading:!0,truncateTreeItems:!0,children:[(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})}),(0,C.jsxs)(p,{label:`Coffee`,expanded:!0,children:[(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z`})}),(0,C.jsx)(p,{label:`Americano`}),(0,C.jsx)(p,{label:`Latte with extra milk and sugar`}),(0,C.jsx)(p,{label:`Espresso`})]}),(0,C.jsxs)(p,{label:`Tea`,expanded:!0,children:[(0,C.jsx)(p,{label:`Earl Grey`}),(0,C.jsx)(p,{label:`Earl Grey with truncation false`,truncateTreeItem:!1}),(0,C.jsx)(p,{label:`Chai`})]}),(0,C.jsx)(p,{label:`Hot chocolate with marshmallows`})]})}),name:`Truncation behaviour - slotted`},W={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsx)(d,{heading:`Menu`,treeItemData:[{label:`Coffee`},{label:`Tea`},{label:`Hot chocolate`,selected:!0}]})}),name:`Selected tree item`},G={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,children:[(0,C.jsx)(p,{label:`Coffee`}),(0,C.jsx)(p,{label:`Tea`}),(0,C.jsx)(p,{label:`Hot chocolate`,selected:!0})]})}),name:`Selected tree item - slotted`},K={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsx)(d,{heading:`Menu`,treeItemData:[{label:`Coffee`,href:`#`},{label:`Tea`,href:`#`,selected:!0},{label:`Hot chocolate`,disabled:!0,href:`#`}]})}),name:`Link`},q={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,children:[(0,C.jsx)(p,{label:`Coffee`,href:`#`}),(0,C.jsx)(p,{label:`Tea`,selected:!0,href:`#`}),(0,C.jsx)(p,{label:`Hot chocolate`,disabled:!0,href:`#`})]})}),name:`Link - slotted`},J={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsx)(d,{onIcTreeItemExpanded:e=>console.log(`onIcTreeItemExpanded: `,e.detail),heading:`Menu`,treeItemData:[{label:`Coffee`,expanded:!0,children:[{label:`Americano`,expanded:!0,children:[{label:`With milk`}]},{label:`Latte`},{label:`Espresso`}]},{label:`Tea`,children:[{label:`Earl grey`},{label:`Chai`}]},{label:`Hot chocolate`}]})}),name:`Expanded`},Y={render:()=>(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,onIcTreeItemExpanded:e=>console.log(`[Slotted] onIcTreeItemExpanded: `,e.detail),children:[(0,C.jsxs)(p,{label:`Coffee`,expanded:!0,children:[(0,C.jsx)(p,{label:`Americano`,expanded:!0,children:(0,C.jsx)(p,{label:`With milk`})}),(0,C.jsx)(p,{label:`Latte`}),(0,C.jsx)(p,{label:`Espresso`})]}),(0,C.jsxs)(p,{label:`Tea`,children:[(0,C.jsx)(p,{label:`Earl Grey`}),(0,C.jsx)(p,{label:`Chai`})]}),(0,C.jsx)(p,{label:`Hot chocolate`})]})}),name:`Expanded - slotted`},X={render:()=>{let[e,t]=(0,Wt.useState)([{label:`Item 1`},{label:`Item 2`},{label:`Item 3`},{label:`Item 4`}]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d,{heading:`Updating options`,treeItemData:e}),(0,C.jsx)(`br`,{}),(0,C.jsx)(l,{onClick:()=>{t([{label:`Item 5`},{label:`Item 6`}])},children:`Update`})]})},name:`Updating options`},qt={render:()=>{let[e,t]=(0,Wt.useState)([{label:`Item 1`},{label:`Item 2`},{label:`Item 3`},{label:`Item 4`}]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d,{heading:`Updating options`,children:e.map((e,t)=>(0,C.jsx)(p,{label:e.label},t))}),(0,C.jsx)(`br`,{}),(0,C.jsx)(l,{onClick:()=>{t([{label:`Item 5`},{label:`Item 6`}])},children:`Update`})]})},name:`Updating options - slotted`},Jt={render:()=>(0,C.jsxs)(`div`,{style:{width:`250px`},children:[(0,C.jsx)(i,{target:`next-content`,inline:!0}),(0,C.jsxs)(d,{heading:`Menu`,children:[(0,C.jsxs)(p,{label:`Coffee`,children:[(0,C.jsx)(p,{label:`Americano`,children:(0,C.jsx)(p,{label:`With milk`})}),(0,C.jsx)(p,{label:`Latte`}),(0,C.jsx)(p,{label:`Espresso`})]}),(0,C.jsxs)(p,{label:`Tea`,children:[(0,C.jsx)(p,{label:`Earl Grey`}),(0,C.jsx)(p,{label:`Chai`})]}),(0,C.jsx)(p,{label:`Hot chocolate`})]})]}),name:`Nested skip link`},Z={render:()=>{let[e,t]=(0,Wt.useState)([]);return(0,Wt.useEffect)(()=>{let e=[{label:`PG Tips`},{label:`Yorkshire Tea`},{label:`Earl Grey`}];setTimeout(()=>{t(e)},3e3)},[]),(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,children:[(0,C.jsx)(p,{label:`Coffee`}),(0,C.jsx)(p,{label:`Tea`,expanded:e.length,children:e.map(e=>(0,C.jsx)(p,{label:e.label},e.label))}),(0,C.jsx)(p,{label:`Hot chocolate`})]})})},name:`Adding child nodes`},Yt={render:()=>{let e=We(),t=t=>e.pathname===t;return(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:`16px`},children:[(0,C.jsx)(`div`,{style:{width:`250px`},children:(0,C.jsxs)(d,{heading:`Menu`,children:[(0,C.jsx)(p,{selected:t(`/`),children:(0,C.jsx)(Ft,{slot:`router-item`,to:`/`,children:`Home`})}),(0,C.jsx)(p,{selected:t(`/coffee`),children:(0,C.jsx)(Ft,{slot:`router-item`,to:`/coffee`,children:`Coffee`})}),(0,C.jsx)(p,{selected:t(`/tea`),children:(0,C.jsx)(Ft,{slot:`router-item`,to:`/tea`,children:`Tea`})})]})}),(0,C.jsx)(`div`,{style:{marginTop:`16px`},children:(0,C.jsxs)(dt,{children:[(0,C.jsx)(lt,{path:`/`,element:(0,C.jsx)(a,{children:`Home Page`})}),(0,C.jsx)(lt,{path:`/coffee`,element:(0,C.jsx)(a,{children:`Coffee Page`})}),(0,C.jsx)(lt,{path:`/tea`,element:(0,C.jsx)(a,{children:`Tea Page`})})]})})]})},name:`React Router`,decorators:[e=>(0,C.jsx)(ct,{initialEntries:[`/`],children:(0,C.jsx)(e,{})})]},Xt={heading:`Menu`,size:`medium`,truncateTreeItems:!1,treeItemDisabled:!1,treeItemHref:``,treeItemId:``,treeItemLabel:`Coffee`,treeItemSelected:!1,showTreeItemIcon:!1,theme:`inherit`},Q={render:e=>(0,C.jsx)(d,{heading:e.heading,size:e.size,theme:e.theme,truncateTreeItems:e.truncateTreeItems,treeItemData:[{label:e.treeItemLabel,href:e.treeItemHref,disabled:e.treeItemDisabled,selected:e.treeItemSelected,icon:e.showTreeItemIcon&&`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>`,treeItemId:e.treeItemId},{label:`Tea`},{label:`Hot chocolate`}]}),args:Xt,argTypes:{size:{options:[`medium`,`small`,`large`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},Zt={heading:`Menu`,size:`medium`,showIcon:!1,truncateHeading:!1,truncateTreeItems:!1,treeItemDisabled:!1,treeItemHref:``,treeItemId:``,treeItemLabel:`Coffee`,treeItemSelected:!1,showTreeItemIcon:!1,theme:`inherit`},$={render:e=>(0,C.jsxs)(d,{heading:e.heading,size:e.size,theme:e.theme,truncateHeading:e.truncateHeading,truncateTreeItems:e.truncateTreeItems,children:[e.showIcon&&(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z`})}),(0,C.jsx)(p,{label:e.treeItemLabel,disabled:e.treeItemDisabled,selected:e.treeItemSelected,href:e.treeItemHref,treeItemId:e.treeItemId,children:e.showTreeItemIcon&&(0,C.jsx)(c,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:(0,C.jsx)(`path`,{d:`M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z`})})}),(0,C.jsx)(p,{label:`Tea`}),(0,C.jsx)(p,{label:`Hot chocolate`})]}),args:Zt,argTypes:{size:{options:[`medium`,`small`,`large`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground - slotted`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" treeItemData={[{
      label: "Coffee"
    }, {
      label: "Tea"
    }, {
      label: "Hot chocolate"
    }]} />
    </div>,
  name: "Basic"
}`,...w.parameters?.docs?.source},description:{story:`Use the tree view component to display hierarchical data in a tree structure. The tree view component is useful for displaying nested data, such as a file system or a category hierarchy.

Click the 'Component API' tab to view all the available attributes, events and slots for tree view.

To use the tree view component, import \`@ukic/canary-react\` into your application.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" />
        <IcTreeItem label="Tea" />
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>,
  name: "Basic - slotted"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" treeItemData={[{
      label: "Coffee",
      children: [{
        label: "Americano",
        children: [{
          label: "With milk"
        }]
      }, {
        label: "Latte"
      }, {
        label: "Espresso"
      }]
    }, {
      label: "Tea",
      children: [{
        label: "Earl grey"
      }, {
        label: "Chai"
      }]
    }, {
      label: "Hot chocolate"
    }]} />
    </div>,
  name: "Nested"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee">
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte" />
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>,
  name: "Nested - slotted"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" treeItemData={[{
      label: "Coffee",
      treeItemId: "coffee-1"
    }, {
      label: "Tea",
      treeItemId: "tea-1"
    }, {
      label: "Hot chocolate",
      treeItemId: "hot-chocolate-1"
    }]} />
    </div>,
  name: "Custom IDs with Tree Item Data"
}`,...O.parameters?.docs?.source}}},Kt.parameters={...Kt.parameters,docs:{...Kt.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" treeItemId="coffee-1">
          <IcTreeItem label="Americano" treeItemId="americano-1">
            <IcTreeItem label="With milk" treeItemId="with-milk-1" />
          </IcTreeItem>
        </IcTreeItem>
        <IcTreeItem label="Tea" treeItemId="tea-1" />
      </IcTreeView>
    </div>,
  name: "Custom IDs with Slotted"
}`,...Kt.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" id="coffee-1" onIcTreeItemSelected={ev => console.log(ev.detail.id)} />
        <IcTreeItem label="Tea" id="tea-1" onIcTreeItemSelected={ev => console.log(ev.detail.id)} />
        <IcTreeItem label="Hot chocolate" id="hot-chocolate-1" onIcTreeItemSelected={ev => console.log(ev.detail.id)} />
      </IcTreeView>
    </div>,
  name: "Custom IDs using ID"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" treeItemData={[{
      label: "Coffee",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
      children: [{
        label: "Americano"
      }, {
        label: "Latte",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>'
      }, {
        label: "Espresso"
      }]
    }, {
      label: "Tea",
      children: [{
        label: "Earl grey"
      }, {
        label: "Chai"
      }]
    }, {
      label: "Hot chocolate"
    }]}>
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
      </IcTreeView>
    </div>,
  name: "With icons"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu">
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee">
          <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte">
            <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
            </SlottedSVG>
          </IcTreeItem>
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>,
  name: "With icons - slotted"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" size="small" treeItemData={[{
      label: "Coffee",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
      children: [{
        label: "Americano"
      }, {
        label: "Latte",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>'
      }, {
        label: "Espresso"
      }]
    }, {
      label: "Tea",
      children: [{
        label: "Earl grey"
      }, {
        label: "Chai"
      }]
    }, {
      label: "Hot chocolate"
    }]}>
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
      </IcTreeView>
    </div>,
  name: "Small"
}`,...M.parameters?.docs?.source},description:{story:`Small and large styling will be passed down from tree view to tree items and nested tree items.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" size="small">
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee">
          <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte">
            <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
            </SlottedSVG>
          </IcTreeItem>
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>,
  name: "Small - slotted"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" size="large" treeItemData={[{
      label: "Coffee",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
      children: [{
        label: "Americano"
      }, {
        label: "Latte",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>'
      }, {
        label: "Espresso"
      }]
    }, {
      label: "Tea",
      children: [{
        label: "Earl grey"
      }, {
        label: "Chai"
      }]
    }, {
      label: "Hot chocolate"
    }]}>
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
      </IcTreeView>
    </div>,
  name: "Large"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" size="large">
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee">
          <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte">
            <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
            </SlottedSVG>
          </IcTreeItem>
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>,
  name: "Large - slotted"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" treeItemData={[{
      label: "Coffee",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
      children: [{
        label: "Americano"
      }, {
        label: "Latte",
        disabled: true,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>'
      }, {
        label: "Espresso"
      }]
    }, {
      label: "Tea",
      children: [{
        label: "Earl grey"
      }, {
        label: "Chai",
        disabled: true
      }]
    }, {
      label: "Hot chocolate",
      disabled: true
    }]}>
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
      </IcTreeView>
    </div>,
  name: "Disabled tree items"
}`,...I.parameters?.docs?.source},description:{story:"Individual tree-items can be disabled using the `disabled` prop.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu">
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee">
          <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte" disabled>
            <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
            </SlottedSVG>
          </IcTreeItem>
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" disabled />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" disabled />
      </IcTreeView>
    </div>,
  name: "Disabled tree items - slotted"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" truncateTreeItems>
        <IcTreeItem>
          <a slot="router-item" href="/">
            Hot chocolate with marshmallows and whipped cream
          </a>
        </IcTreeItem>
        <IcTreeItem>
          <a slot="router-item" href="/tea">
            Tea
          </a>
        </IcTreeItem>
        <IcTreeItem label="Coffee" />
      </IcTreeView>
    </div>,
  name: "Router item"
}`,...R.parameters?.docs?.source},description:{story:"Custom links and router-items can be passed in using the `router-item` slot.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView>
        <IcTypography variant="subtitle-large" slot="heading">
          Menu
        </IcTypography>
        <IcTreeItem>
          <IcTypography slot="label">Coffee</IcTypography>
        </IcTreeItem>
        <IcTreeItem label="Tea" />
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>,
  name: "Slotted content"
}`,...z.parameters?.docs?.source},description:{story:"Custom content can be passed to both the tree view (using the `heading` slot) and the tree-item (using the `label` slot).",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" treeItemData={[{
      label: "Coffee",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
      children: [{
        label: "Americano"
      }, {
        label: "Latte with extra milk and sugar"
      }, {
        label: "Espresso"
      }]
    }, {
      label: "Tea",
      children: [{
        label: "Earl grey"
      }, {
        label: "Chai"
      }]
    }, {
      label: "Hot chocolate with marshmallows"
    }]}>
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
      </IcTreeView>
    </div>,
  name: "Max content"
}`,...B.parameters?.docs?.source},description:{story:"When the heading/label exceeds the width of the container, the text will wrap unless `truncateTreeItem` is set to `true`.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu with nested options">
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee">
          <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte with extra milk and sugar" />
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate with marshmallows" />
      </IcTreeView>
    </div>,
  name: "Max content - slotted"
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" truncateTreeItems truncateHeading treeItemData={[{
      label: "Coffee",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
      children: [{
        label: "Americano"
      }, {
        label: "Latte with extra milk and sugar"
      }, {
        label: "Espresso"
      }]
    }, {
      label: "Tea",
      children: [{
        label: "Earl grey"
      }, {
        label: "Earl Grey with truncation false",
        truncateTreeItem: false
      }, {
        label: "Chai"
      }]
    }, {
      label: "Hot chocolate with marshmallows"
    }]}>
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
      </IcTreeView>
    </div>,
  name: "Truncation behaviour"
}`,...H.parameters?.docs?.source},description:{story:"When `truncateTreeItems` or `truncateHeading` are set to `true`, and the heading/label exceeds the width of the container, they will be truncated with an ellipsis.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu with nested options" truncateHeading truncateTreeItems>
        <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>
        <IcTreeItem label="Coffee" expanded>
          <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>
          <IcTreeItem label="Americano" />
          <IcTreeItem label="Latte with extra milk and sugar" />
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea" expanded>
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Earl Grey with truncation false" truncateTreeItem={false} />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate with marshmallows" />
      </IcTreeView>
    </div>,
  name: "Truncation behaviour - slotted"
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" treeItemData={[{
      label: "Coffee"
    }, {
      label: "Tea"
    }, {
      label: "Hot chocolate",
      selected: true
    }]} />
    </div>,
  name: "Selected tree item"
}`,...W.parameters?.docs?.source},description:{story:"Utilising the `selected` attribute on `IcTreeItem` will turn it into a controlled component, displaying the selected state when set to `true`.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" />
        <IcTreeItem label="Tea" />
        <IcTreeItem label="Hot chocolate" selected />
      </IcTreeView>
    </div>,
  name: "Selected tree item - slotted"
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" treeItemData={[{
      label: "Coffee",
      href: "#"
    }, {
      label: "Tea",
      href: "#",
      selected: true
    }, {
      label: "Hot chocolate",
      disabled: true,
      href: "#"
    }]} />
    </div>,
  name: "Link"
}`,...K.parameters?.docs?.source},description:{story:"When setting the `href` attribute, the tree-item will function as a link.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" href="#" />
        <IcTreeItem label="Tea" selected href="#" />
        <IcTreeItem label="Hot chocolate" disabled href="#" />
      </IcTreeView>
    </div>,
  name: "Link - slotted"
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView onIcTreeItemExpanded={event => console.log("onIcTreeItemExpanded: ", event.detail)} heading="Menu" treeItemData={[{
      label: "Coffee",
      expanded: true,
      children: [{
        label: "Americano",
        expanded: true,
        children: [{
          label: "With milk"
        }]
      }, {
        label: "Latte"
      }, {
        label: "Espresso"
      }]
    }, {
      label: "Tea",
      children: [{
        label: "Earl grey"
      }, {
        label: "Chai"
      }]
    }, {
      label: "Hot chocolate"
    }]} />
    </div>,
  name: "Expanded"
}`,...J.parameters?.docs?.source},description:{story:"An example with the `expanded` prop set to `true` on a parent tree item.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcTreeView heading="Menu" onIcTreeItemExpanded={event => console.log("[Slotted] onIcTreeItemExpanded: ", event.detail)}>
        <IcTreeItem label="Coffee" expanded>
          <IcTreeItem label="Americano" expanded>
            <IcTreeItem label="With milk" />
          </IcTreeItem>
          <IcTreeItem label="Latte" />
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>,
  name: "Expanded - slotted"
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [treeItems, setTreeItems] = useState([{
      label: "Item 1"
    }, {
      label: "Item 2"
    }, {
      label: "Item 3"
    }, {
      label: "Item 4"
    }]);
    const updateTreeItems = () => {
      setTreeItems([{
        label: "Item 5"
      }, {
        label: "Item 6"
      }]);
    };
    return <>
        <IcTreeView heading="Updating options" treeItemData={treeItems} />
        <br />
        <IcButton onClick={updateTreeItems}>Update</IcButton>
      </>;
  },
  name: "Updating options"
}`,...X.parameters?.docs?.source}}},qt.parameters={...qt.parameters,docs:{...qt.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [treeItems, setTreeItems] = useState([{
      label: "Item 1"
    }, {
      label: "Item 2"
    }, {
      label: "Item 3"
    }, {
      label: "Item 4"
    }]);
    const updateTreeItems = () => {
      setTreeItems([{
        label: "Item 5"
      }, {
        label: "Item 6"
      }]);
    };
    return <>
        <IcTreeView heading="Updating options">
          {treeItems.map((option, index) => <IcTreeItem key={index} label={option.label} />)}
        </IcTreeView>
        <br />
        <IcButton onClick={updateTreeItems}>Update</IcButton>
      </>;
  },
  name: "Updating options - slotted"
}`,...qt.parameters?.docs?.source}}},Jt.parameters={...Jt.parameters,docs:{...Jt.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "250px"
  }}>
      <IcSkipLink target="next-content" inline />
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee">
          <IcTreeItem label="Americano">
            <IcTreeItem label="With milk" />
          </IcTreeItem>
          <IcTreeItem label="Latte" />
          <IcTreeItem label="Espresso" />
        </IcTreeItem>
        <IcTreeItem label="Tea">
          <IcTreeItem label="Earl Grey" />
          <IcTreeItem label="Chai" />
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>,
  name: "Nested skip link"
}`,...Jt.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [childNodes, setChildNodes] = useState([]);
    useEffect(() => {
      const childData = [{
        label: "PG Tips"
      }, {
        label: "Yorkshire Tea"
      }, {
        label: "Earl Grey"
      }];
      setTimeout(() => {
        setChildNodes(childData);
      }, 3000);
    }, []);
    return <div style={{
      width: "250px"
    }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" />
        <IcTreeItem label="Tea" expanded={childNodes.length}>
          {childNodes.map(childNode => <IcTreeItem label={childNode.label} key={childNode.label} />)}
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>;
  },
  name: "Adding child nodes"
}`,...Z.parameters?.docs?.source}}},Yt.parameters={...Yt.parameters,docs:{...Yt.parameters?.docs,source:{originalSource:`{
  render: () => {
    const location = useLocation();
    const isSelected = path => location.pathname === path;
    return <div style={{
      display: "flex",
      flexDirection: "row",
      gap: "16px"
    }}>
      <div style={{
        width: "250px"
      }}>
        <IcTreeView heading="Menu">
          <IcTreeItem selected={isSelected("/")}>
            <NavLink slot="router-item" to="/">
              Home
            </NavLink>
          </IcTreeItem>
          <IcTreeItem selected={isSelected("/coffee")}>
            <NavLink slot="router-item" to="/coffee">
              Coffee
            </NavLink>
          </IcTreeItem>
          <IcTreeItem selected={isSelected("/tea")}>
            <NavLink slot="router-item" to="/tea">
              Tea
            </NavLink>
          </IcTreeItem>
        </IcTreeView>
      </div>
      <div style={{
        marginTop: "16px"
      }}>
        <Routes>
          <Route path="/" element={<IcTypography>Home Page</IcTypography>} />
          <Route path="/coffee" element={<IcTypography>Coffee Page</IcTypography>} />
          <Route path="/tea" element={<IcTypography>Tea Page</IcTypography>} />
        </Routes>
      </div>
    </div>;
  },
  name: "React Router",
  decorators: [Story => <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>]
}`,...Yt.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <IcTreeView heading={args.heading} size={args.size} theme={args.theme} truncateTreeItems={args.truncateTreeItems} treeItemData={[{
    label: args.treeItemLabel,
    href: args.treeItemHref,
    disabled: args.treeItemDisabled,
    selected: args.treeItemSelected,
    icon: args.showTreeItemIcon && '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
    treeItemId: args.treeItemId
  }, {
    label: "Tea"
  }, {
    label: "Hot chocolate"
  }]} />,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["medium", "small", "large"],
      control: {
        type: "inline-radio"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground"
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => <IcTreeView heading={args.heading} size={args.size} theme={args.theme} truncateHeading={args.truncateHeading} truncateTreeItems={args.truncateTreeItems}>
      {args.showIcon && <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </SlottedSVG>}
      <IcTreeItem label={args.treeItemLabel} disabled={args.treeItemDisabled} selected={args.treeItemSelected} href={args.treeItemHref} treeItemId={args.treeItemId}>
        {args.showTreeItemIcon && <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
          </SlottedSVG>}
      </IcTreeItem>
      <IcTreeItem label="Tea" />
      <IcTreeItem label="Hot chocolate" />
    </IcTreeView>,
  args: defaultSlottedArgs,
  argTypes: {
    size: {
      options: ["medium", "small", "large"],
      control: {
        type: "inline-radio"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground - slotted"
}`,...$.parameters?.docs?.source},description:{story:`Go to the <ic-link href="/?path=/story/react-components-tree-view--playground">separate page for the playground example</ic-link> to view the prop controls.`,...$.parameters?.docs?.description}}},Qt=`Basic.BasicSlotted.Nested.NestedSlotted.CustomIDs.SlottedCustomIds.CustomID.WithIcons.WithIconsSlotted.Small.SmallSlotted.Large.LargeSlotted.DisabledTreeItems.DisabledTreeItemsSlotted.RouterItem.SlottedContent.MaxContent.MaxContentSlotted.TruncationBehaviour.TruncationBehaviourSlotted.SelectedTreeItem.SelectedTreeItemSlotted.Link.LinkSlotted.Expanded.ExpandedSlotted.UpdatingOptions.UpdatingOptionsSlotted.WithNestedSkipLink.AddChildNodes.ReactRouter.Playground.PlaygroundSlotted`.split(`.`)}));$t();export{Z as AddChildNodes,w as Basic,T as BasicSlotted,k as CustomID,O as CustomIDs,I as DisabledTreeItems,L as DisabledTreeItemsSlotted,J as Expanded,Y as ExpandedSlotted,P as Large,F as LargeSlotted,K as Link,q as LinkSlotted,B as MaxContent,V as MaxContentSlotted,E as Nested,D as NestedSlotted,Q as Playground,$ as PlaygroundSlotted,Yt as ReactRouter,R as RouterItem,W as SelectedTreeItem,G as SelectedTreeItemSlotted,z as SlottedContent,Kt as SlottedCustomIds,M as Small,N as SmallSlotted,H as TruncationBehaviour,U as TruncationBehaviourSlotted,X as UpdatingOptions,qt as UpdatingOptionsSlotted,A as WithIcons,j as WithIconsSlotted,Jt as WithNestedSkipLink,Qt as __namedExportsOrder,Gt as default,$t as n,Ut as t};