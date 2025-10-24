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
  chevronButtonAriaLabel: "",
  closeButtonAriaLabel: "Close drawer",
  closeOnBackdropClick: true,
  expanded: false,
  heading: "Heading",
  message: `Lorem ipsum odor amet, consectetuer adipiscing elit. Netus condimentum posuere velit egestas senectus viverra. Nascetur diam curabitur semper sodales sapien sit mi. Ultrices potenti eget netus et cras quis; convallis phasellus. Posuere magnis sapien ipsum risus maecenas molestie dictum. Penatibus quis platea vel ipsum habitasse inceptos. Litora leo efficitur duis sociosqu litora ex. Tellus interdum neque sapien finibus felis iaculis euismod. Hendrerit dignissim diam adipiscing nam rutrum nascetur amet.

  Placerat blandit nullam netus mattis vulputate torquent. Adipiscing augue sociosqu nibh parturient conubia cras ridiculus. Quis mi posuere laoreet montes sapien turpis fermentum lobortis. Adipiscing cubilia varius dictum suscipit lobortis. Metus tincidunt quis orci suspendisse scelerisque magna turpis. Pellentesque finibus dis pretium; nisl tincidunt ante et. Nibh curae turpis; duis torquent ornare ante morbi magna gravida? Ut est primis purus tincidunt cubilia interdum; natoque adipiscing. Semper adipiscing cubilia donec velit donec phasellus phasellus vivamus.`,
  position: "right",
  showCloseButton: true,
  size: "medium",
  trigger: "arrow",
};

// UPDATE REACT STORIES TO MATCH

export const RightPosition = {
  render: () => html`<ic-drawer
    heading="Roasted coffee"
    message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
    position="right"
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
  </ic-drawer>`,
  name: "Right position",
};

export const LeftPosition = {
  render: () =>
    html`<ic-drawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="left"
    >
      <svg
        style="width: var(--ic-space-lg); height: var(--ic-space-lg);"
        slot="heading-adornment"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
        />
      </svg>
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>`,
  name: "Left position",
};

export const TopPosition = {
  render: () =>
    html`<ic-drawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="top"
    >
      <svg
        style="width: var(--ic-space-lg); height: var(--ic-space-lg);"
        slot="heading-adornment"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
        />
      </svg>
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>`,
  name: "Top position",
};

export const BottomPosition = {
  render: () =>
    html`<ic-drawer
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
      position="bottom"
    >
      <svg
        style="width: var(--ic-space-lg); height: var(--ic-space-lg);"
        slot="heading-adornment"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
        />
      </svg>
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>`,
  name: "Bottom position",
};

export const LongContentRight = {
  render: () => html`<ic-drawer
    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ullamcorper tortor sit amet urna dapibus laoreet. Proin eu tellus condimentum felis dictum euismod. Cras velit nunc, feugiat at euismod id, placerat vel dolor. Morbi sodales nisl in libero viverra convallis. Vestibulum sit amet nisi nunc. Phasellus nec sodales nisl. Nam tristique justo mauris, vel rhoncus odio dapibus vel. Aenean efficitur cursus est nec ornare. Mauris nec turpis hendrerit, tempus nibh eget, commodo quam.

    Duis rhoncus eleifend turpis, id efficitur magna tempor quis. Praesent efficitur turpis nec lacus convallis, quis feugiat lectus tempor. Curabitur condimentum, justo et blandit sagittis, dui odio euismod lorem, accumsan maximus sem erat gravida justo. Aliquam venenatis, dolor vel pulvinar vehicula, dui nulla gravida nisl, sit amet consequat quam libero vitae ex. Nulla porttitor, nunc tristique tristique ullamcorper, tellus nunc maximus libero, eget pharetra diam dolor ut metus. Sed eget placerat metus, non maximus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate nulla sit amet ipsum aliquet malesuada. Sed sapien lacus, finibus in ultricies at, feugiat eget est. Pellentesque vitae neque nulla. Maecenas vulputate libero sit amet ex facilisis auctor. Etiam eget nisl eu magna accumsan suscipit. Maecenas nec sollicitudin erat.

    Integer sit amet pharetra neque, at posuere magna. Vestibulum erat justo, scelerisque sit amet orci in, porta dapibus lorem. Vivamus cursus sem quis viverra consequat. Donec in tellus eget nisl tincidunt ornare sed nec lorem. Sed congue justo id ligula luctus sodales. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ante lorem, porttitor sed mauris sed, venenatis euismod turpis."
    position="right"
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
  </ic-drawer>`,
  name: "Long content right",
};

