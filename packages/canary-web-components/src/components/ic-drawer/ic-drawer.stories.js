import { html } from "lit-html";
import readme from "./readme.md";

export default {
  title: "Web Components/Drawer",
  component: "ic-drawer",
  parameters: {
    componentAPI: {
      data: readme,
    },
    layout: "fullscreen",
  },
};

const defaultArgs = {
  ariaLabel: "",
  boundary: "viewport",
  chevronButtonAriaLabel: "",
  closeButtonAriaLabel: "",
  closeOnBackdropClick: true,
  expanded: false,
  heading: "Roasted coffee",
  hideCloseButton: false,
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut pharetra tortor, sed lacinia lectus. Aliquam elementum risus ipsum, sit amet tincidunt elit pharetra quis. Morbi maximus dolor sit amet nulla feugiat, sed congue ligula dignissim. Nullam ac augue nec erat suscipit scelerisque. Aliquam at tellus fringilla, faucibus est posuere, convallis magna. Integer vel ornare lectus. Vestibulum convallis mauris vel quam vehicula maximus. Fusce et consequat lacus, non auctor tellus. In ut lacus aliquet, accumsan tellus a, volutpat ante. Aliquam erat volutpat. Nam non lectus mauris. In eu libero ut augue viverra accumsan. Praesent non felis tortor. Nullam rutrum odio justo, bibendum pulvinar leo dictum a. Donec sodales sagittis ultricies. Duis posuere a mauris vitae auctor. Pellentesque porta, massa ac pellentesque feugiat, diam mauris commodo neque, quis gravida risus est sit amet lacus. Fusce rhoncus leo nec lobortis mattis. Donec risus leo, eleifend efficitur purus ac, sollicitudin dictum neque. Suspendisse potenti. Etiam mattis felis nisi, non laoreet ipsum sollicitudin at. Quisque metus nibh, imperdiet nec euismod a, convallis et sem. Maecenas cursus porttitor fringilla. Ut gravida ante at orci sagittis tincidunt. Integer porta nisl nisi, in vehicula felis aliquet sit amet. Praesent eleifend libero in vulputate convallis. Aenean aliquet ante a venenatis convallis. Donec quis felis semper, imperdiet tellus eu, imperdiet nisi. Sed aliquet felis nec tellus aliquet, et sodales sem varius. Etiam justo mauris, dapibus a ornare id, volutpat sit amet orci. Nam eu condimentum tortor, rhoncus fermentum nunc. Duis mollis justo a tortor tempus dictum. Quisque vulputate, risus non tempor varius, eros velit rutrum dui, non gravida elit erat eget ex. Ut cursus congue enim eget eleifend. Nullam iaculis neque non ligula aliquam, vitae rutrum arcu ultrices. Etiam porttitor condimentum dolor, ut luctus risus condimentum sit amet. Duis faucibus commodo leo nec bibendum. Nam faucibus, lectus vitae pulvinar ullamcorper, risus orci tempus sapien, varius pulvinar nulla odio eget ipsum. Mauris vestibulum sem vitae lectus feugiat, in tincidunt neque fringilla. Fusce lacus eros, elementum sit amet sapien et, congue venenatis metus. Nullam mauris velit, pharetra et ligula faucibus, pulvinar luctus nisl. Etiam ante odio, fermentum ac accumsan eget, luctus a libero. Phasellus maximus risus ac viverra scelerisque.",
  position: "right",
  size: "medium",
  theme: "inherit",
  trigger: "arrow",
  actionsSlot: true,
  headingAdornmentSlot: true,
  headingSlot: false,
  messageSlot: false,
};

export const RightPosition = {
  render: (args) => html`<ic-drawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
    >
      <svg
        slot="heading-adornment"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
        />
      </svg>
    </ic-drawer>
    <script>
      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document
        .querySelector("ic-drawer")
        .addEventListener("icDrawerExpanded", handleDrawerExpanded);
    </script>`,
  name: "Right position",
};

export const LeftPosition = {
  render: (args) => html`<ic-drawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="left"
    >
      <svg
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
    <script>
      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document
        .querySelector("ic-drawer")
        .addEventListener("icDrawerExpanded", handleDrawerExpanded);
    </script>`,
  name: "Left position",
};

export const TopPosition = {
  render: (args) => html`<ic-drawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="top"
    >
      <svg
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
    <script>
      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document
        .querySelector("ic-drawer")
        .addEventListener("icDrawerExpanded", handleDrawerExpanded);
    </script>`,
  name: "Top position",
};

export const BottomPosition = {
  render: (args) => html`<ic-drawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="bottom"
    >
      <svg
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
    <script>
      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document
        .querySelector("ic-drawer")
        .addEventListener("icDrawerExpanded", handleDrawerExpanded);
    </script>`,
  name: "Bottom position",
};

export const Expanded = {
  render: (args) => html`<ic-drawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      expanded="true"
    >
      <svg
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
    <script>
      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document
        .querySelector("ic-drawer")
        .addEventListener("icDrawerExpanded", handleDrawerExpanded);
    </script>`,
  name: "Expanded",
};

