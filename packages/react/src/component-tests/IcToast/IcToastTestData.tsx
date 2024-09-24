import React, { useEffect, useRef } from "react";
import { IcToast, IcButton, IcToastRegion, SlottedSVG, IcLink } from "../..";

export const SimpleToast = () => {
  const toastRegionEl = useRef<any>(null);
  const toastEl = useRef<any>(null);
  const handleClick = () => {
    toastRegionEl.current.openToast = toastEl.current;
  };
  return (
    <>
      <IcButton onClick={handleClick}>Display toast</IcButton>
      <IcToastRegion ref={toastRegionEl}>
        <IcToast
          heading="Your coffee is ready"
          ref={toastEl}
          message="Please dismiss and collect"
          variant="neutral"
        />
      </IcToastRegion>
    </>
  );
};

export const SimpleAutoDismissToast = () => {
  const toastRegionEl = useRef<any>(null);
  const toastEl = useRef<any>(null);
  const handleClick = () => {
    toastRegionEl.current.openToast = toastEl.current;
  };
  return (
    <>
      <IcButton onClick={handleClick}>Display toast</IcButton>
      <IcToastRegion ref={toastRegionEl}>
        <IcToast
          heading="Your coffee is ready"
          ref={toastEl}
          message="Please dismiss and collect"
          variant="success"
          dismissMode="automatic"
          autoDismissTimeout={100}
        />
      </IcToastRegion>
    </>
  );
};

export const SlottedActionToast = () => {
  const toastRegionEl = useRef<any>(null);
  const toastEl = useRef<any>(null);
  const handleClick = () => {
    toastRegionEl.current.openToast = toastEl.current;
  };
  return (
    <>
      <IcButton id="open-toast-btn" onClick={handleClick}>
        Display toast
      </IcButton>
      <IcToastRegion ref={toastRegionEl}>
        <IcToast
          heading="Your coffee is ready"
          ref={toastEl}
          message="Please dismiss and collect"
          variant="success"
        >
          <IcButton id="test-button" slot="action">
            Test
          </IcButton>
        </IcToast>
      </IcToastRegion>
    </>
  );
};

export const SlottedLinkToast = () => {
  const toastRegionEl = useRef<any>(null);
  const toastEl = useRef<any>(null);
  const handleClick = () => {
    toastRegionEl.current.openToast = toastEl.current;
  };
  return (
    <>
      <IcButton id="open-toast-btn" onClick={handleClick}>
        Display toast
      </IcButton>
      <IcToastRegion ref={toastRegionEl}>
        <IcToast
          heading="Your coffee is ready"
          ref={toastEl}
          message="Please dismiss and collect"
          variant="success"
        >
          <IcLink href="/" slot="action" appearance="light">
            Test
          </IcLink>
        </IcToast>
      </IcToastRegion>
    </>
  );
};

export const SlottedActionAutoDismissToast = () => {
  const toastRegionEl = useRef<any>(null);
  const toastEl = useRef<any>(null);
  const handleClick = () => {
    toastRegionEl.current.openToast = toastEl.current;
  };
  return (
    <>
      <IcButton id="open-toast-btn" onClick={handleClick}>
        Display toast
      </IcButton>
      <IcToastRegion ref={toastRegionEl}>
        <IcToast
          heading="Your coffee is ready"
          ref={toastEl}
          message="Please dismiss and collect"
          variant="success"
          dismissMode="automatic"
        >
          <IcButton id="test-button" slot="action">
            Test
          </IcButton>
        </IcToast>
      </IcToastRegion>
    </>
  );
};

export const SlottedIconToast = () => {
  const toastRegionEl = useRef<any>(null);
  const toastEl = useRef<any>(null);
  const handleClick = () => {
    toastRegionEl.current.openToast = toastEl.current;
  };
  return (
    <>
      <IcButton onClick={handleClick}>Display toast</IcButton>
      <IcToastRegion ref={toastRegionEl}>
        <IcToast
          heading="Your coffee is ready"
          ref={toastEl}
          message="Please dismiss and collect"
        >
          <SlottedSVG
            slot="neutral-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z" />
          </SlottedSVG>
        </IcToast>
      </IcToastRegion>
    </>
  );
};

export const HeadingOnlyToast = () => {
  const toastRegionEl = useRef<any>(null);
  const toastEl = useRef<any>(null);
  const handleClick = () => {
    toastRegionEl.current.openToast = toastEl.current;
  };
  return (
    <>
      <IcButton onClick={handleClick}>Display toast</IcButton>
      <IcToastRegion ref={toastRegionEl}>
        <IcToast heading="Your coffee is ready" ref={toastEl} />
      </IcToastRegion>
    </>
  );
};

export const MultilineMessageToast = () => {
  const toastRegionEl = useRef<any>(null);
  const toastEl = useRef<any>(null);
  const handleClick = () => {
    toastRegionEl.current.openToast = toastEl.current;
  };
  return (
    <>
      <IcButton onClick={handleClick}>Display toast</IcButton>
      <IcToastRegion ref={toastRegionEl}>
        <IcToast
          heading="Your coffee is ready"
          ref={toastEl}
          message="Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Don't delay! We wouldn't want you to lose out on your fantastic coffee now would we?"
        />
      </IcToastRegion>
    </>
  );
};

export const DismissAriaLabelToast = () => {
  const toastRegionEl = useRef<any>(null);
  const toastEl = useRef<any>(null);
  const handleClick = () => {
    toastRegionEl.current.openToast = toastEl.current;
  };
  return (
    <>
      <IcButton onClick={handleClick}>Display toast</IcButton>
      <IcToastRegion ref={toastRegionEl}>
        <IcToast
          heading="Your coffee is ready"
          ref={toastEl}
          message="Please dismiss and collect"
          variant="neutral"
          dismissButtonAriaLabel="dismiss me"
        />
      </IcToastRegion>
    </>
  );
};

export const AutoLoadToast = (): JSX.Element => {
  const toastRegionEl = useRef<HTMLIcToastRegionElement>(null);
  const shareToastEl = useRef<HTMLIcToastElement>(null);

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