export const LongContentLeft = {
  render: () => html`<ic-drawer
    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ullamcorper tortor sit amet urna dapibus laoreet. Proin eu tellus condimentum felis dictum euismod. Cras velit nunc, feugiat at euismod id, placerat vel dolor. Morbi sodales nisl in libero viverra convallis. Vestibulum sit amet nisi nunc. Phasellus nec sodales nisl. Nam tristique justo mauris, vel rhoncus odio dapibus vel. Aenean efficitur cursus est nec ornare. Mauris nec turpis hendrerit, tempus nibh eget, commodo quam.

    Duis rhoncus eleifend turpis, id efficitur magna tempor quis. Praesent efficitur turpis nec lacus convallis, quis feugiat lectus tempor. Curabitur condimentum, justo et blandit sagittis, dui odio euismod lorem, accumsan maximus sem erat gravida justo. Aliquam venenatis, dolor vel pulvinar vehicula, dui nulla gravida nisl, sit amet consequat quam libero vitae ex. Nulla porttitor, nunc tristique tristique ullamcorper, tellus nunc maximus libero, eget pharetra diam dolor ut metus. Sed eget placerat metus, non maximus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate nulla sit amet ipsum aliquet malesuada. Sed sapien lacus, finibus in ultricies at, feugiat eget est. Pellentesque vitae neque nulla. Maecenas vulputate libero sit amet ex facilisis auctor. Etiam eget nisl eu magna accumsan suscipit. Maecenas nec sollicitudin erat.

    Integer sit amet pharetra neque, at posuere magna. Vestibulum erat justo, scelerisque sit amet orci in, porta dapibus lorem. Vivamus cursus sem quis viverra consequat. Donec in tellus eget nisl tincidunt ornare sed nec lorem. Sed congue justo id ligula luctus sodales. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ante lorem, porttitor sed mauris sed, venenatis euismod turpis."
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
  </ic-drawer>`,
  name: "Long content left",
};

export const LongContentTop = {
  render: () => html`<ic-drawer
    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ullamcorper tortor sit amet urna dapibus laoreet. Proin eu tellus condimentum felis dictum euismod. Cras velit nunc, feugiat at euismod id, placerat vel dolor. Morbi sodales nisl in libero viverra convallis. Vestibulum sit amet nisi nunc. Phasellus nec sodales nisl. Nam tristique justo mauris, vel rhoncus odio dapibus vel. Aenean efficitur cursus est nec ornare. Mauris nec turpis hendrerit, tempus nibh eget, commodo quam.

    Duis rhoncus eleifend turpis, id efficitur magna tempor quis. Praesent efficitur turpis nec lacus convallis, quis feugiat lectus tempor. Curabitur condimentum, justo et blandit sagittis, dui odio euismod lorem, accumsan maximus sem erat gravida justo. Aliquam venenatis, dolor vel pulvinar vehicula, dui nulla gravida nisl, sit amet consequat quam libero vitae ex. Nulla porttitor, nunc tristique tristique ullamcorper, tellus nunc maximus libero, eget pharetra diam dolor ut metus. Sed eget placerat metus, non maximus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate nulla sit amet ipsum aliquet malesuada. Sed sapien lacus, finibus in ultricies at, feugiat eget est. Pellentesque vitae neque nulla. Maecenas vulputate libero sit amet ex facilisis auctor. Etiam eget nisl eu magna accumsan suscipit. Maecenas nec sollicitudin erat.

    Integer sit amet pharetra neque, at posuere magna. Vestibulum erat justo, scelerisque sit amet orci in, porta dapibus lorem. Vivamus cursus sem quis viverra consequat. Donec in tellus eget nisl tincidunt ornare sed nec lorem. Sed congue justo id ligula luctus sodales. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ante lorem, porttitor sed mauris sed, venenatis euismod turpis.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ullamcorper tortor sit amet urna dapibus laoreet. Proin eu tellus condimentum felis dictum euismod. Cras velit nunc, feugiat at euismod id, placerat vel dolor. Morbi sodales nisl in libero viverra convallis. Vestibulum sit amet nisi nunc. Phasellus nec sodales nisl. Nam tristique justo mauris, vel rhoncus odio dapibus vel. Aenean efficitur cursus est nec ornare. Mauris nec turpis hendrerit, tempus nibh eget, commodo quam.

    Duis rhoncus eleifend turpis, id efficitur magna tempor quis. Praesent efficitur turpis nec lacus convallis, quis feugiat lectus tempor. Curabitur condimentum, justo et blandit sagittis, dui odio euismod lorem, accumsan maximus sem erat gravida justo. Aliquam venenatis, dolor vel pulvinar vehicula, dui nulla gravida nisl, sit amet consequat quam libero vitae ex. Nulla porttitor, nunc tristique tristique ullamcorper, tellus nunc maximus libero, eget pharetra diam dolor ut metus. Sed eget placerat metus, non maximus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate nulla sit amet ipsum aliquet malesuada. Sed sapien lacus, finibus in ultricies at, feugiat eget est. Pellentesque vitae neque nulla. Maecenas vulputate libero sit amet ex facilisis auctor. Etiam eget nisl eu magna accumsan suscipit. Maecenas nec sollicitudin erat.

    Integer sit amet pharetra neque, at posuere magna. Vestibulum erat justo, scelerisque sit amet orci in, porta dapibus lorem. Vivamus cursus sem quis viverra consequat. Donec in tellus eget nisl tincidunt ornare sed nec lorem. Sed congue justo id ligula luctus sodales. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ante lorem, porttitor sed mauris sed, venenatis euismod turpis."
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
  </ic-drawer>`,
  name: "Long content top",
};

