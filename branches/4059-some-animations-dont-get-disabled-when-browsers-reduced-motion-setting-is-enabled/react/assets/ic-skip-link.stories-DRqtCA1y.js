import{a1 as i,r as x,R as e,z as S,a as c,f as r,o as M,X as m,e as y,a2 as q,Y as s,$ as N,J as z,F as u,N as B}from"./iframe-BLDwDGmd.js";import{S as l}from"./slottedSVG-Cy7vAEJh.js";const V={title:"Skip link",component:i},p={render:()=>e.createElement(e.Fragment,null,e.createElement(i,{target:"page-content"}),e.createElement(m,{appTitle:"Application Name"},e.createElement(l,{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),e.createElement("main",{id:"page-content"},"Target element"),e.createElement(r,null,"Should receive next focus")),name:"Default"},d={render:()=>e.createElement(e.Fragment,null,e.createElement(i,{target:"page-content",fullWidth:!0}),e.createElement(m,{appTitle:"Application Name"},e.createElement(l,{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),e.createElement("main",{id:"page-content"},"Target element"),e.createElement(r,null,"Should receive next focus")),name:"Full width"},h={render:()=>{const t=x.useRef(),k=x.useRef(),L=(n,a)=>{let o;return(...I)=>{clearTimeout(o),o=setTimeout(()=>n(...I),a)}},f=()=>{const n=t?.current,a=k?.current;n&&a&&requestAnimationFrame(()=>{const o=n.offsetHeight;console.log({bannerHeight:o}),a.style.setProperty("--ic-skip-link-position-top",`${o+12}px`)})},C=()=>{const a=t?.current?.querySelector("ic-section-container");if(a){const o=new MutationObserver(I=>{for(const E of I)E.type==="attributes"&&E.attributeName==="class"&&a.classList.contains("hydrated")&&(f(),o.disconnect())});o.observe(a,{attributes:!0})}},T=()=>{x.useEffect(()=>{C();const n=L(()=>f(),100);return window.addEventListener("resize",n),f(),()=>{window.removeEventListener("resize",n)}},[t,k])},w=()=>{const n=t?.current;console.log(n),t?.current&&(t.current.style.setProperty("display","none"),f())};return T(),e.createElement("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"}},e.createElement("div",{id:"cookie-banner","aria-label":"cookies banner",role:"region",ref:t,style:{background:"var(--ic-architectural-60)",boxShadow:"var(--ic-elevation-modal)",zIndex:"var(--ic-z-index-classification-banner)",position:"sticky",top:"0",width:"100%",padding:"var(--ic-space-md) 0"}},e.createElement(S,{fullHeight:!0,aligned:"full-width"},e.createElement(c,{variant:"h2"},"Cookies and Storage on this site"),e.createElement(c,{variant:"body"},"We’d like to use analytics cookies to understand how you use the Design System, so that we can make improvements. Additionally, we use local storage to improve your experience by remembering your preferences."),e.createElement("div",{className:"buttons",style:{display:"grid",columnGap:"var(--ic-space-md)",gridTemplateColumns:"auto auto auto",justifyContent:"start",alignItems:"center",padding:"var(--ic-space-md) 0 var(--ic-space-xs)"}},e.createElement(r,{onClick:w},"Accept"),e.createElement(r,{variant:"secondary",onClick:w},"Decline"),e.createElement(M,{href:"#"},"Manage preferences")))),e.createElement(i,{target:"page-content",ref:k}),e.createElement(m,{appTitle:"Application Name",status:"alpha",version:"v0.0.7",contentAligned:"center"},e.createElement(l,{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})),e.createElement(y,{slot:"search",placeholder:"Search",label:"Search"}),e.createElement(q,{label:"button1",slot:"buttons"},e.createElement(l,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),e.createElement(s,{slot:"navigation",label:"Navigation",href:"/"}),e.createElement(N,{slot:"navigation",label:"Navigation group",expandable:!0},e.createElement(s,{label:"Navigation",href:"/"}),e.createElement(s,{label:"Navigation",href:"/"}))),e.createElement("main",{style:{height:"100%"}},e.createElement(S,{aligned:"center",id:"page-content"},e.createElement(c,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a. In rutrum convallis purus, vitae tristique tortor sagittis vel. Donec dictum nunc a elit tristique, et facilisis est condimentum. Pellentesque maximus nulla libero, nec auctor urna consequat nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In maximus velit a erat volutpat, sit amet consequat velit rhoncus. Mauris pretium neque eget ante consectetur consectetur. Morbi a consequat lectus. Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium id, efficitur nec leo."),e.createElement("br",null),e.createElement(i,{label:"Skip to options",target:"options",inline:!0}),e.createElement("br",null),e.createElement(c,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a. In rutrum convallis purus, vitae tristique tortor sagittis vel. Donec dictum nunc a elit tristique, et facilisis est condimentum. Pellentesque maximus nulla libero, nec auctor urna consequat nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In maximus velit a erat volutpat, sit amet consequat velit rhoncus. Mauris pretium neque eget ante consectetur consectetur. Morbi a consequat lectus. Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium id, efficitur nec leo."),e.createElement("br",null),e.createElement(r,null,"Button"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{id:"options"},e.createElement(z,{label:"This is a label",required:!0,name:"group1"},e.createElement(u,{value:"valueName1",label:"Unselected / Default"}),e.createElement(u,{value:"valueName2",label:"Selected / Default",checked:!0}),e.createElement(u,{value:"valueName3",label:"Unselected / Disabled",disabled:!0}))))),e.createElement(B,{aligned:"full-width",description:`The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
        please get in touch.`,caption:"All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."}))},name:"Custom top position",parameters:{layout:"fullscreen"}},g={render:()=>e.createElement(e.Fragment,null,e.createElement(i,{target:"page-content"}),e.createElement("div",null,e.createElement("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"}},e.createElement(m,{appTitle:"Application Name"},e.createElement(l,{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})),e.createElement(y,{slot:"search",placeholder:"Search",label:"Search"}),e.createElement(q,{label:"button1",slot:"buttons"},e.createElement(l,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),e.createElement(s,{slot:"navigation",label:"Navigation",href:"/"}),e.createElement(N,{slot:"navigation",label:"Navigation group",expandable:!0},e.createElement(s,{label:"Navigation",href:"/"}),e.createElement(s,{label:"Navigation",href:"/"}))),e.createElement("main",{style:{height:"100%"}},e.createElement(S,{aligned:"center",id:"page-content"},e.createElement(c,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a. In rutrum convallis purus, vitae tristique tortor sagittis vel. Donec dictum nunc a elit tristique, et facilisis est condimentum. Pellentesque maximus nulla libero, nec auctor urna consequat nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In maximus velit a erat volutpat, sit amet consequat velit rhoncus. Mauris pretium neque eget ante consectetur consectetur. Morbi a consequat lectus. Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium id, efficitur nec leo."),e.createElement("br",null),e.createElement(i,{label:"Skip to options",target:"options",inline:!0}),e.createElement("br",null),e.createElement(c,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a. In rutrum convallis purus, vitae tristique tortor sagittis vel. Donec dictum nunc a elit tristique, et facilisis est condimentum. Pellentesque maximus nulla libero, nec auctor urna consequat nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In maximus velit a erat volutpat, sit amet consequat velit rhoncus. Mauris pretium neque eget ante consectetur consectetur. Morbi a consequat lectus. Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium id, efficitur nec leo."),e.createElement("br",null),e.createElement(r,null,"Button"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{id:"options"},e.createElement(z,{label:"This is a label",required:!0,name:"group1"},e.createElement(u,{value:"valueName1",label:"Unselected / Default"}),e.createElement(u,{value:"valueName2",label:"Selected / Default",checked:!0}),e.createElement(u,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})))))),e.createElement(B,{aligned:"full-width",description:`The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
            please get in touch.`,caption:"All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."}))),name:"Inline",parameters:{layout:"fullscreen"}},v={render:()=>e.createElement(e.Fragment,null,e.createElement(i,{target:"page-content",transparentBackground:!0}),e.createElement(m,{appTitle:"Application Name"},e.createElement(l,{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),e.createElement("main",{id:"page-content"},"Target element"),e.createElement(r,null,"Should receive next focus")),name:"Hide background"},D={fullWidth:!1,inline:!1,label:"Skip to main content",monochrome:!1,target:"",theme:"inherit",transparentBackground:!1},b={render:t=>e.createElement(e.Fragment,null,e.createElement(i,{fullWidth:t.fullWidth,inline:t.inline,label:t.label,monochrome:t.monochrome,target:t.target,theme:t.theme,transparentBackground:t.transparentBackground}),e.createElement(m,{appTitle:"Application Name"},e.createElement(l,{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),e.createElement("main",{id:t.target},"Target element"),e.createElement(r,null,"Should receive next focus")),args:D,argTypes:{theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const P=["Default","FullWidth","CustomTopPosition","Inline","HideBackground","Playground"],G=Object.freeze(Object.defineProperty({__proto__:null,CustomTopPosition:h,Default:p,FullWidth:d,HideBackground:v,Inline:g,Playground:b,__namedExportsOrder:P,default:V},Symbol.toStringTag,{value:"Module"}));export{G as I};
