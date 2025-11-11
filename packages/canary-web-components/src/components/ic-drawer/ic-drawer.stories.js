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
  actionsSlot: true,
  headingSlot: false,
  headingAdornmentSlot: true,
  ariaLabel: "",
  boundary: "viewport",
  chevronButtonAriaLabel: "",
  closeButtonAriaLabel: "",
  closeOnBackdropClick: true,
  expanded: false,

  //   chevronButtonAriaLabel: "",
  //   closeButtonAriaLabel: "Close drawer",
  //   closeOnBackdropClick: true,
  //   expanded: false,
  //   heading: "Heading",
  //   message: `Lorem ipsum odor amet, consectetuer adipiscing elit. Netus condimentum posuere velit egestas senectus viverra. Nascetur diam curabitur semper sodales sapien sit mi. Ultrices potenti eget netus et cras quis; convallis phasellus. Posuere magnis sapien ipsum risus maecenas molestie dictum. Penatibus quis platea vel ipsum habitasse inceptos. Litora leo efficitur duis sociosqu litora ex. Tellus interdum neque sapien finibus felis iaculis euismod. Hendrerit dignissim diam adipiscing nam rutrum nascetur amet.

  //   Placerat blandit nullam netus mattis vulputate torquent. Adipiscing augue sociosqu nibh parturient conubia cras ridiculus. Quis mi posuere laoreet montes sapien turpis fermentum lobortis. Adipiscing cubilia varius dictum suscipit lobortis. Metus tincidunt quis orci suspendisse scelerisque magna turpis. Pellentesque finibus dis pretium; nisl tincidunt ante et. Nibh curae turpis; duis torquent ornare ante morbi magna gravida? Ut est primis purus tincidunt cubilia interdum; natoque adipiscing. Semper adipiscing cubilia donec velit donec phasellus phasellus vivamus.`,
  //   position: "right",
  //   showCloseButton: true,
  //   size: "medium",
  //   trigger: "arrow",
};

export const RightPosition = {
  render: (args) => html`<ic-drawer heading="Roasted coffee">
    <svg
      slot="heading-adornment"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
      />
    </svg>
    <ic-typography>
      <p>
        Contrary to popular belief, light roast coffee has more caffeine than
        dark roast coffee. The longer coffee is roasted, the more caffeine is
        lost through the cooking of the bean. Light roast coffee is a light
        brown colour and has no oil on the surface of the beans, and these
        coffees typically have a crisp acidity, a mellow body, and bright
        flavours.
      </p>
    </ic-typography>
    <ic-button slot="actions">Add to order</ic-button>
  </ic-drawer>`,
  name: "Right position",
};

export const LeftPosition = {
  render: (args) => html`<ic-drawer heading="Roasted coffee" position="left">
    <svg
      slot="heading-adornment"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
      />
    </svg>
    <ic-typography>
      <p>
        Contrary to popular belief, light roast coffee has more caffeine than
        dark roast coffee. The longer coffee is roasted, the more caffeine is
        lost through the cooking of the bean. Light roast coffee is a light
        brown colour and has no oil on the surface of the beans, and these
        coffees typically have a crisp acidity, a mellow body, and bright
        flavours.
      </p>
    </ic-typography>
    <ic-button slot="actions">Add to order</ic-button>
  </ic-drawer>`,
  name: "Left position",
};

export const TopPosition = {
  render: (args) => html`<ic-drawer heading="Roasted coffee" position="top">
    <svg
      slot="heading-adornment"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
      />
    </svg>
    <ic-typography>
      <p>
        Contrary to popular belief, light roast coffee has more caffeine than
        dark roast coffee. The longer coffee is roasted, the more caffeine is
        lost through the cooking of the bean. Light roast coffee is a light
        brown colour and has no oil on the surface of the beans, and these
        coffees typically have a crisp acidity, a mellow body, and bright
        flavours.
      </p>
    </ic-typography>
    <ic-button slot="actions">Add to order</ic-button>
  </ic-drawer>`,
  name: "Top position",
};

export const BottomPosition = {
  render: (args) => html`<ic-drawer heading="Roasted coffee" position="bottom">
    <svg
      slot="heading-adornment"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
      />
    </svg>
    <ic-typography>
      <p>
        Contrary to popular belief, light roast coffee has more caffeine than
        dark roast coffee. The longer coffee is roasted, the more caffeine is
        lost through the cooking of the bean. Light roast coffee is a light
        brown colour and has no oil on the surface of the beans, and these
        coffees typically have a crisp acidity, a mellow body, and bright
        flavours.
      </p>
    </ic-typography>
    <ic-button slot="actions">Add to order</ic-button>
  </ic-drawer>`,
  name: "Bottom position",
};