export const LongContentBottom = {
  render: () => html`<ic-drawer
    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ullamcorper tortor sit amet urna dapibus laoreet. Proin eu tellus condimentum felis dictum euismod. Cras velit nunc, feugiat at euismod id, placerat vel dolor. Morbi sodales nisl in libero viverra convallis. Vestibulum sit amet nisi nunc. Phasellus nec sodales nisl. Nam tristique justo mauris, vel rhoncus odio dapibus vel. Aenean efficitur cursus est nec ornare. Mauris nec turpis hendrerit, tempus nibh eget, commodo quam.

    Duis rhoncus eleifend turpis, id efficitur magna tempor quis. Praesent efficitur turpis nec lacus convallis, quis feugiat lectus tempor. Curabitur condimentum, justo et blandit sagittis, dui odio euismod lorem, accumsan maximus sem erat gravida justo. Aliquam venenatis, dolor vel pulvinar vehicula, dui nulla gravida nisl, sit amet consequat quam libero vitae ex. Nulla porttitor, nunc tristique tristique ullamcorper, tellus nunc maximus libero, eget pharetra diam dolor ut metus. Sed eget placerat metus, non maximus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate nulla sit amet ipsum aliquet malesuada. Sed sapien lacus, finibus in ultricies at, feugiat eget est. Pellentesque vitae neque nulla. Maecenas vulputate libero sit amet ex facilisis auctor. Etiam eget nisl eu magna accumsan suscipit. Maecenas nec sollicitudin erat.

    Integer sit amet pharetra neque, at posuere magna. Vestibulum erat justo, scelerisque sit amet orci in, porta dapibus lorem. Vivamus cursus sem quis viverra consequat. Donec in tellus eget nisl tincidunt ornare sed nec lorem. Sed congue justo id ligula luctus sodales. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ante lorem, porttitor sed mauris sed, venenatis euismod turpis.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ullamcorper tortor sit amet urna dapibus laoreet. Proin eu tellus condimentum felis dictum euismod. Cras velit nunc, feugiat at euismod id, placerat vel dolor. Morbi sodales nisl in libero viverra convallis. Vestibulum sit amet nisi nunc. Phasellus nec sodales nisl. Nam tristique justo mauris, vel rhoncus odio dapibus vel. Aenean efficitur cursus est nec ornare. Mauris nec turpis hendrerit, tempus nibh eget, commodo quam.

    Duis rhoncus eleifend turpis, id efficitur magna tempor quis. Praesent efficitur turpis nec lacus convallis, quis feugiat lectus tempor. Curabitur condimentum, justo et blandit sagittis, dui odio euismod lorem, accumsan maximus sem erat gravida justo. Aliquam venenatis, dolor vel pulvinar vehicula, dui nulla gravida nisl, sit amet consequat quam libero vitae ex. Nulla porttitor, nunc tristique tristique ullamcorper, tellus nunc maximus libero, eget pharetra diam dolor ut metus. Sed eget placerat metus, non maximus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate nulla sit amet ipsum aliquet malesuada. Sed sapien lacus, finibus in ultricies at, feugiat eget est. Pellentesque vitae neque nulla. Maecenas vulputate libero sit amet ex facilisis auctor. Etiam eget nisl eu magna accumsan suscipit. Maecenas nec sollicitudin erat.

    Integer sit amet pharetra neque, at posuere magna. Vestibulum erat justo, scelerisque sit amet orci in, porta dapibus lorem. Vivamus cursus sem quis viverra consequat. Donec in tellus eget nisl tincidunt ornare sed nec lorem. Sed congue justo id ligula luctus sodales. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ante lorem, porttitor sed mauris sed, venenatis euismod turpis."
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
  </ic-drawer>`,
  name: "Long content bottom",
};

