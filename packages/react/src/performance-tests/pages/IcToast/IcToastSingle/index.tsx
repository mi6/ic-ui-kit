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

  return (
    <IcToastRegion ref={toastRegionEl}>
      <IcToast
        heading="My toast heading"
        message="The toast message."
        ref={shareToastEl}
        onIcDismiss={() => console.log("Toast dismissed")}
      />
    </IcToastRegion>
  );
};

const IcToastPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <AutoLoadToast />
    </IcTheme>
  );
};

export default IcToastPage;