export const ContainedWithinParent = {
  render: () => html`<div
      style="position: relative; display: flex; border: 1px solid lightgrey; flex: 1; margin: 32px; height: calc(100vh - 64px);"
    >
      <ic-drawer
        heading="Roasted coffee"
        message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
        boundary="parent"
      >
        <svg
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
    </div>
    <script>
      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document
        .querySelector("ic-drawer")
        .addEventListener("icDrawerExpanded", handleDrawerExpanded);
    </script>`,
  name: "Contained within parent",
};

export const ManualTrigger = {
  render: () => html`<div style="margin: 16px; display: flex; gap: 16px;">
      <ic-button onclick="toggleDrawer('right')">Toggle right drawer</ic-button>
      <ic-button onclick="toggleDrawer('left')">Toggle left drawer</ic-button>
      <ic-button onclick="toggleDrawer('top')">Toggle top drawer</ic-button>
      <ic-button onclick="toggleDrawer('bottom')"
        >Toggle bottom drawer</ic-button
      >
    </div>
    <ic-drawer
      id="drawer-right"
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      trigger="controlled"
    >
      <svg
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
    <ic-drawer
      id="drawer-left"
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="left"
      trigger="controlled"
    >
      <svg
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
    <ic-drawer
      id="drawer-top"
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="top"
      trigger="controlled"
    >
      <svg
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
    <ic-drawer
      id="drawer-bottom"
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="bottom"
      trigger="controlled"
    >
      <svg
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
    <script>
      function toggleDrawer(drawerId) {
        const drawer = document.querySelector(\`#drawer-\${drawerId}\`);
        drawer.expanded = !drawer.expanded;
      }

      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document.querySelectorAll("ic-drawer").forEach((drawer) => {
        drawer.addEventListener("icDrawerExpanded", handleDrawerExpanded);
      });
    </script>`,
  name: "Manual trigger",
};

export const ManualTriggerContainedWithinParent = {
  render: () => html`<div
      style="display: flex; flex-direction: column; height: 100vh;"
    >
      <div style="margin: 32px 32px 0 32px; display: flex; gap: 16px;">
        <ic-button onclick="toggleDrawer('right')"
          >Toggle right drawer</ic-button
        >
        <ic-button onclick="toggleDrawer('left')">Toggle left drawer</ic-button>
        <ic-button onclick="toggleDrawer('top')">Toggle top drawer</ic-button>
        <ic-button onclick="toggleDrawer('bottom')"
          >Toggle bottom drawer</ic-button
        >
      </div>
      <div
        style="position: relative; display: flex; border: 1px solid lightgrey; flex: 1; margin: 32px;"
      >
        <ic-drawer
          id="drawer-right-contained"
          heading="Roasted coffee"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
          trigger="controlled"
          boundary="parent"
        >
          <svg
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
        <ic-drawer
          id="drawer-left-contained"
          heading="Roasted coffee"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
          position="left"
          trigger="controlled"
          boundary="parent"
        >
          <svg
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
        <ic-drawer
          id="drawer-top-contained"
          heading="Roasted coffee"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
          position="top"
          trigger="controlled"
          boundary="parent"
        >
          <svg
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
        <ic-drawer
          id="drawer-bottom-contained"
          heading="Roasted coffee"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
          position="bottom"
          trigger="controlled"
          boundary="parent"
        >
          <svg
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
      </div>
    </div>
    <script>
      function toggleDrawer(drawerId) {
        const drawer = document.querySelector(
          \`#drawer-\${drawerId}-contained\`
        );
        drawer.expanded = !drawer.expanded;
      }

      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document.querySelectorAll("ic-drawer").forEach((drawer) => {
        drawer.addEventListener("icDrawerExpanded", handleDrawerExpanded);
      });
    </script>`,
  name: "Manual trigger - contained within parent",
};

export const Small = {
  render: (args) => html`<ic-drawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      size="small"
    >
      <svg
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
    <script>
      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document
        .querySelector("ic-drawer")
        .addEventListener("icDrawerExpanded", handleDrawerExpanded);
    </script>`,
  name: "Small",
};

export const Large = {
  render: (args) => html`<ic-drawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      size="large"
    >
      <svg
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
    <script>
      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document
        .querySelector("ic-drawer")
        .addEventListener("icDrawerExpanded", handleDrawerExpanded);
    </script>`,
  name: "Large",
};

