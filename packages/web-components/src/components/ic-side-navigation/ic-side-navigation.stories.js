import { html } from "lit-html";

const defaultArgs = {
  appTitle: "Test App Title",
  version: "v1.0.0",
  status: "BETA",
  href: "https://www.google.com",
  navOneLabel: "Navigation One",
  collapsedIconLabels: false,
  disableTopBarBehaviour: false,
  expanded: true,
  static: false,
  closeOnNavItemClick: false,
};

export default {
  title: "Web Components/Side navigation",
  component: "ic-side-navigation",
};

export const Default = {
  render: () => html`
    <div style="display:flex; height:100%;">
      <ic-side-navigation
        app-title="Application Name"
        version="v0.0.0"
        status="BETA"
        href="https://www.google.com/"
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
        <ic-navigation-item
          slot="primary-navigation"
          href="/"
          label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"
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
        <ic-navigation-item
          slot="primary-navigation"
          href="/"
          label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."
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
        <ic-navigation-group
          slot="primary-navigation"
          label="Expandable navigation group"
          expandable="true"
        >
          <ic-navigation-item label="Different navigation" href="/">
            <ic-badge
              label="1"
              slot="badge"
              variant="light"
              position="far"
            ></ic-badge>
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
            <ic-badge
              slot="badge"
              variant="light"
              position="far"
              type="dot"
            ></ic-badge>
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
        <ic-navigation-group
          slot="primary-navigation"
          label="Non-expandable navigation group"
        >
          <ic-navigation-item
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
        </ic-navigation-group>
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
        <main>
          <ic-section-container>
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
          </ic-section-container>
        </main>
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
        <ic-classification-banner
          classification="official"
        ></ic-classification-banner>
      </div>
    </div>
  `,

  name: "Default",

  parameters: {
    layout: "fullscreen",
  },
};

export const Expanded = {
  render: () => html`
    <div style="display:flex; height: 100%;">
      <ic-side-navigation
        app-title="Application Title"
        version="v0.20.10-alpha"
        status="IN DEVELOPMENT"
        expanded="true"
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
        <ic-divider slot="primary-navigation"></ic-divider>
        <ic-navigation-group
          slot="primary-navigation"
          label="Second navigation group"
          expandable="true"
          expanded="false"
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
          label="END"
          expandable="true"
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
        style="display:flex; flex-direction: column;"
      >
        <main>
          <ic-button onclick="expandedClickHandler()">Expand</ic-button>
          <ic-button onclick="collapsedClickHandler()">Collapse</ic-button>
        </main>
        <footer>Footer</footer>
      </div>
    </div>
    <script>
      var icSideNav = document.querySelector("ic-side-navigation");
      function expandedClickHandler() {
        icSideNav.expanded = true;
      }
      function collapsedClickHandler() {
        icSideNav.expanded = false;
      }
    </script>
  `,

  name: "Expanded",

  parameters: {
    layout: "fullscreen",
  },
};

export const LongContent = {
  render: () => html`
    <div style="display:flex; height:100%;">
      <ic-side-navigation
        app-title="This is a very very very very very very long app title"
        version="v0.0.0-alpha-beta-gamma-delta-release.01"
        status="Alpha-BETA-GAMMA-DELTA"
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
          label="Expandable navigation group with a very very very long title"
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
        <ic-navigation-group
          slot="primary-navigation"
          label="Non-expandable navigation group with a very very very long title"
          expandable="false"
        >
          <ic-navigation-item
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
        </ic-navigation-group>
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
        <main>
          <ic-section-container>
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
          </ic-section-container>
        </main>
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
        <ic-classification-banner
          classification="official"
        ></ic-classification-banner>
      </div>
    </div>
  `,

  name: "Long content",

  parameters: {
    layout: "fullscreen",
  },
};

export const ShortTitle = {
  render: () => html`
    <div style="display:flex; height:100%;">
      <ic-side-navigation
        app-title="Application Name"
        short-app-title="App Name"
        version="v0.0.0"
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
        <main>
          <ic-section-container>
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
          </ic-section-container>
        </main>
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
        <ic-classification-banner
          classification="official"
        ></ic-classification-banner>
      </div>
    </div>
  `,

  name: "Short title",

  parameters: {
    layout: "fullscreen",
  },
};

