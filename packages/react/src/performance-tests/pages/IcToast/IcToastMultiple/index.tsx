import React, { useRef, useEffect } from "react";
import { IcToast, IcToastRegion, IcTheme } from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const IcToastMultiplePage: React.FC<PageProps> = ({ theme }) => {
  const toastRegionEl = useRef<HTMLIcToastRegionElement | null>(null);
  const toastRefs = Array.from({ length: 20 }, () =>
    useRef<HTMLIcToastElement | null>(null)
  );

  const queueIndex = useRef(0);

  useEffect(() => {
    if (toastRegionEl.current && toastRefs[0].current) {
      toastRegionEl.current.openToast = toastRefs[0].current;
    }
  }, [toastRefs]);

  const handleDismiss = () => {
    queueIndex.current += 1;
    if (
      queueIndex.current < toastRefs.length &&
      toastRegionEl.current &&
      toastRefs[queueIndex.current]
    ) {
      toastRefs[queueIndex.current].current.setVisible();
    }
  };

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcToastRegion ref={toastRegionEl}>
        {toastRefs.map((ref, i) => (
          <IcToast
            key={i}
            heading="Your coffee is ready"
            ref={ref}
            onIcDismiss={() => {
              console.log(`Toast ${i + 1} dismissed`);
              handleDismiss();
            }}
          />
        ))}
      </IcToastRegion>
    </IcTheme>
  );
};

export default IcToastMultiplePage;