// export const LongContent = {
//   render: (args) => html`<div style="margin: 16px; display: flex; gap: 16px;">
//       <ic-button onclick="toggleDrawer('right')">Toggle right drawer</ic-button>
//       <ic-button onclick="toggleDrawer('left')">Toggle left drawer</ic-button>
//       <ic-button onclick="toggleDrawer('top')">Toggle top drawer</ic-button>
//       <ic-button onclick="toggleDrawer('bottom')"
//         >Toggle bottom drawer</ic-button
//       >
//     </div>
//     <ic-drawer
//       id="drawer-right"
//       heading="Roasted coffee"
//       message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//         et odio metus. Quisque pharetra at elit et bibendum. Vivamus
//         pellentesque lacus vel facilisis tincidunt. Aliquam erat
//         volutpat. Pellentesque mi ligula, aliquet eget lacinia
//         dignissim, euismod non sapien. Fusce ac lorem eget nisi
//         tincidunt imperdiet. Sed sed ipsum pellentesque, feugiat ligula
//         ut, placerat nisl. Nulla gravida faucibus elit ut laoreet. Nam
//         sagittis lacinia eros a aliquet. Cras in massa condimentum,
//         auctor turpis vestibulum, imperdiet libero. Integer arcu purus,
//         ultricies sit amet felis vel, ullamcorper semper lectus. Proin
//         ultrices tortor sed velit mattis facilisis. Integer rutrum nec
//         nulla at fringilla. Duis a nibh ut tellus venenatis tincidunt a
//         vel quam. Donec viverra enim sed nibh placerat venenatis. Ut volutpat
//         dapibus cursus. Sed in sodales mi. Maecenas viverra ex sit amet
//         tempus consequat. In a nulla mollis, fringilla metus vitae,
//         facilisis lorem. Ut eu turpis a magna sodales suscipit.
//         Curabitur et turpis nec nisi mollis consectetur. Quisque
//         consequat libero non laoreet vestibulum. Aliquam non diam
//         faucibus, aliquet augue sed, suscipit orci. Nunc in tempor eros.
//         Phasellus euismod vestibulum nulla sit amet ultricies.
//         Pellentesque luctus purus ut elit placerat ultricies. Sed a
//         gravida nulla. Vestibulum ante ipsum primis in faucibus orci
//         luctus et ultrices posuere cubilia curae; Nullam porttitor a mi
//         pharetra lobortis. Curabitur dapibus id purus sed feugiat.
//         Fusce et consequat lacus, non auctor tellus. In ut lacus aliquet,
//         accumsan tellus a, volutpat ante. Aliquam erat volutpat. Nam non
//         lectus mauris. In eu libero ut augue viverra accumsan. Praesent non
//         felis tortor. Nullam rutrum odio justo, bibendum pulvinar leo dictum a.
//         Donec sodales sagittis ultricies. Duis posuere a mauris vitae auctor.
//         Pellentesque porta, massa ac pellentesque feugiat, diam mauris commodo
//         neque, quis gravida risus est sit amet lacus. Fusce rhoncus leo nec
//         lobortis mattis. Donec risus leo, eleifend efficitur purus ac,
//         sollicitudin dictum neque.
//         "
//       trigger="controlled"
//     >
//       <svg
//         slot="heading-adornment"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//       >
//         <path
//           d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
//         />
//       </svg>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions">Add to order</ic-button>
//     </ic-drawer>
//     <ic-drawer
//       id="drawer-left"
//       heading="Roasted coffee"
//       message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//         et odio metus. Quisque pharetra at elit et bibendum. Vivamus
//         pellentesque lacus vel facilisis tincidunt. Aliquam erat
//         volutpat. Pellentesque mi ligula, aliquet eget lacinia
//         dignissim, euismod non sapien. Fusce ac lorem eget nisi
//         tincidunt imperdiet. Sed sed ipsum pellentesque, feugiat ligula
//         ut, placerat nisl. Nulla gravida faucibus elit ut laoreet. Nam
//         sagittis lacinia eros a aliquet. Cras in massa condimentum,
//         auctor turpis vestibulum, imperdiet libero. Integer arcu purus,
//         ultricies sit amet felis vel, ullamcorper semper lectus. Proin
//         ultrices tortor sed velit mattis facilisis. Integer rutrum nec
//         nulla at fringilla. Duis a nibh ut tellus venenatis tincidunt a
//         vel quam. Donec viverra enim sed nibh placerat venenatis. Ut volutpat
//         dapibus cursus. Sed in sodales mi. Maecenas viverra ex sit amet
//         tempus consequat. In a nulla mollis, fringilla metus vitae,
//         facilisis lorem. Ut eu turpis a magna sodales suscipit.
//         Curabitur et turpis nec nisi mollis consectetur. Quisque
//         consequat libero non laoreet vestibulum. Aliquam non diam
//         faucibus, aliquet augue sed, suscipit orci. Nunc in tempor eros.
//         Phasellus euismod vestibulum nulla sit amet ultricies.
//         Pellentesque luctus purus ut elit placerat ultricies. Sed a
//         gravida nulla. Vestibulum ante ipsum primis in faucibus orci
//         luctus et ultrices posuere cubilia curae; Nullam porttitor a mi
//         pharetra lobortis. Curabitur dapibus id purus sed feugiat.
//         Fusce et consequat lacus, non auctor tellus. In ut lacus aliquet,
//         accumsan tellus a, volutpat ante. Aliquam erat volutpat. Nam non
//         lectus mauris. In eu libero ut augue viverra accumsan. Praesent non
//         felis tortor. Nullam rutrum odio justo, bibendum pulvinar leo dictum a.
//         Donec sodales sagittis ultricies. Duis posuere a mauris vitae auctor.
//         Pellentesque porta, massa ac pellentesque feugiat, diam mauris commodo
//         neque, quis gravida risus est sit amet lacus. Fusce rhoncus leo nec
//         lobortis mattis. Donec risus leo, eleifend efficitur purus ac,
//         sollicitudin dictum neque.
//         "
//       position="left"
//       trigger="controlled"
//     >
//       <svg
//         slot="heading-adornment"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//       >
//         <path
//           d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
//         />
//       </svg>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions">Add to order</ic-button>
//     </ic-drawer>
//     <ic-drawer
//       id="drawer-top"
//       heading="Roasted coffee"
//       message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//         et odio metus. Quisque pharetra at elit et bibendum. Vivamus
//         pellentesque lacus vel facilisis tincidunt. Aliquam erat
//         volutpat. Pellentesque mi ligula, aliquet eget lacinia
//         dignissim, euismod non sapien. Fusce ac lorem eget nisi
//         tincidunt imperdiet. Sed sed ipsum pellentesque, feugiat ligula
//         ut, placerat nisl. Nulla gravida faucibus elit ut laoreet. Nam
//         sagittis lacinia eros a aliquet. Cras in massa condimentum,
//         auctor turpis vestibulum, imperdiet libero. Integer arcu purus,
//         ultricies sit amet felis vel, ullamcorper semper lectus. Proin
//         ultrices tortor sed velit mattis facilisis. Integer rutrum nec
//         nulla at fringilla. Duis a nibh ut tellus venenatis tincidunt a
//         vel quam. Donec viverra enim sed nibh placerat venenatis. Ut volutpat
//         dapibus cursus. Sed in sodales mi. Maecenas viverra ex sit amet
//         tempus consequat. In a nulla mollis, fringilla metus vitae,
//         facilisis lorem. Ut eu turpis a magna sodales suscipit.
//         Curabitur et turpis nec nisi mollis consectetur. Quisque
//         consequat libero non laoreet vestibulum. Aliquam non diam
//         faucibus, aliquet augue sed, suscipit orci. Nunc in tempor eros.
//         Phasellus euismod vestibulum nulla sit amet ultricies.
//         Pellentesque luctus purus ut elit placerat ultricies. Sed a
//         gravida nulla. Vestibulum ante ipsum primis in faucibus orci
//         luctus et ultrices posuere cubilia curae; Nullam porttitor a mi
//         pharetra lobortis. Curabitur dapibus id purus sed feugiat.
//         Fusce et consequat lacus, non auctor tellus. In ut lacus aliquet,
//         accumsan tellus a, volutpat ante. Aliquam erat volutpat. Nam non
//         lectus mauris. In eu libero ut augue viverra accumsan. Praesent non
//         felis tortor. Nullam rutrum odio justo, bibendum pulvinar leo dictum a.
//         Donec sodales sagittis ultricies. Duis posuere a mauris vitae auctor.
//         Pellentesque porta, massa ac pellentesque feugiat, diam mauris commodo
//         neque, quis gravida risus est sit amet lacus. Fusce rhoncus leo nec
//         lobortis mattis. Donec risus leo, eleifend efficitur purus ac,
//         sollicitudin dictum neque.
//         "
//       position="top"
//       trigger="controlled"
//     >
//       <svg
//         slot="heading-adornment"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//       >
//         <path
//           d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
//         />
//       </svg>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions">Add to order</ic-button>
//     </ic-drawer>
//     <ic-drawer
//       id="drawer-bottom"
//       heading="Roasted coffee"
//       message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//         et odio metus. Quisque pharetra at elit et bibendum. Vivamus
//         pellentesque lacus vel facilisis tincidunt. Aliquam erat
//         volutpat. Pellentesque mi ligula, aliquet eget lacinia
//         dignissim, euismod non sapien. Fusce ac lorem eget nisi
//         tincidunt imperdiet. Sed sed ipsum pellentesque, feugiat ligula
//         ut, placerat nisl. Nulla gravida faucibus elit ut laoreet. Nam
//         sagittis lacinia eros a aliquet. Cras in massa condimentum,
//         auctor turpis vestibulum, imperdiet libero. Integer arcu purus,
//         ultricies sit amet felis vel, ullamcorper semper lectus. Proin
//         ultrices tortor sed velit mattis facilisis. Integer rutrum nec
//         nulla at fringilla. Duis a nibh ut tellus venenatis tincidunt a
//         vel quam. Donec viverra enim sed nibh placerat venenatis. Ut volutpat
//         dapibus cursus. Sed in sodales mi. Maecenas viverra ex sit amet
//         tempus consequat. In a nulla mollis, fringilla metus vitae,
//         facilisis lorem. Ut eu turpis a magna sodales suscipit.
//         Curabitur et turpis nec nisi mollis consectetur. Quisque
//         consequat libero non laoreet vestibulum. Aliquam non diam
//         faucibus, aliquet augue sed, suscipit orci. Nunc in tempor eros.
//         Phasellus euismod vestibulum nulla sit amet ultricies.
//         Pellentesque luctus purus ut elit placerat ultricies. Sed a
//         gravida nulla. Vestibulum ante ipsum primis in faucibus orci
//         luctus et ultrices posuere cubilia curae; Nullam porttitor a mi
//         pharetra lobortis. Curabitur dapibus id purus sed feugiat.
//         Fusce et consequat lacus, non auctor tellus. In ut lacus aliquet,
//         accumsan tellus a, volutpat ante. Aliquam erat volutpat. Nam non
//         lectus mauris. In eu libero ut augue viverra accumsan. Praesent non
//         felis tortor. Nullam rutrum odio justo, bibendum pulvinar leo dictum a.
//         Donec sodales sagittis ultricies. Duis posuere a mauris vitae auctor.
//         Pellentesque porta, massa ac pellentesque feugiat, diam mauris commodo
//         neque, quis gravida risus est sit amet lacus. Fusce rhoncus leo nec
//         lobortis mattis. Donec risus leo, eleifend efficitur purus ac,
//         sollicitudin dictum neque.
//         "
//       position="bottom"
//       trigger="controlled"
//     >
//       <svg
//         slot="heading-adornment"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//       >
//         <path
//           d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
//         />
//       </svg>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions" variant="secondary">Add to order</ic-button>
//       <ic-button slot="actions">Add to order</ic-button>
//     </ic-drawer>
//     <script>
//       function toggleDrawer(drawerId) {
//         const drawer = document.querySelector(\`#drawer-\${drawerId}\`);
//         drawer.expanded = !drawer.expanded;
//       }