export const Static = {
  render: () => html`
    <div style="display:flex; height: 100%;">
      <ic-side-navigation
        app-title="Application Name"
        version="v0.0.0"
        status="BETA"
        expanded="true"
        static="true"
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
        </ic-navigation-group>
        <ic-navigation-item slot="secondary-navigation" href="/" label="END">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"
              fill="currentColor"
            />
          </svg>
        </ic-navigation-item>
      </ic-side-navigation>
      <div
        class="content-wrapper"
        style="display:flex; flex-direction: column;"
      >
        <main>This is the content</main>
        <footer>Footer</footer>
      </div>
    </div>
  `,

  name: "Static",

  parameters: {
    layout: "fullscreen",
  },
};

export const CollapsedIconsWithLabels = {
  render: () => html`
    <div style="display:flex; height: 100%;">
      <ic-side-navigation
        app-title="Application Name"
        version="v0.0.0"
        status="BETA"
        collapsed-icon-labels="true"
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
        </ic-navigation-group>
        <ic-navigation-item slot="secondary-navigation" href="/" label="Home">
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
        <main>This is the content</main>
        <footer>Footer</footer>
      </div>
    </div>
  `,

  name: "Collapsed icons with labels",

  parameters: {
    layout: "fullscreen",
  },
};

export const Slots = {
  render: () => html`
    <div style="display:flex; height: 100%;">
      <ic-side-navigation
        version="v0.0.0"
        status="BETA"
        app-title="Application Name"
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
        <ic-navigation-item slot="primary-navigation">
          <a
            slot="navigation-item"
            class="active"
            href="/child-item-2"
            aria-label="Daily Tippers"
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
              ></path>
            </svg>
            <ic-badge
              label="1"
              slot="badge"
              variant="light"
              position="far"
            ></ic-badge>
            Daily Tippers
          </a>
        </ic-navigation-item>
        <ic-navigation-group
          slot="primary-navigation"
          label="Second navigation group"
          expandable="true"
        >
          <ic-navigation-item>
            <a
              slot="navigation-item"
              href="/child-item-2"
              aria-label="Daily Tippers"
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
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
        </ic-navigation-group>
      </ic-side-navigation>
      <div
        class="content-wrapper"
        style="display:flex; flex-direction: column; flex-grow: 1;"
      >
        <main>This is the content</main>
        <footer>Footer</footer>
      </div>
    </div>
  `,

  name: "Slots",

  parameters: {
    layout: "fullscreen",
  },
};

export const UsingUnnamedSlots = {
  render: () => html`
    <div style="display:flex; height: 100%;">
      <ic-side-navigation
        app-title="Application Name"
        version="v0.0.0"
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
        <ic-navigation-item slot="primary-navigation">
          <a class="active" href="/child-item-2" aria-label="Daily Tippers">
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
              ></path>
            </svg>
            <ic-badge
              label="1"
              slot="badge"
              variant="light"
              position="far"
            ></ic-badge>
            Daily Tippers
          </a>
        </ic-navigation-item>
        <ic-navigation-group
          slot="primary-navigation"
          label="Second navigation group"
          expandable="true"
        >
          <ic-navigation-item>
            <a href="/child-item-2" aria-label="Daily Tippers">
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
                ></path>
              </svg>
              Daily Tippers
            </a>
          </ic-navigation-item>
        </ic-navigation-group>
      </ic-side-navigation>
      <div
        class="content-wrapper"
        style="display:flex; flex-direction: column; flex-grow: 1;"
      >
        <main>This is the content</main>
        <footer>Footer</footer>
      </div>
    </div>
  `,

  name: "Using unnamed slots",

  parameters: {
    layout: "fullscreen",
  },
};

