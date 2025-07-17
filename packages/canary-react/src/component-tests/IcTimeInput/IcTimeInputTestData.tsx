import React, { useState } from "react";
import { IcTimeInput } from "../../components";
import { IcTypography, IcLink, IcButton } from "@ukic/react";

export const DefaultTimeInput = () => {
  return (
    <IcTimeInput label="What time would you like to collect your coffee?" />
  );
};

export const DarkThemeTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      theme="dark"
    />
  );
};

export const ValueTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      value="13:45:00"
    />
  );
};

export const DateObjectTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      value={new Date("2025-07-14T15:30:45")}
    />
  );
};

export const ZuluTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      value="15:30:45Z"
    />
  );
};

export const HideLabelTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      hideLabel
    />
  );
};

export const RequiredTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      required
    />
  );
};

export const DisabledTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      disabled
    />
  );
};

export const SmallTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      size="small"
    />
  );
};

export const LargeTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      size="large"
    />
  );
};

export const CustomHelperTextTimeInput = () => {
  return (
    <>
      <IcTimeInput
        label="What time would you like to collect your coffee?"
        helperText="Please select a time that works for you."
      />
      <br />
      <IcTimeInput label="What time would you like to collect your coffee?">
        <IcTypography variant="caption" slot="helper-text">
          <span>
            For special requests,
            <IcLink href="#">contact us</IcLink> before choosing a time
          </span>
        </IcTypography>
      </IcTimeInput>
    </>
  );
};

export const HideHelperTextTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      hideHelperText
    />
  );
};

export const ValidationStatusTimeInput = () => {
  return (
    <>
      <IcTimeInput
        label="What time would you like to collect your coffee?"
        validationStatus="error"
        validationText="There is no coffee. Please choose a different time."
      />
      <br />
      <IcTimeInput
        label="What time would you like to collect your coffee?"
        validationStatus="warning"
        validationText="There may be a coffee shortage at that time."
      />
      <br />
      <IcTimeInput
        label="What time would you like to collect your coffee?"
        validationStatus="success"
        validationText="Your coffee will be available at this time."
      />
    </>
  );
};

export const TimePeriodTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      timePeriod="12"
    />
  );
};

export const HHMMTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      timeFormat="HH:MM"
    />
  );
};

export const MinTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      min="08:00:00"
    />
  );
};

export const MaxTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      max="16:00:00"
    />
  );
};

export const DisableTimesTimeInput = () => {
  return (
    <IcTimeInput
      label="What time would you like to collect your coffee?"
      disableTimes={[{ start: "08:00:00", end: "10:00:00" }, "13:20:00"]}
    />
  );
};

export const ClearingValueTimeInput = () => {
  const [value, setValue] = useState<string>("08:30:00");
  const handleUpdate = () => {
    setValue("08:30:00");
  };
  const handleClearValue = (value: string | null | undefined) => {
    setValue(value);
  };
  return (
    <>
      <IcTimeInput
        label="When would you like to collect your coffee?"
        value={value}
      />
      <br />
      <div style={{ display: "flex", gap: "8px" }}>
        <IcButton onClick={() => handleUpdate()}>Update time</IcButton>
        <IcButton id="update-null" onClick={() => handleClearValue(null)}>
          Set null
        </IcButton>
        <IcButton id="update-empty" onClick={() => handleClearValue("")}>
          Set Empty String
        </IcButton>
        <IcButton
          id="update-undefined"
          onClick={() => handleClearValue(undefined)}
        >
          Set undefined
        </IcButton>
      </div>
    </>
  );
};