//       function handleDrawerExpanded(ev) {
//         console.log(ev.detail);
//       }

//       document.querySelectorAll("ic-drawer").forEach((drawer) => {
//         drawer.addEventListener("icDrawerExpanded", handleDrawerExpanded);
//       });
//     </script>`,
//   name: "Long content",
// };

export const SlottedContent = {
  render: (args) => html`<ic-drawer>
    <svg
      slot="heading-adornment"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
      />
    </svg>
    <ic-typography slot="heading" variant="h4">
      <h4>Roasted coffee</h4>
    </ic-typography>
    <div slot="message">
      <ic-typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </ic-typography>
        <br />
        <ic-tooltip label="This is a description of the button">
          <ic-button>
            Button with tooltip
          </ic-button>
        </ic-tooltip>
        <ic-button
          variant="icon-primary"
          aria-label="This is a description of the button"
          tooltip-placement="top"
        >
          <svg
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
        </ic-button>
        <br />
        <br />
        <ic-accordion heading="This is an accordion">
          <ic-checkbox label="Agree" value="confirm" additional-field-display="static">
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            />
          </ic-checkbox>
          <br />
          <ic-radio-group label="This is a label" name="1">
          <ic-radio-option
            value="valueName1"
            label="Unselected / Default"
            additional-field-display="dynamic"
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            >
            </ic-text-field>
          </ic-radio-option>
          <ic-radio-option
            value="valueName2"
            label="Selected / Default"
            additional-field-display="static"
            selected
          >
            <ic-text-field
              slot="additional-field"
              placeholder="Placeholder"
              label="What's your favourite type of coffee?"
            >
            </ic-text-field>
          </ic-radio-option>
          <ic-radio-option
            value="valueName3"
            label="Unselected / Disabled"
            disabled
          ></ic-radio-option>
        </ic-radio-group>
      </ic-accordion>
      <br />
      <ic-search-bar label="What is your favourite coffee?"></ic-search-bar>
      <br />
      <ic-text-field label="What is your favourite coffee?"></ic-text-field>
      <br />
      <ic-select
        id="sel1"
        label="What is your favourite coffee?"
        placeholder="Placeholder goes here"
      ></ic-select>
      <br />
      <ic-button id="button-1" onclick="buttonClick()">Show popover</ic-button>
      <div>
        <ic-popover-menu anchor="button-1" aria-label="popover">
          <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
          <ic-menu-group label="View">
            <ic-menu-item
              label="Zoom in"
              keyboard-shortcut-label="Cmd+"
            ></ic-menu-item>
          </ic-menu-group>
          <ic-menu-item
            label="Actions"
            submenu-trigger-for="abc"
          ></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="abc">
          <ic-menu-item
            label="Find"
            submenu-trigger-for="abc123"
          ></ic-menu-item>
        </ic-popover-menu>
        <ic-popover-menu submenu-id="abc123">
          <ic-menu-item
            disabled="true"
            label="Search the web"
            description="This will search the web to find the thing you are looking for."
          ></ic-menu-item>
          <ic-menu-item label="Find icons">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-menu-item>
        </ic-popover-menu>
      </div>
      <br />
      <ic-checkbox-group
        label="confirm"
        hide-label
        name="confirm-checkbox"
      >
        <ic-checkbox label="Agree" value="confirm" id="focus" additional-field-display="static">
        <ic-text-field
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          /></ic-checkbox>
        <ic-checkbox additional-field-display="dynamic" value="disagree" label="Disagree">
          <ic-text-field
            slot="additional-field"
            placeholder="Placeholder"
            label="What's your favourite type of coffee?"
          />
        </ic-checkbox>
        <ic-checkbox label="Disabled" value="disabled" disabled>
      </ic-checkbox-group>
      <br />
      <ic-action-chip label="Default"></ic-action-chip>
      <ic-chip label="Default" dismissible="true">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <br />
      <br />
      <ic-switch label="Switch label"></ic-switch>
      <br />
      <br />
      <ic-tab-context>
        <ic-tab-group label="Example tab group">
          <ic-tab>Ingredients</ic-tab>
          <ic-tab>Method</ic-tab>
          <ic-tab>History</ic-tab>
        </ic-tab-group>
        <ic-tab-panel>Tab One - Ingredients</ic-tab-panel>
        <ic-tab-panel>Tab Two - Method</ic-tab-panel>
        <ic-tab-panel>Tab Three - History</ic-tab-panel>
      </ic-tab-context>
      <br />
    </div>
    <ic-button slot="actions">Add to order</ic-button>
  </ic-drawer>
  <script>
      function toggleDrawer() {
        const drawer = document.querySelector(
          "#drawer-right-slotted-content"
        );
        icDrawer.expanded = !icDrawer.expanded;
      }
      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document
        .querySelector("ic-drawer")
        .addEventListener("icDrawerExpanded", handleDrawerExpanded);

      var select1 = document.querySelector("#sel1");
      select1.options = [
        { label: "Cappuccino", value: "Cap" },
        { label: "Latte", value: "Lat" },
        { label: "Americano", value: "Ame" },
      ];
      select1.addEventListener("icChange", function (event) {
        console.log(event.detail.value);
      });

      var icPopover = document.querySelector("ic-popover-menu");
      function buttonClick() {
        icPopover.open = true;
      }
    </script>`,
  name: "Slotted content",
};