export const SlotsUsingAppTitle = {
  render: () => html`
    <div style="display:flex; height: 100%;">
      <ic-side-navigation version="v0.0.0" status="BETA">
        <a href="/" slot="app-title">Application Name</a>
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
        <ic-navigation-item slot="primary-navigation">
          <a
            slot="navigation-item"
            class="active"
            href="/child-item-2"
            aria-label="Daily Tippers"
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
              ></path>
            </svg>
            Home
          </a>
        </ic-navigation-item>
        <ic-navigation-group
          slot="primary-navigation"
          label="Second navigation group"
          expandable="true"
        >
          <ic-navigation-item>
            <a
              slot="navigation-item"
              href="/child-item-2"
              aria-label="Daily Tippers"
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
                ></path>
              </svg>
              Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed
              tempus, lacus in pretium molestie, lectus magna interdum risus,
              vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula
              lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum
              id.
            </a>
          </ic-navigation-item>
        </ic-navigation-group>
        <ic-navigation-item slot="primary-navigation">
          <a
            slot="navigation-item"
            href="/child-item-2"
            aria-label="Daily Tippers"
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
              ></path>
            </svg>
            Daily Tippers
          </a>
        </ic-navigation-item>
      </ic-side-navigation>
      <div
        class="content-wrapper"
        style="display:flex; flex-direction: column; flex-grow: 1;"
      >
        <main>This is the content</main>
        <footer>Footer</footer>
      </div>
    </div>
  `,

  name: "Slots using app-title",

  parameters: {
    layout: "fullscreen",
  },
};

export const SlotsUsingAppTitleExpanded = {
  render: () => html`
    <div style="display:flex; height: 100%;">
      <ic-side-navigation version="v0.0.0" status="BETA" expanded="true">
        <a href="/" slot="app-title">Application Name</a>
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
        <ic-navigation-item slot="primary-navigation">
          <a
            slot="navigation-item"
            class="active"
            href="/child-item-2"
            aria-label="Daily Tippers"
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
              ></path>
            </svg>
            Daily Tippers
          </a>
        </ic-navigation-item>
        <ic-navigation-group
          slot="primary-navigation"
          label="Second navigation group"
          expandable="true"
        >
          <ic-navigation-item>
            <a
              slot="navigation-item"
              href="/child-item-2"
              aria-label="Daily Tippers"
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
                ></path>
              </svg>
              Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed
              tempus, lacus in pretium molestie, lectus magna interdum risus,
              vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula
              lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum
              id.
            </a>
          </ic-navigation-item>
        </ic-navigation-group>
        <ic-navigation-item slot="primary-navigation">
          <a
            slot="navigation-item"
            href="/child-item-2"
            aria-label="Daily Tippers"
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
              ></path>
            </svg>
            Daily Tippers
          </a>
        </ic-navigation-item>
      </ic-side-navigation>
      <div
        class="content-wrapper"
        style="display:flex; flex-direction: column; flex-grow: 1;"
      >
        <main>This is the content</main>
        <footer>Footer</footer>
      </div>
    </div>
  `,

  name: "Slots using app-title expanded",

  parameters: {
    layout: "fullscreen",
  },
};

export const DisableTopBarBehaviour = {
  render: () => html`
    <div style="display:flex; height:100%;">
      <ic-side-navigation
        app-title="Application Name"
        version="v0.0.0"
        status="BETA"
        disable-top-bar-behaviour="true"
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
        <ic-navigation-item
          slot="primary-navigation"
          href="/"
          label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"
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
        <ic-navigation-item
          slot="primary-navigation"
          href="/"
          label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."
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
            <ic-badge
              label="1"
              slot="badge"
              variant="light"
              position="far"
            ></ic-badge>
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
        <main>
          <ic-section-container>
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
          </ic-section-container>
        </main>
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
        <ic-classification-banner
          classification="official"
        ></ic-classification-banner>
      </div>
    </div>
  `,

  name: "Disable top bar behaviour",

  parameters: {
    layout: "fullscreen",
  },
};

export const DisableAutoParentStyling = {
  render: () => html`
    <div style="display:flex; height:100%;">
      <ic-side-navigation
        app-title="Application Name"
        version="v0.0.0"
        status="BETA"
        disable-auto-parent-styling="true"
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
        <ic-navigation-item
          slot="primary-navigation"
          href="/"
          label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"
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
        <ic-navigation-item
          slot="primary-navigation"
          href="/"
          label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."
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
            <ic-badge
              label="1"
              slot="badge"
              variant="light"
              position="far"
            ></ic-badge>
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
        <main>
          <ic-section-container>
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
          </ic-section-container>
        </main>
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
        <ic-classification-banner
          classification="official"
        ></ic-classification-banner>
      </div>
    </div>
  `,

  name: "Disable auto parent styling",

  parameters: {
    layout: "fullscreen",
  },
};

