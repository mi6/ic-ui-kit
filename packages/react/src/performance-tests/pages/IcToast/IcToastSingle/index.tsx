// IcToastSinglePage displays a single toast component for performance testing of the IcToast component.
import React, { useEffect, useRef } from "react";
import { IcToastRegion, IcToast, IcTheme } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const AutoLoadToast = () => {
  const toastRegionEl = useRef(null);
  const shareToastEl = useRef(null);

  useEffect(() => {
    if (toastRegionEl.current && shareToastEl.current) {
      toastRegionEl.current.openToast = shareToastEl.current;
    }
  }, []);

  const handleToastDismiss = () => {
    console.log("Toast dismissed");
  };

  return (
    <IcToastRegion ref={toastRegionEl}>
      <IcToast
        heading="My toast heading"
        message="The toast message."
        ref={shareToastEl}
        onIcDismiss={handleToastDismiss}
      />
    </IcToastRegion>
  );
};

const IcToastSinglePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <AutoLoadToast />
    </IcTheme>
  );
};

export default IcToastSinglePage;