export const ShowHideInteractiveElements = {
  // Delay with second button prevents false positive by ensuring the two slot updates happen at separate times
  render: (args) => html`<script>
      var btnShow = document.querySelector(".show");
      btnShow.addEventListener("click", () => {
        var el = document.createElement("ic-button");
        el.id = "slotted-btn";
        el.innerText = "Slotted element";
        el.setAttribute("slot", "message");
        var childEl = document.createElement("ic-button");
        childEl.id = "slotted-child-btn";
        childEl.innerText = "Child of slotted element";
        var base = document.querySelector("#base");
        base.after(el);
        setTimeout(() => base.appendChild(childEl), 2000);
      });
      var btnHide = document.querySelector(".hide");
      btnHide.addEventListener("click", () => {
        if (document.querySelector("#slotted-btn")) {
          var btn = document.querySelector("#slotted-btn");
          btn.remove();
        }
        if (document.querySelector("#slotted-child-btn")) {
          var btn = document.querySelector("#slotted-child-btn");
          setTimeout(() => btn.remove(), 2000);
        }
      });
    </script>
    <ic-drawer heading="Roasted coffee">
      <div slot="message">
        <ic-typography>
          Demonstrates changes to slotted elements happening after first load.
          <br />
          The button which is a child of an already rendered slotted
          <code>${`<div>`}</code> will show / hide after a 2s delay.
        </ic-typography>
        <br />
        <ic-button class="show">Show</ic-button>
        <ic-button class="hide">Hide</ic-button>
        <br />
        <br />
      </div>
      <div id="base" slot="message"></div>
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>
    <script>
      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document
        .querySelector("ic-drawer")
        .addEventListener("icDrawerExpanded", handleDrawerExpanded);
    </script>`,
  name: "Show / hide interactive elements",
};

