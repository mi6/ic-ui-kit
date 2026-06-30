import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{H as r,K as i,M as a,N as o,O as s,P as c,S as l,V as u,ct as d,in as f,lt as p,m,p as h,t as g,u as _,ut as v}from"./iframe-CBY1Fz5o.js";import{n as y,t as b}from"./slottedSVG-fl0Wk3iV.js";var x=e({CustomTopPosition:()=>D,Default:()=>T,FullWidth:()=>E,HideBackground:()=>k,Inline:()=>O,Playground:()=>j,__namedExportsOrder:()=>M,default:()=>w}),S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{S=n(f()),v(),y(),C=g(),w={title:`Skip link`,component:i},T={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{target:`page-content`}),(0,C.jsx)(d,{appTitle:`Application Name`,children:(0,C.jsxs)(b,{slot:`app-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,C.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,C.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z`})]})}),(0,C.jsx)(`main`,{id:`page-content`,children:`Target element`}),(0,C.jsx)(_,{children:`Should receive next focus`})]}),name:`Default`},E={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{target:`page-content`,fullWidth:!0}),(0,C.jsx)(d,{appTitle:`Application Name`,children:(0,C.jsxs)(b,{slot:`app-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,C.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,C.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z`})]})}),(0,C.jsx)(`main`,{id:`page-content`,children:`Target element`}),(0,C.jsx)(_,{children:`Should receive next focus`})]}),name:`Full width`},D={render:()=>{let e=(0,S.useRef)(),t=(0,S.useRef)(),n=(e,t)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}},f=()=>{let n=e?.current,r=t?.current;n&&r&&requestAnimationFrame(()=>{let e=n.offsetHeight;console.log({bannerHeight:e}),r.style.setProperty(`--ic-skip-link-position-top`,`${e+12}px`)})},g=()=>{let n=(e?.current)?.querySelector(`ic-section-container`);if(n){let r=new MutationObserver(i=>{for(let a of i)a.type===`attributes`&&a.attributeName===`class`&&n.classList.contains(`hydrated`)&&(f(e,t),r.disconnect())});r.observe(n,{attributes:!0})}},v=()=>{(0,S.useEffect)(()=>{g(e,t);let r=n(()=>f(e,t),100);return window.addEventListener(`resize`,r),f(e,t),()=>{window.removeEventListener(`resize`,r)}},[e,t])},y=()=>{let n=e?.current;console.log(n),e?.current&&(e.current.style.setProperty(`display`,`none`),f(e,t))};return v(),(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minHeight:`100vh`},children:[(0,C.jsx)(`div`,{id:`cookie-banner`,"aria-label":`cookies banner`,role:`region`,ref:e,style:{background:`var(--ic-architectural-60)`,boxShadow:`var(--ic-elevation-modal)`,zIndex:`var(--ic-z-index-classification-banner)`,position:`sticky`,top:`0`,width:`100%`,padding:`var(--ic-space-md) 0`},children:(0,C.jsxs)(r,{fullHeight:!0,aligned:`full-width`,children:[(0,C.jsx)(p,{variant:`h2`,children:`Cookies and Storage on this site`}),(0,C.jsx)(p,{variant:`body`,children:`We’d like to use analytics cookies to understand how you use the Design System, so that we can make improvements. Additionally, we use local storage to improve your experience by remembering your preferences.`}),(0,C.jsxs)(`div`,{className:`buttons`,style:{display:`grid`,columnGap:`var(--ic-space-md)`,gridTemplateColumns:`auto auto auto`,justifyContent:`start`,alignItems:`center`,padding:`var(--ic-space-md) 0 var(--ic-space-xs)`},children:[(0,C.jsx)(_,{onClick:y,children:`Accept`}),(0,C.jsx)(_,{variant:`secondary`,onClick:y,children:`Decline`}),(0,C.jsx)(s,{href:`#`,children:`Manage preferences`})]})]})}),(0,C.jsx)(i,{target:`page-content`,ref:t}),(0,C.jsxs)(d,{appTitle:`Application Name`,status:`alpha`,version:`v0.0.7`,contentAligned:`center`,children:[(0,C.jsxs)(b,{slot:`app-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,C.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,C.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z`})]}),(0,C.jsx)(u,{slot:`search`,placeholder:`Search`,label:`Search`}),(0,C.jsx)(a,{label:`button1`,slot:`buttons`,children:(0,C.jsxs)(b,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,C.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,C.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z`})]})}),(0,C.jsx)(c,{slot:`navigation`,label:`Navigation`,href:`/`}),(0,C.jsxs)(o,{slot:`navigation`,label:`Navigation group`,expandable:!0,children:[(0,C.jsx)(c,{label:`Navigation`,href:`/`}),(0,C.jsx)(c,{label:`Navigation`,href:`/`})]})]}),(0,C.jsx)(`main`,{style:{height:`100%`},children:(0,C.jsxs)(r,{aligned:`center`,id:`page-content`,children:[(0,C.jsx)(p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a. In rutrum convallis purus, vitae tristique tortor sagittis vel. Donec dictum nunc a elit tristique, et facilisis est condimentum. Pellentesque maximus nulla libero, nec auctor urna consequat nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In maximus velit a erat volutpat, sit amet consequat velit rhoncus. Mauris pretium neque eget ante consectetur consectetur. Morbi a consequat lectus. Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium id, efficitur nec leo.`}),(0,C.jsx)(`br`,{}),(0,C.jsx)(i,{label:`Skip to options`,target:`options`,inline:!0}),(0,C.jsx)(`br`,{}),(0,C.jsx)(p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a. In rutrum convallis purus, vitae tristique tortor sagittis vel. Donec dictum nunc a elit tristique, et facilisis est condimentum. Pellentesque maximus nulla libero, nec auctor urna consequat nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In maximus velit a erat volutpat, sit amet consequat velit rhoncus. Mauris pretium neque eget ante consectetur consectetur. Morbi a consequat lectus. Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium id, efficitur nec leo.`}),(0,C.jsx)(`br`,{}),(0,C.jsx)(_,{children:`Button`}),(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),(0,C.jsx)(`div`,{id:`options`,children:(0,C.jsxs)(m,{label:`This is a label`,required:!0,name:`group1`,children:[(0,C.jsx)(h,{value:`valueName1`,label:`Unselected / Default`}),(0,C.jsx)(h,{value:`valueName2`,label:`Selected / Default`,checked:!0}),(0,C.jsx)(h,{value:`valueName3`,label:`Unselected / Disabled`,disabled:!0})]})})]})}),(0,C.jsx)(l,{aligned:`full-width`,description:`The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
        please get in touch.`,caption:`All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence.`})]})},name:`Custom top position`,parameters:{layout:`fullscreen`}},O={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{target:`page-content`}),(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minHeight:`100vh`},children:[(0,C.jsxs)(d,{appTitle:`Application Name`,children:[(0,C.jsxs)(b,{slot:`app-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,C.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,C.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z`})]}),(0,C.jsx)(u,{slot:`search`,placeholder:`Search`,label:`Search`}),(0,C.jsx)(a,{label:`button1`,slot:`buttons`,children:(0,C.jsxs)(b,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,C.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,C.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z`})]})}),(0,C.jsx)(c,{slot:`navigation`,label:`Navigation`,href:`/`}),(0,C.jsxs)(o,{slot:`navigation`,label:`Navigation group`,expandable:!0,children:[(0,C.jsx)(c,{label:`Navigation`,href:`/`}),(0,C.jsx)(c,{label:`Navigation`,href:`/`})]})]}),(0,C.jsx)(`main`,{style:{height:`100%`},children:(0,C.jsxs)(r,{aligned:`center`,id:`page-content`,children:[(0,C.jsx)(p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a. In rutrum convallis purus, vitae tristique tortor sagittis vel. Donec dictum nunc a elit tristique, et facilisis est condimentum. Pellentesque maximus nulla libero, nec auctor urna consequat nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In maximus velit a erat volutpat, sit amet consequat velit rhoncus. Mauris pretium neque eget ante consectetur consectetur. Morbi a consequat lectus. Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium id, efficitur nec leo.`}),(0,C.jsx)(`br`,{}),(0,C.jsx)(i,{label:`Skip to options`,target:`options`,inline:!0}),(0,C.jsx)(`br`,{}),(0,C.jsx)(p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a. In rutrum convallis purus, vitae tristique tortor sagittis vel. Donec dictum nunc a elit tristique, et facilisis est condimentum. Pellentesque maximus nulla libero, nec auctor urna consequat nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In maximus velit a erat volutpat, sit amet consequat velit rhoncus. Mauris pretium neque eget ante consectetur consectetur. Morbi a consequat lectus. Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium id, efficitur nec leo.`}),(0,C.jsx)(`br`,{}),(0,C.jsx)(_,{children:`Button`}),(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),(0,C.jsx)(`div`,{id:`options`,children:(0,C.jsxs)(m,{label:`This is a label`,required:!0,name:`group1`,children:[(0,C.jsx)(h,{value:`valueName1`,label:`Unselected / Default`}),(0,C.jsx)(h,{value:`valueName2`,label:`Selected / Default`,checked:!0}),(0,C.jsx)(h,{value:`valueName3`,label:`Unselected / Disabled`,disabled:!0})]})})]})})]}),(0,C.jsx)(l,{aligned:`full-width`,description:`The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
            please get in touch.`,caption:`All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence.`})]})]}),name:`Inline`,parameters:{layout:`fullscreen`}},k={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{target:`page-content`,transparentBackground:!0}),(0,C.jsx)(d,{appTitle:`Application Name`,children:(0,C.jsxs)(b,{slot:`app-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,C.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,C.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z`})]})}),(0,C.jsx)(`main`,{id:`page-content`,children:`Target element`}),(0,C.jsx)(_,{children:`Should receive next focus`})]}),name:`Hide background`},A={fullWidth:!1,inline:!1,label:`Skip to main content`,monochrome:!1,target:``,theme:`inherit`,transparentBackground:!1},j={render:e=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{fullWidth:e.fullWidth,inline:e.inline,label:e.label,monochrome:e.monochrome,target:e.target,theme:e.theme,transparentBackground:e.transparentBackground}),(0,C.jsx)(d,{appTitle:`Application Name`,children:(0,C.jsxs)(b,{slot:`app-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,C.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,C.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z`})]})}),(0,C.jsx)(`main`,{id:e.target,children:`Target element`}),(0,C.jsx)(_,{children:`Should receive next focus`})]}),args:A,argTypes:{theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcSkipLink target="page-content" />
      <IcTopNavigation appTitle="Application Name">
        <SlottedSVG slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </SlottedSVG>
      </IcTopNavigation>
      <main id="page-content">Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>,
  name: "Default"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcSkipLink target="page-content" fullWidth />
      <IcTopNavigation appTitle="Application Name">
        <SlottedSVG slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </SlottedSVG>
      </IcTopNavigation>
      <main id="page-content">Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>,
  name: "Full width"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const cookieBannerRef = useRef();
    const skipLinkRef = useRef();
    const debounce = (func, delay) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
      };
    };
    const updateSkipLinkPosition = () => {
      const cookieBanner = cookieBannerRef?.current;
      const skipLink = skipLinkRef?.current;
      if (cookieBanner && skipLink) {
        requestAnimationFrame(() => {
          const bannerHeight = cookieBanner.offsetHeight;
          console.log({
            bannerHeight
          });
          skipLink.style.setProperty("--ic-skip-link-position-top", \`\${bannerHeight + 12}px\`);
        });
      }
    };
    const observeHydration = () => {
      const cookieBanner = cookieBannerRef?.current;
      const sectionContainer = cookieBanner?.querySelector("ic-section-container");
      if (sectionContainer) {
        const observer = new MutationObserver(mutationsList => {
          for (const mutation of mutationsList) {
            if (mutation.type === "attributes" && mutation.attributeName === "class" && sectionContainer.classList.contains("hydrated")) {
              updateSkipLinkPosition(cookieBannerRef, skipLinkRef);
              observer.disconnect();
            }
          }
        });
        observer.observe(sectionContainer, {
          attributes: true
        });
      }
    };
    const useSkipLinkPosition = () => {
      useEffect(() => {
        observeHydration(cookieBannerRef, skipLinkRef);
        const debouncedResize = debounce(() => updateSkipLinkPosition(cookieBannerRef, skipLinkRef), 100);
        window.addEventListener("resize", debouncedResize);
        updateSkipLinkPosition(cookieBannerRef, skipLinkRef);
        return () => {
          window.removeEventListener("resize", debouncedResize);
        };
      }, [cookieBannerRef, skipLinkRef]);
    };
    const closeCookieBanner = () => {
      const cookieBanner = cookieBannerRef?.current;
      console.log(cookieBanner);
      if (cookieBannerRef?.current) {
        cookieBannerRef.current.style.setProperty("display", "none");
        updateSkipLinkPosition(cookieBannerRef, skipLinkRef);
      }
    };
    useSkipLinkPosition();
    return <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
        <div id="cookie-banner" aria-label="cookies banner" role="region" ref={cookieBannerRef} style={{
        background: "var(--ic-architectural-60)",
        boxShadow: "var(--ic-elevation-modal)",
        zIndex: "var(--ic-z-index-classification-banner)",
        position: "sticky",
        top: "0",
        width: "100%",
        padding: "var(--ic-space-md) 0"
      }}>
          <IcSectionContainer fullHeight aligned="full-width">
            <IcTypography variant="h2">
              Cookies and Storage on this site
            </IcTypography>
            <IcTypography variant="body">
              We’d like to use analytics cookies to understand how you use the
              Design System, so that we can make improvements. Additionally, we
              use local storage to improve your experience by remembering your
              preferences.
            </IcTypography>
            <div className="buttons" style={{
            display: "grid",
            columnGap: "var(--ic-space-md)",
            gridTemplateColumns: "auto auto auto",
            justifyContent: "start",
            alignItems: "center",
            padding: "var(--ic-space-md) 0 var(--ic-space-xs)"
          }}>
              <IcButton onClick={closeCookieBanner}>Accept</IcButton>
              <IcButton variant="secondary" onClick={closeCookieBanner}>
                Decline
              </IcButton>
              <IcLink href="#">Manage preferences</IcLink>
            </div>
          </IcSectionContainer>
        </div>
        <IcSkipLink target="page-content" ref={skipLinkRef}></IcSkipLink>
        <IcTopNavigation appTitle="Application Name" status="alpha" version="v0.0.7" contentAligned="center">
          <SlottedSVG slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
          </SlottedSVG>
          <IcSearchBar slot="search" placeholder="Search" label="Search"></IcSearchBar>
          <IcNavigationButton label="button1" slot="buttons">
            <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </SlottedSVG>
          </IcNavigationButton>
          <IcNavigationItem slot="navigation" label="Navigation" href="/"></IcNavigationItem>
          <IcNavigationGroup slot="navigation" label="Navigation group" expandable>
            <IcNavigationItem label="Navigation" href="/"></IcNavigationItem>
            <IcNavigationItem label="Navigation" href="/"></IcNavigationItem>
          </IcNavigationGroup>
        </IcTopNavigation>
        <main style={{
        height: "100%"
      }}>
          <IcSectionContainer aligned="center" id="page-content">
            <IcTypography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
              id, efficitur nec leo.
            </IcTypography>
            <br />
            <IcSkipLink label="Skip to options" target="options" inline></IcSkipLink>
            <br />
            <IcTypography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
              id, efficitur nec leo.
            </IcTypography>
            <br />
            <IcButton>Button</IcButton>
            <br />
            <br />
            <div id="options">
              <IcCheckboxGroup label="This is a label" required name="group1">
                <IcCheckbox value="valueName1" label="Unselected / Default"></IcCheckbox>
                <IcCheckbox value="valueName2" label="Selected / Default" checked></IcCheckbox>
                <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled></IcCheckbox>
              </IcCheckboxGroup>
            </div>
          </IcSectionContainer>
        </main>
        <IcFooter aligned="full-width" description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
        please get in touch." caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence." />
      </div>;
  },
  name: "Custom top position",
  parameters: {
    layout: "fullscreen"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcSkipLink target="page-content" />
      <div>
        <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}>
        <IcTopNavigation appTitle="Application Name">
          <SlottedSVG slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
          </SlottedSVG>
          <IcSearchBar slot="search" placeholder="Search" label="Search"></IcSearchBar>
            <IcNavigationButton label="button1" slot="buttons">
              <SlottedSVG slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
              </SlottedSVG>
            </IcNavigationButton>
            <IcNavigationItem slot="navigation" label="Navigation" href="/"></IcNavigationItem>
            <IcNavigationGroup slot="navigation" label="Navigation group" expandable>
              <IcNavigationItem label="Navigation" href="/"></IcNavigationItem>
              <IcNavigationItem label="Navigation" href="/"></IcNavigationItem>
            </IcNavigationGroup>
        </IcTopNavigation>
        <main style={{
          height: "100%"
        }}>
            <IcSectionContainer aligned="center" id="page-content">
              <IcTypography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                id, efficitur nec leo.
              </IcTypography>
              <br />
              <IcSkipLink label="Skip to options" target="options" inline />
              <br />
              <IcTypography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                id, efficitur nec leo.
              </IcTypography>
              <br />
              <IcButton>Button</IcButton>
              <br />
              <br />
              <div id="options">
              <IcCheckboxGroup label="This is a label" required name="group1">
                  <IcCheckbox value="valueName1" label="Unselected / Default"></IcCheckbox>
                  <IcCheckbox value="valueName2" label="Selected / Default" checked></IcCheckbox>
                  <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled></IcCheckbox>
                </IcCheckboxGroup>
              </div>
            </IcSectionContainer>
          </main>
        </div>
        <IcFooter aligned="full-width" description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
            please get in touch." caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence." />
      </div>
    </>,
  name: "Inline",
  parameters: {
    layout: "fullscreen"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcSkipLink target="page-content" transparentBackground />
      <IcTopNavigation appTitle="Application Name">
        <SlottedSVG slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </SlottedSVG>
      </IcTopNavigation>
      <main id="page-content">Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>,
  name: "Hide background"
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <IcSkipLink fullWidth={args.fullWidth} inline={args.inline} label={args.label} monochrome={args.monochrome} target={args.target} theme={args.theme} transparentBackground={args.transparentBackground} />
      <IcTopNavigation appTitle="Application Name">
        <SlottedSVG slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </SlottedSVG>
      </IcTopNavigation>
      <main id={args.target}>Target element</main>
      <IcButton>Should receive next focus</IcButton>
    </>,
  args: defaultArgs,
  argTypes: {
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground"
}`,...j.parameters?.docs?.source}}},M=[`Default`,`FullWidth`,`CustomTopPosition`,`Inline`,`HideBackground`,`Playground`]}));N();export{D as CustomTopPosition,T as Default,E as FullWidth,k as HideBackground,O as Inline,j as Playground,M as __namedExportsOrder,w as default,N as n,x as t};