export const SlottedContent = {
  render: () => html` <ic-drawer heading="Roasted coffee" position="right">
    <svg
      slot="heading-adornment"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
      />
    </svg>
    <ic-typography slot="heading" variant="h4"
      ><h4>Roasted coffee</h4></ic-typography
    >
    <ic-typography slot="message">
      <p>
        Contrary to popular belief, light roast coffee has more caffeine than
        dark roast coffee. The longer coffee is roasted, the more caffeine is
        lost through the cooking of the bean. Light roast coffee is a light
        brown colour and has no oil on the surface of the beans, and these
        coffees typically have a crisp acidity, a mellow body, and bright
        flavours.
      </p>
    </ic-typography>
    <ic-button variant="secondary" slot="actions">Learn more</ic-button>
    <ic-button slot="actions">Add to order</ic-button>
    <ic-button slot="actions">Add to order</ic-button>
    <ic-button slot="actions">Add to order</ic-button>
    <ic-button slot="actions">Add to order</ic-button>
    <ic-button slot="actions">Add to order</ic-button>
    <ic-button slot="actions">Add to order</ic-button>
  </ic-drawer>`,
  name: "Slotted content",
};

export const ManualTriggerRight = {
  render: () => html` <ic-button onclick="expandDrawer()" style="margin: 16px;"
      >Open drawer</ic-button
    >
    <ic-drawer
      id="drawer-1"
      trigger="controlled"
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
    >
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>
    <script>
      let icDrawer = document.querySelector("ic-drawer#drawer-1");
      function expandDrawer() {
        icDrawer.expanded = !icDrawer.expanded;
      }
    </script>`,
  name: "Manual trigger right",
};

export const ManualTriggerLeft = {
  render: () => html` <ic-button onclick="expandDrawer()" style="margin: 16px;"
      >Open drawer</ic-button
    >
    <ic-drawer
      id="drawer-1"
      trigger="controlled"
      position="left"
      hide-close-button="true"
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
    >
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>
    <script>
      let icDrawer = document.querySelector("ic-drawer#drawer-1");
      function expandDrawer() {
        icDrawer.expanded = !icDrawer.expanded;
      }
    </script>`,
  name: "Manual trigger left",
};

export const ManualTriggerTop = {
  render: () => html` <ic-button onclick="expandDrawer()" style="margin: 16px;"
      >Open drawer</ic-button
    >
    <ic-drawer
      position="top"
      id="drawer-1"
      trigger="controlled"
      hide-close-button="true"
      heading="Roasted coffee"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
    >
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>
    <script>
      let icDrawer = document.querySelector("ic-drawer#drawer-1");
      function expandDrawer() {
        icDrawer.expanded = !icDrawer.expanded;
      }
    </script>`,
  name: "Manual trigger top",
};

export const ManualTriggerBottom = {
  render: () => html` <ic-button onclick="expandDrawer()" style="margin: 16px;"
      >Open drawer</ic-button
    >
    <ic-drawer
      position="bottom"
      id="drawer-1"
      trigger="controlled"
      heading="Roasted coffee"
      hide-close-button="true"
      message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
    >
      <ic-button slot="actions">Add to order</ic-button>
    </ic-drawer>
    <script>
      let icDrawer = document.querySelector("ic-drawer#drawer-1");
      function expandDrawer() {
        icDrawer.expanded = !icDrawer.expanded;
      }
    </script>`,
  name: "Manual trigger bottom",
};

