import React, { useState } from "react";
import { IcTimeSelector } from "../../components";
import { IcButton } from "@ukic/react";

export const DefaultTimeSelector = () => {
  return <IcTimeSelector />;
};

export const DarkThemeTimeSelector = () => {
  return <IcTimeSelector theme="dark" />;
};

export const ValueTimeSelector = () => {
  return <IcTimeSelector value="13:45:00" />;
};

export const DateObjectTimeSelector = () => {
  return <IcTimeSelector value={new Date("2025-07-14T15:30:45")} />;
};

export const ZuluTimeSelector = () => {
  return <IcTimeSelector value="15:30:45Z" />;
};

export const SmallTimeSelector = () => {
  return <IcTimeSelector size="small" />;
};

export const LargeTimeSelector = () => {
  return <IcTimeSelector size="large" />;
};

export const TimePeriodTimeSelector = () => {
  return <IcTimeSelector timePeriod="12" />;
};

export const HHMMTimeSelector = () => {
  return <IcTimeSelector timeFormat="HH:MM" />;
};

export const MinTimeSelector = () => {
  return <IcTimeSelector min="08:00:00" />;
};

export const MaxTimeSelector = () => {
  return <IcTimeSelector max="16:00:00" />;
};

export const DisableTimesTimeSelector = () => {
  return (
    <IcTimeSelector
      disableTimes={[{ start: "08:00:00", end: "10:00:00" }, "13:20:00"]}
    />
  );
};

export const ClearingValueTimeSelector = () => {
  const [value, setValue] = useState<string>("08:30:00");
  const handleUpdate = () => {
    setValue("08:30:00");
  };
  const handleClearValue = (value: string | null | undefined) => {
    setValue(value);
  };
  return (
    <>
      <IcTimeSelector value={value} />
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