export const Expanded = {
  render: (args) => html`<ic-drawer heading="Roasted coffee" expanded="true">
    <svg
      slot="heading-adornment"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
      />
    </svg>
    <ic-typography>
      <p>
        Contrary to popular belief, light roast coffee has more caffeine than
        dark roast coffee. The longer coffee is roasted, the more caffeine is
        lost through the cooking of the bean. Light roast coffee is a light
        brown colour and has no oil on the surface of the beans, and these
        coffees typically have a crisp acidity, a mellow body, and bright
        flavours.
      </p>
    </ic-typography>
    <ic-button slot="actions">Add to order</ic-button>
  </ic-drawer>`,
  name: "Expanded",
};

export const ContainedWithinParent = {
  render: () => html`<div style="display: flex; height: 100vh;">
      <div
        style="position: relative; display: flex; border: 1px solid lightgrey; flex: 1; margin: 32px;"
      >
        <ic-drawer
          id="drawer-right-contained"
          heading="Roasted coffee"
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
          <ic-typography>
            <p>
              Contrary to popular belief, light roast coffee has more caffeine
              than dark roast coffee. The longer coffee is roasted, the more
              caffeine is lost through the cooking of the bean. Light roast
              coffee is a light brown colour and has no oil on the surface of
              the beans, and these coffees typically have a crisp acidity, a
              mellow body, and bright flavours.
            </p>
          </ic-typography>
          <ic-button slot="actions">Add to order</ic-button>
        </ic-drawer>
      </div>
    </div>
    <script>
      function expandDrawer(drawerId) {
        const drawer = document.querySelector(
          "ic-drawer#drawer-right-contained"
        );
        drawer.expanded = !drawer.expanded;
      }

      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      document
        .querySelector("ic-drawer#drawer-right-contained")
        .addEventListener("icDrawerExpanded", handleDrawerExpanded);
    </script>`,
  name: "Contained within parent",
};

export const ManualTrigger = {
  render: () => html`<div style="margin: 16px; display: flex; gap: 16px;">
      <ic-button onclick="expandDrawer('right')">Toggle right drawer</ic-button>
      <ic-button onclick="expandDrawer('left')">Toggle left drawer</ic-button>
      <ic-button onclick="expandDrawer('top')">Toggle top drawer</ic-button>
      <ic-button onclick="expandDrawer('bottom')"
        >Toggle bottom drawer</ic-button
      >
    </div>
    <ic-drawer id="drawer-right" trigger="controlled" heading="Roasted coffee">
      <svg
        slot="heading-adornment"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
        />
      </svg>
      <ic-typography>
        <p>
          Contrary to popular belief, light roast coffee has more caffeine than
          dark roast coffee. The longer coffee is roasted, the more caffeine is
          lost through the cooking of the bean. Light roast coffee is a light
          brown colour and has no oil on the surface of the beans, and these
          coffees typically have a crisp acidity, a mellow body, and bright
          flavours.
        </p>
      </ic-typography>
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>
    <ic-drawer
      id="drawer-left"
      trigger="controlled"
      heading="Roasted coffee"
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
      <ic-typography>
        <p>
          Contrary to popular belief, light roast coffee has more caffeine than
          dark roast coffee. The longer coffee is roasted, the more caffeine is
          lost through the cooking of the bean. Light roast coffee is a light
          brown colour and has no oil on the surface of the beans, and these
          coffees typically have a crisp acidity, a mellow body, and bright
          flavours.
        </p>
      </ic-typography>
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>
    <ic-drawer
      id="drawer-top"
      trigger="controlled"
      heading="Roasted coffee"
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
      <ic-typography>
        <p>
          Contrary to popular belief, light roast coffee has more caffeine than
          dark roast coffee. The longer coffee is roasted, the more caffeine is
          lost through the cooking of the bean. Light roast coffee is a light
          brown colour and has no oil on the surface of the beans, and these
          coffees typically have a crisp acidity, a mellow body, and bright
          flavours.
        </p>
      </ic-typography>
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>
    <ic-drawer
      id="drawer-bottom"
      trigger="controlled"
      heading="Roasted coffee"
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
      <ic-typography>
        <p>
          Contrary to popular belief, light roast coffee has more caffeine than
          dark roast coffee. The longer coffee is roasted, the more caffeine is
          lost through the cooking of the bean. Light roast coffee is a light
          brown colour and has no oil on the surface of the beans, and these
          coffees typically have a crisp acidity, a mellow body, and bright
          flavours.
        </p>
      </ic-typography>
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>
    <script>
      function expandDrawer(drawerId) {
        const drawer = document.querySelector(
          \`ic-drawer#drawer-\${drawerId}\`
        );
        drawer.expanded = !drawer.expanded;
      }

      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      ["right", "left", "top", "bottom"].forEach((id) => {
        const drawer = document.querySelector(\`ic-drawer#drawer-\${id}\`);
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
        <ic-button onclick="expandDrawer('right')"
          >Toggle right drawer</ic-button
        >
        <ic-button onclick="expandDrawer('left')">Toggle left drawer</ic-button>
        <ic-button onclick="expandDrawer('top')">Toggle top drawer</ic-button>
        <ic-button onclick="expandDrawer('bottom')"
          >Toggle bottom drawer</ic-button
        >
      </div>
      <div
        style="position: relative; display: flex; border: 1px solid lightgrey; flex: 1; margin: 32px;"
      >
        <ic-drawer
          id="drawer-right-contained"
          trigger="controlled"
          heading="Roasted coffee"
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
          <ic-typography>
            <p>
              Contrary to popular belief, light roast coffee has more caffeine
              than dark roast coffee. The longer coffee is roasted, the more
              caffeine is lost through the cooking of the bean. Light roast
              coffee is a light brown colour and has no oil on the surface of
              the beans, and these coffees typically have a crisp acidity, a
              mellow body, and bright flavours.
            </p>
          </ic-typography>
          <ic-button slot="actions">Add to order</ic-button>
        </ic-drawer>
        <ic-drawer
          position="left"
          id="drawer-left-contained"
          trigger="controlled"
          heading="Roasted coffee"
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
          <ic-typography>
            <p>
              Contrary to popular belief, light roast coffee has more caffeine
              than dark roast coffee. The longer coffee is roasted, the more
              caffeine is lost through the cooking of the bean. Light roast
              coffee is a light brown colour and has no oil on the surface of
              the beans, and these coffees typically have a crisp acidity, a
              mellow body, and bright flavours.
            </p>
          </ic-typography>
          <ic-button slot="actions">Add to order</ic-button>
        </ic-drawer>
        <ic-drawer
          position="top"
          id="drawer-top-contained"
          trigger="controlled"
          heading="Roasted coffee"
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
          <ic-typography>
            <p>
              Contrary to popular belief, light roast coffee has more caffeine
              than dark roast coffee. The longer coffee is roasted, the more
              caffeine is lost through the cooking of the bean. Light roast
              coffee is a light brown colour and has no oil on the surface of
              the beans, and these coffees typically have a crisp acidity, a
              mellow body, and bright flavours.
            </p>
          </ic-typography>
          <ic-button slot="actions">Add to order</ic-button>
        </ic-drawer>
        <ic-drawer
          position="bottom"
          id="drawer-bottom-contained"
          trigger="controlled"
          heading="Roasted coffee"
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
          <ic-typography>
            <p>
              Contrary to popular belief, light roast coffee has more caffeine
              than dark roast coffee. The longer coffee is roasted, the more
              caffeine is lost through the cooking of the bean. Light roast
              coffee is a light brown colour and has no oil on the surface of
              the beans, and these coffees typically have a crisp acidity, a
              mellow body, and bright flavours.
            </p>
          </ic-typography>
          <ic-button slot="actions">Add to order</ic-button>
        </ic-drawer>
      </div>
    </div>
    <script>
      function expandDrawer(drawerId) {
        const drawer = document.querySelector(
          \`ic-drawer#drawer-\${drawerId}-contained\`
        );
        drawer.expanded = !drawer.expanded;
      }

      function handleDrawerExpanded(ev) {
        console.log(ev.detail);
      }

      ["right", "left", "top", "bottom"].forEach((id) => {
        const drawer = document.querySelector(
          \`ic-drawer#drawer-\${id}-contained\`
        );
        drawer.addEventListener("icDrawerExpanded", handleDrawerExpanded);
      });
    </script>`,
  name: "Manual trigger - contained within parent",
};