// SORT OUT EXPANDED PROP
export const Playground = {
  render: (args) => html`<div style="display: flex; height: 100%">
    <ic-side-navigation app-title="Déja-brew" status="alpha" version="v0.0.7">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 24 24"
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
    </ic-side-navigation>
    <div style="display: flex; flex-direction: column; flex-grow: 1">
      <main
        id="main"
        style="display: flex; flex-direction: column; min-height: 100vh"
      >
        <ic-page-header
          heading="Latte recipe"
          subheading="A latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
          aligned="center"
        ></ic-page-header>
        <div style="display: flex; flex: 1; position: relative">
          <ic-section-container aligned="center">
            <ic-typography>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et odio metus. Quisque pharetra at elit et bibendum. Vivamus
                pellentesque lacus vel facilisis tincidunt. Aliquam erat
                volutpat. Pellentesque mi ligula, aliquet eget lacinia
                dignissim, euismod non sapien. Fusce ac lorem eget nisi
                tincidunt imperdiet. Sed sed ipsum pellentesque, feugiat ligula
                ut, placerat nisl. Nulla gravida faucibus elit ut laoreet. Nam
                sagittis lacinia eros a aliquet. Cras in massa condimentum,
                auctor turpis vestibulum, imperdiet libero. Integer arcu purus,
                ultricies sit amet felis vel, ullamcorper semper lectus. Proin
                ultrices tortor sed velit mattis facilisis. Integer rutrum nec
                nulla at fringilla. Duis a nibh ut tellus venenatis tincidunt a
                vel quam.
                <br />
                <br />
                Donec viverra enim sed nibh placerat venenatis. Ut volutpat
                dapibus cursus. Sed in sodales mi. Maecenas viverra ex sit amet
                tempus consequat. In a nulla mollis, fringilla metus vitae,
                facilisis lorem. Ut eu turpis a magna sodales suscipit.
                Curabitur et turpis nec nisi mollis consectetur. Quisque
                consequat libero non laoreet vestibulum. Aliquam non diam
                faucibus, aliquet augue sed, suscipit orci. Nunc in tempor eros.
                Phasellus euismod vestibulum nulla sit amet ultricies.
                Pellentesque luctus purus ut elit placerat ultricies. Sed a
                gravida nulla. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Nullam porttitor a mi
                pharetra lobortis. Curabitur dapibus id purus sed feugiat.
              </p>
            </ic-typography>
            <br />
            ${args.trigger === "controlled"
              ? html`<ic-button variant="secondary" onclick="toggleDrawer()"
                  >Learn more about roasted coffee</ic-button
                >`
              : ""}
          </ic-section-container>
          <ic-drawer
            aria-label=${args.ariaLabel}
            boundary=${args.boundary}
            chevron-button-aria-label=${args.chevronButtonAriaLabel}
            close-button-aria-label=${args.closeButtonAriaLabel}
            close-on-backdrop-click=${args.closeOnBackdropClick}
            heading=${args.heading}
            hide-close-button=${args.hideCloseButton}
            message=${args.message}
            position=${args.position}
            size=${args.size}
            theme=${args.theme}
            trigger=${args.trigger}
          >
            ${args.headingAdornmentSlot
              ? html`<svg
                  slot="heading-adornment"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
                  />
                </svg>`
              : ""}
            ${args.headingSlot
              ? html`<ic-typography slot="heading" variant="h4">
                  <h4>(Slotted) Roasted coffee</h4>
                </ic-typography>`
              : ""}
            ${args.messageSlot
              ? html`<ic-typography slot="message">
                  <p>
                    (Slotted)
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut pharetra tortor, sed lacinia lectus. Aliquam elementum risus ipsum, sit amet tincidunt elit pharetra quis. Morbi maximus dolor sit amet nulla feugiat, sed congue ligula dignissim. Nullam ac augue nec erat suscipit scelerisque. Aliquam at tellus fringilla, faucibus est posuere, convallis magna. Integer vel ornare lectus. Vestibulum convallis mauris vel quam vehicula maximus. Fusce et consequat lacus, non auctor tellus. In ut lacus aliquet, accumsan tellus a, volutpat ante. Aliquam erat volutpat. Nam non lectus mauris. In eu libero ut augue viverra accumsan. Praesent non felis tortor. Nullam rutrum odio justo, bibendum pulvinar leo dictum a. Donec sodales sagittis ultricies. Duis posuere a mauris vitae auctor. Pellentesque porta, massa ac pellentesque feugiat, diam mauris commodo neque, quis gravida risus est sit amet lacus. Fusce rhoncus leo nec lobortis mattis. Donec risus leo, eleifend efficitur purus ac, sollicitudin dictum neque. Suspendisse potenti. Etiam mattis felis nisi, non laoreet ipsum sollicitudin at. Quisque metus nibh, imperdiet nec euismod a, convallis et sem. Maecenas cursus porttitor fringilla. Ut gravida ante at orci sagittis tincidunt. Integer porta nisl nisi, in vehicula felis aliquet sit amet. Praesent eleifend libero in vulputate convallis. Aenean aliquet ante a venenatis convallis. Donec quis felis semper, imperdiet tellus eu, imperdiet nisi. Sed aliquet felis nec tellus aliquet, et sodales sem varius. Etiam justo mauris, dapibus a ornare id, volutpat sit amet orci. Nam eu condimentum tortor, rhoncus fermentum nunc. Duis mollis justo a tortor tempus dictum. Quisque vulputate, risus non tempor varius, eros velit rutrum dui, non gravida elit erat eget ex. Ut cursus congue enim eget eleifend. Nullam iaculis neque non ligula aliquam, vitae rutrum arcu ultrices. Etiam porttitor condimentum dolor, ut luctus risus condimentum sit amet. Duis faucibus commodo leo nec bibendum. Nam faucibus, lectus vitae pulvinar ullamcorper, risus orci tempus sapien, varius pulvinar nulla odio eget ipsum. Mauris vestibulum sem vitae lectus feugiat, in tincidunt neque fringilla. Fusce lacus eros, elementum sit amet sapien et, congue venenatis metus. Nullam mauris velit, pharetra et ligula faucibus, pulvinar luctus nisl. Etiam ante odio, fermentum ac accumsan eget, luctus a libero. Phasellus maximus risus ac viverra scelerisque.
                  </p>
                </ic-typography>`
              : ""}
            ${args.actionsSlot
              ? html`<ic-button slot="actions" variant="secondary"
                    >Learn even more</ic-button
                  >
                  <ic-button slot="actions" variant="secondary"
                    >Add to favourites</ic-button
                  >
                  <ic-button slot="actions">Add to order</ic-button>`
              : ""}
          </ic-drawer>
        </div>
      </main>
      <ic-footer
        aligned="center"
        caption="This information is exempt under the Freedom of Information Act 2000 (FOIA) and may be exempt under other UK information legislation."
        description="This pattern was built using the Intelligence Community Design System (ICDS)."
      ></ic-footer>
    </div>
    <script>
      function toggleDrawer(drawerId) {
        const drawer = document.querySelector("ic-drawer");
        drawer.expanded = !drawer.expanded;
      }
    </script>
  </div>`,
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    boundary: {
      options: ["viewport", "parent"],
      control: {
        type: "inline-radio",
      },
    },
    position: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "inline-radio",
      },
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio",
      },
    },
    trigger: {
      options: ["arrow", "controlled"],
      control: {
        type: "inline-radio",
      },
    },
  },
};

