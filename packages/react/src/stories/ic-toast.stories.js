/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable sonarjs/no-duplicate-string */
import React, { useEffect, useRef } from "react";
import {
  IcButton,
  IcLink,
  IcToast,
  IcToastRegion,
  IcTypography,
} from "../components";

const AutoLoadToast = () => {
  const toastRegionEl = useRef(null);
  const shareToastEl = useRef(null);

  useEffect(() => {
    if (toastRegionEl.current && shareToastEl.current) {
      toastRegionEl.current.openToast = shareToastEl.current;
    }
  }, []);

  return (
    <IcToastRegion ref={toastRegionEl}>
      <IcToast heading="My toast heading" ref={shareToastEl} />
    </IcToastRegion>
  );
};

const defaultArgs = {
  autoDismissTimeout: 5000,
  dismissButtonAriaLabel: "dismiss",
  dismissMode: "manual",
  heading: "This is the heading",
  message: "This is the message",
  neutralIconAriaLabel: "",
  variant: "neutral",
  actionSlot: "action",
  neutralIconSlot: "neutral-icon",
};

export default {
  title: "Toast",
  component: IcToast,
};

export const Default = {
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast =
        document.getElementById("toast1");
    }

    return (
      <>
        <button onClick={func}>Display toast</button>
        <IcToastRegion>
          <IcToast id="toast1" heading="Your coffee is ready" />
        </IcToastRegion>
      </>
    );
  },

  name: "Default",
};

export const WithVariant = {
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast =
        document.getElementById("toast1");
    }

    return (
      <>
        <button onClick={func}>Display toast</button>
        <IcToastRegion>
          <IcToast
            id="toast1"
            heading="Your coffee is ready"
            message="Please dismiss and collect"
            variant="success"
          />
        </IcToastRegion>
      </>
    );
  },

  name: "With variant",
};

export const MultilineMessage = {
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast =
        document.getElementById("toast1");
    }

    return (
      <>
        <button onClick={func}>Display toast</button>
        <IcToastRegion>
          <IcToast
            id="toast1"
            heading="Your coffee is ready"
            message="Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Don't delay! We wouldn't want you to lose out on your fantastic coffee now would we?"
          />
        </IcToastRegion>
      </>
    );
  },

  name: "Multiline message",
};

export const SlottedActionElements = {
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast =
        document.getElementById("toast1");
    }

    function func2() {
      document.querySelector("ic-toast-region").openToast =
        document.getElementById("toast2");
    }

    return (
      <>
        <button onClick={func}>Display toast 1</button>
        <button onClick={func2}>Display toast 2</button>
        <IcToastRegion>
          <IcToast
            id="toast1"
            heading="Your coffee had issues"
            message="Please dismiss and try again"
            variant="warning"
          >
            <IcButton slot="action" appearance="light">
              Click Me
            </IcButton>
          </IcToast>
          <IcToast
            id="toast2"
            heading="Your coffee was lost"
            message="Please dismiss and try again"
            variant="error"
          >
            <IcLink slot="action" href="/" theme="dark">
              Click Me
            </IcLink>
          </IcToast>
        </IcToastRegion>
      </>
    );
  },

  name: "Slotted action elements",
};

export const AutoDismiss = {
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast =
        document.getElementById("toast1");
    }

    return (
      <>
        <button onClick={func}>Display toast</button>
        <IcToastRegion>
          <IcToast
            id="toast1"
            heading="Your coffee is ready"
            message="This alert will dismiss itself, please collect your java"
            variant="info"
            dismissMode="automatic"
            autoDismissTimeout={10000}
          />
        </IcToastRegion>
      </>
    );
  },

  name: "Auto dismiss",
};

export const CustomNeutralIcon = {
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast =
        document.getElementById("toast1");
    }

    return (
      <>
        <button onClick={func}>Display toast</button>
        <IcToastRegion>
          <IcToast
            id="toast1"
            heading="Your coffee is ready"
            message="Please dismiss and collect"
            variant="neutral"
            neutralIconAltText="Hello world"
          >
            <svg
              slot="neutral-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z" />
            </svg>
          </IcToast>
        </IcToastRegion>
      </>
    );
  },

  name: "Custom neutral icon",
};