export const Small = {
  render: (args) => html`<ic-drawer heading="Roasted coffee" size="small">
    <svg
      slot="heading-adornment"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
      />
    </svg>
    <ic-typography>
      <p>
        Contrary to popular belief, light roast coffee has more caffeine than
        dark roast coffee. The longer coffee is roasted, the more caffeine is
        lost through the cooking of the bean. Light roast coffee is a light
        brown colour and has no oil on the surface of the beans, and these
        coffees typically have a crisp acidity, a mellow body, and bright
        flavours.
      </p>
    </ic-typography>
    <ic-button slot="actions">Add to order</ic-button>
  </ic-drawer>`,
  name: "Small",
};

export const Large = {
  render: (args) => html`<ic-drawer
    id="drawer-right-slotted-content"
    heading="Roasted coffee"
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
    <ic-typography>
      <p>
        Contrary to popular belief, light roast coffee has more caffeine than
        dark roast coffee. The longer coffee is roasted, the more caffeine is
        lost through the cooking of the bean. Light roast coffee is a light
        brown colour and has no oil on the surface of the beans, and these
        coffees typically have a crisp acidity, a mellow body, and bright
        flavours.
      </p>
    </ic-typography>
    <ic-button slot="actions">Add to order</ic-button>
  </ic-drawer>`,
  name: "Large",
};

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
    <div>
      <ic-typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
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
    </div>
    <ic-button slot="actions">Add to order</ic-button>
  </ic-drawer>
  <script>
      function expandDrawer() {
        const drawer = document.querySelector(
          "ic-drawer#drawer-right-slotted-content"
        );
        icDrawer.expanded = !icDrawer.expanded;
      }
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
