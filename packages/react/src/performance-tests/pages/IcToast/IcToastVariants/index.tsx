// IcToastVariantsPage displays multiple variants of the toast component for performance testing of the IcToast component.
import React, { useRef, useEffect } from "react";
import {
  IcToast,
  IcToastRegion,
  IcButton,
  IcTheme,
} from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const IcToastVariantsPage: React.FC<PageProps> = ({ theme }) => {
  const toastRegionEl = useRef<HTMLIcToastRegionElement | null>(null);
  const toastEl = useRef<HTMLIcToastElement | null>(null);
  const errorToastEl = useRef<HTMLIcToastElement | null>(null);
  const successToastEl = useRef<HTMLIcToastElement | null>(null);
  const infoToastEl = useRef<HTMLIcToastElement | null>(null);
  const warningToastEl = useRef<HTMLIcToastElement | null>(null);
  const neutralToastEl = useRef<HTMLIcToastElement | null>(null);
  const autoDismissToastEl = useRef<HTMLIcToastElement | null>(null);
  const multiLineMessageToastEl = useRef<HTMLIcToastElement | null>(null);

  const queueIndex = useRef(0);
  const toastQueue = [
    toastEl,
    errorToastEl,
    successToastEl,
    infoToastEl,
    warningToastEl,
    neutralToastEl,
    autoDismissToastEl,
    multiLineMessageToastEl,
  ];

  useEffect(() => {
    if (toastRegionEl.current && toastQueue[0].current) {
      toastRegionEl.current.openToast = toastQueue[0].current;
    }
  }, []);

  const handleDismiss = () => {
    queueIndex.current += 1;
    if (
      queueIndex.current < toastQueue.length &&
      toastRegionEl.current &&
      toastQueue[queueIndex.current]
    ) {
      toastQueue[queueIndex.current].current.setVisible();
    }
  };

  const handleDefaultToastDismiss = () => {
    console.log("Default toast dismissed");
    handleDismiss();
  };
  const handleErrorToastDismiss = () => {
    console.log("Error toast dismissed");
    handleDismiss();
  };
  const handleSuccessToastDismiss = () => {
    console.log("Success toast dismissed");
    handleDismiss();
  };
  const handleInfoToastDismiss = () => {
    console.log("Info toast dismissed");
    handleDismiss();
  };
  const handleWarningToastDismiss = () => {
    console.log("Warning toast dismissed");
    handleDismiss();
  };
  const handleNeutralToastDismiss = () => {
    console.log("Neutral toast dismissed");
    handleDismiss();
  };
  const handleAutoDismissToastDismiss = () => {
    console.log("Auto dismiss toast dismissed");
    handleDismiss();
  };
  const handleMultiLineMessageToastDismiss = () => {
    console.log("Multiline message toast dismissed");
    handleDismiss();
  };

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcToastRegion ref={toastRegionEl}>
        <IcToast
          heading="Your coffee is ready"
          ref={toastEl}
          onIcDismiss={handleDefaultToastDismiss}
        />
        <IcToast
          heading="There is no coffee left"
          variant="error"
          ref={errorToastEl}
          onIcDismiss={handleErrorToastDismiss}
        >
          <IcButton slot="action" size="small">
            Retry
          </IcButton>
        </IcToast>
        <IcToast
          heading="Your coffee is ready"
          message="Please dismiss and collect"
          variant="success"
          ref={successToastEl}
          onIcDismiss={handleSuccessToastDismiss}
        />
        <IcToast
          heading="Your coffee is ready"
          message="Please dismiss and collect"
          variant="info"
          ref={infoToastEl}
          onIcDismiss={handleInfoToastDismiss}
        />
        <IcToast
          heading="Coffee is running low"
          variant="warning"
          dismissButtonAriaLabel="Dismiss me"
          ref={warningToastEl}
          onIcDismiss={handleWarningToastDismiss}
        />
        <IcToast
          heading="Your coffee is on the way"
          variant="neutral"
          neutralIconAriaLabel="Your coffee is being prepared"
          ref={neutralToastEl}
          onIcDismiss={handleNeutralToastDismiss}
        >
          <SlottedSVG slot="neutral-icon">
            <title>coffee-outline</title>
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
          </SlottedSVG>
        </IcToast>
        <IcToast
          heading="Your coffee is ready"
          dismissMode="automatic"
          autoDismissTimeout={10000}
          ref={autoDismissToastEl}
          onIcDismiss={handleAutoDismissToastDismiss}
        />
        <IcToast
          heading="Your coffee is ready"
          message="Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Don't delay! We wouldn't want you to lose out on your fantastic coffee now would we?"
          ref={multiLineMessageToastEl}
          onIcDismiss={handleMultiLineMessageToastDismiss}
        />
      </IcToastRegion>
    </IcTheme>
  );
};

export default IcToastVariantsPage;