export const ManualTriggerLongContentRight = {
  render: () => html` <ic-button onclick="expandDrawer()" style="margin: 16px;"
      >Open drawer</ic-button
    >
    <ic-drawer
      id="drawer-1"
      trigger="controlled"
      heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ullamcorper tortor sit amet urna dapibus laoreet. Proin eu tellus condimentum felis dictum euismod. Cras velit nunc, feugiat at euismod id, placerat vel dolor. Morbi sodales nisl in libero viverra convallis. Vestibulum sit amet nisi nunc. Phasellus nec sodales nisl. Nam tristique justo mauris, vel rhoncus odio dapibus vel. Aenean efficitur cursus est nec ornare. Mauris nec turpis hendrerit, tempus nibh eget, commodo quam.

    Duis rhoncus eleifend turpis, id efficitur magna tempor quis. Praesent efficitur turpis nec lacus convallis, quis feugiat lectus tempor. Curabitur condimentum, justo et blandit sagittis, dui odio euismod lorem, accumsan maximus sem erat gravida justo. Aliquam venenatis, dolor vel pulvinar vehicula, dui nulla gravida nisl, sit amet consequat quam libero vitae ex. Nulla porttitor, nunc tristique tristique ullamcorper, tellus nunc maximus libero, eget pharetra diam dolor ut metus. Sed eget placerat metus, non maximus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate nulla sit amet ipsum aliquet malesuada. Sed sapien lacus, finibus in ultricies at, feugiat eget est. Pellentesque vitae neque nulla. Maecenas vulputate libero sit amet ex facilisis auctor. Etiam eget nisl eu magna accumsan suscipit. Maecenas nec sollicitudin erat.

    Integer sit amet pharetra neque, at posuere magna. Vestibulum erat justo, scelerisque sit amet orci in, porta dapibus lorem. Vivamus cursus sem quis viverra consequat. Donec in tellus eget nisl tincidunt ornare sed nec lorem. Sed congue justo id ligula luctus sodales. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ante lorem, porttitor sed mauris sed, venenatis euismod turpis."
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
      let icDrawer = document.querySelector("ic-drawer#drawer-1");
      function expandDrawer() {
        icDrawer.expanded = !icDrawer.expanded;
      }
    </script>`,
  name: "Manual trigger long content right",
};

export const ManualTriggerLongContentLeft = {
  render: () => html` <ic-button onclick="expandDrawer()" style="margin: 16px;"
      >Open drawer</ic-button
    >
    <ic-drawer
      id="drawer-1"
      trigger="controlled"
      position="left"
      heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ullamcorper tortor sit amet urna dapibus laoreet. Proin eu tellus condimentum felis dictum euismod. Cras velit nunc, feugiat at euismod id, placerat vel dolor. Morbi sodales nisl in libero viverra convallis. Vestibulum sit amet nisi nunc. Phasellus nec sodales nisl. Nam tristique justo mauris, vel rhoncus odio dapibus vel. Aenean efficitur cursus est nec ornare. Mauris nec turpis hendrerit, tempus nibh eget, commodo quam.

    Duis rhoncus eleifend turpis, id efficitur magna tempor quis. Praesent efficitur turpis nec lacus convallis, quis feugiat lectus tempor. Curabitur condimentum, justo et blandit sagittis, dui odio euismod lorem, accumsan maximus sem erat gravida justo. Aliquam venenatis, dolor vel pulvinar vehicula, dui nulla gravida nisl, sit amet consequat quam libero vitae ex. Nulla porttitor, nunc tristique tristique ullamcorper, tellus nunc maximus libero, eget pharetra diam dolor ut metus. Sed eget placerat metus, non maximus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate nulla sit amet ipsum aliquet malesuada. Sed sapien lacus, finibus in ultricies at, feugiat eget est. Pellentesque vitae neque nulla. Maecenas vulputate libero sit amet ex facilisis auctor. Etiam eget nisl eu magna accumsan suscipit. Maecenas nec sollicitudin erat.

    Integer sit amet pharetra neque, at posuere magna. Vestibulum erat justo, scelerisque sit amet orci in, porta dapibus lorem. Vivamus cursus sem quis viverra consequat. Donec in tellus eget nisl tincidunt ornare sed nec lorem. Sed congue justo id ligula luctus sodales. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ante lorem, porttitor sed mauris sed, venenatis euismod turpis."
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
      let icDrawer = document.querySelector("ic-drawer#drawer-1");
      function expandDrawer() {
        icDrawer.expanded = !icDrawer.expanded;
      }
    </script>`,
  name: "Manual trigger long content left",
};

