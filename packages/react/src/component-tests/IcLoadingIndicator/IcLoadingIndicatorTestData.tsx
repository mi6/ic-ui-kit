import React, { ReactElement, useRef } from "react";
import {
  IcButton,
  IcDialog,
  IcLoadingIndicator,
  IcTypography,
} from "../../components";
import { IcLoadingSizes } from "@ukic/web-components";

export const IndeterminateCircularLoadingIndWithLabel = (): ReactElement => (
  <IcLoadingIndicator label="Loading..."></IcLoadingIndicator>
);

export const DeterminateLinearLoadingIndicatorZeroProgress = (args: {
  progress: number;
  min: number;
  max: number;
}): ReactElement => (
  <IcLoadingIndicator
    progress={args.progress}
    min={args.min}
    max={args.max}
    label="Small"
    size="small"
    type="linear"
  />
);

export const DeterminateCircularLoadingIndicatorZeroProgress = (args: {
  progress: number;
  min: number;
  max: number;
}): ReactElement => (
  <IcLoadingIndicator
    progress={args.progress}
    min={args.min}
    max={args.max}
    label="Small"
    size="small"
    type="circular"
  />
);

export const DeterminateCircularLoadingIndWithLabelSizeSmallDefaultLarge =
  (args: { progress: number; min: number; max: number }): ReactElement => (
    <div style={{ display: "grid", gap: "50px" }}>
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Small"
        size="small"
      />
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Default"
      />
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Large"
        size="large"
      />
    </div>
  );

export const DeterminateCircularLoadingIndWithIcon = (args: {
  progress: number;
  min: number;
  max: number;
}): ReactElement => (
  <IcLoadingIndicator
    size="icon"
    progress={args.progress}
    min={args.min}
    max={args.max}
  />
);

export const DeterminateLinearLoadingIndWithLabelSizeSmallDefaultLargeFull =
  (args: { progress: number; min: number; max: number }): ReactElement => (
    <div style={{ display: "grid", gap: "50px" }}>
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Small"
        size="small"
        type="linear"
      />
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Default"
        type="linear"
      />
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Large"
        size="large"
        type="linear"
      />
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Full-width"
        size="medium"
        type="linear"
        fullWidth={true}
      />
    </div>
  );

export const DeterminateCircularLightLoadingIndSizeSmallDefaultLarge = (args: {
  progress: number;
  min: number;
  max: number;
}): ReactElement => (
  <div style={{ display: "grid", gap: "50px", backgroundColor: "#2d2d2d" }}>
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      label="Small"
      size="small"
      theme="dark"
      monochrome
    />
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      label="Default"
      theme="dark"
      monochrome
    />
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      label="Large"
      size="large"
      theme="dark"
      monochrome
    />
  </div>
);

export const DeterminateCircularLightLoadingIndIconNoLabel = (args: {
  progress: number;
  min: number;
  max: number;
}): ReactElement => (
  <div style={{ backgroundColor: "#2d2d2d" }}>
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      size="icon"
      theme="dark"
      monochrome
    />
  </div>
);

export const DarkModeColours = (): ReactElement => (
  <div
    style={{
      display: "grid",
      gap: "50px",
      backgroundColor: "var(--ic-color-page-background-dark)",
    }}
  >
    <IcLoadingIndicator
      progress={30}
      min={0}
      max={100}
      label="Circular"
      type="linear"
      theme="dark"
    />
    <IcLoadingIndicator
      progress={30}
      min={0}
      max={100}
      size="icon"
      theme="dark"
    />
    <IcLoadingIndicator
      progress={30}
      min={0}
      max={100}
      label="Linear"
      theme="dark"
    />
  </div>
);

export const LightMonochrome = (): ReactElement => (
  <div style={{ display: "grid", gap: "50px" }}>
    <IcLoadingIndicator
      progress={30}
      min={0}
      max={100}
      label="Circular"
      type="linear"
      monochrome
    />
    <IcLoadingIndicator
      progress={30}
      min={0}
      max={100}
      size="icon"
      monochrome
    />
    <IcLoadingIndicator
      progress={30}
      min={0}
      max={100}
      label="Linear"
      monochrome
    />
  </div>
);

export const DeterminateLinearLightLoadingIndSizeDefaultLargeFull = (args: {
  progress: number;
  min: number;
  max: number;
}): ReactElement => (
  <div
    style={{
      display: "grid",
      gap: "50px",
      backgroundColor: "var(--ic-color-page-background-dark)",
    }}
  >
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      label="Default"
      type="linear"
      theme="dark"
      monochrome
    />
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      label="Large"
      size="large"
      type="linear"
      theme="dark"
      monochrome
    />
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      label="Full-width"
      type="linear"
      fullWidth={true}
      theme="dark"
      monochrome
    />
  </div>
);

export const DeterminateLoadingIndWithNameNoLabel = (args: {
  progress: number;
  min: number;
  max: number;
}): ReactElement => (
  <div style={{ display: "grid", gap: "50px" }}>
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      description="Loading"
    />
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      description="Loading"
      type="linear"
    />
  </div>
);

export const DeterminateCircularLoadingIndWithInnerLabel = (args: {
  progress: number;
  min: number;
  max: number;
}): ReactElement => (
  <IcLoadingIndicator
    size="small"
    inner-label="3"
    progress={args.progress}
    min={args.min}
    max={args.max}
  />
);

export const IndeterminateCircularLoadingIndE2EWithDuration =
  (): ReactElement => (
    <IcLoadingIndicator
      label={["First label", "Second label", "Third label"]}
      labelDuration={250}
    />
  );

export const LoadingIndicatorInDialog = (args: {
  size?: IcLoadingSizes;
  style?: object;
}): ReactElement => {
  const dialogEl = useRef<HTMLIcDialogElement>(null);
  const handleClick = () => {
    dialogEl.current.open = true;
  };
  return (
    <>
      <IcButton onClick={handleClick}>Display dialog</IcButton>
      <IcDialog
        ref={dialogEl}
        heading="This is a default dialog"
        label="Dialog"
      >
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
        <IcLoadingIndicator
          label="Loading..."
          size={args.size}
          style={args.style}
          progress={30}
        />
      </IcDialog>
    </>
  );
};