export const SideNavExpandedEvent = {
  render: () =>
    html`<script>
        var sideNav = document.querySelector("ic-side-navigation");
        sideNav.addEventListener("icSideNavExpanded", function (event) {
          console.log(event.detail.sideNavExpanded);
        });
      </script>
      <div style="display:flex; height:100%;">
        <ic-side-navigation
          app-title="Application Name"
          version="v0.0.0"
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
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Daily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily TippersDaily Tippers"
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
          <ic-navigation-item
            slot="primary-navigation"
            href="/"
            label="Aliquam facilisis eros dolor, id laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna interdum risus, vel fringilla libero ex eu dui. Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae congue ligula rutrum id."
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
              <ic-badge
                label="1"
                slot="badge"
                variant="light"
                position="far"
              ></ic-badge>
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
          <main>
            <ic-section-container>
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum venenatis facilisis. Nam tortor felis, auctor vel
                ante quis, tempor interdum libero. In dictum sodales velit, eu
                egestas arcu dignissim ac. Aliquam facilisis eros dolor, id
                laoreet orci sagittis ut. Sed tempus, lacus in pretium molestie,
                lectus magna interdum risus, vel fringilla libero ex eu dui.
                Suspendisse ullamcorper vehicula lacinia. Phasellus congue velit
                nisl, vitae congue ligula rutrum id.</ic-typography
              >
              <ic-typography
                >Etiam in suscipit metus. Duis semper, sapien a molestie semper,
                ex nibh porttitor tellus, vel molestie justo odio vel purus.
                Curabitur porttitor, tortor sed semper sollicitudin, odio odio
                congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
                commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
                ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
                Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
                lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris.
                Nam non lorem ante.</ic-typography
              >
              <ic-typography
                >Donec aliquam eget mauris condimentum cursus. Nullam tempus a
                urna in commodo. Proin mauris augue, viverra id finibus id,
                vulputate in ante. Aliquam volutpat hendrerit tellus vitae
                tristique. Donec pellentesque enim arcu, at feugiat mauris
                venenatis vitae. Sed iaculis ut elit et ultrices. Donec diam
                eros, iaculis ac est nec, tempus feugiat nisl. Suspendisse eget
                interdum lorem. Phasellus pretium urna id elit pharetra
                hendrerit.</ic-typography
              >
              <ic-typography
                >Mauris blandit, mi ut posuere dapibus, est ante porttitor sem,
                quis pretium velit ante nec felis. Vivamus efficitur scelerisque
                dapibus. Nunc lacinia finibus laoreet. Praesent commodo augue
                orci, congue rutrum velit malesuada gravida. Nunc magna mauris,
                ornare nec nisl vel, faucibus euismod orci. Proin in augue vitae
                nunc gravida consectetur. Pellentesque id malesuada ex, sit amet
                imperdiet est. Duis erat nibh, lacinia vitae faucibus non,
                aliquam in dolor. Nam interdum felis vitae feugiat posuere. Cras
                volutpat molestie ipsum, sed auctor quam volutpat vitae. Vivamus
                lobortis scelerisque libero vel scelerisque.</ic-typography
              >
              <ic-typography
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget orci condimentum, tempus tortor posuere, lacinia
                ex. Curabitur bibendum suscipit turpis vitae mollis. Ut laoreet
                orci a risus facilisis porta. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur
                a porttitor neque, ac dignissim velit. Morbi quis malesuada
                massa, vitae sodales tellus. Aenean laoreet mattis lobortis. In
                mauris erat, tincidunt in placerat sed, pretium ac tortor. Morbi
                blandit lacus a leo vehicula aliquet.</ic-typography
              >
              <ic-typography
                >Pellentesque aliquam risus vel eros maximus, at pellentesque mi
                pretium. Etiam nec velit at orci varius porttitor. Aliquam
                facilisis, elit non cursus fringilla, metus metus malesuada
                lacus, at blandit nibh augue aliquet orci. Duis aliquam, est
                eget sodales ullamcorper, eros turpis euismod nulla, sed
                sollicitudin diam massa semper purus. Vivamus vel turpis ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Morbi euismod turpis dapibus quam fermentum condimentum. Mauris
                ex orci, consequat quis tempor eu, finibus vitae eros. Ut eu
                erat eu ipsum pulvinar cursus vel at dui. Etiam tincidunt quam
                porta nulla suscipit vestibulum. Sed iaculis enim leo, et
                aliquam justo feugiat in. Vivamus in ornare nulla, at tempor
                massa. Sed et aliquam nisi.</ic-typography
              >
              <ic-typography
                >Mauris tempus accumsan libero non tincidunt. Curabitur et leo
                orci. Suspendisse molestie posuere leo vitae posuere. Cras
                lacinia urna non erat gravida sagittis. Quisque dapibus arcu nec
                sem pharetra convallis. Nullam sed arcu mollis, posuere elit at,
                condimentum ligula. Nullam maximus nulla quam, ut euismod est
                feugiat at. Quisque ut venenatis ex, in facilisis sapien.
                Pellentesque in orci vitae metus iaculis venenatis. Nunc
                porttitor tellus arcu, in posuere quam vulputate nec. Aenean in
                venenatis ligula, non mollis quam. Suspendisse nec enim vel
                massa finibus pretium et a urna. Etiam suscipit semper est, id
                efficitur diam sollicitudin nec. Nullam nibh sapien, condimentum
                ut laoreet et, euismod ac mi. Vestibulum tristique odio non
                risus ullamcorper, et aliquam turpis varius. Nunc metus ex,
                tempus a augue sit amet, interdum vulputate
                libero.</ic-typography
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
          </main>
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
          <ic-classification-banner
            classification="official"
          ></ic-classification-banner>
        </div>
      </div> `,

  name: "Side nav expanded event",

  parameters: {
    layout: "fullscreen",
  },
};