export const ManualTriggerLongContentTop = {
  render: () => html` <ic-button onclick="expandDrawer()" style="margin: 16px;"
      >Open drawer</ic-button
    >
    <ic-drawer
      id="drawer-1"
      trigger="controlled"
      position="top"
      heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ullamcorper tortor sit amet urna dapibus laoreet. Proin eu tellus condimentum felis dictum euismod. Cras velit nunc, feugiat at euismod id, placerat vel dolor. Morbi sodales nisl in libero viverra convallis. Vestibulum sit amet nisi nunc. Phasellus nec sodales nisl. Nam tristique justo mauris, vel rhoncus odio dapibus vel. Aenean efficitur cursus est nec ornare. Mauris nec turpis hendrerit, tempus nibh eget, commodo quam.

    Duis rhoncus eleifend turpis, id efficitur magna tempor quis. Praesent efficitur turpis nec lacus convallis, quis feugiat lectus tempor. Curabitur condimentum, justo et blandit sagittis, dui odio euismod lorem, accumsan maximus sem erat gravida justo. Aliquam venenatis, dolor vel pulvinar vehicula, dui nulla gravida nisl, sit amet consequat quam libero vitae ex. Nulla porttitor, nunc tristique tristique ullamcorper, tellus nunc maximus libero, eget pharetra diam dolor ut metus. Sed eget placerat metus, non maximus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate nulla sit amet ipsum aliquet malesuada. Sed sapien lacus, finibus in ultricies at, feugiat eget est. Pellentesque vitae neque nulla. Maecenas vulputate libero sit amet ex facilisis auctor. Etiam eget nisl eu magna accumsan suscipit. Maecenas nec sollicitudin erat.

    Integer sit amet pharetra neque, at posuere magna. Vestibulum erat justo, scelerisque sit amet orci in, porta dapibus lorem. Vivamus cursus sem quis viverra consequat. Donec in tellus eget nisl tincidunt ornare sed nec lorem. Sed congue justo id ligula luctus sodales. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ante lorem, porttitor sed mauris sed, venenatis euismod turpis."
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
      let icDrawer = document.querySelector("ic-drawer#drawer-1");
      function expandDrawer() {
        icDrawer.expanded = !icDrawer.expanded;
      }
    </script>`,
  name: "Manual trigger long content top",
};

export const ManualTriggerLongContentBottom = {
  render: () => html` <ic-button onclick="expandDrawer()" style="margin: 16px;"
      >Open drawer</ic-button
    >
    <ic-drawer
      id="drawer-1"
      trigger="controlled"
      position="bottom"
      heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper arcu tortor, sit amet ornare nunc faucibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ullamcorper tortor sit amet urna dapibus laoreet. Proin eu tellus condimentum felis dictum euismod. Cras velit nunc, feugiat at euismod id, placerat vel dolor. Morbi sodales nisl in libero viverra convallis. Vestibulum sit amet nisi nunc. Phasellus nec sodales nisl. Nam tristique justo mauris, vel rhoncus odio dapibus vel. Aenean efficitur cursus est nec ornare. Mauris nec turpis hendrerit, tempus nibh eget, commodo quam.

    Duis rhoncus eleifend turpis, id efficitur magna tempor quis. Praesent efficitur turpis nec lacus convallis, quis feugiat lectus tempor. Curabitur condimentum, justo et blandit sagittis, dui odio euismod lorem, accumsan maximus sem erat gravida justo. Aliquam venenatis, dolor vel pulvinar vehicula, dui nulla gravida nisl, sit amet consequat quam libero vitae ex. Nulla porttitor, nunc tristique tristique ullamcorper, tellus nunc maximus libero, eget pharetra diam dolor ut metus. Sed eget placerat metus, non maximus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate nulla sit amet ipsum aliquet malesuada. Sed sapien lacus, finibus in ultricies at, feugiat eget est. Pellentesque vitae neque nulla. Maecenas vulputate libero sit amet ex facilisis auctor. Etiam eget nisl eu magna accumsan suscipit. Maecenas nec sollicitudin erat.

    Integer sit amet pharetra neque, at posuere magna. Vestibulum erat justo, scelerisque sit amet orci in, porta dapibus lorem. Vivamus cursus sem quis viverra consequat. Donec in tellus eget nisl tincidunt ornare sed nec lorem. Sed congue justo id ligula luctus sodales. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ante lorem, porttitor sed mauris sed, venenatis euismod turpis."
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
      let icDrawer = document.querySelector("ic-drawer#drawer-1");
      function expandDrawer() {
        icDrawer.expanded = !icDrawer.expanded;
      }
    </script>`,
  name: "Manual trigger long content bottom",
};

