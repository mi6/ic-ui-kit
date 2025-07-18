import { html } from "lit-html";

export default {
  title: "Patterns/Component z-index",
};

export const ComponentZIndex = {
  render: () => html`
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
  `,

  name: "Component z-index",

  parameters: {
    layout: "fullscreen",
  },
};