// export const Playground = {
//   render: (args) => {
//     const [drawerExpanded, setDrawerExpanded] = useState(args.expanded);

//     // Prevents Storybook-only issue where drawer would close when slotted elements are updated
//     useEffect(() => {
//       setDrawerExpanded(args.expanded);
//     }, [args.expanded]);

//     return (
//       <div style={{ display: "flex", height: "100%" }}>
//         <IcSideNavigation
//           appTitle="Déja-brew"
//           status="alpha"
//           version="v0.0.7"
//         >
//           <SlottedSVG
//             slot="app-icon"
//             xmlns="http://www.w3.org/2000/svg"
//             height={24}
//             viewBox="0 0 24 24"
//             width={24}
//             fill="#000000"
//           >
//             <path d="M0 0h24v24H0V0z" fill="none" />
//             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
//           </SlottedSVG>
//           <IcNavigationItem slot="primary-navigation" href="/" label="Home">
//             <SlottedSVG
//               slot="icon"
//               width={24}
//               height={24}
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
//                 fill="currentColor"
//               />
//             </SlottedSVG>
//           </IcNavigationItem>
//         </IcSideNavigation>
//         <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
//           <main id="main" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//             <IcPageHeader
//               heading="Latte recipe"
//               subheading="A latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam."
//               aligned="center"
//             />
//             <div style={{ display: "flex", flex: 1, position: "relative" }}>
//             <IcSectionContainer aligned="center">
//               <div className={{
//                 border: "var(--ic-border-width) dashed var(--ic-architectural-400)",
//                 padding: "var(--ic-space-md)",
//                 height: "800px",
//               }}>
//                 <IcTypography>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et odio metus. Quisque pharetra at elit et bibendum. Vivamus pellentesque lacus vel facilisis tincidunt. Aliquam erat volutpat. Pellentesque mi ligula, aliquet eget lacinia dignissim, euismod non sapien. Fusce ac lorem eget nisi tincidunt imperdiet. Sed sed ipsum pellentesque, feugiat ligula ut, placerat nisl. Nulla gravida faucibus elit ut laoreet. Nam sagittis lacinia eros a aliquet. Cras in massa condimentum, auctor turpis vestibulum, imperdiet libero. Integer arcu purus, ultricies sit amet felis vel, ullamcorper semper lectus. Proin ultrices tortor sed velit mattis facilisis. Integer rutrum nec nulla at fringilla. Duis a nibh ut tellus venenatis tincidunt a vel quam.
//                     <br />
//                     <br />
//                     Donec viverra enim sed nibh placerat venenatis. Ut volutpat dapibus cursus. Sed in sodales mi. Maecenas viverra ex sit amet tempus consequat. In a nulla mollis, fringilla metus vitae, facilisis lorem. Ut eu turpis a magna sodales suscipit. Curabitur et turpis nec nisi mollis consectetur. Quisque consequat libero non laoreet vestibulum. Aliquam non diam faucibus, aliquet augue sed, suscipit orci. Nunc in tempor eros. Phasellus euismod vestibulum nulla sit amet ultricies. Pellentesque luctus purus ut elit placerat ultricies. Sed a gravida nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam porttitor a mi pharetra lobortis. Curabitur dapibus id purus sed feugiat.
//                   </p>
//                 </IcTypography>
//                 <br />
//                 {args.trigger === 'controlled' && (
//                   <IcButton variant="secondary" onClick={() => setDrawerExpanded(!drawerExpanded)}>Learn more about roasted coffee</IcButton>
//                 )}
//               </div>
//             </IcSectionContainer>
//             <IcDrawer
//               // ref={drawerRef}
//               ariaLabel={args.ariaLabel}
//               boundary={args.boundary}
//               chevronButtonAriaLabel={args.chevronButtonAriaLabel}
//               closeButtonAriaLabel={args.closeButtonAriaLabel}
//               closeOnBackdropClick={args.closeOnBackdropClick}
//               expanded={drawerExpanded}
//               heading={args.heading}
//               hideCloseButton={args.hideCloseButton}
//               message={args.message}
//               position={args.position}
//               size={args.size}
//               theme={args.theme}
//               trigger={args.trigger}
//               onIcDrawerExpanded={ev => setDrawerExpanded(ev.detail.expanded)}
//             >
//               {args.headingAdornmentSlot && (
//                 <SlottedSVG
//                   path={mdiCoffee}
//                   slot="heading-adornment"
//                   viewBox="0 0 24 24"
//                 />
//               )}
//               {args.headingSlot && (
//                 <IcTypography slot="heading" variant="h4">
//                   <h4>(Slotted) Roasted coffee</h4>
//                 </IcTypography>
//               )}
//               {args.messageSlot && (
//                 <IcTypography>
//                   <p>
//                     (Slotted)
//                     <br />
//                     Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours.
//                   </p>
//                 </IcTypography>
//               )}
//               {args.actionsSlot && (
//                 <IcButton slot="actions">Add to order</IcButton>
//               )}
//             </IcDrawer>
//             </div>
//           </main>
//           <IcFooter
//             aligned="center"
//             caption="This information is exempt under the Freedom of Information Act 2000 (FOIA) and may be exempt under other UK information legislation."
//             description="This pattern was built using the Intelligence Community Design System (ICDS)."
//           />
//         </div>
//       </div>
//     )
//   },
//   name: "Playground",
//   args: defaultArgs,
//   argTypes: {
//     boundary: {
//       options: ["viewport", "parent"],
//       control: {
//         type: "inline-radio",
//       },
//     },
//     position: {
//       options: ["top", "bottom", "left", "right"],
//       control: {
//         type: "inline-radio",
//       },
//     },
//     size: {
//       options: ["small", "medium", "large"],
//       control: {
//         type: "inline-radio",
//       },
//     },
//     theme: {
//       options: ["inherit", "light", "dark"],
//       control: {
//         type: "inline-radio"
//       },
//     },
//     trigger: {
//       options: ["arrow", "controlled"],
//       control: {
//         type: "inline-radio",
//       },
//     },
//   }
// }