export const ContainedWithinParent = {
  render: () =>
    html` <div>
      <div style="display: flex; flex-direction: column;">
        <ic-top-navigation
          app-title="Déja-brew"
          status="alpha"
          version="v0.0.7"
          content-aligned="center"
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
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
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
          </ic-navigation-group>
        </ic-top-navigation>
        <main style="min-height: 100vh; position: relative;">
          <ic-drawer
            heading="Roasted coffee"
            message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
            position="right"
            boundary="parent"
            style="--ic-z-index-drawer: 211;"
          >
            <svg
              style="width: var(--ic-space-lg); height: var(--ic-space-lg);"
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
          <ic-section-container aligned="center">
            <ic-typography
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
              id, efficitur nec leo.</ic-typography
            >
            <br />
            <div
              style="width: 100%; height: 30rem; position: relative; border: 1px solid lightgrey;"
            >
              <ic-drawer
                heading="Roasted coffee"
                message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
                position="left"
                boundary="parent"
              >
                <svg
                  style="width: var(--ic-space-lg); height: var(--ic-space-lg);"
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
            <br />
            <div
              style="width: 100%; height: 30rem; position: relative; border: 1px solid lightgrey;"
            >
              <ic-button onclick="expandDrawer()" style="margin: 16px;"
                >Open drawer</ic-button
              >
              <ic-drawer
                position="left"
                id="drawer-1"
                trigger="controlled"
                boundary="parent"
                heading="Roasted coffee"
                message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
              >
              </ic-drawer>
              <script>
                let icDrawer = document.querySelector("ic-drawer#drawer-1");
                function expandDrawer() {
                  icDrawer.expanded = !icDrawer.expanded;
                }
              </script>
            </div>
          </ic-section-container>
        </main>
      </div>
      <ic-footer
        aligned="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback,
            please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      ></ic-footer>
    </div>`,
  name: "Contained within parent",
};

export const ContainedWithinParentManualTrigger = {
  render: () => html`<div
      style="display: flex; flex-direction: column; align-items: stretch; height: 100vh;"
    >
      <div style="display: flex;">
        <ic-button onclick="expandRightDrawer()" style="margin: 16px;"
          >Toggle right drawer</ic-button
        >
        <ic-button onclick="expandLeftDrawer()" style="margin: 16px;"
          >Toggle left drawer</ic-button
        >
        <ic-button onclick="expandTopDrawer()" style="margin: 16px;"
          >Toggle top drawer</ic-button
        >
        <ic-button onclick="expandBottomDrawer()" style="margin: 16px;"
          >Toggle bottom drawer</ic-button
        >
      </div>
      <div
        style="position: relative; display: flex; border: 1px solid lightgrey; flex: 1; margin: 16px;"
      >
        <ic-drawer
          id="drawer-right"
          trigger="controlled"
          heading="Roasted coffee"
          boundary="parent"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
        >
        </ic-drawer>
        <ic-drawer
          position="left"
          id="drawer-left"
          trigger="controlled"
          heading="Roasted coffee"
          boundary="parent"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
        >
        </ic-drawer>
        <ic-drawer
          position="top"
          id="drawer-top"
          trigger="controlled"
          heading="Roasted coffee"
          boundary="parent"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
        >
        </ic-drawer>
        <ic-drawer
          position="bottom"
          id="drawer-bottom"
          trigger="controlled"
          heading="Roasted coffee"
          boundary="parent"
          message="Contrary to popular belief, light roast coffee has more caffeine than dark roast coffee. The longer coffee is roasted, the more caffeine is lost through the cooking of the bean. Light roast coffee is a light brown colour and has no oil on the surface of the beans, and these coffees typically have a crisp acidity, a mellow body, and bright flavours."
        >
        </ic-drawer>
      </div>
    </div>
    <script>
      const icDrawerRight = document.querySelector("#drawer-right");
      const icDrawerLeft = document.querySelector("#drawer-left");
      const icDrawerTop = document.querySelector("#drawer-top");
      const icDrawerBottom = document.querySelector("#drawer-bottom");
      function expandRightDrawer() {
        icDrawerRight.expanded = !icDrawerRight.expanded;
      }
      function expandLeftDrawer() {
        icDrawerLeft.expanded = !icDrawerLeft.expanded;
      }
      function expandTopDrawer() {
        icDrawerTop.expanded = !icDrawerTop.expanded;
      }
      function expandBottomDrawer() {
        icDrawerBottom.expanded = !icDrawerBottom.expanded;
      }
    </script>`,
  name: "Contained within parent manual trigger",
};