export const CloseOnNavItemClick = {
  render: () => html`
    <div style="display:flex; height:100%;">
      <ic-side-navigation
        app-title="Application Name"
        version="v0.0.0"
        status="BETA"
        href="https://www.google.com/"
        close-on-nav-item-click="true"
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
        <ic-navigation-item
          slot="primary-navigation"
          label="Daily Tippers"
          href="#"
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
          slot="primary-navigation"
          label="Search"
          selected="true"
          href="#"
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
        <ic-navigation-group
          slot="primary-navigation"
          label="Expandable navigation group"
          expandable="true"
        >
          <ic-navigation-item label="Different navigation" href="#">
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
          <ic-navigation-item label="Navigation" href="#">
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
          <ic-navigation-item>
            <a href="#" slot="navigation-item">
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
              Slotted link
            </a>
          </ic-navigation-item>
        </ic-navigation-group>
        <ic-navigation-item
          slot="secondary-navigation"
          label="Settings"
          href="#"
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
        <main>
          <ic-section-container>
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
          </ic-section-container>
        </main>
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
        <ic-classification-banner
          classification="official"
        ></ic-classification-banner>
      </div>
    </div>
  `,

  name: "Close on nav item click",

  parameters: {
    layout: "fullscreen",
  },
};

export const Playground = {
  render: (args) =>
    html`
      <ic-side-navigation
        app-title=${args.appTitle}
        version=${args.version}
        status=${args.status}
        href=${args.href}
        collapsed-icon-labels=${args.collapsedIconLabels}
        close-on-nav-item-click=${args.closeOnNavItemClick}
        static=${args.static}
        disable-top-bar-behaviour=${args.disableTopBarBehaviour}
        expanded=${args.expanded}
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
        <ic-navigation-item
          slot="primary-navigation"
          href="/"
          label=${args.navOneLabel}
        >
          <ic-badge
            label="1"
            slot="badge"
            variant="light"
            position="far"
          ></ic-badge>
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
          label="Item 2"
          selected
        >
          <ic-badge
            slot="badge"
            variant="light"
            type="dot"
            position="far"
          ></ic-badge>
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
          label="Navigation Group"
          expandable="true"
        >
          <ic-navigation-item href="/" label="Item 3">
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
        </ic-navigation-group>

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
    `,

  args: defaultArgs,
  name: "Playground",
  parameters: {
    layout: "fullscreen",
  },
};
