import React, { ReactElement } from "react";
import { IcLoadingIndicator } from "../../components";

export const IndeterminateCircularLoadingIndWithLabel = (): ReactElement => (
  <IcLoadingIndicator label="Loading..."></IcLoadingIndicator>
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
    />
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      label="Default"
      theme="dark"
    />
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      label="Large"
      size="large"
      theme="dark"
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
    />
  </div>
);

export const DeterminateLinearLightLoadingIndSizeDefaultLargeFull = (args: {
  progress: number;
  min: number;
  max: number;
}): ReactElement => (
  <div style={{ display: "grid", gap: "50px", backgroundColor: "#2d2d2d" }}>
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      label="Default"
      type="linear"
      theme="dark"
    />
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      label="Large"
      size="large"
      type="linear"
      theme="dark"
    />
    <IcLoadingIndicator
      progress={args.progress}
      min={args.min}
      max={args.max}
      label="Full-width"
      type="linear"
      fullWidth={true}
      theme="dark"
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
