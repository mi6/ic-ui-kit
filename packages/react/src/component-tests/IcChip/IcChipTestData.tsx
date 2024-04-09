import { IcButton, IcChip } from "../../";
import React, { useRef } from "react";

export const SwitchColour = () => {
  const chipEl = useRef<any>();
  return (
    <div style={{ padding: "8px", gap: "8px" }}>
      <IcChip label="Default" customColor="#F8C8DC" ref={chipEl} />
      <IcButton onClick={() => (chipEl.current.customColor = "#00008B")}>
        Switch colour
      </IcButton>
    </div>
  );
};