export const Playground = {
  render: (args) => html`<div style="display:flex;">
      <ic-side-navigation app-title="Déja-brew" version="v0.0.7" status="BETA">
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
              hide-label="true"
              id="page-header-search-bar"
              characters-until-suggestion="1"
              slot="input"
              label="What is your favourite coffee?"
            ></ic-search-bar>
          </ic-page-header>
          <ic-section-container id="top-target">
            ${args.trigger === "controlled"
              ? html`<ic-card-horizontal heading="Roasted coffee" size="large">
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
                      d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                    />
                  </svg>
                  <svg
                    slot="image"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1600 900"
                  >
                    <rect fill="#ff7700" width="1600" height="1600" y="-350" />
                    <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
                    <polygon
                      fill="#aa0000"
                      points="957 450 872.9 900 1396 900"
                    />
                    <polygon fill="#c50022" points="-60 900 398 662 816 900" />
                    <polygon fill="#a3001b" points="337 900 398 662 816 900" />
                    <polygon
                      fill="#be0044"
                      points="1203 546 1552 900 876 900"
                    />
                    <polygon
                      fill="#9c0036"
                      points="1203 546 1552 900 1162 900"
                    />
                    <polygon fill="#b80066" points="641 695 886 900 367 900" />
                    <polygon fill="#960052" points="587 900 641 695 886 900" />
                    <polygon
                      fill="#b10088"
                      points="1710 900 1401 632 1096 900"
                    />
                    <polygon
                      fill="#8f006d"
                      points="1710 900 1401 632 1365 900"
                    />
                    <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
                    <polygon fill="#880088" points="943 900 1210 900 971 687" />
                  </svg>
                  <div
                    style="display: flex; gap: var(--ic-space-xs); padding: var(--ic-space-xs)"
                    slot="message"
                  >
                    <ic-button variant="secondary" onclick="expandDrawer()"
                      >Learn more</ic-button
                    ><ic-button>Add to order</ic-button>
                  </div>
                </ic-card-horizontal>`
              : ""}
            <ic-typography
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum venenatis facilisis. Nam tortor felis, auctor vel ante
              quis, tempor interdum libero. In dictum sodales velit, eu egestas
              arcu dignissim ac. Aliquam facilisis eros dolor, id laoreet orci
              sagittis ut. Sed tempus, lacus in pretium molestie, lectus magna
              interdum risus, vel fringilla libero ex eu dui. Suspendisse
              ullamcorper vehicula lacinia. Phasellus congue velit nisl, vitae
              congue ligula rutrum id. <br /><br />
              Etiam in suscipit metus. Duis semper, sapien a molestie semper, ex
              nibh porttitor tellus, vel molestie justo odio vel purus.
              Curabitur porttitor, tortor sed semper sollicitudin, odio odio
              congue tortor, eget pulvinar tellus nisl ac lacus. In ultricies
              commodo lorem, a laoreet diam. Ut a mauris at tellus tincidunt
              ullamcorper sit amet in metus. Aenean facilisis placerat dictum.
              Phasellus mattis ante sollicitudin luctus iaculis. Nam porttitor
              lobortis rhoncus. Nam nec malesuada purus, at pulvinar mauris. Nam
              non lorem ante.<br /><br />
              Donec aliquam eget mauris condimentum cursus. Nullam tempus a urna
              in commodo. Proin mauris augue, viverra id finibus id, vulputate
              in ante. Aliquam volutpat hendrerit tellus vitae tristique. Donec
              pellentesque enim arcu, at feugiat mauris venenatis vitae. Sed
              iaculis ut elit et ultrices. Donec diam eros, iaculis ac est nec,
              tempus feugiat nisl. Suspendisse eget interdum lorem. Phasellus
              pretium urna id elit pharetra hendrerit.</ic-typography
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
          <ic-drawer
            id="playground-example"
            chevron-button-aria-label=${args.chevronButtonAriaLabel}
            close-button-aria-label=${args.closeButtonAriaLabel}
            close-on-backdrop-click=${args.closeOnBackdropClick}
            expanded=${args.expanded}
            heading=${args.heading}
            message=${args.message}
            position=${args.position}
            size=${args.size}
            show-close-button=${args.showCloseButton}
            trigger=${args.trigger}
          >
            <ic-button variant="secondary" slot=${args.actionsSlot}
              >Secondary action</ic-button
            >
            <ic-button slot=${args.actionsSlot}>Primary action</ic-button>
          </ic-drawer>
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
        background-color:var(--ic-theme-primary);color:var(--ic-theme-text);"
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
      let drawer = document.querySelector("ic-drawer#playground-example");
      function expandDrawer() {
        drawer.expanded = true;
      }
    </script>`,
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    actionsSlot: {
      mapping: {
        true: "actions",
        false: "",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
    position: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "radio",
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
