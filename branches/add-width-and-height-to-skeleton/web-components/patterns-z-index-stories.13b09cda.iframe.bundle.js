/*! For license information please see patterns-z-index-stories.13b09cda.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5272,582,6199,6763],{"./src/patterns/z-index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComponentZIndex:()=>ComponentZIndex,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Patterns/Component z-index"},ComponentZIndex={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      ic-toast {
        --bottom-position: 50px;
      }
    </style>
    <div style="display:flex;">
      <ic-skip-link target="main"></ic-skip-link>
      <ic-side-navigation
        app-title="Application Name"
        version="v0.0.7"
        status="BETA"
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
          <ic-top-navigation
            app-title="Application Name"
            status="beta"
            version="v0.0.7"
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
              id="top-nav-search-bar"
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
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
                selected="true"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
            </ic-navigation-group>
            <ic-navigation-group
              slot="navigation"
              label="Second navigation group"
              expandable="true"
            >
              <ic-navigation-item
                label="Different navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
              <ic-navigation-item
                label="Navigation"
                href="/"
              ></ic-navigation-item>
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
          <span id="main"></span>
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
              id="page-header-search-bar"
              characters-until-suggestion="1"
              slot="input"
              label="What is your favourite coffee?"
            ></ic-search-bar>
          </ic-page-header>
          <ic-section-container id="top-target">
            <ic-typography
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum venenatis facilisis. Nam tortor felis, auctor vel ante
              quis, tempor interdum libero. In dictum sodales velit, eu egestas
              arcu dignissim ac. Aliquam facilisis eros dolor, id laoreet orci
              sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna
              interdum risus, vel fringilla libero ex eu dui. Suspendisse
              ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae
              congue ligula rutrum id.</ic-typography
            >
            <ic-button onclick="showToast()">Display toast</ic-button>
            <ic-typography
              >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
              ex nibh porttitor tellus, vel molestie justo odio vel purus.
              Curabitur porttitor, tortor sed semper sollicitudin, odio odio
              congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
              commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
              ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
              Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
              lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris. Nam
              non lorem ante.</ic-typography
            >
            <ic-typography
              >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
              urna in commodo. Proin mauris augue, viverra id finibus id,
              vulputate in ante. Aliquam volutpat hendrerit tellus vitae
              tristique. Donec pellentesque enim arcu, at feugiat mauris
              venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam eros,
              iaculis ac est nec, tempus feugiat nisl. Suspendisse eget interdum
              lorem. Phasellus pretium urna id elit pharetra
              hendrerit.</ic-typography
            >
            <ic-typography
              >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
              quis pretium velit ante nec felis. Vivamus efficitur scelerisque
              dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
              orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
              ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
              nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
              imperdiet est. Duis erat nibh, lacinia vitae faucibus non, aliquam
              in dolor. Nam interdum felis vitae feugiat posuere. Cras volutpat
              molestie ipsum, sed auctor quam volutpat vitae. Vivamus lobortis
              scelerisque libero vel scelerisque.</ic-typography
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
            <ic-toast-region>
              <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>
            </ic-toast-region>
          </ic-section-container>
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
              background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
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
      document.querySelector("#top-nav-search-bar").options = options;
      var toastRegion = document.querySelector("ic-toast-region");
      function showToast() {
        var x = document.getElementById("toast1");
        toastRegion.openToast = x;
      }
    </script>
  `,name:"Component z-index",parameters:{layout:"fullscreen"}},__namedExportsOrder=["ComponentZIndex"];ComponentZIndex.parameters={...ComponentZIndex.parameters,docs:{...ComponentZIndex.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <style>\n      ic-toast {\n        --bottom-position: 50px;\n      }\n    </style>\n    <div style="display:flex;">\n      <ic-skip-link target="main"></ic-skip-link>\n      <ic-side-navigation\n        app-title="Application Name"\n        version="v0.0.7"\n        status="BETA"\n      >\n        <svg\n          slot="app-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n          />\n        </svg>\n        <ic-navigation-item slot="primary-navigation" href="/" label="Home">\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-navigation-item>\n        <ic-navigation-item\n          slot="primary-navigation"\n          href="/"\n          label="Search"\n          selected="true"\n        >\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-navigation-item>\n        <ic-divider slot="primary-navigation"></ic-divider>\n        <ic-navigation-item slot="primary-navigation" href="/" label="Trends">\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-navigation-item>\n        <ic-navigation-group\n          slot="primary-navigation"\n          label="Second navigation group"\n          expandable="true"\n        >\n          <ic-navigation-item label="Different navigation" href="/">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n          <ic-navigation-item label="Navigation" href="/">\n            <svg\n              slot="icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z"\n                fill="currentColor"\n              />\n            </svg>\n          </ic-navigation-item>\n        </ic-navigation-group>\n        <ic-navigation-item\n          slot="primary-navigation"\n          href="/"\n          label="This is a very very very long label for the navigation item"\n        >\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-navigation-item>\n        <ic-navigation-item\n          slot="secondary-navigation"\n          href="/"\n          label="Settings"\n        >\n          <svg\n            slot="icon"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n              fill="currentColor"\n            />\n          </svg>\n        </ic-navigation-item>\n      </ic-side-navigation>\n      <div\n        class="content-wrapper"\n        style="display:flex; flex-direction: column; flex-grow: 1;"\n      >\n        <main id="main">\n          <ic-top-navigation\n            app-title="Application Name"\n            status="beta"\n            version="v0.0.7"\n          >\n            <svg\n              slot="app-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n              />\n            </svg>\n            <ic-search-bar\n              slot="search"\n              placeholder="Search"\n              label="Search"\n              id="top-nav-search-bar"\n            ></ic-search-bar>\n            <ic-navigation-button\n              label="button1"\n              slot="buttons"\n              onclick="alert(\'test\')"\n            >\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n                fill="#000000"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"\n                />\n              </svg>\n            </ic-navigation-button>\n            <ic-navigation-group\n              slot="navigation"\n              label="Navigation group"\n              expandable="true"\n            >\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n                selected="true"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n            </ic-navigation-group>\n            <ic-navigation-group\n              slot="navigation"\n              label="Second navigation group"\n              expandable="true"\n            >\n              <ic-navigation-item\n                label="Different navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n              <ic-navigation-item\n                label="Navigation"\n                href="/"\n              ></ic-navigation-item>\n            </ic-navigation-group>\n          </ic-top-navigation>\n          <span id="main"></span>\n          <ic-page-header\n            heading="Page header"\n            subheading="This is a page header component with additional functionality and this is the text."\n            aligned="full-width"\n            sticky\n          >\n            <ic-status-tag\n              slot="heading-adornment"\n              label="Beta"\n            ></ic-status-tag>\n            <ic-search-bar\n              id="page-header-search-bar"\n              characters-until-suggestion="1"\n              slot="input"\n              label="What is your favourite coffee?"\n            ></ic-search-bar>\n          </ic-page-header>\n          <ic-section-container id="top-target">\n            <ic-typography\n              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n              vestibulum venenatis facilisis. Nam tortor felis, auctor vel ante\n              quis, tempor interdum libero. In dictum sodales velit, eu egestas\n              arcu dignissim ac. Aliquam facilisis eros dolor, id laoreet orci\n              sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna\n              interdum risus, vel fringilla libero ex eu dui. Suspendisse\n              ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae\n              congue ligula rutrum id.</ic-typography\n            >\n            <ic-button onclick="showToast()">Display toast</ic-button>\n            <ic-typography\n              >Etiam in suscipit metus. Duis semper, sapien a molestie semper,\n              ex nibh porttitor tellus, vel molestie justo odio vel purus.\n              Curabitur porttitor, tortor sed semper sollicitudin, odio odio\n              congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies\n              commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt\n              ullamcorper sit amet in metus. Aenean facilisis placerat dictum.\n              Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor\n              lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris. Nam\n              non lorem ante.</ic-typography\n            >\n            <ic-typography\n              >Donec aliquam eget mauris condimentum cursus. Nullam tempus a\n              urna in commodo. Proin mauris augue, viverra id finibus id,\n              vulputate in ante. Aliquam volutpat hendrerit tellus vitae\n              tristique. Donec pellentesque enim arcu, at feugiat mauris\n              venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam eros,\n              iaculis ac est nec, tempus feugiat nisl. Suspendisse eget interdum\n              lorem. Phasellus pretium urna id elit pharetra\n              hendrerit.</ic-typography\n            >\n            <ic-typography\n              >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,\n              quis pretium velit ante nec felis. Vivamus efficitur scelerisque\n              dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue\n              orci, congue rutrum velit malesuada gravida. Nunc magna mauris,\n              ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae\n              nunc gravida consectetur. Pellentesque id malesuada ex, sit amet\n              imperdiet est. Duis erat nibh, lacinia vitae faucibus non, aliquam\n              in dolor. Nam interdum felis vitae feugiat posuere. Cras volutpat\n              molestie ipsum, sed auctor quam volutpat vitae. Vivamus lobortis\n              scelerisque libero vel scelerisque.</ic-typography\n            >\n            <ic-typography\n              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent\n              eget orci condimentum, tempus tortor posuere, lacinia ex.\n              Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet orci a\n              risus facilisis porta. Orci varius natoque penatibus et magnis dis\n              parturient montes, nascetur ridiculus mus. Curabitur a porttitor\n              neque, ac dignissim velit. Morbi quis malesuada massa, vitae\n              sodales tellus. Aenean laoreet mattis lobortis. In mauris erat,\n              tincidunt in placerat sed, pretium ac tortor. Morbi blandit lacus\n              a leo vehicula aliquet.</ic-typography\n            >\n            <ic-typography\n              >Pellentesque aliquam risus vel eros maximus, at pellentesque mi\n              pretium. Etiam nec velit at orci varius porttitor. Aliquam\n              facilisis, elit non cursus fringilla, metus metus malesuada lacus,\n              at blandit nibh augue aliquet orci. Duis aliquam, est eget sodales\n              ullamcorper, eros turpis euismod nulla, sed sollicitudin diam\n              massa semper purus. Vivamus vel turpis ipsum. Interdum et\n              malesuada fames ac ante ipsum primis in faucibus. Morbi euismod\n              turpis dapibus quam fermentum condimentum. Mauris ex orci,\n              consequat quis tempor eu, finibus vitae eros. Ut eu erat eu ipsum\n              pulvinar cursus vel at dui. Etiam tincidunt quam porta nulla\n              suscipit vestibulum. Sed iaculis enim leo, et aliquam justo\n              feugiat in. Vivamus in ornare nulla, at tempor massa. Sed et\n              aliquam nisi.</ic-typography\n            >\n            <ic-typography\n              >Mauris tempus accumsan libero non tincidunt. Curabitur et leo\n              orci. Suspendisse molestie posuere leo vitae posuere. Cras lacinia\n              urna non erat gravida sagittis. Quisque dapibus arcu nec sem\n              pharetra convallis. Nullam sed arcu mollis, posuere elit at,\n              condimentum ligula. Nullam maximus nulla quam, ut euismod est\n              feugiat at. Quisque ut venenatis ex, in facilisis sapien.\n              Pellentesque in orci vitae metus iaculis venenatis. Nunc porttitor\n              tellus arcu, in posuere quam vulputate nec. Aenean in venenatis\n              ligula, non mollis quam. Suspendisse nec enim vel massa finibus\n              pretium et a urna. Etiam suscipit semper est, id efficitur diam\n              sollicitudin nec. Nullam nibh sapien, condimentum ut laoreet et,\n              euismod ac mi. Vestibulum tristique odio non risus ullamcorper, et\n              aliquam turpis varius. Nunc metus ex, tempus a augue sit amet,\n              interdum vulputate libero.</ic-typography\n            >\n            <ic-typography\n              >Aenean convallis libero id magna congue pellentesque. Nulla\n              iaculis interdum porta. Aenean laoreet scelerisque nulla vel\n              molestie. Class aptent taciti sociosqu ad litora torquent per\n              conubia nostra, per inceptos himenaeos. Integer sollicitudin in\n              felis vitae rhoncus. Sed eu elementum massa. Cras ut accumsan\n              risus. Donec nec augue justo. Aenean sagittis luctus leo egestas\n              consectetur. Sed sit amet nisl quis felis volutpat facilisis ac\n              vitae tellus. Curabitur pharetra commodo consequat. Aliquam\n              consequat ipsum lacus, sed faucibus sapien mollis\n              vel.</ic-typography\n            >\n            <ic-toast-region>\n              <ic-toast id="toast1" heading="Your coffee is ready"></ic-toast>\n            </ic-toast-region>\n          </ic-section-container>\n        </main>\n        <ic-back-to-top target="main"></ic-back-to-top>\n        <ic-footer\n          description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n              please get in touch."\n          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."\n        >\n          <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Styles</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Components</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>\n          <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>\n          <div\n            slot="logo"\n            style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;\n              background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"\n          >\n            Logo\n          </div>\n        </ic-footer>\n      </div>\n    </div>\n    <ic-classification-banner\n      classification="official"\n    ></ic-classification-banner>\n    <script>\n      const options = [\n        { label: "Espresso", value: "espresso" },\n        { label: "Double Espresso", value: "doubleespresso" },\n        { label: "Flat White", value: "flatwhite" },\n        { label: "Cappuccino", value: "cappuccino" },\n        { label: "Americano", value: "americano" },\n        { label: "Ameno", value: "ameno" },\n        { label: "Aicano", value: "acano" },\n        { label: "Mocha", value: "mocha" },\n      ];\n      document.querySelector("#page-header-search-bar").options = options;\n      document.querySelector("#top-nav-search-bar").options = options;\n      var toastRegion = document.querySelector("ic-toast-region");\n      function showToast() {\n        var x = document.getElementById("toast1");\n        toastRegion.openToast = x;\n      }\n    <\/script>\n  `,\n  name: "Component z-index",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...ComponentZIndex.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=patterns-z-index-stories.13b09cda.iframe.bundle.js.map