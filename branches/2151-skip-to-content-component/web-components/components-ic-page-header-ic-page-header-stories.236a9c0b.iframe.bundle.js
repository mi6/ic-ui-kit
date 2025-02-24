/*! For license information please see components-ic-page-header-ic-page-header-stories.236a9c0b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[3641,582,6199,6763],{"./src/components/ic-page-header/ic-page-header.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CenterAligned:()=>CenterAligned,ComponentOverrides:()=>ComponentOverrides,DarkTheme:()=>DarkTheme,FullWidth:()=>FullWidth,HeadingWithAdornment:()=>HeadingWithAdornment,LeftAligned:()=>LeftAligned,Playground:()=>Playground,Small:()=>Small,Sticky:()=>Sticky,StickyForLargeAndExtraLargeBreakpointsOnly:()=>StickyForLargeAndExtraLargeBreakpointsOnly,StickyWithContentAndFooter:()=>StickyWithContentAndFooter,WithActions:()=>WithActions,WithBreadcrumbs:()=>WithBreadcrumbs,WithBreadcrumbsInputActionsAndStepper:()=>WithBreadcrumbsInputActionsAndStepper,WithBreadcrumbsInputActionsAndStepperAndLongTitle:()=>WithBreadcrumbsInputActionsAndStepperAndLongTitle,WithBreadcrumbsInputActionsAndTabs:()=>WithBreadcrumbsInputActionsAndTabs,WithInput:()=>WithInput,WithStepper:()=>WithStepper,WithTabs:()=>WithTabs,WithoutBorder:()=>WithoutBorder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Page header",component:"ic-page-header",parameters:{layout:"fullscreen"}},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-page-header
        aligned=${args.aligned}
        border=${args.border}
        heading=${args.heading}
        reverse-order=${args["reverse-order"]}
        size=${args.size}
        sticky=${args.sticky}
        sticky-desktop-only=${args["sticky-desktop-only"]}
        subheading=${args.subheading}
        theme=${args.theme}
        style="
      ${""!==args["--ic-page-header-text-primary"]?`--ic-page-header-text-primary: ${args["--ic-page-header-text-primary"]};`:""}
      ${""!==args["--ic-page-header-background"]?`--ic-page-header-background: ${args["--ic-page-header-background"]};`:""}
      ${""!==args["--ic-page-header-border"]?`--ic-page-header-border: ${args["--ic-page-header-border"]};`:""}
      ${""!==args["--ic-page-header-text-tertiary"]?`--ic-page-header-text-tertiary: ${args["--ic-page-header-text-tertiary"]};`:""}
      ${""!==args["--ic-page-header-placeholder-text-field"]?`--ic-page-header-placeholder-text-field: ${args["--ic-page-header-placeholder-text-field"]};`:""}"
      >
        <ic-breadcrumb-group slot="breadcrumbs">
          <ic-breadcrumb
            current="true"
            page-title="Drinks"
            href="#"
          ></ic-breadcrumb>
          <ic-breadcrumb page-title="Coffees" href="#"> </ic-breadcrumb>
          <ic-breadcrumb page-title="Latte" href="#"></ic-breadcrumb>
        </ic-breadcrumb-group>
        <ic-chip slot="heading-adornment" label="Beta" size="large"></ic-chip>
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="left-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
        <ic-stepper slot="stepper">
          <ic-step heading="Warm kettle" type="completed"></ic-step>
          <ic-step
            heading="Warm milk"
            subheading="Optional"
            type="completed"
          ></ic-step>
          <ic-step heading="Pour milk" type="current" current></ic-step>
        </ic-stepper>
      </ic-page-header>
      <ic-section-container aligned=${args.aligned}>
        <ic-typography
          >Example page content to test out the sticky prop.</ic-typography
        >
        <ic-typography
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.</ic-typography
        >
        <ic-typography
          >Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
          enim est eleifend mi, non fermentum diam nisl sit amet
          erat.</ic-typography
        >
        <ic-typography
          >Duis semper. Duis arcu massa, scelerisque vitae, consequat in,
          pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
          pharetra tempor. Cras vestibulum bibendum augue.</ic-typography
        >
        <ic-typography
          >Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh.</ic-typography
        >
        <ic-typography
          >Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing
          ante non diam sodales hendrerit.</ic-typography
        >
        <ic-typography
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.</ic-typography
        >
        <ic-typography
          >Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
          enim est eleifend mi, non fermentum diam nisl sit amet
          erat.</ic-typography
        >
        <ic-typography
          >Duis semper. Duis arcu massa, scelerisque vitae, consequat in,
          pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
          pharetra tempor. Cras vestibulum bibendum augue.</ic-typography
        >
        <ic-typography
          >Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh.</ic-typography
        >
        <ic-typography
          >Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing
          ante non diam sodales hendrerit.</ic-typography
        >
        <ic-typography
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.</ic-typography
        >
        <ic-typography
          >Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
          enim est eleifend mi, non fermentum diam nisl sit amet
          erat.</ic-typography
        >
        <ic-typography
          >Duis semper. Duis arcu massa, scelerisque vitae, consequat in,
          pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
          pharetra tempor. Cras vestibulum bibendum augue.</ic-typography
        >
        <ic-typography
          >Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh.</ic-typography
        >
        <ic-typography
          >Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing
          ante non diam sodales hendrerit.</ic-typography
        >
      </ic-section-container>`,args:{aligned:"left",border:!0,heading:"Latte recipe","reverse-order":!1,size:"medium",sticky:!1,"sticky-desktop-only":!1,subheading:"A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam.",theme:"inherit","--ic-page-header-text-primary":"","--ic-page-header-background":"","--ic-page-header-border":"","--ic-page-header-text-tertiary":"","--ic-page-header-placeholder-text-field":""},name:"Playground",parameters:{layout:"fullscreen"},argTypes:{aligned:{options:["center","full-width","left"],control:{type:"inline-radio"}},size:{options:["medium","small"],control:{type:"inline-radio"}},theme:{options:["inherit","dark","light"],control:{type:"radio"}},"--ic-page-header-text-primary":{control:{type:"color"}},"--ic-page-header-background":{control:{type:"color"}},"--ic-page-header-border":{control:{type:"color"}},"--ic-page-header-text-tertiary":{control:{type:"color"}},"--ic-page-header-placeholder-text-field":{control:{type:"color"}}}},HeadingWithAdornment={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header heading="Page header">
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
  `,name:"Heading with adornment"},LeftAligned={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      aligned="left"
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
  `,name:"Left aligned"},Small={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      aligned="left"
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
      size="small"
    >
      <ic-status-tag
        slot="heading-adornment"
        label="Beta"
        size="small"
      ></ic-status-tag>
    </ic-page-header>
  `,name:"Small"},WithoutBorder={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header heading="Page header" border="false">
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
  `,name:"Without border"},CenterAligned={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      aligned="center"
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
  `,name:"Center aligned"},FullWidth={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      aligned="full-width"
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
  `,name:"Full width"},Sticky={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      sticky
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
  `,name:"Sticky"},StickyWithContentAndFooter={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-top-navigation app-title="ApplicationName">
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
    </ic-top-navigation>
    <ic-page-header
      sticky
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
    <ic-section-container style="height:800px">
      This is an example of how the sticky variant of the page header would work
      with some content and the footer.
    </ic-section-container>
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
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  `,name:"Sticky with content and footer"},StickyForLargeAndExtraLargeBreakpointsOnly={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-top-navigation app-title="ApplicationName">
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
    </ic-top-navigation>
    <ic-page-header
      sticky-desktop-only
      heading="Page header"
      subheading="This is a simple page header component and this is the text. This page header is only sticky for viewport widths of 992px and above."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
    <ic-section-container style="height:800px">
      This is an example of how the sticky-desktop-only variant of the page
      header would work with some content and the footer.
    </ic-section-container>
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
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  `,name:"Sticky for large and extra-large breakpoints only"},WithBreadcrumbs={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      heading="Page header"
      subheading="This is a page header component with additional functionality and this is the text."
      reverse-order
    >
      <ic-breadcrumb-group slot="breadcrumbs">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
    </ic-page-header>
  `,name:"With breadcrumbs"},WithActions={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      heading="Page header"
      subheading="This is a page header component with additional functionality and this is the text."
      reverse-order
    >
      <ic-button slot="actions" variant="primary"
        >Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </ic-button>
      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
    </ic-page-header>
  `,name:"With actions"},WithInput={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      heading="Page header"
      subheading="This is a page header component with additional functionality and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      <ic-text-field slot="input" placeholder="Enter your input" hide-label />
    </ic-page-header>
  `,name:"With input"},WithStepper={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      heading="Create a coffee"
      subheading="This is a page header component with additional functionality and this is the text."
    >
      <ic-stepper slot="stepper">
        <ic-step heading="Warm kettle" type="completed"></ic-step>
        <ic-step
          heading="Warm milk"
          subheading="Optional"
          type="completed"
        ></ic-step>
        <ic-step heading="Pour milk" type="current" current></ic-step>
      </ic-stepper>
    </ic-page-header>
  `,name:"With stepper"},WithTabs={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      heading="Coffee recipes"
      subheading="This is a page header component with additional functionality and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      <ic-navigation-item
        slot="tabs"
        label="All recipes"
        href="?path=/story/web-components-page-header--with-tabs"
        selected
        aria-label="This page shows all the recipes"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Favourites"
        href="?path=/story/web-components-page-header--with-tabs"
        aria-label="Show your favourite recipes"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Three"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Four"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Five"
        href="?path=/story/web-components-page-header--with-tabs"
        target="_blank"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Six"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Seven"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Eight"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Nine"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Ten"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
    </ic-page-header>
  `,name:"With tabs"},WithBreadcrumbsInputActionsAndTabs={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      heading="Coffee recipes"
      subheading="This is a page header component that has breadcrumbs, an input area, actions & tabs."
      reverse-order
    >
      <ic-breadcrumb-group slot="breadcrumbs">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      <ic-button slot="actions" variant="primary"
        >Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </ic-button>
      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
      <ic-navigation-item
        slot="tabs"
        label="All recipes"
        href="?path=/story/web-components-page-header--with-tabs"
        selected
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Favourites"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-text-field slot="input" placeholder="Enter your input" hide-label />
    </ic-page-header>
  `,name:"With breadcrumbs, input, actions and tabs"},WithBreadcrumbsInputActionsAndStepper={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      heading="Coffee recipes"
      subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."
      reverse-order
    >
      <ic-breadcrumb-group slot="breadcrumbs">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      <ic-button slot="actions" variant="primary"
        >Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </ic-button>
      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
      <ic-stepper slot="stepper">
        <ic-step heading="Warm kettle" type="completed"></ic-step>
        <ic-step
          heading="Warm milk"
          subheading="Optional"
          type="completed"
        ></ic-step>
        <ic-step heading="Pour milk" type="current" current></ic-step>
      </ic-stepper>
      <ic-text-field slot="input" placeholder="Enter your input" hide-label />
    </ic-page-header>
  `,name:"With breadcrumbs, input, actions and stepper"},ComponentOverrides={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header>
      <ic-typography slot="heading" variant="h4">
        <h2>heading</h2>
      </ic-typography>
      <ic-typography slot="subheading" variant="body">
        subheading
      </ic-typography>
    </ic-page-header>
  `,name:"Component overrides"},WithBreadcrumbsInputActionsAndStepperAndLongTitle={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      heading="Coffee recipes with a very very long title"
      subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."
      reverse-order
    >
      <ic-breadcrumb-group slot="breadcrumbs">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      <ic-button slot="actions" variant="primary"
        >Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </ic-button>
      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
      <ic-stepper slot="stepper">
        <ic-step heading="Warm kettle" type="completed"></ic-step>
        <ic-step
          heading="Warm milk"
          subheading="Optional"
          type="completed"
        ></ic-step>
        <ic-step heading="Pour milk" type="current" current></ic-step>
      </ic-stepper>
      <ic-text-field slot="input" placeholder="Enter your input" hide-label />
    </ic-page-header>
  `,name:"With breadcrumbs, input, actions and stepper and long title"},DarkTheme={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-page-header
      heading="Coffee recipes"
      subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."
      reverse-order="true"
      theme="dark"
    >
      <ic-breadcrumb-group slot="breadcrumbs">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-chip slot="heading-adornment" label="Beta" size="large"></ic-chip>
      <ic-button slot="actions" variant="primary"
        >Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </ic-button>
      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
      <ic-stepper slot="stepper">
        <ic-step heading="Warm kettle" type="completed"></ic-step>
        <ic-step
          heading="Warm milk"
          subheading="Optional"
          type="completed"
        ></ic-step>
        <ic-step heading="Pour milk" type="current" current></ic-step>
      </ic-stepper>
      <ic-text-field slot="input" placeholder="Enter your input" hide-label />
    </ic-page-header>
  `,name:"Dark theme"},__namedExportsOrder=["Playground","HeadingWithAdornment","LeftAligned","Small","WithoutBorder","CenterAligned","FullWidth","Sticky","StickyWithContentAndFooter","StickyForLargeAndExtraLargeBreakpointsOnly","WithBreadcrumbs","WithActions","WithInput","WithStepper","WithTabs","WithBreadcrumbsInputActionsAndTabs","WithBreadcrumbsInputActionsAndStepper","ComponentOverrides","WithBreadcrumbsInputActionsAndStepperAndLongTitle","DarkTheme"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-page-header\n        aligned=${args.aligned}\n        border=${args.border}\n        heading=${args.heading}\n        reverse-order=${args["reverse-order"]}\n        size=${args.size}\n        sticky=${args.sticky}\n        sticky-desktop-only=${args["sticky-desktop-only"]}\n        subheading=${args.subheading}\n        theme=${args.theme}\n        style="\n      ${args["--ic-page-header-text-primary"] !== "" ? `--ic-page-header-text-primary: ${args["--ic-page-header-text-primary"]};` : ""}\n      ${args["--ic-page-header-background"] !== "" ? `--ic-page-header-background: ${args["--ic-page-header-background"]};` : ""}\n      ${args["--ic-page-header-border"] !== "" ? `--ic-page-header-border: ${args["--ic-page-header-border"]};` : ""}\n      ${args["--ic-page-header-text-tertiary"] !== "" ? `--ic-page-header-text-tertiary: ${args["--ic-page-header-text-tertiary"]};` : ""}\n      ${args["--ic-page-header-placeholder-text-field"] !== "" ? `--ic-page-header-placeholder-text-field: ${args["--ic-page-header-placeholder-text-field"]};` : ""}"\n      >\n        <ic-breadcrumb-group slot="breadcrumbs">\n          <ic-breadcrumb\n            current="true"\n            page-title="Drinks"\n            href="#"\n          ></ic-breadcrumb>\n          <ic-breadcrumb page-title="Coffees" href="#"> </ic-breadcrumb>\n          <ic-breadcrumb page-title="Latte" href="#"></ic-breadcrumb>\n        </ic-breadcrumb-group>\n        <ic-chip slot="heading-adornment" label="Beta" size="large"></ic-chip>\n        <ic-button slot="actions" variant="primary"\n          >Create coffee\n          <svg\n            slot="left-icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-button>\n        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n        <ic-stepper slot="stepper">\n          <ic-step heading="Warm kettle" type="completed"></ic-step>\n          <ic-step\n            heading="Warm milk"\n            subheading="Optional"\n            type="completed"\n          ></ic-step>\n          <ic-step heading="Pour milk" type="current" current></ic-step>\n        </ic-stepper>\n      </ic-page-header>\n      <ic-section-container aligned=${args.aligned}>\n        <ic-typography\n          >Example page content to test out the sticky prop.</ic-typography\n        >\n        <ic-typography\n          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non\n          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\n          ultricies sed, dolor.</ic-typography\n        >\n        <ic-typography\n          >Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper\n          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,\n          enim est eleifend mi, non fermentum diam nisl sit amet\n          erat.</ic-typography\n        >\n        <ic-typography\n          >Duis semper. Duis arcu massa, scelerisque vitae, consequat in,\n          pretium a, enim. Pellentesque congue. Ut in risus volutpat libero\n          pharetra tempor. Cras vestibulum bibendum augue.</ic-typography\n        >\n        <ic-typography\n          >Praesent egestas leo in pede. Praesent blandit odio eu enim.\n          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum\n          primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n          Aliquam nibh.</ic-typography\n        >\n        <ic-typography\n          >Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing\n          ante non diam sodales hendrerit.</ic-typography\n        >\n        <ic-typography\n          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non\n          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\n          ultricies sed, dolor.</ic-typography\n        >\n        <ic-typography\n          >Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper\n          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,\n          enim est eleifend mi, non fermentum diam nisl sit amet\n          erat.</ic-typography\n        >\n        <ic-typography\n          >Duis semper. Duis arcu massa, scelerisque vitae, consequat in,\n          pretium a, enim. Pellentesque congue. Ut in risus volutpat libero\n          pharetra tempor. Cras vestibulum bibendum augue.</ic-typography\n        >\n        <ic-typography\n          >Praesent egestas leo in pede. Praesent blandit odio eu enim.\n          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum\n          primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n          Aliquam nibh.</ic-typography\n        >\n        <ic-typography\n          >Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing\n          ante non diam sodales hendrerit.</ic-typography\n        >\n        <ic-typography\n          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non\n          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\n          ultricies sed, dolor.</ic-typography\n        >\n        <ic-typography\n          >Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper\n          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,\n          enim est eleifend mi, non fermentum diam nisl sit amet\n          erat.</ic-typography\n        >\n        <ic-typography\n          >Duis semper. Duis arcu massa, scelerisque vitae, consequat in,\n          pretium a, enim. Pellentesque congue. Ut in risus volutpat libero\n          pharetra tempor. Cras vestibulum bibendum augue.</ic-typography\n        >\n        <ic-typography\n          >Praesent egestas leo in pede. Praesent blandit odio eu enim.\n          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum\n          primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n          Aliquam nibh.</ic-typography\n        >\n        <ic-typography\n          >Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing\n          ante non diam sodales hendrerit.</ic-typography\n        >\n      </ic-section-container>`,\n  args: defaultArgs,\n  name: "Playground",\n  parameters: {\n    layout: "fullscreen"\n  },\n  argTypes: {\n    aligned: {\n      options: ["center", "full-width", "left"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    size: {\n      options: ["medium", "small"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    theme: {\n      options: ["inherit", "dark", "light"],\n      control: {\n        type: "radio"\n      }\n    },\n    "--ic-page-header-text-primary": {\n      control: {\n        type: "color"\n      }\n    },\n    "--ic-page-header-background": {\n      control: {\n        type: "color"\n      }\n    },\n    "--ic-page-header-border": {\n      control: {\n        type: "color"\n      }\n    },\n    "--ic-page-header-text-tertiary": {\n      control: {\n        type: "color"\n      }\n    },\n    "--ic-page-header-placeholder-text-field": {\n      control: {\n        type: "color"\n      }\n    }\n  }\n}',...Playground.parameters?.docs?.source}}},HeadingWithAdornment.parameters={...HeadingWithAdornment.parameters,docs:{...HeadingWithAdornment.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header heading="Page header">\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n    </ic-page-header>\n  `,\n  name: "Heading with adornment"\n}',...HeadingWithAdornment.parameters?.docs?.source}}},LeftAligned.parameters={...LeftAligned.parameters,docs:{...LeftAligned.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      aligned="left"\n      heading="Page header"\n      subheading="This is a simple page header component and this is the text."\n    >\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n    </ic-page-header>\n  `,\n  name: "Left aligned"\n}',...LeftAligned.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      aligned="left"\n      heading="Page header"\n      subheading="This is a simple page header component and this is the text."\n      size="small"\n    >\n      <ic-status-tag\n        slot="heading-adornment"\n        label="Beta"\n        size="small"\n      ></ic-status-tag>\n    </ic-page-header>\n  `,\n  name: "Small"\n}',...Small.parameters?.docs?.source}}},WithoutBorder.parameters={...WithoutBorder.parameters,docs:{...WithoutBorder.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header heading="Page header" border="false">\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n    </ic-page-header>\n  `,\n  name: "Without border"\n}',...WithoutBorder.parameters?.docs?.source}}},CenterAligned.parameters={...CenterAligned.parameters,docs:{...CenterAligned.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      aligned="center"\n      heading="Page header"\n      subheading="This is a simple page header component and this is the text."\n    >\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n    </ic-page-header>\n  `,\n  name: "Center aligned"\n}',...CenterAligned.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      aligned="full-width"\n      heading="Page header"\n      subheading="This is a simple page header component and this is the text."\n    >\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n    </ic-page-header>\n  `,\n  name: "Full width"\n}',...FullWidth.parameters?.docs?.source}}},Sticky.parameters={...Sticky.parameters,docs:{...Sticky.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      sticky\n      heading="Page header"\n      subheading="This is a simple page header component and this is the text."\n    >\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n    </ic-page-header>\n  `,\n  name: "Sticky"\n}',...Sticky.parameters?.docs?.source}}},StickyWithContentAndFooter.parameters={...StickyWithContentAndFooter.parameters,docs:{...StickyWithContentAndFooter.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-top-navigation app-title="ApplicationName">\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n    </ic-top-navigation>\n    <ic-page-header\n      sticky\n      heading="Page header"\n      subheading="This is a simple page header component and this is the text."\n    >\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n    </ic-page-header>\n    <ic-section-container style="height:800px">\n      This is an example of how the sticky variant of the page header would work\n      with some content and the footer.\n    </ic-section-container>\n    <ic-footer\n      description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n    >\n      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n      <div\n        slot="logo"\n        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n      >\n        Logo\n      </div>\n    </ic-footer>\n  `,\n  name: "Sticky with content and footer"\n}',...StickyWithContentAndFooter.parameters?.docs?.source}}},StickyForLargeAndExtraLargeBreakpointsOnly.parameters={...StickyForLargeAndExtraLargeBreakpointsOnly.parameters,docs:{...StickyForLargeAndExtraLargeBreakpointsOnly.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-top-navigation app-title="ApplicationName">\n      <svg\n        slot="app-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n        />\n      </svg>\n    </ic-top-navigation>\n    <ic-page-header\n      sticky-desktop-only\n      heading="Page header"\n      subheading="This is a simple page header component and this is the text. This page header is only sticky for viewport widths of 992px and above."\n    >\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n    </ic-page-header>\n    <ic-section-container style="height:800px">\n      This is an example of how the sticky-desktop-only variant of the page\n      header would work with some content and the footer.\n    </ic-section-container>\n    <ic-footer\n      description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \n          please get in touch."\n      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n    >\n      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n      <div\n        slot="logo"\n        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n      >\n        Logo\n      </div>\n    </ic-footer>\n  `,\n  name: "Sticky for large and extra-large breakpoints only"\n}',...StickyForLargeAndExtraLargeBreakpointsOnly.parameters?.docs?.source}}},WithBreadcrumbs.parameters={...WithBreadcrumbs.parameters,docs:{...WithBreadcrumbs.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      heading="Page header"\n      subheading="This is a page header component with additional functionality and this is the text."\n      reverse-order\n    >\n      <ic-breadcrumb-group slot="breadcrumbs">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="true"\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n    </ic-page-header>\n  `,\n  name: "With breadcrumbs"\n}',...WithBreadcrumbs.parameters?.docs?.source}}},WithActions.parameters={...WithActions.parameters,docs:{...WithActions.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      heading="Page header"\n      subheading="This is a page header component with additional functionality and this is the text."\n      reverse-order\n    >\n      <ic-button slot="actions" variant="primary"\n        >Create coffee\n        <svg\n          slot="left-icon"\n          width="24"\n          height="24"\n          viewBox="0 0 24 24"\n          fill="none"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n            fill="currentColor"\n          />\n        </svg>\n      </ic-button>\n      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n    </ic-page-header>\n  `,\n  name: "With actions"\n}',...WithActions.parameters?.docs?.source}}},WithInput.parameters={...WithInput.parameters,docs:{...WithInput.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      heading="Page header"\n      subheading="This is a page header component with additional functionality and this is the text."\n    >\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      <ic-text-field slot="input" placeholder="Enter your input" hide-label />\n    </ic-page-header>\n  `,\n  name: "With input"\n}',...WithInput.parameters?.docs?.source}}},WithStepper.parameters={...WithStepper.parameters,docs:{...WithStepper.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      heading="Create a coffee"\n      subheading="This is a page header component with additional functionality and this is the text."\n    >\n      <ic-stepper slot="stepper">\n        <ic-step heading="Warm kettle" type="completed"></ic-step>\n        <ic-step\n          heading="Warm milk"\n          subheading="Optional"\n          type="completed"\n        ></ic-step>\n        <ic-step heading="Pour milk" type="current" current></ic-step>\n      </ic-stepper>\n    </ic-page-header>\n  `,\n  name: "With stepper"\n}',...WithStepper.parameters?.docs?.source}}},WithTabs.parameters={...WithTabs.parameters,docs:{...WithTabs.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      heading="Coffee recipes"\n      subheading="This is a page header component with additional functionality and this is the text."\n    >\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      <ic-navigation-item\n        slot="tabs"\n        label="All recipes"\n        href="?path=/story/web-components-page-header--with-tabs"\n        selected\n        aria-label="This page shows all the recipes"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="tabs"\n        label="Favourites"\n        href="?path=/story/web-components-page-header--with-tabs"\n        aria-label="Show your favourite recipes"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="tabs"\n        label="Section Three"\n        href="?path=/story/web-components-page-header--with-tabs"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="tabs"\n        label="Section Four"\n        href="?path=/story/web-components-page-header--with-tabs"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="tabs"\n        label="Section Five"\n        href="?path=/story/web-components-page-header--with-tabs"\n        target="_blank"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="tabs"\n        label="Section Six"\n        href="?path=/story/web-components-page-header--with-tabs"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="tabs"\n        label="Section Seven"\n        href="?path=/story/web-components-page-header--with-tabs"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="tabs"\n        label="Section Eight"\n        href="?path=/story/web-components-page-header--with-tabs"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="tabs"\n        label="Section Nine"\n        href="?path=/story/web-components-page-header--with-tabs"\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="tabs"\n        label="Section Ten"\n        href="?path=/story/web-components-page-header--with-tabs"\n      ></ic-navigation-item>\n    </ic-page-header>\n  `,\n  name: "With tabs"\n}',...WithTabs.parameters?.docs?.source}}},WithBreadcrumbsInputActionsAndTabs.parameters={...WithBreadcrumbsInputActionsAndTabs.parameters,docs:{...WithBreadcrumbsInputActionsAndTabs.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      heading="Coffee recipes"\n      subheading="This is a page header component that has breadcrumbs, an input area, actions & tabs."\n      reverse-order\n    >\n      <ic-breadcrumb-group slot="breadcrumbs">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="true"\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      <ic-button slot="actions" variant="primary"\n        >Create coffee\n        <svg\n          slot="left-icon"\n          width="24"\n          height="24"\n          viewBox="0 0 24 24"\n          fill="none"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n            fill="currentColor"\n          />\n        </svg>\n      </ic-button>\n      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n      <ic-navigation-item\n        slot="tabs"\n        label="All recipes"\n        href="?path=/story/web-components-page-header--with-tabs"\n        selected\n      ></ic-navigation-item>\n      <ic-navigation-item\n        slot="tabs"\n        label="Favourites"\n        href="?path=/story/web-components-page-header--with-tabs"\n      ></ic-navigation-item>\n      <ic-text-field slot="input" placeholder="Enter your input" hide-label />\n    </ic-page-header>\n  `,\n  name: "With breadcrumbs, input, actions and tabs"\n}',...WithBreadcrumbsInputActionsAndTabs.parameters?.docs?.source}}},WithBreadcrumbsInputActionsAndStepper.parameters={...WithBreadcrumbsInputActionsAndStepper.parameters,docs:{...WithBreadcrumbsInputActionsAndStepper.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      heading="Coffee recipes"\n      subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."\n      reverse-order\n    >\n      <ic-breadcrumb-group slot="breadcrumbs">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="true"\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      <ic-button slot="actions" variant="primary"\n        >Create coffee\n        <svg\n          slot="left-icon"\n          width="24"\n          height="24"\n          viewBox="0 0 24 24"\n          fill="none"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n            fill="currentColor"\n          />\n        </svg>\n      </ic-button>\n      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n      <ic-stepper slot="stepper">\n        <ic-step heading="Warm kettle" type="completed"></ic-step>\n        <ic-step\n          heading="Warm milk"\n          subheading="Optional"\n          type="completed"\n        ></ic-step>\n        <ic-step heading="Pour milk" type="current" current></ic-step>\n      </ic-stepper>\n      <ic-text-field slot="input" placeholder="Enter your input" hide-label />\n    </ic-page-header>\n  `,\n  name: "With breadcrumbs, input, actions and stepper"\n}',...WithBreadcrumbsInputActionsAndStepper.parameters?.docs?.source}}},ComponentOverrides.parameters={...ComponentOverrides.parameters,docs:{...ComponentOverrides.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header>\n      <ic-typography slot="heading" variant="h4">\n        <h2>heading</h2>\n      </ic-typography>\n      <ic-typography slot="subheading" variant="body">\n        subheading\n      </ic-typography>\n    </ic-page-header>\n  `,\n  name: "Component overrides"\n}',...ComponentOverrides.parameters?.docs?.source}}},WithBreadcrumbsInputActionsAndStepperAndLongTitle.parameters={...WithBreadcrumbsInputActionsAndStepperAndLongTitle.parameters,docs:{...WithBreadcrumbsInputActionsAndStepperAndLongTitle.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      heading="Coffee recipes with a very very long title"\n      subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."\n      reverse-order\n    >\n      <ic-breadcrumb-group slot="breadcrumbs">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="true"\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>\n      <ic-button slot="actions" variant="primary"\n        >Create coffee\n        <svg\n          slot="left-icon"\n          width="24"\n          height="24"\n          viewBox="0 0 24 24"\n          fill="none"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n            fill="currentColor"\n          />\n        </svg>\n      </ic-button>\n      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n      <ic-stepper slot="stepper">\n        <ic-step heading="Warm kettle" type="completed"></ic-step>\n        <ic-step\n          heading="Warm milk"\n          subheading="Optional"\n          type="completed"\n        ></ic-step>\n        <ic-step heading="Pour milk" type="current" current></ic-step>\n      </ic-stepper>\n      <ic-text-field slot="input" placeholder="Enter your input" hide-label />\n    </ic-page-header>\n  `,\n  name: "With breadcrumbs, input, actions and stepper and long title"\n}',...WithBreadcrumbsInputActionsAndStepperAndLongTitle.parameters?.docs?.source}}},DarkTheme.parameters={...DarkTheme.parameters,docs:{...DarkTheme.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-page-header\n      heading="Coffee recipes"\n      subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."\n      reverse-order="true"\n      theme="dark"\n    >\n      <ic-breadcrumb-group slot="breadcrumbs">\n        <ic-breadcrumb\n          page-title="Breadcrumb 1"\n          href="/breadcrumb-1"\n        ></ic-breadcrumb>\n        <ic-breadcrumb\n          current="true"\n          page-title="Breadcrumb 2"\n          href="/breadcrumb-2"\n        ></ic-breadcrumb>\n      </ic-breadcrumb-group>\n      <ic-chip slot="heading-adornment" label="Beta" size="large"></ic-chip>\n      <ic-button slot="actions" variant="primary"\n        >Create coffee\n        <svg\n          slot="left-icon"\n          width="24"\n          height="24"\n          viewBox="0 0 24 24"\n          fill="none"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"\n            fill="currentColor"\n          />\n        </svg>\n      </ic-button>\n      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>\n      <ic-stepper slot="stepper">\n        <ic-step heading="Warm kettle" type="completed"></ic-step>\n        <ic-step\n          heading="Warm milk"\n          subheading="Optional"\n          type="completed"\n        ></ic-step>\n        <ic-step heading="Pour milk" type="current" current></ic-step>\n      </ic-stepper>\n      <ic-text-field slot="input" placeholder="Enter your input" hide-label />\n    </ic-page-header>\n  `,\n  name: "Dark theme"\n}',...DarkTheme.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-page-header-ic-page-header-stories.236a9c0b.iframe.bundle.js.map