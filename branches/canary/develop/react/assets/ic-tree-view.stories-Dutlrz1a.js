import{r as c,v as je,R as t,a as de,I as Re,w as Je}from"./iframe-B3vLFuki.js";import"./index-CnW5N9Jo.js";import{n as p,o as r}from"./components-CwszZkAM.js";import{S as A}from"./slottedSVG-CoJzhWBc.js";function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Ce.apply(this,arguments)}var S;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(S||(S={}));function _e(e){e===void 0&&(e={});let{initialEntries:a=["/"],initialIndex:n,v5Compat:l=!1}=e,o;o=a.map((u,C)=>h(u,typeof u=="string"?null:u.state,C===0?"default":void 0));let i=m(n??o.length-1),s=S.Pop,d=null;function m(u){return Math.min(Math.max(u,0),o.length-1)}function g(){return o[i]}function h(u,C,b){C===void 0&&(C=null);let f=Ke(o?g().pathname:"/",u,C,b);return we(f.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(u)),f}function I(u){return typeof u=="string"?u:ve(u)}return{get index(){return i},get action(){return s},get location(){return g()},createHref:I,createURL(u){return new URL(I(u),"http://localhost")},encodeLocation(u){let C=typeof u=="string"?L(u):u;return{pathname:C.pathname||"",search:C.search||"",hash:C.hash||""}},push(u,C){s=S.Push;let b=h(u,C);i+=1,o.splice(i,o.length,b),l&&d&&d({action:s,location:b,delta:1})},replace(u,C){s=S.Replace;let b=h(u,C);o[i]=b,l&&d&&d({action:s,location:b,delta:0})},go(u){s=S.Pop;let C=m(i+u),b=o[C];i=C,d&&d({action:s,location:b,delta:u})},listen(u){return d=u,()=>{d=null}}}}function v(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function we(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function $e(){return Math.random().toString(36).substr(2,8)}function Ke(e,a,n,l){return n===void 0&&(n=null),Ce({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof a=="string"?L(a):a,{state:n,key:a&&a.key||l||$e()})}function ve(e){let{pathname:a="/",search:n="",hash:l=""}=e;return n&&n!=="?"&&(a+=n.charAt(0)==="?"?n:"?"+n),l&&l!=="#"&&(a+=l.charAt(0)==="#"?l:"#"+l),a}function L(e){let a={};if(e){let n=e.indexOf("#");n>=0&&(a.hash=e.substr(n),e=e.substr(0,n));let l=e.indexOf("?");l>=0&&(a.search=e.substr(l),e=e.substr(0,l)),e&&(a.pathname=e)}return a}var Ve;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ve||(Ve={}));function Qe(e,a,n){return n===void 0&&(n="/"),qe(e,a,n)}function qe(e,a,n,l){let o=typeof a=="string"?L(a):a,i=Te(o.pathname||"/",n);if(i==null)return null;let s=We(e);et(s);let d=null;for(let m=0;d==null&&m<s.length;++m){let g=It(i);d=ct(s[m],g)}return d}function We(e,a,n,l){a===void 0&&(a=[]),n===void 0&&(n=[]),l===void 0&&(l="");let o=(i,s,d)=>{let m={relativePath:d===void 0?i.path||"":d,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};m.relativePath.startsWith("/")&&(v(m.relativePath.startsWith(l),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(l.length));let g=T([l,m.relativePath]),h=n.concat(m);i.children&&i.children.length>0&&(v(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),We(i.children,a,h,g)),!(i.path==null&&!i.index)&&a.push({path:g,score:it(g,i.index),routesMeta:h})};return e.forEach((i,s)=>{var d;if(i.path===""||!((d=i.path)!=null&&d.includes("?")))o(i,s);else for(let m of ke(i.path))o(i,s,m)}),a}function ke(e){let a=e.split("/");if(a.length===0)return[];let[n,...l]=a,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(l.length===0)return o?[i,""]:[i];let s=ke(l.join("/")),d=[];return d.push(...s.map(m=>m===""?i:[i,m].join("/"))),o&&d.push(...s),d.map(m=>e.startsWith("/")&&m===""?"/":m)}function et(e){e.sort((a,n)=>a.score!==n.score?n.score-a.score:st(a.routesMeta.map(l=>l.childrenIndex),n.routesMeta.map(l=>l.childrenIndex)))}const tt=/^:[\w-]+$/,at=3,nt=2,lt=1,rt=10,ot=-2,ye=e=>e==="*";function it(e,a){let n=e.split("/"),l=n.length;return n.some(ye)&&(l+=ot),a&&(l+=nt),n.filter(o=>!ye(o)).reduce((o,i)=>o+(tt.test(i)?at:i===""?lt:rt),l)}function st(e,a){return e.length===a.length&&e.slice(0,-1).every((l,o)=>l===a[o])?e[e.length-1]-a[a.length-1]:0}function ct(e,a,n){let{routesMeta:l}=e,o={},i="/",s=[];for(let d=0;d<l.length;++d){let m=l[d],g=d===l.length-1,h=i==="/"?a:a.slice(i.length)||"/",I=dt({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},h),w=m.route;if(!I)return null;Object.assign(o,I.params),s.push({params:o,pathname:T([i,I.pathname]),pathnameBase:Ct(T([i,I.pathnameBase])),route:w}),I.pathnameBase!=="/"&&(i=T([i,I.pathnameBase]))}return s}function dt(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,l]=mt(e.path,e.caseSensitive,e.end),o=a.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:l.reduce((g,h,I)=>{let{paramName:w,isOptional:u}=h;if(w==="*"){let b=d[I]||"";s=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const C=d[I];return u&&!C?g[w]=void 0:g[w]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:i,pathnameBase:s,pattern:e}}function mt(e,a,n){a===void 0&&(a=!1),n===void 0&&(n=!0),we(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let l=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,d,m)=>(l.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(l.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,a?void 0:"i"),l]}function It(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return we(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+a+").")),e}}function Te(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let n=a.endsWith("/")?a.length-1:a.length,l=e.charAt(n);return l&&l!=="/"?null:e.slice(n)||"/"}const gt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ht=e=>gt.test(e);function ut(e,a){a===void 0&&(a="/");let{pathname:n,search:l="",hash:o=""}=typeof e=="string"?L(e):e,i;if(n)if(ht(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),we(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=He(n.substring(1),"/"):i=He(n,a)}else i=a;return{pathname:i,search:wt(l),hash:bt(o)}}function He(e,a){let n=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function fe(e,a,n,l){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+a+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pt(e){return e.filter((a,n)=>n===0||a.route.path&&a.route.path.length>0)}function Ue(e,a){let n=pt(e);return a?n.map((l,o)=>o===n.length-1?l.pathname:l.pathnameBase):n.map(l=>l.pathnameBase)}function Pe(e,a,n,l){l===void 0&&(l=!1);let o;typeof e=="string"?o=L(e):(o=Ce({},e),v(!o.pathname||!o.pathname.includes("?"),fe("?","pathname","search",o)),v(!o.pathname||!o.pathname.includes("#"),fe("#","pathname","hash",o)),v(!o.search||!o.search.includes("#"),fe("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,d;if(s==null)d=n;else{let I=a.length-1;if(!l&&s.startsWith("..")){let w=s.split("/");for(;w[0]==="..";)w.shift(),I-=1;o.pathname=w.join("/")}d=I>=0?a[I]:"/"}let m=ut(o,d),g=s&&s!=="/"&&s.endsWith("/"),h=(i||s===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(g||h)&&(m.pathname+="/"),m}const T=e=>e.join("/").replace(/\/\/+/g,"/"),Ct=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bt=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ft(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ne=["post","put","patch","delete"];new Set(Ne);const At=["get",...Ne];new Set(At);function me(){return me=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},me.apply(this,arguments)}const Le=c.createContext(null),vt=c.createContext(null),x=c.createContext(null),be=c.createContext(null),V=c.createContext({outlet:null,matches:[],isDataRoute:!1}),De=c.createContext(null);function Et(e,a){let{relative:n}=a===void 0?{}:a;Ie()||v(!1);let{basename:l,navigator:o}=c.useContext(x),{hash:i,pathname:s,search:d}=ze(e,{relative:n}),m=s;return l!=="/"&&(m=s==="/"?l:T([l,s])),o.createHref({pathname:m,search:d,hash:i})}function Ie(){return c.useContext(be)!=null}function ge(){return Ie()||v(!1),c.useContext(be).location}function Ye(e){c.useContext(x).static||c.useLayoutEffect(e)}function St(){let{isDataRoute:e}=c.useContext(V);return e?kt():Tt()}function Tt(){Ie()||v(!1);let e=c.useContext(Le),{basename:a,future:n,navigator:l}=c.useContext(x),{matches:o}=c.useContext(V),{pathname:i}=ge(),s=JSON.stringify(Ue(o,n.v7_relativeSplatPath)),d=c.useRef(!1);return Ye(()=>{d.current=!0}),c.useCallback(function(g,h){if(h===void 0&&(h={}),!d.current)return;if(typeof g=="number"){l.go(g);return}let I=Pe(g,JSON.parse(s),i,h.relative==="path");e==null&&a!=="/"&&(I.pathname=I.pathname==="/"?a:T([a,I.pathname])),(h.replace?l.replace:l.push)(I,h.state,h)},[a,l,s,i,e])}function ze(e,a){let{relative:n}=a===void 0?{}:a,{future:l}=c.useContext(x),{matches:o}=c.useContext(V),{pathname:i}=ge(),s=JSON.stringify(Ue(o,l.v7_relativeSplatPath));return c.useMemo(()=>Pe(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Lt(e,a){return xt(e,a)}function xt(e,a,n,l){Ie()||v(!1);let{navigator:o}=c.useContext(x),{matches:i}=c.useContext(V),s=i[i.length-1],d=s?s.params:{};s&&s.pathname;let m=s?s.pathnameBase:"/";s&&s.route;let g=ge(),h;if(a){var I;let f=typeof a=="string"?L(a):a;m==="/"||(I=f.pathname)!=null&&I.startsWith(m)||v(!1),h=f}else h=g;let w=h.pathname||"/",u=w;if(m!=="/"){let f=m.replace(/^\//,"").split("/");u="/"+w.replace(/^\//,"").split("/").slice(f.length).join("/")}let C=Qe(e,{pathname:u}),b=Mt(C&&C.map(f=>Object.assign({},f,{params:Object.assign({},d,f.params),pathname:T([m,o.encodeLocation?o.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?m:T([m,o.encodeLocation?o.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),i,n,l);return a&&b?c.createElement(be.Provider,{value:{location:me({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:S.Pop}},b):b}function Vt(){let e=Wt(),a=ft(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},a),n?c.createElement("pre",{style:o},n):null,null)}const yt=c.createElement(Vt,null);class Ht extends c.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,n){return n.location!==a.location||n.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:n.error,location:n.location,revalidation:a.revalidation||n.revalidation}}componentDidCatch(a,n){console.error("React Router caught the following error during render",a,n)}render(){return this.state.error!==void 0?c.createElement(V.Provider,{value:this.props.routeContext},c.createElement(De.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bt(e){let{routeContext:a,match:n,children:l}=e,o=c.useContext(Le);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),c.createElement(V.Provider,{value:a},l)}function Mt(e,a,n,l){var o;if(a===void 0&&(a=[]),n===void 0&&(n=null),l===void 0&&(l=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=l)!=null&&i.v7_partialHydration&&a.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,d=(o=n)==null?void 0:o.errors;if(d!=null){let h=s.findIndex(I=>I.route.id&&d?.[I.route.id]!==void 0);h>=0||v(!1),s=s.slice(0,Math.min(s.length,h+1))}let m=!1,g=-1;if(n&&l&&l.v7_partialHydration)for(let h=0;h<s.length;h++){let I=s[h];if((I.route.HydrateFallback||I.route.hydrateFallbackElement)&&(g=h),I.route.id){let{loaderData:w,errors:u}=n,C=I.route.loader&&w[I.route.id]===void 0&&(!u||u[I.route.id]===void 0);if(I.route.lazy||C){m=!0,g>=0?s=s.slice(0,g+1):s=[s[0]];break}}}return s.reduceRight((h,I,w)=>{let u,C=!1,b=null,f=null;n&&(u=d&&I.route.id?d[I.route.id]:void 0,b=I.route.errorElement||yt,m&&(g<0&&w===0?(Ut("route-fallback"),C=!0,f=null):g===w&&(C=!0,f=I.route.hydrateFallbackElement||null)));let N=a.concat(s.slice(0,w+1)),he=()=>{let E;return u?E=b:C?E=f:I.route.Component?E=c.createElement(I.route.Component,null):I.route.element?E=I.route.element:E=h,c.createElement(Bt,{match:I,routeContext:{outlet:h,matches:N,isDataRoute:n!=null},children:E})};return n&&(I.route.ErrorBoundary||I.route.errorElement||w===0)?c.createElement(Ht,{location:n.location,revalidation:n.revalidation,component:b,error:u,children:he(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):he()},null)}var Fe=(function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e})(Fe||{}),Xe=(function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e})(Xe||{});function Zt(e){let a=c.useContext(Le);return a||v(!1),a}function Gt(e){let a=c.useContext(vt);return a||v(!1),a}function Rt(e){let a=c.useContext(V);return a||v(!1),a}function Oe(e){let a=Rt(),n=a.matches[a.matches.length-1];return n.route.id||v(!1),n.route.id}function Wt(){var e;let a=c.useContext(De),n=Gt(),l=Oe();return a!==void 0?a:(e=n.errors)==null?void 0:e[l]}function kt(){let{router:e}=Zt(Fe.UseNavigateStable),a=Oe(Xe.UseNavigateStable),n=c.useRef(!1);return Ye(()=>{n.current=!0}),c.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,me({fromRouteId:a},i)))},[e,a])}const Be={};function Ut(e,a,n){Be[e]||(Be[e]=!0)}function Pt(e,a){e?.v7_startTransition,e?.v7_relativeSplatPath}const Nt="startTransition",Me=je[Nt];function Dt(e){let{basename:a,children:n,initialEntries:l,initialIndex:o,future:i}=e,s=c.useRef();s.current==null&&(s.current=_e({initialEntries:l,initialIndex:o,v5Compat:!0}));let d=s.current,[m,g]=c.useState({action:d.action,location:d.location}),{v7_startTransition:h}=i||{},I=c.useCallback(w=>{h&&Me?Me(()=>g(w)):g(w)},[g,h]);return c.useLayoutEffect(()=>d.listen(I),[d,I]),c.useEffect(()=>Pt(i),[i]),c.createElement(Yt,{basename:a,children:n,location:m.location,navigationType:m.action,navigator:d,future:i})}function pe(e){v(!1)}function Yt(e){let{basename:a="/",children:n=null,location:l,navigationType:o=S.Pop,navigator:i,static:s=!1,future:d}=e;Ie()&&v(!1);let m=a.replace(/^\/*/,"/"),g=c.useMemo(()=>({basename:m,navigator:i,static:s,future:me({v7_relativeSplatPath:!1},d)}),[m,d,i,s]);typeof l=="string"&&(l=L(l));let{pathname:h="/",search:I="",hash:w="",state:u=null,key:C="default"}=l,b=c.useMemo(()=>{let f=Te(h,m);return f==null?null:{location:{pathname:f,search:I,hash:w,state:u,key:C},navigationType:o}},[m,h,I,w,u,C,o]);return b==null?null:c.createElement(x.Provider,{value:g},c.createElement(be.Provider,{children:n,value:b}))}function zt(e){let{children:a,location:n}=e;return Lt(Ee(a),n)}new Promise(()=>{});function Ee(e,a){a===void 0&&(a=[]);let n=[];return c.Children.forEach(e,(l,o)=>{if(!c.isValidElement(l))return;let i=[...a,o];if(l.type===c.Fragment){n.push.apply(n,Ee(l.props.children,i));return}l.type!==pe&&v(!1),!l.props.index||!l.props.children||v(!1);let s={id:l.props.id||i.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(s.children=Ee(l.props.children,i)),n.push(s)}),n}function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Se.apply(this,arguments)}function Ft(e,a){if(e==null)return{};var n={},l=Object.keys(e),o,i;for(i=0;i<l.length;i++)o=l[i],!(a.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Xt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ot(e,a){return e.button===0&&(!a||a==="_self")&&!Xt(e)}const jt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Jt="6";try{window.__reactRouterVersion=Jt}catch{}const _t=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$t=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ae=c.forwardRef(function(a,n){let{onClick:l,relative:o,reloadDocument:i,replace:s,state:d,target:m,to:g,preventScrollReset:h,viewTransition:I}=a,w=Ft(a,jt),{basename:u}=c.useContext(x),C,b=!1;if(typeof g=="string"&&$t.test(g)&&(C=g,_t))try{let E=new URL(window.location.href),ue=g.startsWith("//")?new URL(E.protocol+g):new URL(g),xe=Te(ue.pathname,u);ue.origin===E.origin&&xe!=null?g=xe+ue.search+ue.hash:b=!0}catch{}let f=Et(g,{relative:o}),N=Kt(g,{replace:s,state:d,target:m,preventScrollReset:h,relative:o,viewTransition:I});function he(E){l&&l(E),E.defaultPrevented||N(E)}return c.createElement("a",Se({},w,{href:C||f,onClick:b||i?l:he,ref:n,target:m}))});var Ze;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ze||(Ze={}));var Ge;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ge||(Ge={}));function Kt(e,a){let{target:n,replace:l,state:o,preventScrollReset:i,relative:s,viewTransition:d}=a===void 0?{}:a,m=St(),g=ge(),h=ze(e,{relative:s});return c.useCallback(I=>{if(Ot(I,n)){I.preventDefault();let w=l!==void 0?l:ve(g)===ve(h);m(e,{replace:w,state:o,preventScrollReset:i,relative:s,viewTransition:d})}},[g,m,h,l,o,n,e,i,s,d])}const Qt=""+new URL("readme-BX7PycqI.md",import.meta.url).href,qt="data:text/markdown;base64,IyBpYy10cmVlLXZpZXcKCgoKPCEtLSBBdXRvIEdlbmVyYXRlZCBCZWxvdyAtLT4KCgojIyBQcm9wZXJ0aWVzCgp8IFByb3BlcnR5ICAgICAgICAgICAgfCBBdHRyaWJ1dGUgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERlZmF1bHQgICAgIHwKfCAtLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLSB8CnwgYGhlYWRpbmdgICAgICAgICAgICB8IGBoZWFkaW5nYCAgICAgICAgICAgICB8IFRoZSBoZWFkaW5nIG9mIHRoZSB0cmVlIHZpZXcuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYHN0cmluZ2AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYCIiYCAgICAgICAgfAp8IGBzaXplYCAgICAgICAgICAgICAgfCBgc2l6ZWAgICAgICAgICAgICAgICAgfCBUaGUgc2l6ZSBvZiB0aGUgdHJlZSB2aWV3LiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGAibGFyZ2UiIFx8ICJtZWRpdW0iIFx8ICJzbWFsbCIgXHwgdW5kZWZpbmVkYCB8IGAibWVkaXVtImAgIHwKfCBgdGhlbWVgICAgICAgICAgICAgIHwgYHRoZW1lYCAgICAgICAgICAgICAgIHwgU2V0cyB0aGUgdGhlbWUgY29sb3IgdG8gdGhlIGRhcmsgb3IgbGlnaHQgdGhlbWUgY29sb3IuICJpbmhlcml0IiB3aWxsIHNldCB0aGUgY29sb3IgYmFzZWQgb24gdGhlIHN5c3RlbSBzZXR0aW5ncyBvciBpYy10aGVtZSBjb21wb25lbnQuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgImRhcmsiIFx8ICJpbmhlcml0IiBcfCAibGlnaHQiIFx8IHVuZGVmaW5lZGAgfCBgImluaGVyaXQiYCB8CnwgYHRyZWVJdGVtRGF0YWAgICAgICB8IC0tICAgICAgICAgICAgICAgICAgICB8IFRoZSBjb250ZW50IHdpdGhpbiB0aGUgdHJlZSB2aWV3IHRyZWUgaXRlbXMuIFRoaXMgd2lsbCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBzbG90dGVkIGNvbnRlbnQuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYEljVHJlZUl0ZW1PcHRpb25zW11gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYFtdYCAgICAgICAgfAp8IGB0cnVuY2F0ZUhlYWRpbmdgICAgfCBgdHJ1bmNhdGUtaGVhZGluZ2AgICAgfCBJZiBgdHJ1ZWAsIHRoZSB0cmVlIHZpZXcgaGVhZGluZyB3aWxsIGJlIHRydW5jYXRlZCBpbnN0ZWFkIG9mIHRleHQgd3JhcHBpbmcuIFdoZW4gdXNlZCBvbiBzbWFsbCBkZXZpY2VzLCB0aGlzIHByb3Agd2lsbCBiZSBvdmVycmlkZGVuIGFuZCBoZWFkaW5ncyB3aWxsIGJlIHNldCB0byB0ZXh0LXdyYXAuICAgICAgICB8IGBib29sZWFuYCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGBmYWxzZWAgICAgIHwKfCBgdHJ1bmNhdGVUcmVlSXRlbXNgIHwgYHRydW5jYXRlLXRyZWUtaXRlbXNgIHwgSWYgYHRydWVgLCB0cmVlIGl0ZW1zIHdpbGwgYmUgdHJ1bmNhdGVkLCB1bmxlc3MgdGhleSBhcmUgaW5kaXZpZHVhbGx5IG92ZXJyaWRkZW4uIFdoZW4gdXNlZCBvbiBzbWFsbCBkZXZpY2VzLCB0aGlzIHByb3Agd2lsbCBiZSBvdmVycmlkZGVuIGFuZCB0cmVlLWl0ZW1zIHdpbGwgYmUgc2V0IHRvIHRleHQtd3JhcC4gfCBgYm9vbGVhbmAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgZmFsc2VgICAgICB8CgoKIyMgU2xvdHMKCnwgU2xvdCAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAp8IC0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwKfCBgImhlYWRpbmciYCB8IENvbnRlbnQgaXMgc2V0IGFzIHRoZSB0cmVlIHZpZXcgaGVhZGluZy4gICAgICB8CnwgYCJpY29uImAgICAgfCBDb250ZW50IGlzIHBsYWNlZCB0byB0aGUgbGVmdCBvZiB0aGUgaGVhZGluZy4gfAoKCiMjIENTUyBDdXN0b20gUHJvcGVydGllcwoKfCBOYW1lICAgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICB8CnwgLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfAp8IGAtLXRyZWUtdmlldy13aWR0aGAgfCBXaWR0aCBvZiB0aGUgdHJlZSB2aWV3IHwKCgojIyBEZXBlbmRlbmNpZXMKCiMjIyBEZXBlbmRzIG9uCgotIFtpYy10b29sdGlwXSguLi8uLi8uLi8uLi93ZWItY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9pYy10b29sdGlwKQotIFtpYy10eXBvZ3JhcGh5XSguLi8uLi8uLi8uLi93ZWItY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9pYy10eXBvZ3JhcGh5KQoKIyMjIEdyYXBoCmBgYG1lcm1haWQKZ3JhcGggVEQ7CiAgaWMtdHJlZS12aWV3IC0tPiBpYy10b29sdGlwCiAgaWMtdHJlZS12aWV3IC0tPiBpYy10eXBvZ3JhcGh5CiAgaWMtdG9vbHRpcCAtLT4gaWMtdHlwb2dyYXBoeQogIHN0eWxlIGljLXRyZWUtdmlldyBmaWxsOiNmOWYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjRweApgYGAKCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCgo=",ea={title:"React Components/Tree view",component:p,parameters:{componentAPI:{data:qt+Qt}}},y={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",treeItemData:[{label:"Coffee"},{label:"Tea"},{label:"Hot chocolate"}]})),name:"Basic"},D={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu"},t.createElement(r,{label:"Coffee"}),t.createElement(r,{label:"Tea"}),t.createElement(r,{label:"Hot chocolate"}))),name:"Basic - slotted"},Y={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",treeItemData:[{label:"Coffee",children:[{label:"Americano",children:[{label:"With milk"}]},{label:"Latte"},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai"}]},{label:"Hot chocolate"}]})),name:"Nested"},z={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu"},t.createElement(r,{label:"Coffee"},t.createElement(r,{label:"Americano"}),t.createElement(r,{label:"Latte"}),t.createElement(r,{label:"Espresso"})),t.createElement(r,{label:"Tea"},t.createElement(r,{label:"Earl Grey"}),t.createElement(r,{label:"Chai"})),t.createElement(r,{label:"Hot chocolate"}))),name:"Nested - slotted"},F={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",treeItemData:[{label:"Coffee",treeItemId:"coffee-1"},{label:"Tea",treeItemId:"tea-1"},{label:"Hot chocolate",treeItemId:"hot-chocolate-1"}]})),name:"Custom IDs with Tree Item Data"},X={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu"},t.createElement(r,{label:"Coffee",treeItemId:"coffee-1"},t.createElement(r,{label:"Americano",treeItemId:"americano-1"},t.createElement(r,{label:"With milk",treeItemId:"with-milk-1"}))),t.createElement(r,{label:"Tea",treeItemId:"tea-1"}))),name:"Custom IDs with Slotted"},O={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu"},t.createElement(r,{label:"Coffee",id:"coffee-1",onIcTreeItemSelected:e=>console.log(e.detail.id)}),t.createElement(r,{label:"Tea",id:"tea-1",onIcTreeItemSelected:e=>console.log(e.detail.id)}),t.createElement(r,{label:"Hot chocolate",id:"hot-chocolate-1",onIcTreeItemSelected:e=>console.log(e.detail.id)}))),name:"Custom IDs using ID"},j={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",treeItemData:[{label:"Coffee",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',children:[{label:"Americano"},{label:"Latte",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>'},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai"}]},{label:"Hot chocolate"}]},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})))),name:"With icons"},J={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(r,{label:"Coffee"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"})),t.createElement(r,{label:"Americano"}),t.createElement(r,{label:"Latte"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}))),t.createElement(r,{label:"Espresso"})),t.createElement(r,{label:"Tea"},t.createElement(r,{label:"Earl Grey"}),t.createElement(r,{label:"Chai"})),t.createElement(r,{label:"Hot chocolate"}))),name:"With icons - slotted"},H={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",size:"small",treeItemData:[{label:"Coffee",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',children:[{label:"Americano"},{label:"Latte",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>'},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai"}]},{label:"Hot chocolate"}]},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})))),name:"Small"},_={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",size:"small"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(r,{label:"Coffee"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"})),t.createElement(r,{label:"Americano"}),t.createElement(r,{label:"Latte"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}))),t.createElement(r,{label:"Espresso"})),t.createElement(r,{label:"Tea"},t.createElement(r,{label:"Earl Grey"}),t.createElement(r,{label:"Chai"})),t.createElement(r,{label:"Hot chocolate"}))),name:"Small - slotted"},$={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",size:"large",treeItemData:[{label:"Coffee",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',children:[{label:"Americano"},{label:"Latte",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>'},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai"}]},{label:"Hot chocolate"}]},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})))),name:"Large"},K={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",size:"large"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(r,{label:"Coffee"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"})),t.createElement(r,{label:"Americano"}),t.createElement(r,{label:"Latte"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}))),t.createElement(r,{label:"Espresso"})),t.createElement(r,{label:"Tea"},t.createElement(r,{label:"Earl Grey"}),t.createElement(r,{label:"Chai"})),t.createElement(r,{label:"Hot chocolate"}))),name:"Large - slotted"},B={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",treeItemData:[{label:"Coffee",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',children:[{label:"Americano"},{label:"Latte",disabled:!0,icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>'},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai",disabled:!0}]},{label:"Hot chocolate",disabled:!0}]},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})))),name:"Disabled tree items"},Q={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(r,{label:"Coffee"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"})),t.createElement(r,{label:"Americano"}),t.createElement(r,{label:"Latte",disabled:!0},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}))),t.createElement(r,{label:"Espresso"})),t.createElement(r,{label:"Tea"},t.createElement(r,{label:"Earl Grey"}),t.createElement(r,{label:"Chai",disabled:!0})),t.createElement(r,{label:"Hot chocolate",disabled:!0}))),name:"Disabled tree items - slotted"},M={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",truncateTreeItems:!0},t.createElement(r,null,t.createElement("a",{slot:"router-item",href:"/"},"Hot chocolate with marshmallows and whipped cream")),t.createElement(r,null,t.createElement("a",{slot:"router-item",href:"/tea"},"Tea")),t.createElement(r,{label:"Coffee"}))),name:"Router item"},Z={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,null,t.createElement(de,{variant:"subtitle-large",slot:"heading"},"Menu"),t.createElement(r,null,t.createElement(de,{slot:"label"},"Coffee")),t.createElement(r,{label:"Tea"}),t.createElement(r,{label:"Hot chocolate"}))),name:"Slotted content"},G={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",treeItemData:[{label:"Coffee",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',children:[{label:"Americano"},{label:"Latte with extra milk and sugar"},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai"}]},{label:"Hot chocolate with marshmallows"}]},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})))),name:"Max content"},q={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu with nested options"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(r,{label:"Coffee"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"})),t.createElement(r,{label:"Americano"}),t.createElement(r,{label:"Latte with extra milk and sugar"}),t.createElement(r,{label:"Espresso"})),t.createElement(r,{label:"Tea"},t.createElement(r,{label:"Earl Grey"}),t.createElement(r,{label:"Chai"})),t.createElement(r,{label:"Hot chocolate with marshmallows"}))),name:"Max content - slotted"},R={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",truncateTreeItems:!0,truncateHeading:!0,treeItemData:[{label:"Coffee",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',children:[{label:"Americano"},{label:"Latte with extra milk and sugar"},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Earl Grey with truncation false",truncateTreeItem:!1},{label:"Chai"}]},{label:"Hot chocolate with marshmallows"}]},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})))),name:"Truncation behaviour"},ee={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu with nested options",truncateHeading:!0,truncateTreeItems:!0},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(r,{label:"Coffee",expanded:!0},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"})),t.createElement(r,{label:"Americano"}),t.createElement(r,{label:"Latte with extra milk and sugar"}),t.createElement(r,{label:"Espresso"})),t.createElement(r,{label:"Tea",expanded:!0},t.createElement(r,{label:"Earl Grey"}),t.createElement(r,{label:"Earl Grey with truncation false",truncateTreeItem:!1}),t.createElement(r,{label:"Chai"})),t.createElement(r,{label:"Hot chocolate with marshmallows"}))),name:"Truncation behaviour - slotted"},W={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",treeItemData:[{label:"Coffee"},{label:"Tea"},{label:"Hot chocolate",selected:!0}]})),name:"Selected tree item"},te={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu"},t.createElement(r,{label:"Coffee"}),t.createElement(r,{label:"Tea"}),t.createElement(r,{label:"Hot chocolate",selected:!0}))),name:"Selected tree item - slotted"},k={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",treeItemData:[{label:"Coffee",href:"#"},{label:"Tea",href:"#",selected:!0},{label:"Hot chocolate",disabled:!0,href:"#"}]})),name:"Link"},ae={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu"},t.createElement(r,{label:"Coffee",href:"#"}),t.createElement(r,{label:"Tea",selected:!0,href:"#"}),t.createElement(r,{label:"Hot chocolate",disabled:!0,href:"#"}))),name:"Link - slotted"},U={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{onIcTreeItemExpanded:e=>console.log("onIcTreeItemExpanded: ",e.detail),heading:"Menu",treeItemData:[{label:"Coffee",expanded:!0,children:[{label:"Americano",expanded:!0,children:[{label:"With milk"}]},{label:"Latte"},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai"}]},{label:"Hot chocolate"}]})),name:"Expanded"},ne={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu",onIcTreeItemExpanded:e=>console.log("[Slotted] onIcTreeItemExpanded: ",e.detail)},t.createElement(r,{label:"Coffee",expanded:!0},t.createElement(r,{label:"Americano",expanded:!0},t.createElement(r,{label:"With milk"})),t.createElement(r,{label:"Latte"}),t.createElement(r,{label:"Espresso"})),t.createElement(r,{label:"Tea"},t.createElement(r,{label:"Earl Grey"}),t.createElement(r,{label:"Chai"})),t.createElement(r,{label:"Hot chocolate"}))),name:"Expanded - slotted"},le={render:()=>{const[e,a]=c.useState([{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}]),n=()=>{a([{label:"Item 5"},{label:"Item 6"}])};return t.createElement(t.Fragment,null,t.createElement(p,{heading:"Updating options",treeItemData:e}),t.createElement("br",null),t.createElement(Re,{onClick:n},"Update"))},name:"Updating options"},re={render:()=>{const[e,a]=c.useState([{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}]),n=()=>{a([{label:"Item 5"},{label:"Item 6"}])};return t.createElement(t.Fragment,null,t.createElement(p,{heading:"Updating options"},e.map((l,o)=>t.createElement(r,{key:o,label:l.label}))),t.createElement("br",null),t.createElement(Re,{onClick:n},"Update"))},name:"Updating options - slotted"},oe={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(Je,{target:"next-content",inline:!0}),t.createElement(p,{heading:"Menu"},t.createElement(r,{label:"Coffee"},t.createElement(r,{label:"Americano"},t.createElement(r,{label:"With milk"})),t.createElement(r,{label:"Latte"}),t.createElement(r,{label:"Espresso"})),t.createElement(r,{label:"Tea"},t.createElement(r,{label:"Earl Grey"}),t.createElement(r,{label:"Chai"})),t.createElement(r,{label:"Hot chocolate"}))),name:"Nested skip link"},ie={render:()=>{const[e,a]=c.useState([]);return c.useEffect(()=>{const n=[{label:"PG Tips"},{label:"Yorkshire Tea"},{label:"Earl Grey"}];setTimeout(()=>{a(n)},3e3)},[]),t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu"},t.createElement(r,{label:"Coffee"}),t.createElement(r,{label:"Tea",expanded:e.length},e.map(n=>t.createElement(r,{label:n.label,key:n.label}))),t.createElement(r,{label:"Hot chocolate"})))},name:"Adding child nodes"},se={render:()=>{const e=ge(),a=n=>e.pathname===n;return t.createElement("div",{style:{display:"flex",flexDirection:"row",gap:"16px"}},t.createElement("div",{style:{width:"250px"}},t.createElement(p,{heading:"Menu"},t.createElement(r,{selected:a("/")},t.createElement(Ae,{slot:"router-item",to:"/"},"Home")),t.createElement(r,{selected:a("/coffee")},t.createElement(Ae,{slot:"router-item",to:"/coffee"},"Coffee")),t.createElement(r,{selected:a("/tea")},t.createElement(Ae,{slot:"router-item",to:"/tea"},"Tea")))),t.createElement("div",{style:{marginTop:"16px"}},t.createElement(zt,null,t.createElement(pe,{path:"/",element:t.createElement(de,null,"Home Page")}),t.createElement(pe,{path:"/coffee",element:t.createElement(de,null,"Coffee Page")}),t.createElement(pe,{path:"/tea",element:t.createElement(de,null,"Tea Page")}))))},name:"React Router",decorators:[e=>t.createElement(Dt,{initialEntries:["/"]},t.createElement(e,null))]},ta={heading:"Menu",size:"medium",truncateTreeItems:!1,treeItemDisabled:!1,treeItemHref:"",treeItemId:"",treeItemLabel:"Coffee",treeItemSelected:!1,showTreeItemIcon:!1,theme:"inherit"},ce={render:e=>t.createElement(p,{heading:e.heading,size:e.size,theme:e.theme,truncateTreeItems:e.truncateTreeItems,treeItemData:[{label:e.treeItemLabel,href:e.treeItemHref,disabled:e.treeItemDisabled,selected:e.treeItemSelected,icon:e.showTreeItemIcon&&'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',treeItemId:e.treeItemId},{label:"Tea"},{label:"Hot chocolate"}]}),args:ta,argTypes:{size:{options:["medium","small","large"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},aa={heading:"Menu",size:"medium",showIcon:!1,truncateHeading:!1,truncateTreeItems:!1,treeItemDisabled:!1,treeItemHref:"",treeItemId:"",treeItemLabel:"Coffee",treeItemSelected:!1,showTreeItemIcon:!1,theme:"inherit"},P={render:e=>t.createElement(p,{heading:e.heading,size:e.size,theme:e.theme,truncateHeading:e.truncateHeading,truncateTreeItems:e.truncateTreeItems},e.showIcon&&t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(r,{label:e.treeItemLabel,disabled:e.treeItemDisabled,selected:e.treeItemSelected,href:e.treeItemHref,treeItemId:e.treeItemId},e.showTreeItemIcon&&t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}))),t.createElement(r,{label:"Tea"}),t.createElement(r,{label:"Hot chocolate"})),args:aa,argTypes:{size:{options:["medium","small","large"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground - slotted"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Use the tree view component to display hierarchical data in a tree structure. The tree view component is useful for displaying nested data, such as a file system or a category hierarchy.

Click the 'Component API' tab to view all the available attributes, events and slots for tree view.

To use the tree view component, import \`@ukic/canary-react\` into your application.`,...y.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:"Small and large styling will be passed down from tree view to tree items and nested tree items.",...H.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"Individual tree-items can be disabled using the `disabled` prop.",...B.parameters?.docs?.description}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"Custom links and router-items can be passed in using the `router-item` slot.",...M.parameters?.docs?.description}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"Custom content can be passed to both the tree view (using the `heading` slot) and the tree-item (using the `label` slot).",...Z.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:"When the heading/label exceeds the width of the container, the text will wrap unless `truncateTreeItem` is set to `true`.",...G.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"When `truncateTreeItems` or `truncateHeading` are set to `true`, and the heading/label exceeds the width of the container, they will be truncated with an ellipsis.",...R.parameters?.docs?.description}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
}`,...ee.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Utilising the `selected` attribute on `IcTreeItem` will turn it into a controlled component, displaying the selected state when set to `true`.",...W.parameters?.docs?.description}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
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
}`,...te.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"When setting the `href` attribute, the tree-item will function as a link.",...k.parameters?.docs?.description}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
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
}`,...ae.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:"An example with the `expanded` prop set to `true` on a parent tree item.",...U.parameters?.docs?.description}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
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
}`,...ne.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
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
}`,...le.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
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
}`,...re.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
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
}`,...oe.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
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
}`,...ie.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
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
}`,...se.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
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
}`,...ce.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:'Go to the <ic-link href="/?path=/story/react-components-tree-view--playground">separate page for the playground example</ic-link> to view the prop controls.',...P.parameters?.docs?.description}}};const na=["Basic","BasicSlotted","Nested","NestedSlotted","CustomIDs","SlottedCustomIds","CustomID","WithIcons","WithIconsSlotted","Small","SmallSlotted","Large","LargeSlotted","DisabledTreeItems","DisabledTreeItemsSlotted","RouterItem","SlottedContent","MaxContent","MaxContentSlotted","TruncationBehaviour","TruncationBehaviourSlotted","SelectedTreeItem","SelectedTreeItemSlotted","Link","LinkSlotted","Expanded","ExpandedSlotted","UpdatingOptions","UpdatingOptionsSlotted","WithNestedSkipLink","AddChildNodes","ReactRouter","Playground","PlaygroundSlotted"],sa=Object.freeze(Object.defineProperty({__proto__:null,AddChildNodes:ie,Basic:y,BasicSlotted:D,CustomID:O,CustomIDs:F,DisabledTreeItems:B,DisabledTreeItemsSlotted:Q,Expanded:U,ExpandedSlotted:ne,Large:$,LargeSlotted:K,Link:k,LinkSlotted:ae,MaxContent:G,MaxContentSlotted:q,Nested:Y,NestedSlotted:z,Playground:ce,PlaygroundSlotted:P,ReactRouter:se,RouterItem:M,SelectedTreeItem:W,SelectedTreeItemSlotted:te,SlottedContent:Z,SlottedCustomIds:X,Small:H,SmallSlotted:_,TruncationBehaviour:R,TruncationBehaviourSlotted:ee,UpdatingOptions:le,UpdatingOptionsSlotted:re,WithIcons:j,WithIconsSlotted:J,WithNestedSkipLink:oe,__namedExportsOrder:na,default:ea},Symbol.toStringTag,{value:"Module"}));export{sa as I};
