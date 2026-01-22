import{r as c,v as Oe,R as t,a as ce,I as Ge,w as je}from"./iframe-D9Iy0dav.js";import"./index-CefhmkD1.js";import{n as C,o}from"./components-BAJoyfxF.js";import{S as A}from"./slottedSVG-BDKVYUfQ.js";function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},pe.apply(this,arguments)}var S;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(S||(S={}));function Je(e){e===void 0&&(e={});let{initialEntries:a=["/"],initialIndex:n,v5Compat:l=!1}=e,r;r=a.map((u,p)=>h(u,typeof u=="string"?null:u.state,p===0?"default":void 0));let i=m(n??r.length-1),s=S.Pop,d=null;function m(u){return Math.min(Math.max(u,0),r.length-1)}function g(){return r[i]}function h(u,p,b){p===void 0&&(p=null);let f=$e(r?g().pathname:"/",u,p,b);return Ce(f.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(u)),f}function I(u){return typeof u=="string"?u:Ae(u)}return{get index(){return i},get action(){return s},get location(){return g()},createHref:I,createURL(u){return new URL(I(u),"http://localhost")},encodeLocation(u){let p=typeof u=="string"?L(u):u;return{pathname:p.pathname||"",search:p.search||"",hash:p.hash||""}},push(u,p){s=S.Push;let b=h(u,p);i+=1,r.splice(i,r.length,b),l&&d&&d({action:s,location:b,delta:1})},replace(u,p){s=S.Replace;let b=h(u,p);r[i]=b,l&&d&&d({action:s,location:b,delta:0})},go(u){s=S.Pop;let p=m(i+u),b=r[p];i=p,d&&d({action:s,location:b,delta:u})},listen(u){return d=u,()=>{d=null}}}}function v(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function Ce(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function _e(){return Math.random().toString(36).substr(2,8)}function $e(e,a,n,l){return n===void 0&&(n=null),pe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof a=="string"?L(a):a,{state:n,key:a&&a.key||l||_e()})}function Ae(e){let{pathname:a="/",search:n="",hash:l=""}=e;return n&&n!=="?"&&(a+=n.charAt(0)==="?"?n:"?"+n),l&&l!=="#"&&(a+=l.charAt(0)==="#"?l:"#"+l),a}function L(e){let a={};if(e){let n=e.indexOf("#");n>=0&&(a.hash=e.substr(n),e=e.substr(0,n));let l=e.indexOf("?");l>=0&&(a.search=e.substr(l),e=e.substr(0,l)),e&&(a.pathname=e)}return a}var xe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xe||(xe={}));function Ke(e,a,n){return n===void 0&&(n="/"),Qe(e,a,n)}function Qe(e,a,n,l){let r=typeof a=="string"?L(a):a,i=Se(r.pathname||"/",n);if(i==null)return null;let s=Re(e);qe(s);let d=null;for(let m=0;d==null&&m<s.length;++m){let g=mt(i);d=st(s[m],g)}return d}function Re(e,a,n,l){a===void 0&&(a=[]),n===void 0&&(n=[]),l===void 0&&(l="");let r=(i,s,d)=>{let m={relativePath:d===void 0?i.path||"":d,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};m.relativePath.startsWith("/")&&(v(m.relativePath.startsWith(l),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(l.length));let g=T([l,m.relativePath]),h=n.concat(m);i.children&&i.children.length>0&&(v(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Re(i.children,a,h,g)),!(i.path==null&&!i.index)&&a.push({path:g,score:ot(g,i.index),routesMeta:h})};return e.forEach((i,s)=>{var d;if(i.path===""||!((d=i.path)!=null&&d.includes("?")))r(i,s);else for(let m of We(i.path))r(i,s,m)}),a}function We(e){let a=e.split("/");if(a.length===0)return[];let[n,...l]=a,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(l.length===0)return r?[i,""]:[i];let s=We(l.join("/")),d=[];return d.push(...s.map(m=>m===""?i:[i,m].join("/"))),r&&d.push(...s),d.map(m=>e.startsWith("/")&&m===""?"/":m)}function qe(e){e.sort((a,n)=>a.score!==n.score?n.score-a.score:it(a.routesMeta.map(l=>l.childrenIndex),n.routesMeta.map(l=>l.childrenIndex)))}const et=/^:[\w-]+$/,tt=3,at=2,nt=1,lt=10,rt=-2,Ve=e=>e==="*";function ot(e,a){let n=e.split("/"),l=n.length;return n.some(Ve)&&(l+=rt),a&&(l+=at),n.filter(r=>!Ve(r)).reduce((r,i)=>r+(et.test(i)?tt:i===""?nt:lt),l)}function it(e,a){return e.length===a.length&&e.slice(0,-1).every((l,r)=>l===a[r])?e[e.length-1]-a[a.length-1]:0}function st(e,a,n){let{routesMeta:l}=e,r={},i="/",s=[];for(let d=0;d<l.length;++d){let m=l[d],g=d===l.length-1,h=i==="/"?a:a.slice(i.length)||"/",I=ct({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},h),w=m.route;if(!I)return null;Object.assign(r,I.params),s.push({params:r,pathname:T([i,I.pathname]),pathnameBase:pt(T([i,I.pathnameBase])),route:w}),I.pathnameBase!=="/"&&(i=T([i,I.pathnameBase]))}return s}function ct(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,l]=dt(e.path,e.caseSensitive,e.end),r=a.match(n);if(!r)return null;let i=r[0],s=i.replace(/(.)\/+$/,"$1"),d=r.slice(1);return{params:l.reduce((g,h,I)=>{let{paramName:w,isOptional:u}=h;if(w==="*"){let b=d[I]||"";s=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const p=d[I];return u&&!p?g[w]=void 0:g[w]=(p||"").replace(/%2F/g,"/"),g},{}),pathname:i,pathnameBase:s,pattern:e}}function dt(e,a,n){a===void 0&&(a=!1),n===void 0&&(n=!0),Ce(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let l=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,d,m)=>(l.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(l.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,a?void 0:"i"),l]}function mt(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Ce(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+a+").")),e}}function Se(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let n=a.endsWith("/")?a.length-1:a.length,l=e.charAt(n);return l&&l!=="/"?null:e.slice(n)||"/"}const It=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gt=e=>It.test(e);function ht(e,a){a===void 0&&(a="/");let{pathname:n,search:l="",hash:r=""}=typeof e=="string"?L(e):e,i;if(n)if(gt(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Ce(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=ye(n.substring(1),"/"):i=ye(n,a)}else i=a;return{pathname:i,search:Ct(l),hash:wt(r)}}function ye(e,a){let n=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function be(e,a,n,l){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+a+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ut(e){return e.filter((a,n)=>n===0||a.route.path&&a.route.path.length>0)}function ke(e,a){let n=ut(e);return a?n.map((l,r)=>r===n.length-1?l.pathname:l.pathnameBase):n.map(l=>l.pathnameBase)}function Ue(e,a,n,l){l===void 0&&(l=!1);let r;typeof e=="string"?r=L(e):(r=pe({},e),v(!r.pathname||!r.pathname.includes("?"),be("?","pathname","search",r)),v(!r.pathname||!r.pathname.includes("#"),be("#","pathname","hash",r)),v(!r.search||!r.search.includes("#"),be("#","search","hash",r)));let i=e===""||r.pathname==="",s=i?"/":r.pathname,d;if(s==null)d=n;else{let I=a.length-1;if(!l&&s.startsWith("..")){let w=s.split("/");for(;w[0]==="..";)w.shift(),I-=1;r.pathname=w.join("/")}d=I>=0?a[I]:"/"}let m=ht(r,d),g=s&&s!=="/"&&s.endsWith("/"),h=(i||s===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(g||h)&&(m.pathname+="/"),m}const T=e=>e.join("/").replace(/\/\/+/g,"/"),pt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ct=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wt=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bt(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Pe=["post","put","patch","delete"];new Set(Pe);const ft=["get",...Pe];new Set(ft);function de(){return de=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},de.apply(this,arguments)}const Te=c.createContext(null),At=c.createContext(null),x=c.createContext(null),we=c.createContext(null),V=c.createContext({outlet:null,matches:[],isDataRoute:!1}),Ne=c.createContext(null);function vt(e,a){let{relative:n}=a===void 0?{}:a;me()||v(!1);let{basename:l,navigator:r}=c.useContext(x),{hash:i,pathname:s,search:d}=Ye(e,{relative:n}),m=s;return l!=="/"&&(m=s==="/"?l:T([l,s])),r.createHref({pathname:m,search:d,hash:i})}function me(){return c.useContext(we)!=null}function Ie(){return me()||v(!1),c.useContext(we).location}function De(e){c.useContext(x).static||c.useLayoutEffect(e)}function Et(){let{isDataRoute:e}=c.useContext(V);return e?Wt():St()}function St(){me()||v(!1);let e=c.useContext(Te),{basename:a,future:n,navigator:l}=c.useContext(x),{matches:r}=c.useContext(V),{pathname:i}=Ie(),s=JSON.stringify(ke(r,n.v7_relativeSplatPath)),d=c.useRef(!1);return De(()=>{d.current=!0}),c.useCallback(function(g,h){if(h===void 0&&(h={}),!d.current)return;if(typeof g=="number"){l.go(g);return}let I=Ue(g,JSON.parse(s),i,h.relative==="path");e==null&&a!=="/"&&(I.pathname=I.pathname==="/"?a:T([a,I.pathname])),(h.replace?l.replace:l.push)(I,h.state,h)},[a,l,s,i,e])}function Ye(e,a){let{relative:n}=a===void 0?{}:a,{future:l}=c.useContext(x),{matches:r}=c.useContext(V),{pathname:i}=Ie(),s=JSON.stringify(ke(r,l.v7_relativeSplatPath));return c.useMemo(()=>Ue(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Tt(e,a){return Lt(e,a)}function Lt(e,a,n,l){me()||v(!1);let{navigator:r}=c.useContext(x),{matches:i}=c.useContext(V),s=i[i.length-1],d=s?s.params:{};s&&s.pathname;let m=s?s.pathnameBase:"/";s&&s.route;let g=Ie(),h;if(a){var I;let f=typeof a=="string"?L(a):a;m==="/"||(I=f.pathname)!=null&&I.startsWith(m)||v(!1),h=f}else h=g;let w=h.pathname||"/",u=w;if(m!=="/"){let f=m.replace(/^\//,"").split("/");u="/"+w.replace(/^\//,"").split("/").slice(f.length).join("/")}let p=Ke(e,{pathname:u}),b=Bt(p&&p.map(f=>Object.assign({},f,{params:Object.assign({},d,f.params),pathname:T([m,r.encodeLocation?r.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?m:T([m,r.encodeLocation?r.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),i,n,l);return a&&b?c.createElement(we.Provider,{value:{location:de({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:S.Pop}},b):b}function xt(){let e=Rt(),a=bt(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},a),n?c.createElement("pre",{style:r},n):null,null)}const Vt=c.createElement(xt,null);class yt extends c.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,n){return n.location!==a.location||n.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:n.error,location:n.location,revalidation:a.revalidation||n.revalidation}}componentDidCatch(a,n){console.error("React Router caught the following error during render",a,n)}render(){return this.state.error!==void 0?c.createElement(V.Provider,{value:this.props.routeContext},c.createElement(Ne.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ht(e){let{routeContext:a,match:n,children:l}=e,r=c.useContext(Te);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),c.createElement(V.Provider,{value:a},l)}function Bt(e,a,n,l){var r;if(a===void 0&&(a=[]),n===void 0&&(n=null),l===void 0&&(l=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=l)!=null&&i.v7_partialHydration&&a.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,d=(r=n)==null?void 0:r.errors;if(d!=null){let h=s.findIndex(I=>I.route.id&&d?.[I.route.id]!==void 0);h>=0||v(!1),s=s.slice(0,Math.min(s.length,h+1))}let m=!1,g=-1;if(n&&l&&l.v7_partialHydration)for(let h=0;h<s.length;h++){let I=s[h];if((I.route.HydrateFallback||I.route.hydrateFallbackElement)&&(g=h),I.route.id){let{loaderData:w,errors:u}=n,p=I.route.loader&&w[I.route.id]===void 0&&(!u||u[I.route.id]===void 0);if(I.route.lazy||p){m=!0,g>=0?s=s.slice(0,g+1):s=[s[0]];break}}}return s.reduceRight((h,I,w)=>{let u,p=!1,b=null,f=null;n&&(u=d&&I.route.id?d[I.route.id]:void 0,b=I.route.errorElement||Vt,m&&(g<0&&w===0?(kt("route-fallback"),p=!0,f=null):g===w&&(p=!0,f=I.route.hydrateFallbackElement||null)));let N=a.concat(s.slice(0,w+1)),ge=()=>{let E;return u?E=b:p?E=f:I.route.Component?E=c.createElement(I.route.Component,null):I.route.element?E=I.route.element:E=h,c.createElement(Ht,{match:I,routeContext:{outlet:h,matches:N,isDataRoute:n!=null},children:E})};return n&&(I.route.ErrorBoundary||I.route.errorElement||w===0)?c.createElement(yt,{location:n.location,revalidation:n.revalidation,component:b,error:u,children:ge(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):ge()},null)}var ze=(function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e})(ze||{}),Fe=(function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e})(Fe||{});function Mt(e){let a=c.useContext(Te);return a||v(!1),a}function Zt(e){let a=c.useContext(At);return a||v(!1),a}function Gt(e){let a=c.useContext(V);return a||v(!1),a}function Xe(e){let a=Gt(),n=a.matches[a.matches.length-1];return n.route.id||v(!1),n.route.id}function Rt(){var e;let a=c.useContext(Ne),n=Zt(),l=Xe();return a!==void 0?a:(e=n.errors)==null?void 0:e[l]}function Wt(){let{router:e}=Mt(ze.UseNavigateStable),a=Xe(Fe.UseNavigateStable),n=c.useRef(!1);return De(()=>{n.current=!0}),c.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,de({fromRouteId:a},i)))},[e,a])}const He={};function kt(e,a,n){He[e]||(He[e]=!0)}function Ut(e,a){e?.v7_startTransition,e?.v7_relativeSplatPath}const Pt="startTransition",Be=Oe[Pt];function Nt(e){let{basename:a,children:n,initialEntries:l,initialIndex:r,future:i}=e,s=c.useRef();s.current==null&&(s.current=Je({initialEntries:l,initialIndex:r,v5Compat:!0}));let d=s.current,[m,g]=c.useState({action:d.action,location:d.location}),{v7_startTransition:h}=i||{},I=c.useCallback(w=>{h&&Be?Be(()=>g(w)):g(w)},[g,h]);return c.useLayoutEffect(()=>d.listen(I),[d,I]),c.useEffect(()=>Ut(i),[i]),c.createElement(Dt,{basename:a,children:n,location:m.location,navigationType:m.action,navigator:d,future:i})}function ue(e){v(!1)}function Dt(e){let{basename:a="/",children:n=null,location:l,navigationType:r=S.Pop,navigator:i,static:s=!1,future:d}=e;me()&&v(!1);let m=a.replace(/^\/*/,"/"),g=c.useMemo(()=>({basename:m,navigator:i,static:s,future:de({v7_relativeSplatPath:!1},d)}),[m,d,i,s]);typeof l=="string"&&(l=L(l));let{pathname:h="/",search:I="",hash:w="",state:u=null,key:p="default"}=l,b=c.useMemo(()=>{let f=Se(h,m);return f==null?null:{location:{pathname:f,search:I,hash:w,state:u,key:p},navigationType:r}},[m,h,I,w,u,p,r]);return b==null?null:c.createElement(x.Provider,{value:g},c.createElement(we.Provider,{children:n,value:b}))}function Yt(e){let{children:a,location:n}=e;return Tt(ve(a),n)}new Promise(()=>{});function ve(e,a){a===void 0&&(a=[]);let n=[];return c.Children.forEach(e,(l,r)=>{if(!c.isValidElement(l))return;let i=[...a,r];if(l.type===c.Fragment){n.push.apply(n,ve(l.props.children,i));return}l.type!==ue&&v(!1),!l.props.index||!l.props.children||v(!1);let s={id:l.props.id||i.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(s.children=ve(l.props.children,i)),n.push(s)}),n}function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Ee.apply(this,arguments)}function zt(e,a){if(e==null)return{};var n={},l=Object.keys(e),r,i;for(i=0;i<l.length;i++)r=l[i],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Ft(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xt(e,a){return e.button===0&&(!a||a==="_self")&&!Ft(e)}const Ot=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],jt="6";try{window.__reactRouterVersion=jt}catch{}const Jt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_t=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=c.forwardRef(function(a,n){let{onClick:l,relative:r,reloadDocument:i,replace:s,state:d,target:m,to:g,preventScrollReset:h,viewTransition:I}=a,w=zt(a,Ot),{basename:u}=c.useContext(x),p,b=!1;if(typeof g=="string"&&_t.test(g)&&(p=g,Jt))try{let E=new URL(window.location.href),he=g.startsWith("//")?new URL(E.protocol+g):new URL(g),Le=Se(he.pathname,u);he.origin===E.origin&&Le!=null?g=Le+he.search+he.hash:b=!0}catch{}let f=vt(g,{relative:r}),N=$t(g,{replace:s,state:d,target:m,preventScrollReset:h,relative:r,viewTransition:I});function ge(E){l&&l(E),E.defaultPrevented||N(E)}return c.createElement("a",Ee({},w,{href:p||f,onClick:b||i?l:ge,ref:n,target:m}))});var Me;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Me||(Me={}));var Ze;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ze||(Ze={}));function $t(e,a){let{target:n,replace:l,state:r,preventScrollReset:i,relative:s,viewTransition:d}=a===void 0?{}:a,m=Et(),g=Ie(),h=Ye(e,{relative:s});return c.useCallback(I=>{if(Xt(I,n)){I.preventDefault();let w=l!==void 0?l:Ae(g)===Ae(h);m(e,{replace:w,state:r,preventScrollReset:i,relative:s,viewTransition:d})}},[g,m,h,l,r,n,e,i,s,d])}const Kt=""+new URL("readme-BX7PycqI.md",import.meta.url).href,Qt="data:text/markdown;base64,IyBpYy10cmVlLXZpZXcKCgoKPCEtLSBBdXRvIEdlbmVyYXRlZCBCZWxvdyAtLT4KCgojIyBQcm9wZXJ0aWVzCgp8IFByb3BlcnR5ICAgICAgICAgICAgfCBBdHRyaWJ1dGUgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERlZmF1bHQgICAgIHwKfCAtLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLSB8CnwgYGhlYWRpbmdgICAgICAgICAgICB8IGBoZWFkaW5nYCAgICAgICAgICAgICB8IFRoZSBoZWFkaW5nIG9mIHRoZSB0cmVlIHZpZXcuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYHN0cmluZ2AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYCIiYCAgICAgICAgfAp8IGBzaXplYCAgICAgICAgICAgICAgfCBgc2l6ZWAgICAgICAgICAgICAgICAgfCBUaGUgc2l6ZSBvZiB0aGUgdHJlZSB2aWV3LiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGAibGFyZ2UiIFx8ICJtZWRpdW0iIFx8ICJzbWFsbCIgXHwgdW5kZWZpbmVkYCB8IGAibWVkaXVtImAgIHwKfCBgdGhlbWVgICAgICAgICAgICAgIHwgYHRoZW1lYCAgICAgICAgICAgICAgIHwgU2V0cyB0aGUgdGhlbWUgY29sb3IgdG8gdGhlIGRhcmsgb3IgbGlnaHQgdGhlbWUgY29sb3IuICJpbmhlcml0IiB3aWxsIHNldCB0aGUgY29sb3IgYmFzZWQgb24gdGhlIHN5c3RlbSBzZXR0aW5ncyBvciBpYy10aGVtZSBjb21wb25lbnQuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgImRhcmsiIFx8ICJpbmhlcml0IiBcfCAibGlnaHQiIFx8IHVuZGVmaW5lZGAgfCBgImluaGVyaXQiYCB8CnwgYHRyZWVJdGVtRGF0YWAgICAgICB8IC0tICAgICAgICAgICAgICAgICAgICB8IFRoZSBjb250ZW50IHdpdGhpbiB0aGUgdHJlZSB2aWV3IHRyZWUgaXRlbXMuIFRoaXMgd2lsbCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBzbG90dGVkIGNvbnRlbnQuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYEljVHJlZUl0ZW1PcHRpb25zW11gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYFtdYCAgICAgICAgfAp8IGB0cnVuY2F0ZUhlYWRpbmdgICAgfCBgdHJ1bmNhdGUtaGVhZGluZ2AgICAgfCBJZiBgdHJ1ZWAsIHRoZSB0cmVlIHZpZXcgaGVhZGluZyB3aWxsIGJlIHRydW5jYXRlZCBpbnN0ZWFkIG9mIHRleHQgd3JhcHBpbmcuIFdoZW4gdXNlZCBvbiBzbWFsbCBkZXZpY2VzLCB0aGlzIHByb3Agd2lsbCBiZSBvdmVycmlkZGVuIGFuZCBoZWFkaW5ncyB3aWxsIGJlIHNldCB0byB0ZXh0LXdyYXAuICAgICAgICB8IGBib29sZWFuYCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGBmYWxzZWAgICAgIHwKfCBgdHJ1bmNhdGVUcmVlSXRlbXNgIHwgYHRydW5jYXRlLXRyZWUtaXRlbXNgIHwgSWYgYHRydWVgLCB0cmVlIGl0ZW1zIHdpbGwgYmUgdHJ1bmNhdGVkLCB1bmxlc3MgdGhleSBhcmUgaW5kaXZpZHVhbGx5IG92ZXJyaWRkZW4uIFdoZW4gdXNlZCBvbiBzbWFsbCBkZXZpY2VzLCB0aGlzIHByb3Agd2lsbCBiZSBvdmVycmlkZGVuIGFuZCB0cmVlLWl0ZW1zIHdpbGwgYmUgc2V0IHRvIHRleHQtd3JhcC4gfCBgYm9vbGVhbmAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgZmFsc2VgICAgICB8CgoKIyMgU2xvdHMKCnwgU2xvdCAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAp8IC0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwKfCBgImhlYWRpbmciYCB8IENvbnRlbnQgaXMgc2V0IGFzIHRoZSB0cmVlIHZpZXcgaGVhZGluZy4gICAgICB8CnwgYCJpY29uImAgICAgfCBDb250ZW50IGlzIHBsYWNlZCB0byB0aGUgbGVmdCBvZiB0aGUgaGVhZGluZy4gfAoKCiMjIENTUyBDdXN0b20gUHJvcGVydGllcwoKfCBOYW1lICAgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICB8CnwgLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfAp8IGAtLXRyZWUtdmlldy13aWR0aGAgfCBXaWR0aCBvZiB0aGUgdHJlZSB2aWV3IHwKCgojIyBEZXBlbmRlbmNpZXMKCiMjIyBEZXBlbmRzIG9uCgotIFtpYy10b29sdGlwXSguLi8uLi8uLi8uLi93ZWItY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9pYy10b29sdGlwKQotIFtpYy10eXBvZ3JhcGh5XSguLi8uLi8uLi8uLi93ZWItY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9pYy10eXBvZ3JhcGh5KQoKIyMjIEdyYXBoCmBgYG1lcm1haWQKZ3JhcGggVEQ7CiAgaWMtdHJlZS12aWV3IC0tPiBpYy10b29sdGlwCiAgaWMtdHJlZS12aWV3IC0tPiBpYy10eXBvZ3JhcGh5CiAgaWMtdG9vbHRpcCAtLT4gaWMtdHlwb2dyYXBoeQogIHN0eWxlIGljLXRyZWUtdmlldyBmaWxsOiNmOWYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjRweApgYGAKCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCgo=",qt={title:"React Components/Tree view",component:C,parameters:{componentAPI:{data:Qt+Kt}}},y={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",treeItemData:[{label:"Coffee"},{label:"Tea"},{label:"Hot chocolate"}]})),name:"Basic"},D={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu"},t.createElement(o,{label:"Coffee"}),t.createElement(o,{label:"Tea"}),t.createElement(o,{label:"Hot chocolate"}))),name:"Basic - slotted"},Y={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",treeItemData:[{label:"Coffee",children:[{label:"Americano",children:[{label:"With milk"}]},{label:"Latte"},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai"}]},{label:"Hot chocolate"}]})),name:"Nested"},z={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu"},t.createElement(o,{label:"Coffee"},t.createElement(o,{label:"Americano"}),t.createElement(o,{label:"Latte"}),t.createElement(o,{label:"Espresso"})),t.createElement(o,{label:"Tea"},t.createElement(o,{label:"Earl Grey"}),t.createElement(o,{label:"Chai"})),t.createElement(o,{label:"Hot chocolate"}))),name:"Nested - slotted"},F={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",treeItemData:[{label:"Coffee",treeItemId:"coffee-1"},{label:"Tea",treeItemId:"tea-1"},{label:"Hot chocolate",treeItemId:"hot-chocolate-1"}]})),name:"Custom IDs with Tree Item Data"},X={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu"},t.createElement(o,{label:"Coffee",treeItemId:"coffee-1"},t.createElement(o,{label:"Americano",treeItemId:"americano-1"},t.createElement(o,{label:"With milk",treeItemId:"with-milk-1"}))),t.createElement(o,{label:"Tea",treeItemId:"tea-1"}))),name:"Custom IDs with Slotted"},O={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",treeItemData:[{label:"Coffee",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',children:[{label:"Americano"},{label:"Latte",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>'},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai"}]},{label:"Hot chocolate"}]},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})))),name:"With icons"},j={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(o,{label:"Coffee"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"})),t.createElement(o,{label:"Americano"}),t.createElement(o,{label:"Latte"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}))),t.createElement(o,{label:"Espresso"})),t.createElement(o,{label:"Tea"},t.createElement(o,{label:"Earl Grey"}),t.createElement(o,{label:"Chai"})),t.createElement(o,{label:"Hot chocolate"}))),name:"With icons - slotted"},H={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",size:"small",treeItemData:[{label:"Coffee",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',children:[{label:"Americano"},{label:"Latte",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>'},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai"}]},{label:"Hot chocolate"}]},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})))),name:"Small"},J={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",size:"small"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(o,{label:"Coffee"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"})),t.createElement(o,{label:"Americano"}),t.createElement(o,{label:"Latte"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}))),t.createElement(o,{label:"Espresso"})),t.createElement(o,{label:"Tea"},t.createElement(o,{label:"Earl Grey"}),t.createElement(o,{label:"Chai"})),t.createElement(o,{label:"Hot chocolate"}))),name:"Small - slotted"},_={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",size:"large",treeItemData:[{label:"Coffee",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',children:[{label:"Americano"},{label:"Latte",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>'},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai"}]},{label:"Hot chocolate"}]},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})))),name:"Large"},$={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",size:"large"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(o,{label:"Coffee"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"})),t.createElement(o,{label:"Americano"}),t.createElement(o,{label:"Latte"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}))),t.createElement(o,{label:"Espresso"})),t.createElement(o,{label:"Tea"},t.createElement(o,{label:"Earl Grey"}),t.createElement(o,{label:"Chai"})),t.createElement(o,{label:"Hot chocolate"}))),name:"Large - slotted"},B={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",treeItemData:[{label:"Coffee",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',children:[{label:"Americano"},{label:"Latte",disabled:!0,icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>'},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai",disabled:!0}]},{label:"Hot chocolate",disabled:!0}]},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})))),name:"Disabled tree items"},K={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(o,{label:"Coffee"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"})),t.createElement(o,{label:"Americano"}),t.createElement(o,{label:"Latte",disabled:!0},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}))),t.createElement(o,{label:"Espresso"})),t.createElement(o,{label:"Tea"},t.createElement(o,{label:"Earl Grey"}),t.createElement(o,{label:"Chai",disabled:!0})),t.createElement(o,{label:"Hot chocolate",disabled:!0}))),name:"Disabled tree items - slotted"},M={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",truncateTreeItems:!0},t.createElement(o,null,t.createElement("a",{slot:"router-item",href:"/"},"Hot chocolate with marshmallows and whipped cream")),t.createElement(o,null,t.createElement("a",{slot:"router-item",href:"/tea"},"Tea")),t.createElement(o,{label:"Coffee"}))),name:"Router item"},Z={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,null,t.createElement(ce,{variant:"subtitle-large",slot:"heading"},"Menu"),t.createElement(o,null,t.createElement(ce,{slot:"label"},"Coffee")),t.createElement(o,{label:"Tea"}),t.createElement(o,{label:"Hot chocolate"}))),name:"Slotted content"},G={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",treeItemData:[{label:"Coffee",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',children:[{label:"Americano"},{label:"Latte with extra milk and sugar"},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai"}]},{label:"Hot chocolate with marshmallows"}]},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})))),name:"Max content"},Q={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu with nested options"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(o,{label:"Coffee"},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"})),t.createElement(o,{label:"Americano"}),t.createElement(o,{label:"Latte with extra milk and sugar"}),t.createElement(o,{label:"Espresso"})),t.createElement(o,{label:"Tea"},t.createElement(o,{label:"Earl Grey"}),t.createElement(o,{label:"Chai"})),t.createElement(o,{label:"Hot chocolate with marshmallows"}))),name:"Max content - slotted"},R={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",truncateTreeItems:!0,truncateHeading:!0,treeItemData:[{label:"Coffee",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',children:[{label:"Americano"},{label:"Latte with extra milk and sugar"},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Earl Grey with truncation false",truncateTreeItem:!1},{label:"Chai"}]},{label:"Hot chocolate with marshmallows"}]},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})))),name:"Truncation behaviour"},q={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu with nested options",truncateHeading:!0,truncateTreeItems:!0},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(o,{label:"Coffee",expanded:!0},t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"})),t.createElement(o,{label:"Americano"}),t.createElement(o,{label:"Latte with extra milk and sugar"}),t.createElement(o,{label:"Espresso"})),t.createElement(o,{label:"Tea",expanded:!0},t.createElement(o,{label:"Earl Grey"}),t.createElement(o,{label:"Earl Grey with truncation false",truncateTreeItem:!1}),t.createElement(o,{label:"Chai"})),t.createElement(o,{label:"Hot chocolate with marshmallows"}))),name:"Truncation behaviour - slotted"},W={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",treeItemData:[{label:"Coffee"},{label:"Tea"},{label:"Hot chocolate",selected:!0}]})),name:"Selected tree item"},ee={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu"},t.createElement(o,{label:"Coffee"}),t.createElement(o,{label:"Tea"}),t.createElement(o,{label:"Hot chocolate",selected:!0}))),name:"Selected tree item - slotted"},k={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",treeItemData:[{label:"Coffee",href:"#"},{label:"Tea",href:"#",selected:!0},{label:"Hot chocolate",disabled:!0,href:"#"}]})),name:"Link"},te={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu"},t.createElement(o,{label:"Coffee",href:"#"}),t.createElement(o,{label:"Tea",selected:!0,href:"#"}),t.createElement(o,{label:"Hot chocolate",disabled:!0,href:"#"}))),name:"Link - slotted"},U={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{onIcTreeItemExpanded:e=>console.log("onIcTreeItemExpanded: ",e.detail),heading:"Menu",treeItemData:[{label:"Coffee",expanded:!0,children:[{label:"Americano",expanded:!0,children:[{label:"With milk"}]},{label:"Latte"},{label:"Espresso"}]},{label:"Tea",children:[{label:"Earl grey"},{label:"Chai"}]},{label:"Hot chocolate"}]})),name:"Expanded"},ae={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu",onIcTreeItemExpanded:e=>console.log("[Slotted] onIcTreeItemExpanded: ",e.detail)},t.createElement(o,{label:"Coffee",expanded:!0},t.createElement(o,{label:"Americano",expanded:!0},t.createElement(o,{label:"With milk"})),t.createElement(o,{label:"Latte"}),t.createElement(o,{label:"Espresso"})),t.createElement(o,{label:"Tea"},t.createElement(o,{label:"Earl Grey"}),t.createElement(o,{label:"Chai"})),t.createElement(o,{label:"Hot chocolate"}))),name:"Expanded - slotted"},ne={render:()=>{const[e,a]=c.useState([{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}]),n=()=>{a([{label:"Item 5"},{label:"Item 6"}])};return t.createElement(t.Fragment,null,t.createElement(C,{heading:"Updating options",treeItemData:e}),t.createElement("br",null),t.createElement(Ge,{onClick:n},"Update"))},name:"Updating options"},le={render:()=>{const[e,a]=c.useState([{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}]),n=()=>{a([{label:"Item 5"},{label:"Item 6"}])};return t.createElement(t.Fragment,null,t.createElement(C,{heading:"Updating options"},e.map((l,r)=>t.createElement(o,{key:r,label:l.label}))),t.createElement("br",null),t.createElement(Ge,{onClick:n},"Update"))},name:"Updating options - slotted"},re={render:()=>t.createElement("div",{style:{width:"250px"}},t.createElement(je,{target:"next-content",inline:!0}),t.createElement(C,{heading:"Menu"},t.createElement(o,{label:"Coffee"},t.createElement(o,{label:"Americano"},t.createElement(o,{label:"With milk"})),t.createElement(o,{label:"Latte"}),t.createElement(o,{label:"Espresso"})),t.createElement(o,{label:"Tea"},t.createElement(o,{label:"Earl Grey"}),t.createElement(o,{label:"Chai"})),t.createElement(o,{label:"Hot chocolate"}))),name:"Nested skip link"},oe={render:()=>{const[e,a]=c.useState([]);return c.useEffect(()=>{const n=[{label:"PG Tips"},{label:"Yorkshire Tea"},{label:"Earl Grey"}];setTimeout(()=>{a(n)},3e3)},[]),t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu"},t.createElement(o,{label:"Coffee"}),t.createElement(o,{label:"Tea",expanded:e.length},e.map(n=>t.createElement(o,{label:n.label,key:n.label}))),t.createElement(o,{label:"Hot chocolate"})))},name:"Adding child nodes"},ie={render:()=>{const e=Ie(),a=n=>e.pathname===n;return t.createElement("div",{style:{display:"flex",flexDirection:"row",gap:"16px"}},t.createElement("div",{style:{width:"250px"}},t.createElement(C,{heading:"Menu"},t.createElement(o,{selected:a("/")},t.createElement(fe,{slot:"router-item",to:"/"},"Home")),t.createElement(o,{selected:a("/coffee")},t.createElement(fe,{slot:"router-item",to:"/coffee"},"Coffee")),t.createElement(o,{selected:a("/tea")},t.createElement(fe,{slot:"router-item",to:"/tea"},"Tea")))),t.createElement("div",{style:{marginTop:"16px"}},t.createElement(Yt,null,t.createElement(ue,{path:"/",element:t.createElement(ce,null,"Home Page")}),t.createElement(ue,{path:"/coffee",element:t.createElement(ce,null,"Coffee Page")}),t.createElement(ue,{path:"/tea",element:t.createElement(ce,null,"Tea Page")}))))},name:"React Router",decorators:[e=>t.createElement(Nt,{initialEntries:["/"]},t.createElement(e,null))]},ea={heading:"Menu",size:"medium",truncateTreeItems:!1,treeItemDisabled:!1,treeItemHref:"",treeItemId:"",treeItemLabel:"Coffee",treeItemSelected:!1,showTreeItemIcon:!1,theme:"inherit"},se={render:e=>t.createElement(C,{heading:e.heading,size:e.size,theme:e.theme,truncateTreeItems:e.truncateTreeItems,treeItemData:[{label:e.treeItemLabel,href:e.treeItemHref,disabled:e.treeItemDisabled,selected:e.treeItemSelected,icon:e.showTreeItemIcon&&'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',treeItemId:e.treeItemId},{label:"Tea"},{label:"Hot chocolate"}]}),args:ea,argTypes:{size:{options:["medium","small","large"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},ta={heading:"Menu",size:"medium",showIcon:!1,truncateHeading:!1,truncateTreeItems:!1,treeItemDisabled:!1,treeItemHref:"",treeItemId:"",treeItemLabel:"Coffee",treeItemSelected:!1,showTreeItemIcon:!1,theme:"inherit"},P={render:e=>t.createElement(C,{heading:e.heading,size:e.size,theme:e.theme,truncateHeading:e.truncateHeading,truncateTreeItems:e.truncateTreeItems},e.showIcon&&t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"})),t.createElement(o,{label:e.treeItemLabel,disabled:e.treeItemDisabled,selected:e.treeItemSelected,href:e.treeItemHref,treeItemId:e.treeItemId},e.showTreeItemIcon&&t.createElement(A,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t.createElement("path",{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}))),t.createElement(o,{label:"Tea"}),t.createElement(o,{label:"Hot chocolate"})),args:ta,argTypes:{size:{options:["medium","small","large"],control:{type:"inline-radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground - slotted"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:"Small and large styling will be passed down from tree view to tree items and nested tree items.",...H.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"Individual tree-items can be disabled using the `disabled` prop.",...B.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:"When the heading/label exceeds the width of the container, the text will wrap unless `truncateTreeItem` is set to `true`.",...G.parameters?.docs?.description}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"When `truncateTreeItems` or `truncateHeading` are set to `true`, and the heading/label exceeds the width of the container, they will be truncated with an ellipsis.",...R.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Utilising the `selected` attribute on `IcTreeItem` will turn it into a controlled component, displaying the selected state when set to `true`.",...W.parameters?.docs?.description}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
}`,...ee.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"When setting the `href` attribute, the tree-item will function as a link.",...k.parameters?.docs?.description}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
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
}`,...te.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:"An example with the `expanded` prop set to `true` on a parent tree item.",...U.parameters?.docs?.description}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
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
}`,...ae.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
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
        <IcTreeView heading="Updating options">
          {treeItems.map((option, index) => <IcTreeItem key={index} label={option.label} />)}
        </IcTreeView>
        <br />
        <IcButton onClick={updateTreeItems}>Update</IcButton>
      </>;
  },
  name: "Updating options - slotted"
}`,...le.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
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
}`,...re.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
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
}`,...oe.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
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
}`,...ie.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
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
}`,...se.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:'Go to the <ic-link href="/?path=/story/react-components-tree-view--playground">separate page for the playground example</ic-link> to view the prop controls.',...P.parameters?.docs?.description}}};const aa=["Basic","BasicSlotted","Nested","NestedSlotted","CustomIDs","SlottedCustomIds","WithIcons","WithIconsSlotted","Small","SmallSlotted","Large","LargeSlotted","DisabledTreeItems","DisabledTreeItemsSlotted","RouterItem","SlottedContent","MaxContent","MaxContentSlotted","TruncationBehaviour","TruncationBehaviourSlotted","SelectedTreeItem","SelectedTreeItemSlotted","Link","LinkSlotted","Expanded","ExpandedSlotted","UpdatingOptions","UpdatingOptionsSlotted","WithNestedSkipLink","AddChildNodes","ReactRouter","Playground","PlaygroundSlotted"],ia=Object.freeze(Object.defineProperty({__proto__:null,AddChildNodes:oe,Basic:y,BasicSlotted:D,CustomIDs:F,DisabledTreeItems:B,DisabledTreeItemsSlotted:K,Expanded:U,ExpandedSlotted:ae,Large:_,LargeSlotted:$,Link:k,LinkSlotted:te,MaxContent:G,MaxContentSlotted:Q,Nested:Y,NestedSlotted:z,Playground:se,PlaygroundSlotted:P,ReactRouter:ie,RouterItem:M,SelectedTreeItem:W,SelectedTreeItemSlotted:ee,SlottedContent:Z,SlottedCustomIds:X,Small:H,SmallSlotted:J,TruncationBehaviour:R,TruncationBehaviourSlotted:q,UpdatingOptions:ne,UpdatingOptionsSlotted:le,WithIcons:O,WithIconsSlotted:j,WithNestedSkipLink:re,__namedExportsOrder:aa,default:qt},Symbol.toStringTag,{value:"Module"}));export{ia as I};