export const ExampleOnPage = {
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast =
        document.getElementById("toast1");
    }

    return (
      <>
        <IcToastRegion>
          <IcToast id="toast1" heading="Your coffee is ready" />
        </IcToastRegion>
        <div
          id="header"
          style={{
            width: "100%",
            height: "80px",
            backgroundColor: "#23508e",
            color: "var(--ic-architectural-white)",
          }}
        >
          <IcTypography variant="h1">Header</IcTypography>
        </div>
        <div id="topPageEl">
          <IcTypography variant="h2">Top of the page</IcTypography>
        </div>
        <IcTypography variant="h3">Some content</IcTypography>
        <button onClick={func}>Display toast</button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit
          turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac
          turpis in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae
          semper lorem mollis vitae. Fusce vel blandit turpis. Nulla justo
          ligula, egestas quis rutrum id, vulputate eget diam. Integer mattis
          quis nisi id blandit. Duis nisi lectus, suscipit elementum iaculis
          sed, porta et risus.
        </p>
        <br />
        <br />
        <br />
        <IcTypography variant="h3">More content</IcTypography>
        <p>
          Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae.
          Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio
          aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu,
          blandit at enim. Pellentesque sollicitudin pellentesque tellus vel
          eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus
          nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend
          pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam
          non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum
          augue non urna tincidunt auctor in at libero. Sed in risus sit amet
          nisl tempor viverra. Phasellus maximus sapien eu erat maximus iaculis.
          Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent
          ut neque tincidunt, porta sem id, accumsan massa.
        </p>
        <br />
        <br />
        <br />
        <IcTypography variant="h3">Some other content</IcTypography>
        <p>
          Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas
          massa enim, tincidunt consequat maximus at, fermentum vel lectus.
          Curabitur at ligula tellus. Ut a elit sit amet augue sagittis feugiat.
          Mauris mi enim, viverra id turpis ac, auctor vulputate ipsum. Nunc
          efficitur volutpat augue eget sollicitudin. Pellentesque eget pharetra
          ligula. Integer finibus feugiat sapien a pulvinar. Phasellus fermentum
          est lacus, quis volutpat justo pellentesque vitae. Sed vitae diam
          porta, facilisis metus ut, dictum lorem. Proin sed bibendum libero.
          Maecenas justo neque, ultricies sed magna ac, mattis vehicula elit.
          Donec ac lacus eget sapien luctus ultricies in in nibh.
        </p>
        <p>
          Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada
          vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,
          ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra
          semper arcu nec semper. Sed non magna purus. Integer accumsan dui et
          volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,
          placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse
          semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam
          non elit in sem vestibulum molestie tempor eget augue. Sed neque
          ligula, tempus ac mollis bibendum, ultrices suscipit risus. Duis
          suscipit pulvinar varius.
        </p>
        <br />
        <br />
        <br />
        <IcTypography variant="h3">Some more</IcTypography>
        <p>
          Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis
          placerat varius dolor eget ornare. Vestibulum egestas tellus non
          tellus ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu
          libero consequat, in elementum magna ultricies. Etiam at suscipit
          odio. Duis quis quam vitae quam varius luctus. Aliquam erat volutpat.
          Fusce laoreet consectetur tortor, ac suscipit sem feugiat non. Etiam
          tempus tellus aliquet orci pretium, nec pretium nulla faucibus
        </p>
        <br />
        <br />
        <br />
        <IcTypography variant="h3">Nearly there</IcTypography>
        <p>
          Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas
          massa enim, tincidunt consequat maximus at, fermentum vel lectus.
          Curabitur at ligula tellus. Ut a elit sit amet augue sagittis feugiat.
          Mauris mi enim, viverra id turpis ac, auctor vulputate ipsum. Nunc
          efficitur volutpat augue eget sollicitudin. Pellentesque eget pharetra
          ligula. Integer finibus feugiat sapien a pulvinar. Phasellus fermentum
          est lacus, quis volutpat justo pellentesque vitae. Sed vitae diam
          porta, facilisis metus ut, dictum lorem. Proin sed bibendum libero.
          Maecenas justo neque, ultricies sed magna ac, mattis vehicula elit.
          Donec ac lacus eget sapien luctus ultricies in in nibh.
        </p>
        <p>
          Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada
          vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,
          ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra
          semper arcu nec semper. Sed non magna purus. Integer accumsan dui et
          volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,
          placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse
          semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam
          non elit in sem vestibulum molestie tempor eget augue. Sed neque
          ligula, tempus ac mollis bibendum, ultrices suscipit risus. Duis
          suscipit pulvinar varius.
        </p>
        <br />
        <br />
        <br />
        <IcTypography variant="h3">The end</IcTypography>
        <br />
      </>
    );
  },

  name: "Example on page",
};

export const DisplayOnPageLoad = {
  render: () => <AutoLoadToast />,
  name: "Display on page load",
};

export const Playground = {
  render: (args) => {
    function func() {
      document.querySelector("ic-toast-region").openToast =
        document.getElementById("toast1");
    }

    return (
      <>
        <button onClick={func}>Display toast</button>
        <IcToastRegion>
          <IcToast
            id="toast1"
            heading={args.heading}
            message={args.message}
            variant={args.variant}
            dismissMode={args.dismissMode}
            autoDismissTimeout={args.autoDismissTimeout}
            neutralIconAriaLabel={args.neutralIconAriaLabel}
            dismissButtonAriaLabel={args.dismissButtonAriaLabel}
          >
            <IcButton slot={args.actionSlot} appearance="light">
              Click me
            </IcButton>
            <svg
              slot={args.neutralIconSlot}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z" />
            </svg>
          </IcToast>
        </IcToastRegion>
      </>
    );
  },

  args: defaultArgs,

  argTypes: {
    dismissMode: {
      options: ["manual", "automatic"],

      control: {
        type: "inline-radio",
      },
    },

    variant: {
      options: ["neutral", "info", "warning", "error", "success", ""],

      control: {
        type: "select",
      },
    },

    actionSlot: {
      options: ["action", ""],

      control: {
        type: "select",
      },
    },

    neutralIconSlot: {
      options: ["neutral-icon", ""],

      control: {
        type: "select",
      },
    },
  },

  name: "Playground",
};
